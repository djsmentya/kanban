<template>
  <div>
    <h3>Board: {{ board.name }}</h3>
    <input type="text" placeholder="Add A list" v-model="listName"  @keyup.enter="add()" />
    <column v-for="(list, board) in lists" :key="index" :name="list.name" />
  </div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'
  import Column from './Column'

  export default {
    name: 'board',
    components: { Column },

    data() {
      return {
        listName: '',
        boardId: this.$route.params.id
      }
    },
    methods: {
      ...mapActions(['fetchBoards', 'fetchLists', 'createList']),

      add() {
        this.createList({ board: this.boardId, name: this.listName })
        this.listName = ''
      }
    },

    computed: {
      ...mapGetters(['getBoardLists','getBoard']),

      board() {
        return this.getBoard(parseInt(this.boardId)) || ''
      },

      lists() {
        return this.getBoardLists(this.boardId)
      }
    },

    created() {
      this.fetchBoards()
      this.fetchLists({ board: this.boardId })
    }
  }
</script>

<style>
  section {
    box-sizing: border-box;
    background-color: #eceff1;
    border-radius: 3px;
    box-shadow: 0 0 0 0.5px rgba(49,49,93,.03),
      0 2px 5px 0 rgba(49,49,93,.1),
      0 1px 2px 0 rgba(0,0,0,.08);
    margin: 1rem;
    padding: 1rem;
    width: 100%;
  }
</style>

<template>
  <div>
    <h3>Board: {{ board.name }}</h3>
    <input type="text" placeholder="Add A list" v-model="listName"  @keyup.enter="add()" />
    <column v-for="" />
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
      ...mapGetters(['getBordLists','getBoard']),

      board() {
        return this.getBoard(parseInt(this.boardId)) || ''
      },
      lists() {
        return this.getBoardList(this.boardId)
      }

    },

    created() {
      this.fetchBoards()
      this.fetchLists({ board: this.boardId })
    }
  }
</script>

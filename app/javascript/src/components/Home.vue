<template>
  <div>
     <h3>My Boards</h3>
     <input type="text" v-model="boardTitle" />
     <button @click="addBoard" class="btn btn-primary">Create</button>
     <hr />
     <div class="row">
       <board-card
         v-for="(board, index) in boards"
         :key="index"
         :name="board.name"
         :id="board.id">
       </board-card>
     </div>
     {{boards.length}}
     <div v-if="isEmpty(boards)">
       Empty list. Create new board!
     </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { isEmpty } from 'lodash'

import BoardCard from './BoardCard'

export default {
  name: 'home',

  components: { BoardCard },

  data() {
    return {
      boardTitle: null
    }
  },

  computed: {
    ...mapState(['boards'])
  },

  methods: {
    ...mapActions(['fetchBoards', 'createBoard']),

    addBoard() {
      this.createBoard({ name: this.boardTitle })
      this.boardTitle = null
    },

    isEmpty: isEmpty
  },
  created () {
    this.fetchBoards()
  }
}
</script>

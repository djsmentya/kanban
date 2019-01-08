<template>
  <div>
     <h3>My Boards</h3>
     <board-card
       v-for="(board, index) in boards"
       :key="index"
       :name="board.name"
       :id="board.id">
     </board-card>
  </div>
</template>

<script>
import BoardCard from './BoardCard'
export default {
  name: 'home',
  components: { BoardCard }
}
</script>

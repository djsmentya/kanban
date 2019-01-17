<template>
  <div class="card">
    <div class="card-body">
      <div class="card-title" @click="switchToEdit">
        <h5 v-if="!isEditMode"> {{card.name}} </h5>
        <input :disabled="!isEditMode" v-if="isEditMode" type="text" v-model="cardName" @keyup.enter="updateCardName" />
      </div>
    </div>
  </div>
</template>

<script>
	import { mapActions, mapGetters } from 'vuex'
  export default {
    name: 'card',
    props: {
      card: Object,
      boardId: Number
    },

    data(){
      return {
        isEditMode: false,
        cardName: this.card.name
      }
    },

    methods: {
      ...mapActions(['updateCard']),

      switchToEdit(){
        if (this.isEditMode)
          return
        this.isEditMode = !this.isEditMode
      },

      updateCardName() {
        this.updateCard({
          board: this.boardId,
          list: this.card.list_id,
          card: this.card.id,
          name: this.cardName
        })
      }
    }
  }
</script>

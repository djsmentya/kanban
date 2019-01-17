<template>
  <section class="col">
    <header>
      <h3>{{ list.name }}</h3>
    </header>
    <input type="text" v-model="cardName" placeholder="Create task" @keyup.enter="add()"/>
    <card v-for="(card, index) in cards" :card="card" :key="index" :boardId="list.board_id"/>
  </section>
</template>

<script>
	import { mapActions, mapGetters } from 'vuex'
  import Card from './Card'

  export default {
    name: 'column',
    components: { Card },
    props: {
      name: String,
      list: Object
    },

    data() {
      return {
        cardName: null,
      }
    },
    computed: {
      ...mapGetters(['getCards']),

      cards () {
        return this.getCards(this.list.id)
      },
    },

    methods: {
      ...mapActions(['fetchLists', 'createCard']),

      add() {
        this.createCard({ board: this.list.board_id, list: this.list.id, name: this.cardName })
        this.cardName = ''
      }
    },

    created() {
      this.fetchLists({ board: this.list.board_id })
    }
  }
</script>

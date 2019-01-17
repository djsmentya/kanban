import Vue from 'vue'
import * as types from './mutation-types'

export default {
  [types.FETCH_BOARDS_SUCCESS] (state, { boards }) {
    state.boards = { ...boards }
  },

  [types.FETCH_LISTS_SUCCESS] (state, { lists }) {
    state.lists = { ...lists }
  },

  [types.FETCH_CARDS_SUCCESS] ( state, { cards }) {
    state.cards = { ...cards }
  }
}

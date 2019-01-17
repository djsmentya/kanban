import { pickBy } from 'lodash'

export default {
	getBoardLists: (state) => (boardId) => {
    return state.lists
	},

  getBoard: (state) => (boardId) => {
    return state.boards[boardId]
  },

  getCards: (state) => (listId) => {
    return pickBy(state.cards, (card) => card.list_id === listId)
  }
}

export default {
	getBordLists: (state) => (boardId) => {
    return state.lists
	},

  getBoard: (state) => (boardId) => {
    return state.boards[boardId]
  }
}

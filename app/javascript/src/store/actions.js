import * as types from './mutation-types'
import axios from 'axios'

const csrfToken = document.querySelector("meta[name=csrf-token]").content
axios.defaults.headers.common['X-CSRF-Token'] = csrfToken

export default {
  fetchBoards({ commit }) {
    return axios.get('/boards.json')
      .then(response =>{
        commit(types.FETCH_BOARDS_SUCCESS, { boards: response.data})
      })
  },

  createBoard({ dispatch, commit }, { name }) {
    return axios.post('/boards.json', { board: { name } })
    .then(response => {
      dispatch('fetchBoards')
    })
  },

  fetchLists({ commit }, { board }) {
    return axios.get(`/boards/${board}/lists.json`)
      .then(response =>{
        commit(types.FETCH_LISTS_SUCCESS, { lists: response.data})
      })
  },

  createList({ dispatch, commit }, { board, name }) {
    return axios.post(`/boards/${board}/lists.json`, { list: { name } })
    .then(response => {
      dispatch('fetchLists')
    })
  },

}

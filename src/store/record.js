import firebase from "firebase/app"

export default {
  state: {
    
  },
  mutations: {

  },
  actions: {
    async createRecord({dispatch, commit}, record) {
      try {
        const uid = await dispatch('getUserId')
        await firebase.database().ref(`users/${uid}/records`).push(record)
        // commit('setInfo', info)
        
      } catch (e) {
        commit('setError', e)
        throw e
      }
    }
  },
  getters: {
    info: s => s.info
  }
}

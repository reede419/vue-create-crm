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
    },
    async fetchRecords({dispatch, commit}) {
      try {
        const uid = await dispatch('getUserId')
        const records = (await firebase.database().ref(`/users/${uid}/records`).once('value')).val() || {}

        return Object.keys(records).map( key => ({...records[key], id: key}))
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

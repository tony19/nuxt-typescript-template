export const strict = false

import firebase, {auth, GoogleProvider} from '~/services/fireinit'

export const state = () => ({
  user: null
})

export const mutations = {
  setUser (state, payload) {
    state.user = payload
  }
}

export const getters = {
  activeUser: (state, getters) => {
    return state.user
  }
}

export const actions = {
  autoSignIn ({commit}, payload) {
    commit('setUser', payload)
  },

  async signInWithGoogle ({commit}) {
    return auth.signInWithRedirect(GoogleProvider)
  },

  async signOut ({commit}) {
    try {
      await auth.signOut()
      commit('setUser', null)
    } catch (err) {
      console.log(err)
    }
  }
}

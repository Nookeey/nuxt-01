import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: {}
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return axios.get('https://nuxt-blog-e04a1.firebaseio.com/posts.json')
          .then(res => {
            setTimeout(() => {
              const postsArray = []
              for (const key in res.data) {
                postsArray.push({ ...res.data[key], id: key })
              }
              vuexContext.commit('setPosts', postsArray)
            }, 1000)
          })
          .catch(e => context.error(e))
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts)
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      }
    }
  })
}

export default createStore

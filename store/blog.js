import Vue from 'vue/dist/vue.esm'


export const state = () => ({
    allPosts: [],
    tags: []
})

export const getters = {
    
}

export const mutations = {
   setPosts(state, posts) {
       state.allPosts.push(posts)
   },
   resetPosts(state) {
       state.allPosts = [];
   }
}

export const actions = {
    setAllPosts({commit, state}, posts) {
        commit('setPosts', posts)
    },
    resetAllPosts({commit}) {
        commit('resetPosts');
    }
}



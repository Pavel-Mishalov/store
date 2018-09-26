const state = {
	comments: {}
}

const getters = {}

const actions = {
	async getComments ({commit}) {
		try {
			const res = await axios.get(`comment`)

			commit('SET_COMMENTS', res.data)
			return res
		} catch (e) {
			console.log(e)
		}
	}
}

const mutations = {
	SET_COMMENTS (state, comments) {
		state.comments = comments
	}
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}

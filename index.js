import Vue from 'vue'
import Vuex from 'vuex'

const requireModule = require.context('./modules', false, /^\.\/(?!-)[^.]+\.(js)$/)
const moduleNames = requireModule.keys()

let modules = {}

moduleNames.forEach((filename) => {
	let name = filename.replace(/^\.\//, '').replace(/\.(js)$/, '')
	module = requireModule(filename).default
	modules[name] = module.default || module
})

Vue.use(Vuex)

const store = () => new Vuex.Store({
	modules
})

export default store
import * as types from '../mutation-types';

// initial state
const state = {
	vuexMessage: 'VUEX BOIS',
};

// mutations
const mutations = {
	[types.SET_MESSAGE]() {
		state.vuexMessage = 'Hola vuex';
	},
};

export default {
	state,
	mutations,
};

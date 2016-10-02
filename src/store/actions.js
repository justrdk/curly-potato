import * as types from './mutation-types';

export const setNewMessage = ({ commit }) => {
	commit(types.SET_MESSAGE, 'New Message');
};

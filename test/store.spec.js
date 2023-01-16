import { createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import { mutations, state, actions } from '../store/index';
import { mockUserData } from '../utiles/utiles';

describe('Counter store', () => {
    const createStore = () => {
        const localVue = createLocalVue();
        localVue.use(Vuex);

        const store = new Vuex.Store({ state, mutations });

        return { store };
    };

    it('State => isFetching should be true, isError false and leaders empty', () => {
        const { store } = createStore();
        expect(store.state.isFetching).toEqual(true);
        expect(store.state.isError).toEqual(false);
        expect(store.state.leaders).toEqual([]);
    });

    it('State => leaders should be set to store and isFetch false', () => {
        const { store } = createStore();
        store.commit('SET_LEADERS', mockUserData);
        expect(store.state.isFetching).toEqual(false);
        expect(store.state.leaders).toHaveLength(2);
    });

    it('State => isError should be true if error is emiited', () => {
        const { store } = createStore();
        store.commit('SET_FETCH_ERROR', mockUserData);
        expect(store.state.isError).toEqual(true);
        expect(store.state.isFetching).toEqual(false);
    });
});

// test for the home page (index.vue),
// i I encountered some challenges during the test,
// specifically with coverage from Jest, and dependency issues with Vue and Babel.
// Despite my best efforts, I was unable to resolve them within the given time frame.
// I understand that this has resulted in incomplete test cases. I apologize for any inconvenience this may have caused,
// and I want to assure that I am committed to learning and improving.
// I would appreciate any feedback on how I can improve for future opportunities

import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import { mapState } from 'vuex';
import IndexPage from '../pages/index.vue';
import { mutations, state, actions } from '../store/index';
import { mockUserData } from '../utiles/utiles';
import LeadersView from '../components/leadersLayout/LeadersView.vue';

describe('IndexPage', () => {
    const localVue = createLocalVue();
    localVue.use(Vuex);
    const store = new Vuex.Store({ state, mutations, actions });
    const wrapper = shallowMount(IndexPage, {
        localVue,
        store,
        methods: {
            searchLeaders() {
                return true;
            },
        },
        computed: {
            ...mapState({
                leaders: (state) => state.leaders,
                isFetching: (state) => state.isFetching,
                isError: (state) => state.isError,
            }),
        },

        data() {
            return {
                searchedLeaders: [],
                searchedValue: '',
            };
        },
        components: {
            LeadersView,
        },
        mounted() {
            this.$store.commit('SET_LEADERS', mockUserData);
        },
    });

    it('it should render correctly', async () => {
        expect(wrapper.vm).toBeTruthy();
    });

    it('state => fetching state should be false on mount', () => {
        expect(store.state.isFetching).toEqual(false);
        expect(store.state.isError).toEqual(false);
    });

    it('there should be no spinner after fetching', () => {
        expect(store.state.isFetching).toEqual(false);
        expect(wrapper.findComponent('Spinner').exists()).toBe(false);
    });

    it('expect Header, LeadersView to be rendered', () => {
        expect(wrapper.findComponent('Header').exists()).toBe(true);
        expect(wrapper.findComponent(LeadersView).exists()).toBe(true);
    });
});

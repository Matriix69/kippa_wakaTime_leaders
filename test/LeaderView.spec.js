import { shallowMount, createLocalVue } from '@vue/test-utils';
import LeadersView from '../components/leadersLayout/LeadersView.vue';
import { mockUserData } from '../utiles/utiles';

const localVue = createLocalVue();

describe('Test LeadersView component', () => {
    test('it should render correctly and have two children leaderCards', () => {
        const wrapper = shallowMount(LeadersView, {
            localVue,
            propsData: {
                leadersData: mockUserData,
                searchedLeaders: [],
                searchedValue: '',
            },
        });
        expect(wrapper.vm).toBeTruthy();
        expect(wrapper.findAll('LeaderCard')).toHaveLength(2);
    });
    test('should render search result and have only one child leaderCard', () => {
        const wrapper = shallowMount(LeadersView, {
            localVue,
            propsData: {
                leadersData: mockUserData,
                searchedLeaders: mockUserData.shift(),
                searchedValue: 'an',
            },
        });
        expect(wrapper.vm).toBeTruthy();
        expect(wrapper.findAll('LeaderCard')).toHaveLength(1);
    });
});

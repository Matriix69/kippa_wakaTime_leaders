export const state = () => ({
    leaders: [],
    isFetching: true,
    isError: false,
});

export const mutations = {
    SET_LEADERS(state, payload) {
        state.leaders = payload;
        state.isFetching = false;
    },
    SET_FETCH_ERROR(state) {
        state.isFetching = false;
        state.isError = true;
    },
};

export const actions = {
    // i'm  using nuxtServerInit action here to fetch data from wakaTime on the server
    // when the application starts and store it to vuex store,
    // This way, since the data doesn't update frequently, the data will be fetched only once from the server and will be stored in the Vuex store,
    // so it can be reused throughout the application without needing to refetch it and avoid CORS errors on the client

    // since asyncData and fetch also do run on client side during page navigations
    // CORS will be an issue

    // To avoid CORS errors, i could set up a proxy server to forward the request to
    // wakatime and return the data and avoid CORS errors on client routing.
    // but i assumed that is outside the scope of this test

    async nuxtServerInit({ commit }, { $axios }) {
        try {
            const { data } = await $axios.get(`https://wakatime.com/api/v1/leaders`);
            const userDate = data?.data;
            commit('SET_LEADERS', userDate);
        } catch (error) {
            commit('SET_FETCH_ERROR');
        }
    },
};

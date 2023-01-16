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

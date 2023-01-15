<script>
import { mapState } from 'vuex';

export default {
    name: 'LeaderBoardHome',

    computed: {
        ...mapState({
            leaders: (state) => state.leaders,
            isFetching: (state) => state.isFetching,
            isError: (state) => state.isError,
        }),
    },

    methods: {
        searchLeaders(event) {
            const value = event.target.value.toLowerCase();
            const filteredSearch = this.leaders.filter((leader) => leader.user?.display_name.toLowerCase().includes(value));
            this.searchedLeaders = filteredSearch;
            this.searchedValue = value;
        },
    },

    data() {
        return {
            userDate: true,
            searchedLeaders: [],
            searchedValue: '',
        };
    },
};
</script>

<template>
    <div class="bg-alt min-h-full">
        <div class="max-w-[1000px] mx-auto p-5">
            <Spinner v-if="isFetching" />
            <div v-else-if="!isError">
                <Header :searchFunction="searchLeaders" />
                <LeaderHeader />
                <LeadersView :leadersData="leaders" :searchedLeaders="searchedLeaders" :searchedValue="searchedValue" />
            </div>
            <ErrorHandler v-else />
        </div>
    </div>
</template>

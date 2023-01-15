<script>
// import LeaderCard from './LeaderCard.vue';

export default {
    name: 'LeadersView',
    props: {
        leadersData: {
            type: Array,
            required: true,
        },
        searchedLeaders: {
            type: Array,
            required: true,
        },
        searchedValue: {
            type: String,
            required: true,
        },
    },
    // components: { LeaderCard },
};
</script>

<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
        <div v-if="searchedLeaders.length < 1 && searchedValue" class="col-span-full mt-6 text-center accent text-lg">
            Opss... No user found
        </div>
        <LeaderCard
            v-else
            v-for="data in searchedLeaders.length > 0 ? searchedLeaders : leadersData"
            :data="data"
            :key="data.rank"
        />
    </div>
</template>

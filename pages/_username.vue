<script>
import { mapState } from 'vuex';
import { findUserFromState } from '../utiles/utiles';

export default {
    computed: {
        ...mapState({
            leaders: (state) => state.leaders,
        }),
    },
    methods: {
        redirect() {
            this.$router.push({ path: '/' });
        },
    },
    mounted() {
        const params = this.$route.params.username;
        const query = this.$route.query.id;
        const leaders = this.leaders;
        const findUser = findUserFromState(leaders, params, query);
        if (!findUser) return this.redirect();
        this.userData = findUser;
        console.log(findUser);
        setTimeout(() => {
            this.isLoading = false;
        }, 1000);
    },

    data() {
        return {
            userData: null,
            isLoading: true,
        };
    },
};
</script>
<template>
    <div class="max-w-[700px] mx-auto">
        <Spinner v-if="isLoading" />
        <RouteHeader title="Profile" />
        <Profile :userData="userData" />
    </div>
</template>

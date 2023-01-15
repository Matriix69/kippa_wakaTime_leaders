<script>
import Message from '../../assets/icons/message.vue';
import Hire from '../../assets/icons/hire.vue';
import Location from '../../assets/icons/location.vue';
import Link from '../../assets/icons/link.vue';
import Time from '../../assets/icons/time.vue';
export default {
    components: {
        Message,
        Hire,
        Location,
        Link,
        Time,
    },
    props: {
        userData: {
            type: Object | null,
            required: true,
        },
    },
};
</script>

<template>
    <div class="p-5 h-ful grid grid-cols-1 md:grid-cols-[250px_1fr] gap-4">
        <div class="h-full flex flex-col items-center md:items-start">
            <img :src="userData?.user.photo" class="h-[120px] w-[120px] rounded-full bg-accent-2" />
            <div class="md:ml-2">
                <div class="mt-4 text-center md:text-left">
                    <h1 class="font-medium text-xl">{{ userData?.user.display_name }}</h1>
                    <div class="text-xs accent-5" v-if="userData?.user.username">@{{ userData?.user.username }}</div>
                </div>
                <div class="mt-4 flex flex-col md:grid items-center justify-start gap-3">
                    <div class="user_details" v-if="userData?.user.city?.ascii_name">
                        <Location />
                        <div class="text-sm">{{ userData?.user.city?.ascii_name }}, {{ userData?.user?.city.country }}</div>
                    </div>
                    <div class="user_details" v-if="userData?.user.email">
                        <Message />
                        <div class="text-sm">{{ userData?.user.email }}</div>
                    </div>
                    <div class="user_details" v-if="userData?.user?.website">
                        <Link />
                        <a target="_blank" :href="userData?.user.website" class="text-sm">{{ userData?.user.website }}</a>
                    </div>
                    <div class="user_details items-center" v-if="userData?.user?.is_hireable">
                        <div class="text-sm bg-green-100 green-500 py-1 px-2 w-fit">Hireable</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="bg-white rounded-md p-5">
            <div class="grid grid-cols-[1fr_1fr] gap-2">
                <div class="mb-4">
                    <h2 class="accent-5 mb-1">Hours daily</h2>
                    <div class="font-medium">{{ userData?.running_total.human_readable_daily_average }}</div>
                </div>
                <div>
                    <h2 class="accent-5 mb-1">Daily Average</h2>
                    <div class="font-medium">{{ userData?.running_total.human_readable_total }}</div>
                </div>
            </div>

            <div>
                <h2 class="accent-5 mb-2">Languages</h2>
                <div class="grid gap-1">
                    <ProgressChart
                        v-for="data in userData?.running_total?.languages"
                        :key="data?.name"
                        :data="data"
                        :maxValue="userData?.running_total?.total_seconds"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.user_details {
    display: grid;
    grid-template-columns: 20px 1fr;
    gap: 0.5rem;
}
.user_details svg {
    width: 19px !important;
    height: 19px !important;
    opacity: 0.5;
}
</style>

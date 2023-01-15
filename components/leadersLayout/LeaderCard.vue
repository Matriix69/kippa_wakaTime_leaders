<script>
export default {
    name: 'LeaderCard',
    props: {
        data: {
            type: Object | null,
            required: true,
        },
    },
};
</script>

<template>
    <nuxt-link
        :to="{ path: `/${data?.user.username}`, query: { id: data?.user.id } }"
        class="p-5 grid lg:grid-cols-[30px_1.2fr_1.7fr_2fr] gap-4 lg:gap-5 w-full bg-white"
        data-testid="listCards"
    >
        <div class="hidden lg:block my-auto">{{ data?.rank }}</div>
        <div class="flex gap-3">
            <div class="h-[40px] w-[40px] rounded-full bg-accent-2 relative">
                <img :src="data?.user.photo" class="h-full w-full rounded-full object-cover" />
                <div class="absolute left-0 bottom-[-5px] lg:hidden bg-white text-xs rounded-full px-1 py-1">
                    {{ data?.rank }}
                </div>
            </div>
            <div>
                <div class="font-medium">{{ data?.user.display_name }}</div>
                <div class="text-xs accent-5">{{ data?.user.username ? `@${data.user?.username}` : '' }}</div>
            </div>
        </div>
        <div class="grid grid-cols-2 items-center gap-5">
            <div class="">
                <div class="text-xs accent-5 mb-2 block lg:hidden">Hours daily</div>
                <div class="text-sm lg:text-base">{{ data?.running_total.human_readable_daily_average }}</div>
            </div>
            <div>
                <div class="text-xs accent-5 mb-2 block lg:hidden">Daily Average</div>
                <div class="text-sm lg:text-base">{{ data?.running_total.human_readable_total }}</div>
            </div>
        </div>
        <div class="grid items-center">
            <div class="text-xs accent-5 mb-2 block lg:hidden">Languages</div>
            <div class="flex flex-wrap gap-2">
                <span
                    v-for="languages in data?.running_total.languages.slice(0, 5)"
                    class="bg-accent-1 text-sm rounded-md px-1 py-1"
                    >{{ languages.name }}
                </span>
                <span v-if="data?.running_total.languages.length > 5"> ... </span>
            </div>
        </div>
    </nuxt-link>
</template>

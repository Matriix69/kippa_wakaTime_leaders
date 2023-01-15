<script>
export default {
    props: {
        searchFunction: {
            type: Function,
            required: true,
        },
    },
};
</script>

<template>
    <div class="flex flex-col sm:flex-row my-8">
        <h1 class="font-bold text-2xl items-center">WakaTime Leaders</h1>
        <input
            v-on:input="searchFunction"
            placeholder="search"
            class="p-4 rounded-md-auto w-full max-w-100% mt-5 sm:max-w-[210px] sm:ml-auto lg:mt-0"
        />
    </div>
</template>

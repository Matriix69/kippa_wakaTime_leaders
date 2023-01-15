<script>
export default {
    methods: {
        reload() {
            window.location.reload();
        },
    },
};
</script>

<template>
    <div class="h-screen flex flex-col gap-2 items-center justify-center mt-[-20px] text-center">
        <h1 class="font-bold text-2xl">Oops</h1>
        <p>Something went wrong, please try refreshing the page</p>
        <button v-on:click="reload" class="bg-accent py-4 px-6 rounded-md text-white mt-4">Refresh</button>
    </div>
</template>

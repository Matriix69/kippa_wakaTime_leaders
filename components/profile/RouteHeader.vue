<script>
import Back from '../../assets/icons/backArrow.vue';

export default {
    props: {
        title: {
            type: String,
            required: true,
        },
    },
    methods: {
        goBack() {
            this.$router.back();
        },
    },
    components: { Back },
};
</script>
<template>
    <div class="my-8 grid grid-cols-[70px_1fr_70px] items-center px-5">
        <button v-on:click="goBack" class="p-2 flex items-center">
            <Back class="h-[17px] width-17px" /> <span class="accent-5 text-sm">Back</span>
        </button>
        <div class="text-2xl text-center">{{ title }}</div>
    </div>
</template>

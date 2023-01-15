<script>
export default {
    name: 'ProgressChart',
    props: {
        maxValue: {
            type: Number | null,
            required: true,
        },
        data: {
            type: Object | null,
            required: true,
        },
    },
};
</script>

<template>
    <div class="relative">
        <progress class="progress" id="file" :max="maxValue" :value="data?.total_seconds" />
        <span class="absolute top-1/2 left-0 transform -translate-x-0 -translate-y-1/2 ml-4 text-sm accent-5">
            {{ data?.name }}</span
        >
    </div>
</template>

<style>
.progress {
    -webkit-appearance: none;
    appearance: none;
    height: 40px;
    width: 100%;
    display: block;
    border-radius: 5px;
    overflow: hidden;
}
.progress::-webkit-progress-bar {
    background: transparent;
}
.progress::-moz-progress-bar {
    background: transparent;
}

.progress::-webkit-progress-value {
    background: hsl(0, 0%, 95%);
    /* border: 1px solid var(--accents-2); */
    border-radius: 5px;
    overflow: hidden;
}
.progress::-moz-progress-value {
    background: hsl(0, 0%, 95%);
    /* border: 1px solid var(--accents-2); */
    border-radius: 8px;
    overflow: hidden;
}
</style>

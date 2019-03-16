<template>
    <Resize id="app" class="app-layout">
        <Main />
    </Resize>
</template>

<script>

    import Resize from '@/components/common/Resize';
    import Main from '@/components/Index';
    export default {
        name: 'app',
        components: {
            Resize,
            Main
        }
    };
</script>

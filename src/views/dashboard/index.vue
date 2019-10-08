<template >
    <component :is="layout"></component>
</template>

<script type="text/javascript" >
    import Layout1 from '@/layout/layout1';

    export default {
        components: {
            Layout1
        },
        data() {
            return {
                layout: "layout1"
            }
        }
    }
</script>

<style type="text/css" lang="less" scoped="">

</style>

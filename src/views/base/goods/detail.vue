<template >
    <div >
        goods detail
    </div>
</template>

<script type="text/javascript" >
    import RouterDist from '../RouterDist';

    export default {
        data() {
            return {
                id: this.$route.query.id
            }
        },
        created() {
            this.$updateTab({
                id: this.$curSecondMenu.id,
                path: '/dashboard/base/goods/detail?id=' + this.id+"&menuId="+this.$curSecondMenu.id,
                text: "商品详情"
            });
        }
    }
</script>


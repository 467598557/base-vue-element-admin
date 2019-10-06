<template >
    <div >
        goods detail
    </div>
</template>

<script type="text/javascript" >
    import RouterDist from '../RouterDist';

    export default {
        created() {
            this.updateBreadcrumb([RouterDist.GoodsListWithPath, {
                text: "商品1"
            }]);
        }
    }
</script>


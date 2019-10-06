<template >
    <div >
        goods list
        <br/>
        <router-link to="/dashboard/base/goods/detail/1">商品1</router-link>
    </div>
</template>


<script type="text/javascript" >
    import RouterDist from '../RouterDist';

    export default {
        created() {
            this.updateBreadcrumb([RouterDist.GoodsListWithoutPath]);
        }
    }
</script>


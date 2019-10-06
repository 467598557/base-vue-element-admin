<template >
    <div >
        customer list
        <br/>
        <router-link to="/dashboard/base/customer/detail/1">客户1</router-link>
    </div>
</template>

<script type="text/javascript" >
    import RouterDist from '../RouterDist';

    export default {
        created() {
            this.updateBreadcrumb([RouterDist.CustomerListWithoutPath]);
        }
    }
</script>

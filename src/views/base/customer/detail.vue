<template >
    <div >
        customer detail
    </div>
</template>

<script type="text/javascript" >
    import RouterDist from '../RouterDist';

    export default {
        created() {
            this.updateBreadcrumb([RouterDist.CustomerListWithPath, {
                text: "客户1"
            }]);
        }
    }
</script>

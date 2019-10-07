<template >
    <div >
        customer detail
    </div>
</template>

<script type="text/javascript" >
    export default {
        created() {
            this.$updateTab({
                id: this.$curSecondMenu.id,
                path: '/dashboard/base/customer/detail?id=' + this.id,
                text: "客户详情"
            });
        }
    }
</script>

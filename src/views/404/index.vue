<template >
    <div class="notfound-page">
        <p >404</p>
    </div>
</template>

<script type="text/javascript" >
    export default {
        name: "NotFound"
    }
</script>

<style type="text/css" lang="less" scoped >
    .notfound-page {
        width: 100%;
        height: 100%;
        position: absolute;
        background: url(../../assets/bg.jpg) no-repeat center center;
        background-size: cover;
        p {
            font-size: 150px;
            text-align: center;
            position: absolute;
            top: 50%;
            left: 0px;
            width: 100%;
            margin-top: -150px;
            color: #73acbb;
        }
    }
</style>

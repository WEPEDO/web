<template>
    <div class="feature_view">
        <a href="http://act.mogujie.com/zzlx67">
            <img :src="img" @load="featerLoad"/>
        </a>
    </div>
</template>
<script>
export default {
    name:'FeatureView',
    data() {
        return {
            img: require('@/assets/img/home/recommend_bg.jpg')
        }
    },
    methods:{
        featerLoad() {
            this.$emit("featerImgLoad");
        }
    },
    created() {
        console.log(this.img)
    }
}
</script>
<style lang="less" scoped>
    .feature_view{
        a{
            // display: block;
            font-size: 20px;
            width: 100vw;
            height: 5.5rem;
            img{
                width: 100%;
            }
        }
    }
</style>
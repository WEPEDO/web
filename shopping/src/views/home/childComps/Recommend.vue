<template>
    <div class="recommend">
        <div class="recommend-item" v-for="(item,index) in recommends" :key="index">
            <a :href="item.link">
            <img :src="item.image" @load="recomLoad"/>
            <div>{{ item.title}}</div>
            </a>
        </div>
    </div>
</template>
<script>
export default {
    name: "Recommend",
    props: {
        recommends: {
            type: Array,
            default() {
                return [];
            }
        }
    },
    data() {
        return {};
    },
    methods:{
        recomLoad() {
            this.$emit("recomImgLoad");
        }
    }
};
</script>
<style lang="less" scoped>
    .recommend{
        display: flex;
        justify-content: space-around;
        margin-top: 0.2rem;
        img{
            width: 20vw;
            height: 20vw;
            margin-bottom: 3px; 
        };
        font-size: 12px;
        text-align: center;
        padding: 5px 0 10px; 
        border-bottom: 8px solid #eee;
    }
</style>
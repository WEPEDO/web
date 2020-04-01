<template>
    <div>
        <swiper class="my-swipe" :autoplay="2000" indicator-color="white">
            <swiper-item v-for="(item,index) in banners" :key="index">
                <a :href="item.link">
									<img :src="item.image"/>
								</a>		
            </swiper-item>
        </swiper> 
    </div>
</template>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper'

export default {
    name:'HomeSwiper',
		components: {
			Swiper,
			SwiperItem,
		},
    props:{
        banners:{
            type:Array,
            default() {
                return []
            }
        }
    },
}
</script>

<style lang="less" scoped>
    .van-swipe{
        margin-top: 46px;
        width: 100vw;
        height: 3.9rem;
        .van-swipe-item{
            width: 100%;
            height: 100%;
            img{
                width:100%;
                height: 100%;
            }
        }
    }
</style>

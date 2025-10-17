<template>
    <div class="sub_page">
        <div class="hero_area">
            <div class="hero_bg_box">
                <div class="bg_img_box">
                    <img src="/images/hero-bg.png" alt="">
                </div>
            </div>
            <NavigationHeader />
        </div>
        <OurService />
    </div>
</template>
<script>
import NavigationHeader from '@/components/NavigationHeader.vue';
import OurService from '@/components/OurService.vue';
export default {
    components: {
        OurService,
        NavigationHeader
    }
}
</script>
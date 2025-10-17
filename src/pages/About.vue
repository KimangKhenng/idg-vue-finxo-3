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
        <About />
    </div>
</template>
<script>
import About from '@/components/About.vue';
import NavigationHeader from '@/components/NavigationHeader.vue';
export default {
    components: {
        About,
        NavigationHeader
    }
}
</script>
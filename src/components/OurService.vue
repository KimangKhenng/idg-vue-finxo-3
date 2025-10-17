<template>
    <HeroSection title="Our" title2="Services">
        <template #subtitle>
            <p>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                alteration
            </p>
        </template>
        <template #content>
            <div class="row">
                <ServiceBox v-for="(item, index) in services" :title="item.title" :description="item.description"
                    :icon="item.icon" :key="index" />
            </div>
            <div class="btn-box">
                <a href="">
                    View All
                </a>
            </div>
        </template>
    </HeroSection>
</template>
<script>
import ServiceBox from '@/components/ServiceBox.vue';
import HeroSection from '@/components/HeroSection.vue';
export default {
    components: {
        ServiceBox,
        HeroSection
    },
    data() {
        return {
            services: [
                {
                    title: 'Currency Wallet',
                    description: 'fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using',
                    icon: '/images/s1.png'
                },
                {
                    title: 'Security Storage',
                    description: 'fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using',
                    icon: '/images/s2.png'
                },
                {
                    title: 'Expert Support',
                    description: 'fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using',
                    icon: '/images/s3.png'
                }
            ]
        }
    }
}
</script>
<template>
    <section class="service_section layout_padding">
        <div class="service_container">
            <div class="container ">
                <div class="heading_container heading_center">
                    <h2>
                        Our <span>Services</span>
                    </h2>
                    <p>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                        alteration
                    </p>
                </div>
                <div class="row">
                    <ServiceBox v-for="(item, index) in services" :title="item.title" :description="item.description"
                        :icon="item.icon" :key="index" />
                </div>
                <div class="btn-box">
                    <a href="">
                        View All
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import ServiceBox from '@/components/ServiceBox.vue';
export default {
    components: {
        ServiceBox
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
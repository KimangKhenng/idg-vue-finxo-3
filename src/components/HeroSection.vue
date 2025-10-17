<template>
    <section class="service_section layout_padding">
        <div class="service_container">
            <div class="container ">
                <div class="heading_container heading_center">
                    <h2>
                        {{ title }} <span>{{ title2 }}</span>
                    </h2>
                    <slot name="subtitle"></slot>
                </div>
                <slot name="content"></slot>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    props: ['title', 'title2']
}
</script>
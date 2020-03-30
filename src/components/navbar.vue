<template>
    <div class="navbar">
        <vk-grid class="uk-flex-between">
            <div>
               <vk-icon-button href="#" class="uk-margin-small-right" icon="mail"></vk-icon-button>
            </div>
            <div>
                <p>
                    <img :src="image" alt="me" />
                </p>
            </div>
            <div>
                <vk-icon-button href="https://twitter.com/imhassane2" class="uk-margin-small-right" icon="twitter"></vk-icon-button>
                <vk-icon-button href="https://instagram.com/imhassane" class="uk-margin-small-right" icon="instagram"></vk-icon-button>
            </div>
        </vk-grid>
    </div>
</template>

<script>
export default {
    name: 'navbar',
    computed: {
        image: () => "",
    }
}
</script>

<style scoped>
    .navbar {
        padding: 10px 30px;
    }
</style>
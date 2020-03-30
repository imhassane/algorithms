<template>
    <div class="navbar">
        <vk-grid class="uk-flex-between">
            <div>
               <vk-icon-button href="mailto:thsow.pro@gmail.com" class="uk-margin-small-right" icon="mail"></vk-icon-button>
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
        <hr />
        <vk-grid class="uk-flex-around">
            <div><a href="#" class="uk-button uk-button-small">djikstra</a></div>
            <div><a href="#" class="uk-button uk-button-small">A*</a></div>
            <div><a href="#" class="uk-button uk-button-small">bubble sort</a></div>
            <div><a href="#" class="uk-button uk-button-small">merge sort</a></div>
            <div><a href="#" class="uk-button uk-button-small">quick sort</a></div>
            <div><a href="#" class="uk-button uk-button-small">local finding</a></div>
            <div><a href="#" class="uk-button uk-button-small">minimum</a></div>
            <div><a href="#" class="uk-button uk-button-small">dotro</a></div>
            <div><a href="#" class="uk-button uk-button-small">others</a></div>
        </vk-grid>
        <hr />
    </div>
</template>

<script>
export default {
    name: 'navbar',
    computed: {
        image: () => "https://raw.githubusercontent.com/imhassane/algorithms/master/src/assets/me.jpg",
    }
}
</script>

<style scoped>
    .navbar {
        padding: 10px 0;
    }

    img {
        width: 50px;
        border-radius: 50%;
    }
</style>
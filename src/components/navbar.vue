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
            <div><router-link to="/" class="uk-button uk-button-small">home</router-link></div>
            <div><router-link to="/algos/djikstra" class="uk-button uk-button-small">djikstra</router-link></div>
            <div><router-link to="/algos/" class="uk-button uk-button-small">A*</router-link></div>
            <div><router-link to="/algos/" class="uk-button uk-button-small">bubble sort</router-link></div>
            <div><router-link to="/algos/" class="uk-button uk-button-small">merge sort</router-link></div>
            <div><router-link to="/algos/quicksort" class="uk-button uk-button-small">quick sort</router-link></div>
            <div><router-link to="/algos/" class="uk-button uk-button-small">local finding</router-link></div>
            <div><router-link to="/algos/" class="uk-button uk-button-small">minimum</router-link></div>
            <div><router-link to="/algos/" class="uk-button uk-button-small">others</router-link></div>
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
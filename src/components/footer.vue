<template>
    <footer>
        <img :src="image" alt="me" />
    </footer>
</template>

<script>
export default {
    name: 'footer',
    computed: {
        image: () => "https://raw.githubusercontent.com/imhassane/algorithms/master/src/assets/me.jpg",
    }
}
</script>

<style scoped>
    footer {
        padding: 30px 0;
    }
    img {
        width: 100px;
    }
</style>
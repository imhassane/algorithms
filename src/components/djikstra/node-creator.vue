<template>
    <vk-grid class="uk-child-width-1-5@m">
        <div class="uk-margin">
            <label>Node name</label>
            <input type="text" class="uk-input" placeholder="Ex: Paris" />
        </div>
        <div>
            <label>Associate with</label>
            <select class="uk-select">
                <option v-for="n in nodes" :key="n.name">{{ n.name }}</option>
            </select>
        </div>
        <div>
            <label>Abscisse</label>
            <input class="uk-input" type="text" v-model="mouse.x" />
        </div>
        <div>
            <label>Ordonnee</label>
            <input class="uk-input" type="text" v-model="mouse.y" />
        </div>
        <div class="uk-margin">
            <div class="uk-text-left">
                <button class="uk-margin uk-button">Add</button>
            </div>
        </div>
    </vk-grid>
</template>

<script>
export default {
    name: 'node-creator',
    data: () => ({ mouse: { x: 0, y: 0 }}),
    methods: {
        onMouseMove: function(e) {
            this.mouse.x = e.pageX;
            this.mouse.y = e.pageY;
        }
    },
    computed: {
        nodes() { return this.$store.state.djikstra.nodes; }
    },
    mounted: function() {
        window.addEventListener('mousemove', this.onMouseMove);
    }
}
</script>
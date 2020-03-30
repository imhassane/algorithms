<template>
    <vk-grid class="uk-child-width-1-5@m">
        <div class="uk-margin">
            <label>Node name</label>
            <input type="text" v-model="name" class="uk-input" placeholder="Ex: Paris" />
        </div>
        <div>
            <label>Associate with</label>
            <select class="uk-select" @change="onNodeSelection">
                <option :value="n.name" v-for="n in nodes" :key="n.name">{{ n.name }}</option>
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
                <button class="uk-margin uk-button" @click="onSubmit">Add</button>
            </div>
        </div>
    </vk-grid>
</template>

<script>
export default {
    name: 'node-creator',
    data: () => ({ mouse: { x: 400, y: 300 }, mass: 0, selectedNode: null, name: null }),
    methods: {
        onMouseMove: function(e) {
            this.mouse.x = e.pageX;
            this.mouse.y = e.pageY;
        },
        onNodeSelection: function(e) {
            let name = e.target.value;
            let [node] = this.nodes.filter(n => n.name.includes(name));
            this.selectedNode = node;
            this.mass = parseInt(prompt("What mass do you want to affect it"));
            
        },
        onSubmit: function() {
            const variables = {
                name: this.name,
                node: this.selectedNode,
                mass: this.mass,
                mouse: {x: 450, y: 450}
            };
            this.$store.dispatch('ADD_NODE', variables);
        }
    },
    computed: {
        nodes() { return this.$store.state.djikstra.nodes; }
    },
    mounted: function() {
        // window.addEventListener('mousemove', this.onMouseMove);
    }
}
</script>
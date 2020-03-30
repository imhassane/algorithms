<template>
    <div>
        <vue-p5 @sketch="sketch" />
    </div>
</template>

<script>
import VueP5 from "vue-p5";

export default {
    name: 'djikstra-field',
    components: { VueP5 },
    methods: {
        sketch(sk) {
            let nodes = this.nodes;

            sk.setup = function() {
                sk.resizeCanvas(1500, 600);
            }

            sk.draw = function() {
                sk.background("#000");
                sk.displayNodes();
                sk.noLoop();
            }

            sk.displayNodes = function() {
                for(let node of nodes) {
                    sk.stroke(255);
                    sk.fill(255);
                    for(let neig of node.neighbors) {
                        sk.line(node.x, node.y, neig.node.x, neig.node.y);
                        
                        let a = { x: node.x, y: node.y };
                        let b = { x: neig.node.x, y: neig.node.y };
                        let middle = sk.getMiddle(a, b);
                        sk.text(neig.mass, middle.x, middle.y);
                    }
                    sk.ellipse(node.x, node.y, 70, 60);
                    sk.textSize(15);
                    sk.fill(0);
                    sk.text(node.name, node.x-20, node.y);
                }
            }

            sk.getMiddle = function(a, b) {
                let x = (a.x + b.x) / 2;
                let y = (a.y + b.y) / 2;
                return {x, y}
            }
        }
    },
    computed: {
        nodes: function() { return this.$store.state.djikstra.nodes; },
    },
    mounted: function() {
    }
}
</script>
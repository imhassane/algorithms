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
            sk.setup = function() {
                sk.resizeCanvas(1500, 600);
            }

            sk.draw = function() {
                sk.background("silver");
                sk.noLoop();
            }
        }
    }
}
</script>
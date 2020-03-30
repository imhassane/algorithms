<template>
    <div>
        <vue-p5 @sketch="sketch" />
    </div>
</template>

<script>
import VueP5 from "vue-p5";

export default {
    name: 'quicksort',
    components: { VueP5 },
    methods: {
        sketch(sk) {
            let values = [];
            let w;
            let initButton = null;

            sk.setup = function() {
                w = 8;
                sk.resizeCanvas(sk.windowWidth, 500);

                initButton = sk.createButton("run again");
                initButton.mousePressed(sk.reinitialize);
                initButton.class("uk-button uk-margin");

                for(let j = 0; j < sk.width/w; j++) {
                    values.push(sk.random(sk.height));
                }
                sk.frameRate(5);
                sk.quicksort(values, 0, values.length - 1);
            }

            sk.draw = function() {
                sk.background("#C7EFCF");
                for(let i = 0; i < values.length; i++) {
                    sk.rect(i*w, sk.height, w, -values[i]);
                }
            }

            sk.reinitialize = function() {
                for(let j = 0; j < values.length; j++) {
                    values[j] = sk.random(sk.height);
                }
                sk.quicksort(values, 0, values.length-1);
                sk.loop();
            }

            sk.swap = async (arr, i, j) => {
                await sk.sleep(50);
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }

            sk.sleep = tm => new Promise(r => setTimeout(r, tm));

            sk.quicksort = async function(arr, min, max) {
                if(min < max) {
                    const pi = await sk.partition(arr, min, max);

                    await Promise.all([
                        sk.quicksort(arr, min, pi - 1),
                        sk.quicksort(arr, pi + 1, max)
                    ]);
                }
            }

            sk.partition = async function(arr, min, max) {
                let pivot = arr[max];

                let index = min - 1;

                for(let j = min; j <= max - 1; j++) {
                    if(arr[j] < pivot) {
                        index++;
                        await sk.swap(arr, index, j);
                    }
                }

                await sk.swap(arr, index + 1, max);
                return index + 1;
            }
        }
    }
}
</script>
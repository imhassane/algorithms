<template>
    <vk-grid class="uk-child-width-1-2@m">
        <div class="uk-text-left">
            <h1>Hola!</h1>
            <p>
                My name is Hassane and welcome to <br />
                my website.
            </p>
            <p>
                Here, you'll find a set of algorithms that I've<br />
                I've myself implemented in js.
            </p>
            <p>
                You can find me on github if you want to see more
            </p>
            <p>
                <vk-icon-button href="https://github.com/imhassane" class="uk-margin-small-right" icon="github"></vk-icon-button>
            </p>
        </div>
        <div>
            <vue-p5 @sketch="sketch" />
        </div>
    </vk-grid>
</template>

<script>
import VueP5 from "vue-p5";

export default {
    name: 'home',
    components: { VueP5 },
    methods: {
        sketch(sk) {
            let replayButton;
            let values = [];
            let i = 0;

            sk.setup = function() {
                sk.resizeCanvas(600, 400);
                replayButton = sk.createButton("run again");
                replayButton.mousePressed(sk.onRunAgain);
                replayButton.class('uk-button uk-margin');

                for(let j = 0; j < sk.width/8; j++) {
                    values.push(sk.random(sk.height));
                }
            }

            sk.onRunAgain = function() {
                    values = [];
                    for(let j = 0; j < sk.width/8; j++) {
                        values.push(sk.random(sk.height));
                    }
                    i = 0;
                    sk.loop();
            }

            sk.draw = function() {
                sk.background("#C7EFCF");

                if(i < values.length) {
                    for(let j = 0; j < values.length; j++) {
                        if(values[i] < values[j]) {
                            let temp = values[i];
                            values[i] = values[j];
                            values[j] = temp;
                        }
                    }
                    i++;
                } else {
                    sk.noLoop();
                }

                for(let j = 0; j < values.length; j++) {
                    sk.rect(j*8, sk.height, 8, -values[j], 8);
                }

            }

        }
    }
}
</script>
<template>
    <vk-grid class="uk-child-width-1-3@m">
        <div class="uk-margin">
            <label>Node name</label>
            <input type="text" class="uk-input" placeholder="Ex: Paris" />
        </div>
        <div>
            <label>Associate with</label>
            <select class="uk-select">

            </select>
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
}
</script>
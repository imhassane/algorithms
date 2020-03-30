<template>
    <div>
        <node-creator />
        <hr />
        <djikstra-field />
    </div>
</template>

<script>
import NodeCreator from "@/components/djikstra/node-creator";
import DjikstraField from "@/components/djikstra/djikstra-field";

export default {
    name: 'djikstra',
    components: { NodeCreator, DjikstraField }
}
</script>
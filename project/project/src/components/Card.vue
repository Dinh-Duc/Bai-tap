<template>
    <div>
        <h2>{{cardWord}}</h2>
        <p>This is my card</p>
        <slot></slot>
    </div>
</template>

<script>
export default {
    props : ['cardWord']
}
</script>

<style scoped>
    div {
        border: 1px solid #ccc;
        box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6);
        padding: 30px;
        margin: 20px auto;
        text-align: center;
    }

</style>>

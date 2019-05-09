<template>
    <div>
        <el-input
                type="number"
                @input="onInput"
                :placeholder="title"
                v-model="input">
        </el-input>
    </div>
</template>

<script>
    export default {
        name: 'NumberInput',

        props: ['placeholder', 'label', 'name', 'value', 'title'],

        data() {
            return {
                input: ''
            }
        },

        methods: {
            onInput() {
                this.$emit('input', this.input);
            },
        },
    };
</script>

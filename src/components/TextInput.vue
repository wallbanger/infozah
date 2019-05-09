<template>
    <div>
        <el-input
                @input="onInput"
                :placeholder="title"
                :value="value"
                v-model="input">
        </el-input>
    </div>
</template>

<script>
    export default {
        name: 'TextInput',

        data() {
            return {
                input: ''
            }
        },

        props: ['value', 'title', 'validation'],

        mounted() {
            this.$on('error', (err) => {
                console.log('title', err);
            })
        },

        methods: {
            onInput() {
                this.$emit('input', this.input);
            }
        },
    };
</script>

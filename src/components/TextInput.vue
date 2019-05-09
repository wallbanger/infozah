<template>
    <div>
        <el-input
                @input="onInput"
                :placeholder="title"
                v-model="input">
        </el-input>
    </div>
</template>

<script>
    export default {
        name: 'TextInput',

        props: {
            title: {
                required: true,
                type: String
            },

            validation: {
                required: false,
                type: Object
            },
        },

        data() {
            return {
                input: ''
            }
        },

        mounted() {
            this.$on('error', this.check)
        },

        beforeDestroy() {
            this.$off('error', this.check)
        },

        methods: {
            onInput() {
                this.$emit('input', this.input);
            },

            check(error) {
                console.log('title', error);
            }
        },
    };
</script>

<template>
    <div>
        <el-date-picker
                v-model="input"
                type="date"
                :placeholder="title"
                @change="choose">
        </el-date-picker>
    </div>
</template>

<script>
    export default {
        name: 'DatePicker',

        props: {
            title: {
                required: true,
                type: String
            },
        },

        data() {
            return {
                input: ''
            }
        },

        methods: {
            choose(date) {
                this.$emit('input', date);
            }
        },
    };
</script>

<style>
    .el-date-editor.el-input,
    .el-date-editor.el-input__inner {
        width: 100%;
    }
</style>

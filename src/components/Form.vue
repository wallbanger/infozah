<template>
    <div class="form-container">
        <el-container>
            <el-header>
                <h1>{{ schema.code }}</h1>
            </el-header>
        </el-container>

        <form-generator
                :schema="schema"
                :enumTypes="enumTypes"
                v-model="formData">
        </form-generator>
    </div>
</template>

<script>
    import FormGenerator from './FormGenerator.vue';
    import { enumTypes, schema } from '../data';

    export default {
        name: 'Form',

        components: {
            FormGenerator
        },

        data() {
            return {
                enumTypes,
                schema,
                formData: {},
            };
        },
    };
</script>

<style>
    .form-container {
        max-width: 400px;
        margin: 0 auto;
    }
</style>

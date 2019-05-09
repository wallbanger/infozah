<template>
    <form v-model="formData" @submit.preven="checkForm" ref="form">
        <div class="form-item" v-for="(field, index) in schema.attributes" :key="index">
            <component
                       :is="field.fieldType"
                       :value="formData[field.code]"
                       :options="checkEnumTypes(field.enumType)"
                       @input="updateForm(field, $event)"
                       v-bind="field">
            </component>
            <div class="form-item__multiple" v-if="field.multiple">
                <el-button
                        icon="el-icon-plus"
                        @click="duplicateField(field)"
                        circle>
                </el-button>
            </div>
        </div>
        <el-button type="primary" round @click="submit">Submit</el-button>
        <!--<input type="submit" value="Отправить">-->
    </form>
</template>

<script>
    import NumberInput from './NumberInput.vue';
    import SelectList from './SelectList.vue';
    import TextInput from './TextInput.vue';
    import DatePicker from './DatePicker.vue';

    export default {
        name: 'FormGenerator',

        components: {
            NumberInput,
            SelectList,
            TextInput,
            DatePicker
        },

        props: {
            schema: {
                required: true,
                type: Object
            },

            enumTypes: {
                required: true,
                type: Object
            },
        },

        data() {
            return {
                errors: {},
                formData: this.value || {},
            };
        },

        methods: {
            updateForm(field, value) {
                this.$set(this.formData, field.code, value);
                this.$emit('input', this.formData);
            },

            checkForm(e) {
                this.schema.attributes.forEach(item => {
                    if (item.validation) {

                        // this.errors[item.code] = Object.values(item.validation)[0];

                        if (!this.formData[item.code]) {
                            console.log('empty');
                            item.error = true;
                        } else {
                            switch (Object.keys(item.validation)[0]) {
                                case 'required':
                                    console.log('required');
                                    break;
                                case 'email':
                                    console.log('email');
                                    break;
                                case 'pattern':
                                    console.log('pattern');
                                    break;
                            }
                        }
                    } else {
                        this.errors[item.code] = null;
                    }
                });

                console.log(666, this.errors);
                e.preventDefault();
            },

            checkEnumTypes(type) {
                if (type) {
                    return this.enumTypes[type];
                }
            },

            submit() {
                // console.log(this.$refs.form);
                console.log('%c Result: ', 'background: #222; color: #bada55');
                console.log(this.formData);
            },

            duplicateField(item) {
                let elem = Object.assign({}, item);
                elem.code = `${elem.code}_2`;
                elem.multiple = null;
                item.multiple = null;
                this.schema.attributes.push(elem);
            }
        },
    };
</script>

<style>
    .form-item {
        padding: 10px;
        position: relative;
        display: flex;
    }

    .form-item > div {
        flex: 1;
    }

    .form-item .form-item__multiple {
        flex: 0;
        margin-left: 10px;
    }
</style>

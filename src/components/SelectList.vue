<template>
    <div>
        <treeselect
                :options="selectList"
                :searchable="false"
                :show-count="true"
                :placeholder="title"
                @input="onInput"
                v-model="value"
        />
    </div>
</template>

<script>
    import Treeselect from '@riophae/vue-treeselect'
    import '@riophae/vue-treeselect/dist/vue-treeselect.css'

    export default {
        name: 'SelectList',

        components: {
            Treeselect
        },

        props: {
            options: {
                required: true,
                type: Array
            },

            title: {
                required: true,
                type: String
            },
        },

        data() {
            return {
                value: null,
                selectList: []
            }
        },

        created() {
            this.selectList = this.sortByNesting(this.options, 0);
        },

        methods: {
            onInput() {
                let currentItem = this.options.find(item => item.id === this.value);

                if (currentItem) {
                    this.$emit('input', currentItem.label)
                }
            },

            sortByNesting(arr, parentId) {
                let children = [];

                for (let i = 0; i < arr.length; ++i) {
                    arr[i].label = arr[i].title;

                    if (!arr[i].parentId) {
                        arr[i].parentId = 0;
                    }

                    if (arr[i].parentId === parentId) {
                        let grandChildren = this.sortByNesting(arr, arr[i].id);

                        if (grandChildren.length) {
                            arr[i].children = grandChildren;
                        }
                        children.push(arr[i]);
                    }
                }
                return children;
            },
        },
    };
</script>

<style>
    .vue-treeselect div, .vue-treeselect span {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        font-size: 14px;
    }

    .vue-treeselect__single-value {
        color: #606266;
    }
</style>

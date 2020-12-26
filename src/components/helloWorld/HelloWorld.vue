<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        {{ name }}
        {{ getName() }}
        {{ getTest() }}
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import init from '@/components/helloWorld/init.ts'
import test from '@/components/helloWorld/test.ts'

export default defineComponent({
    props: {
        msg: {
            type: String,
            require: true,
        },
    },
    setup(props) {
        const { name, getName } = init()
        const { testName, getTest } = test()
        return { name, getName, testName, getTest }
    },
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>

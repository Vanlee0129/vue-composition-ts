import { reactive, toRefs } from 'vue'

interface Test {
    testName: string
}

function test(): any {
    const data: Test = reactive({
        testName: 'lee',
    })
    function getTest(): string {
        return data.testName
    }
    return {
        ...toRefs(data),
        getTest,
    }
}

export default test
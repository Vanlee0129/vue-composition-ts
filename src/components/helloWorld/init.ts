import { reactive, toRefs } from 'vue'

interface Init {
    name: string
}

function init(): any {
    const initData: Init = reactive({
        name: 'vanlee',
    })
    function getName(): string {
        return initData.name
    }
    return {
        ...toRefs(initData),
        getName,
    }
}

export default init

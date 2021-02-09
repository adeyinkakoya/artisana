import { indexOf } from 'lodash/core'


export default {

    getIndexFromList(state) {
        return indexOf(state.list, "b")
    }

}
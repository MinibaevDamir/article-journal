import type { GetterTree } from 'vuex'
import type { State } from './state'

export type Getters = {
    // doubledCounter(state: State): number
}

export const getters: GetterTree<State, State> & Getters = {
    // doubledCounter: (state) => {
    //     return state.counter * 2
    // },
}

import type { MutationTree } from 'vuex'
import { MutationTypes } from '@/constants/mutation-types'
import type { State } from './state'

export type Mutations<S = State> = {
    [MutationTypes.SET_LOGGED_IN](state: S, status: boolean): void
}

export const mutations: MutationTree<State> & Mutations = {
    [MutationTypes.SET_LOGGED_IN](state, status: boolean) {
        state.loggedIn = status
    },
}
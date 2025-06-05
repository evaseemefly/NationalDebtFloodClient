import consola from 'consola'
import { SET_FLOOD_PLAIN_SHOW_TRIGGER, GET_FLOOD_PLAIN_SHOW_TRIGGER } from './../types'

export interface IFlood {
	floodPlainShowTrigger: number
}

const state: IFlood = {
	floodPlainShowTrigger: 0,
}

const getters = {
	[GET_FLOOD_PLAIN_SHOW_TRIGGER](state: IFlood): number {
		return state.floodPlainShowTrigger
	},
}

const mutations = {
	[SET_FLOOD_PLAIN_SHOW_TRIGGER](state: IFlood): void {
		state.floodPlainShowTrigger += 1
		// consola.info(`Flood plain show trigger updated: ${state.floodPlainShowTrigger}`)
		// 触发更新后，可以在这里添加其他逻辑，比如通知其他组件等
	},
}

export default {
	namespaced: true,
	state: state,
	mutations,
	getters,
}

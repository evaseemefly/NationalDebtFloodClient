import axios from 'axios'
import { host } from './common'
import authHeader from './auth_header'
import { ISearchTyStationParams } from '@/middle_model/api_params'
import { faYammer } from '@fortawesome/free-brands-svg-icons'
// 枚举
import { FilterTypeEnum } from '@/enum/filter'
import { IPathType } from '@/types'

import { DEFAULT_COMPLEX_NUM, DEFAULT_TY_NUM } from '@/const/default'
// 后端的请求地址及端口
// export const host = host
axios.defaults.withCredentials = true

const area = '/tasks'

/**
 * 提交台风路径数据
 * @param par
 * @returns
 */
const submitTyphoonPath = (params: IPathType[]) => {
	const url = `${host}${area}/create/typhoon/path`
	return axios.post(url, {
		params: params,
	})
}

export { submitTyphoonPath }

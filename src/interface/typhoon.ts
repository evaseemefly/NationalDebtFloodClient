/** 台风路径接口 */
export interface ITyPath {
	forecastDt: Date
	lat: number
	lon: number
	bp: number
	isForecast: boolean
	tyType: string
}

/** 台风采集基础信息接口 */
export interface ITyDetail {
	tyCode: string
	tyNameCh: string
	tyNameEn: string
	timeStamp: number
}

/** 提交的台风复合接口 */
export interface ITyPathComplex {
	tyDetail: ITyDetail
	tyPathList: ITyPath[]
}

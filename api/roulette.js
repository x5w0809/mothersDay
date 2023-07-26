import qs from 'qs'
const apiPath = '/api/game'
/**
 * 取得轉盤資訊
 */
export async function GetLotteryItemList(obj, self) {
  const response = await self.$serverApi.$post(
    `${apiPath}/LotteryItemList`,
    qs.stringify(obj)
  )
  return response
}
/**
 * 取得轉盤可玩次數
 * 1: 成功 999:異常
 */
export async function GetLotteryPlayCount(obj, self) {
  const response = await self.$serverApi.$post(
    `${apiPath}/LotteryPlayCount`,
    qs.stringify(obj)
  )
  return response
}
/**
 * 轉盤抽獎結果
 * 0:失敗 1: 成功 999:異常
 */
export async function GetLotteryResult(obj, self) {
  const response = await self.$serverApi.$post(
    `${apiPath}/LotteryResult`,
    qs.stringify(obj)
  )
  return response
}

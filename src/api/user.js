/**
 * 用戶相關請求模塊
 */
import request from '@/utils/request'

/**
 * 登入/註冊 (封裝請求方法)
 */
export const login = data => {
  return request({
    method: 'GET',
    url: '/string',
    // method: 'POST',
    // url: '/app/v1_0/authorizations',
    // url: '/api/app/v1_0/authorizations',
    data
  })
}

import request from '@/utils/request'

export function fetchSkill(query) {
  return request({
    url: 'http://127.0.0.1:5000/skills/',
    method: 'get',
    params: ''
  })
}

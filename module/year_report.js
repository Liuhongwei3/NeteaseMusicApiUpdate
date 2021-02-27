// 年度歌单

module.exports = (query, request) => {
  return request(
    'POST',
    `https://music.163.com/weapi/activity/summary/annual/2020/userdata`,
    {},
    {
      crypto: 'weapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
}

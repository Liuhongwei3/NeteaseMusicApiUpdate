// 独家放送

module.exports = (query, request) => {
    return request(
        'POST',
        `https://music.163.com/weapi/personalized/privatecontent`,
        { limit: query.limit || 4 },
        {
            crypto: 'weapi',
            cookie: query.cookie,
            proxy: query.proxy,
            realIP: query.realIP,
        },
    );
};

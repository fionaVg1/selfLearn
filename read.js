const request = require('request-promise');
const cheerio = require('cheerio');
const debug = require('debug')('music:read');
const read = async(url)=>{
    debug('https://movie.douban.com');
    const opts = {
        url:url,
        transform: body => {
            return cheerio.load(body);
        }
    };
    return request(opts).then($ => {
        let result = [];
        $('#screening li.ui-slide-item').each((index, item) => {
            let ele = $(item);
            let name = ele.data('title');
            let score = ele.data('rate') || '暂无评分';
            let href = ele.find('.poster a').attr('href');
            let imageSrc = ele.find('img').attr('src');
            // 影片id可以从影片href中获取到
            let movieId = href && href.match(/(\d+)/)[1];
            // 为了防止豆瓣防盗链导致裂图，换成webp格式加载图片
            imageSrc = imageSrc && imageSrc.replace(/jpg$/, 'webp');
            if (!name || !imageSrc || !href) {
                return;
            }

            result.push(
                {
                    movieId,
                    name,
                    score,
                    href,
                    imageSrc
                }
            );

        });
        return result;
    });
};
module.exports = read;
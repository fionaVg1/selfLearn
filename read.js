const request = require('request-promise');
const cheerio = require('cheerio');
const debug = require('debug')('music:read');
const read = async(url)=>{
    debug('https://music.163.com/#/discover/toplist  云音乐飙升榜');
    const opts = {
        url,
        transform: body => {
            return cheerio.load(body);
        }
    };
    return request(opts).then($ => {
        let result = [];
        $('#toplist .m-table-rank').find('tr').each((index, item) => {
            let ele = $(item);
            let href = ele.find('.rank a').attr('href');
            let musicId = href && href.match(/(\d+)/)[1];
            let name = ele.find('.rank .txt b').attr('title');
            let image = ele.find('.rank img').attr('src');
            if (!id || !name || !image) {
                return;
            }
            result.push(
                {
                    musicId,
                    name,
                    imageSrc
                }
            );

        });
        return result;
    });
};
module.exports = read;
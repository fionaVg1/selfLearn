const read = require('./read');
const write = require('./write');
const targetUrl = 'https://movie.douban.com';
(
    async () => {
        const musics = await read(targetUrl);
        await write(musics);     
    }
)();
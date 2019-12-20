const read = require('./read');
const write = require('./write');
const targetUrl = 'https://music.163.com/#/discover/toplist';
(
    async () => {
        const musics = await read(targetUrl);
        await write(musics);
        process.exit();
    }
)();
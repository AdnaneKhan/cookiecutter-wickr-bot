const { WickrIOAddon } = require('wickrio_addon');

const {{cookiecutter.class_name}} = require('./lib/bot');

async function main() {
    let bot = new {{cookiecutter.class_name}}(new WickrIOAddon());
    bot.start();
}

main().then(result => {}).catch(e => { console.error(e); process.exit(1); });

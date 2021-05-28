const TelegramBot = require('node-telegram-bot-api');

const TOKEN = `1740980044:AAFzAD-ELi5AST0YgasZG5KgdCzU2IgnAI4`;

const bot = new TelegramBot(TOKEN, {
    polling: true
});

bot.on('message', async(msg) => {
    const text = msg.text;
    const firstName = msg.chat.first_name;
    const chatId = msg.chat.id;


    if(text == '/start') {
    const message = await bot.sendMessage(chatId, `Assalomu alaykum hurmatli ${firstName}`);
    console.log(message.text);
    } else if (text == 'yaxshimisan') {
        const message = await bot.sendMessage(chatId, `Yaxshi, o'zingchi?`)
        console.log(message.text);
    }
})
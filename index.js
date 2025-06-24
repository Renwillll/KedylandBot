const { Client, GatewayIntentBits, ActivityType } = require('discord.js');
const dotenv = require('dotenv');
dotenv.config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

const prefix = '!';

client.once('ready', () => {
    console.log(`Bot giriş yaptı: ${client.user.tag}`);

    // Botun durumunu (status) ve aktivitesini ayarla
    client.user.setPresence({
        status: 'idle', // dnd | idle | online | invisible
        activities: [{
            name: 'Kedyland...',
            type: ActivityType.Watching, // Playing | Listening | Watching | Competing
        }],
    });
});

client.on('messageCreate', async (message) => {
    if (message.author.bot || !message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/\s+/);
    const command = args.shift().toLowerCase();

    if (command === 'ping') {
        message.reply('Pong!');
    }

    // Başka komutlar buraya eklenebilir
});

client.login(process.env.TOKEN);

const Discord = require('discord.js');
const db = require("quick.db")

exports.run = (client, message, args) => {
    const umutbey = new Discord.MessageEmbed()
    .setColor('RED')
    .setAuthor(`Luisa Plus+`, client.user.avatarURL) 
.setThumbnail(client.user.avatarURL)
.setDescription(`
<a:file53:955087248435589180> Sunucunuza Luisa Plus+ botunu eklemek istiyorsaniz

<a:kalp:955087244010610739> **  Davet Linki ** [➾ Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=764484777574793266&scope=bot&permissions=8)
<a:kalp:955087244010610739> ** Botun Sitesi ** [➾ Web Site Linki](https://www.luisabot.ga)`)
.setFooter(`${client.user.username} - Tüm hakları saklıdır.`, client.user.avatarURL)
.setImage('https://images-ext-1.discordapp.net/external/03xxIorXwIyoB_8WKrF8ugR0odd9lkC6q6HQ6DjpWi4/https/media.discordapp.net/attachments/952237906980929546/954686208292823070/standard.gif')
    .setTimestamp()
    message.channel.send(umutbey).catch()

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'davet',
      category: 'bY Selçuk',
      description: 'CODE SELCUK.',
};
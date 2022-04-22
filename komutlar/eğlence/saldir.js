const fs = require('fs');
const discord = require('discord.js');
const database = require('croxydb');
const db = require('croxydb');
exports.run = async(client, message, args) => {
const prefix = (await db.fetch(`prefix_${message.guild.id}`)) || client.ayarlar.prefix
let saldirmasana = args.slice(1).join(' ');
let uye = message.mentions.users.first();

if (message.mentions.users.size < 1) return message.channel.send(`Üye etiketlemedin, nasıl saldıracağım?!`)
if(!args[0])  return message.channel.send(`Kullanım: ${prefix}saldır @ÜYE Saldırma Sebebi`)
if(!args[1])  return message.channel.send(`Kullanım: ${prefix}saldır @ÜYE Saldırma Sebebi`)

const umutice = new discord.MessageEmbed()
.setDescription("**Buneee, imdaaat**\n- <@!" + uye + `>\n**Şimdi Mahvettim Seni!**\n- <@!${message.author.id}>\n**Ne yaptım kiiiii, imdaat!!**\n- <@` + uye + ">\n**" + saldirmasana + `**\n-<@!${message.author.id}>`)
.setFooter( "LUİSA PLUS+ / Discord'da Yeni Devrim!", client.user.avatarURL())
.setColor("BLUE")
.setImage("https://media4.giphy.com/media/U3t0STrvMXB3HYrOAe/200w.webp")
message.channel.send(umutice)  

  
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'saldır',
  description: 'Birine Saldırırsınız.',
  usage: ''
};
const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
let prefix = db.fetch(`prefix_${message.guild.id}`) || "!";    

if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`:x: **Bu komutu kullanabilmek için** "\`Yönetici\`" **yetkisine sahip olmalısın.**`);
 const rol = db.fetch(`boostrol_${message.guild.id}`)  
if(!rol)  return message.channel.send(new Discord.MessageEmbed()
.setDescription(`**\`\`\`HATA : Sistem Zaten Kapalı!\`\`\`**`)
 ) 

const clientdev = new Discord.MessageEmbed()
.setDescription(`╔▬▬▬▬▬▬▬▬▬Boost Sistemi Kapatma▬▬▬▬▬▬▬▬▬▬
║► ✅ Boost Sistemi Dektif Edildi.
╚▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
`)
message.channel.send(clientdev)
 
  db.delete(`boostrol_${message.guild.id}`)  
  db.delete(`boostlog_${message.guild.id}`) 
  db.delete(`boostmesaj_${message.guild.id}`)  
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    permLevel: 0,
    aliases: ['boost-sistemi-kapat']
  };
  
  exports.help = {
    name: 'boost-sistemi-kapat',
    description: 'Türkiyenin Saatini Gösterir',
    usage: 'gç'
  };
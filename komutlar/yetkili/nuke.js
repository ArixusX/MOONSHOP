const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message) => {
    const DBL = require("dblapi.js");
    const dbl = new DBL(`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc2NDQ4NDc3NzU3NDc5MzI2NiIsImJvdCI6dHJ1ZSwiaWF0IjoxNjQ3NzgyNTY3fQ.f0d_B63yQ-8r5caq23bBR9OVexs2idJifvl2R8-qy-w`,client)
    if(!db.has(`üyelikk_${message.author.id}`) === "aktif") {
      dbl.hasVoted(message.author.id).then(voted => {
        if(voted === true) {
          if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Bu komutu kullanabilmek için `YÖNETİCİ` iznine ihtiyacın var!")
        setTimeout(() => {
      message.channel.clone({ 
              position: message.channel.rawPosition,  
              permissionOverwrites: message.channel.permissionOverwrites,
              topic: message.channel.topic, 
              nsfw: message.channel.nsfw, 
              userLimit: message.channel.userLimit,
          }).then(sa => { 
              const embed = new Discord.MessageEmbed()
              .setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({ dynamic: true }))
              .setColor(client.ayarlar.embedRenk)
              .setDescription(`Kanal başarılı bir şekilde kopyalandı ve eski kanal silindi!`)
              .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
              sa.send(embed) 
              message.channel.delete()
          })
        }, 2000)
        } else {
          const embed = new Discord.MessageEmbed()
          .setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({ dynamic: true }))
          .setColor(client.ayarlar.embedRenk)
          .setDescription(`Selam ${message.author}, eğer **${exports.help.name}** Adlı komutu kullanmak istiyorsan DBL üzerinden oy vermen gerekli!\nOy verme bağlantısı: [Tıkla](https://top.gg/bot/${client.user.id})`)
          .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
        message.channel.send(embed);
        }
      })
    } else {
          if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Bu komutu kullanabilmek için `YÖNETİCİ` iznine ihtiyacın var!")
        setTimeout(() => {
      message.channel.clone({ 
              position: message.channel.rawPosition,  
              permissionOverwrites: message.channel.permissionOverwrites,
              topic: message.channel.topic, 
              nsfw: message.channel.nsfw, 
              userLimit: message.channel.userLimit,
          }).then(sa => { 
              const embed = new Discord.MessageEmbed()
              .setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({ dynamic: true }))
              .setColor(client.ayarlar.embedRenk)
              .setDescription(`Kanal başarılı bir şekilde kopyalandı ve eski kanal silindi!`)
              .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
              sa.send(embed) 
              message.channel.delete()
          })
        }, 2000)
  }
    
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["kanalsil", "kanalyenile"]
};

exports.help = {
  name: "nuke",
  description: "Bulunduğunuz kanalı temizler ve yenisini açar.",
  usage: "nuke"
};
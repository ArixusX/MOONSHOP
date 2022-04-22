const Discord = require("discord.js");
const db = require("quick.db")
exports.run = async (client, message, args) => {

if (!message.member.hasPermission('ADMINISTRATOR'))

        return message.channel.send(' Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalısın! ')

	
if(!args[0]) return message.channel.send(new Discord.MessageEmbed().setDescription('```HATA : Bir Seçenek Belirt, Belirtebileceğin Seçenekler: <ayarla> <#kanal>/<sıfırla>```'))
if(args[0]) {
  if(args[0] !== "ayarla" && args[0] !== "sıfırla") {
 return message.channel.send(new Discord.MessageEmbed().setDescription('```HATA : Bir Seçenek Belirt, Belirtebileceğin Seçenekler: <ayarla> <#kanal>/<sıfırla>```'))
}
  if(args[0] == "ayarla") {
    if(!args[1]) {
return message.channel.send(new Discord.MessageEmbed().setDescription('```HATA : Bir Kanal Etiketleyin.```'))    } else {
      let kanal = message.mentions.channels.first() || client.channels.cache.get(args[1])
      if(!kanal) {
return message.channel.send(new Discord.MessageEmbed().setDescription('```HATA : Böyle Bir Kanal Bulamadım```'))      } else {
       db.set(`boostlog_${message.guild.id}`, kanal.id)
       const clientdev = new Discord.MessageEmbed()
       .setDescription(`**Boost Log başarıyla <#${kanal.id}> olarak ayarlandı.**`)
       message.channel.send(clientdev)
      }
    }
  }
  if(args[0] == "sıfırla") {
    db.delete(`boostlog_${message.guild.id}`)
           const clientdev = new Discord.MessageEmbed()
       .setDescription(`**Boost Log başarıyla sıfırlandı.**`)
           message.channel.send(clientdev)
  }
}
  
};
exports.conf = {

  enabled: true,

  guildonly: false,

  aliases: ['boost-log'],

  permlevel: 0

}

exports.help = {

  name: 'boostlog',

  description: 'kız olarak kayıt eder',

  usage: '!kız @kullanıcı isim yaş'

}
//exports.requires = {
  // usage: "boost-log",
  // permLvL: "MANAGE_GUILD",
  // guildOnly: "E",
  // disabled: "H",
  // blacklist: "H",
  // aliases: ["boost-log"],
   //aciklama: "test"
  
 //}
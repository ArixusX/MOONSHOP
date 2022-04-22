let database = require("quick.db")
let Discord = require("discord.js")


exports.run = async(client, message) => {
  if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed().setColor('#00001').setDescription(`**Bu komutu kullanmak için yetkin yetersiz** <:waht:955087243553431604>`));
  
  let rol = message.mentions.roles.first()
  if(!rol) return message.channel.send(new Discord.MessageEmbed().setColor('#00001').setDescription(`**Aboneleri Verecek Rolü Etiketlemen Lazım** <:waht:955087243553431604>`));
  
  //Bu Bot Zego Share Tarafından Kodlanmıştır zekiarda.xyz 
  database.set(`abonesorumlusu.${message.guild.id}`, rol.id)
  message.channel.send(new Discord.MessageEmbed().setColor('#00001').setDescription(`**Abone Sorumlusunu ${rol} Olarak Ayarladım!** <:wht:955087238696419378>`));
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['abone-sorumlusu'],//Bu Bot Zego Share Tarafından Kodlanmıştır zekiarda.xyz 
  perm: 0
}
exports.help = {
  name: 'abone-sorumlusu'
}

exports.play = {
  kullanım: 'abone-sorumlusu @rol',//Bu Bot Zego Share Tarafından Kodlanmıştır zekiarda.xyz 
  açıklama: 'Abone Sorumlusu Rolünü Ayarlarsınız',
  kategori: 'Abone'
}
let database = require("quick.db")//Bu Bot Zego Share Tarafından Kodlanmıştır zekiarda.xyz 
let Discord = require("discord.js")
const db = require("quick.db")

exports.run = async(client, message) => {//Bu Bot Zego Share Tarafından Kodlanmıştır zekiarda.xyz 
  const prefix = (await db.fetch(`prefix_${message.guild.id}`)) || client.ayarlar.prefix
    if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed().setColor('#00001').setDescription(`**Bu komutu kullanmak için yetkin yetersiz** <:waht:955087243553431604>`));
  
  let rol = message.mentions.roles.first()
  if(!rol) return message.channel.send(new Discord.MessageEmbed().setColor('#00001').setDescription(`**Rol etiketlemen gerekmekte örnek: ${prefix}abonerol @rol** <:waht:955087243553431604>`));
  
  
  database.set(`abonerol.${message.guild.id}`, rol.id)
  message.channel.send(new Discord.MessageEmbed().setColor('#00001').setDescription(`**Abone rolü başarıyla ${rol} olarak ayarlandı.** <:wht:955087238696419378>`));
  
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['abone-rol'],//Bu Bot Zego Share Tarafından Kodlanmıştır zekiarda.xyz 
  perm: 0
}
exports.help = {
  name: 'abone-rol'
}

exports.play = {
  kullanım: 'abone-rol @rol',
  açıklama: 'Abone Rolünü Ayarlarsınız',
  kategori: 'Abone'
}
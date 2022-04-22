let database = require("quick.db")//Bu Bot Zego Share Tarafından Kodlanmıştır zekiarda.xyz 
const db = require("quick.db")
let Discord = require("discord.js")

//Bu Bot Zego Share Tarafından Kodlanmıştır zekiarda.xyz 
exports.run = async(client, message) => {
  const prefix = (await db.fetch(`prefix_${message.guild.id}`)) || client.ayarlar.prefix
    if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed().setColor('#00001').setDescription(`**Bu komutu kullanmak için yetkin yetersiz** <:waht:955087243553431604>`));
  
  let mesaj = message.mentions.channels.first()
  if(!mesaj) return message.channel.send(new Discord.MessageEmbed().setColor('#00001').setDescription(`**Kanal etiketlemen gerekmekte örnek: ${prefix}abonemesaj #kanal** <:waht:955087243553431604>`));
  
  //Bu Bot Zego Share Tarafından Kodlanmıştır zekiarda.xyz 
  database.set(`abonemesaj.${message.guild.id}`, mesaj.id)
  message.channel.send(new Discord.MessageEmbed().setColor('#00001').setDescription(`**Abone kanalı başarıyla ${mesaj} olarak ayarlandı.** <:wht:955087238696419378>`));
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['abone-mesaj'],
  perm: 0//Bu Bot Zego Share Tarafından Kodlanmıştır zekiarda.xyz 
}
exports.help = {
  name: 'abone-mesaj'
}

exports.play = {
  kullanım: 'abone-mesaj #kanal',
  açıklama: 'Abone Logunu Ayarlarsınız',
  kategori: 'Abone'
}
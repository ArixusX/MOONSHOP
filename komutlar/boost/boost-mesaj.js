const Discord = require("discord.js");
const db = require("quick.db")
exports.run = async (client, message, args) => {


if(!args[0]) return message.channel.send(new Discord.MessageEmbed().setDescription('```HATA : Bir Seçenek Belirt, Belirtebileceğin Seçenekler: <ayarla> <#kanal>/<sıfırla>```'))
if(args[0]) {
  if(args[0] !== "ayarla" && args[0] !== "sıfırla") {
return message.channel.send(new Discord.MessageEmbed().setDescription('```HATA : Bir Seçenek Belirt, Belirtebileceğin Seçenekler: <ayarla> <#kanal>/<sıfırla>```'))
}
  if(args[0] == "ayarla") {
    if(!args[1]) {
return message.channel.send(new Discord.MessageEmbed().setDescription('```HATA : Lütfen Mesajınızı Yazınız```'))
    } else {
      let msj = args.slice(1).join(' ')
      if(!msj) {
return message.channel.send(new Discord.MessageEmbed().setDescription('```HATA : Lütfen Geçerli Bir Mesaj Girin```'))
      } else {
       db.set(`boostmesaj_${message.guild.id}`, `${args.slice(1).join(' ')}`)
              const clientdev = new Discord.MessageEmbed()
       .setDescription(`Boost Mesajı başarıyla **${args.slice(1).join(' ')}** olarak ayarlandı.`)
              message.channel.send(clientdev)
      }
    }
  }
  if(args[0] == "sıfırla") {
    db.delete(`boostmesaj_${message.guild.id}`)
           const clientdev = new Discord.MessageEmbed()
       .setDescription(`**Boost Mesajı başarıyla sıfırlandı.**`)
  message.channel.send(clientdev)
           }
}
  
};
exports.conf = {

  enabled: true,

  guildonly: false,

  aliases: ['boost-mesaj'],

  permlevel: 0

}

exports.help = {

  name: 'boost-mesaj',

  description: 'kız olarak kayıt eder',

  usage: '!kız @kullanıcı isim yaş'

}
//xports.requires = {
  // usage: "boost-mesaj",
  // permLvL: "MANAGE_GUILD",
 //  guildOnly: "E",
  // disabled: "H",
 //  blacklist: "H",
 //  aliases: ["boostmesaj"],
  // aciklama: "test"

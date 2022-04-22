const discord = require('discord.js');
const db = require(`croxydb`);

exports.run = async(client, message, args) => {
const prefix = (await db.fetch(`prefix_${message.guild.id}`)) || client.ayarlar.prefix
    let kanal = message.mentions.channels.first();
    let fotochat = await db.fetch(`fotochat{message.guild.id}`)

    if (!args[0]) return message.channel.send(new discord.MessageEmbed()                                          
    .setTitle(`Hata!`)
    .setDescription(`Kullanım: ${prefix}fotochat ayarla #kanal \nSıfırlamak İçin: ${prefix}fotochat sıfırla`)
    .setColor(`BLUE`)
    .setFooter( `LUISA PLUS+ / Discord'da Yeni Devrim!`, client.user.avatarURL()));

if(args[0] == `ayarla`) {
    if (!kanal) return message.channel.send(`**Lütfen bir kanalı etiketleyip tekrar deneyin.**`)
    db.set(`fotochat_${message.guild.id}`, kanal.id)
    message.channel.send(new discord.MessageEmbed()
    .setTitle(`Başarılı!`)
    .setDescription(`Artık ${kanal} Kanalına Fotoğraf Dışında Birşey Atılırsa Sileceğim. Yönetici İzni Olanlara Karışmayacağım, Söz!`)
    .setColor(`BLUE`)
    .setFooter( `LUISA PLUS+ / Discord'da Yeni Devrim!`, client.user.avatarURL()))

}

if(args[0] == `sıfırla`) {
    db.delete(`fotochat_${message.guild.id}`)
    message.channel.send(new discord.MessageEmbed()
    .setTitle(`Başarılı!`)
    .setDescription(`Fotochat Kanalı Sıfırlandı.`)
    .setColor(`BLUE`)
    .setFooter( `LUISA PLUS+ / Discord'da Yeni Devrim!`, client.user.avatarURL()))
}    

};
exports.conf = {
  enabled: true,
  guildOnly: true, //Bu sadece sunucularda kullanılabilir ayarıdır true yazarsanız dm de kullanamazsınız false yazarsanız kullanabilirsiniz
  aliases: [`foto-chat`],
  permLevel: 4 
};

exports.help = {
  name: 'fotochat',
  description: 'komut açıklama',
  usage: ''
};
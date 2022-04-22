const Discord = require("discord.js")
const db = require("quick.db")

exports.run = async (client, message, args, prefix) => {
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Bu komutu kullanabilmek için `YÖNETİCİ` olman gerekli!")
        const mesaj = args.slice(1).join(" ")

            if(!args[0]) {
                const embedd = new Discord.MessageEmbed()
               .setColor("BLUE")
               .setDescription(`Merhaba, Öncelikle otorol mesajı ayarlamak istiyorsan eğer bir değer belirtmelisin! örnek: ${prefix}otorolmesaj ayarla veya ${prefix}otorolmesaj sıfırla!`)
               .setFooter("Copyright © Luisa Plus 2022", client.user.avatarURL())
               return message.channel.send(embedd)
             } 
             
             if(args[0] === "ayarla") {
                   if(!mesaj) {
                      const embedd = new Discord.MessageEmbed()
                      .setColor("BLUE")
                      .setDescription(`Merhaba, Öncelikle otorol mesajı ayarlamak istiyorsan eğer bir mesaj belirtmelisin! örnek: ${prefix}otorolmesaj ayarla <mesaj>`)
                      .addField("Fonksiyonlar:", `> {kullanıcı} => **Gelen kullanıcıyı etiketler. (${message.author})**\n> {kullanıcı_adı} => **Kullanıcı adını gösterir. (${message.author.username})**\n> {sunucuadı} => **Sunucu adını gösterir. (${message.guild.name})**\n> {sunucuüyesayısı} => **Sunucuda bulunan üye sayısını gösterir. (${message.guild.memberCount})**\n> {roladı} => **Verilecek rolün adını yazar. (WhYBoLu)**`)
                      .setFooter("Copyright © Luisa Plus 2022", client.user.avatarURL())
                      return message.channel.send(embedd)
                   }
          
                   db.set(`otorolmesaj_${message.guild.id}`, mesaj)
                   const embedd = new Discord.MessageEmbed()
                  .setColor("BLUE")
                  .setDescription(`Merhaba, Başarılı bir şekilde otorol mesajını ayarladım!\n Ayarlanmış değer: **${mesaj}**`)
                  .setFooter("Copyright © Luisa Plus 2022", client.user.avatarURL())
                  return message.channel.send(embedd)
             }
             
             if(args[0] === "sıfırla") {
                 db.delete(`otorolmesaj_${message.guild.id}`)
                 const embedd = new Discord.MessageEmbed()
               .setColor("BLUE")
               .setDescription(`Merhaba, Başarılı bir şekilde otorol mesajı sıfırlandı!`)
               .setFooter("Copyright © Luisa Plus 2022", client.user.avatarURL())
               return message.channel.send(embedd)
             }

    
         
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
}

exports.help = {
    name: "otorolmesaj",
    description: "Otorol mesajını ayarlar/sıfırlarsınız.",
    usage: "otorolmesaj <ayarla mesaj/sıfırla>"
}
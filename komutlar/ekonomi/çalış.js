const Discord = require("discord.js")
const db = require("quick.db")
const ms = require("ms")
const moment = require("moment")
require("moment-duration-format")

exports.run = async(client, message, args, prefix) => {
    
        let timeout = 86400000;
     
            if(db.fetch(`çalışSüre_${message.author.id}`) > Date.now()) {
                let timeout = (db.fetch(`çalışSüre_${message.author.id}`) - Date.now());
                const embed = new Discord.MessageEmbed()
               .setColor("BLUE")
               .setAuthor("Lütfen Bekle!", message.author.avatarURL({dynamic: true}))
               .setDescription(`
               Hata!
               Üzgünüm ancak günlük ödülünüzü zaten almışsın! \`${moment.duration(timeout).format("H [saat], m [dakika], s [saniye]")}\` Boyunca beklemelisin
               `)
                .setFooter("Copyright © Luisa Plus 2022", client.user.avatarURL())
               .setTimestamp()
              return message.channel.send(embed).then((msg) => { msg.delete({timeout: 5000})})
        } else {
            let nbr = ["Yazılımcı", "Mühendis", "Şef", "Emlakçı", "Madenci", "Öğretmen", "Garson"]
            let meslek = Math.floor(Math.random() * nbr.length)
            let sa = Math.floor(Math.random() * 10000)
            db.add(`goldkredi_${message.author.id}`, sa)
            db.set(`maaş_${message.author.id}`, Date.now() + ms(timeout + "h"))
            db.set(`çalışSüre_${message.author.id}`, (Date.now() + 86400000))
                setTimeout(() => {
                  db.delete(`çalışSüre_${message.author.id}`)
                }, 86400000)
                
            const market = new Discord.MessageEmbed()
            .setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({ dynamic: true }))
            .setColor(client.ayarlar.embedRenk)
            .setDescription(`
            **${nbr[meslek]}** Olarak çalıştınız ve **${sa}** Miktarında kredinizi aldınız.
            `)
            .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
            return message.channel.send(market) 
        }

}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: []
}

exports.help = {
    name: "çalış",
    description: "çalışırsınız.",
    usage: "çalış"
}
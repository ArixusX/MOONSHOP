const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix_${message.guild.id}`) || "!";    
let rol = message.mentions.roles.first() 
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`:by:  **Bu komutu kullanabilmek için** "\`Yönetici\`" **yetkisine sahip olmalısın.**`);
 
 if(!rol)  return message.channel.send(new Discord.MessageEmbed()
.setDescription(`**\`\`\`HATA : Lütfen Bir Rol Belirt!\`\`\`**\n**Bir Rol Etiketlemeyi Unuttun.**\n\n**\`\`\`Rolü Etiketleyemiyorsan\`\`\`**\n**Rolün Etiketleme Seçeneğini Aktif Etmeyi Unutma** \n**__Örnek Kullanım__** : \`${prefix}boost-rol @rol \`\n\n**\`\`\`Önemli Not\`\`\`**\n**Boost Rol'u Ayarlayabilmek İçin Botun Rolü, Verilecek Rolün Üstünde Bir Rolde Olmalı Yoksa Rolü Veremez!** `)
 .setFooter("www.luisaplus.ga")

                                      )
  
 
const clientdev = new Discord.MessageEmbed()
.setDescription(`╔▬▬▬▬▬▬▬▬▬Boost Otorol▬▬▬▬▬▬▬▬▬▬
║► ✅ Boost Rol Aktif Edildi.
║► ✅ Boost Basanlara **${rol}** Rolünü Vereceğim.
╚▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
`)
 .setFooter("www.luisaplus.ga")
message.channel.send(clientdev)
 
  db.set(`boostrol_${message.guild.id}`, rol.id)  
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    permLevel: 0,
    aliases: ['boost-rol']
  };
  
  exports.help = {
    name: 'boost-rol',
    description: 'Türkiyenin Saatini Gösterir',
    usage: 'gç'
  };

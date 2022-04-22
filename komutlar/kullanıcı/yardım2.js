const disbut = require("discord-buttons")
const Discord = require("discord.js")
const db = require("quick.db")
exports.run = async (client, message, args) => {
  const prefix = (await db.fetch(`prefix_${message.guild.id}`)) || client.ayarlar.prefix
  let countDownDate = new Date("Jan 1, 2022 00:00:00").getTime();
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  let bilgi = [`**[${client.ayarlar.botİsim}](https://top.gg/bot/${client.user.id}/vote)** Botuna oy verirseniz özel komutlara erişim sağlayabilirsiniz!`, `**[Destek](${client.ayarlar.destek})** Sunucumuza gelerek çekilişlere katılabilirsiniz!`, `${client.ayarlar.botİsim} Botu için her gün yeni güncellemeler getiriyoruz!`, `Eğer Gold Üyelik alırsanız bazı gizli özellikleri açabilirsiniz!`]
  let bilgiler = Math.floor(Math.random() * bilgi.length)
  if (message.author.bot) return;
        message.channel.send(`ANASAYFA YÜKLENİYOR..`).then(async msj => {
            const botPing = (msj.createdTimestamp - message.createdTimestamp);
            msj.delete();
        const btn2 = new disbut.MessageMenuOption()
            .setLabel('Kullanıcı')
            .setDescription(`Kullanıcı komutlarını gösterir.`)
            .setValue('2').setEmoji("962289033931808788")
        const b = new disbut.MessageMenuOption()
            .setLabel('Ekonomi ')
            .setDescription(`Ekonomi komutlarını gösterir.`)
            .setValue('3').setEmoji("955119700503838751")
        const btn = new disbut.MessageMenuOption()
            .setLabel('Sahip')
            .setDescription(`Sahip komutlarını gösterir.`)
            .setValue('4').setEmoji("👑")
        const btn3 = new disbut.MessageMenuOption()
            .setLabel('Sunucu')
            .setDescription(`Sunucu komutlarını gösterir.`)
            .setValue('5').setEmoji("869707733685927936")  
        const btn4 = new disbut.MessageMenuOption()
            .setLabel('Moderasyon')
            .setDescription(`Moderasyon komutlarını gösterir.`)
            .setValue('6').setEmoji("🛡️")  
        const btn5 = new disbut.MessageMenuOption()
            .setLabel('Yetkili')
            .setDescription(`Yetkili komutlarını gösterir.`)
            .setValue('7').setEmoji("🔧")   
        const bt6 = new disbut.MessageMenuOption()
            .setLabel('Kayıt')
            .setDescription(`Kayıt komutlarını gösterir.`)
            .setValue('8').setEmoji("962346896381341776")
        const bt8 = new disbut.MessageMenuOption()
            .setLabel('Ayarlamalı')
            .setDescription(`Ayarlamalı komutlarını gösterir.`)
            .setValue('9').setEmoji("962346896364552265")
        const bt10 = new disbut.MessageMenuOption()
            .setLabel('EĞLENCE')
            .setDescription(`Eğlence komutlarını gösterir.`)
            .setValue('11').setEmoji("955087241145888768") 
        const bt12 = new disbut.MessageMenuOption()
            .setLabel('BOOST')
            .setDescription(`Boost komutlarını gösterir.`)
            .setValue('12').setEmoji("955087241556947015")         
        const bt9 = new disbut.MessageMenuOption()
            .setLabel('NSFW')
            .setDescription(`Nsfw komutlarını gösterir.`)
            .setValue('10').setEmoji("🔞")        
        
const menu = new disbut.MessageMenu()
        .addOptions(btn2, b, btn, btn3, btn4, btn5, bt6, bt8, bt10, bt12, bt9)
        .setMaxValues(1)
        .setMinValues(1)
        .setID("menu")

const hakkında = new Discord.MessageEmbed()
            .setTitle('ANA SAYFA')
            .setDescription(`
        **●▬▬▬▬▬▬▬▬【 Bilgilendirme 】▬▬▬▬▬▬▬▬▬●**
        • | Merhaba ${message.author}, 
        • | Şuanda anlık olarak **${client.guilds.cache.size.toLocaleString()}** Adet sunucuya ve **${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}** Adet kullanıcıya hizmet veriyorum!
        • | ${bilgi[bilgiler]}
    
        **●▬▬▬▬▬▬▬▬【 Hakkımızda 】▬▬▬▬▬▬▬▬▬●**
        • | **${client.ayarlar.botİsim}** Botu **メ Alysion (AstraL).^^.🦋 ⚚** Tarafından sizler için yapılmıştır ;)
        • | **18.03.2022** Ayında yapılmaya başlandım.            `)
        
const e = new Discord.MessageEmbed()
            .setTitle('KULLANICI KOMUTLARI')
            .setDescription(`
      **●▬▬▬▬▬▬▬▬【 Bilgilendirme 】▬▬▬▬▬▬▬▬▬●**
      • | Merhaba ${message.author}, 
      • | ${bilgi[bilgiler]}
  
      **●▬▬▬▬▬▬▬▬【 Kullanıcı Komutları [10] 】▬▬▬▬▬▬▬▬▬●**
      • | **[${prefix}istatistik](${client.ayarlar.destek})** => **Bot Bilgilerini Gösterir.**
      • | **[${prefix}kullanıcıbilgi](${client.ayarlar.destek})** => **Kullanıcı Bilgilerinizi Gösterir.**
      • | **[${prefix}sunucubilgi](${client.ayarlar.destek})** => **Sunucu Bilgilerini Gösterir.**
      • | **[${prefix}shard](${client.ayarlar.destek})** => **Shard Bilgilerini Gösterir.**
      • | **[${prefix}wikipedia](${client.ayarlar.destek})** => **WikiPedia Üzerinden Araştırma Yaparsınız.**
      • | **[${prefix}dbl](${client.ayarlar.destek})** => **DBL Üzerinden Araştırma Yaparsınız.**
      • | **[${prefix}rastgeleemoji](${client.ayarlar.destek})** => **Rastgele Emoji Görürsünüz.**
      • | **[${prefix}avatar](${client.ayarlar.destek})** => **Profil Fotoğrafınızı Görürsünüz.**
      • | **[${prefix}base64](${client.ayarlar.destek})** => **Yazdığınız Yazıyı Base64 Formatına Çevirir.**
      • | **[${prefix}binary](${client.ayarlar.destek})** => **Yazdığınız Yazıyı Binary Formatına Çevirir.**
      • | **[${prefix}elyazı](${client.ayarlar.destek})** => **Girdiğiniz yazıyı el yazısına çevirir**
      • | **[${prefix}döviz](${client.ayarlar.destek})** => **Güncel Döviz kurlarını gösterir.**`)
            .setTimestamp()
            .setFooter(`${message.author.tag} tarafından istendi.`, message.author.displayAvatarURL({dynamic: true}))

const embed1 = new Discord.MessageEmbed()
            .setTitle('EKONOMİ KOMUTLARI')
            .setDescription(`
      **●▬▬▬▬▬▬▬▬【 Bilgilendirme 】▬▬▬▬▬▬▬▬▬●**
      • | Merhaba ${message.author}, 
      • | ${bilgi[bilgiler]}
  
      **●▬▬▬▬▬▬▬▬【 Ekonomi Komutları [9] 】▬▬▬▬▬▬▬▬▬●**
      • | **[${prefix}banka](${client.ayarlar.destek})** => **Banka Bilgilerinizi Gösterir.**
      • | **[${prefix}kredikartı](${client.ayarlar.destek})** => **Kredi Kartı Bilgilerinizi Gösterir.**
      • | **[${prefix}market](${client.ayarlar.destek})** => **Marketi Gösterir.**
      • | **[${prefix}çalış](${client.ayarlar.destek})** => **Çalışırsınız.**
      • | **[${prefix}günlük](${client.ayarlar.destek})** => **Günlük ödülünüzü alırsınız.**
      • | **[${prefix}düello](${client.ayarlar.destek})** => **Düello yaparsınız.**
      • | **[${prefix}kredisıralama](${client.ayarlar.destek})** => **Kredi Sıralamasını Görürsünüz.**
      • | **[${prefix}pakethediye](${client.ayarlar.destek})** => **Belirtilen Kişiye Özel Üyelik Paket Hediye Edersiniz.**
      • | **[${prefix}kredi](${client.ayarlar.destek})** => **Gold Kredi Bilgilerinize Bakar/Gold KRedisi Transfer Edersiniz.**`)
            .setTimestamp()
            .setFooter(`${message.author.tag} tarafından istendi.`, message.author.displayAvatarURL({dynamic: true}))
const embed = new Discord.MessageEmbed()
            .setTitle('SAHİP KOMUTLARI')
            .setDescription(`
      **●▬▬▬▬▬▬▬▬【 Bilgilendirme 】▬▬▬▬▬▬▬▬▬●**
      • | Merhaba ${message.author}, 
      • | ${bilgi[bilgiler]}
  
      **●▬▬▬▬▬▬▬▬【 Sahip Komutları [6] 】▬▬▬▬▬▬▬▬▬●**
      • | **[${prefix}beyazliste](${client.ayarlar.destek})** => **Karalistede Bulunan Kişiyi Beyazlisteye Alır.**
      • | **[${prefix}karaliste](${client.ayarlar.destek})** => **Belirtilen Kişiyi Karalisteye Alır.**
      • | **[${prefix}eval](${client.ayarlar.destek})** => **Belirtilen Kodu Çalıştırır.**
      • | **[${prefix}güncelleme](${client.ayarlar.destek})** => **Güncelleme Duyurusu Yapar.**
      • | **[${prefix}sunucukaraliste](${client.ayarlar.destek})** => **Belirtilen Sunucuyu Karalisteye Alır.**
      • | **[${prefix}yenile](${client.ayarlar.destek})** => **Belirtilen Komutu Yeniler.**`)
            .setTimestamp()
            .setFooter(`${message.author.tag} tarafından istendi.`, message.author.displayAvatarURL({dynamic: true}))


const embed2 = new Discord.MessageEmbed()
            .setTitle('SUNUCU KOMUTLARI')
            .setDescription(`
      **●▬▬▬▬▬▬▬▬【 Bilgilendirme 】▬▬▬▬▬▬▬▬▬●**
      • | Merhaba ${message.author}, 
      • | ${bilgi[bilgiler]}
  
      **●▬▬▬▬▬▬▬▬【 Sunucu Komutları [11] 】▬▬▬▬▬▬▬▬▬●**
      • | **[${prefix}ban](${client.ayarlar.destek})** => **Belirtilen Kişiyi Sunucudan Yasaklar.**
      • | **[${prefix}kick](${client.ayarlar.destek})** => **Belirtilen Kişiyi Sunucudan Atar.**
      • | **[${prefix}nuke](${client.ayarlar.destek})** => **Kanalı Yeniler.**
      • | **[${prefix}oylama](${client.ayarlar.destek})** => **Oylama Yaparsınız.**
      • | **[${prefix}prefix](${client.ayarlar.destek})** => **Botun Ön Ekini Değiştirirsiniz.**
      • | **[${prefix}temizle](${client.ayarlar.destek})** => **Belirttiğiniz Miktarda Mesaj Siler.**
      • | **[${prefix}unban](${client.ayarlar.destek})** => **Belirtilen İDli Kişinin Yasaklanmasını Kaldırır.**
      • | **[${prefix}uyarı](${client.ayarlar.destek})** => **Belirtilen Kişiye Uyarı Verirsiniz.**
      • | **[${prefix}uyarısil](${client.ayarlar.destek})** => **Belirtilen Kişinin Belirtilen Uyarısını Silersiniz.**
      • | **[${prefix}uyarıtemizle](${client.ayarlar.destek})** => **Belirtilen Kişinin Uyarılarını Temizlersiniz.**
      • | **[${prefix}uyarıliste](${client.ayarlar.destek})** => **Belirtilen Kişinin Uyarılarına Bakarsınız.**`)
            .setTimestamp()
            .setFooter(`${message.author.tag} tarafından istendi.`, message.author.displayAvatarURL({dynamic: true}))


const embed3 = new Discord.MessageEmbed()
            .setTitle('MODERASYON KOMUTLARI')
            .setDescription(`
      **●▬▬▬▬▬▬▬▬【 Bilgilendirme 】▬▬▬▬▬▬▬▬▬●**
      • | Merhaba ${message.author}, 
      • | ${bilgi[bilgiler]}
  
      **●▬▬▬▬▬▬▬▬【 Moderasyon Komutları [16] 】▬▬▬▬▬▬▬▬▬●**
      • | **[${prefix}yedek](${client.ayarlar.destek})** => **Yedekleme Menüsünü Gösterir. (Bakımda)**
      • | **[${prefix}bansınır](${client.ayarlar.destek})** => **Ban Sınırını Ayarlarsınız.**
      • | **[${prefix}kicksınır](${client.ayarlar.destek})** => **Kick Sınırını Ayarlarsınız.**
      • | **[${prefix}capslock](${client.ayarlar.destek})** => **Büyük Harf Engelini Açarsınız.**
      • | **[${prefix}küfür](${client.ayarlar.destek})** => **Küfür Engel Sistemini Açarsınız.**
      • | **[${prefix}link](${client.ayarlar.destek})** => **Link Engel Sistemini Açarsınız.**
      • | **[${prefix}reklam](${client.ayarlar.destek})** => **Reklam Engel Sistemini Açarsınız.**
      • | **[${prefix}spamengel](${client.ayarlar.destek})** => **Spam Engel Sistemini Açarsınız.**
      • | **[${prefix}modlog](${client.ayarlar.destek})** => **Mod Log Kanalını Ayarlarsınız.**
      • | **[${prefix}muterole](${client.ayarlar.destek})** => **Mute Rolünü Ayarlarsınız.**
      • | **[${prefix}otorol](${client.ayarlar.destek})** => **Otomatik Rol Ayarlarsınız.**
      • | **[${prefix}otorolmesaj](${client.ayarlar.destek})** => **Otomatik Rol Mesajını Ayarlarsınız.**
      • | **[${prefix}saas](${client.ayarlar.destek})** => **Saas Sistemini Açarsınız.**
      • | **[${prefix}sayaç](${client.ayarlar.destek})** => **Sayaç Ayarlarsınız.**
      • | **[${prefix}sayaçhgmesaj](${client.ayarlar.destek})** => **Sayaç Hoş Geldin Mesajını Ayarlarsınız.**
      • | **[${prefix}sayaçbbmesaj](${client.ayarlar.destek})** => **Sayaç Görüşürüz Mesajını Ayarlarsınız.**
      • | **[${prefix}abone](${client.ayarlar.destek})** => **Etiketlenen Üyeye Abone Rolü Verirsiniz.**
      • | **[${prefix}abone-sorumlusu](${client.ayarlar.destek})** => **Abone Sorumlusu Rolünü Ayarlarsınız.**
      • | **[${prefix}abone-rol](${client.ayarlar.destek})** => **Abone Rolünü Ayarlarsınız.**
      • | **[${prefix}abone-mesaj](${client.ayarlar.destek})** => **Abone Logunu Ayarlarsınız.**`)
            .setTimestamp()
            .setFooter(`${message.author.tag} tarafından istendi.`, message.author.displayAvatarURL({dynamic: true}))



const embed4 = new Discord.MessageEmbed()
            .setTitle('Yetkili KOMUTLARI')
            .setDescription(`
      **●▬▬▬▬▬▬▬▬【 Bilgilendirme 】▬▬▬▬▬▬▬▬▬●**
      • | Merhaba ${message.author}, 
      • | ${bilgi[bilgiler]}
  
      **●▬▬▬▬▬▬▬▬【 Yetkili Komutları [9] 】▬▬▬▬▬▬▬▬▬●**
      • | **[${prefix}sunucukur normal](${client.ayarlar.destek})** => **Normal Sunucu Kurarsınız.**
      • | **[${prefix}sunucukur destek](${client.ayarlar.destek})** => **Destek Sunucu Kurarsınız.**
      • | **[${prefix}sunucukur gif](${client.ayarlar.destek})** => **Gif Sunucu Kurarsınız. (Yakında)**
      • | **[${prefix}sunucukur kod](${client.ayarlar.destek})** => **Kod Sunucu Kurarsınız.**
      • | **[${prefix}sunucukur-botlist](${client.ayarlar.destek})** => **Bot List Sunucu Kurarsınız.**
      • | **[${prefix}sunucukur tasarım](${client.ayarlar.destek})** => **Tasarım Sunucu Kurarsınız. (Yakında)**
      • | **[${prefix}sunucukur youtuber](${client.ayarlar.destek})** => **YouTuber Sunucu Kurarsınız.**
      • | **[${prefix}sunucukur hosting](${client.ayarlar.destek})** => **Hosting Sunucu Kurarsınız. (Yakında)**
      • | **[${prefix}sunucukur public](${client.ayarlar.destek})** => **Public Sunucu Kurarsınız.**`)
            .setTimestamp()
            .setFooter(`${message.author.tag} tarafından istendi.`, message.author.displayAvatarURL({dynamic: true}))

const embed5 = new Discord.MessageEmbed()
            .setTitle('KAYIT KOMUTLARI')
            .setDescription(`
      **●▬▬▬▬▬▬▬▬【 Bilgilendirme 】▬▬▬▬▬▬▬▬▬●**
      • | Merhaba ${message.author}, 
      • | ${bilgi[bilgiler]}
  
      **●▬▬▬▬▬▬▬▬【 Kayıt Komutları [11] 】▬▬▬▬▬▬▬▬▬●**
      • | **[${prefix}kayıtalınacak](${client.ayarlar.destek})** => **Kayıt Alınacak Rolünü Ayarlarsınız.**
      • | **[${prefix}kayıterkekverilecek](${client.ayarlar.destek})** => **Kayıt Erkek Verilecek Rolünü Ayarlarsınız.**
      • | **[${prefix}kayıtkızverilecek](${client.ayarlar.destek})** => **Kayıt Kız Verilecek Rolünü Ayarlarsınız.**
      • | **[${prefix}kayıtkanal](${client.ayarlar.destek})** => **Kayıt Kanalını Ayarlarsınız.**
      • | **[${prefix}kayıtlog](${client.ayarlar.destek})** => **Kayıt Log Kanalını Ayarlarsınız.**
      • | **[${prefix}kayıttag](${client.ayarlar.destek})** => **Kayıt Tagını Ayarlarsınız.**
      • | **[${prefix}kayıtyetkili](${client.ayarlar.destek})** => **Kayıt Yetkili Rolünü Ayarlarsınız.**
      • | **[${prefix}sestekiler](${client.ayarlar.destek})** => **Seste Bulunan Yetkilileri Gösterir.**
      • | **[${prefix}administatistik](${client.ayarlar.destek})** => **Admin Bilgilerinizi Gösterir.**
      • | **[${prefix}erkek](${client.ayarlar.destek})** => **Belirtilen Kişiyi Erkek Olarak Kayıt Eder.**
      • | **[${prefix}kız](${client.ayarlar.destek})** => **Belirtilen Kişiyi Kız Olarak Kayıt Eder.**`)
            .setTimestamp()
            .setFooter(`${message.author.tag} tarafından istendi.`, message.author.displayAvatarURL({dynamic: true}))


const embed6 = new Discord.MessageEmbed()
            .setTitle('AYARLAMALI KOMUTLARI')
            .setDescription(`
      **●▬▬▬▬▬▬▬▬【 Bilgilendirme 】▬▬▬▬▬▬▬▬▬●**
      • | Merhaba ${message.author}, 
      • | ${bilgi[bilgiler]}
  
      **●▬▬▬▬▬▬【 Ticket Komutları [4] 】▬▬▬▬▬▬▬●**
      • | **[${prefix}ticket-aç](${client.ayarlar.destek})** => **Ticket'i yeniden açarsınız.**
      • | **[${prefix}ticket-kanal](${client.ayarlar.destek})** => **Ticket kanalını ayarlarsınız.**
      • | **[${prefix}ticket-mesaj](${client.ayarlar.destek})** => **Ayarlı ticket kanalına ticket mesajı gönderir.**
      • | **[${prefix}ticket-sil](${client.ayarlar.destek})** => **Ticket kanalını silersiniz.**
      **●▬▬▬▬▬▬【 Botlist Komutları [5] 】▬▬▬▬▬▬▬●**
      • | **[${prefix}botlist-ayar](${client.ayarlar.destek})** => **Sunucunuza botlist kurarsınız.**
      • | **[${prefix}botekle](${client.ayarlar.destek})** => **Bot başvurusu yaparsınız**
      • | **[${prefix}botlist-kurallar](${client.ayarlar.destek})** => **Botlist kurallarını atar.**
      • | **[${prefix}botonayla](${client.ayarlar.destek})** => **Sırada olan botu onaylarsınız.**
      • | **[${prefix}botreddet](${client.ayarlar.destek})** => **Sırada olan botu reddet edersiniz.**`)
            .setTimestamp()
            .setFooter(`${message.author.tag} tarafından istendi.`, message.author.displayAvatarURL({dynamic: true}))


const embed9 = new Discord.MessageEmbed()
            .setTitle('EĞLENCE KOMUTLARI')
            .setDescription(`
      **●▬▬▬▬▬▬▬▬【 Bilgilendirme 】▬▬▬▬▬▬▬▬▬●**
      • | Merhaba ${message.author}, 
      • | ${bilgi[bilgiler]}
  
      **●▬▬▬▬▬▬▬▬【 Eğlence Komutları [6] 】▬▬▬▬▬▬▬▬▬●**
      • | **[${prefix}yazıtura](${client.ayarlar.destek})** => **Yazı-Tura atar.**
      • | **[${prefix}saldır](${client.ayarlar.destek})** => **Birine Saldırırsınız.**
      • | **[${prefix}napim](${client.ayarlar.destek})** => **Napim diye iş bulur.**
      • | **[${prefix}fakemesaj](${client.ayarlar.destek})** => **Fake-Mesaj atarsınız.**
      • | **[${prefix}fakeban](${client.ayarlar.destek})** => **Fake-Ban atarsınız.**
      • | **[${prefix}boks](${client.ayarlar.destek})** => **Boks oynarsınız.**`)
            .setTimestamp()
            .setFooter(`${message.author.tag} tarafından istendi.`, message.author.displayAvatarURL({dynamic: true}))

const embed13 = new Discord.MessageEmbed()
            .setTitle('BOOST KOMUTLARI')
            .setDescription(`
      **●▬▬▬▬▬▬▬▬【 Bilgilendirme 】▬▬▬▬▬▬▬▬▬●**
      • | Merhaba ${message.author}, 
      • | ${bilgi[bilgiler]}
  
      **●▬▬▬▬▬▬▬▬【 Boost Komutları [4] 】▬▬▬▬▬▬▬▬▬●**
      • | **[${prefix}boost-mesaj](${client.ayarlar.destek})** => **Boost mesaj kanalını ayarlarsınız.**
      • | **[${prefix}boost-rol](${client.ayarlar.destek})** => **Boost basınca hangi yetki vereceğini ayarlarsınız.**
      • | **[${prefix}boost-sistemi-kapat](${client.ayarlar.destek})** => **Boost sistemini kapatırsınız.**
      • | **[${prefix}boostlog](${client.ayarlar.destek})** => **Boost log kanalını ayarlarsınız.**`)
            .setTimestamp()
            .setFooter(`${message.author.tag} tarafından istendi.`, message.author.displayAvatarURL({dynamic: true}))

const embed7 = new Discord.MessageEmbed()
            .setTitle('NSFW KOMUTLARI')
            .setDescription(`
      **●▬▬▬▬▬▬▬▬【 Bilgilendirme 】▬▬▬▬▬▬▬▬▬●**
      • | Merhaba ${message.author}, 
      • | ${bilgi[bilgiler]}
  
      **●▬▬▬▬▬▬▬▬【 Nsfw Komutları [8] 】▬▬▬▬▬▬▬▬▬●**
      • | **[${prefix}4k](${client.ayarlar.destek})** => **4K Gif Atar.**
      • | **[${prefix}anal](${client.ayarlar.destek})** => **Anal Gif Atar.**
      • | **[${prefix}ass](${client.ayarlar.destek})** => **Ass Gif Atar.**
      • | **[${prefix}pgif](${client.ayarlar.destek})** => **PGif Atar.**
      • | **[${prefix}hentai](${client.ayarlar.destek})** => **Hentai Gif Atar.**
      • | **[${prefix}holo](${client.ayarlar.destek})** => **Holo Gif Atar.**
      • | **[${prefix}pussy](${client.ayarlar.destek})** => **Pussy Gif Atar.**
      • | **[${prefix}thigh](${client.ayarlar.destek})** => **Thigh Gif Atar.**
      • | **[${prefix}pornhub](${client.ayarlar.destek})** => **Pornhub Üzerinde Araştırma Yapar/Bilgi Edinirsiniz. (Yakında)**`)
            .setTimestamp()
            .setFooter(`${message.author.tag} tarafından istendi.`, message.author.displayAvatarURL({dynamic: true}))


        let msg = await message.channel.send({ embed: hakkında, component: menu })

const filter = (menu) => menu.clicker.user.id === message.author.id; //user filter (author only)
        const collector = message.createMenuCollector(filter, { time: 120000 });
        client.on("clickMenu", menu => {
            if(menu.clicker.id !== message.author.id) return;
            menu.reply.defer();
            if (menu.values[0] === '2') {
              //kod ekleyebilirsiniz
                     msg.edit({
                    embed: e,
                })
            }
            if (menu.values[0] === '3') {
              //kod ekleyebilirsiniz
                msg.edit({
                    embed: embed1,
                })
            }
            if (menu.values[0] === '4') {
              //kod ekleyebilirsiniz
                msg.edit({
                    embed: embed,
                })
            }
          
          if (menu.values[0] === '5') {
              //kod ekleyebilirsiniz
                msg.edit({
                    embed: embed2,
                })
            }
          
         if (menu.values[0] === '6') {
              //kod ekleyebilirsiniz
                msg.edit({
                    embed: embed3,
                })
            }
          
         if (menu.values[0] === '7') {
              //kod ekleyebilirsiniz
                msg.edit({
                    embed: embed4,
                })
            }
          
         if (menu.values[0] === '8') {
              //kod ekleyebilirsiniz
                msg.edit({
                    embed: embed5,
                })
            } 
   
         if (menu.values[0] === '9') {
              //kod ekleyebilirsiniz
                msg.edit({
                    embed: embed6,
                })
            }           
          

         if (menu.values[0] === '10') {
              //kod ekleyebilirsiniz
                msg.edit({
                    embed: embed7,
                })
            }               
          
         if (menu.values[0] === '11') {
              //kod ekleyebilirsiniz
                msg.edit({
                    embed: embed9,
                })
            }  
          
         if (menu.values[0] === '12') {
              //kod ekleyebilirsiniz
                msg.edit({
                    embed: embed13,
                })
            }             
          
})
        })
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  permLevel: 0,
  aliases: ['yardım']
}
exports.help = {
    name: "yardım",
    description: "Gelişmiş Yardım",
    usage: "<prefix>yardım",
}  
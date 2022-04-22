const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const os = require("os");
require("moment-duration-format");
var prefix = ayarlar.prefix;
module.exports = client => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  client.user.setStatus("online");
   var oyun = [
     "🌠 Sunucunuz Bizlere Emanet!",
     "😍 Her Zaman Daha İyi Yerlere!",
     "➡️ www.luisabot.ga",
     "❓  Yeni Gelen sistemleri Keşfetmediniz Mi?",
     "🎫 Ticket Sistemimizi Keşfetmediniz Mi?",
     "🤔 Komutlarla İlgili Bilgi İçin: www.luisabot.ga"
   ];
    setInterval(function() {
        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);
        client.user.setActivity(oyun[random]);
        }, 2 * 2500);
}
//Jangan Di Hapus Tapi kalo Di tambah Boleh

let fetch = require('node-fetch')
let handler = async (m, { conn }) => await conn.sendButtonLoc(m.chat, await (await fetch(thumbfoto)).buffer(), `
*DONASI YUK,,JANGN CUMAN GUNAIN BOT AJA:)*
╔═══════════════════
║ _*DONASI UNTUK ZIFABOTZ*_ 
╠═══════════════════
║╭──❉ 〔 *𝗗𝗢𝗡𝗔𝗦𝗜* 〕 ❉──────
║│➸ *PULSA* : *085828764046*
║│➸ *DANA*: *085828764046*
║│➸ *GOPAY*: _*085828764046*_
║╰──────────────────
╰═════```by.Rozi```
`.trim(), watermark, 'MENU BOT', '.menu', m)
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler

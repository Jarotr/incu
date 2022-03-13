//Jangan Di Hapus Tapi kalo Di tambah Boleh

let fetch = require('node-fetch')
let handler = async (m, { conn }) => await conn.sendButtonLoc(m.chat, await (await fetch(thumbfoto)).buffer(), `
*Allo kak/bang bantu donasi yuk supaya bot on 24 jam👋*
╔═══════════════════
║ _*DONASI UNTUK ZIFABOTZ*_ 
╠═══════════════════
║╭──❉ 〔 *𝗗𝗢𝗡𝗔𝗦𝗜* 〕 ❉──────
║│➸ *PULSA* : 085828764046
║│➸ *DANA*: 085838764046
║│➸ *GOPAY*: 085828764046
║╰──────────────────
╰═════by.Rozi
`.trim(), watermark, 'MENU BOT', '.menu', m)
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler

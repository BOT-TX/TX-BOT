let handler = async (m, { conn, text }) => {

let [nomor, pesan, jumlah] = text.split('|')
if (!nomor) throw '*POR FAVOR INGRESE EL NUMERO AL CUAL SE LE HARA EL SPAM DE MENSAJES!*\n*USO CORRECTO:*\n*#spamwa numero|texto|cantidad*\n*EJEMPLO:*\n* #spamwa 5219999999999|responde :v|25*'
if (!pesan) throw '*INGRESE EL MENSAJE A ENVIAR!*\n*USO CORRECTO:*\n* #spamwa numero|texto|cantidad*\n*EJEMPLO:*\n* #spamwa 5219999999999|responde :v|25*'
if (jumlah && isNaN(jumlah)) throw '*LA CANTIDAD DEBE SER UN NUMERO!*\n*USO CORRECTO:*\n* #spamwa numero|texto|cantidad*\n*EJEMPLO:*\n* #spamwa 5219999999999|responde :v|25*'

let fixedNumber = nomor.replace(/[-+<>@]/g, '').replace(/ +/g, '').replace(/^[0]/g, '62') + '@s.whatsapp.net'
let fixedJumlah = jumlah ? jumlah * 1 : 10
if (fixedJumlah > 50) throw '*DEMASIADOS ENSAJES EL MAXIMO ES DE 50 MENSAJES*️'
await m.reply(`*EL SPAM DE MENSAJES AL NUMERO ${nomor} FUE REALIZADO CON EXITO*\n*CANTIDAD ENVIADA:*\n*${fixedJumlah} VECES!*`)
for (let i = fixedJumlah; i > 1; i--) {
if (i !== 0) conn.reply(fixedNumber, pesan.trim(), m)
}}
handler.help = ['spamwa <number>|<mesage>|<no of messages>']
handler.tags = ['main']
handler.command = /^spam(wa)?$/i
handler.group = false
handler.premium = false
handler.private = true
handler.limit = true
export default handler

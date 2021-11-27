// eror jangan koar koer
// https://wa.me/6285875169194
const
	{
	    WAConnection: _WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WAMessageProto,
		ReconnectMode,
		ProxyAgent,
		ChatModification,
		GroupSettingChange,
		WA_MESSAGE_STUB_TYPES,
		WA_DEAFULT_EPHEMERAL,
		waChatKey,
		mentionedJid,
		processTime,
		prepareMessageFromContent, 
		relayWAMessage
	} = require("@adiwajshing/baileys")
const simple = require('./lib/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)
const qrcode = require('qrcode-terminal')
const qrkode = require("qrcode")
const imageToBase64 = require('image-to-base64')
const moment = require("moment-timezone")
const fs = require("fs")
const axios = require("axios")
const ffmpeg = require('fluent-ffmpeg')
const request = require('request')
const util = require('util')
const hx = require('hxz-api')
const base64Img = require('base64-img')
const ms = require('parse-ms')
const figlet = require('figlet')
const ytsd = require('ytsr')
const brainly = require('brainly-scraper')
const ig = require('insta-fetcher')
const cheerio = require('cheerio')
const fromData = require('form-data')
const os = require('os')
const translate = require('@vitalets/google-translate-api')
const ggs = require('google-it')
const googleImage = require('g-i-s')
const toMs = require('ms')
const fetch = require('node-fetch')
const imgbb = require('imgbb-uploader')
const Math_js = require('mathjs')
const { EmojiAPI } = require("emoji-api")
const crypto = require('crypto')
const emoji = new EmojiAPI()
const speed = require('performance-now')
const { color, bgcolor } = require('./lib/color')
const { exec } = require('child_process')
const { fetchJson } = require('./lib/fetcher')
const { uploadimg, upload } = require('./lib/uploadimg')
const { webp2mp4File } = require('./lib/webp2mp4')
const { lirikLagu } = require('./lib/lirik.js')
const { wikiSearch } = require('./lib/wiki.js')
const { herolist } = require('./lib/herolist.js')
const { herodetails } = require('./lib/herodetail.js')
const { mediafireDl } = require('./lib/mediafire.js')
const { pinterest } = require('./lib/pinterest')
const { addCommands, checkCommands, deleteCommands } = require('./lib/autoresp')
const { yta, ytv, buffer2Stream, ytsr, baseURI, stream2Buffer, noop } = require('./lib/ytdl')
const { jadibot, stopjadibot, listjadibot } = require('./lib/jadibot.js')
const { getBuffer, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
const client = new WAConnection()

// STICKER WM
//const exect = require('await-exec')
//const webp = require('webp-converter')
//const sharp = require('sharp')
const Exif = require('./lib/exif')
const exif = new Exif()

// DATABASE
const afk = JSON.parse(fs.readFileSync('./database/afk.json'))
const setik = JSON.parse(fs.readFileSync('./database/setik.json'))
const vien = JSON.parse(fs.readFileSync('./database/vien.json'))
const imagi = JSON.parse(fs.readFileSync('./database/imagi.json'))
const bad = JSON.parse(fs.readFileSync('./database/bad.json'))
const commandsDB = JSON.parse(fs.readFileSync('./database/commands.json'))
const tictactoe = JSON.parse(fs.readFileSync("./database/tictactoe.json"))
const antiwame = JSON.parse(fs.readFileSync('./database/antiwame.json'));
const antivirtex = JSON.parse(fs.readFileSync("./database/antivirtex.json"))
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/nsfw.json'))
const mute = JSON.parse(fs.readFileSync('./database/mute.json'))
const settings = JSON.parse(fs.readFileSync('./settings.json'))
const _registered = JSON.parse(fs.readFileSync('./database/registered.json'))
const kickarea = JSON.parse(fs.readFileSync('./database/kickarea.json'))
const scommand = JSON.parse(fs.readFileSync('./database/scommand.json'))
const autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'))

ky_ttt = []
tttawal= ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
cmhit = []

autorespon = true
playmusic = false
antidelete = false
menusimpel = false
menuall = false
baterai = {
battery: "" || "Not detected",
isCharge: "" || false
}
offline = false
publik = true
bugc = true
waktuafk = 'Nothing'
alasanafk = 'Nothing'
NamaBot = settings.NamaBot
NomorOwner = settings.NomorOwner
NomorOwner = settings.NomorOwner2
NamaOwner = settings.NamaOwner
linkaja = settings.Linkaja
dana = settings.Dana
ovo = settings.Ovo
gopay = settings.Gopay
multi = true
nopref = false

// APIKEY
zerokey = settings.ZeroKey
zerkey = settings.ZerKey
YuzApi = 'Yuzzu'
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")

function kyun(seconds) {
	function pad(s) {
		return (s < 10 ? '0' : '') + s;
	}
	var hours = Math.floor(seconds / (60 * 60));
	var minutes = Math.floor(seconds % (60 * 60) / 60);
	var seconds = Math.floor(seconds % 60);

	//return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
	return `${pad(hours)}Jam ${pad(minutes)}Menit ${pad(seconds)}Detik`
}
const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function waktu(seconds) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;
}
const addafk = (from) => {
    const obj = { id: from, expired: Date.now() + toMs('10m') }
    afk.push(obj)
    fs.writeFileSync('./database/afk.json', JSON.stringify(afk))
}
const cekafk = (_dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
            _dir.splice(position, 1)
            fs.writeFileSync('./database/afk.json', JSON.stringify(_dir))
        }
    }, 1000)
}
const isAfk = (idi) => {
    let status = false
    Object.keys(afk).forEach((i) => {
        if (afk[i].id === idi) {
            status = true
        }
    })
    return status
}
const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    scommand.push(obj)
    fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
}

const getCommandPosition = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

const getCmd = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return scommand[position].chats
    }
}
module.exports = vinzbot = async (vinzbot, mek) => {
try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
	    if (!mek.message) return
	    if (mek.key && !mek.key.remoteJid == 'status@broadcast') return
	    if ((Object.keys(mek.message)[0] === 'ephemeralMessage' && JSON.stringify(mek.message).includes('EPHEMERAL_SETTING')) && mek.message.ephemeralMessage.message.protocolMessage.type === 3 && bugc && !mek.key.fromMe) {
		nums = mek.participant
        longkapnye = "\n".repeat(420)
        tekuss = `\`\`\`TANDAI TELAH DIBACA !!!\`\`\`${longkapnye}\`\`\`@⁨${nums.split('@')[0]} Terdeteksi Telah Mengirim Bug, @⁨${nums.split('@')[0]} Akan Dikick!\`\`\`\n`
        vinzbot.groupRemove(mek.key.remoteJid, [nums]).catch((e) => { reply(`*ERR:* ${e}`) })
        vinzbot.sendMessage(mek.key.remoteJid, tekuss, MessageType.text, {contextInfo:{mentionedJid:[nums + "@s.whatsapp.net"]}})
        }
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
		const typei = Object.keys(mek.message)[0]
		global.prefix
		me = vinzbot.user
		m = simple.smsg(vinzbot, mek)
		const antibot = m.isBaileys
		const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const type = Object.keys(mek.message)[0]
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		const timeWib = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		const timeWita = moment().tz('Asia/Makassar').format('DD/MM HH:mm:ss')
        const timeWit = moment().tz('Asia/Jayapura').format('DD/MM HH:mm:ss')
		const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
		vinzbot.on("CB:action,,battery", json => {
	    const battery = json[2][0][1].value
	    const persenbat = parseInt(battery)
	    baterai.battery = `${persenbat}%`
	    baterai.isCharge = json[2][0][1].live
	    })
	    if (multi){
		    var prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα¦|/\\©^]/.test(cmd) ? cmd.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα¦|/\\©^]/gi) : '.'
        } else {
            if (nopref){
                prefix = ''
            } else {
                prefix = prefa
            }
        }
        isStc = Object.keys(mek.message)[0] == "stickerMessage" ? mek.message.stickerMessage.fileSha256.toString('hex') : ""
	    isStc = `${isStc}`
        const isStcQ = isStc !== "" && content.includes("extendedTextMessage") ||
        isStc !== "" && content.includes("conversation")
        const body = (type === 'listResponseMessage' && mek.message.listResponseMessage.title) ? mek.message.listResponseMessage.title : (type === 'buttonsResponseMessage' && mek.message.buttonsResponseMessage.selectedButtonId) ? mek.message.buttonsResponseMessage.selectedButtonId : (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : ""
		const budo = (typei === 'conversation') ? mek.message.conversation : (typei === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const arg = budy.slice(command.length + 2, budy.length)
		const c = args.join(' ')
		var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
		const messagesD = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
		const dfrply = fs.readFileSync('./thumb.jpg')
		cmhit.push(command)
        mess = {
			wait: 'Wait a minute',
			success: 'Success',
			error: {
				stick: 'Cannot access videos!',
				Iv: 'Invalid link!',
                api: 'Error'
			},
			only: {
				group: 'Only for within the group!',
				ownerG: 'Only for group owners!',
				ownerB: 'Only for bot owners!',
				admin: 'Only for group admins!',
				Badmin: 'Make the bot a group admin!'
			}
		}
		const botNumber = vinzbot.user.jid
		const isGroup = from.endsWith('@g.us')
		const sender = mek.key.fromMe ? vinzbot.user.jid : isGroup ? mek.participant : mek.key.remoteJid
		const senderNumber = sender.split("@")[0] 
		const conts = mek.key.fromMe ? vinzbot.user.jid : vinzbot.contacts[mek.sender]
        const pushname = mek.key.fromMe ? vinzbot.user.name : !conts ? '-' : conts.notify || conts.vname || conts.name || '-'   
		const totalchat = await vinzbot.chats.all()
		const groupMetadata = isGroup ? await vinzbot.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const isOwner = ownerNumber.includes(sender)
		const isNsfw = isGroup ? nsfw.includes(from) : false
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const isKickArea = isGroup ? kickarea.includes(from) : false
		const isAntiWame = isGroup ? antiwame.includes(from) : false
		 const isAntivirtex = isGroup ? antivirtex.includes(from) : false
		const isAntiLink = isGroup ? antilink.includes(from) : false
		const isWelkom = isGroup ? welkom.includes(from) : false
		const isAuto = isGroup ? autosticker.includes(from) : false
		const isMuted = isGroup ? mute.includes(from) : false
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''
		const q = args.join(' ')

const isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
}
		if (antibot === true) return
		const katalog = (teks) => {
             res = vinzbot.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 999, "message": teks, "footerText": "*_© 𝑨𝑹𝑪𝑬𝑳𝑺 𝑩𝑶𝑻_*", "thumbnail": ofrply, "surface": 'CATALOG' }}, {quoted:ftrol})
             vinzbot.relayWAMessage(res)
        }
        const grupinv = (teks) => {
        	grup = vinzbot.prepareMessageFromContent(from, { "groupInviteMessage": { "groupJid": '6288213840883-1616169743@g.us', "inviteCode": 'https://chat.whatsapp.com/JI25LDtPW784GAZoRD9fW9', "groupName": `𝑨𝑹𝑪𝑬𝑳𝑺 𝑩𝑶𝑻`, "footerText": "*_© 𝑨𝑹𝑪𝑬𝑳𝑺 𝑩𝑶𝑻_*", "jpegThumbnail": ofrply, "caption": teks}}, {quoted:finv})
            vinzbot.relayWAMessage(grup)
        }
		idttt = []
	    players1 = []
	    players2 = []
	    gilir = []
	    for (let t of ky_ttt){
	    idttt.push(t.id)
	    players1.push(t.player1)
	    players2.push(t.player2)
	    gilir.push(t.gilir)
	    }
	    const isTTT = isGroup ? idttt.includes(from) : false
	    isPlayer1 = isGroup ? players1.includes(sender) : false
        isPlayer2 = isGroup ? players2.includes(sender) : false
		try {
		pporang = await vinzbot.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
		      } catch {
		pporang = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
		      }
		const ofrply = await getBuffer(pporang)
		const pporigi = fs.readFileSync('./thumb.jpg')
		const sekarang = new Date().getTime();
			//-
			//WAKTU
			var ase = new Date();
                        var jamss = ase.getHours();
                         switch(jamss){
                case 0: jamss = "Midnight 🌚"; break;
                case 1: jamss = "Midnight 🌚"; break;
                case 2: jamss = "Midnight 🌚"; break;
                case 3: jamss = "Midnight 🌔"; break;
                case 4: jamss = "Midnight 🌔"; break;
                case 5: jamss = "Dawn 🌄"; break;
                case 6: jamss = "Morning 🌄"; break;
                case 7: jamss = "Morning 🌄"; break;
                case 8: jamss = "Morning ☀️"; break;
                case 9: jamss = "Morning ☀️"; break;
                case 10: jamss = "Morning ☀️"; break;
                case 11: jamss = "Afternoon 🌞"; break;
                case 12: jamss = "Zuhur 🌞"; break;
                case 13: jamss = "Afternoon 🌞"; break;
                case 14: jamss = "Afternoon 🌞"; break;
                case 15: jamss = "Asr 🌞"; break;
                case 16: jamss = "Afternoon ☀️"; break;
                case 17: jamss = "Evening 🌄"; break;
                case 18: jamss = "Maghrib 🌄"; break;
                case 19: jamss = "Isha 🌙"; break;
                case 20: jamss = "Night 🌙"; break;
                case 21: jamss = "Night 🌙"; break;
                case 22: jamss = "Midnight 🌙"; break;
                case 23: jamss = "Midnight 🌚"; break;
            }
            var tampilUcapan = "" + jamss;
            const jmn = moment.tz('Asia/Jakarta').format('HH:mm:ss')
				let d = new Date
				let locale = 'id'
				let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
				const weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
				const week = d.toLocaleDateString(locale, { weekday: 'long' })
				const calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
		       })
		const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var imageTime = await getBuffer('https://i.pinimg.com/736x/27/ee/27/27ee271709bdb24d555b2dd3de796f93.jpg')
                                        }
if(time2 < "19:00:00"){
var imageTime = await getBuffer('https://i.pinimg.com/736x/27/ee/27/27ee271709bdb24d555b2dd3de796f93.jpg')
                                         }
if(time2 < "18:00:00"){
var imageTime = await getBuffer('https://i.pinimg.com/736x/81/08/7b/81087b2e732dc0e25d8875b135d579b9.jpg')
                                         }
if(time2 < "15:00:00"){
var imageTime = await getBuffer('https://i.pinimg.com/736x/81/98/aa/8198aaf07083fc9939deb0c3c5c3716c.jpg')
                                         }
if(time2 < "11:00:00"){
var imageTime = await getBuffer('https://i.pinimg.com/736x/81/98/aa/8198aaf07083fc9939deb0c3c5c3716c.jpg')
                                         }
if(time2 < "06:00:00"){
var imageTime = await getBuffer('https://i.pinimg.com/736x/15/8e/ea/158eea299c01433aae6744599d2fdc3a.jpg')
}
const ftok = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": imageTime //Gambarnye
					},
					"title": `${tampilUcapan} ${pushname}`, //Kasih namalu 
					"description": `${tampilUcapan} ${pushname}`, 
					"currencyCode": "USD",
					"priceAmount1000": "2000",
					"retailerId": `${tampilUcapan} ${pushname}`,
					"productImageCount": 1
				},
				    "businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
// TROLI
const ftrol = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 999,
                            status: 1,
                            surface : 1,
                            message: `${tampilUcapan} ${pushname}`, //Kasih namalu
                            orderTitle: `${tampilUcapan} ${pushname}`,
                            thumbnail: dfrply, //Gambarnye
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }
// LOCATION
const floc = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    liveLocationMessage: {
                    caption: `${tampilUcapan} ${pushname}`,
                    jpegThumbnail: dfrply
                          }
                        }
                      }
// DOCUMENT
const fdoc = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    documentMessage: {
                    title: `${tampilUcapan} ${pushname}`, 
                    jpegThumbnail: dfrply
                          }
                        }
                      }
// VIDEO
const fvid = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `${tampilUcapan} ${pushname}`,
                 "h": `${tampilUcapan} ${pushname}`,
                 'duration': '99999', 
                 'caption': `${tampilUcapan} ${pushname}`,
                 'jpegThumbnail': dfrply
                        }
                       }
	                  }
// GROUPINVITE
const finv = {
	"key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message": {
		"groupInviteMessage": {
			"groupJid": "6288213840883-1616169743@g.us",
			"inviteCode": `${tampilUcapan} ${pushname}`,
			"groupName": `${tampilUcapan} ${pushname}`, 
            "caption": `${tampilUcapan} ${pushname}`, 
            'jpegThumbnail': dfrply
		}
	}
}
// STICKER
const fstick = {
"key": {
	  "participant": `0@s.whatsapp.net`,
      "remoteJid": "6289643739077-1613049930@g.us",
      "fromMe": false,
      "id": "3B64558B07848BD81108C1D14712018E"
    },
    "message": {
      "stickerMessage": {
        "fileSha256": "uZiOJzqOvrOo2WGjnMKgX2MMQMyasT+ZDgqUczpIBmY=",
		"pngThumbnail": dfrply,
	 "mimetype": "image/webp",
        "height": 64,
        "width": 64,
        "directPath": "/v/t62.15575-24/56110107_763365384384977_5720135628188301198_n.enc?oh=450f8f684b06f0ba2dbc9779e5f06774&oe=605B81EE",
        "fileLength": "60206",
        "firstFrameLength": 3626,
        "isAnimated": false
      }
    },
    "messageTimestamp": "1614070775",
    "status": "PENDING"
  }
// GIF
const fgi = {
	 key: { 
         fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `${tampilUcapan} ${pushname}`,
                 "h": `${tampilUcapan} ${pushname}`,
                 'duration': '99999', 
                 'gifPlayback': 'true', 
                 'caption': `${tampilUcapan} ${pushname}`,
                 'jpegThumbnail': dfrply
                        }
                       }
	                  } 
// TEXT WITH THUMBNAIL
const ftex = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text": `${tampilUcapan} ${pushname}`,
                 "title": `${tampilUcapan} ${pushname}`,
                 'jpegThumbnail': dfrply
                        }
	                  } 
                     }
// VN
const fvoc = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
		"audioMessage": {
                 "mimetype":"audio/ogg; codecs=opus",
                 "seconds": "99999",
                 "ptt": "true"
                        }
	                  } 
                     }
const sendBug = async (target) => {
      await vinzbot.relayWAMessage(
        vinzbot.prepareMessageFromContent(
          target,
          vinzbot.prepareDisappearingMessageSettingContent(0),
          {}
        ),{ waitForAck: true }) 
    }
    //But verify
const getRegisteredRandomId = () => {
return _registered[Math.floor(Math.random() * _registered.length)].id
}
const addRegisteredUser = (userid, sender, age, time, serials) => {
const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
_registered.push(obj)
fs.writeFileSync('./database/registered.json', JSON.stringify(_registered))
}
const checkRegisteredUser = (sender) => {
let status = false
Object.keys(_registered).forEach((i) => {
if (_registered[i].id === sender) {
status = true
}
})
return status
}

const isRegistered = checkRegisteredUser(sender)

const sendButRegis = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1,
};
vinzbot.sendMessage(
id,
buttonMessage,
MessageType.buttonsMessage,
options
);
};

const daftar1 = `Hai kak  ${pushname} ${tampilUcapan} \n\nSebelum Mengakses Bot Verify Terlebih Dahulu Ya`
const daftar2 = '```Ketik Tombol Di Bawah Untuk Verify Kak\njika tidak ada ketik /verify```'
const daftar3 = [{buttonId: `verify`,buttonText: {displayText: `DAFTAR `,},type: 1,},]

const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}

      const getpc = async function(totalchat){
   let pc = []
   let a = []
   let b = []
   for (c of totalchat){
      a.push(c.jid)
   }
   for (d of a){
      if (d && !d.includes('g.us')){
         b.push(d)
      }
   }
   return b
}
///Button Text
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
vinzbot.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
///Button Image
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await vinzbot.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
vinzbot.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Video
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await vinzbot.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
vinzbot.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Location
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await vinzbot.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
vinzbot.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
if (!mek.key.remoteJid.endsWith('@g.us') && offline){
			if (!mek.key.fromMe){
            if (isAfk(mek.key.remoteJid)) return
            addafk(mek.key.remoteJid)
			heheh = ms(Date.now() - waktuafk)
		  sendButMessage(from, `Hai ${pushname}, Maaf sepertinya saat ini ${NamaOwner} sedang Offline\n\n*Alasan :* ${alasanafk}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik\n\nSilahkan hubungi lagi setelah Online`, "*_© 𝑨𝑹𝑪𝑬𝑳𝑺 𝑩𝑶𝑻_*", [{buttonId: 'simi', buttonText: {displayText: 'Oke'}, type: 1}], {quoted:ftrol, contextInfo: { forwardingScore: 508, isForwarded: true}})
			}
		}
		if (mek.key.remoteJid.endsWith('@g.us') && offline) {
			if (!mek.key.fromMe){
				if (mek.message.extendedTextMessage != undefined){
					if (mek.message.extendedTextMessage.contextInfo != undefined){
						if (mek.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
				for (let ment of mek.message.extendedTextMessage.contextInfo.mentionedJid) {
					if (ment === vinzbot.user.jid){
                        if (isAfk(mek.key.remoteJid)) return
                        addafk(mek.key.remoteJid)
						heheh = ms(Date.now() - waktuafk)
			       sendButMessage(from, `Hai ${pushname}, Maaf sepertinya saat ini ${NamaOwner} sedang Offline\n\n*Alasan :* ${alasanafk}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik\n\nSilahkan hubungi lagi setelah Online`, "*_© 𝑨𝑹𝑪𝑬𝑳𝑺 𝑩𝑶𝑻_*", [{buttonId: 'simi', buttonText: {displayText: 'Oke'}, type: 1}], {quoted:ftrol, contextInfo: { forwardingScore: 508, isForwarded: true}})
					}
				}
						}
					}
				}
			}
		}
		const sendStickerUrl = async(to, url) => {
			console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker'))
				var names = getRandom('.webp')
				var namea = getRandom('.png')
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, namea, async function () {
					let filess = namea
					let asw = names
					require('./lib/exif.js')
					exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
					exec(`webpmux -set exif ./temp/data.exif ${asw} -o ${asw}`, async (error) => {
					let media = fs.readFileSync(asw)
					vinzbot.sendMessage(to, media, sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker'))
					});
					});
				});
			}
        const sendWebp = async(from, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './temp' + names + '.png', async function () {
                    console.log('selesai');
                    let ajg = './temp' + names + '.png'
                    let palak = './temp' + names + '.webp'
                    exec(`ffmpeg -i ${ajg} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${palak}`, (err) => {
                        let media = fs.readFileSync(palak)
                        vinzbot.sendMessage(from, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(ajg)
                        fs.unlinkSync(palak)
                    });
                });
            }
            const sendKontak = (from, nomor, nama) => {
	        const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + `ORG:Developer 𝑨𝑹𝑪𝑬𝑳𝑺 𝑩𝑶𝑻\n` + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	        vinzbot.sendMessage(from, { displayname: nama, vcard: vcard}, MessageType.contact, {quoted:mek, contextInfo: { forwardingScore: 508, isForwarded: true }})
            }
            const hideTagKontak = async function(from, nomor, nama){
	        let vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	        let anu = await vinzbot.groupMetadata(from)
	        let members = anu.participants
	        let ane = []
	        for (let i of members){
		    ane.push(i.jid)
	        }
	        vinzbot.sendMessage(from, { displayname: nama, vcard: vcard}, MessageType.contact, {contextInfo: {"mentionedJid": ane}})
            }
		const reply = (teks) => {
			vinzbot.sendMessage(from, teks, text, { thumbnail: dfrply, sendEphemeral: true, quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `${jmn} - ${week} ${weton} - ${calender}`,body:`${tampilUcapan}`,previewType:"PHOTO",thumbnail:ofrply,sourceUrl:`.https://wa.me/message/SYPQDRAB4WG2I1`}}})
		}
		const simir = (teks) => {
			vinzbot.sendMessage(from, teks, text, { quoted:ftrol })
		}
		const math = (teks) => {
				return Math.floor(teks)
		}
		const sendMess = (hehe, teks) => {
			vinzbot.sendMessage(hehe, teks, text, { quoted: ftrol, contextInfo: { forwardingScore: 508, isForwarded: true}})
		}
		//>>>>>>>>STICKER<<<<<<<\\
		const sticOwner = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/owner.webp')
			vinzbot.sendMessage(hehe, ano, sticker, { quoted: mek})
		}
		const sticNotAdmin = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/notadmin.webp')
			vinzbot.sendMessage(hehe, ano, sticker, { quoted: mek})
		}
		const sticAdmin = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/admin.webp')
			vinzbot.sendMessage(hehe, ano, sticker, { quoted: mek})
		}
		const sticWait = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/wait.webp')
			vinzbot.sendMessage(hehe, ano, sticker, { quoted: mek})
		}
		const sticOk = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/ok.webp')
			vinzbot.sendMessage(hehe, ano, sticker, { quoted: mek})
		}
		const mentions = (teks, memberr, id) => {
			(id == null || id == undefined || id == false) ? vinzbot.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : vinzbot.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
		}
		const sendFileFromUrl = async(link, type, options) => {
hasil = await getBuffer(link)
vinzbot.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
vinzbot.sendMessage(from, hasil, type, options).catch(e => {
vinzbot.sendMessage(from, { url : link }, type, options).catch(e => {
reply
console.log(e)
})
})
})
})
}
  const sendMediaURL = async(to, url, text="", mids=[]) =>{
				if(mids.length > 0){
					text = normalizeMention(to, text, mids)
				}
				const fn = Date.now() / 10000;
				const filename = fn.toString()
				let mime = ""
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						mime = res.headers['content-type']
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, filename, async function () {
					console.log('done');
					let media = fs.readFileSync(filename)
					let type = mime.split("/")[0]+"Message"
					if(mime === "image/gif"){
						type = MessageType.video
						mime = Mimetype.gif
					}
					if(mime.split("/")[0] === "audio"){
						mime = Mimetype.mp4Audio
					}
					vinzbot.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
					
					fs.unlinkSync(filename)
				});
			}
		   const sendFakeThumb = async function(from, url, title, desc){
				var anoim = {
					detectLinks: false
				}
				var qul = await vinzbot.generateLinkPreview(url)
				qul.title = title
				qul.description = desc
				qul.jpegThumbnail = dfrply
				vinzbot.sendMessage(from, qul, MessageType.extendedText, anoim)
			}
			function Json(objectPromise) {
var objectString = JSON.stringify(objectPromise, null, 2)
var parse = util.format(objectString)
if (objectString == undefined) {
parse = util.format(objectPromise)
}
return reply(parse)
}
            function speedText(speed) {
                let bits = speed * 8;
                const units = ['', 'K', 'M', 'G', 'T'];
                const places = [0, 1, 2, 3];
                let unit = 0;
                while (bits >= 2000 && unit < 4) {
                    unit++;
                    bits/= 1000;
                }
                return `${bits.toFixed(places[unit])} ${units[unit]}bps`;
            } 
           if (budy.startsWith('>')){
if (!isOwner && !mek.key.fromMe) return
console.log(color('[EVAL]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Eval V1 brooo`))
ras = budy.slice(1)
function _(rem) {
ren = JSON.stringify(rem,null,2)
pes = util.format(ren)
reply(pes)
}
try{c
reply(require('util').format(eval(`(async () => { ${ras} })()`)))
} catch(err) {
e = String(err)
reply(e)
}
}
if (budy.startsWith('$')){
if (!mek.key.fromMe && !isOwner) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}
if (budy.startsWith('x')){
if (!mek.key.fromMe && !isOwner) return
try {
return vinzbot.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}
if (budy.startsWith('=>')){
if (!isOwner && !mek.key.fromMe) return
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color(">", "green"), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
} catch(e){
reply(String(e))
}
}
			// AUTO
			for (let anji of setik){
				if (budy === anji){
					result = fs.readFileSync(`./media/sticker/${anji}.webp`)
					vinzbot.sendMessage(from, result, sticker, { quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true }})
					}
			}
			for (let anju of vien){
				if (budy === anju){
					result = fs.readFileSync(`./media/vn/${anju}.mp3`)
					vinzbot.sendMessage(from, result, audio, { mimetype: 'audio/mp4', duration: 359996400, ptt: true, quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true}})
					}
			}
			for (let anjh of imagi){
				if (budy === anjh){
					result = fs.readFileSync(`./media/image/${anjh}.jpg`)
					vinzbot.sendMessage(from, result, image, { quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true}})
					}
			}
			for (var i = 0; i < commandsDB.length ; i++) {
				if (budy.toLowerCase() === commandsDB[i].pesan) {
					reply(commandsDB[i].balasan)
				}
				  }
    if (isGroup && isAntivirtex && !mek.key.fromMe) {
      if (budy.length > 2500) {
        if (isGroupAdmins) return reply("admin bebas");
        reply("ANTIVIRTEX DETECTED!! MAAF ANDA AKAN DIKICK ;V");
        vinzbot.groupRemove(from, sender);
      }
			}
        if (budy.includes("wa.me/","https://wa.me//","https://wa.me/")) {
        	if (!mek.key.fromMe){
				if (!isGroup) return
				if (!isAntiWame) return
				if (isGroupAdmins) return reply('Atasan grup mah bebas yakan :v')
				vinzbot.updatePresence(from, Presence.composing)
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply('Wa.me terdeteksi Auto kick!')
			    vinzbot.groupRemove(from, [kic]).catch((e) => { sticNotAdmin(from) })
            }
        }
			// MUTE
        if (isMuted){
            if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return
            if (budy.toLowerCase().startsWith(`${prefix}unmute`)){
                let anu = mute.indexOf(from)
                mute.splice(anu, 1)
                fs.writeFileSync('./database/mute.json', JSON.stringify(mute))
                reply('Bot telah diunmute di group ini')
            }
        }
        if (budy.includes("https://chat.whatsapp.com/")) {
        	if (!mek.key.fromMe){
				if (!isGroup) return
				if (!isAntiLink) return
				if (isGroupAdmins) return reply('Atasan grup mah bebas yakan :v')
				vinzbot.updatePresence(from, Presence.composing)
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply('Link terdeteksi, Auto kick!')
			    vinzbot.groupRemove(from, [kic]).catch((e) => { sticNotAdmin(from) })
			}
			}
			if (!m.key.fromMe && bad.includes(messagesD)) {
			ano = fs.readFileSync('./sticker/anime/toxic.webp')
			vinzbot.sendMessage(from, ano, sticker, { quoted: mek})
				}
				if (!isGroup && !isCmd && !command && !mek.key.fromMe && !autorespon) {
	simi = await fetchJson(`https://api-sv2.simsimi.net/v2/?text=${cmd}&lc=id&id=false`)
                     sami = simi.success
                        vinzbot.sendMessage(from, `_${sami}_`, text, {thumbnail: ofrply, sendEphemeral: true, quoted:mek, contextInfo : {forwardingScore: 508, isForwarded: true}})
                      }
if (!settings.autoread) {
vinzbot.chatRead(from)
}
if (!settings.autocomposing) {
vinzbot.updatePresence(from, Presence.composing)
}
if (!settings.autorecording) {
vinzbot.updatePresence(from, Presence.recording)
}
if (budy.startsWith('halo')){
reply(`Hallo Kak ${pushname} ada yg bisa ku bantu?Ketik /menu Untuk menampilkan list menu`)
}
if (budy.startsWith('p')){
reply(`Hallo Kak ${pushname} ada yg bisa ku bantu?Ketik /menu Untuk menampilkan list menu`)
}
if (budy.startsWith('/payment')){
reply(`❏ 「 \`\`\`PAYMENT\`\`\` 」❏
*MOHON TRANSFER SESUAI NOMINAL HARGA !*
*╭─────────────────*
*│* *⬡DANA      :*
*│* *${dana}*
*├* *⌥(SYARIFUDIN)*
*│* *⬡GOPAY    :*
*│* *${gopay}*
*├* *⌥(ARCELS STORE)*
*│* *⬡LINKAJA :*
*│* *${linkaja}*
*├* *⌥(SYARIFUDIN)*
*│* *⬡OVO :*
*│* *${ovo}*
*├* *⌥(SYARIFUDIN)*
*└─────────────────*
*JIKA INGIN PEMBAYARAN MELALUI TOPUP OVO DARI BANK, MOHON TAMBAHIN 1000 KARENA KEBIJAKAN DARI OVO KEPOTONG OTOMATIS*

*TERIMA KASIH*`)
}
if (budy.startsWith('#')){
reply(`Salah Kak ${pushname} harus pake prefix /`)
}
if (budy.startsWith('/diamondml')){
	stod = `${sender}`
	stst = await vinzbot.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
				reply(`╭─❒ 「 \`\`\`USER INFO\`\`\`  」 ❒
☑️ _Status : ${isOwner ? 'Owner' : 'User'}_
👤 _Nama : ${pushname}_
💌 _Bio : ${stst}_
👥 _Nomor : @${stod.split('@')[0]}_
└❏
「 *Price List Diamond ML* 」
╭─「  *Mobile Legends Paket A*  」
├❍💎86 Rp. 18.400
├❍💎172 Rp. 37.000
├❍💎257 Rp. 55.000
├❍💎344 Rp. 73.000
├❍💎429 Rp. 92.000
├❍💎514 Rp. 110.000
├❍💎600 Rp. 128.000
├❍💎706 Rp. 146.000
├❍💎878 Rp. 183.000
├❍💎963    Rp. 201.000
├❍💎1050  Rp. 219.000
├❍💎1222  Rp. 255.000
├❍💎1412  Rp. 292.000
├❍💎2195  Rp. 433.000
├❍💎3688  Rp. 721.000
├❍💎4032  Rp. 794.000
├❍💎5532  Rp. 1.082.000 
├❍💎6238  Rp. 1.227.200
├❍💎9288  Rp. 1.801.800 
├ Starlight⭐           Rp. 96.000    
├ Twilight Pass⭐  Rp. 96.000
├ Starlight⭐ +        Rp. 285.000
│
│「  *Mobile Legends Paket B*  」
├❍💎39 [34+5 Bonus] Rp. 7.938
├❍💎65 [58+7 Bonus] Rp. 13.440
├❍💎92 [83+9 Bonus] Rp. 18.600
├❍💎133 [120+13 Bonus] Rp. 26.150
├❍💎266 [240+26 Bonus] Rp. 52.500
├❍💎400 [360+40 Bonus] Rp. 79.400
├❍💎534 [480+54 Bonus] Rp. 105.840
├❍💎670 [600+70 Bonus] Rp. 134.400
├❍💎1342 [1200+142 Bonus] Rp. 264.632
├❍💎2700 [2400+300 Bonus] Rp. 531.200
├❍💎4150 [3600+550 Bonus] Rp. 796.800
├❍💎7050 [6000+1050 Bonus] Rp. 1.323.000
│
│「  *Mobile Legends SEMI*  」
*CLOSE*
├❍💎113 Rp. 24.500
├❍💎168 Rp. 36.200
├❍💎281 Rp. 60.700
├❍💎460 Rp. 96.300
├❍💎573 Rp. 120.407
├❍💎920 Rp. 192.404
├❍💎1427 Rp. 289.430
├❍💎1887 Rp. 385.632
├❍💎2398 Rp. 481.525
├❍💎2858 Rp. 577.727
├❍💎3596 Rp. 724.090
├❍💎4056 Rp. 820.292
├❍💎6038 Rp. 1.207.675
│
│
├ ⌥ Jam Operasional :
│     (09.00 - 22.00 )
├ ⌥ Estimasi proses : 1 - 180 MENIT
├ ⌥ LEWAT JAM AKAN DI PROSES
│     BESOK
├ ⌥ *HARGA SEWAKTU WAKTU*
│     *BERUBAH*
╰─────────────────❒`)
}
if (budy.startsWith('/diamondff')){
	stod = `${sender}`
	stst = await vinzbot.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
reply(`╭─❒ 「 \`\`\`USER INFO\`\`\`  」 ❒
☑️ _Status : ${isOwner ? 'Owner' : 'User'}_
👤 _Nama : ${pushname}_
💌 _Bio : ${stst}_
👥 _Nomor : @${stod.split('@')[0]}_
└❏
「 *Price List Diamond FF* 」
╭─「  *Free Fire*  」
├❍💎50      =   Rp. 6.670
├❍💎70      =   Rp. 9.055
├❍💎100    =   Rp. 13.240
├❍💎140    =   Rp. 18.240
├❍💎210    =   Rp. 27.500
├❍💎280    =   Rp. 36.950
├❍💎355    =   Rp. 45.850
├❍💎425    =   Rp. 55.242
├❍💎500    =   Rp. 68.286
├❍💎720    =   Rp. 91.740
├❍💎880    =   Rp. 110.335
├❍💎925    =   Rp. 118.500
├❍💎1075  =   Rp. 135.225
├❍💎1200  =   Rp. 152.690
├❍💎1450  =   Rp. 185.500
├❍💎2000  =   Rp. 249.300
├❍💎2180  =   Rp. 275.000
├❍💎3640  =   Rp. 457.000
├❍💎4000  =   Rp. 498.600
├❍💎7290  =   Rp. 902.000
│
├ ⌥ Jam Operasional :
│     (09.00 - 22.00 )
├ ⌥ Estimasi proses : 1 - 15 MENIT
├ ⌥ LEWAT JAM AKAN DI PROSES
│     BESOK
├ ⌥ *HARGA SEWAKTU WAKTU*
│     *BERUBAH*
╰─────────────────❒`)
}
if (budy.startsWith('/pubg')){
	stod = `${sender}`
	stst = await vinzbot.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
reply(`╭─❒ 「 \`\`\`USER INFO\`\`\`  」 ❒
☑️ _Status : ${isOwner ? 'Owner' : 'User'}_
👤 _Nama : ${pushname}_
💌 _Bio : ${stst}_
👥 _Nomor : @${stod.split('@')[0]}_
└❏
「 *Price List UC PUBG* 」
╭─「  *PUBG Mobile*  」
├❍💸50        =   Rp. 9.500
├❍💸70        =   Rp. 14.000
├❍💸100      =   Rp. 18.500
├❍💸125      =   Rp. 23.000
├❍💸150      =   Rp. 28.500
├❍💸210      =   Rp. 40.500
├❍💸250      =   Rp. 46.000
├❍💸500      =   Rp. 91.500
├❍💸700      =   Rp. 113.500
├❍💸1250    =   Rp. 230.500
├❍💸1750    =   Rp. 322.500
├❍💸2500    =   Rp. 453.500
│
├ ⌥ Jam Operasional :
│     (09.00 - 22.00 )
├ ⌥ Estimasi proses : 1 - 15 MENIT
├ ⌥ LEWAT JAM AKAN DI PROSES
│     BESOK
├ ⌥ *HARGA SEWAKTU WAKTU*
│     *BERUBAH*
╰─────────────────❒`)
}
if (budy.startsWith('/codm')){
	stod = `${sender}`
	stst = await vinzbot.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
reply(`╭─❒ 「 \`\`\`USER INFO\`\`\`  」 ❒
☑️ _Status : ${isOwner ? 'Owner' : 'User'}_
👤 _Nama : ${pushname}_
💌 _Bio : ${stst}_
👥 _Nomor : @${stod.split('@')[0]}_
└❏
「 *Price List CP CODM* 」
╭─「  *COD Mobile*  」
├❍💸26       =   Rp. 2.950
├❍💸53       =   Rp. 9.950
├❍💸106     =   Rp. 19.500
├❍💸264     =   Rp. 48.500
├❍💸528     =   Rp. 95.500
├❍💸1056   =   Rp. 191.000
├❍💸1584   =   Rp. 286.000
├❍💸2640   =   Rp. 476.000
├❍💸5280   =   Rp. 1.936.000
├❍💸10560 =   Rp. 4.841.000
├❍💸26400 =   Rp. 9.676.000
├❍💸52800 =   Rp. 453.500
│
├ ⌥ Jam Operasional :
│     (09.00 - 22.00 )
├ ⌥ Estimasi proses : 1 - 15 MENIT
├ ⌥ LEWAT JAM AKAN DI PROSES
│     BESOK
├ ⌥ *HARGA SEWAKTU WAKTU*
│     *BERUBAH*
╰─────────────────❒`)
}
if (budy.startsWith('/aov')){
	stod = `${sender}`
	stst = await vinzbot.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
reply(`╭─❒ 「 \`\`\`USER INFO\`\`\`  」 ❒
☑️ _Status : ${isOwner ? 'Owner' : 'User'}_
👤 _Nama : ${pushname}_
💌 _Bio : ${stst}_
👥 _Nomor : @${stod.split('@')[0]}_
└❏
「 *Price List Voucher AOV* 」
╭─「  *Arena Of Valor*  」
├❍💵18       =   Rp. 5.000
├❍💵40       =   Rp. 10.500
├❍💵90       =   Rp. 19.200
├❍💵230     =   Rp. 47.000
├❍💵470     =   Rp. 91.000
├❍💵850     =   Rp. 183.000
├❍💵1430   =   Rp. 276.000
├❍💵2390   =   Rp. 456.000
├❍💵4800   =   Rp. 912.000
├❍💵24050 =   Rp. 4.561.000
├❍💵48200 =   Rp. 9.116.000
│
├ ⌥ Jam Operasional :
│     (09.00 - 22.00 )
├ ⌥ Estimasi proses : 1 - 15 MENIT
├ ⌥ LEWAT JAM AKAN DI PROSES
│     BESOK
├ ⌥ *HARGA SEWAKTU WAKTU*
│     *BERUBAH*
╰─────────────────❒`)
}
if (budy.startsWith('/valorant')){
	stod = `${sender}`
	stst = await vinzbot.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
reply(`╭─❒ 「 \`\`\`USER INFO\`\`\`  」 ❒
☑️ _Status : ${isOwner ? 'Owner' : 'User'}_
👤 _Nama : ${pushname}_
💌 _Bio : ${stst}_
👥 _Nomor : @${stod.split('@')[0]}_
└❏
「 *Price List Point Valorant* 」
╭─「  *Valorant*  」
├❍💵 420    =   Rp. 52.000
├❍💵 700    =   Rp.82.000
├❍💵 1375  =   Rp. 152.000
├❍💵 2400  =   Rp. 252.000
├❍💵 4000  =   Rp. 403.000
├❍💵 8150  =   Rp. 806.000
│
├ ⌥ Jam Operasional :
│     (09.00 - 22.00 )
├ ⌥ Estimasi proses : 1 - 15 MENIT
├ ⌥ LEWAT JAM AKAN DI PROSES
│     BESOK
├ ⌥ *HARGA SEWAKTU WAKTU*
│     *BERUBAH*
╰─────────────────❒`)
}
if (budy.startsWith('/genshinimpact')){
	stod = `${sender}`
	stst = await vinzbot.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
reply(`╭─❒ 「 \`\`\`USER INFO\`\`\`  」 ❒
☑️ _Status : ${isOwner ? 'Owner' : 'User'}_
👤 _Nama : ${pushname}_
💌 _Bio : ${stst}_
👥 _Nomor : @${stod.split('@')[0]}_
└❏
「 *Price List Crystal GI* 」
╭─「  *Genshin Impact*  」
├❍❄️60              =   Rp. 15.000
├❍❄️300+30     =   Rp. 71.000
├❍❄️980+110   =   Rp. 211.000
├❍❄️1980+260 =   Rp. 455.000
├❍❄️3260+600 =   Rp. 731.000
├❍❄️6480+160 =   Rp. 1.451.000
│
├ ⌥ Jam Operasional :
│     (09.00 - 22.00 )
├ ⌥ Estimasi proses : 1 - 15 MENIT
├ ⌥ LEWAT JAM AKAN DI PROSES
│     BESOK
├ ⌥ *HARGA SEWAKTU WAKTU*
│     *BERUBAH*
╰─────────────────❒`)
}
if (budy.startsWith('/sausageman')){
	stod = `${sender}`
	stst = await vinzbot.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
reply(`╭─❒ 「 \`\`\`USER INFO\`\`\`  」 ❒
☑️ _Status : ${isOwner ? 'Owner' : 'User'}_
👤 _Nama : ${pushname}_
💌 _Bio : ${stst}_
👥 _Nomor : @${stod.split('@')[0]}_
└❏
「 *Price List Candy SM* 」
╭─「  *Sausage Man*  」
├❍🍬60      =   Rp. 14.000
├❍🍬180    =   Rp. 41.000
├❍🍬680    =   Rp. 123.000
├❍🍬1280  =   Rp. 245.000
├❍🍬1980  =   Rp. 396.000
├❍🍬3280  =   Rp. 611.000
├❍🍬6480  =   Rp. 1.216.000
│
├ ⌥ Jam Operasional :
│     (09.00 - 22.00 )
├ ⌥ Estimasi proses : 1 - 15 MENIT
├ ⌥ LEWAT JAM AKAN DI PROSES
│     BESOK
├ ⌥ *HARGA SEWAKTU WAKTU*
│     *BERUBAH*
╰─────────────────❒`)
}
if (budy.startsWith('/lifeafter')){
	stod = `${sender}`
	stst = await vinzbot.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
reply(`╭─❒ 「 \`\`\`USER INFO\`\`\`  」 ❒
☑️ _Status : ${isOwner ? 'Owner' : 'User'}_
👤 _Nama : ${pushname}_
💌 _Bio : ${stst}_
👥 _Nomor : @${stod.split('@')[0]}_
└❏
「 *Price List Credits LA* 」
╭─「  *Life After*  」
├❍ 💳65     =   Rp. 14.000
├❍ 💳330   =   Rp. 70.000
├❍ 💳558   =   Rp. 111.000
├❍ 💳1108 =   Rp. 206.000
├❍ 💳2268 =   Rp. 413.500
├❍ 💳3468 =   Rp. 646.000
├❍ 💳5760 =   Rp. 1.026.000
├❍ 💳7768 =   Rp. 1.376.000
│
├ ⌥ Jam Operasional :
│     (09.00 - 22.00 )
├ ⌥ Estimasi proses : 1 - 15 MENIT
├ ⌥ LEWAT JAM AKAN DI PROSES
│     BESOK
├ ⌥ *HARGA SEWAKTU WAKTU*
│     *BERUBAH*
╰─────────────────❒`)
}
if (budy.startsWith('/pointblank')){
	stod = `${sender}`
	stst = await vinzbot.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
reply(`╭─❒ 「 \`\`\`USER INFO\`\`\`  」 ❒
☑️ _Status : ${isOwner ? 'Owner' : 'User'}_
👤 _Nama : ${pushname}_
💌 _Bio : ${stst}_
👥 _Nomor : @${stod.split('@')[0]}_
└❏
「 *Price List Cash PB* 」
╭─「  *Point Blank*  」
├❍ 💵1200    =   Rp. 9.900
├❍ 💵2400    =   Rp. 19.000
├❍ 💵6000    =   Rp. 46.000
├❍ 💵12000  =   Rp. 91.000
├❍ 💵36000  =   Rp. 292.000
├❍ 💵60000  =   Rp. 486.000
│
├ ⌥ Jam Operasional :
│     (09.00 - 22.00 )
├ ⌥ Estimasi proses : 1 - 15 MENIT
├ ⌥ LEWAT JAM AKAN DI PROSES
│     BESOK
├ ⌥ *HARGA SEWAKTU WAKTU*
│     *BERUBAH*
╰─────────────────❒`)
}
if (budy.startsWith('/domino')){
	stod = `${sender}`
	stst = await vinzbot.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
reply(`╭─❒ 「 \`\`\`USER INFO\`\`\`  」 ❒
☑️ _Status : ${isOwner ? 'Owner' : 'User'}_
👤 _Nama : ${pushname}_
💌 _Bio : ${stst}_
👥 _Nomor : @${stod.split('@')[0]}_
└❏
「 *Price List KOIN EMAS DOMINO* 」
╭─「  *DOMINO*  」
├❍💎60M   =   Rp. 6.500
├❍💎200M =   Rp. 18.500
├❍💎400M =   Rp. 35.500
├❍💎1B      =   Rp. 66.500
├❍💎2B      =   Rp. 135.000
├❍💎4B      =   Rp. 268.000
├❍💎5B      =   Rp. 336.000
├❍💎6B      =   Rp. 401.000
├❍💎7B      =   Rp. 466.000
├❍💎8B      =   Rp. 536.000
├❍💎9B      =   Rp. 599.000
├❍💎10B    =   Rp. 667.500
│
├ ⌥ Jam Operasional :
│     (09.00 - 22.00 )
├ ⌥ Estimasi proses : 1 - 15 MENIT
├ ⌥ LEWAT JAM AKAN DI PROSES
│     BESOK
├ ⌥ *HARGA SEWAKTU WAKTU*
│     *BERUBAH*
╰─────────────────❒`)
}
if (budy.startsWith('/allpromo')){
	stod = `${sender}`
	stst = await vinzbot.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
reply(`╭─❒ 「 \`\`\`USER INFO\`\`\`  」 ❒
☑️ _Status : ${isOwner ? 'Owner' : 'User'}_
👤 _Nama : ${pushname}_
💌 _Bio : ${stst}_
👥 _Nomor : @${stod.split('@')[0]}_
└❏
   「 *ALL PROMO GAME* 」
*PROMO DM MLBB*
*VIA ID + SERVER*
*PROSES 1-15 MENIT*

172💎 Rp. 34.000
257💎 Rp. 52.000
344💎 Rp. 68.000 
429💎 Rp. 85.000
514💎 Rp. 103.000
706💎 Rp. 141.000
1412💎 Rp. 282.000
2195💎 Rp. 416.250
3688💎 Rp. 692.500
5532💎 Rp. 1.040.000
9288💎 Rp. 1.732.500
---------------------------------------
399💎 Rp. 75.500
532💎 Rp. 100.500
665💎 Rp. 126.500
1064💎 Rp. 202.500
2670💎 Rp. 512.500

*ORDER PROMO HARUS BERIKAN KETERANGAN PROMO*
*Jam Operasional :*
*(09.00 - 22.00 )*
*Estimasi proses : 1 - 15 MENIT*
*LEWAT JAM AKAN DI PROSES*
*BESOK*
*HARGA SEWAKTU WAKTU*
*BERUBAH*`)
}
if (budy.startsWith('/redeemcode')){
	stod = `${sender}`
	stst = await vinzbot.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
reply(`╭─❒ 「 \`\`\`USER INFO\`\`\`  」 ❒
☑️ _Status : ${isOwner ? 'Owner' : 'User'}_
👤 _Nama : ${pushname}_
💌 _Bio : ${stst}_
👥 _Nomor : @${stod.split('@')[0]}_
└❏
   「 *REDEEM CODE* 」
*KOSONG*

*Jam Operasional :*
*(09.00 - 22.00 )*
*Estimasi proses : 1 - 15 MENIT*
*LEWAT JAM AKAN DI PROSES*
*BESOK*
*HARGA SEWAKTU WAKTU*
*BERUBAH*`)
}
if (budy.startsWith('/preorder')){
	stst = await vinzbot.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
reply(`╭─❒ 「 \`\`\`USER INFO\`\`\`  」 ❒
☑️ _Status : ${isOwner ? 'Owner' : 'User'}_
👤 _Nama : ${pushname}_
💌 _Bio : ${stst}_
👥 _Nomor : @${stod.split('@')[0]}_
└❏
   「 *Pre-ORDER* 」
*PO DM MLBB EVENT KAGURA*
*TANGGAL 27 NOVEMBER*

305💎 Rp. 56.500
(Sudah terhitung event 250)
571💎 Rp. 105.500
(Sudah terhitung event 500)

*FORMAT NYA :*
id :
Server :
Nick :
PO DM 305 / 571

*PRE ORDER SL DESEMBER*
*VIA ID & SERVER BUKAN GIFT*

List Skin :
• Broody 'Lethal Fang'
• Ling 'Street Punk'
• Harley 'Royal Magister'
• Silvana 'Pure Heroine'
• Franco 'Apocalypse'

Rp. 90.000/id (bonus 1-12💎)

Dikirim Awal Desember
*Close PO 29 November at 22:00 WIB*

*FORMAT NYA :*
id :
Server :
Nick :
PO SL DESEMBER

*Jam Operasional :*
*(09.00 - 22.00 )*
*Estimasi proses : 1 - 15 MENIT*
*LEWAT JAM AKAN DI PROSES*
*BESOK*
*HARGA SEWAKTU WAKTU*
*BERUBAH`)
}

   const sotoy = [
        '🍊 : 🍒 : 🍐',
        '🍒 : 🔔 : 🍊',
        '🍇 : 🍇 : 🍐',
        '🍊 : 🍋 : 🔔', //ANKER
        '🔔 : 🍒 : 🍐',
        '🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',        
        '🍐 : 🍒 : 🍋',
        '🍐 : 🍒 : 🍐',
        '🍊 : 🍒 : 🍒',
        '🔔 : 🔔 : 🍇',
        '🍌 : 🍌 : 🔔',
        '🍐 : 🔔 : 🔔',
        '🍊 : 🍋 : 🍒',
        '🍋 : 🍋 : 🍋 Win👑',
        '🔔 : 🔔 : 🍇',
        '🔔 : 🍇 : 🍇', 
        '🔔 : 🍐 : 🔔',
        '🍌 : 🍌 : 🍌 Win👑'
        ]
        const isStcMedia = isStc !== "" && content.includes("quotedMessage") && !content.includes("extendedTextMessage") || isStc !== "" && content.includes("quotedMessage") && !content.includes("conversation")
	    const isStcVideo = isStcMedia && content.includes("videoMessage")
	    const isStcImage = isStcMedia && content.includes("imageMessage")
	    const isStcSticker = isStcMedia && content.includes("stickerMessage")
        const isStcTeks = isStcMedia && content.includes("quotedMessage")
        const isStcDocs = isStcMedia && content.includes("documentMessage")
        const isStcContact = isStcMedia && content.includes("contactMessage")
        const isStcAudio = isStcMedia && content.includes("audioMessage")
        const isStcLoca = isStcMedia && content.includes("locationMessage")
        const isStcTag = isStcMedia && content.includes("mentionedJid")
        const isStcReply = isStcMedia && content.includes("Message")
        const isStcProd = isStcMedia && content.includes("productMessage")
       
        const isMedia = (type === 'imageMessage' || type === 'videoMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
		if (!publik) {
		if (!isOwner && !mek.key.fromMe) return
		}
	    if (isCmd && !isGroup) {console.log(color('|CMD|', 'greenyellow'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'blue'), color(`${command} [${args.length}]`, 'cyan'), color(`${pushname}`, 'orange'), color(`${sender}`, 'deeppink'))}
	    if (!command) {console.log(color('|MSG|', 'greenyellow'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'blue'), color(cmd, 'cyan'), color(`${pushname}`, 'orange'), color(`${sender}`, 'deeppink'))}
		
		//runtime berjalan
           runi = process.uptime() 
           vinzbot.setStatus(`Bot Active During ${kyun(runi)} `).catch((_)=>_);

           settingstatus = new Date() * 1;
           
        switch (isStc) {
     case "5b017c6ac1fb953c7bd21034d2fca5fad75ef2da4c3b2c2877ef49fa544e74bf":
        if (!isStcSticker) return reply('Reply stickernya bgsd!')
        su = mek.message.stickerMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('hex')
        reply(su)
				}
				switch (command) {
case 'allstore':
case 'allmenu':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
stod = `${sender}`
       stst = await vinzbot.getStatus(`${sender.split('@')[0]}@c.us`)
       nama = '𝑨𝑹𝑪𝑬𝑳𝑺 𝑩𝑶𝑻'
       ownerJid = "6285224697984@s.whatsapp.net"
				stst = stst.status == 401 ? '' : stst.status
			
menunya = `╭─❒ 「 Bot Info 」 ❒
👤️ _Creator : *ARCEL*
💈️ _Battery : ${baterai.battery}_
🎭 _Mode : ${publik ? 'Public' : 'Self'}_
‍⏳ _Total Hit : ${cmhit.length}_
‍☠️ _Prefix : ${multi ? 'Multi Prefix' : 'No Prefix'}_
🗣‍ _Nama Bot : 𝑨𝑹𝑪𝑬𝑳𝑺 𝑩𝑶𝑻_
🗣️ _Nama Owner : ${NamaOwner}_
👥 _Nomor Owner : @${otod.split('@')[0]}_
☑️ _Auto Composing : ${settings.autocomposing}_
‍☑️ _Auto Recording : ${settings.autorecording}_
└❏

╭─❒ 「 User Info 」 ❒
☑️ _Status : ${isOwner ? 'Owner' : 'User'}_
👤 _Nama : ${pushname}_
💌 _Bio : ${stst}_
👥 _Nomor : @${stod.split('@')[0]}_
└❏

┌❏ TO DAY
│ ${tampilUcapan}
├⌥ Jam : ${jmn}
├⌥ Hari : ${week} ${weton}
├⌥ Tanggal : ${calender}
└❏

┌❏ INDONESIA TIME
├⌥ Wib : ${timeWib}
├⌥ Wita : ${timeWita}
├⌥ Wit : ${timeWit}  
└❏
╭─⬣  「 Store 」⬣
├⌥ ${prefix}caraorder
├⌥ ${prefix}payment
├⌥ ${prefix}redeemcode
├⌥ ${prefix}preorder
├⌥ ${prefix}allpromo
├⌥ ${prefix}diamondml
├⌥ ${prefix}diamondff
├⌥ ${prefix}pubg
├⌥ ${prefix}codm
├⌥ ${prefix}aov
├⌥ ${prefix}valorant
├⌥ ${prefix}genshinimpact
├⌥ ${prefix}sausageman
├⌥ ${prefix}lifeafter
├⌥ ${prefix}pointblank
├⌥ ${prefix}domino
└────────────────⬣
╭─⬣  「 Owner 」⬣
├ ⌥ ${prefix}autorespon [ _on/off_ ]
├ ⌥ ${prefix}antidelete [ _on/off_ ]
├ ⌥ ${prefix}bc [ _teks/reply gif/image/video with caption_ ]
├ ⌥ ${prefix}tobc [ _reply sticker/audio with caption_ ]
├ ⌥ ${prefix}return [ _javascript_ ]
├ ⌥ ${prefix}clearall
├ ⌥ ${prefix}delchat
├ ⌥ ${prefix}mute
├ ⌥ ${prefix}unmute
├ ⌥ ${prefix}public
├ ⌥ ${prefix}self
├ ⌥ ${prefix}spam [ _teks|jumlah_ ]
├ ⌥ ${prefix}demoteall
├ ⌥ ${prefix}promoteall
├ ⌥ ${prefix}addcmd [ _teks reply stc_ ]
├ ⌥ ${prefix}delcmd [ _reply stc_ ]
├ ⌥ ${prefix}listcmd
├ ⌥ ${prefix}spamsw [ _teks|jumlah_ ]
├ ⌥ ${prefix}upswteks [ _teks_ ]
├ ⌥ ${prefix}upswlokasi [ _teks_ ]
├ ⌥ ${prefix}upswaudio [ _reply audio_ ]
├ ⌥ ${prefix}upswvoice [ _reply audio_ ]
├ ⌥ ${prefix}upswsticker [ _reply sticker_ ]
├ ⌥ ${prefix}upswimage [ _reply image with caption_ ]
├ ⌥ ${prefix}upswgif [ _reply gif with caption_ ]
├ ⌥ ${prefix}upswvideo [ _reply video with caption_ ]
├ ⌥ ${prefix}shutdown
├ ⌥ ${prefix}offline [ _alasan_ ]
├ ⌥ ${prefix}online
├ ⌥ ${prefix}exif [ _nama|author_ ]
├ ⌥ ${prefix}setprofile [ _reply image_ ]
├ ⌥ ${prefix}setname [ _teks_ ]
├ ⌥ ${prefix}setprefix [ _multi/nopref/prefix_ ]
├ ⌥ ${prefix}setbio [ _teks_ ]
├ ⌥ ${prefix}leave
├ ⌥ ${prefix}restart
├ ⌥ ${prefix}addrespon [ _tanya|jawab_ ]
├ ⌥ ${prefix}delrespon [ _nama_ ]
├ ⌥ ${prefix}listrespon
├ ⌥ ${prefix}readall
├ ⌥ ${prefix}unreadall
├ ⌥ ${prefix}archive
├ ⌥ ${prefix}unarchiveall
├ ⌥ ${prefix}pin
├ ⌥ ${prefix}unpin
├ ⌥ ${prefix}setmenu [ _ori/simpel_ ]
├ ⌥ ${prefix}setallmenu [ _ori/simpel_ ]
├ ⌥ ${prefix}leavetime [ _detik/menit/jam_ ]
├ ⌥ ${prefix}bukatime [ _detik/menit/jam_ ]
├ ⌥ ${prefix}tutuptime [ _detik/menit/jam_ ]
├ ⌥ ${prefix}nano [ _nama file_ ]
└────────────────⬣
╭─⬣  「 Download 」⬣
├ ⌥ ${prefix}herolist
├ ⌥ ${prefix}herodetail [ _hero_ ]
├ ⌥${prefix}google [ _search_ ]
├ ⌥${prefix}gimage [ _search_ ]
├ ⌥ ${prefix}wiki [ _search_ ]
├ ⌥ ${prefix}mediafire [ _link_ ]
├ ⌥ ${prefix}ytsearch [ _judul_ ]
├ ⌥ ${prefix}ytmp4 [ _link yt_ ]
├ ⌥ ${prefix}ytmp3 [ _link yt_ ]
├ ⌥ ${prefix}play [ _judul lagu_ ]
├ ⌥ ${prefix}video [ _judul video_ ]
├ ⌥ ${prefix}tinyurl [ _link_ ]
├ ⌥ ${prefix}fetch [ _link_ ]
├ ⌥ ${prefix}igdl [ _link_ ]
├ ⌥ ${prefix}tiktokdl [ _link_ ]
├ ⌥ ${prefix}pinterest [ _search_ ]
├ ⌥ ${prefix}lirik [ _judul_ ]
├ ⌥ ${prefix}tourl [ _reply image/video_ ]
├ ⌥ ${prefix}kalkulator [ _angka_ ]
├ ⌥ ${prefix}translate [ _teks kodebhs_ ]
└────────────────⬣
╭─⬣  「 Group 」⬣
├ ⌥ ${prefix}getpict [ _@tag_ ]
├ ⌥ ${prefix}getname [ _reply target_ ]
├ ⌥ ${prefix}getbio [ _reply target_ ]
├ ⌥ ${prefix}promote [ _@tag_ ]
├ ⌥ ${prefix}demote [ _@tag_ ]
├ ⌥ ${prefix}antilink [ _on/off_ ]
├ ⌥ ${prefix}antivirtex [ _on/off_ ]
├ ⌥ ${prefix}antiwame [ _on/off_ ]
├ ⌥ ${prefix}antibug [ _on/off_ ]
├ ⌥ ${prefix} welcome [ _on/off_ ]
├ ⌥ ${prefix}creategrup [ _nama|@tag_ ]
├ ⌥ ${prefix}tictactoe [ _@tag_ ]
├ ⌥ ${prefix}delttt
├ ⌥ ${prefix}getpp
├ ⌥ ${prefix}antiwame
├ ⌥ ${prefix}getdeskgc
├ ⌥ ${prefix}setnamegc [ _teks_ ]
├ ⌥ ${prefix}setdeskgc [ _teks_ ]
├ ⌥ ${prefix}fitnah [ _@tag|teks1|teks2_ ]
├ ⌥ ${prefix}kontak [ _@tag|nama_ ]
├ ⌥ ${prefix}kontag [ _@tag|nama_ ]
├ ⌥ ${prefix}open
├ ⌥ ${prefix}close
├ ⌥ ${prefix}resetlinkgc
├ ⌥ ${prefix}linkgrup
├ ⌥ ${prefix}hidetag [ _teks_ ]
├ ⌥ ${prefix}tagall [ _teks_ ]
├ ⌥ ${prefix}sticktag [ _nama sticker_ ]
├ ⌥ ${prefix}totag [ _reply media_ ]
└────────────────⬣
╭─⬣  「 Other 」⬣
├ ⌥ ${prefix}jadibot
├ ⌥ ${prefix}caripesan [ _teks|jumlah_ ]
├ ⌥ ${prefix}slots
├ ⌥ ${prefix}suit [ _gunting/batu/kertas_ ]
├ ⌥ ${prefix}tag [ _nomor_ ]
├ ⌥ ${prefix}tagme
├ ⌥ ${prefix}tts [ _kodebhs teks_ ]
├ ⌥ ${prefix}readmore [ _teks1|teks2_ ]
├ ⌥ ${prefix}fitnahpc [ _nomor|teks1|teks2_ ]
├ ⌥ ${prefix}chat [ _nomor|teks_ ]
├ ⌥ ${prefix}fdeface [ _replyimg link|teks1|teks2_ ]
├ ⌥ ${prefix}listimage
├ ⌥ ${prefix}liststicker
├ ⌥ ${prefix}listvn
├ ⌥ ${prefix}listgrup
├ ⌥ ${prefix}baileys [ _reply message_ ]
├ ⌥ ${prefix}getcaption [ _reply message_ ]
├ ⌥ ${prefix}tospam [ _reply audio/sticker/image|jumlah_ ]
├ ⌥ ${prefix}sharelock [ _teks1|teks2_ ]
├ ⌥ ${prefix}sticker
├ ⌥ ${prefix}stickerwm [ _nama|author_ ]
├ ⌥ ${prefix}takestick [ _nama|author_ ]
├ ⌥ ${prefix}colong [ _reply sticker_ ]
├ ⌥ ${prefix}dadu
├ ⌥ ${prefix}semoji [ _emoji_ ]
├ ⌥ ${prefix}attp [ _teks_ ]
├ ⌥ ${prefix}toimg
├ ⌥ ${prefix}tomp3 [ _reply video_ ]
├ ⌥ ${prefix}tomp4 [ _reply sticker gif_ ]
├ ⌥ ${prefix}robot [ _reply audio_ ]
├ ⌥ ${prefix}balik [ _reply audio_ ]
├ ⌥ ${prefix}bass [ _reply audio_ ]
├ ⌥ ${prefix}gemuk [ _reply audio_ ]
├ ⌥ ${prefix}detikvn [ _reply audio caption angka_ ]
├ ⌥ ${prefix}detikvideo [ _reply video caption angka_ ]
└────────────────⬣`
if(menuall == false){
   //Masih langka
anu = vinzbot.prepareMessageFromContent(from,{
					"productMessage": {
						"product": {
								"productImage": {
								 "url": "https://mmg.whatsapp.net/d/f/AsGT4Dcy46zR5QnLXMrc43Vxdms9cwB6V5mr-GAEMqDa.enc",
						"mimetype": "image/jpeg",
						"caption": "x mek",
						"fileSha256": "BtdK8pdbeUv+mOZ+e8BzP+47OT6zJ5AEO7qIKAUTML4=",
						"fileLength": "72019",
						"height": 1280,
						"width": 1280,
						"mediaKey": "mbyEdYIUrb3zLqfn19mXU4Nojc5HM7zPhBM6FeMdyUQ=",
						"fileEncSha256": "wFWwpKk8I1izntpD8Q1ppBMZsxXcoe4KnDyjNmlTuMo=",
						"jpegThumbnail": fs.readFileSync("./thumb.jpg")
                                },
                            "productId": "9999999",
							"title": `${nama}`, 
							"description": `${menunya}`,
							"productImageCount": 1
						},
						"businessOwnerJid": `${ownerJid}`,
						"contextInfo": {
							"forwardingScore": 9999,
							"isForwarded": true
						}
					}
				},{quoted: ftrol, contextInfo: { mentionedJid: [dtod,otod,stod]}})
                  vinzbot.relayWAMessage(anu)
                  } else if(menuall = true){
gbutsan = [
{buttonId:`simpel`,buttonText:{displayText:'SIMPEL MENU'},type:1},
{buttonId:`donasi`,buttonText:{displayText:'DONASI'},type:1},
{buttonId:`owner`,buttonText:{displayText:'OWNER'},type:1}
]
mhan = await vinzbot.prepareMessage(from, pporigi, image, {thumbnail: pporigi})
const btnBngsat = {
imageMessage: mhan.message.imageMessage,
contentText: `${menunya}`,
footerText: `𝙔𝙏 𝙑𝙄𝙉𝙕𝘽𝙊𝙏\n𝙋𝙄𝙉𝘿𝘼𝙃 𝙆𝙀 𝘾𝙃𝘼𝙉𝙀𝙇\n𝙆𝙤𝙣𝙓 ✘`,
buttons: gbutsan,
headerType: 4
}
vinzbot.sendMessage(from, btnBngsat, MessageType.buttonsMessage, { quoted: ftrol, caption: menunya, contextInfo: { mentionedJid: [dtod,otod,stod]}})
                  }
break
case 'simpel':
case 'menu':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
 stod = `${sender}`
 listMsg = {
 buttonText: 'LIST MENU',
 description: `Hai kak @${stod.split('@')[0]}, Silahkan pilih listmenu disini`,
 sections: [
                     {
                      "title": `${jmn} - ${week} ${weton} - ${calender}`,
 rows: [
                          {
                              "title": "Donasi",
                              "rowId": ""
                           },
                           {
                              "title": "Store",
                              "rowId": ""    
                           },
                           {
                              "title": "OwnerMenu",
                              "rowId": ""
                           },
                           {
                              "title": "GroupMenu",
                              "rowId": ""
                           },
                           {
                              "title": "DownloadMenu",
                              "rowId": ""
                           },
                           {
                              "title": "OtherMenu",
                              "rowId": ""
                           }
                        ]
                     }],
 listType: 1
}
vinzbot.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [stod]},quoted:ftrol})
break
case 'verify':
if (isRegistered) return sticOk(from)
const serialUser = createSerial(18)
	        veri = sender
	        _registered.push(sender)
	        fs.writeFileSync('./database/registered.json', JSON.stringify(_registered))
	        addRegisteredUser(sender, serialUser)
	         const jancok = `╭─❒ 「 Verify 」 ❒
├ *Nama :* ${pushname}
├ *Nomor :* @${sender.split('@')[0]}
├ *Seri:* ${serialUser}
├ *Pengguna:* ${_registered.length}
└❏

*「 ${NamaBot} 」*`
gbutsan = [
{buttonId:`menu`,buttonText:{displayText:'MENU'},type:1},
{buttonId:`donasi`,buttonText:{displayText:'DONASI'},type:1}
]
mhan = await vinzbot.prepareMessage(from, ofrply, image, {thumbnail: ofrply})
const sendBtnVeryy = {
imageMessage: mhan.message.imageMessage,
contentText:`${jancok}`,
footerText:'Terimakasih Sudah Mendaftar\n*_©𝑨𝑹𝑪𝑬𝑳𝑺 𝑩𝑶𝑻_*', 
buttons: gbutsan,
headerType: 4
}
vinzbot.sendMessage(from, sendBtnVeryy, MessageType.buttonsMessage, {quoted:ftrol, contextInfo: { mentionedJid: [sender]}})
	         console.log(color('[REGISTER]'), color(time, 'yellow'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
	    // console.log(e)
        break
case 'ownermenu':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
  stst = await vinzbot.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
menu = `❏ 「 \`\`\`MENU OWNER\`\`\` 」❏
╭─❒ 「 \`\`\`USER INFO\`\`\`  」 ❒
☑️ _Status : ${isOwner ? 'Owner' : 'User'}_
👤 _Nama : ${pushname}_
💌 _Bio : ${stst}_
👥 _Nomor : @${stod.split('@')[0]}_
└❏
╭─────────────────────❒
├ ⌥ ${prefix}autorespon [ _on/off_ ]
├ ⌥ ${prefix}antidelete [ _on/off_ ]
├ ⌥ ${prefix}bc [ _teks/reply gif/image/video with caption_ ]
├ ⌥ ${prefix}tobc [ _reply sticker/audio with caption_ ]
├ ⌥ ${prefix}return [ _javascript_ ]
├ ⌥ ${prefix}clearall
├ ⌥ ${prefix}delchat
├ ⌥ ${prefix}mute
├ ⌥ ${prefix}unmute
├ ⌥ ${prefix}public
├ ⌥ ${prefix}self
├ ⌥ ${prefix}spam [ _teks|jumlah_ ]
├ ⌥ ${prefix}demoteall
├ ⌥ ${prefix}promoteall
├ ⌥ ${prefix}addcmd [ _teks reply stc_ ]
├ ⌥ ${prefix}delcmd [ _reply stc_ ]
├ ⌥ ${prefix}listcmd
├ ⌥ ${prefix}spamsw [ _teks|jumlah_ ]
├ ⌥ ${prefix}upswteks [ _teks_ ]
├ ⌥ ${prefix}upswlokasi [ _teks_ ]
├ ⌥ ${prefix}upswaudio [ _reply audio_ ]
├ ⌥ ${prefix}upswvoice [ _reply audio_ ]
├ ⌥ ${prefix}upswsticker [ _reply sticker_ ]
├ ⌥ ${prefix}upswimage [ _reply image with caption_ ]
├ ⌥ ${prefix}upswgif [ _reply gif with caption_ ]
├ ⌥ ${prefix}upswvideo [ _reply video with caption_ ]
├ ⌥ ${prefix}shutdown
├ ⌥ ${prefix}offline [ _alasan_ ]
├ ⌥ ${prefix}online
├ ⌥ ${prefix}exif [ _nama|author_ ]
├ ⌥ ${prefix}setprofile [ _reply image_ ]
├ ⌥ ${prefix}setname [ _teks_ ]
├ ⌥ ${prefix}setprefix [ _multi/nopref/prefix_ ]
├ ⌥ ${prefix}setbio [ _teks_ ]
├ ⌥ ${prefix}leave
├ ⌥ ${prefix}restart
├ ⌥ ${prefix}addrespon [ _tanya|jawab_ ]
├ ⌥ ${prefix}delrespon [ _nama_ ]
├ ⌥ ${prefix}listrespon
├ ⌥ ${prefix}readall
├ ⌥ ${prefix}unreadall
├ ⌥ ${prefix}archive
├ ⌥ ${prefix}unarchiveall
├ ⌥ ${prefix}pin
├ ⌥ ${prefix}unpin
├ ⌥ ${prefix}setmenu [ _ori/simpel_ ]
├ ⌥ ${prefix}setallmenu [ _ori/simpel_ ]
├ ⌥ ${prefix}leavetime [ _detik/menit/jam_ ]
├ ⌥ ${prefix}bukatime [ _detik/menit/jam_ ]
├ ⌥ ${prefix}tutuptime [ _detik/menit/jam_ ]
├ ⌥ ${prefix}nano [ _nama file_ ]
└─────────────────────❏
`
katalog(menu)
break
case 'downloadmenu':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
  stst = await vinzbot.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
menu = `❏ 「 \`\`\`MENU DOWNLOAD\`\`\` 」❏
╭─❒ 「 \`\`\`USER INFO\`\`\`  」 ❒
☑️ _Status : ${isOwner ? 'Owner' : 'User'}_
👤 _Nama : ${pushname}_
💌 _Bio : ${stst}_
👥 _Nomor : @${stod.split('@')[0]}_
└❏
╭─────────────────────❒
├ ⌥ ${prefix}herolist
├ ⌥ ${prefix}herodetail [ _hero_ ]
├ ⌥${prefix}google [ _search_ ]
├ ⌥${prefix}gimage [ _search_ ]
├ ⌥ ${prefix}wiki [ _search_ ]
├ ⌥ ${prefix}mediafire [ _link_ ]
├ ⌥ ${prefix}ytsearch [ _judul_ ]
├ ⌥ ${prefix}ytmp4 [ _link yt_ ]
├ ⌥ ${prefix}ytmp3 [ _link yt_ ]
├ ⌥ ${prefix}play [ _judul lagu_ ]
├ ⌥ ${prefix}video [ _judul video_ ]
├ ⌥ ${prefix}tinyurl [ _link_ ]
├ ⌥ ${prefix}fetch [ _link_ ]
├ ⌥ ${prefix}igdl [ _link_ ]
├ ⌥ ${prefix}tiktokdl [ _link_ ]
├ ⌥ ${prefix}pinterest [ _search_ ]
├ ⌥ ${prefix}lirik [ _judul_ ]
├ ⌥ ${prefix}tourl [ _reply image/video_ ]
├ ⌥ ${prefix}kalkulator [ _angka_ ]
├ ⌥ ${prefix}translate [ _teks kodebhs_ ]
└─────────────────────❏
`
katalog(menu)
break
case 'store':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
  stst = await vinzbot.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
menu = `❏ 「 \`\`\` STORE\`\`\` 」❏
╭─❒ 「 \`\`\`USER INFO\`\`\`  」 ❒
☑️ _Status : ${isOwner ? 'Owner' : 'User'}_
👤 _Nama : ${pushname}_
💌 _Bio : ${stst}_
👥 _Nomor : @${stod.split('@')[0]}_
└❏
╭─────────────────────❒
├⌥ ${prefix}caraorder
├⌥ ${prefix}payment
├⌥ ${prefix}redeemcode
├⌥ ${prefix}preorder
├⌥ ${prefix}allpromo
├⌥ ${prefix}diamondml
├⌥ ${prefix}diamondff
├⌥ ${prefix}pubg
├⌥ ${prefix}codm
├⌥ ${prefix}aov
├⌥ ${prefix}valorant
├⌥ ${prefix}genshinimpact
├⌥ ${prefix}sausageman
├⌥ ${prefix}lifeafter
├⌥ ${prefix}pointblank
├⌥ ${prefix}domino
└─────────────────────❏
`
katalog(menu)
break
case 'makermenu':
menu = `❏ 「 \`\`\`MENU MAKER\`\`\` 」❏
╭─❒ 「 \`\`\`USER INFO\`\`\`  」 ❒
☑️ _Status : ${isOwner ? 'Owner' : 'User'}_
👤 _Nama : ${pushname}_
💌 _Bio : ${stst}_
👥 _Nomor : @${stod.split('@')[0]}_
└❏
╭─────────────────────❒
├ ⌥ ${prefix}foliokanan [ _text_ ]
├ ⌥ ${prefix}foliokiri [ _text_ ]
├ ⌥ ${prefix}nuliskanan [ _text_ ]
├ ⌥ ${prefix}nuliskiri [ _text_ ]
├ ⌥ ${prefix}maker3d [ _text_ ]
├ ⌥ ${prefix}maker2d [ _text_ ]
├ ⌥ ${prefix}epepserti [ _text_ ]
├ ⌥ ${prefix}wetglass [ _text_ ]
├ ⌥ ${prefix}multicolor3d [ _text_ ]
├ ⌥ ${prefix}watercolor [ _text_ ]
├ ⌥ ${prefix}luxurygold [ _text_ ]
├ ⌥ ${prefix}galaxywallpaper [ _text_ ]
├ ⌥ ${prefix}lighttext [ _text_ ]
├ ⌥ ${prefix}beautifulflower [ _text_ ]
├ ⌥ ${prefix}puppycute [ _text_ ]
├ ⌥ ${prefix}royaltext [ _text_ ]
├ ⌥ ${prefix}heartshaped [ _text_ ]
├ ⌥ ${prefix}birthdaycake [ _text_ ]
├ ⌥ ${prefix}galaxystyle [ _text_ ]
├ ⌥ ${prefix}hologram3d [ _text_ ]
├ ⌥ ${prefix}greenneon [ _text_ ]
├ ⌥ ${prefix}glossychrome [ _text_ ]
├ ⌥ ${prefix}greenbush [ _text_ ]
├ ⌥ ${prefix}metallogo [ _text_ ]
├ ⌥ ${prefix}noeltext [ _text_ ]
├ ⌥ ${prefix}glittergold [ _text_ ]
├ ⌥ ${prefix}textcake [ _text_ ] 
├ ⌥ ${prefix}starsnight [ _text_ ]
├ ⌥ ${prefix}wooden3d [ _text_ ]
├ ⌥ ${prefix}textbyname [ _text_ ]
├ ⌥ ${prefix}writegalacy [ _text_ ]
├ ⌥ ${prefix}galaxybat [ _text_ ]
├ ⌥ ${prefix}snow3d [ _text_ ]
├ ⌥ ${prefix}birthdayday [ _text_ ]
├ ⌥ ${prefix}goldplaybutton [ _text_ ]
├ ⌥ ${prefix}silverplaybutton [ _text_ ]
├ ⌥ ${prefix}freefire [ _text_ ]
└─────────────────────❏
`
katalog(menu)
break
case 'groupmenu':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
  stst = await vinzbot.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
menu = `❏ 「 \`\`\`MENU GROUP\`\`\` 」❏
╭─❒ 「 \`\`\`USER INFO\`\`\`  」 ❒
☑️ _Status : ${isOwner ? 'Owner' : 'User'}_
👤 _Nama : ${pushname}_
💌 _Bio : ${stst}_
👥 _Nomor : @${stod.split('@')[0]}_
└❏
╭─────────────────────❒
├ ⌥ ${prefix}getpict [ _@tag_ ]
├ ⌥ ${prefix}getname [ _reply target_ ]
├ ⌥ ${prefix}getbio [ _reply target_ ]
├ ⌥ ${prefix}promote [ _@tag_ ]
├ ⌥ ${prefix}demote [ _@tag_ ]
├ ⌥ ${prefix}antilink [ _on/off_ ]
├ ⌥ ${prefix}antivirtex [ _on/off_ ]
├ ⌥ ${prefix}antiwame [ _on/off_ ]
├ ⌥ ${prefix}antibug [ _on/off_ ]
├ ⌥ ${prefix}welcome [ _on/off_ ]
├ ⌥ ${prefix}creategrup [ _nama|@tag_ ]
├ ⌥ ${prefix}tictactoe [ _@tag_ ]
├ ⌥ ${prefix}delttt
├ ⌥ ${prefix}getpp
├ ⌥ ${prefix}antiwame
├ ⌥ ${prefix}getdeskgc
├ ⌥ ${prefix}setnamegc [ _teks_ ]
├ ⌥ ${prefix}setdeskgc [ _teks_ ]
├ ⌥ ${prefix}fitnah [ _@tag|teks1|teks2_ ]
├ ⌥ ${prefix}kontak [ _@tag|nama_ ]
├ ⌥ ${prefix}kontag [ _@tag|nama_ ]
├ ⌥ ${prefix}open
├ ⌥ ${prefix}close
├ ⌥ ${prefix}resetlinkgc
├ ⌥ ${prefix}linkgrup
├ ⌥ ${prefix}hidetag [ _teks_ ]
├ ⌥ ${prefix}tagall [ _teks_ ]
├ ⌥ ${prefix}sticktag [ _nama sticker_ ]
├ ⌥ ${prefix}totag [ _reply media_ ]
└─────────────────────❏
`
katalog(menu)
break
case 'othermenu':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
  stst = await vinzbot.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
menu = `❏ 「 \`\`\`MENU OTHER\`\`\` 」❏
╭─❒ 「 \`\`\`USER INFO\`\`\`  」 ❒
☑️ _Status : ${isOwner ? 'Owner' : 'User'}_
👤 _Nama : ${pushname}_
💌 _Bio : ${stst}_
👥 _Nomor : @${stod.split('@')[0]}_
└❏
╭─────────────────────❒
├ ⌥ ${prefix}jadibot
├ ⌥ ${prefix}caripesan [ _teks|jumlah_ ]
├ ⌥ ${prefix}slots
├ ⌥ ${prefix}suit [ _gunting/batu/kertas_ ]
├ ⌥ ${prefix}tag [ _nomor_ ]
├ ⌥ ${prefix}tagme
├ ⌥ ${prefix}tts [ _kodebhs teks_ ]
├ ⌥ ${prefix}readmore [ _teks1|teks2_ ]
├ ⌥ ${prefix}fitnahpc [ _nomor|teks1|teks2_ ]
├ ⌥ ${prefix}chat [ _nomor|teks_ ]
├ ⌥ ${prefix}fdeface [ _replyimg link|teks1|teks2_ ]
├ ⌥ ${prefix}listimage
├ ⌥ ${prefix}liststicker
├ ⌥ ${prefix}listvn
├ ⌥ ${prefix}listgrup
├ ⌥ ${prefix}baileys [ _reply message_ ]
├ ⌥ ${prefix}getcaption [ _reply message_ ]
├ ⌥ ${prefix}tospam [ _reply audio/sticker/image|jumlah_ ]
├ ⌥ ${prefix}sharelock [ _teks1|teks2_ ]
├ ⌥ ${prefix}sticker
├ ⌥ ${prefix}stickerwm [ _nama|author_ ]
├ ⌥ ${prefix}takestick [ _nama|author_ ]
├ ⌥ ${prefix}colong [ _reply sticker_ ]
├ ⌥ ${prefix}dadu
├ ⌥ ${prefix}semoji [ _emoji_ ]
├ ⌥ ${prefix}attp [ _teks_ ]
├ ⌥ ${prefix}toimg
├ ⌥ ${prefix}tomp3 [ _reply video_ ]
├ ⌥ ${prefix}tomp4 [ _reply sticker gif_ ]
├ ⌥ ${prefix}robot [ _reply audio_ ]
├ ⌥ ${prefix}balik [ _reply audio_ ]
├ ⌥ ${prefix}bass [ _reply audio_ ]
├ ⌥ ${prefix}gemuk [ _reply audio_ ]
├ ⌥ ${prefix}detikvn [ _reply audio caption angka_ ]
├ ⌥ ${prefix}detikvideo [ _reply video caption angka_ ]
└─────────────────────❏
`
katalog(menu)
break
case 'd':
     if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return sticAdmin(from)
                   if (!isBotGroupAdmins) return sticNotAdmin(from)
					reply(`*ORDERAN SUKSES ✅*

*TERIMAKASIH SUDAH ORDER DITUNGGU NEXT ORDERANNYA 🌹*`)
					break
case 'p':
     if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return sticAdmin(from)
                   if (!isBotGroupAdmins) return sticNotAdmin(from)
					reply(`*ORDERAN SEDANG DI PROSES🔁*

*MOHON TUNGGU SEBENTAR 🥰*`)
					break
case 'caraorder':
     if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})				
stod = `${sender}`
dona = fs.readFileSync('./media/caraorder.jpg')
doni =`
❏ 「 \`\`\`CARA ORDER\`\`\` 」❏
*BERIKUT CARA ORDER*

1. Tentukan dulu kamu ingin order apa bisa di lihat di /store.
2. Jika sudah fix ingin order ,segera melakukan Pembayaran/Transfer ke Payment.
3. Jika sudah melakukan Pembayaran/Transfer ,kirim Screenshot pembayaran/transfer dan Format ordernya seperti gambar di atas ke group chat ini.
4. Orderan kamu akan segera di proses admin.

*TERIMA KASIH*
`
vinzbot.sendMessage(from, dona, image, {contextInfo: { mentionedJid: [dtod,otod,stod]}, quoted: ftrol, thumbnail: dona, caption: doni })
break
//🐀💰 MALING
					//Fun not faedah
               case 'brainly':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					if (args.length < 1) return reply('Pertanyaan apa')
		          	brien = args.join(' ')
					brainly(`${brien}`).then(res => {
					teks = '❉───────────────────────❉\n'
					for (let Y of res.data) {
					teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`
					}
					vinzbot.sendMessage(from, teks, text,{quoted:mek,detectLinks: false})                        
		            })              
					break
case 'igstalk':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
try{
if (!c) return reply('Usernamenya?')
ig.fetchUser(`${args.join(' ')}`).then(Y => {
console.log(`${args.join(' ')}`)
ten = `${Y.profile_pic_url_hd}`
teks = `*ID* : ${Y.profile_id}\n*Username* : ${args.join('')}\n*Full Name* : ${Y.full_name}\n*Bio* : ${Y.biography}\n*Followers* : ${Y.following}\n*Following* : ${Y.followers}\n*Private* : ${Y.is_private}\n*Verified* : ${Y.is_verified}\n\n*Link* : https://instagram.com/${args.join('')}`
sendMediaURL(from,ten,teks) 
})} catch {
const tod = await fetchJson(
`https://ferdiz-afk.my.id/api/stalkig?username=${c}`
);
var nih_buff = await getBuffer(tod.picurl);
const tt = `*INSTAGRAM STALK*

\nUsername: ${tod.username}\nFullname: ${tod.fullname}\npostingan: ${tod.post}\ncategory_akun: ${tod.category_name}\nverified: ${tod.verified_user}\nprivate: ${tod.private_user}\nFollowing: ${tod.following}\nFollower: ${tod.followers}\nBio:\n${tod.bio}`;
vinzbot.sendMessage(from, nih_buff, image, { quoted: mek, caption: tt });
}
break;      
break    
                case 'bisakah':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					bisakah = body.slice(1)
					const bisa =['Bisa','Tidak Bisa','Coba Ulangi','Ngimpi kah?','yakin bisa?']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					vinzbot.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: mek })
					break
				case 'kapankah':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					kapankah = body.slice(1)
					const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi','Tidak Akan Pernah']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					vinzbot.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: mek })
					break
         			  case 'apakah':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					apakah = body.slice(1)
					const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi','Tanyakan Ayam']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					vinzbot.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: mek })
					break
				case 'rate':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					rate = body.slice(1)
					const ra =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					const te = ra[Math.floor(Math.random() * ra.length)]
					vinzbot.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: mek })
					break
		    case 'tiktokaudio':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
		 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.error.api)
 		if (!c) return reply('Linknya?')
 		sticWait(from)
		hx.ttdownloader(`${args[0]}`)
    		.then(result => {
    		const { wm, nowm, audio } = result
    		axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
    		.then(async (a) => {
    		me = `*Link* : ${a.data}`
    nowmm = await getBuffer(audio)
	vinzbot.sendMessage(from,nowmm ,MessageType.audio,{mimetype:'audio/mp4',quoted: mek})
		})
		})
		break 
	case 'igstory': 
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
            if(!c) return reply('Usernamenya?')
            hx.igstory(`${c}`)
            .then(async result => {
            for(let i of result.medias){
                if(i.url.includes('mp4')){
                    let link = await getBuffer(i.url)
                    vinzbot.sendMessage(from,link,video,{quoted: mek,caption: `Type : ${i.type}`})
                } else {
                    let link = await getBuffer(i.url)
                    vinzbot.sendMessage(from,link,image,{quoted: mek,caption: `Type : ${i.type}`})                  
                }
            }
            });
            break
    case 'playstore':
    if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
            if(!c) return reply('lu nyari apa?')
            let play = await hx.playstore(`${c}`)
            let store = '❉─────────────────────❉\n'
            for (let i of play){
            store += `\n*「 *PLAY STORE* 」*\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉`
            }
            reply(store)
            break
		    case 'fb':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
            if (!c) return reply('Linknya?')
            if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(mess.error.api)
            sticWait(from)
            te = args.join(' ')
            hx.fbdown(`${te}`)
            .then(G => {
            ten = `${G.HD}`
            sendMediaURL(from,ten,`*LINK VIDEO* : ${G.Normal_video}`)
            })
            break    
case 'linkwa':
case 'grupwa':
case 'groupwa':
case 'gcwa':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
            if(!c) return reply('cari group apa?')
            hx.linkwa(`${c}`)
            .then(result => {
            let res = '「 *GC WA* 」\n\n'
            for (let i of result) {
            res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`
            }
            reply(res)
            });
            break 
    case 'otaku':
    if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
            if(!c) return reply('judul animenya?')
            let anime = await hx.otakudesu(`${c}`)
            rem = `*Judul* : ${anime.judul}
*Jepang* : ${anime.jepang}
*Rating* : ${anime.rate}
*Produser* : ${anime.produser}
*Status* : ${anime.status}
*Episode* : ${anime.episode}
*Durasi* : ${anime.durasi}
*Rilis* : ${anime.rilis}
*Studio* : ${anime.studio}
*Genre* : ${anime.genre}\n
*Sinopsis* :
${anime.desc}\n\n*Link Batch* : ${anime.batch}\n*Link Download SD* : ${anime.batchSD}\n*Link Download HD* : ${anime.batchHD}`
            ram = await getBuffer(anime.img)
            vinzbot.sendMessage(from,ram,image,{quoted:mek,caption:rem})
            break
    case 'komiku':
    if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
            if(!c) return reply(`judulnya?\n${prefix}komiku mao gakuin`)
            let komik = await hx.komiku(`${c}`)
            result = `*Title* : ${komik.title}\n
*Title Indo* : ${komik.indo}\n
*Update* : ${komik.update}\n
*Desc* : ${komik.desc}\n
*Chapter Awal* : ${komik.chapter_awal}
*Chapter Akhir* : ${komik.chapter_akhir}`
            sendMediaURL(from, komik.image,result)
            break  
		    case 'twmp4': case 'twitter':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length < 1) return reply('Link?')
lin = args[0]
sticWait(from)
hx.twitter(lin).then(res => {
console.log('[ TWITTER ] downloader')
Anu = res.SD
fto = fs.readFileSync('./thumb.jpg')
sendMediaURL(from, Anu, 'Done!')
})
break
case 'twmp3':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length < 1) return reply('Link?')
lin = args[0]
sticWait(from)
hx.twitter(lin).then(async (res) => {
console.log('[ TWITTER ] downloader')
Anu = res.SD
khs = await getBuffer(Anu)
vinzbot.sendMessage(from, khs, audio, {mimetype:'audio/mp4', filename:'audio.mp3', quoted:mek, ptt:true})
})
break
    case 'chara':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
            if(!c) return reply(`gambar apa?\n${prefix}chara nino`)
            let im = await hx.chara(`${c}`)
            let acak = im[Math.floor(Math.random() * im.length)]
            let li = await getBuffer(acak)
            await vinzbot.sendMessage(from,li,image,{quoted: mek})
            break
//Navi
					          case 'unpin':
                if (!isOwner && !mek.key.fromMe) return sticOwner(from)
                vinzbot.modifyChat(from, ChatModification.unpin)
                reply('*succes unpin this chat*')
                console.log('unpin chat = ' + from)
                break
            case 'pin':
                if (!isOwner && !mek.key.fromMe) return sticOwner(from)
                vinzbot.modifyChat(from, ChatModification.pin)
                reply('*succes pin this chat*')
                console.log('pinned chat = ' + from)
                break
             case 'archive':
                if (!isOwner && !mek.key.fromMe) return sticOwner(from)
                reply('*okey wait..*')
                console.log('succes archive chat = ' + from)
                await sleep(3000)
                vinzbot.modifyChat(from, ChatModification.archive)
                break
            case 'unreadall':
                if (!isOwner && !mek.key.fromMe) return sticOwner(from)
                var chats = await vinzbot.chats.all()
                chats.map( async ({ jid }) => {
                await vinzbot.chatRead(jid, 'unread')
                    })
		    var teks = `\`\`\`Successfully unread ${chats.length} chats !\`\`\``
		    await vinzbot.sendMessage(from, teks, text, {quoted: mek})
		    console.log(chats.length)
	        break
            case 'readall':
                if (!isOwner && !mek.key.fromMe) return sticOwner(from)
                var chats = await vinzbot.chats.all()
                chats.map( async ({ jid }) => {
                await vinzbot.chatRead(jid)
                })
		var teks = `\`\`\`Successfully read ${chats.length} chats !\`\`\``
	        await vinzbot.sendMessage(from, teks, text, {quoted: mek})
		console.log(chats.length)
		break
            case 'unarchiveall':
                if (!isOwner && !mek.key.fromMe) return sticOwner(from)
                reply('*succes unarchive all chat*')
                console.log('succes unarchive chat = ' + from)
                anu = await vinzbot.chats.all()
                for (let _ of anu) {
                vinzbot.modifyChat(_.jid, ChatModification.unarchive)
                }
                break
case 'tutuptime':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticNotAdmin(from)
if (args[1]=="detik") {var timer = args[0]+"000"
} else if (args[1]=="menit") {var timer = args[0]+"0000"
} else if (args[1]=="jam") {var timer = args[0]+"00000"
} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
setTimeout( () => {
var nomor = mek.participant
vinzbot.groupSettingChange (from, GroupSettingChange.messageSend, true);
}, timer)
break
case 'bukatime':
		if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticNotAdmin(from)
if (args[1]=="detik") {var timer = args[0]+"000"
} else if (args[1]=="menit") {var timer = args[0]+"0000"
} else if (args[1]=="jam") {var timer = args[0]+"00000"
} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
setTimeout( () => {
var nomor = mek.participant
vinzbot.groupSettingChange (from, GroupSettingChange.messageSend, false);
}, timer)
break
case 'leavetime':
if (!isGroup) return reply(mess.only.group)
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
if (args[1]=="detik") {var timer = args[0]+"000"
} else if (args[1]=="menit") {var timer = args[0]+"0000"
} else if (args[1]=="jam") {var timer = args[0]+"00000"
} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
setTimeout( () => {
vinzbot.groupLeave(from);
}, timer)
case 'nano':
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
if (!c) return reply('Nama file nya apaa ?')
anu = fs.readFileSync(`${c}`)
reply(String(anu))
break
case 'setmenu':
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
if(args[0] == 'ori'){
menusimpel = true
reply('Sucsess')
}else if(args[0] == 'simpel'){
menusimpel = false
reply('Sucsess')
}else if (!c) {
anu =`Silahkan pilih salah satu di bawah`
 buttons = [{buttonId: 'setmenu ori', buttonText: {displayText: 'ORI'}, type: 1},{buttonId: 'setmenu simpel', buttonText: {displayText: 'SIMPEL'}, type: 1}]
const skuygelud = {
    contentText: `${anu}`,
    footerText: '*_©𝑨𝑹𝑪𝑬𝑳𝑺 𝑩𝑶𝑻_*',
    buttons: buttons,
    headerType: 1
}
await vinzbot.sendMessage(from, skuygelud, MessageType.buttonsMessage, {quoted: ftrol})
}
break
case 'setallmenu':
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
if(args[0] == 'ori'){
menuall = true
reply('Sucsess')
}else if(args[0] == 'simpel'){
menuall = false
reply('Sucsess')
}else if (!c) {
anu =`Silahkan pilih salah satu di bawah`
 buttons = [{buttonId: 'setallmenu ori', buttonText: {displayText: 'ORI'}, type: 1},{buttonId: 'setallmenu simpel', buttonText: {displayText: 'SIMPEL'}, type: 1}]
const skuygf = {
    contentText: `${anu}`,
    footerText: '*_©??𝑹𝑪𝑬𝑳𝑺 𝑩𝑶𝑻_*',
    buttons: buttons,
    headerType: 1
}
await vinzbot.sendMessage(from, skuygf, MessageType.buttonsMessage, {quoted: ftrol})
}
break
//Sampai sini
case 'jadibot':
    if (isGroup) return reply('TIDAK BISA JADIBOT DIDALAM GRUP HARAP PC NOMER SAJA')
    if(mek.key.fromMe) return reply('Tidak bisa jadibot di dalam bot')
    jadibot(reply,vinzbot,from)
    break
    case 'stopjadibot':
    if (!isOwner && !isOwner) return reply(mess.only.prem)
    if(mek.key.fromMe)return reply('tidak bisa stopjadibot kecuali owner')
    stopjadibot(reply)
    break
    case 'listbot':
    if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
    let tekss = '「 *LIST JADIBOT* 」\n'
    for(let i of listjadibot) {
    tekss += `*Nomor* : ${i.jid.split('@')[0]}
*Nama* : ${i.name}
*Device* : ${i.phone.device_manufacturer}
*Model* : ${i.phone.device_model}\n\n`
    }
    reply(tekss)
    break
case 'owner':
	case 'creator':
case 'developer':
		case 'author':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
stst = await vinzbot.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
members_ids = []
for (let mem of groupMembers) {
members_ids.push(mem.jid)
}
vcard2 = 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ `FN:${NamaOwner}\n`
+ `ORG:OWNER GANZ\n`
+ `TEL;type=CELL;type=VOICE;waid=${NomorOwner}:${NomorOwner}\n`
+ 'END:VCARD'.trim()
vinzbot.sendMessage(from, {displayName: `Creator ${NamaOwner}`, vcard: vcard2}, contact, 
{ quoted: ftrol, 
})
reply('*「 👑 」Tuh Nomor Owner Ku🗿*')
break
case 'addcmd': 
case 'setcmd':
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
if (isQuotedSticker) {
if (!c) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
addCmd(kodenya, c)
reply("Done Bwang")
} else {
reply('tag stickenya')
}
break
case 'delcmd':
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`)
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
scommand.splice(getCommandPosition(kodenya), 1)
fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
reply("Done Bwang")
break
case 'listcmd':
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
let teksnyee = `\`\`\`「 LIST CMD STIC 」\`\`\``
let cemde = [];
for (let i of scommand) {
cemde.push(i.id)
teksnyee += `\n\n*❏ ID :* ${i.id}\n*❏ Cmd :* ${i.chats}`
}
reply(teksnyee)
break				
		case 'donasi':
dona = fs.readFileSync('./media/donasi.jpg')
doni =`❏ 「 \`\`\`DONASI\`\`\` 」❏
*╭─────────────────*
*│* *⬡MAU DONASI APA*
*│CUMAN LIAT AJA!*
*│* *⬡LINKAJA :*
*│* *${linkaja}*
*├* *⌥(SYARIFUDIN)*
*│* *⬡DANA      :*
*│* *${dana}*
*├* *⌥(SYARIFUDIN)*
*│* *⬡GOPAY    :*
*│* *${gopay}*
*├* *⌥(ARCELS STORE)*
*│* *⬡OVO :*
*│* *${ovo}*
*├* *⌥(SYARIFUDIN)*
*└─────────────────*
`
vinzbot.sendMessage(from, dona, image, { quoted: ftrol, thumbnail: dona, caption: doni })
break
case 'ig':
case 'igdl':
case 'instagram':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!c) return reply('Linknya?')
var { igDownloader } = require('./lib/igdown')
   res = await igDownloader(`${c}`).catch(e => {
reply(mess.error.api)
})
console.log(res)
sendMediaURL(from,`${res.result.link}`,`${res.result.desc}`)
                    break
                    case 'tiktok':
                   case 'tiktokdl':
                   case 'tiktoknowm':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!c) return reply('Linknya?')
var { TiktokDownloader } = require('./lib/tiktokdl')
sticWait(from)
res = await TiktokDownloader(`${c}`).catch(e => {
reply(mess.error.api)
})
console.log(res)
sendMediaURL(from, `${res.result.nowatermark}`)
break
                    case 'tourl':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
    if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            owgi = await vinzbot.downloadMediaMessage(boij)
            res = await upload(owgi)
            reply(res)
            } else {
            reply('kirim/reply gambar/video')
            }
            break
case 'viewonce':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
res = await vinzbot.prepareMessageFromContent(from,{
"viewOnceMessage": {
"message": {
"imageMessage": {
"mimetype": 'image/jpeg',
"jpegThumbnail": dfrply,
"viewOnce": true
}
}
}
}, {}) 
vinzbot.relayWAMessage(res)
break
case 'pinterest':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!c) return reply('yg mau di cari apa?')
pinterest(`${c}`).then( data => {
const amsulah = data.result
const pimterest = amsulah[Math.floor(Math.random() * amsulah.length)]
sendMediaURL (from ,pimterest , `Pinterest : ${c}`)
})
break
case 'isbaileys': 
case 'bail': 
case 'baileys':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
reply(`${mek.quoted.isBaileys}`)
break
case 'getcaption':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
try {
reply(`${mek.quoted.title}`)
} catch {
reply(`${mek.quoted.caption}`)
}
break
case 'listgc':
case 'gclist':
case 'listgroup':
                case 'listgrup':
                case 'listgrop':
                case 'gruplist':
                case 'groplist':
                case 'grouplist':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
  const txs = vinzbot.chats.all().filter(v => v.jid.endsWith('g.us')).map(v =>`- ${vinzbot.getName(v.jid)}\n${v.jid}\n[${v.read_only ? 'Left' : 'Joined'}]`).join`\n\n`
  reply(txs)
  break
  case 'caripesan':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length < 1) return reply(`Penggunaan ${prefix}caripesan Hi|15`)
tekse = args.join('')
if (tekse.includes("|")) { 
try {
var ve = tekse.split("|")[0]
var za = tekse.split("|")[1]
if (za > 15) return reply('maksimal 15')
sampai = `${za}`
batas = parseInt(sampai) + 1
cok = await vinzbot.searchMessages(`${ve}`, from, batas,1) 
if (cok.messages.lenght < 2) return reply('Pesan tidak ditemukan!') 
if (cok.messages.length < parseInt(batas)) reply(`Hanya ditemukan ${cok.messages.length - 1} Pesan`)
for (let i=1;i < cok.messages.length;i++) {
if (cok.messages[i].message) {
vinzbot.sendMessage(from, `Nih pesannya!`, text, {quoted: cok.messages[i]}) 
}
}
} catch(e) {
console.log(e)
return reply(mess.error.api)
}
} else {
reply(`Penggunaan ${prefix}caripesan Hi|15`)
}
break
  case 'get':
case 'fetch':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
            if(!c) return reply('Linknya?')
            fetch(`${args[0]}`).then(res => res.text())  
            .then(bu =>{
            reply(bu)
            })   
            break
            case 'autorespon':
      if (!isOwner && !mek.key.fromMe) return sticOwner(from)
           if (c === 'on'){
              autorespon = false
                    reply(`Berhasil mengaktifkan autorespon`)
                } else if (c === 'off'){
                    autorespon = true
                    reply(`Berhasil menonaktifkan autorespon`)
                } else if (!c) {
                    anu =`Silahkan pilih salah satu\n\non: untuk mengaktifkan\noff: untuk menonaktifkan`
const buttons = [{buttonId: 'autorespon on', buttonText: {displayText: 'ON✔️'}, type: 1},{buttonId: 'autorespon off', buttonText: {displayText: 'OFF✖️'}, type: 1}]
const btnharam = {
    contentText: `${anu}`,
    footerText: '*_©𝑨𝑹𝑪𝑬𝑳𝑺 𝑩𝑶𝑻_*',
    buttons: buttons,
    headerType: 1
}
await vinzbot.sendMessage(from, btnharam, MessageType.buttonsMessage, {quoted: ftrol})
                }
                break
                case 'antidelete':
      if (!isOwner && !mek.key.fromMe) return sticOwner(from)
           if (c === 'on'){
             antidelete = false
                    reply(`Berhasil mengaktifkan antidelete`)
                } else if (c === 'off'){
                    antidelete = true
                    reply(`Berhasil menonaktifkan antidelete`)
                } else if (!c) {
                    anu =`Silahkan pilih salah satu\n\non: untuk mengaktifkan\noff: untuk menonaktifkan`
const buttons = [{buttonId: 'antidelete on', buttonText: {displayText: 'ON✔️'}, type: 1},{buttonId: 'antidelete off', buttonText: {displayText: 'OFF✖️'}, type: 1}]
const buttonMessage = {
    contentText: `${anu}`,
    footerText: '*_©𝑨𝑹𝑪𝑬𝑳𝑺 𝑩𝑶𝑻_*',
    buttons: buttons,
    headerType: 1
}
await vinzbot.sendMessage(from, buttonMessage, MessageType.buttonsMessage, {quoted: ftrol})
                }
                break
                case 'setprefix':
      if (!isOwner && !mek.key.fromMe) return sticOwner(from)
      if (args.length < 1) return reply(`Contoh ${prefix + command} multi/nopref`)
           if (c === 'multi'){
              multi = true
                    reply(`Berhasil mengubah prefix ke ${c}`)
                } else if (c === 'nopref'){
                    multi = false
                    nopref = true
                    reply(`Berhasil mengubah prefix ke ${c}`)
                } else {
                    multi = false
                    nopref = false
                    prefa = `${c}`
                    reply(`Berhasil mengubah prefix ke ${c}`)
					}
					break
        case 'test':
				case 'cek':
				case 'tes':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
				runtime = process.uptime()
				reply(`- SUDAH AKTIF NYANN °w°\n${waktu(runtime)}`)
				break
				case 'tictactoe':
case 'ttt':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (args.length < 1) return reply('Tag Lawan Anda! ')
if (isTTT) return reply('Sedang Ada Permainan Di Grub Ini, Harap Tunggu')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target Lawan!')
ment = mek.message.extendedTextMessage.contextInfo.mentionedJid
player1 = sender
player2 = ment[0]
angka = ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
id = from
gilir = player2
ky_ttt.push({player1,player2,id,angka,gilir})
vinzbot.sendMessage(from, `*🎳 Memulai Game Tictactoe 🎲*

[@${player2.split('@')[0]}] Menantang anda untuk menjadi lawan Game🔥
Ketik Y/N untuk menerima atau menolak permainan

Ketik ${prefix}delttc , Untuk Mereset Permainan Yg Ada Di Grup!`, text, {contextInfo: {mentionedJid: [player2]}})
break
                case 'delttt':
                case 'delttc':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (!isTTT) return reply('Tidak Ada Permainan Di Grub Ini')
naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
ky_ttt = naa 
reply('Sukses')
break
				case 'getpp':
					anu = from
		if (`${anu}@s.whatsapp.net`) {
		try {
					ppimg = await vinzbot.getProfilePicture(anu)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				ano = await vinzbot.getProfilePicture(anu)
				buffer = await getBuffer(ano)
				vinzbot.sendMessage(from, buffer, image, {quoted: mek})
		} else {
		}
			  break
case 'mode':
buttonss = [{buttonId: `public`, buttonText: {displayText: 'PUBLIC👥'}, type: 1},{buttonId: `self`, buttonText: {displayText: 'SELF👤'}, type: 1}]
const buMess = {
    contentText: "SELF/PUBLIC",
    footerText: 'Silahkan Pilih Saah Satu',
    buttons: buttonss,
    headerType: 1
}
await vinzbot.sendMessage(from, buMess, MessageType.buttonsMessage, {quoted: ftrol})
break
				case 'public':
				if (!isOwner && !mek.key.fromMe) return sticOwner(from)
			publik = true
				reply('Sukses mengubah mode self ke public')
			break
			case 'self':
			if (!isOwner && !mek.key.fromMe) return sticOwner(from)
				publik = false
				reply('Sukses mengubah mode public ke self')
			break
				case 'herolist':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
await herolist().then((ress) => {
let listt = `*List hero untuk feature ${prefix}herodetail*\n\n`
for (var i = 0; i < ress.hero.length; i++) {
listt += '-  ' + ress.hero[i] + '\n'
}
reply(listt)
})
break
case 'herodetail':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
res = await herodetails(body.slice(12))
her = `*Hero Details ${body.slice(12)}*

*Nama* : ${res.hero_name}
*Role* : ${res.role}
*Quotes* : ${res.entrance_quotes}
*Fitur Hero* : ${res.hero_feature}
*Spesial* : ${res.speciality}
*Rekomendasi Lane* : ${res.laning_recommendation}
*Harga* : ${res.price.battle_point} [Battle point] | ${res.price.diamond} [DM] | ${res.price.hero_fragment} [Fragment]
*Rilis* : ${res.release_date}

*Durability* : ${res.skill.durability}
*Offence* : ${res.skill.offense}
*Skill Effect* : ${res.skill_effects}
*Difficulty* : ${res.skill.difficulty}
 
*Movement Speed* : ${res.attributes.movement_speed}
*Physical Attack* : ${res.attributes.physical_attack}
*Magic Defense* : ${res.attributes.magic_defense}
*Ability Crit Rate* : ${res.attributes.ability_crit_rate}
*HP* : ${res.attributes.hp}
*Mana* : ${res.attributes.mana}
*Mana Regen* : ${res.attributes.mana_regen}

*Story* : ${res.background_story}`
reply(her)
break
case 'gimage':
case 'googleimage':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length < 1) return reply('Apa Yang Mau Dicari?')
sticWait(from)
teks = args.join(' ')
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_')}
else {
var gugIm = result
var random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, caption: `*Hasil Pencarian Dari :* ${teks}`})
}
}
break
				case 'google':
case 'googlesearch':
case 'ggs':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length < 1) return reply('Yang mau di cari apaan?')
teks = args.join(' ')
sticWait(from)
res = await ggs({'query' : `${teks}`})
kant = ``
for (let i of res) {
kant += `*Judul* : ${i.title}
*Link* : ${i.link}
*Keterangan* : ${i.snippet}`
}
var akhir = kant.trim()
reply(akhir)
break
case 'wiki':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length < 1) return reply(' Yang Mau Di Cari Apa? ')
teks = args.join(' ')
res = await wikiSearch(teks).catch(e => {
return reply('_[ ! ] Error Hasil Tidak Ditemukan_') 
}) 
result = `*Judul :* ${res[0].judul}
*Wiki :* ${res[0].wiki}`
sendFileFromUrl(res[0].thumb, image, {quoted: mek, caption: result}).catch(e => {
  reply(result)
})
break
case 'mediafire':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length < 1) return reply('Link Nya Mana? ')
if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.api)
if (Number(filesize) >= 30000) return reply(`*「 MEDIAFIRE DOWNLOAD 」*

*📝 Nama :* ${res[0].nama}
*📝 Ukuran :* ${res[0].size}
*📝 Link :* ${res[0].link}

_Maaf size melebihi batas maksimal, Silahkan klik link diatas_`)
sticWait(from)
teks = args.join(' ')
res = await mediafireDl(teks)
result = `*「 MEDIAFIRE DOWNLOAD 」*

*Data Berhasil Didapatkan!*
\`\`\`📝 Nama : ${res[0].nama}\`\`\`
\`\`\`📝 Ukuran : ${res[0].size}\`\`\`
\`\`\`📝 Link : ${res[0].link}\`\`\`

_File sedang dikirim, Silahkan tunggu beberapa menit_`
reply(result)
sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: mek})
break
				case 'kalkulator':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
				 var mtk = body.slice(12)
				 teks = `${mtk} = ${Math_js.evaluate(mtk)}`
				 reply(teks)
				 break
				case 'translate':
				case 'ts':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					try{
					if ( args.length === 1 ){
						tekss = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
						translate(tekss, {client: 'gtx', to:args[0]})
						.then((res) =>{
							reply(res.text)
							}) 
						} else
			if(args.length > 0 ) {
				ngab = args.join(' ')
			teks = ngab.split(' ')[0];
			bhs = ngab.split(' ')[1];
			  translate(teks, {client: 'gtx', to:bhs})
			  .then((res) =>{
				  reply(res.text)
				  })
				}
			} catch (e){
				reply(mess.error.api)
			}
				  break
				case 'dadu':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
			random = Math.floor(Math.random() * 6) + 1
		damdu = fs.readFileSync(`./sticker/${random}.webp`)
			vinzbot.sendMessage(from, damdu, sticker, {quoted: mek})
			break
				case 'robot':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
encmedial = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
medial = await vinzbot.downloadAndSaveMediaMessage(encmedial)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${medial} -filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(medial)
if (err) return reply(mess.error.api)
hah = fs.readFileSync(ran)
vinzbot.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break
case 'gemuk':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					encmediaz = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediaz = await vinzbot.downloadAndSaveMediaMessage(encmediaz)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${mediaz} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(mediaz)
						if (err) return ephe('Error!')
						hah = fs.readFileSync(ran)
					vinzbot.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, duration: 359996400, quoted:mek})
						fs.unlinkSync(ran)
					})
					break
case 'balik':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
	encmediau = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	mediau = await vinzbot.downloadAndSaveMediaMessage(encmediau)
	ran = getRandom('.mp3')
	exec(`ffmpeg -i ${mediau} -filter_complex "areverse" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(mediau)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
vinzbot.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, duration: 359996400, quoted:mek})
fs.unlinkSync(ran)
	})
break
case 'bass':                 
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					encmediao = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediao = await vinzbot.downloadAndSaveMediaMessage(encmediao)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${mediao} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(mediao)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						vinzbot.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, duration: 359996400, quoted:mek})
						fs.unlinkSync(ran)
					})
				break
case 'sider':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
infom = await vinzbot.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
tagg = []
teks = `Telah Dibaca Oleh :\n\n`
for(let i of infom.reads){
teks += '@' + i.jid.split('@')[0] + '\n'
teks += `Waktu : ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
tagg.push(i.jid)
}
mentions(teks, tagg, true)
break
case 'tospam':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length > 10) {
teks = body.slice(8)
oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
if (Number(oi2) >= 50) return reply('Kebanyakan!')
if (!Number(oi2)) return reply('Jumlah harus berupa angka!')
	  for (let i = 0; i < oi2; i++) {
	  vinzbot.sendMessage(from, `${oi1}`, MessageType.text)
	  }
} else if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length < 10) {
teks = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  vinzbot.sendMessage(from, teks, MessageType.text)
	  }
} else if (isQuotedSticker) {
	encmedian = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	         median = await vinzbot.downloadAndSaveMediaMessage(encmedian)
				anu = fs.readFileSync(median)
	if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
	if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  vinzbot.sendMessage(from, anu, sticker)
	  }
} else if (isQuotedAudio) {
	encmediat = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	            mediat = await vinzbot.downloadAndSaveMediaMessage(encmediat)
				anu = fs.readFileSync(mediat)
	if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
	if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  vinzbot.sendMessage(from, anu, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt:true})
	  }
} else if (isQuotedImage) {
	boij = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
	delb = await vinzbot.downloadMediaMessage(boij)
	teks = body.slice(6)
	oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
if (Number(oi2) >= 50) return reply('Kebanyakan!')
	if (!Number(oi2)) return reply('Jumlah harus berupa angka!')
	  for (let i = 0; i < oi2; i++) {
	  vinzbot.sendMessage(from, delb, MessageType.image, {caption: oi1})
	  }
}
				case 'colong':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
		if (!isQuotedSticker) return reply(`Reply sticker dengan caption *${prefix}colong*`)
		const encmediia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	        const meidia = await vinzbot.downloadAndSaveMediaMessage(encmediia, `./sticker/${sender}`)
		    exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
		    if (error) return reply('error')
		    vinzbot.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), MessageType.sticker, {quoted: mek})
					fs.unlinkSync(meidia)
					fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
				})
				break
				case 'tagall':
if (!isGroup) return reply(mess.only.group)
              if (!isGroupAdmins) return reply(mess.only.admin)
              let arr = [];
              let txti = `*[ TAG ALL ]*\n\n${q ? q : ''}\n\n`
              for (let i of groupMembers){
              txti += `=> @${i.jid.split("@")[0]}\n`
              arr.push(i.jid)
}
              mentions(txti, arr, true)
              break
				case 'readmore':
			    	case 'more':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
			    	const more = String.fromCharCode(8206)
			    	const readmore = more.repeat(4001)
				    if (!c.includes('|')) return  reply(mess.error.api)
                    const text1 = c.substring(0, c.indexOf('|') - 0)
                    const text2 = c.substring(c.lastIndexOf('|') + 1)
                    reply( text1 + readmore + text2)
                    break
                    case 'delchat':
                    if (!isOwner && !mek.key.fromMe) return sticOwner(from)
                reply('Sukses menghapus chat' + from)
                await sleep(4000)
                vinzbot.modifyChat(from, ChatModification.delete)
                break
				case 'clearall':
				if (!isOwner && !mek.key.fromMe) return sticOwner(from)
					anu = await vinzbot.chats.all()
					vinzbot.setMaxListeners(10)
					for (let _ of anu) {
						vinzbot.clearMessage(_.jid)
					}
					reply('Sukses membersihkan semua pesan')
					break
					case 'mute':
			    if (!isOwner && !mek.key.fromMe) return sticOwner(from)
			    if (!isGroup) return reply(mess.only.group)
                if (isMuted) return reply(`udah mute`)
                mute.push(from)
                fs.writeFileSync('./database/mute.json', JSON.stringify(mute))
                reply('Bot berhasil dimute di chat ini')
                break
					case 'restart':
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
reply(`_Restarting 𝑨𝑹𝑪𝑬𝑳𝑺 𝑩𝑶𝑻_`)
exec(`cd &&  node index`)
sleep(4000)
reply('Sukses')
break
				case 'detikvn':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
encmediam = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediam = await vinzbot.downloadAndSaveMediaMessage(encmediam)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(mediam)
						vinzbot.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: cokmatane, ptt: true, quoted:mek})
						fs.unlinkSync(mediam)
				break
				case 'detikvideo':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
				encmedian = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					median = await vinzbot.downloadAndSaveMediaMessage(encmedian)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(median)
						vinzbot.sendMessage(from, hah, video, {mimetype: 'video/mp4', duration: cokmatane, quoted: mek})
						fs.unlinkSync(median)
				break
				case "antivirtex":
        	if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
	        if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return sticAdmin(from)
			if (!isBotGroupAdmins) return sticNotAdmin(from)
					if (args[0] === 'on') {
						if (isAntivirtex) return reply('Sudah Aktif Kak')
						antilink.push(from)
						fs.writeFileSync('./database/antivirtex.json', JSON.stringify(antilink))
						reply('Sukses mengaktifkan fitur antivirtex')
						vinzbot.sendMessage(from, `ALLERT!!! Group ini sudah di pasang antivirtex\nJika Kamu Melanggar Maka Akan Saya Tendang`, text)
					} else if (args[0] === 'off') {
						if (!isAntivirtex) return reply('Sudah Mati Kak')
						var ini = antivirtex.indexOf(from)
						antivirtex.splice(ini, 1)
						fs.writeFileSync('./database/antivirtex.json', JSON.stringify(antilink))
						reply('Sukses menonaktifkan fitur antivirtex')
					} else if (!c){
 anu =`Silahkan pilih salah satu\n\non: untuk mengaktifkan\noff: untuk menonaktifkan`
punten = [{buttonId: 'antivirtex off', buttonText: {displayText: 'OFF✖️'}, type: 1},{buttonId: 'antivirtex on', buttonText: {displayText: 'ON✔️'}, type: 1}]
const btnasu = {
    contentText: `${anu}`,
    footerText: '*_©𝑨𝑹𝑪𝑬𝑳𝑺 𝑩𝑶𝑻_*',
    buttons: punten,
    headerType: 1
}
await vinzbot.sendMessage(from, btnasu, MessageType.buttonsMessage, {quoted: ftrol})
					}
					break
				case 'antiwame':
				if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
	        if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return sticAdmin(from)
			if (!isBotGroupAdmins) return sticNotAdmin(from)
					if (args[0] === 'on') {
						if (isAntiWame) return reply('Sudah Aktif Kak')
						antilink.push(from)
						fs.writeFileSync('./database/antiwame.json', JSON.stringify(antilink))
						reply('Sukses mengaktifkan fitur antiwame')
						vinzbot.sendMessage(from, `ALLERT!!! Group ini sudah di pasang anti wa.me\nJika Kamu Melanggar Maka Akan Saya Tendang`, text)
					} else if (args[0] === 'off') {
						if (!isAntiWame) return reply('Sudah Mati Kak')
						var ini = antilink.indexOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./database/antiwame.json', JSON.stringify(antilink))
						reply('Sukses menonaktifkan fitur antiwame')
					} else if (!c){
 anu =`Silahkan pilih salah satu\n\non: untuk mengaktifkan\noff: untuk menonaktifkan`
punten = [{buttonId: 'antiwame off', buttonText: {displayText: 'OFF✖️'}, type: 1},{buttonId: 'antiwame on', buttonText: {displayText: 'ON✔️'}, type: 1}]
const btnasu = {
    contentText: `${anu}`,
    footerText: '*_©𝑨𝑹𝑪𝑬𝑳𝑺 𝑩𝑶𝑻_*',
    buttons: punten,
    headerType: 1
}
await vinzbot.sendMessage(from, btnasu, MessageType.buttonsMessage, {quoted: ftrol})
					}
					break
				 case 'antilink':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
	        if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return sticAdmin(from)
			if (!isBotGroupAdmins) return sticNotAdmin(from)
					if (args[0] === 'on') {
						if (isAntiLink) return reply('Sudah Aktif Kak')
						antilink.push(from)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('Sukses mengaktifkan fitur antilink')
						vinzbot.sendMessage(from, `ALLERT!!! Group ini sudah di pasang anti link\nJika Kamu Melanggar Maka Akan Saya Tendang`, text)
					} else if (args[0] === 'off') {
						if (!isAntiLink) return reply('Sudah Mati Kak')
						var ini = antilink.indexOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('Sukses menonaktifkan fitur antilink')
					} else if (!c){
 anu =`Silahkan pilih salah satu\n\non: untuk mengaktifkan\noff: untuk menonaktifkan`
punten = [{buttonId: 'antilink off', buttonText: {displayText: 'OFF✖️'}, type: 1},{buttonId: 'antilink on', buttonText: {displayText: 'ON✔️'}, type: 1}]
const btnasu = {
    contentText: `${anu}`,
    footerText: '*_©𝑨𝑹𝑪𝑬𝑳𝑺 𝑩𝑶𝑻_*',
    buttons: punten,
    headerType: 1
}
await vinzbot.sendMessage(from, btnasu, MessageType.buttonsMessage, {quoted: ftrol})
					}
					break
					case 'antibug':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
          if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return sticAdmin(from)
			if (!isBotGroupAdmins) return sticNotAdmin(from)
          if (args[0] === 'on') {
          if (bugc === true) return
          bugc = true
          reply('Berhasil menyalakan antibug')
          } else if (args[0] === 'off') {
          if (bugc === false) return
          bugc = false
          reply('Berhasil mematikan antibug')
          } else if (!c){
 anu =`Silahkan pilih salah satu\n\non: untuk mengaktifkan\noff: untuk menonaktifkan`
punten = [{buttonId: 'antibug off', buttonText: {displayText: 'OFF✖️'}, type: 1},{buttonId: 'antibug on', buttonText: {displayText: 'ON✔️'}, type: 1}]
const btasu = {
    contentText: `${anu}`,
    footerText: '*_©𝑨𝑹𝑪𝑬𝑳𝑺 𝑩𝑶𝑻_*',
    buttons: punten,
    headerType: 1
}
await vinzbot.sendMessage(from, btasu, MessageType.buttonsMessage, {quoted: ftrol})
					}
          break
				case 'tinyurl':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
try {
link = args[0]
anu = await axios.get(`https://tinyurl.com/api-create.php?url=${link}`)
reply(`${anu.data}`)
} catch (e) {
emror = String(e)
reply(`${e}`)
}
break
case 'sharelock':
 if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
kntl = `${args.join(' ')}`
nama = kntl.split("|")[0];
impostor = kntl.split("|")[1];
vinzbot.sendMessage(from, {
name: nama,
address: impostor,
jpegThumbnail: ofrply}, MessageType.liveLocation, {quoted:floc})
break
case 'tts':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					  try{
        if (args.length > 1) {
        const gtts = require('./lib/gtts')(args[0])
        if (args.length < 2) return vinzbot.sendMessage(from, 'Textnya mana gan?', text, {quoted: mek})
        ngab = budy.slice(7)
        ranm = getRandom('.mp3')
        rano = getRandom('.ogg')
        ngab.length > 600
        ? reply('Textnya kebanyakan gan')
        : gtts.save(ranm, ngab, function() {
            exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
                fs.unlinkSync(ranm)
                buff = fs.readFileSync(rano)
                if (err) return reply('Gagal gan:(')
                vinzbot.sendMessage(from, buff, audio, {quoted:mek,ptt:true})
                fs.unlinkSync(rano)
            })
        })
	} else if ( args.length === 1 ){
		ngab = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
		const gtts = require('./lib/gtts')(args[0])
        ranm = getRandom('.mp3')
        rano = getRandom('.ogg')
        gtts.save(ranm, ngab, function() {
            exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
                fs.unlinkSync(ranm)
                buff = fs.readFileSync(rano)
                if (err) return reply(mess.error.api)
                vinzbot.sendMessage(from, buff, audio, {quoted:mek,ptt:true})
                fs.unlinkSync(rano)
            })
        })
	}
} catch (e){
	reply(mess.error.api)
}
break 
				case 'demote':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
				if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins) return sticAdmin(from)
                   if (!isBotGroupAdmins) return sticNotAdmin(from)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply targetnya!')
			demote = mek.message.extendedTextMessage.contextInfo.participant
		    vinzbot.groupDemoteAdmin(from, [demote])
						reply('Sukses demote admin')
						break
					case 'promote':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return sticAdmin(from)
                   if (!isBotGroupAdmins) return sticNotAdmin(from)
				  if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply targetnya!')
			promote = mek.message.extendedTextMessage.contextInfo.participant
		    vinzbot.groupMakeAdmin(from, [promote])
						reply('Sukses promote member')
						break
				case 'linkgrup':
				case 'linkgroup':
				case 'linkgc':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
				if (!isGroup) return reply(mess.only.group)
                   if (!isBotGroupAdmins) return sticNotAdmin(from)
					linkgc = await vinzbot.groupInviteCode(from)
					yeh = `https://chat.whatsapp.com/${linkgc}\n\nLink grup ${groupName}`
					vinzbot.sendMessage(from, yeh, text, { quoted: mek })
					break
					case 'resetlinkgc':
         case 'resetlinkgroup':
         case 'revoke':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
         if (!isGroup) return reply(mess.only.group)
         if (!isGroupAdmins) return sticAdmin(from)
                   if (!isBotGroupAdmins) return sticNotAdmin(from)
          json = ['action', 'inviteReset', from]
         vinzbot.query({json, expect200: true})
          reply('Sukses Mereset Link Group')
         break
case 'gc': case 'group':
buttonss = [{buttonId: `open`, buttonText: {displayText: 'OPEN'}, type: 1},{buttonId: `close`, buttonText: {displayText: 'CLOSE'}, type: 1}]
const bMess = {
    contentText: 'OPEN/CLOSE\n\nGroup',
    footerText: 'Silahkan Pilih Saah Satu',
    buttons: buttonss,
    headerType: 1
}
await vinzbot.sendMessage(from, bMess, MessageType.buttonsMessage, {quoted: ftrol})
break
					case 'open':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return sticAdmin(from)
                   if (!isBotGroupAdmins) return sticNotAdmin(from)
                   reply(`*OPEN GASS ORDERR KUYY*👊`)
						vinzbot.groupSettingChange(from, GroupSettingChange.messageSend, false)
						break
						case 'close':
						if (!isGroup) return reply(mess.only.group)
						if (!isGroupAdmins) return sticAdmin(from)
                   if (!isBotGroupAdmins) return sticNotAdmin(from)
						reply(`*Close Order, Alhamdulillah Terimakasih yang sudah order semoga Rezeki nya di limpahkan.* *Aamiin...*🤲`)
						vinzbot.groupSettingChange(from, GroupSettingChange.messageSend, true)
					break
				case 'spam':
				if (!isOwner && !mek.key.fromMe) return sticOwner(from)
					if (!arg) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				argzi = arg.split("|")
				if (!argzi) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				if (Number(argzi[1]) >= 50) return reply('Kebanyakan!')
				if (isNaN(argzi[1])) return reply(`harus berupa angka`)
				for (let i = 0; i < argzi[1]; i++){
					vinzbot.sendMessage(from, argzi[0], MessageType.text)
				}
				break
				case 'demoteall':
		if (!isOwner && !mek.key.fromMe) return sticOwner(from)
		if (!isGroup) return reply(mess.only.group)
		if (!isBotGroupAdmins) return sticNotAdmin(from)
                members_id = []
		for (let mem of groupMembers) {
	   	members_id.push(mem.jid)
	  	}
                vinzbot.groupDemoteAdmin(from, members_id)
                break
                case 'promoteall':
		if (!isOwner && !mek.key.fromMe) return sticOwner(from)
		if (!isGroup) return reply(mess.only.group)
		if (!isBotGroupAdmins) return sticNotAdmin(from)
                members_id = []
		for (let mem of groupMembers) {
	   	members_id.push(mem.jid)
	  	}
                vinzbot.groupMakeAdmin(from, members_id)
                break
				case 'setnamegc':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return sticAdmin(from)
              if (!isBotGroupAdmins) return sticNotAdmin(from)
					vinzbot.groupUpdateSubject(from, `${body.slice(11)}`)
					reply(`Sukses mengganti nama grup ke ${body.slice(11)}`)
					break					
				case 'setdeskgc':
				case 'setdescgc':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return sticAdmin(from)
                   if (!isBotGroupAdmins) return sticNotAdmin(from)
					vinzbot.groupUpdateDescription(from, `${body.slice(10)}`)
					reply(`Sukses mengganti deskripsi grup ke ${body.slice(10)}`)
					break
				case 'setprofile':
				case 'setpp':
				vinzbot.updatePresence(from, Presence.composing)
				if (!isQuotedImage) return reply('Reply imagenya!')
					if (!isOwner && !mek.key.fromMe) return sticOwner(from)
					enmediau = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediau = await vinzbot.downloadAndSaveMediaMessage(enmediau)
					await vinzbot.updateProfilePicture(botNumber, mediau)
					reply('Sukses')
					break
				case 'leave':
				if (!isGroup) return reply(mess.only.group)
				if (!isOwner && !mek.key.fromMe) return sticOwner(from)
				vinzbot.updatePresence(from, Presence.composing)
				vinzbot.groupLeave(from)
						break
				case 'bc':
					vinzbot.updatePresence(from, Presence.composing)
					if (!isOwner && !mek.key.fromMe) return sticOwner(from)
					if (args.length < 1) return reply('Teksnya?')
					anu = await vinzbot.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await vinzbot.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							vinzbot.sendMessage(_.jid, buff, image, { viewOnce:true, caption: `${body.slice(4)}`})
						}
						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
						} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await vinzbot.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							vinzbot.sendMessage(_.jid, buff, video, { viewOnce:true, caption: `${body.slice(4)}`})
						}
						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
						} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await vinzbot.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							vinzbot.sendMessage(_.jid, buff, video, { mimetype: Mimetype.gif, quoted: finv, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: `${body.slice(4)}` })
						}
						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
					} else {
						for (let _ of anu) {
							//sendMess(_.jid, `${body.slice(4)}`)
buttons = [{buttonId: `menu`, buttonText: {displayText: 'MENU'}, type: 1},{buttonId: `owner`, buttonText: {displayText: 'OWNER'}, type: 1}]
const btnbc = {
    contentText: `${body.slice(4)}`,
    footerText: '*_BROADCAST_*',
    buttons: buttons,
    headerType: 1
}
await vinzbot.sendMessage(_.jid, btnbc, MessageType.buttonsMessage, {quoted: ftrol})
						}
						reply(`Sukses mengirim Broadcast:\n${body.slice(4)}`)
					}
					break
					case 'spamsw':
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
if (!arg) return reply(`Penggunaan ${prefix}spamsw teks|jumlah`)
				argzi = arg.split("|")
				if (!argzi) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				if (Number(argzi[1]) >= 50) return reply('Kebanyakan!')
				if (isNaN(argzi[1])) return reply(`harus berupa angka`)
				for (let i = 0; i < argzi[1]; i++){
					vinzbot.sendMessage('status@broadcast', argzi[0], MessageType.text)
                    }
                    break	
				case 'upswteks':
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
if (args.length < 1) return reply('Teksnya?')
                    teks = body.slice(10)
                    vinzbot.sendMessage('status@broadcast', teks, MessageType.text)
                    reply(`Sukses upload status:\n${teks}`)
                    break	
                    case 'upswlokasi':
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
  if (args.length < 1) return reply('Teksnya?')
                    teks = body.slice(12)
                    vinzbot.sendMessage('status@broadcast', {degreesLatitude: 24.121231, degreesLongitude: 55.1121221, name:teks,address:`𝑨𝑹𝑪𝑬𝑳𝑺 𝑩𝑶𝑻`}, MessageType.location)
                    reply(`Sukses upload lokasi:\n${teks}`)
                    break	
                    case 'upswsticker':
                    if (!isOwner && !mek.key.fromMe) return sticOwner(from)
if (!isQuotedSticker) return reply('Reply stikernya!')
if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await vinzbot.downloadMediaMessage(encmedia)
						vinzbot.sendMessage('status@broadcast', buff, sticker)
						}
						reply(`Sukses upload sticker`)
                    break
                     case 'upswaudio':
                    if (!isOwner && !mek.key.fromMe) return sticOwner(from)
if (!isQuotedAudio) return reply('Reply audionya!')
if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await vinzbot.downloadMediaMessage(encmedia)
						vinzbot.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400})
						}
						reply(`Sukses upload audio`)
						break
						case 'upswvoice':
                    if (!isOwner && !mek.key.fromMe) return sticOwner(from)
if (!isQuotedAudio) return reply('Reply audionya!')
if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await vinzbot.downloadMediaMessage(encmedia)
						vinzbot.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt: true})
						}
						reply(`Sukses upload voice`)
						break
case 'upswvideo':
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
                    var konti = body.slice(11)
                    sticWait(from)
                    var enmediap = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					var mediap = await vinzbot.downloadAndSaveMediaMessage(enmediap)
                    const buffer3 = fs.readFileSync(mediap)
                    vinzbot.sendMessage('status@broadcast', buffer3, MessageType.video, {duration: 359996400, caption: `${konti}`})
                    reply(`Sukses upload video:\n${konti}`)
                        break
                           case 'upswgif':
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
                    var konti = body.slice(7)
                    sticWait(from)
                    enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await vinzbot.downloadAndSaveMediaMessage(enmedia)
                    const buffer6 = fs.readFileSync(media)
                    vinzbot.sendMessage('status@broadcast', buffer6, MessageType.video, {mimetype : 'video/gif', caption: `${konti}`})
                    reply(`Sukses upload gif:\n${konti}`)
                        break
                        case 'upswimage':
                        if (!isOwner && !mek.key.fromMe) return sticOwner(from)
                    var teksyy = body.slice(11)
                    sticWait(from)
                    enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await vinzbot.downloadAndSaveMediaMessage(enmedia)
                    buffer = fs.readFileSync(media)
                    vinzbot.sendMessage('status@broadcast', buffer, MessageType.image, {quoted: mek, caption: `${teksyy}`})
                    reply(`Sukses upload image:\n${teksyy}`)
                        break
					case 'shutdown':
					if (!isOwner && !mek.key.fromMe) return sticOwner(from)
				return vinzbot.sendMessage(from, JSON.stringify(eval(process.exit())))
				reply('Okey')
				break
				case 'tomp4':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					if (!isQuotedSticker) return reply('Reply stiker nya')
                                        sticWait(from)
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            owgi = await vinzbot.downloadAndSaveMediaMessage(ger)
            webp2mp4File(owgi).then(res=>{
            sendMediaURL(from,res.result)
            })
            }else {
            reply('Reply Stickernya!')
            }
            fs.unlinkSync(owgi)
            break
            case 'tomp3':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					vinzbot.updatePresence(from, Presence.composing)
					if (!isQuotedVideo) return reply('Reply Video Nya Kak')
					sticWait(from)
					encmediad = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					mediad = await vinzbot.downloadAndSaveMediaMessage(encmediad)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${mediad} ${ran}`, (err) => {
						fs.unlinkSync(mediad)
						if (err) return reply(mess.error.api)
						mhee = fs.readFileSync(ran)
						vinzbot.sendMessage(from, mhee, audio, { mimetype: 'audio/mp4', duration: 359996400, quoted: mek })
						fs.unlinkSync(ran)
					})
					break
				case 'suit':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
  if (args.length < 1) return reply('Pilih gunting/batu/kertas')
					if (args[0] === 'gunting' ) {
					  gunting = [
					    "Kamu *Gunting*\nAku *Kertas*\nKamu Menang 😔",
					    "Kamu *Gunting*\nAku *Batu*\nKamu Kalah 🙂",
					    "Kamu *Gunting*\nAku *Gunting*\nKita Seri 😏"
					    ]
					  gun = gunting[Math.floor(Math.random() * gunting.length)]
					  reply(gun)
					} else if (args[0] === 'kertas') {
					  ker = [
					    "Kamu *Kertas*\nAku *Batu*\nKamu Menang 😔",
					    "Kamu *Kertas*\nAku *Gunting*\nKamu Kalah 🙂",
					    "Kamu *Kertas*\nAku *Kertas*\nKita Seri 😏"
					    ]
					  kertas = ker[Math.floor(Math.random() * ker.length)]
						reply(kertas)
					} else if (args[0] === 'batu') {
					  bat = [
					    "Kamu *Batu*\nAku *Gunting*\nKamu Menang ??",
					    "Kamu *Batu*\nAku *Kertas*\nKamu Kalah 🙂",
					    "Kamu *Batu*\nAku *Batu*\nKita Seri 😏"
					    ]
					  batu = bat[Math.floor(Math.random() * bat.length)]
					  reply(batu)
					} else {
					  reply('Pilih gunting/batu/kertas')
					}
break
		    case 'slot':
            case 'slots':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
            const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
            vinzbot.sendMessage(from, `[  🎰 | SLOTS ]\n-----------------\n🍋 : 🍌 : 🍍\n${somtoy}<=====\n🍋 : 🍌 : 🍍\n[  🎰 | SLOTS ]\n\nKeterangan : Jika anda Mendapatkan 3Buah Sama Berarti Anda Menang\n\nContoh : 🍌 : 🍌 : 🍌<=====`, MessageType.text, { quoted: mek })
            break
				case 'kontak':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
				if (!isGroup) return reply(mess.only.group)
					argzu = arg.split('|')
				if (!argzu) return reply(`Penggunaan ${prefix}kontak @tag|nama`)
				if (mek.message.extendedTextMessage != undefined){
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					sendKontak(from, mentioned[0].split('@')[0], argzu[1])
				} else {
					sendKontak(from, argzu[0], argzu[1])
				}
				break
				case 'kontag':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
				if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins) return sticAdmin(from)
                argzi = arg.split('|')
				if (!argzi) return reply(`Penggunaan ${prefix}kontak @tag|nama`)
				if (mek.message.extendedTextMessage != undefined){
                    		mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					hideTagKontak(from, mentioned[0].split('@')[0], argzi[1])
				} else {
					hideTagKontak(from, argzi[0], argzi[1])
				}
				break
				case 'getdeskgc':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
				if (!isGroup) return reply(mess.only.group)
					anu = from
			   metadete = await vinzbot.groupMetadata(anu)
				vinzbot.sendMessage(from, metadete.desc, text, {quoted:mek})
				  break
					case 'getbio':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
	  var yy = mek.message.extendedTextMessage.contextInfo.participant
var p = await vinzbot.getStatus(`${yy}`, MessageType.text)
reply(p.status)
if (p.status == 401) {
reply(mess.error.api)
}
break
                    case 'getname':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
        var ambl = mek.message.extendedTextMessage.contextInfo.participant
const sname = vinzbot.contacts[ambl] != undefined ? vinzbot.contacts[ambl].notify = undefined ? PhoneNumber('+' + ambl.replace('@s.whatsapp.net', '')).getNumber('international') : vinzbot.contacts[ambl].notify || vinzbot.contacts[ambl].vname : PhoneNumber('+' + ambl.replace('@s.whatsapp.net', '')).getNumber('international')
reply(sname)
break
				case 'getpict':
				case 'getpic':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					if (!isGroup) return reply(mess.only.group)
            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
            pictt = await vinzbot.getProfilePicture(mentioned)
            pict = await getBuffer(pictt)
            vinzbot.sendMessage(from, pict, image, {quoted: mek})
            break
				case 'chat':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
			if (args[0].startsWith('08')) return reply('Awali nomor dengan 62')
            if (args[0].startsWith('+62')) return reply('Awali nomor dengan 62')
			if (args.length < 1) return reply(`Penggunaan ${prefix}chat 62xnxx|teks`)
            var pc = body.slice(6)
            var nomor = pc.split("|")[0];
            var org = pc.split("|")[1];
            vinzbot.sendMessage(nomor+'@s.whatsapp.net', org, MessageType.text)   
            reply(`Sukses mengirim chat:\n${org},@${nomor}`)
            break
				case 'attp':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					if (!c) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}attp 𝑨𝑹𝑪𝑬𝑳𝑺 𝑩𝑶𝑻`)
					atetepe = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(c)}`)
					vinzbot.sendMessage(from, atetepe, sticker, { quoted: mek })
					break
                case 'ttp':  
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
                    if (!c) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}attp 𝑨𝑹𝑪𝑬𝑳𝑺 𝑩𝑶𝑻`)
                    anu1 = await getBuffer(`https://api.xteam.xyz/ttp?file&text=${c}`)
                    vinzbot.sendMessage(from, anu1, image, {quoted: mek, caption : `${prefix}sticker`})
                    break
				case 'semoji':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
			if (args === 0) return reply('emojinya?')   
		   aku4 = args.join(' ')
           emoji.get(`${aku4}`).then(emoji => {
           link = `${emoji.images[10].url}`
		   sendWebp(from, `${link}`).catch(() => reply('gagal'))
           })
    	   break
				case 'tag':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
			if (args.length < 1) return reply(`Penggunaan ${prefix}tag 62xnxx`)
            var nomqm = `${body.slice(5)}@s.whatsapp.net`
					tagq = `@${nomqm.split('@')[0]}` 
					vinzbot.sendMessage(from, tagq, text, { quoted: ftrol, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [nomqm]}})
			break
			case 'tagme':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
                  var nomqm = mek.participant
				    tagu = `@${nomqm.split('@s.whatsapp.net')[0]}`
					vinzbot.sendMessage(from, tagu, text, { quoted: ftrol, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [nomqm]}})
					break
				case 'join': 
              reply('PUNYA TANGAN KAN MANUAL LAH GOBLOK')
              break
				case 'totag':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
			if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return sticAdmin(from)
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmediau = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await vinzbot.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await vinzbot.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            vinzbot.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmediau = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await vinzbot.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await vinzbot.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            vinzbot.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmediau = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await vinzbot.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await vinzbot.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'audio/mp4', duration: 359996400,
                ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            vinzbot.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
         } else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await vinzbot.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await vinzbot.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/gif',
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            vinzbot.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedDocument) && args.length == 0) {
            encmediau = isQuotedDocument ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await vinzbot.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await vinzbot.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'text/plain',
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            vinzbot.sendMessage(from, ini_buffer, document, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await vinzbot.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await vinzbot.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/mp4', duration: 359996400,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            vinzbot.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`reply gambar/dokumen/gif/sticker/audio/video dengan caption ${prefix}totag`)
        }
        break
				case 'status':
case 'stats':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
				var groups = vinzbot.chats.array.filter(v => v.jid.endsWith('g.us'))
				var privat = vinzbot.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
				var ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
					uptime = process.uptime();
					const timestampu = speed();
					const totalChat = await vinzbot.chats.all()
					const latensi = speed() - timestampu
					var total = math(`${groups.length} ${privat.length}`)
					const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = vinzbot.user.phone
					stamtus = `⍟ ────────────────── ⍟

Private Chat : ${privat.length}
Group Chat : ${groups.length}
Total Chat : ${totalChat.length}
Speed : ${latensi.toFixed(4)} second
Runtime : ${kyun(uptime)}
Baterai : ${baterai.battery}
Charged : ${baterai.isCharge}
Mode : ${publik ? 'public' : 'self'}
Prefix : ${multi ? 'Multi Prefix' : 'No Prefix'}
Penggunaan Ram : ${ram2}
Hostname : ${os.hostname()}
Platform : ${os.platform()}
Uptime : ${kyun(os.uptime())}
MNC : ${mnc}
MCC : ${mcc}
Device Model: ${vinzbot.user.phone.device_model}
Device Manufactur : ${device_manufacturer}
Wa Version: ${vinzbot.user.phone.wa_version}
Os Version: ${vinzbot.user.phone.os_version}

⍟ ────────────────── ⍟`
reply(stamtus)
break
				case 'tobc':
				if (!isOwner && !mek.key.fromMe) return sticOwner(from)
				vinzbot.updatePresence(from, Presence.composing)
					anu = await vinzbot.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await vinzbot.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							vinzbot.sendMessage(_.jid, buff, audio, { quoted: ftrol })
						}
						} else if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await vinzbot.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							vinzbot.sendMessage(_.jid, buff, sticker, { quoted: ftrol, contextInfo: { forwardingScore: 508, isForwarded: true}})
							}
							} else{
          reply('reply sticker/audio')
							}
					break
					case 'fdeface':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
var nn = body.slice(9)
                                var urlnye = nn.split("|")[0];
                                var titlenye = nn.split("|")[1];
                                var descnye = nn.split("|")[2];
                                imgbbb = require('imgbb-uploader')
                                run = getRandom('.jpeg')
                                encmediad = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                                mediad = await vinzbot.downloadAndSaveMediaMessage(encmediad)
                                ddatae = await imageToBase64(JSON.stringify(mediad).replace(/\"/gi, ''))
                                vinzbot.sendMessage(from, {
                                        text: `${urlnye}`,
                                        matchedText: `${urlnye}`,
                                        canonicalUrl: `${urlnye}`,
                                        description: `${descnye}`,
                                        title: `${titlenye}`,
                                        jpegThumbnail: ddatae
                                }, 'extendedTextMessage', { detectLinks: false })
                                break
                                break
					case 'online':
            if (!isOwner && !mek.key.fromMe) return sticOwner(from)
				offline = false
				reply('Status : ONLINE')
				break
			case 'offline':
			if (!isOwner && !mek.key.fromMe) return sticOwner(from)
				offline = true
                waktuafk = Date.now()
                anuu = body.slice(9) ? body.slice(9) : '-'
                alasanafk = anuu
				reply('Fitur OFFLINE diaktifkan')
				break
           case 'fitnahpc':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
                if (args.length < 1) return reply(`Usage :\n${prefix}fitnahpc [nomor|pesan|balasanbot]]\n\nEx : \n${prefix}fitnahpc 0|hai|hai juga markenlin`)
                var gh = body.slice(10)
                var parti = gh.split("|")[0];
                var targetq = gh.split("|")[1];
				var bot = gh.split("|")[2];
			    vinzbot.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${parti}@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { conversation: `${targetq}` }}})
					break
            case 'hidetag':
            case 'h':
            if (!isOwner && !mek.key.fromMe) return sticOwner(from)
            ht = body.slice(9)
                members_id = []
				for (let mem of groupMembers) {
					members_id.push(mem.jid)
				}
                mentions(ht, members_id, false)
                break
            case 'fitnah':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
            if (!isGroup) return reply(mess.only.group)
                cr = body.slice(4)
                cs = cr.split('|')
                taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                const target = {
					contextInfo: {
						participant: taged,
						quotedMessage: {
							extendedTextMessage: {
								text: cs[1]
							}
						}
					}
				}
				vinzbot.sendMessage(from, cs[2], MessageType.text, target)
				break
                case 'ytmp4':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
						if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp4 [linkYt]*`)
						let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
						if (!isLinks2) return reply(mess.error.Iv)
						try {
							sticWait(from)
							ytv(args[0])
							.then((res) => {
								const { dl_link, thumb, title, filesizeF, filesize } = res
								axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
								.then((a) => {
								if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `❏ *YTmp4*\n\n❏ *Title* : ${title}\n❏ *Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Maaf durasi melebihi batas maksimal, Silahkan klik link diatas_`)
								sendFileFromUrl(dl_link, document, {mimetype: 'video/mp4', filename: `${title}.mp4`, quoted: ftrol, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title:title,body:"YTMP4",mediaType:"2",thumbnail:getBuffer(thumb),sourceUrl:`${body.slice(7)}`}}}).catch(() => reply(mess.error.api))
							})
							})
						} catch (err) {
							reply(mess.error.api)
						}
						break
						case 'play':
  if (args.length < 1)return reply(mess.prem)
              if (!q) return reply('Linknya?')
              buttons = [{buttonId: `${prefix}video ${q}`,buttonText:{displayText: `🎥 Video`},type:1},{buttonId:`${prefix}audio ${q}`,buttonText:{displayText:'🎵 Mp3'},type:1}]
              imageMsg = (await vinzbot.prepareMessageMedia(fs.readFileSync(`./sticker/logoyt.jpg`), 'imageMessage', {thumbnail: fs.readFileSync(`./sticker/logoyt.jpg`)})).imageMessage
              buttonsMessage = {footerText:'Jangan Lupa Donasi Ya Kak ☕', imageMessage: imageMsg,
              contentText:`Silahkan Pilih Media Yg Akan Di Download kak`,buttons,headerType:4}
              prep = await vinzbot.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              vinzbot.relayWAMessage(prep)
              break
case 'audio':
                            if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`)
                            const playy = await axios.get(`https://bx-hunter.herokuapp.com/api/yt/search?query=${body.slice(6)}&apikey=${HunterApi}`)
                            const mulaikah = playy.data.result[0].url
                            try {
                                reply(mess.wait)
                                yta(mulaikah)
                                .then((res) => {
                                    const { dl_link, thumb, title, filesizeF, filesize } = res
                                    axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                                    .then(async (a) => {
                                    if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `❏ *PLAYmp3*\n\n❏ *Title* : ${title}\n❏ *Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Maaf durasi melebihi batas maksimal, Silahkan klik link diatas_`)
                                    sendFileFromUrl(dl_link, document, {mimetype: 'audio/mp3', filename: `${title}.mp3`, quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title:title,body:"",mediaType:"2",thumbnail:getBuffer(thumb),mediaUrl:"https://youtu.be/Ejl9sLbgc1A"}}}).catch(() => reply(mess.error.api))
                                    })
                                })
                            } catch (err) {
                                reply(mess.error.api)
                            }
                            break
      case 'video':   
        if (args.length < 1)return reply(mess.prem)
				  if (args.length < 1) return reply('*Masukan judul nya?*')
                reply('Loading.... ')
				acaa = args.join(" ")
				anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/yt/playmp4?query=${acaa}&apikey=Ikyy69`)
				if (anu.error) return reply(anu.error)
				infomp3 = `*「 PLAY VIDEO 」*
				
Judul : ${anu.result.title}
Source : ${anu.result.source}
				
*[Wait] Tunggu Sebentar..*`
				///////buffer = await getBuffer(anu.result.thumbnail)
				buffer1 = await getBuffer(anu.result.url_video)
				vinzbot.sendMessage(from, buffer1, video, {mimetype: 'video/mp4', filename: `${anu.result.video}.mp4`, quoted:mek, caption: 'Nih Gan'})
					break      
						case 'ytsearch':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
            if (!args.length) return reply('Judulnya apa kak?')
            try {
            	sticWait(from)
                const input = args.join(" ")
                const filter1 = await ytsd.getFilters(input)
                const filters1 = filter1.get('Type').get('Video')
                const { items } = await ytsd(filters1.url, { limit: 10 })
                let hehe = `*🌐 YOUTUBE SEARCH*
*⌥ Search Query:* ${input}\n\n`
                for (let i = 0; i < items.length; i++) {
                    hehe += `───────────────\n
*⌥ Judul:* ${items[i].title}
*⌥ Id:* ${items[i].id}
*⌥ Ditonton:* ${items[i].views}
*⌥ Durasi:* ${items[i].duration}
*⌥ Link:* ${items[i].url}\n\n`
                }
                thumb = await getBuffer(items[0].bestThumbnail.url)
                await vinzbot.sendMessage(from, thumb, image, {quoted: ftrol, caption: `${hehe}───────────────\n
*⌥ DOWNLOAD*
⌥ ${prefix}ytmp3 [link yt] = Audio
⌥ ${prefix}ytmp4 [link yt] = Video`, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title:`SEARCH: ${args[0]}`,body:"⌥YOUTUBE SEARCH",mediaType:"2",thumbnail:pporigi,mediaUrl:`https://youtu.be/JN_Gw2GzuqQ`}}})
            } catch(e) {
                reply('Didn\'t find anything or there is any error!')
                reply(`Error: ${e.message}`)
            }
            break
					case 'ytmp3':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
						if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp3 [linkYt]*`)
						let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
						if (!isLinks) return reply(mess.error.Iv)
						try {
							sticWait(from)
							yta(args[0])
							.then((res) => {
								const { dl_link, thumb, title, filesizeF, filesize } = res
								axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
								.then((a) => {
								if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `❏ *YTmp3*\n\n❏ *Title* : ${title}\n❏ *Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Maaf durasi melebihi batas maksimal, Silahkan klik link diatas_`)
								sendFileFromUrl(dl_link, document, {mimetype: 'audio/mp3', filename: `${title}.mp3`, quoted: ftrol, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title:title,body:"⌥ YTMP3",mediaType:"2",thumbnail:getBuffer(thumb),mediaUrl:`${body.slice(7)}`}}}).catch(() => reply(mess.error.api))
							})
					        })
						} catch (err) {
							reply(mess.error.api)
						}
						break
                    case 'exif':
                    if (!isOwner && !mek.key.fromMe) return sticOwner(from)
					const exifff = `${args.join(' ')}`
					const namaPack = exifff.split('|')[0]
					const authorPack = exifff.split('|')[1]
					exif.create(namaPack, authorPack)
					await reply('Done gan')
				break
				case 'sticker':
					case 'stiker':
					case 's':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
						if (isMedia && !mek.message.videoMessage || isQuotedImage) {
							const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await vinzbot.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							await ffmpeg(`${media}`)
									.input(media)
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											vinzbot.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
											fs.unlinkSync(media)	
											fs.unlinkSync(`./sticker/${sender}.webp`)	
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else if ((isMedia && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
							const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await vinzbot.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							sticWait(from)
								await ffmpeg(`${media}`)
									.inputFormat(media.split('.')[4])
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										tipe = media.endsWith('.mp4') ? 'video' : 'gif'
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											vinzbot.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
											fs.unlinkSync(media)
											fs.unlinkSync(`./sticker/${sender}.webp`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else {
							reply(`Kirim gambar/video dengan caption ${prefix}sticker atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
						}
						break
					case 'stickerwm':
					case 'swm':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
						if (isMedia && !mek.message.videoMessage || isQuotedImage) {
							ppp = `${args.join(' ')}`
							const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await vinzbot.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							const packname1 = ppp.split('|')[0]
							const author1 = ppp.split('|')[1]
							exif.create(packname1, author1, `stickwm_${sender}`)
							await ffmpeg(`${media}`)
									.input(media)
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											vinzbot.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
											fs.unlinkSync(media)	
											fs.unlinkSync(`./sticker/${sender}.webp`)	
											fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else if ((isMedia && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
							wmsti = body.slice(11)
							if (!wmsti.includes('|')) return reply(`Kirim gambar atau reply gambar dengan caption *${prefix}stickerwm nama|author*`)
							const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await vinzbot.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							const packname1 = wmsti.split('|')[0]
							const author1 = wmsti.split('|')[1]
							exif.create(packname1, author1, `stickwm_${sender}`)
							sticWait(from)
								await ffmpeg(`${media}`)
									.inputFormat(media.split('.')[4])
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										tipe = media.endsWith('.mp4') ? 'video' : 'gif'
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											vinzbot.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
											fs.unlinkSync(media)
											fs.unlinkSync(`./sticker/${sender}.webp`)
											fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else {
							reply(`Kirim gambar/video dengan caption ${prefix}stickerwm nama|author atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
						}
						break
					case 'takestick':
					case 'take':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
						if (!isQuotedSticker) return reply(`Reply sticker dengan caption *${prefix}takestick nama|author*`)
						ppp = `${args.join(' ')}`
						const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await vinzbot.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
						const packname = ppp.split('|')[0]
						const author = ppp.split('|')[1]
						exif.create(packname, author, `takestick_${sender}`)
						exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
							if (error) return reply(mess.error.api)
							vinzbot.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
							fs.unlinkSync(media)
							fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
						})
						break
			case 'speed':
			case 'ping':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					const timestampi = speed();
					const latensyi = speed() - timestampi
					reply(`Speed: ${latensyi.toFixed(4)} Second`)
					break
				case 'return':
				if (!isOwner) return sticOwner(from)
					return vinzbot.sendMessage(from, JSON.stringify(eval(body.slice(8))), text, {quoted: mek})
					if (err) return vinzbot.sendMessage(from, `root @dcode-denpa:~ ${err}`, text, { quoted: mek })
                 break
                 case 'toimg':
				case 'tomedia':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					if (!isQuotedSticker) return reply('Reply stiker nya')
					if (mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated === true){
						const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await vinzbot.downloadAndSaveMediaMessage(encmedia)
						const upload = await uploadimg(media, Date.now() + '.webp')
						console.log(upload)
						reply(`${upload.result.image}`)
						const rume = await axios.get(`http://nzcha-apii.herokuapp.com/webp-to-mp4?url=${upload.result.image}`)
						console.log(rume.data)
						sendMediaURL(from, rume.data.result)
					} else {
						const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await vinzbot.downloadAndSaveMediaMessage(encmedia)
						ran = '1000.png'
						exec(`ffmpeg -i ${media} ${ran}`, (err) => {
							fs.unlinkSync(media)
							if (err) return reply(mess.error.api)
							buffer = fs.readFileSync(ran)
							vinzbot.sendMessage(from, buffer, image, {quoted: mek})
							fs.unlinkSync(ran)
						})
					}
					break
				case 'addsticker':
				if (!isOwner && !mek.key.fromMe) return sticOwner(from)
					if (!isQuotedSticker) return reply('Reply stiker')
					nm = body.slice(12)
					if (!nm) return reply('Nama sticker nya apa?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await vinzbot.downloadMediaMessage(boij)
					setik.push(`${nm}`)
					fs.writeFileSync(`./media/sticker/${nm}.webp`, delb)
					fs.writeFileSync('./database/setik.json', JSON.stringify(setik))
					vinzbot.sendMessage(from, `Sukses, silahkan cek dengan *${prefix}liststicker*`, MessageType.text, { quoted: mek })
					break
				case 'delsticker':
				if (!isOwner && !mek.key.fromMe) return sticOwner(from)
					try {
					 nmm = body.slice(12)
					 wanu = setik.indexOf(nmm)
					 setik.splice(wanu, 1)
					 fs.unlinkSync(`./media/sticker/${nmm}.webp`)
					 reply(`Sukses menghapus sticker ${body.slice(12)}`)
					} catch (err){
						console.log(err)
						reply(mess.error.api)
					}
					break
				case 'stickerlist':
				case 'liststicker':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					teks = '*Sticker List :*\n\n'
					for (let awokwkwk of setik) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${setik.length}*\n\n_Untuk mengambil sticker silahkan reply pesan ini dengan caption nama sticker_`
					vinzbot.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setik } })
					break
					case 'addvn':
					if (!isOwner && !mek.key.fromMe) return sticOwner(from)
					if (!isQuotedAudio) return reply('Reply audio')
					nm = body.slice(7)
					if (!nm) return reply('Nama vn nya apa?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await vinzbot.downloadMediaMessage(boij)
					vien.push(`${nm}`)
					fs.writeFileSync(`./media/vn/${nm}.mp3`, delb)
					fs.writeFileSync('./database/vien.json', JSON.stringify(vien))
					vinzbot.sendMessage(from, `Sukses, silahkan cek dengan *${prefix}listvn*`, MessageType.text, { quoted: mek })
					break
					case 'delvn':
					if (!isOwner && !mek.key.fromMe) return sticOwner(from)
					try {
					 nmm = body.slice(7)
					 wanu = vien.indexOf(nmm)
					 vien.splice(wanu, 1)
					 fs.unlinkSync(`./media/vn/${nmm}.mp3`)
					reply(`Sukses menghapus vn ${body.slice(7)}`)
					} catch (err){
						console.log(err)
						reply(mess.error.api)
					}
					break
				case 'vnlist':
				case 'listvn':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					teks = '*VN List :*\n\n'
					for (let awokwkwk of vien) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${vien.length}*\n\n_Untuk mengambil vn silahkan reply pesan ini dengan caption nama vn_`
					vinzbot.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": vien } })
					break
				case 'addimage':
				if (!isOwner && !mek.key.fromMe) return sticOwner(from)
					if (!isQuotedImage) return reply('Reply image')
					nm = body.slice(10)
					if (!nm) return reply('Nama image nya apa?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await vinzbot.downloadMediaMessage(boij)
					imagi.push(`${nm}`)
					fs.writeFileSync(`./media/image/${nm}.jpg`, delb)
					fs.writeFileSync('./database/imagi.json', JSON.stringify(imagi))
					vinzbot.sendMessage(from, `Sukses, silahkan cek dengan *${prefix}listimage*`, MessageType.text, { quoted: mek })
					break
				case 'delimage':
				if (!isOwner && !mek.key.fromMe) return sticOwner(from)
					try {
					 nmm = body.slice(10)
					 wanu = imagi.indexOf(nmm)
					 imagi.splice(wanu, 1)
					 fs.unlinkSync(`./media/image/${nmm}.jpg`)
					 reply(`Sukses menghapus image ${body.slice(10)}`)
					} catch (err){
						console.log(err)
						reply(mess.error.api)
					}
					break
					case 'imagelist':
				case 'listimage':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					teks = '*Image List :*\n\n'
					for (let awokwkwk of imagi) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${imagi.length}*\n\n_Untuk mengambil image silahkan reply pesan ini dengan caption nama image_`
					vinzbot.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": imagi } })
					break
				case 'sticktag':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
				if (!isGroup) return reply(mess.only.group)
				anu  = body.slice(10)
				wanu = anu.split('|')
				var group = await vinzbot.groupMetadata(wanu[0])
				var member = group['participants']
				var mem = []
				member.map( async adm => {
				mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
				})
				result = fs.readFileSync(`./media/sticker/${wanu[1]}.webp`)
				vinzbot.sendMessage(`${wanu[0]}`, result, sticker, { contextInfo: { "mentionedJid": mem }})
				break
			case 'runtime':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
				runtime = process.uptime()
				reply(`Runtime : ${waktu(runtime)}`)
				break
			case 'setbio':
				if (!isOwner && !mek.key.fromMe) return sticOwner(from)
				if (args.length < 1) return reply('Teksnya?')
					iyek = body.slice(8)
					vinzbot.setStatus(`${iyek}`)
					reply(`Sukses mengganti bio ke ${body.slice(8)}`)
					break
					case 'setname':
					if (!isOwner && !mek.key.fromMe) return sticOwner(from)
				if (args.length < 1) return reply('Teksnya?')
                anu = body.slice(9)
                vinzbot.updateProfileName(anu)
                reply(`Sukses mengganti nama ke ${body.slice(9)}`)
                break
                case 'add':
             reply(`MAAF FITURE INI DI NON AKTIFKAN KARNA MENYEBABKAN TERBANNED NYA BOT`)
             break
	
				case 'kick':
             reply(`MAAF FITURE INI DI NON AKTIFKAN KARNA MENYEBABKAN TERBANNED NYA BOT`)
             break
						reply('Sukses mengeluarkan peserta')
                    break
                    case 'creategroup':
			case 'creategrup':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
			if (!isGroup) return reply(mess.only.group)
				if (args.length < 1) return reply(`Penggunaan ${prefix}creategrup nama grup|@tag member`)
				argz = arg.split('|')
				if (mek.message.extendedTextMessage != undefined){
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                    for (let i = 0; i < mentioned.length; i++){
						anu = []
						anu.push(mentioned[i])
                    }
					vinzbot.groupCreate(argz[0], anu)
					reply(`Sukses membuat grup ${argz[0]}`)
                }
				break
            case 'welcome': 
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
	        if (!isGroup) return reply(mess.only.group)
			if (!isOwner && !isGroupAdmins) return sticAdmin(from)
					if (args[0] === 'on') {
						if (isWelkom) return reply('Sudah Aktif Kak')
						welkom.push(from)
						fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
						reply('Sukses mengaktifkan fitur welcome')
					} else if (args[0] === 'off') {
						if (!isWelkom) return reply('Sudah Mati Kak')
						var ini = welkom.indexOf(from)
						welkom.splice(ini, 1)
						fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
						reply('Sukses menonaktifkan fitur welcome')
					} else if (!c){
 anu =`Silahkan pilih salah satu\n\non: untuk mengaktifkan\noff: untuk menonaktifkan`
punten = [{buttonId: 'welcome off', buttonText: {displayText: 'OFF✖️'}, type: 1},{buttonId: 'welcome on', buttonText: {displayText: 'ON✔️'}, type: 1}]
const btngrass = {
    contentText: `${anu}`,
    footerText: '*_©𝑨𝑹𝑪𝑬𝑳𝑺 𝑩𝑶𝑻_*',
    buttons: punten,
    headerType: 1
}
await vinzbot.sendMessage(from, btngrass, MessageType.buttonsMessage, {quoted: ftrol})
					}
					break
			case 'addrespon':
			if (!isOwner && !mek.key.fromMe) return sticOwner(from)
				if (args.length < 1) return reply(`Penggunaan ${prefix}addrespon hai|hai juga`)
				argz = arg.split('|')
				if (checkCommands(argz[0], commandsDB) === true) return reply(`Udah ada`)
				addCommands(argz[0], argz[1], sender, commandsDB)
				reply(`Sukses menambahkan respon ${argz[0]}`)
				break
			case 'delrespon':
			if (!isOwner && !mek.key.fromMe) return sticOwner(from)
				if (args.length < 1) return reply(`Penggunaan ${prefix}delrespon hai`)
				if (!checkCommands(body.slice(11), commandsDB)) return reply(`Ga ada di database`)
                deleteCommands(body.slice(11), commandsDB)
				reply(`Sukses menghapus respon ${body.slice(11)}`)
				break
				case 'listrespon':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
teks = `\`\`\`「 LIST RESPON  」\`\`\`\n\n`
for (let i = 0; i < commandsDB.length; i ++){
teks += `❏ *Tanya:* ${commandsDB[i].pesan}\n`
teks += `❏ *Balasan:* ${commandsDB[i].balasan}\n`
teks += `❏ *Creator:* ${commandsDB[i].creator}\n\n`
}
reply(teks)
break
		default:break
		}
		if (isTTT && isPlayer2){
if (budy.startsWith('Y')){
  tto = ky_ttt.filter(ghg => ghg.id.includes(from))
  tty = tto[0]
  angka = tto[0].angka
  ucapan = `*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=❌
Player2 @${tty.player2.split('@')[0]}=⭕

${angka[1]}${angka[2]}${angka[3]}
${angka[4]}${angka[5]}${angka[6]}
${angka[7]}${angka[8]}${angka[9]}

Giliran = @${tty.player1.split('@')[0]}`
  vinzbot.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
  }
if (budy.startsWith('N')){
tto = ky_ttt.filter(ghg => ghg.id.includes(from))
tty = tto[0]
naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
ky_ttt = naa
vinzbot.sendMessage(from, `Yahh @${tty.player2.split('@')[0]} Menolak:(`,text,{quoted:mek,contextInfo:{mentionedJid:[tty.player2]}})
}
}

if (isTTT && isPlayer1){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
s = '❌'
main[0].angka[nuber] = s
main[0].gilir = main[0].player1
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = `*🎳Result Game Tictactoe 🎲

*Yeyyy Permainan Di Menangkan Oleh *@${tty.player1.split('@')[0]}*\n`
ucapan2 = `*🎳Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
vinzbot.sendMessage(from, ucapan1, text, {quoted:mek, contextInfo:{mentionedJid: [tty.player1]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()

if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()

if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()

if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()

if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()

if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()

if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()

if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()

if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳 Result Game Tictactoe 🎲*

*_Permainan Seri 🗿👌_*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

Player2 @${tty.player2.split('@')[0]}=⭕
Player1 @${tty.player1.split('@')[0]}=❌

${ttt}

Giliran = @${tty.player2.split('@')[0]}`
 vinzbot.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
}
if (isTTT && isPlayer2){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
s = '⭕'
main[0].angka[nuber] = s
main[0].gilir = main[0].player2
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = `*?? Result Game Tictactoe 🎲*

Yeyyy Permainan Di Menangkan Oleh *@${tty.player2.split('@')[0]}*\n`
ucapan2 = `*🎳 Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
vinzbot.sendMessage(from, ucapan1, text, {quoted:mek, contextInfo:{mentionedJid: [tty.player2]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()
if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()
if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()
if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()
if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()
if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()
if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()
if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()
if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳Result Game Tictactoe 🎲*

*_Permainan Seri🗿👌*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=⭕
Player2 @${tty.player2.split('@')[0]}=❌

${ttt}
 
Giliran = @${tty.player1.split('@')[0]}`
 vinzbot.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
 }
	} catch (e) {
        e = String(e)
            if (!e.includes("this.isZero")) {
            if (!e.includes("Cannot read property 'conversation' of null")) {
            if (!e.includes("Cannot read property 'contextInfo' of undefined")) {
            if (!e.includes("Cannot set property 'mtype' of undefined")) {
            if (!e.includes("jid is not defined")) {
     console.log(color('|ERR|', 'red'), color(e, 'cyan'))
     vinzbot.sendMessage(`${settings.NomorOwner}@s.whatsapp.net`, `─────「 *ALERT-ERROR* 」─────\n\n\`\`\`${e}\`\`\`\n\n────────────────────`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "Developer 𝑨𝑹𝑪𝑬𝑳𝑺 𝑩𝑶𝑻",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./thumb.jpg'),sourceUrl:"https://wa.me/message/SYPQDRAB4WG2I1."}}})
	}
    }
    }
    }
    }
    }
    }
    
///-------------------------------------------------------------\\\

/**
* Thx To:
vinzbot
KurrXd
Dcode Denpa
Yuzzu Kamiyaka
**/

///----------( Thx Dah Pake Scriptnya )----------\\\

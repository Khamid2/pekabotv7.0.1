
//PACKAGE NPM
const qrcode = require("qrcode-terminal") 
const moment = require("moment-timezone") 
const fs = require("fs")
const got = require("got");
const axios = require('axios')
const crypto = require('crypto')
const delay = require('delay')
const brainly = require('brainly-scraper')
const ffmpeg = require('fluent-ffmpeg')
const FormData = require('form-data')
const imgbb = require('imgbb-uploader')
const gis = require('g-i-s');
const request = require('request')
const fetch = require('node-fetch')
const imageToBase64 = require('image-to-base64')
const path = require('path')
const cd = 4.32e+7
const { exec } = require("child_process")
const { removeBackgroundFromImageFile } = require('remove.bg')
//---
//DATA LIB
const { color, bgcolor } = require('./lib/color')
const { bahasa } = require('./lib/bahasa')
const { negara } = require('./lib/kodenegara')
const { cheat } = require('./lib/cheat')
const { animesaran } = require('./lib/animesaran')
const { animesaran2 } = require('./lib/animesaran2')
const { donasi } = require('./lib/donasi')
const { infown } = require('./lib/infown')
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const { snk } = require('./lib/snk')
const fontPath = ('./lib/Zahraaa.ttf')
const { wait, simih, h2k, generateMessageID, getRandom, getGroupAdmins, getBuffer, banner, start, info, success, close } = require('./lib/functions')
const Exif = require('./lib/exif');
const exif = new Exif();
//---
//PLUGINS
const { convertSticker } = require("./plugins/swm.js")
//---
//DPUHY
const { dpuhy } = require('./ind')
//---
//FILE JSON
const { LeysApi, LolHuman, DapApi } = JSON.parse(fs.readFileSync('./src/apikey.json'))
const dapyog = JSON.parse(fs.readFileSync('./src/settings.json'))
const _leveling = JSON.parse(fs.readFileSync('./database/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./database/level.json'))
const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/nsfw.json'))
const ban = JSON.parse(fs.readFileSync('./database/banned.json'))
const user = JSON.parse(fs.readFileSync('./database/user.json'))
const audionye = JSON.parse(fs.readFileSync('./database/audio.json'))
const samih = JSON.parse(fs.readFileSync('./database/simi.json'))
const event = JSON.parse(fs.readFileSync('./database/event.json'))
const _limit = JSON.parse(fs.readFileSync('./database/limit.json'))
const uang = JSON.parse(fs.readFileSync('./database/uang.json'))
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const antivirtex = JSON.parse(fs.readFileSync('./database/antivirtex.json'))
const bad = JSON.parse(fs.readFileSync('./database/bad.json'))
const badword = JSON.parse(fs.readFileSync('./database/badword.json'))
lolhumankey = 'khamid',
//---
//SETTING (atur di src/settings.json)
namabot = dapyog.namabot
namaowner = dapyog.namaowner
nomerlu = dapyog.nomerlu
limitawal = dapyog.limitawal
memberlimit = dapyog.memberlimit
igstah = dapyog.instagramlu
//---
//WA CONNECTION
const {
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
   processTicksAndRejections,
   ECONNABORTED,
   apikey,
   WA_DEAFULT_EPHEMERAL,
   DataView,
   TypedArray,
} = require("@adiwajshing/baileys")
//---
//JANGAN DIAPA APAIN
prefix = '.'
blocked = []
a = '\`\`\`'
banChats = false
publik = true
setgrup = '39347060205 4-1351628616@g.us'
fake = `${namabot} ANTIDELETE`
numbernye = '0'
//---
//VCARD
const vcard1 = 'BEGIN:VCARD\n' 
              + 'VERSION:3.0\n' 
              + `FN:${namaowner}ツ\n`
              + `ORG: Owner ${namabot};\n`
              + `TEL;type=CELL;type=VOICE;waid=${nomerlu}:+${nomerlu}\n`
              + 'END:VCARD'
//---
//XP
const getLevelingXp = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }
//---
const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }
//USER
        const JadiUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            user.push(obj)
            fs.writeFileSync('./database/user.json', JSON.stringify(user))
        }
        const bikinSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }
        
//---
//LEVELING
        const getLevelingLevel = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].id
            }
        }

        const addLevelingXp = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (sender) => {
            const obj = {id: sender, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/level.json', JSON.stringify(_level))
        }
//---
//GET LIMIT
        const getLimit = (sender) => {
        	let position = false
              Object.keys(limit).forEach ((i) => {
              	if (limit[position].id === sender) {
              	   position = i
                  }
              })
             if (position !== false) {
                return limit[position].limit
            }
        }
//---
//ADD ATM
        const addATM = (sender) => {
        	const obj = {id: sender, uang : 0}
            uang.push(obj)
            fs.writeFileSync('./database/uang.json', JSON.stringify(uang))
        }
//---
//ADD KOIN
        const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./database/uang.json', JSON.stringify(uang))
            }
        }
//---
//CHECK ATM
        const checkATMuser = (sender) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }
//---
//BAYAR LIMIT
        const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/limit.json', JSON.stringify(_limit))
            }
        }
//---
//CONFIRM LIMIT
        const confirmATM = (sender, amount) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./database/uang.json', JSON.stringify(uang))
            }
        }
//-
//LIMIT ADD
            const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./database/limit.json', JSON.stringify(_limit))
            }
        }
//-
//SLEEP
const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
//-
/********** FUNCTION RANDOM BYTES **********/
randomBytes = (length) => {
    return Crypto.randomBytes(length)
}
//FUNCTION
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}
//-
//CONNECTION
async function starts() {
const dp = new WAConnection()
dp.version = [2, 2119, 6]
dp.logger.level = 'warn'
console.log(banner.string)
   dp.on('qr', qr => {
   qrcode.generate(qr, { small: true })
	console.log(color('(+)','white'), color('kmd','red'), color('(+)','white'), color(' SQAN CODENYA','aqua'), color('kunjungi situs cyberklik.com','yellow'))
})

	dp.on('credentials-updated', () => {
		fs.writeFileSync('./KmdScan.json', JSON.stringify(dp.base64EncodedAuthInfo(), null, '\t'))
		info('2', 'info!')
	})
	fs.existsSync('./KmdScan.json') && dp.loadAuthInfo('./KmdScan.json')
	dp.on('connecting', () => {
		start('2', color('[ ! ]Scan Codenya Ngab','aqua'))
	})
	dp.on('open', () => {
		success('2', color('[ ! ]Tersambung','red'))
	})
	dp.connect({timeoutMs: 30*1000})
//-
//WELCOME & LEAVE
dp.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
            num = anu.participants[0]
            const mdata = await dp.groupMetadata(anu.jid)
            try {
                var pp_user = await dp.getProfilePicture(num)
            } catch (e) {
                var pp_user = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
            }
            if (anu.action == 'add') {
                ini_user = dp.contacts[num]
                ini_img = await getBuffer(`http://api.lolhuman.xyz/api/welcomeimage?apikey=${LolHuman}&img=${pp_user}&text=${ini_user.notify}`)
                group_info = await dp.groupMetadata(anu.jid)
                welkam = `Hai ${ini_user.notify}\n◪ Welcome in group:\n├─ ${mdata.subject}\n│\n├─ Intro dulu\n├─ ❏ Nama: \n├─ ❏ Umur: \n├─ ❏ Asal kota: \n├─ ❏ Kelas: \n├─ ❏ Jenis kelamin: \n└─ ❏ Nomor: ${num.replace('@s.whatsapp.net', '')}\nSemoga Betah yaa~~\n${ini_user.notify}`
                dp.sendMessage(anu.jid, ini_img, MessageType.image, { caption: welkam })
            }
            if (anu.action == 'remove') {
                ini_user = dp.contacts[num]
                ini_img = await getBuffer(`http://api.lolhuman.xyz/api/welcomeimage?apikey=${LolHuman}&img=${pp_user}&text=${ini_user.notify}`)
                out = `◪ Goodbye ${ini_user.notify}\n◪ Leave from group:\n${mdata.subject}\n│\n└─ ❏ Nomor: ${num.replace('@s.whatsapp.net', '')}\nGoodBye~~`
                dp.sendMessage(anu.jid, ini_img, MessageType.image, { caption: out })
            }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
})
	dp.on('CB:Blocklist', json => {
		if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})
//-

//HARI & BULAN
var date = new Date();
        var tahun = date.getFullYear();
        var bulan1 = date.getMonth();
        var tanggal = date.getDate();
        var hari = date.getDay();
        var jam = date.getHours();
        var menit = date.getMinutes();
        var detik = date.getSeconds();
        var waktoo = date.getHours();
            switch(hari) {
                case 0: hari = "Minggu"; break;
                case 1: hari = "Senin"; break;
                case 2: hari = "Selasa"; break;
                case 3: hari = "Rabu"; break;
                case 4: hari = "Kamis"; break;
                case 5: hari = "Jum`at"; break;
                case 6: hari = "Sabtu"; break;
            }
            switch(bulan1) {
                case 0: bulan1 = "Januari"; break;
                case 1: bulan1 = "Februari"; break;
                case 2: bulan1 = "Maret"; break;
                case 3: bulan1 = "April"; break;
                case 4: bulan1 = "Mei"; break;
                case 5: bulan1 = "Juni"; break;
                case 6: bulan1 = "Juli"; break;
                case 7: bulan1 = "Agustus"; break;
                case 8: bulan1 = "September"; break;
                case 9: bulan1 = "Oktober"; break;
                case 10: bulan1 = "November"; break;
                case 11: bulan1 = "Desember"; break;
            }
            var tampilTanggal = "" + hari + ", " + tanggal + " " + bulan1 + " " + tahun;
            var tampilWaktu = "" + "Jam : " + jam + ":" + menit + ":" + detik + " Wib";
//-
//ANTIDELETE
	dp.on('message-update', async (kmd) => {
		try {
	    const from = kmd.key.remoteJid
		const messageStubType = WA_MESSAGE_STUB_TYPES[kmd.messageStubType] || 'MESSAGE'
		const dataRevoke = JSON.parse(fs.readFileSync('./src/gc-revoked.json'))
		const dataCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked.json'))
		const dataBanCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked-banlist.json'))	
		const sender = kmd.key.fromMe ? dp.user.jid : kmd.key.remoteJid.endsWith('@g.us') ? kmd.participant : kmd.key.remoteJid
		const isRevoke = kmd.key.remoteJid.endsWith('@s.whatsapp.net') ? true : kmd.key.remoteJid.endsWith('@g.us') ? dataRevoke.includes(from) : false
		const isCtRevoke = kmd.key.remoteJid.endsWith('@g.us') ? true : dataCtRevoke.data ? true : false
		const isBanCtRevoke = kmd.key.remoteJid.endsWith('@g.us') ? true : !dataBanCtRevoke.includes(sender) ? true : false
		if (messageStubType == 'REVOKE') {
			console.log(`Status untuk grup : ${!isRevoke}\nStatus semua kontak : ${!isCtRevoke}\nStatus kontak dikecualikan : ${!isBanCtRevoke}`)
			if (!isRevoke) return
			if (!isCtRevoke) return
			if (!isBanCtRevoke) return
			const from = kmd.key.remoteJid
			const isGroup = kmd.key.remoteJid.endsWith('@g.us') ? true : false
			let int
			let infoMSG = JSON.parse(fs.readFileSync('./src/msg.data.json'))
			const id_deleted = kmd.key.id
			const conts = !kmd.key.fromMe ? dp.user.jid : dp.contacts[sender] || { notify: jid.replace(/@.+/, '') }
			const pushname = !kmd.key.fromMe ? dp.user.name : conts.notify || conts.vname || conts.name || '-'
			const opt4tag = {
				contextInfo: { mentionedJid: [sender] }
			}
			for (let i = 0; i < infoMSG.length; i++) {
				if (infoMSG[i].key.id == id_deleted) {
					const dataInfo = infoMSG[i]
					const type = Object.keys(infoMSG[i].message)[0]
					const timestamp = infoMSG[i].messageTimestamp
					int = {
						no: i,
						type: type,
						timestamp: timestamp,
						data: dataInfo
					}
				}
			}
			
			const dpuhyex = Number(int.no)
			const body = int.type == 'conversation' ? infoMSG[dpuhyex].message.conversation : int.type == 'extendedTextMessage' ? infoMSG[dpuhyex].message.extendedTextMessage.text : int.type == 'imageMessage' ? infoMSG[dpuhyex].message.imageMessage.caption : int.type == 'stickerMessage' ? 'Sticker' : int.type == 'audioMessage' ? 'Audio' : int.type == 'videoMessage' ? infoMSG[dpuhyex].videoMessage.caption : infoMSG[dpuhyex]
			const mediaData = int.type === 'extendedTextMessage' ? JSON.parse(JSON.stringify(int.data).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : int.data
			var itsme = `${numbernye}@s.whatsapp.net`
				var split = `${fake}`
				var selepbot72 = {
					contextInfo: {
						participant: itsme,
						quotedMessage: {
							extendedTextMessage: {
								text: split,
							}
						}
					}
				}
			if (int.type == 'conversation' || int.type == 'extendedTextMessage') {
				const strConversation = `		 「 ANTI-DELETE 」

- Nama : ${pushname} 
- Nomer : ${sender.replace('@s.whatsapp.net', '')}
- Tipe : Text
- Waktu : ${moment.unix(int.timestamp).format('HH:mm:ss')}
- Tanggal : ${moment.unix(int.timestamp).format('DD/MM/YYYY')}
- Pesan : ${body ? body : '-'}`
				dp.sendMessage(from, strConversation, MessageType.text, selepbot72)
			} else if (int.type == 'stickerMessage') {
				var itsme = `${numbernye}@s.whatsapp.net`
					var split = `${fake}`
					const pingbro23 = {
						contextInfo: {
							participant: itsme,
							quotedMessage: {
								extendedTextMessage: {
									text: split,
								}
							}
						}
					}
				const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
				const savedFilename = await dp.downloadAndSaveMediaMessage(int.data, `./media/sticker/${filename}`);
				const strConversation = `		 「 ANTI-DELETE 」

- Nama : ${pushname} 
- Nomer : ${sender.replace('@s.whatsapp.net', '')}
- Tipe : Sticker
- Waktu : ${moment.unix(int.timestamp).format('HH:mm:ss')}
- Tanggal : ${moment.unix(int.timestamp).format('DD/MM/YYYY')}`

				const buff = fs.readFileSync(savedFilename)
				dp.sendMessage(from, strConversation, MessageType.text, opt4tag)
				dp.sendMessage(from, buff, MessageType.sticker, pingbro23)
				fs.unlinkSync(savedFilename)

			} else if (int.type == 'imageMessage') {
				var itsme = `${numbernye}@s.whatsapp.net`
					var split = `${fake}`
					const pingbro22 = {
						contextInfo: {
							participant: itsme,
							quotedMessage: {
								extendedTextMessage: {
									text: split,
								}
							}
						}
					}
				const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
				const savedFilename = await dp.downloadAndSaveMediaMessage(int.data, `./media/revoke/${filename}`);
				const buff = fs.readFileSync(savedFilename)
				const strConversation = `	 「 ANTI-DELETE 」

- Nama : ${pushname} 
- Nomer : ${sender.replace('@s.whatsapp.net', '')}
- Tipe : Image
- Waktu : ${moment.unix(int.timestamp).format('HH:mm:ss')}
- Tanggal : ${moment.unix(int.timestamp).format('DD/MM/YYYY')}
- Pesan : ${body ? body : '-'}\`\`\``
				dp.sendMessage(from, buff, MessageType.image, { contextInfo: { mentionedJid: [sender] }, caption: strConversation })
				fs.unlinkSync(savedFilename)
			}
		}
	} catch (e) {
		console.log('Message : %s', color(e, 'green'))
	}
})
dp.on('message-new', async (kmd) => {
	try {
		if (!kmd.message) return
		if (kmd.key && kmd.key.remoteJid == 'status@broadcast') return
		let infoMSG = JSON.parse(fs.readFileSync('./src/msg.data.json'))
		infoMSG.push(JSON.parse(JSON.stringify(kmd)))
		fs.writeFileSync('./src/msg.data.json', JSON.stringify(infoMSG, null, 2))
		const urutan_pesan = infoMSG.length
		if (urutan_pesan === 5000) {
			infoMSG.splice(0, 4300)
			fs.writeFileSync('./src/msg.data.json', JSON.stringify(infoMSG, null, 2))
		}
			if (!kmd.message) return
			if (kmd.key && kmd.key.remoteJid == 'status@broadcast') return
			if (!kmd.key.fromMe && banChats === true) return
			if (!publik) {
  }
			global.prefix
			global.blocked
			const from = kmd.key.remoteJid
			const content = JSON.stringify(kmd.message)
			const type = Object.keys(kmd.message)[0]
			//-
			//MULTI PREFIX -BY TANAKA
			const cmd = (type === 'conversation' && kmd.message.conversation) ? kmd.message.conversation : (type == 'imageMessage') && kmd.message.imageMessage.caption ? kmd.message.imageMessage.caption : (type == 'videoMessage') && kmd.message.videoMessage.caption ? kmd.message.videoMessage.caption : (type == 'extendedTextMessage') && kmd.message.extendedTextMessage.text ? kmd.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
			const prefix = /^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×_*!#$%^&./\\©^]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×_*!#$,|`÷?;:%abcdefghijklmnopqrstuvwxyz%^&./\\©^]/gi) : '-'
			//-
			//WAKTU
			const date = new Date().toLocaleDateString()
			const time = moment.tz('Asia/Jakarta').format('HH:mm:ss')
			const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
			const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
            body = (type === 'conversation' && kmd.message.conversation.startsWith(prefix)) ? kmd.message.conversation : (type == 'imageMessage') && kmd.message.imageMessage.caption.startsWith(prefix) ? kmd.message.imageMessage.caption : (type == 'videoMessage') && kmd.message.videoMessage.caption.startsWith(prefix) ? kmd.message.videoMessage.caption : (type == 'extendedTextMessage') && kmd.message.extendedTextMessage.text.startsWith(prefix) ? kmd.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? kmd.message.conversation : (type === 'extendedTextMessage') ? kmd.message.extendedTextMessage.text : ''
			var pes = (type === 'conversation' && kmd.message.conversation) ? kmd.message.conversation : (type == 'imageMessage') && kmd.message.imageMessage.caption ? kmd.message.imageMessage.caption : (type == 'videoMessage') && kmd.message.videoMessage.caption ? kmd.message.videoMessage.caption : (type == 'extendedTextMessage') && kmd.message.extendedTextMessage.text ? kmd.message.extendedTextMessage.text : ''
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			var Link = (type === 'conversation' && kmd.message.conversation) ? kmd.message.conversation : (type == 'imageMessage') && kmd.message.imageMessage.caption ? kmd.message.imageMessage.caption : (type == 'videoMessage') && kmd.message.videoMessage.caption ? kmd.message.videoMessage.caption : (type == 'extendedTextMessage') && kmd.message.extendedTextMessage.text ? kmd.message.extendedTextMessage.text : ''
			const messagesLink = Link.slice(0).trim().split(/ +/).shift().toLowerCase()
			var tas = (type === 'conversation' && kmd.message.conversation) ? kmd.message.conversation : (type == 'imageMessage') && kmd.message.imageMessage.caption ? kmd.message.imageMessage.caption : (type == 'videoMessage') && kmd.message.videoMessage.caption ? kmd.message.videoMessage.caption : (type == 'extendedTextMessage') && kmd.message.extendedTextMessage.text ? kmd.message.extendedTextMessage.text : ''
			const mesejAnti = tas.slice(0).trim().split(/ +/).shift().toLowerCase()
			const RAM = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			const tescuk = ["0@s.whatsapp.net"]
			const isGroup = from.endsWith('@g.us')
			const botNumber = dp.user.jid
			const ownerNumber = ["6285700325917@s.whatsapp.net"]
			const sender = isGroup ? kmd.participant : kmd.key.remoteJid
			pushname = dp.contacts[sender] != undefined ? dp.contacts[sender].vname || dp.contacts[sender].notify : undefined
			//-
			//SECURITY
			const groupMetadata = isGroup ? await dp.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
            const isEventon = isGroup ? event.includes(from) : false
            const isLevelingOn = isGroup ? _leveling.includes(from) : false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isAntiLink = isGroup ? antilink.includes(from) : false
			const isAntiVirtex = isGroup ? antivirtex.includes(from) : false
			const isBadWord = isGroup ? badword.includes(from) : false
			const isUser = user.includes(sender)
			const isBanned = ban.includes(sender)
			const isImage = type === 'imageMessage'
			const isOwner = ownerNumber.includes(sender)
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const sekarang = new Date().getTime();
			//-
			//WAKTU
			var ase = new Date();
                        var waktoo = ase.getHours();
                        switch(waktoo){
                case 0: waktoo = "Waktu Tengah Malam🌚 - Tidur Kak :)"; break;
                case 1: waktoo = "Waktu Tengah Malam🌚 - Tidur Kak :)"; break;
                case 2: waktoo = "Waktu Dini Hari🌒 - Tidur Kak :)"; break;
                case 3: waktoo = "Waktu Dini Hari🌓 - Tidur Kak :)"; break;
                case 4: waktoo = "Subuh🌔"; break;
                case 5: waktoo = "Subuh🌔"; break;
                case 6: waktoo = "Selamat Pagi kak🌝🌝"; break;
                case 7: waktoo = "Selamat Pagi kak🌝🌝"; break;
                case 8: waktoo = "Selamat Pagi kak🌝🌝"; break;
                case 9: waktoo = "Selamat Pagi kak🌝 kak🌝"; break;
                case 10: waktoo = "Selamat Pagi kak🌝"; break;
                case 11: waktoo = "Selamat Siang Kak🌞\n - Jangan Lupa Shalat Dzuhur"; break;
                case 12: waktoo = "Selamat Siang Kak🌞\n - Jangan Lupa Shalat Dzuhur"; break;
                case 13: waktoo = "Selamat Siang Kak🌞\n - Jangan Lupa Shalat Dzuhur"; break;
                case 14: waktoo = "Selamat Siang Kak🌞\n - Jangan Lupa Beristirahat :)"; break;
                case 15: waktoo = "Selamat Sore Kak🌝\n -  Jangan Lupa Mandi Dan shalat ashar"; break;
                case 16: waktoo = "Selamat Sore Kak🌝\n  - Jangan Lupa Mandi Dan shalat ashar"; break;
                case 17: waktoo = "Selamat Sore Kak🌖\n - Menjelang Malam🌚"; break;
                case 18: waktoo = "Waktu Magrib🌘\n - Jangan Lupa Shalat Magrib Kak"; break;
                case 19: waktoo = "Waktu Magrib🌚"; break;
                case 20: waktoo = "Selamat Malam🌚"; break;
                case 21: waktoo = "Selamat Malam🌚"; break;
                case 22: waktoo = "Selamat Malam🌚\n - Jangan Lupa Beristirahat & Jangan Gadang"; break;
                case 23: waktoo = "Tengah Malam🌚 \n - Tidur Kak, Ga baik bergadang :)"; break;
            }
            var tampilHari = "" + waktoo;
            //-
            //WAKTU BUAT FAKEREPLY
            var ase = new Date();
                        var waktoonyabro = ase.getHours();
                        switch(waktoonyabro){
                case 0: waktoonyabro = `Selamat Malam 🌛`; break;
                case 1: waktoonyabro = `Selamat Malam 🌛`; break;
                case 2: waktoonyabro = `Selamat Malam 🌛`; break;
                case 3: waktoonyabro = `Selamat Pagi ✨`; break;
                case 4: waktoonyabro = `Selamat Pagi ✨`; break;
                case 5: waktoonyabro = `Selamat Pagi ✨`; break;
                case 6: waktoonyabro = `Selamat Pagi ✨`; break;
                case 7: waktoonyabro = `Selamat Pagi ✨`; break;
                case 8: waktoonyabro = `Selamat Pagi ✨`; break;
                case 9: waktoonyabro = `Selamat Pagi ✨`; break;
                case 10: waktoonyabro = `Selamat Pagi ✨`; break;
                case 11: waktoonyabro = `Selamat Siang 🔥`; break;
                case 12: waktoonyabro = `Selamat Siang 🔥`; break;
                case 13: waktoonyabro = `Selamat Siang 🔥`; break;
                case 14: waktoonyabro = `Selamat Siang 🔥`; break;
                case 15: waktoonyabro = `Selamat Sore 🌹`; break;
                case 16: waktoonyabro = `Selamat Sore 🌹`; break;
                case 17: waktoonyabro = `Selamat Sore 🌹`; break;
                case 18: waktoonyabro = `Selamat Malam 🌛`; break;
                case 19: waktoonyabro = `Selamat Malam 🌛`; break;
                case 20: waktoonyabro = `Selamat Malam 🌛`; break;
                case 21: waktoonyabro = `Selamat Malam 🌛`; break;
                case 22: waktoonyabro = `Selamat Malam 🌛`; break;
                case 23: waktoonyabro = `Selamat Malam 🌛`; break;
            }
            var YahahaHayyuk = "" + waktoonyabro;
            //-
			//FAKE REPLY
			const freply = { key: { fromMe: false, participant: `${nomerlu}@s.whatsapp.net`, ...(from ? { remoteJid: "6283136505591-1614953337@g.us" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/png", "caption": `${YahahaHayyuk}`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./lib/logo.jpeg')} } }
			const ftoko = { key: { fromMe: false, participant: `${nomerlu}@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage": { "product": { "productImage":{ "mimetype": "image/jpeg", "jpegThumbnail": fs.readFileSync('./lib/logo.jpeg') }, "title": `${YahahaHayyuk}`, "productImageCount": 9999 }, "businessOwnerJid": `${nomerlu}@s.whatsapp.net`}}}
			const fkontak = { key: { fromMe: false, participant: `${nomerlu}@s.whatsapp.net`, ...(from ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { "contactMessage": { "displayName": `${YahahaHayyuk}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${YahahaHayyuk},;;;\nFN:${YahahaHayyuk},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, "jpegThumbnail": fs.readFileSync('./lib/logo.jpeg')}}}
//-
//SOTOY
        const sotoy = [
		'🍊 : 🍒 : 🍐',
		'🍒 : 🔔 : 🍊',
		'🍇 : 🍇 : 🍇',
		'🍊 : 🍋 : 🔔',
		'🔔 : 🍒 : 🍐',
		'🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',		
		'🍐 : 🍒 : 🍋',
		'🍐 : 🍐 : 🍐',
		'🍊 : 🍒 : 🍒',
		'🔔 : 🔔 : 🍇',
		'🍌 : 🍒 : 🔔',
		'🍐 : 🔔 : 🔔',
		'🍊 : 🍋 : 🍒',
		'🍋 : 🍋 : 🍌',
		'🔔 : 🔔 : 🍇',
		'🔔 : 🍐 : 🍇',
		'🔔 : 🔔 : 🔔',
		'🍒 : 🍒 : 🍒',
		'🍌 : 🍌 : 🍌'
		]
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				dp.sendMessage(from, teks, text, {sendEphemeral: true, thumbnail: fs.readFileSync('./lib/logo.jpeg', 'base64'), quoted: ftoko})
			}
			const sendMess = (hehe, teks) => {
				dp.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? dp.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : dp.sendMessage(from, teks.trim(), extendedText, {quoted: kmd, contextInfo: {"mentionedJid": memberr}})
			}
			const sendImage = (teks) => {
		    dp.sendMessage(from, teks, image, {quoted:kmd})
		    }
		    const costum = (pesan, tipe, target, target2) => {
			dp.sendMessage(from, pesan, tipe, {sendEphemeral: true, thumbnail: fs.readFileSync('./lib/logo.jpeg', 'base64'), quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
		    const sendPtt = (teks) => {
		    dp.sendMessage(from, audio, mp3, {quoted:kmd})
		    }
		    const dappauhuy = (pesan, tipe, target, target2) => {
		    dp.sendMessage(from, pesan, tipe, { "contextInfo": {mentionedJid: [sender], "forwardingScore": 999,"isForwarded": true}, quoted: { "key": { "participant": `${target}`, "remoteJid": "393470602054-1351628616@g.us", "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync('./lib/logo.jpeg'), "mimetype": "application/octet-stream", "title": `${target2}`, "fileLength": "36", "pageCount": 0, "fileName": `${target2}` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		    }
//-
//ROLE
		const levelRole = getLevelingLevel(sender)
          var role = 'Newbie ㋡'
        if (levelRole <= 2) {
            role = 'Newbie ㋡'
        } else if (levelRole <= 4) {
            role = 'Beginner Grade 1 ⚊¹'
        } else if (levelRole <= 6) {
            role = 'Beginner Grade 2 ⚊²'
        } else if (levelRole <= 8) {
            role = 'Beginner Grade 3 ⚊³'
        } else if (levelRole <= 10) {
            role = 'Beginner Grade 4 ⚊⁴'
        } else if (levelRole <= 12) {
            role = 'Private Grade 1 ⚌¹'
        } else if (levelRole <= 14) {
            role = 'Private Grade 2 ⚌²'
        } else if (levelRole <= 16) {
            role = 'Private Grade 3 ⚌³'
        } else if (levelRole <= 18) {
            role = 'Private Grade 4 ⚌⁴'
        } else if (levelRole <= 20) {
            role = 'Private Grade 5 ⚌⁵'
        } else if (levelRole <= 22) {
            role = 'Corporal Grade 1 ☰¹'
        } else if (levelRole <= 24) {
            role = 'Corporal Grade 2 ☰²'
        } else if (levelRole <= 26) {
            role = 'Corporal Grade 3 ☰³'
        } else if (levelRole <= 28) {
            role = 'Corporal Grade 4 ☰⁴'
        } else if (levelRole <= 30) {
            role = 'Corporal Grade 5 ☰⁵'
        } else if (levelRole <= 32) {
            role = 'Sergeant Grade 1 ≣¹'
        } else if (levelRole <= 34) {
            role = 'Sergeant Grade 2 ≣²'
        } else if (levelRole <= 36) {
            role = 'Sergeant Grade 3 ≣³'
        } else if (levelRole <= 38) {
            role = 'Sergeant Grade 4 ≣⁴'
        } else if (levelRole <= 40) {
            role = 'Sergeant Grade 5 ≣⁵'
        } else if (levelRole <= 42) {
            role = 'Staff Grade 1 ﹀¹'
        } else if (levelRole <= 44) {
            role = 'Staff Grade 2 ﹀²'
        } else if (levelRole <= 46) {
            role = 'Staff Grade 3 ﹀³'
        } else if (levelRole <= 48) {
            role = 'Staff Grade 4 ﹀⁴'
        } else if (levelRole <= 50) {
            role = 'Staff Grade 5 ﹀⁵'
        } else if (levelRole <= 52) {
            role = 'Sergeant Grade 1 ︾¹'
        } else if (levelRole <= 54) {
            role = 'Sergeant Grade 2 ︾²'
        } else if (levelRole <= 56) {
            role = 'Sergeant Grade 3 ︾³'
        } else if (levelRole <= 58) {
            role = 'Sergeant Grade 4 ︾⁴'
        } else if (levelRole <= 60) {
            role = 'Sergeant Grade 5 ︾⁵'
        } else if (levelRole <= 62) {
            role = '2nd Lt. Grade 1 ♢¹ '
        } else if (levelRole <= 64) {
            role = '2nd Lt. Grade 2 ♢²'
        } else if (levelRole <= 66) {
            role = '2nd Lt. Grade 3 ♢³'
        } else if (levelRole <= 68) {
            role = '2nd Lt. Grade 4 ♢⁴'
        } else if (levelRole <= 70) {
            role = '2nd Lt. Grade 5 ♢⁵'
        } else if (levelRole <= 72) {
            role = '1st Lt. Grade 1 ♢♢¹'
        } else if (levelRole <= 74) {
            role = '1st Lt. Grade 2 ♢♢²'
        } else if (levelRole <= 76) {
            role = '1st Lt. Grade 3 ♢♢³'
        } else if (levelRole <= 78) {
            role = '1st Lt. Grade 4 ♢♢⁴'
        } else if (levelRole <= 80) {
            role = '1st Lt. Grade 5 ♢♢⁵'
        } else if (levelRole <= 82) {
            role = 'Major Grade 1 ✷¹'
        } else if (levelRole <= 84) {
            role = 'Major Grade 2 ✷²'
        } else if (levelRole <= 86) {
            role = 'Major Grade 3 ✷³'
        } else if (levelRole <= 88) {
            role = 'Major Grade 4 ✷⁴'
        } else if (levelRole <= 90) {
            role = 'Major Grade 5 ✷⁵'
        } else if (levelRole <= 92) {
            role = 'Colonel Grade 1 ✷✷¹'
        } else if (levelRole <= 94) {
            role = 'Colonel Grade 2 ✷✷²'
        } else if (levelRole <= 96) {
            role = 'Colonel Grade 3 ✷✷³'
        } else if (levelRole <= 98) {
            role = 'Colonel Grade 4 ✷✷⁴'
        } else if (levelRole <= 100) {
            role = 'Colonel Grade 5 ✷✷⁵'
        } else if (levelRole <= 102) {
            role = 'Brigadier Early ✰'
        } else if (levelRole <= 104) {
            role = 'Brigadier Silver ✩'
        } else if (levelRole <= 106) {
            role = 'Brigadier gold ✯'
        } else if (levelRole <= 108) {
            role = 'Brigadier Platinum ✬'
        } else if (levelRole <= 110) {
            role = 'Brigadier Diamond ✪'
        } else if (levelRole <= 112) {
            role = 'Major General Early ✰'
        } else if (levelRole <= 114) {
            role = 'Major General Silver ✩'
        } else if (levelRole <= 116) {
            role = 'Major General gold ✯'
        } else if (levelRole <= 118) {
            role = 'Major General Platinum ✬'
        } else if (levelRole <= 120) {
            role = 'Major General Diamond ✪'
        } else if (levelRole <= 122) {
            role = 'Lt. General Early ✰'
        } else if (levelRole <= 124) {
            role = 'Lt. General Silver ✩'
        } else if (levelRole <= 126) {
            role = 'Lt. General gold ✯'
        } else if (levelRole <= 128) {
            role = 'Lt. General Platinum ✬'
        } else if (levelRole <= 130) {
            role = 'Lt. General Diamond ✪'
        } else if (levelRole <= 132) {
            role = 'General Early ✰'
        } else if (levelRole <= 134) {
            role = 'General Silver ✩'
        } else if (levelRole <= 136) {
            role = 'General gold ✯'
        } else if (levelRole <= 138) {
            role = 'General Platinum ✬'
        } else if (levelRole <= 140) {
            role = 'General Diamond ✪'
        } else if (levelRole <= 142) {
            role = 'Commander Early ★'
        } else if (levelRole <= 144) {
            role = 'Commander Intermediate ⍣'
        } else if (levelRole <= 146) {
            role = 'Commander Elite ≛'
        } else if (levelRole <= 148) {
            role = 'The Commander Hero ⍟'
        } else if (levelRole <= 152) {
            role = 'Legends 忍'
        } else if (levelRole <= 154) {
            role = 'Legends 忍'
        } else if (levelRole <= 156) {
            role = 'Legends 忍'
        } else if (levelRole <= 158) {
            role = 'Legends 忍'
        } else if (levelRole <= 160) {
            role = 'Legends 忍'
        } else if (levelRole <= 162) {
            role = 'Legends 忍'
        } else if (levelRole <= 164) {
            role = 'Legends 忍'
        } else if (levelRole <= 166) {
            role = 'Legends 忍'
        } else if (levelRole <= 168) {
            role = 'Legends 忍'
        } else if (levelRole <= 170) {
            role = 'Legends 忍'
        } else if (levelRole <= 172) {
            role = 'Legends 忍'
        } else if (levelRole <= 174) {
            role = 'Legends 忍'
        } else if (levelRole <= 176) {
            role = 'Legends 忍'
        } else if (levelRole <= 178) {
            role = 'Legends 忍'
        } else if (levelRole <= 180) {
            role = 'Legends 忍'
        } else if (levelRole <= 182) {
            role = 'Legends 忍'
        } else if (levelRole <= 184) {
            role = 'Legends 忍'
        } else if (levelRole <= 186) {
            role = 'Legends 忍'
        } else if (levelRole <= 188) {
            role = 'Legends 忍'
        } else if (levelRole <= 190) {
            role = 'Legends 忍'
        } else if (levelRole <= 192) {
            role = 'Legends 忍'
        } else if (levelRole <= 194) {
            role = 'Legends 忍'
        } else if (levelRole <= 196) {
            role = 'Legends 忍'
        } else if (levelRole <= 198) {
            role = 'Legends 忍'
        } else if (levelRole <= 200) {
            role = 'Legends 忍'
        } else if (levelRole <= 1243) {
   	         role = 'Legends 忍'
   	     }
   
			var premi = 'User 🏅'
			
			if (kmd.key.fromMe) {
				premi = 'Owner ⚔️'
		    }
		
		     var ind = `${limitawal}`
//-
//LEVELING
            if (isGroup && isUser && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 500
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    await reply(dpuhy.levelup(pushname, sender, getLevelingXp, getLevel, getLevelingLevel))
                }
            } catch (err) {
                console.error(err)
            }
        }
//-
//CHECK LIMIT
          const checkLimit = (sender) => {
			let found = false
			for (let lmt of _limit) {
			if (lmt.id === sender) {
			let limitCounts = limitawal - lmt.limit
			if (limitCounts <= 0) return dp.sendMessage(from,`Limit request anda sudah habis\n`, text, {quoted: fkontak})
			dp.sendMessage(from, `
「 ❗ 」Limit Count
Sisa Limit Anda : ${limitCounts}

NOTE : Untuk Mendapatkan Limit Bisa Lewat Naik Level Di Group Atau Buy limit.`, text, { quoted : fkontak})
			found = true 
			}
		}
			if (found === false) {
			let obj = { id: sender, limit: 0 }
			_limit.push(obj)
			fs.writeFileSync('./database/limit.json', JSON.stringify(_limit))
			dp.sendMessage(from, `limit anda : ${limitCounts}`, text, { quoted : fkontak})
			}
		} 
//-
//LIMIT
           const isLimit = (sender) =>{ 
		      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
              	let limits = i.limit
              if (limits >= limitawal ) {
              	  position = true
                    dp.sendMessage(from, dpuhy.limitend(pushname), text, {quoted: fkontak})
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 1 }
                _limit.push(obj)
                fs.writeFileSync('./database/limit.json',JSON.stringify(_limit))
           return false
       }
     }
//-
//TEXT
if (budy.includes(`@daftar`)) {   
	        if (isUser) return reply(dpuhy.rediregis())
	        const serialUser = bikinSerial(20)
	         try {
								ppimg = await dp.getProfilePicture(`${sender.split('@')[0]}@c.us`)
								} catch {
								ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
							}
	        veri = sender
	        user.push(sender)
	        fs.writeFileSync('./database/user.json', JSON.stringify(user))
	        JadiUser(sender, serialUser)
	         const dpter = `
┌━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙
│「 *PENDAFTARAN USER* 」
*│Terimakasih Sudah*
*│Mendaftarkan Diri*
*│Dalam KMD Bot WhatsApp*
*┕┬────────────┈ ⳹*
*┌┤Nama :* ${pushname}
*││Nomer :* +${sender.split('@')[0]}
*││SN :* ${serialUser}
*││Total Pengguna :* 472 Orang
*││Status :* ☑️ Terverifikasi
*│┕────────────┈ ⳹*
*│Waktu Pendaftaran*
│•Tanggal : *${date}*
│•Jam : *${time}*
┝────────────────
│ *Silahkan Ketik .menu*
│ *untuk melihat fitur bot kami*
│ 
│ *note*
│ _jika ada yg kurang paham_
│ _silakan hubungi developer bot_
│ _dengan cara kirim perintah_
│ .owner
┕━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙
*「 KMD BOT V7 」*`
let buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/verify?nama=${encodeURI(pushname)}&member=${user.length}&seri=${serialUser}&pp=${ppimg}&bg=${ppimg}`)
dp.sendMessage(from, buff, MessageType.image, {caption: dpter, contextInfo: {"mentionedJid": [sender]}})
console.log(color('[REGISTER]'), color(time, 'yellow'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
}
if (budy.includes(`Prefix`)) {
           reply(`「 MULTI PREFIX 」`)
           }
if (budy.includes(`prefix`)) {
           reply(`「 MULTI PREFIX 」`)
           }
if (budy.includes(`dogestick`)) { //GABUT DOANG (no prefix)
kntl = await getBuffer(`https://api.lolhuman.xyz/api/sticker/anjing?apikey=${LolHuman}`)
dp.sendMessage(from, kntl, sticker, {quoted: freply})
           }
if (budy.includes(`.c `)){
         const teks = budy.replace(/.c /, ``)
         axios.get(`https://st4rz.herokuapp.com/api/simsimi?kata=${teks}`).then((res) => {
         let hasil = ` _${res.data.result}_ `;
         dp.sendMessage(from, hasil ,MessageType.text, { quoted: kmd});
         })
      }
//ChatKM028BID
else if (budy == `assalamualaikum`){
dp.sendMessage(from, ` _Waalaikumsalam, _Iyaa...ada yang bisa kami bantu? Ketik *.menu* untuk melihat fitur bot kami_ ` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Assalamu'alaikum`){
dp.sendMessage(from, ` _Waalaikumsalam, _Iyaa...ada yang bisa kami bantu? Ketik *.menu* untuk melihat fitur bot kami_ ` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Asalamu'alaikum`){
dp.sendMessage(from, ` _Waalaikumsalam, _Iyaa...ada yang bisa kami bantu? Ketik *.menu* untuk melihat fitur bot kami_ ` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `salam`){
dp.sendMessage(from, ` _Salam juga., _Iyaa...ada yang bisa kami bantu? Ketik *.menu* untuk melihat fitur bot kami_ ` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `asalamualaikum`){
dp.sendMessage(from, ` _Waalaikumsalam, _Iyaa...ada yang bisa kami bantu? Ketik *.menu* untuk melihat fitur bot kami_ ` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Assalamualaikum`){
dp.sendMessage(from, ` _Waalaikumsalam, _Iyaa...ada yang bisa kami bantu? Ketik *.menu* untuk melihat fitur bot kami_ ` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Web`){
dp.sendMessage(from,`*cyberklik.com*` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Menu`){
dp.sendMessage(from,`Menu apa kak... untuk melihat fitur bot, gunakan perintah *.menu*` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `menu`){
dp.sendMessage(from,`Menu apa kak... untuk melihat fitur bot, gunakan perintah *.menu* ` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Daftar`){
dp.sendMessage(from,`Mau daftar apa kak..? \nJika mau daftar sebagai userbot gunakan perintah *@daftar*`  ,MessageType.text, { quoted: kmd} );
}
else if (budy == `daftar`){
dp.sendMessage(from,`Mau daftar apa kak..? \nJika mau daftar sebagai userbot gunakan perintah *@daftar*`  ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Nomere khamid`){
dp.sendMessage(from, `nih, wa.me/6285700325917 ; save ya kak` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Nomre khamid`){
dp.sendMessage(from, `nih, wa.me/6285700325917 ; save ya kak` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Nomere khamid ndi`){
dp.sendMessage(from, `nih, wa.me/6285700325917 ; save ya kak` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Nomre khamid`){
dp.sendMessage(from, `nih, wa.me/6285700325917 ; save ya kak` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Nomere hamid`){
dp.sendMessage(from, `nih, wa.me/6285700325917 ; save ya kak` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Nomre hamid`){
dp.sendMessage(from, `nih, wa.me/6285700325917 ; save ya kak` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Nomere hamid ndi`){
dp.sendMessage(from, `nih, wa.me/6285700325917 ; save ya kak` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Nomre hamid`){
dp.sendMessage(from, `nih, wa.me/6285700325917 ; save ya kak` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Males bro`){
dp.sendMessage(from, `Ets, gak boleh males` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Males ah`){
dp.sendMessage(from, `Janganlah jadi orang yg pemales` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Sungkan`){
dp.sendMessage(from, `njir :v` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Sunkan`){
dp.sendMessage(from, `Njir` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Niat kie njoo`){
dp.sendMessage(from, `kemana` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Niat kiee njoo`){
dp.sendMessage(from, `kemana` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Niat kie njo`){
dp.sendMessage(from, `kemana` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Ngarange pol`){
dp.sendMessage(from, `iyo leh, suiirr` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Ngarange por`){
dp.sendMessage(from, `iyo leh, suiirr` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Ngarange pok`){
dp.sendMessage(from, `iyo leh, suiirr` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Ahh sayangðŸ˜˜`){
dp.sendMessage(from, `_Iya sayang ada apa, butuh bantuan;_` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Tidak`){
dp.sendMessage(from, `_Owh_` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `tdk`){
dp.sendMessage(from, `_Owh_` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Nggak`){
dp.sendMessage(from, `_Owh_` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Gak`){
dp.sendMessage(from, `_Owh_` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Ora`){
dp.sendMessage(from, `_Owh_` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Ampun hu`){
dp.sendMessage(from, `_iya say_` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Ampun jat`){
dp.sendMessage(from, `_iya say_` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Ampun mank`){
dp.sendMessage(from, `_iya say_` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Ampun mang`){
dp.sendMessage(from, `_iya say_` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Sok`){
dp.sendMessage(from, `_opone_` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Sok kwe ke`){
dp.sendMessage(from, `_opone_` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Sok kwe`){
dp.sendMessage(from, `_opone_` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Alay`){
dp.sendMessage(from, `_loh kali_` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Say`){
dp.sendMessage(from, `_ada apa panggil-panggil, kangen..?_` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Bot`){
dp.sendMessage(from, `_ada apa panggil-panggil, kangen..?_` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Love you`){
dp.sendMessage(from, `*Love you to*` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Kontol`){
dp.sendMessage(from, `_Ets.. Gak boleh berkata kotor_` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Kontl`){
dp.sendMessage(from, `_Ets.. Gak boleh berkata kotor_` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Memek`){
dp.sendMessage(from, `_Ets.. Gak boleh berkata kotor_` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Babi`){
dp.sendMessage(from, `_Ets.. Gak boleh berkata kotor_` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Babii`){
dp.sendMessage(from, `_Ets.. Gak boleh berkata kotor_` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Asuu`){
dp.sendMessage(from, `_Ets.. Gak boleh berkata kotor_` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Bot Goblok`){
dp.sendMessage(from, `_*Lo yang goblok*_` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Bot Goblk`){
dp.sendMessage(from, `_*Lo yang goblok*_` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Hlh bot taek t iki`){
dp.sendMessage(from, `_lo yang tai, gak bisa cara pakai kok mbacot_` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Bot tai`){
dp.sendMessage(from, `_lo yang tai, gak bisa cara pakai kok mbacot_` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Cok`){
dp.sendMessage(from, `_Cak cok cak cok!, apa cok_` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Gak boleh gitu`){
dp.sendMessage(from, `_Iya kak_` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Kamu baik kan`){
dp.sendMessage(from, `iya. Kamu sendiri?` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Udu`){
dp.sendMessage(from, `Lahh` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Nub`){
dp.sendMessage(from, `Loh yang nub` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Noob`){
dp.sendMessage(from, `loh yang nub` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Jalukan`){
dp.sendMessage(from, `ora popo lah dari pada nyuri` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Asw`){
dp.sendMessage(from, `kmu kali` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Sw`){
dp.sendMessage(from, `Lahh` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `.hentai`){
dp.sendMessage(from, `*Acess Denied* | _Conten harem` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Mid`){
dp.sendMessage(from, ` _opo_` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Sp`){
dp.sendMessage(from, `😉😉` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Sp ki`){
dp.sendMessage(from, `😉😉` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Iki spo`){
dp.sendMessage(from, `😉😉` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Njo`){
dp.sendMessage(from, `_mau kemana bro_` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Njo kpn`){
dp.sendMessage(from, `_kapan apanya bro_` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Njo ra`){
dp.sendMessage(from, `_mau kemana bro_` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Njo raa`){
dp.sendMessage(from, `_mau kemana bro_` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Njo ra sg niat`){
dp.sendMessage(from, `_niat apanya bro_` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Njo raa sg niat`){
dp.sendMessage(from, `_niat apanya bro_` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Iki sopo`){
dp.sendMessage(from, `😉😉` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Iki sopo sih`){
dp.sendMessage(from, `😉😉` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Iki cp`){
dp.sendMessage(from, `😉😉` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Cpo`){
dp.sendMessage(from, `😉😉` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Cpo sih`){
dp.sendMessage(from, `😉😉` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Cp si`){
dp.sendMessage(from, `😉😉` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Sopo`){
dp.sendMessage(from, `😉😉` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Spo`){
dp.sendMessage(from, `😉😉` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Sopo`){
dp.sendMessage(from, `😉😉` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Sp?`){
dp.sendMessage(from, `😉😉` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Kui sp`){
dp.sendMessage(from, `_anda gak perlu tau_` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Kui sp si`){
dp.sendMessage(from, `_anda gak perlu tau_` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Kwi sp`){
dp.sendMessage(from, `_anda gak perlu tau_` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Kwi sp si`){
dp.sendMessage(from, `_anda gak perlu tau_` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Kui nomere sp`){
dp.sendMessage(from, `_anda gak perlu tau_` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Kui nomere sp cah`){
dp.sendMessage(from, `_anda gak perlu tau_` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Kui nomere sopo cah`){
dp.sendMessage(from, `_anda gak perlu tau_` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Kui nomere sopo`){
dp.sendMessage(from, `_anda gak perlu tau_` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Kui nomere spo cah`){
dp.sendMessage(from, `_anda gak perlu tau_` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Kui nomere spo`){
dp.sendMessage(from, `_anda gak perlu tau_` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Nomere sopo kui`){
dp.sendMessage(from, `_anda gak perlu tau_` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Nomere sopo kwi`){
dp.sendMessage(from, `_anda gak perlu tau_` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Nomere spo kui`){
dp.sendMessage(from, `_anda gak perlu tau_` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Nomere spo kwi`){
dp.sendMessage(from, `_anda gak perlu tau_` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Nomre spo kwi`){
dp.sendMessage(from, `_anda gak perlu tau_` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Nomre spo kui`){
dp.sendMessage(from, `_anda gak perlu tau_` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Nomre sopo kwi`){
dp.sendMessage(from, `_anda gak perlu tau_` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Nomre sopo kui`){
dp.sendMessage(from, `_anda gak perlu tau_` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Iki hamid po`){
dp.sendMessage(from, ` yo` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Iki hamid po?`){
dp.sendMessage(from, ` yo` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Iki khamid po`){
dp.sendMessage(from, ` yo` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Iki khamid po`){
dp.sendMessage(from, ` yo` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Iki nomere khamid po`){
dp.sendMessage(from, ` yo` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Iki nomere khamid po?`){
dp.sendMessage(from, ` yo` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Iki hamid po`){
dp.sendMessage(from, ` yo` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Iki nomermu po mid`){
dp.sendMessage(from, ` yo` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `.Sticker`){
dp.sendMessage(from, ` _perntah yang anda masukan salah. gunakan *.stiker*_` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `. Sticker`){
dp.sendMessage(from, ` _perntah yang anda masukan salah. gunakan *.stiker*_` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `. sticker`){
dp.sendMessage(from, ` _perntah yang anda masukan salah. gunakan *.stiker*_` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `.Stiker`){
dp.sendMessage(from, ` _perntah yang anda masukan salah. gunakan *.stiker*_` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Ng umah pora`){
dp.sendMessage(from, `Wait... Menunggu jawaban owner` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Ng umah pora?`){
dp.sendMessage(from, `Wait... Menunggu jawaban owner` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Ng umah pora mid`){
dp.sendMessage(from, `Wait... Menunggu jawaban owner` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Ng omah pora`){
dp.sendMessage(from, `Wait... Menunggu jawaban owner` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Ng omah pora?`){
dp.sendMessage(from, `Wait... Menunggu jawaban owner` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Ng omah pora mid`){
dp.sendMessage(from, `Wait... Menunggu jawaban owner` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Ng ngumah pora`){
dp.sendMessage(from, `Wait... Menunggu jawaban owner` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Ng ngumah pora?`){
dp.sendMessage(from, `Wait... Menunggu jawaban owner` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Ng ngumah pora mid`){
dp.sendMessage(from, `Wait... Menunggu jawaban owner` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Ng ngomah pora`){
dp.sendMessage(from, `Wait... Menunggu jawaban owner` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Ng ngomah pora kwe`){
dp.sendMessage(from, `Wait... Menunggu jawaban owner` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `nngumh pora med`){
dp.sendMessage(from, `Wait... Menunggu jawaban owner` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `ngumh pora med`){
dp.sendMessage(from, `Wait... Menunggu jawaban owner` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Ng ndi`){
dp.sendMessage(from, `Wait... Menunggu jawaban owner` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Ng ndi kwe`){
dp.sendMessage(from, `Wait... Menunggu jawaban owner` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Ng ndi kwe mid`){
dp.sendMessage(from, `Wait... Menunggu jawaban owner` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Kwe iki nangomah pora`){
dp.sendMessage(from, `Wait... Menunggu jawaban owner` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Kwe nandi`){
dp.sendMessage(from, `Wait... Menunggu jawaban owner` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Kwe nang ngendi`){
dp.sendMessage(from, `Wait... Menunggu jawaban owner` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Koe nandi`){
dp.sendMessage(from, `Wait... Menunggu jawaban owner` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Nandi`){
dp.sendMessage(from, `Wait... Menunggu jawaban owner` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Nandi koe`){
dp.sendMessage(from, `Wait... Menunggu jawaban owner` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Nandi kwe`){
dp.sendMessage(from, `Wait... Menunggu jawaban owner` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Nangdi`){
dp.sendMessage(from, `Wait... Menunggu jawaban owner` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Nangdi koe`){
dp.sendMessage(from, `Wait... Menunggu jawaban owner` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Nangdi kwe`){
dp.sendMessage(from, `Wait... Menunggu jawaban owner` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Ndi kaene`){
dp.sendMessage(from, `opone` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Koe ng ngendi`){
dp.sendMessage(from, `Wait... Menunggu jawaban owner` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `La sopo`){
dp.sendMessage(from, `Wait... Menunggu jawaban owner` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `DM aku pok`){
dp.sendMessage(from, `Wait... Menunggu jawaban owner` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Owner`){
dp.sendMessage(from, `Ownernya *Khamid*` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Owner re sopo`){
dp.sendMessage(from, `Ownernya *Khamid*` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Owner re sp`){
dp.sendMessage(from, `Ownernya *Khamid*` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Ownere sopo`){
dp.sendMessage(from, `Ownernya *Khamid*` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Ownere spo`){
dp.sendMessage(from, `Ownernya *Khamid*` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Ownere sp`){
dp.sendMessage(from, `Ownernya *Khamid*` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Spo ownere`){
dp.sendMessage(from, `Ownernya *Khamid*` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Spo owner e`){
dp.sendMessage(from, `Ownernya *Khamid*` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Spo owner ke`){
dp.sendMessage(from, `Ownernya *Khamid*` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Sopo ownere`){
dp.sendMessage(from, `Ownernya *Khamid*` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Sopo owner e`){
dp.sendMessage(from, `Ownernya *Khamid*` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Sopo owner ke`){
dp.sendMessage(from, `Ownernya *Khamid*` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Siapa owner`){
dp.sendMessage(from, `Ownernya *Khamid*` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Siapa ownernya`){
dp.sendMessage(from, `Ownernya *Khamid*` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Owner ke opo`){
dp.sendMessage(from, `_Bisa di bilang Owner adalah pemilik dari Suatu hal(seperti: proyek, perusahaan, dll)._ kurang lebih seperti itu` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Apa itu owner`){
dp.sendMessage(from, `_Bisa di bilang Owner adalah pemilik dari Suatu hal(seperti: proyek, perusahaan, dll)._ kurang lebih seperti itu` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Opo kui cok`){
dp.sendMessage(from, ` _mosok ra reti_` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Pancen ra reti`){
dp.sendMessage(from, ` _belajar ra, men pinter_` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Pncn ra reti`){
dp.sendMessage(from, ` _belajar ra, men pinter_` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Pancn ra reti`){
dp.sendMessage(from, ` _belajar ra, men pinter_` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `La wes pinter kok`){
dp.sendMessage(from, ` _owh gitu ya_` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `La ws pinter kok`){
dp.sendMessage(from, ` _owh gitu ya_` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Sok indo`){
dp.sendMessage(from, ` _kan orang Indonesia_` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Sok indo bahasne`){
dp.sendMessage(from, ` _kan orang Indonesia_` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Sok indo bhsne`){
dp.sendMessage(from, ` _kan orang Indonesia_` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Sok indo koe sak iki mid`){
dp.sendMessage(from, ` _kan orang Indonesia_` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `La ngopo koe mid`){
dp.sendMessage(from, ` _ngopo yo_` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `La ngopo kwe ke mid`){
dp.sendMessage(from, ` _ngopo yo_` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `La ngopo koe ke mid`){
dp.sendMessage(from, ` _ngopo yo_` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `La ngopo kwe mid`){
dp.sendMessage(from, ` _ngopo yo_` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `La ngpo koe mid`){
dp.sendMessage(from, ` _ngopo yo_` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `La ngpo kwe mid`){
dp.sendMessage(from, ` _ngopo yo_` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Dih milu milu` ){
dp.sendMessage(from, `iyo ra` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Kam`){
dp.sendMessage(from, ` _Maaf, kalimat *undefined* coba perintah yang lain _` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Help`){
dp.sendMessage(from, ` Why` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Parah robot`){
dp.sendMessage(from, `mending robot daripada sampah woy` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Robot kui`){
dp.sendMessage(from, ` kalo robot kenapa` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Robot kwi`){
dp.sendMessage(from, ` kalo robot kenapa` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Parah komputer`){
dp.sendMessage(from, `Masalah buat loh...?` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Bot`){
dp.sendMessage(from, ` Ada apa panggil-panggil. ketik *.menu* untuk melihat fitur kami` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `bot`){
dp.sendMessage(from, ` Ada apa panggil-panggil, kangen ya` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Bangsat`){
dp.sendMessage(from, ` ets, gak boleh berkata kasar` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Asu`){
dp.sendMessage(from, `ga boleh ngomong kasar tau` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Asuu`){
dp.sendMessage(from, `ga boleh ngomong kasar tau` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Celeng`){
dp.sendMessage(from, `ga boleh ngomong kasar tau` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Celng`){
dp.sendMessage(from, `ga boleh ngomong kasar tau` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `p`){
dp.sendMessage(from, ` _Iya... aku disini kak... ada yang bisa kami bantu? Ketik *.menu* untuk melihat fitur bot kami_ ` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `P`){
dp.sendMessage(from, ` _Iya... aku disini kak... ada yang bisa kami bantu? Ketik *.menu* untuk melihat fitur bot kami_ ` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Halo`){
dp.sendMessage(from, ` _Iya... aku disini kak... ada yang bisa kami bantu? Ketik *.menu* untuk melihat fitur bot kami_ ` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Hello`){
dp.sendMessage(from, ` _Iya... aku disini kak... ada yang bisa kami bantu? Ketik *.menu* untuk melihat fitur bot kami_ ` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Hallo`){
dp.sendMessage(from, ` _Iya... aku disini kak... ada yang bisa kami bantu? Ketik *.menu* untuk melihat fitur bot kami_ ` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Hai bot`){
dp.sendMessage(from, ` Hai Juga kak ` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Hay bot`){
dp.sendMessage(from, ` Hay Juga kak ` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `#menu`){
dp.sendMessage(from, ` Mungkin maksud anda *.menu* ` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `*.menu*`){
dp.sendMessage(from, `Untuk menggunakan perintah, teks jangan dipertebal` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `*.rules*`){
dp.sendMessage(from, `Untuk menggunakan perintah, teks jangan dipertebal` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `*.help*`){
dp.sendMessage(from, `Untuk menggunakan perintah, teks jangan dipertebal` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `#help`){
dp.sendMessage(from, ` Mungkin maksud anda *.help* ` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Pagi`){
dp.sendMessage(from, ` _Pagi juga Kakak... ada yang bisa kami bantu? Ketik *.menu* untuk melihat fitur bot kami_ ` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Siang`){
dp.sendMessage(from, ` _Siang juga Kakak... ada yang bisa kami bantu? Ketik *.menu* untuk melihat fitur bot kami_ ` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Sore`){
dp.sendMessage(from, ` _Sore juga Kakak... ada yang bisa kami bantu? Ketik *.menu* untuk melihat fitur bot kami_ ` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Malam`){
dp.sendMessage(from, ` _Malam juga Kakak... ada yang bisa kami bantu? Ketik *.menu* untuk melihat fitur bot kami_ ` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Ngentod`){
dp.sendMessage(from, `Pengin ngentod? babi looo` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Anjing`){
dp.sendMessage(from, `Ets, gak boleh gitu` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Bacot`){
dp.sendMessage(from, ` *lu yang bacot_-* ` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Test`){
dp.sendMessage(from, ` _Iya... aku disini kak... ada yang bisa kami bantu? Ketik *.menu* untuk melihat fitur bot kami_ ` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Med`){
dp.sendMessage(from, ` _Maaf, kalimat undefined coba perintah yang lain_` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Hai`){
dp.sendMessage(from, ` _Iya... aku disini kak... ada yang bisa kami bantu? Ketik *.menu* untuk melihat fitur bot kami_ ` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Hay`){
dp.sendMessage(from, ` _Iya... aku disini kak... ada yang bisa kami bantu? Ketik *.menu* untuk melihat fitur bot kami_ ` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Hy`){
dp.sendMessage(from, ` _Iya... aku disini kak... ada yang bisa kami bantu? Ketik *.menu* untuk melihat fitur bot kami_ ` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Woi`){
dp.sendMessage(from, ` _Iya... aku disini kak... ada yang bisa kami bantu? Ketik *.menu* untuk melihat fitur bot kami_ ` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Woy`){
dp.sendMessage(from, ` _Iya... aku disini kak... ada yang bisa kami bantu? Ketik *.menu* untuk melihat fitur bot kami_ ` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Hi`){
dp.sendMessage(from, ` _Iya... aku disini kak... ada yang bisa kami bantu? Ketik *.menu* untuk melihat fitur bot kami_ `  ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Gan`){
dp.sendMessage(from, ` _Iya... aku disini kak... ada yang bisa kami bantu? Ketik *.menu* untuk melihat fitur bot kami_ ` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Sis`){
dp.sendMessage(from, ` _Iya... aku disini kak... ada yang bisa kami bantu? Ketik *.menu* untuk melihat fitur bot kami_ ` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Bro`){
dp.sendMessage(from, ` _Iya... aku disini kak... ada yang bisa kami bantu? Ketik *.menu* untuk melihat fitur bot kami_ ` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Min`){
dp.sendMessage(from, ` _Iya... aku disini kak... ada yang bisa kami bantu? Ketik *.menu* untuk melihat fitur bot kami_ ` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Sayang`){
dp.sendMessage(from, ` _Iya sayang ada apa? ada yang bisa kami bantu? Ketik *.menu* untuk melihat fitur bot kami_ ` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `I love u`){
dp.sendMessage(from, ` _love you too😘😘_ ` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Love u`){
dp.sendMessage(from, ` _love you too😘😘_ ` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Love you`){
dp.sendMessage(from, ` _love you too😘😘_ ` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Love you sayang`){
dp.sendMessage(from, ` _love you too😘😘_ ` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Love you yang`){
dp.sendMessage(from, ` _love you too😘😘_ ` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Beb`){
dp.sendMessage(from, ` _Iya beb ada apa, kangen ya,  main yuk, gunakan _*.menu* untuk melihat fitur bot kami` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Bebep`){
dp.sendMessage(from, ` _Iya beb ada apa, kangen ya,  main yuk, gunakan _*.menu* untuk melihat fitur bot kami` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Mas`){
dp.sendMessage(from, ` _Iya... aku disini kak... ada yang bisa kami bantu? Ketik *.menu* untuk melihat fitur bot kami_ ` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Kak`){
dp.sendMessage(from, `_Iya... aku disini kak... ada yang bisa kami bantu? Ketik *.menu* untuk melihat fitur bot kami_ `,MessageType.text, { quoted: kmd} );
}
else if (budy == `Mba`){
dp.sendMessage(from, ` _Jangan panggil mba_ ` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Bre`){
dp.sendMessage(from, ` _Iya... aku disini kak... ada yang bisa kami bantu? Ketik *.menu* untuk melihat fitur bot kami_ ` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Cah`){
dp.sendMessage(from, ` _Iya... ada apa..? ada yang bisa kami bantu? Ketik *.menu* untuk melihat fitur bot kami_  ` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Cuy`){
dp.sendMessage(from, ` _Iya... aku disini kak... ada yang bisa kami bantu? Ketik *.menu* untuk melihat fitur bot kami_ ` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Euy`){
dp.sendMessage(from, ` _Iya... aku disini kak... ada yang bisa kami bantu? Ketik *.menu* untuk melihat fitur bot kami_ ` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Oy`){
dp.sendMessage(from, `apa oy` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Nyari orang`){
dp.sendMessage(from, `klik link ini kak https://www.cyberklik.com/2021/01/melacak-seluruh-akun-sosial-media-seseorang.html` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Cari orang`){
dp.sendMessage(from, `klik link ini kak https://www.cyberklik.com/2021/01/melacak-seluruh-akun-sosial-media-seseorang.html` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Gimana ini`){
dp.sendMessage(from, `Gimana apanya kak` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Gimana ni`){
dp.sendMessage(from, `Gimana apanya kak` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Gimana nih`){
dp.sendMessage(from, `Gimana apanya kak` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Bisa bikin stiker`){
dp.sendMessage(from, `Untuk membuat stiker gunakan perintah *.stiker*` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Buat stiker`){
dp.sendMessage(from, `Untuk membuat stiker gunakan perintah *.stiker*` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Stiker`){
dp.sendMessage(from, `Untuk membuat stiker gunakan perintah *.stiker*` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Bikinin stiker dong`){
dp.sendMessage(from, `Untuk membuat stiker gunakan perintah *.stiker*` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Mksh`){
dp.sendMessage(from, ` _Sama sama, semoga harimu menyenangkan :)_ ` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Makasi`){
dp.sendMessage(from, ` _Sama sama, semoga harimu menyenangkan :)_ ` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `makasih`){
dp.sendMessage(from, ` _Sama sama, semoga harimu menyenangkan :)_ ` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Makasih`){
dp.sendMessage(from, ` _Sama sama, semoga harimu menyenangkan :)_ ` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `mksh`){
dp.sendMessage(from, ` _Sama sama, semoga harimu menyenangkan :)_ ` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Thank`){
dp.sendMessage(from, ` _Sama sama, semoga harimu menyenangkan :)_ ` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `thanks`){
dp.sendMessage(from, ` _Sama sama, semoga harimu menyenangkan :)_ ` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Thanks`){
dp.sendMessage(from, ` _Sama sama, semoga harimu menyenangkan :)_ ` ,MessageType.text, { quoted: kmd} );
}
else if (budy == `Thanks`){
dp.sendMessage(from, ` _Sama sama, semoga harimu menyenangkan :)_ ` ,MessageType.text, { quoted: kmd} );
}
// end chat

//-
//ATM
            if (isGroup ) {
            const checkATM = checkATMuser(sender)
            try {
                if (checkATM === undefined) addATM(sender)
                const uangsaku = Math.floor(Math.random() * 10) + 90
                addKoinUser(sender, uangsaku)
            } catch (err) {
                console.error(err)
            }
        }
        
//-
//ANTILINK
                if (messagesC.match("://chat.whatsapp.com/")){
		        if (!isGroup) return
		        if (!isAntiLink) return
		        if (kmd.key.fromMe) return reply('karena kamu adalah owner, bot tidak akan kick kamu')
		        dp.updatePresence(from, Presence.composing)
		        if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Link Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 3 detik lagi`)
		        setTimeout( () => {
		        dp.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		        }, 3000)
		        setTimeout( () => {
		        dp.updatePresence(from, Presence.composing)
		        reply("1detik")
		        }, 2000)
		        setTimeout( () => {
			    dp.updatePresence(from, Presence.composing)
			    reply("2detik")
		        }, 1000)
		        setTimeout( () => {
			    dp.updatePresence(from, Presence.composing)
			    reply("3detik")
		        }, 0)
	            }
//-
//ANTIVIRTEX
	            if (messagesC.match("ผิดุท้่เึางืผิดุท้่เึาง")){
		        if (!isGroup) return
		        if (!isAntiVirtex) return
		        if (kmd.key.fromMe) return reply('karena kamu adalah owner, bot tidak akan kick kamu')
		        dp.updatePresence(from, Presence.composing)
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Virtex terdeteksi ${sender.split("@")[0]} anda akan di kick dari group 3 detik lagi`)
		        setTimeout( () => {
		        dp.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		        }, 3000)
		        setTimeout( () => {
		        dp.updatePresence(from, Presence.composing)
		        reply("1detik")
		        }, 2000)
		        setTimeout( () => {
			    dp.updatePresence(from, Presence.composing)
			    reply("2detik")
		        }, 1000)
		        setTimeout( () => {
			    dp.updatePresence(from, Presence.composing)
			    reply("3detik")
		        }, 0)
	            }
	            if (messagesC.match("৭৭৭৭৭৭৭৭")){
		        if (!isGroup) return
		        if (!isAntiVirtex) return
		        if (kmd.key.fromMe) return reply('karena kamu adalah owner, bot tidak akan kick kamu')
		        dp.updatePresence(from, Presence.composing)
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Virtex terdeteksi ${sender.split("@")[0]} anda akan di kick dari group 3 detik lagi`)
		        setTimeout( () => {
		        dp.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		        }, 3000)
		        setTimeout( () => {
		        dp.updatePresence(from, Presence.composing)
		        reply("1detik")
		        }, 2000)
		        setTimeout( () => {
			    dp.updatePresence(from, Presence.composing)
			    reply("2detik")
		        }, 1000)
		        setTimeout( () => {
			    dp.updatePresence(from, Presence.composing)
			    reply("3detik")
		        }, 0)
	            }
	            if (messagesC.match("๒๒๒๒๒๒๒๒")){
		        if (!isGroup) return
		        if (!isAntiVirtex) return
		        if (kmd.key.fromMe) return reply('karena kamu adalah owner, bot tidak akan kick kamu')
		        dp.updatePresence(from, Presence.composing)
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Virtex terdeteksi ${sender.split("@")[0]} anda akan di kick dari group 3 detik lagi`)
		        setTimeout( () => {
		        dp.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		        }, 3000)
		        setTimeout( () => {
		        dp.updatePresence(from, Presence.composing)
		        reply("1detik")
		        }, 2000)
		        setTimeout( () => {
			    dp.updatePresence(from, Presence.composing)
			    reply("2detik")
		        }, 1000)
		        setTimeout( () => {
			    dp.updatePresence(from, Presence.composing)
			    reply("3detik")
		        }, 0)
	            }
	            if (messagesC.match("๑๑๑๑๑๑๑๑")){
		        if (!isGroup) return
		        if (!isAntiVirtex) return
		        if (kmd.key.fromMe) return reply('karena kamu adalah owner, bot tidak akan kick kamu')
		        dp.updatePresence(from, Presence.composing)
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Virtex terdeteksi ${sender.split("@")[0]} anda akan di kick dari group 3 detik lagi`)
		        setTimeout( () => {
		        dp.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		        }, 3000)
		        setTimeout( () => {
		        dp.updatePresence(from, Presence.composing)
		        reply("1detik")
		        }, 2000)
		        setTimeout( () => {
			    dp.updatePresence(from, Presence.composing)
			    reply("2detik")
		        }, 1000)
		        setTimeout( () => {
			    dp.updatePresence(from, Presence.composing)
			    reply("3detik")
		        }, 0)
	            }
//-
//MEMBER LIMIT
           if (isGroup) {
					try {
						const getmemex = groupMembers.length	
					    if (getmemex <= memberlimit) {
						reply(`hmmm... sorry bro member minimal ${memberlimit} gw bakal keluar 5 detik lagi`)
						setTimeout( () => {
 	                           dp.groupLeave(from) 
 					   	}, 5000)
								setTimeout( () => {
								dp.updatePresence(from, Presence.composing)
								reply("1")
							}, 4000)
								setTimeout( () => {
								dp.updatePresence(from, Presence.composing)
								reply("2")
							}, 3000)
								setTimeout( () => {
								dp.updatePresence(from, Presence.composing)
								reply("3")
							}, 2000)
								setTimeout( () => {
								dp.updatePresence(from, Presence.composing)
								reply("4")
							}, 1000)
								setTimeout( () => {
								dp.updatePresence(from, Presence.composing)
								reply("5")
							}, 0)
					    }
		       } catch (err) { console.error(err)  }
 	       }
//-
//BADWORD
        if (bad.includes(messagesLink)) {
		if (!isGroup) return
		if (kmd.key.fromMe) return reply('karena kamu adalah owner, bot tidak akan kick kamu')
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		setTimeout( () => {
		reply(`sᴀʏᴏɴᴀʀᴀ ʙᴇʙᴀɴ ɢʀᴜᴘ`)
		}, 100)
		setTimeout( () => {
		dp.groupRemove(from, [Kick]).catch((e) => {reply(`ERROR: ${e}`)}) 
		}, 10)
		setTimeout( () => {
		reply(`_「 ʙᴀᴅᴡᴏʀᴅ ᴅᴇᴛᴇᴄᴛᴇᴅ 」_\nᴍᴀᴀғ ${pushname} ᴀɴᴅᴀ ʙᴇʀʙɪᴄᴀʀᴀ ᴋᴏᴛᴏʀ!, ᴀɴᴅᴀ ꜱᴇɢᴇʀᴀ ᴅɪᴋɪᴄᴋ ᴅᴀʀɪ ɢʀᴜᴘ ${groupMetadata.subject}`)
		}, 0)
		}
			colors = ['red','white','black','blue','yellow','green']
			
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			
		    if (!isGroup && !isCmd) console.log(color(time, "white"), color("[ PRIVATE ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "red"))
            if (isGroup && !isCmd) console.log(color([time], "white"), color("[  GROUP  ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "red"), "in", color(groupName, "white"))
            if (!isGroup && isCmd) console.log(color([time], "white"), color("[ COMMAND ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "red"))
            if (isGroup && isCmd) console.log(color([time], "white"), color("[ COMMAND ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "red"), "in", color(groupName, "white"))
            //
            //FUNCTION TAKESTICK
            function addMetadata(packname, author) {
				if (!packname) packname = `@${namabot}`; if (!author) author = `${namaowner}`;	
				author = author.replace(/[^a-zA-Z0-9]/g, '');	
				let name = `${author}_${packname}`
				if (fs.existsSync(`./sticker/${name}.exif`)) return `./sticker/${name}.exif`
				const json = {	
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

				let len = JSON.stringify(json).length	
				let last	

				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)	
				} else {	
					bytes.unshift(0x00)	
				}	

				if (len < 16) {	
					last = len.toString(16)	
					last = "0" + len	
				} else {	
					last = len.toString(16)	
				}	

				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	

				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

				fs.writeFile(`./sticker/${name}.exif`, buffer, (err) => {	
					return `./sticker/${name}.exif`	
				})	

			}
//-
//CASE
			switch(command) {
//==========================================BATES NGAB==========================================\\
//DASAR MENU
                case 'admin':
                case 'owner':
                case 'creator':
                case 'developer':
                if (!isUser) return reply(dpuhy.noregis())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
                if (isBanned) return reply(dpuhy.baned())
                dp.sendMessage(from, {displayname: `${namaowner}ツ`, vcard: vcard1}, MessageType.contact, {quoted: freply})
                dp.sendMessage(from, 'Tuh nomer owner ku😎 jangan dispam yak',MessageType.text, {quoted: freply})
                break
                case 'limit':
                checkLimit(sender)
		        break
				case 'test':
                if (!isUser) return reply(dpuhy.noregis())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
                if (isBanned) return reply(dpuhy.baned())
			    dp.sendMessage(from, 'Active',MessageType.text, {quoted: fkontak})
				break
				case 'speed':
		        case 'ping':
                if (!isUser) return reply(dpuhy.noregis())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
                if (isBanned) return reply(dpuhy.baned())
                const processsTime = (timestamp, now) => {
                return moment.duration(now - moment(timestamp * 1000)).asSeconds()
                }
                reply(`Speed : ${processsTime(kmd.messageTimestamp.low, moment())} _second_`)
                break
				case 'donasi':
		        case 'donate':
                if (!isUser) return reply(dpuhy.noregis())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
                if (isBanned) return reply(dpuhy.baned())
				dp.sendMessage(from, donasi(), text, {quoted: fkontak})
				break
		        case 'developer':
				case 'infoowner':
		        case 'infodeveloper':
		        case 'infopengembang':
                if (!isUser) return reply(dpuhy.noregis())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
                if (isBanned) return reply(dpuhy.baned())
				dp.sendMessage(from, infown(), text, {quoted: fkontak})
				break
				case 'bahasa':
                if (!isUser) return reply(dpuhy.noregis())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
                if (isBanned) return reply(dpuhy.baned())
				dp.sendMessage(from, bahasa(), text, {quoted: fkontak})
			    await limitAdd(sender)
				break
		        case 'kodenegara':
                if (!isUser) return reply(dpuhy.noregis())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
                if (isBanned) return reply(dpuhy.baned())
				dp.sendMessage(from, negara(), text, {quoted: fkontak})
				await limitAdd(sender)
				break
				case 'laporbug':
				case 'report':
                if (isBanned) return reply(dpuhy.baned())
                if (args.length < 1) return reply(`Apa yang mau direport ke owner?`)
				const pesan = body.slice(8)
				var nomor = kmd.participant
				const teks1 = `[REPORT]\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${pesan}`
				var options = {
				text: teks1,
				contextInfo: {mentionedJid: [nomor]},
				}
				dp.sendMessage(`${nomerlu}@s.whatsapp.net`, options, text, {quoted: fkontak})
				reply('[❗] Masalah telah dilaporkan ke owner Bot, Laporan palsu/main - main akan ban permanent!!')
				break
				case 'saran':
                if (isBanned) return reply(dpuhy.baned())
                if (args.length < 1) return reply(`Apa yang mau disarankan ke owner?`)
				const psn = body.slice(7)
				var nmr = kmd.participant
				const tks1 = `[SARAN]\nNomor : @${nmr.split("@s.whatsapp.net")[0]}\nPesan : ${psn}`
				var options = {
				text: tks1,
				contextInfo: {mentionedJid: [nmr]},
				}
				dp.sendMessage(`${nomerlu}@s.whatsapp.net`, options, text, {quoted: fkontak})
				reply(`[❗] Saran telah dilaporkan ke owner Bot, Terimakasih ${pushname}`)
				break
				case 'verify':
				case 'daftar':
				if (isUser) return reply(dpuhy.rediregis())
				const SeriTod = bikinSerial(20)
				veri = sender
				user.push(sender)
				fs.writeFileSync('./database/user.json', JSON.stringify(user))
				JadiUser(sender, SeriTod)
				const kentod = 
`
╭─「 PENDAFTARAN USER 」
│${a}Pendaftaran Berhasil Dengan${a}
│${a}SN: ${SeriTod}${a}
│${a}Pada ${date} ${time}${a}
│${a}Nama: ${pushname}${a}
│${a}Nomor: wa.me/${sender.split("@")[0]}${a}
│${a}Untuk Menggunakan Bot${a}
│${a}Silahkan Kirim ${prefix}menu${a}
│${a}atau Kirim ${prefix}help${a}
│${a}Total Pengguna: 1.033 Orang${a}
╰─────────────────────────
`

                dp.sendMessage(from, MessageType.text, { quoted: kmd, caption: kentod })
                break
		        case 'del':
		        case 'd':
		        case 'delete':
		        case 'hapus':
                if (!kmd.key.fromMe) return reply(dpuhy.ownerb())
                if (!isUser) return reply(dpuhy.noregis())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
                if (isBanned) return reply(dpuhy.baned())
				dp.deleteMessage(from, { id: kmd.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
				break
				case 'info':
                if (!isUser) return reply(dpuhy.noregis())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
                if (isBanned) return reply(dpuhy.baned())
				me = dp.user
				uptime = process.uptime()
				teks = `INFO OWNER\nOwner bot : ${namaowner}ツ\nNo Owner : ${nomerlu}\nIg owner : ${igstah}\n━━━━━━━━━━━━━━━━━━━━\nINFO BOT\nNama bot : ${namabot}\nNomor bot : @${me.jid.split('@')[0]}\nPrefix : ${prefix}\nRam ${RAM}\nTotal block contact : ${blocked.length}\nThe bot is active on : ${kyun(uptime)}\nKetik : ${prefix}report _Untuk melaporkan bug ke admin bot melalui bot_\nKetik : ${prefix}owner untuk menghubungi admin bot kami.`
				buffer = await getBuffer(me.imgUrl)
				dp.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
				break
				case 'snk':
		        case 'peraturan':
                if (!isUser) return reply(dpuhy.noregis())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
                if (isBanned) return reply(dpuhy.baned())
		        dp.sendMessage(from, snk(), text, {quoted: fkontak})
		        break
//==========================================BATES NGAB==========================================\\
//MENU
                case 'menu':
                if (!isUser) return reply(dpuhy.noregis())
                if (isBanned) return reply(dpuhy.baned())
                dapuhy = `
╔════════════════════✿
║ *SIMPLE MENU KMD BOT*
╠════════════════════✿
║╭───❉ *TENTANG BOT* ❉───
║│➥ *${prefix}help*
║│➥ *${prefix}info*
║│➥ *${prefix}owner*
║│➥ *${prefix}donasi*
║│➥ *${prefix}report*
║│➥ *${prefix}dompet*
║│➥ *${prefix}sewabot*
║╰──────────────
║╭───❉ *MEDIA* ❉────────
║│➥ *${prefix}ttp*
║│➥ *${prefix}ttp2*
║│➥ *${prefix}ttp3*
║│➥ *${prefix}ocr*
║│➥ *${prefix}toimg*
║│➥ *${prefix}stiker*
║│➥ *${prefix}semoji*
║│➥ *${prefix}fakektp*
║│➥ *${prefix}petriks*
║│➥ *${prefix}translate*
║╰──────────────
║╭───❉ *DOWNLOAD* ❉─────
║│➥ *${prefix}play*
║│➥ *${prefix}ytplay*
║│➥ *${prefix}ytplay2*
║│➥ *${prefix}ytmp3* [linkYt]
║│➥ *${prefix}ytmp4* [linkYt]
║│➥ *${prefix}fbdl* [linkFb]
║│➥ *${prefix}tiktokmusic* [linkTiktok]
║│➥ *${prefix}tiktoknowm* [linkTiktok]
║╰──────────────
║╭───❉ *MAKER MENU* ❉─────
║│➥ *${prefix}gta*
║│➥ *${prefix}love*
║│➥ *${prefix}lampu* 
║│➥ *${prefix}bokeh* 
║│➥ *${prefix}snow3d*
║│➥ *${prefix}thunder* 
║│➥ *${prefix}avenger*
║│➥ *${prefix}juventus*
║│➥ *${prefix}ninjalogo* 
║│➥ *${prefix}blackpink*
║│➥ *${prefix}hartatahta*
║│➥ *${prefix}marvelstudio*
║│➥ *${prefix}underwater*
║│➥ *${prefix}anonymhacker* 
║│➥ *${prefix}makermenu* (selengkapnya) 
║╰──────────────
║╭───❉ *ISLAMI MENU* ❉─────
║│➥ *${prefix}alquran*
║│➥ *${prefix}kisahnabi*
║│➥ *${prefix}listsurah*
║│➥ *${prefix}asmaulhusna*
║│➥ *${prefix}jadwalsholat*
║╰──────────────
║╭───❉ *FUN MENU* ❉─────
║│➥ *${prefix}tebakkata*
║│➥ *${prefix}family100*
║│➥ *${prefix}caklontong*
║│➥ *${prefix}tebakgambar*
║│➥ *${prefix}deteksiumur*
║│➥ *${prefix}deteksigender*
║│➥ *${prefix}weton*
║│➥ *${prefix}truth*
║│➥ *${prefix}dare*
║│➥ *${prefix}rate*
║│➥ *${prefix}apakah*
║│➥ *${prefix}bisakah*
║│➥ *${prefix}kapankah*
║│➥ *${prefix}gaycek*
║│➥ *${prefix}cantikcek*
║│➥ *${prefix}gantengcek*
║│➥ *${prefix}jadian*
║╰──────────────
║╭───❉ *INFORMASI* ❉─────
║│➥ *${prefix}hoax*
║│➥ *${prefix}wiki*
║│➥ *${prefix}cuaca*
║│➥ *${prefix}kodepos*
║│➥ *${prefix}newsinfo*
║│➥ *${prefix}jadwaltv*
║│➥ *${prefix}infogempa*
║│➥ *${prefix}jadwalbola*
║│➥ *${prefix}indbeasiswa*
║│➥ *${prefix}jadwaltvnow*
║│➥ *${prefix}cnnindonesia*
║│➥ *${prefix}cnninternasional*
║╰──────────────
║╭───❉ *SEARCHING* ❉────
║│➥ *${prefix}heroml*
║│➥ *${prefix}shopee*
║│➥ *${prefix}google*
║│➥ *${prefix}brainly*
║│➥ *${prefix}ytsearch*
║│➥ *${prefix}carifoto*
║│➥ *${prefix}playstore*
║╰──────────────
║╭───❉ *GRUP* ❉─────
║│➥ *${prefix}add*
║│➥ *${prefix}kick*
║│➥ *${prefix}promote*
║│➥ *${prefix}demote*
║│➥ *${prefix}setname*
║│➥ *${prefix}setdesc*
║│➥ *${prefix}welcome*
║│➥ *${prefix}grup* [buka/tutup]
║│➥ *${prefix}tagall*
║│➥ *${prefix}linkgrup*
║│➥ *${prefix}listadmin*
║│➥ *${prefix}edotense*
║│➥ *${prefix}kudeta*
║╰──────────────
║╭───❉ *OWNER MENU* ❉─────
║│➥ *${prefix}resetlimit
║│➥ *${prefix}setprefix
║│➥ *${prefix}setlimit
║│➥ *${prefix}setmemlimit
║│➥ *${prefix}addbadword
║│➥ *${prefix}delbadword
║│➥ *${prefix}setppbot
║│➥ *${prefix}leave
║│➥ *${prefix}block*
║│➥ *${prefix}unblock*
║│➥ *${prefix}clearall*
║│➥ *${prefix}leave*
║╰──────────────
╠════════════════════✿
║ _*Created By @Khamid*_
╚════════════════════✿

`
                await dappauhuy(dapuhy, MessageType.text, tescuk, `「 ${namabot} 」\n Created By @${namaowner}`)
                break

                case 'help':
                if (!isUser) return reply(dpuhy.noregis())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
                if (isBanned) return reply(dpuhy.baned())
                dapuhy = `
${a}「 KMD BOT 」${a}

${a}◪ YOUR INFO${a}
❒ Limit : ${ind} / Day
❒ Role : ${role}${a}
❒ Status : ${premi}
❒ Nomer : ${sender.split("@")[0]}

${a}Waktu : ${tampilHari} (WIB)${a}

Jam : ${time} WIB⌚
Jam : ${wit} WIT⌚
Jam : ${wita} WITA⌚

${a}Hari : ${tampilTanggal}${a}

${a}◪ MENU${a}
${a}│${a}
${a}├─ ❏ ${prefix}funmenu${a}
${a}├─ ❏ ${prefix}makermenu${a}
${a}├─ ❏ ${prefix}mediamenu${a}
${a}├─ ❏ ${prefix}islammenu${a}
${a}├─ ❏ ${prefix}groupmenu${a}
${a}├─ ❏ ${prefix}ownermenu${a}
${a}├─ ❏ ${prefix}downloadmenu${a}
${a}├─ ❏ ${prefix}informasimenu${a}
${a}├─ ❏ ${prefix}searchingmenu${a}
${a}│${a}
${a}${prefix}snk${a}
${a}${prefix}report${a} <text>
${a}${prefix}saran${a} <text>
${a}${prefix}infoowner${a}
${a}${prefix}info${a}
${a}${prefix}donasi${a}
${a}${prefix}ping${a}
${a}${prefix}speed${a}
${a}${prefix}owner${a}
${a}${prefix}test${a}
${a}${prefix}limit${a} (cek limit)

`

                await dappauhuy(dapuhy, MessageType.text, tescuk, `「 ${namabot} 」\n Created By @${namaowner}`)
                break
                case 'grupmenu':
                case 'grubmenu':
                case 'groupmenu':
                if (!isUser) return reply(dpuhy.noregis())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
                if (isBanned) return reply(dpuhy.baned())
                if (!isGroup) return reply(dpuhy.groupo())
                dapuhy = `
${a}◪ GROUP MENU${a}
${a}║│${a}
║│─ ❏ *${prefix}add*
║│─ ❏ *${prefix}kick*
║│─ ❏ *${prefix}promote*
║│─ ❏ *${prefix}demote*
║│─ ❏ *${prefix}setname*
║│─ ❏ *${prefix}setdesc*
║│─ ❏ *${prefix}welcome*
║│─ ❏ *${prefix}grup* [buka/tutup]
║│─ ❏ *${prefix}tagall*
║│─ ❏ *${prefix}linkgrup*
║│─ ❏ *${prefix}listadmin*
║│─ ❏ *${prefix}edotense*
║│─ ❏ *${prefix}kudeta*
║╰──────────────
╚════════════════════
` 

                await dappauhuy(dapuhy, MessageType.text, tescuk, `「 ${namabot} 」\n Created By @${namaowner}`)
                break
                case 'ownermenu':
                if (!isUser) return reply(dpuhy.noregis())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
                if (isBanned) return reply(dpuhy.baned())
                dapuhy = `
╭─── ◪*OWNER MENU*◪ ─────
│➥ *${prefix}leave*
│➥ *${prefix}block*
│➥ *${prefix}unblock*
│➥ *${prefix}setppbot
│➥ *${prefix}clearall*
│➥ *${prefix}setlimit*
│➥ *${prefix}setprefix
│➥ *${prefix}resetlimit
│➥ *${prefix}addbadword
│➥ *${prefix}delbadword
│➥ *${prefix}setmemlimit
╰──────────────
` 

                await dappauhuy(dapuhy, MessageType.text, tescuk, `「 ${namabot} 」\n Created By @${namaowner}`)
                break
                case 'islammenu':
                if (!isUser) return reply(dpuhy.noregis())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
                if (isBanned) return reply(dpuhy.baned())
                dapuhy = `
╭───◪ *ISLAMI MENU* ◪─────
│➥ *${prefix}alquran*
│➥ *${prefix}kisahnabi*
│➥ *${prefix}listsurah*
│➥ *${prefix}asmaulhusna*
│➥ *${prefix}jadwalsholat*
╰───────────────
` 

                await dappauhuy(dapuhy, MessageType.text, tescuk, `「 ${namabot} 」\n Created By @${namaowner}`)
                break
                case 'downloadmenu':
                if (!isUser) return reply(dpuhy.noregis())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
                if (isBanned) return reply(dpuhy.baned())
                dapuhy = `
╭───◪ *DOWNLOADER* ◪───
│➥ *${prefix}play*
│➥ *${prefix}ytplay*
│➥ *${prefix}ytplay2*
│➥ *${prefix}ytmp3* [linkYt]
│➥ *${prefix}ytmp4* [linkYt]
│➥ *${prefix}fbdl* [linkFb]
│➥ *${prefix}tiktokmusic* [linkTiktok]
│➥ *${prefix}tiktoknowm* [linkTiktok]
╰─────────────────
` 

                await dappauhuy(dapuhy, MessageType.text, tescuk, `「 ${namabot} 」\n Created By @${namaowner}`)
                break
                case 'informasimenu':
                case 'informationmenu':
                if (!isUser) return reply(dpuhy.noregis())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
                if (isBanned) return reply(dpuhy.baned())
                dapuhy = `
╭───◪ *INFORMASI* ◪─────
│➥ *${prefix}hoax*
│➥ *${prefix}wiki*
│➥ *${prefix}cuaca*
│➥ *${prefix}kodepos*
│➥ *${prefix}newsinfo*
│➥ *${prefix}jadwaltv*
│➥ *${prefix}infogempa*
│➥ *${prefix}jadwalbola*
│➥ *${prefix}indbeasiswa*
│➥ *${prefix}jadwaltvnow*
│➥ *${prefix}cnnindonesia*
│➥ *${prefix}cnninternasional*
╰──────────────
` 

                await dappauhuy(dapuhy, MessageType.text, tescuk, `「 ${namabot} 」\n Created By @${namaowner}`)
                break
                case 'makermenu':
                if (!isUser) return reply(dpuhy.noregis())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
                if (isBanned) return reply(dpuhy.baned())
                dapuhy = `
╔════════════════════✿
║    *MAKER MENU*
╠════════════════════✿
║─❏ ${prefix}neon
║─❏ ${prefix}bokeh
║─❏ ${prefix}toxic
║─❏ ${prefix}box3d
║─❏ ${prefix}cloud
║─❏ ${prefix}space
║─❏ ${prefix}minion
║─❏ ${prefix}luxury
║─❏ ${prefix}icecold
║─❏ ${prefix}thunder
║─❏ ${prefix}pornhub
║─❏ ${prefix}avenger
║─❏ ${prefix}steel3d
║─❏ ${prefix}text1917
║─❏ ${prefix}lionlogo
║─❏ ${prefix}wolflogo
║─❏ ${prefix}ninjalogo
║─❏ ${prefix}breakwall
║─❏ ${prefix}halloween
║─❏ ${prefix}jokerlogo
║─❏ ${prefix}blackpink
║─❏ ${prefix}greenneon
║─❏ ${prefix}neonlight
║─❏ ${prefix}metaldark
║─❏ ${prefix}strawberry
║─❏ ${prefix}summersand
║─❏ ${prefix}sandsummer
║─❏ ${prefix}futureneon
║─❏ ${prefix}sandwriting
║─❏ ${prefix}horrorblood
║─❏ ${prefix}roadwarning
║─❏ ${prefix}advanceglow
║─❏ ${prefix}holographic
║─❏ ${prefix}newyearcard
║─❏ ${prefix}wallgravity
║─❏ ${prefix}marvelstudio
║─❏ ${prefix}bloodfrosted
║─❏ ${prefix}sandengraved
║─❏ ${prefix}deluxesilver
║─❏ ${prefix}natureleaves
║─❏ ${prefix}fireworksparkle		
║─❏ ${prefix}cup
║─❏ ${prefix}cup1
║─❏ ${prefix}love
║─❏ ${prefix}coffe
║─❏ ${prefix}summer3d
║─❏ ${prefix}nature3d
║─❏ ${prefix}wolfmetal
║─❏ ${prefix}woodheart
║─❏ ${prefix}underwater
║─❏ ${prefix}golderrose
║─❏ ${prefix}woodenboard
║─❏ ${prefix}summernature
║─❏ ${prefix}letterleaves
║─❏ ${prefix}harrypotter
║─❏ ${prefix}glowingneon
║─❏ ${prefix}fallleaves
║─❏ ${prefix}carvedwood
║─❏ ${prefix}flamming
║─❏ ${prefix}pubg
║─❏ ${prefix}tiktok
║─❏ ${prefix}bannerlol
║─❏ ${prefix}arcade8bit
║─❏ ${prefix}battlefield	
║─❏ ${prefix}snow3d
║─❏ ${prefix}wetglass
║─❏ ${prefix}lighttext
║─❏ ${prefix}puppycute
║─❏ ${prefix}royaltext
║─❏ ${prefix}watercolor
║─❏ ${prefix}luxurygold
║─❏ ${prefix}glossychrome
║─❏ ${prefix}birthdaycake
║─❏ ${prefix}multicolor3d
║─❏ ${prefix}galaxywallpaper
║─❏ ${prefix}beautifulflower
║─❏ ${prefix}silverplaybutton
║─❏ ${prefix}goldplaybutton
║─❏ ${prefix}heartshaped
║─❏ ${prefix}galaxystyle
║─❏ ${prefix}hologram3d
║─❏ ${prefix}greenneon
║─❏ ${prefix}greenbush
║─❏ ${prefix}metallogo
║─❏ ${prefix}noeltext
║─❏ ${prefix}textcake
║─❏ ${prefix}starsnight
║─❏ ${prefix}wooden3d
║─❏ ${prefix}textbyname
║─❏ ${prefix}glittergold
║─❏ ${prefix}writegalacy
║─❏ ${prefix}galaxybat
║─❏ ${prefix}birthdayday
║─❏ ${prefix}freefire
║─❏ ${prefix}cartoongravity
║─❏ ${prefix}anonymhacker
╠════════════════════✿
║_*Created By @Khamid*_
╚════════════════════✿
` 

                await dappauhuy(dapuhy, MessageType.text, tescuk, `「 ${namabot} 」\n Created By @${namaowner}`)
                break
                
                case 'funmenu':
                if (!isUser) return reply(dpuhy.noregis())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
                if (isBanned) return reply(dpuhy.baned())
                dapuhy = `
╔════════════════════◪
║    *FUN MENU*
╠════════════════════◪
║─❏ *${prefix}tebakkata*
║─❏ *${prefix}family100*
║─❏ *${prefix}caklontong*
║─❏ *${prefix}tebakgambar*
║─❏ *${prefix}deteksiumur*
║─❏ *${prefix}deteksigender*
║─❏ *${prefix}weton*
║─❏ *${prefix}truth*
║─❏ *${prefix}dare*
║─❏ *${prefix}rate*
║─❏ *${prefix}hobi*
║─❏ *${prefix}watak*
║─❏ *${prefix}apakah*
║─❏ *${prefix}bisakah*
║─❏ *${prefix}kapankah*
║─❏ *${prefix}bagaimanakah*
║─❏ *${prefix}gaycek*
║─❏ *${prefix}sangecek*
║─❏ *${prefix}lesbicek*
║─❏ *${prefix}cantikcek*
║─❏ *${prefix}gantengcek*
║─❏ *${prefix}terganteng*
║─❏ *${prefix}tercantik*
║─❏ *${prefix}jadian*
╠════════════════════◪
║_*Created By @Khamid*_
╚════════════════════◪
` 

                await dappauhuy(dapuhy, MessageType.text, tescuk, `「 ${namabot} 」\n Created By @${namaowner}`)
                break
                case 'mediamenu':
                if (!isUser) return reply(dpuhy.noregis())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
                if (isBanned) return reply(dpuhy.baned())
                dapuhy = `
╭───◪ *MEDIA* ◪─────
│➥ *${prefix}ttp*
│➥ *${prefix}ttp2*
│➥ *${prefix}ttp3*
│➥ *${prefix}ocr*
│➥ *${prefix}toimg*
│➥ *${prefix}stiker*
│➥ *${prefix}semoji*
│➥ *${prefix}fakektp*
│➥ *${prefix}petriks*
│➥ *${prefix}translate*
╰──────────────
` 

                await dappauhuy(dapuhy, MessageType.text, tescuk, `「 ${namabot} 」\n Created By @${namaowner}`)
                break
                
                case 'searchingmenu':
                if (!isUser) return reply(dpuhy.noregis())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
                if (isBanned) return reply(dpuhy.baned())
                dapuhy = `
╭─◪ *SEARCHING MENU* ◪─
│➥ *${prefix}heroml*
│➥ *${prefix}shopee*
│➥ *${prefix}google*
│➥ *${prefix}brainly*
│➥ *${prefix}ytsearch*
│➥ *${prefix}carifoto*
│➥ *${prefix}playstore*
╰──────────────
` 

                await dappauhuy(dapuhy, MessageType.text, tescuk, `「 ${namabot} 」\n Created By @${namaowner}`)
                break
                
				
                case 'leveling':
				if (!isOwner) return reply('Perintah ini khusus untuk owner bot')
                if (args.length < 1) return reply('[❗] Tambahkan parameter enable untuk mengaktifkan dan disable untuk menonaktifkan')
                if (args[0] === 'enable') {
                    if (isLevelingOn) return reply(`[❗] Fitur ${command} sudah aktif`)
                    _leveling.push(from)
                    fs.writeFileSync('./database/leveling.json', JSON.stringify(_leveling))
                     reply(`[❗] Berhasil mengaktifkan fitur leveling`)
                } else if (args[0] === 'disable') {
                    _leveling.splice(from, 1)
                    fs.writeFileSync('./database/leveling.json', JSON.stringify(_leveling))
                     reply(`[❗] Berhasil menonaktifkan fitur leveling`)
                } else {
                    reply('[❗] Tambahkan parameter enable untuk mengaktifkan dan disable untuk menonaktifkan')
                }
				break				
				case 'level':
				if (!isUser) return reply(dpuhy.noregis())
				if (isBanned) return reply(dpuhy.baned())
                if (!isLevelingOn) return reply(dpuhy.lvlnoon())
                const userLevel = getLevelingLevel(sender)
                const userXp = getLevelingXp(sender)
                if (userLevel === undefined && userXp === undefined) return reply(dpuhy.lvlnul())
                const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
                resul = `┏━━❉ LEVEL ❉━━\n┣⊱ Nama : ${pushname}\n┣⊱ Nomor : wa.me/${sender.split("@")[0]}\n┣⊱ User XP :  ${userXp}/${requiredXp}\n┣⊱ User Level : ${userLevel}\n┗━━━━━━━━━━━━`
                dp.sendMessage(from, resul, text, { quoted: kmd})
                .catch(async (err) => {
                console.error(err)
                await reply(`Error!\n${err}`)
                })
				break
					
					case 'buatktp':
					case 'ktp':
					case 'fakektp':
					case 'ktpmaker':
					if (!isUser) return reply(dpuhy.noregis())
					if (args.length == 0) return reply(`Usage: ${prefix + command} nik+provinsi+kabupaten+nama+tempat, tanggal lahir+jenis kelamin+jalan+rt/rw+kelurahan+kecamatan+agama+status nikah+pekerjaan+warga negara+berlaku sampai+url_image\n\nExample: ${prefix + command} 456127893132123+bumipertiwi+fatamorgana+arifi+mars, 99-99-9999+belum ditemukan+jl wardoyo+999/999+turese+imtuni+belum diketahui+jomblo+mikirin dia+indo ori no kw+seumur hidup+https://i.ibb.co/Xb2pZ88/test.jpg`)
                    reply(dpuhy.wait())
                    get_args = args.join(" ").split("+")
                    nik = get_args[0]
                    prov = get_args[1]
                    kabu = get_args[2]
                    name = get_args[3]
                    ttl = get_args[4]
                    jk = get_args[5]
                    jl = get_args[6]
                    rtrw = get_args[7]
                    lurah = get_args[8]
                    camat = get_args[9]
                    agama = get_args[10]
                    nikah = get_args[11]
                    kerja = get_args[12]
                    warga = get_args[13]
                    until = get_args[14]
                    img = get_args[15]
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/ktpmaker?apikey=${lolhumankey}&nik=${nik}&prov=${prov}&kabu=${kabu}&name=${name}&ttl=${ttl}&jk=${jk}&jl=${jl}&rtrw=${rtrw}&lurah=${lurah}&camat=${camat}&agama=${agama}&nikah=${nikah}&kerja=${kerja}&warga=${warga}&until=${until}&img=${img}`)
                    dp.sendMessage(from, ini_buffer, image, { quoted: kmd })
                    break
//==========================================BATES NGAB==========================================\\

                //media menu
				case 'stiker': 
				case 'sticker':
				case 's':
				if (!isUser) return reply(dpuhy.noregis())
				if (isBanned) return reply(dpuhy.baned())
				if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
                    await limitAdd(sender)
				reply(dpuhy.wait())
					if ((isMedia && !kmd.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(kmd).replace('quotedM','m')).message.extendedTextMessage.contextInfo : kmd
						const media = await dp.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(dpuhy.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								dp.sendMessage(from, buffer, sticker, {quoted: freply})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && kmd.message.videoMessage.seconds < 11 || isQuotedVideo && kmd.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(kmd).replace('quotedM','m')).message.extendedTextMessage.contextInfo : kmd
						const media = await dp.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(dpuhy.wait())
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(dpuhy.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								dp.sendMessage(from, buffer, sticker, {quoted: freply})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
							} else {
						reply(`Kirim gambar dengan caption \n${prefix + command} \natau reply gambar yang sudah ada\nuntuk membuat stiker animasi kirim video berdurasi pendek kurang dari 10 detik`)
					}
					break
					case 'toimg':
				    if (!isUser) return reply(dpuhy.noregis())
				    if (isBanned) return reply(dpuhy.baned())
				    if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
				    if (!isQuotedSticker) return reply('reply stickernya ngab')
					reply(dpuhy.wait())
					encmedia = JSON.parse(JSON.stringify(kmd).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await dp.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(dpuhy.stikga())
						buffer = fs.readFileSync(ran)
						dp.sendMessage(from, buffer, image, {quoted: freply})
						fs.unlinkSync(ran)
					})
					break
					case 'ocr': 
				    if (!isUser) return reply(dpuhy.noregis())
				    if (isBanned) return reply(dpuhy.baned())
				    if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
				    if ((isMedia && !kmd.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(kmd).replace('quotedM','m')).message.extendedTextMessage.contextInfo : kmd
						const media = await dp.downloadAndSaveMediaMessage(encmedia)
						reply(dpuhy.wait())
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply(`kirim gambar bertulisan dengan caption ${prefix + command}`)
					}
					await limitAdd(sender)
					break
					
					await limitAdd(sender)
					break
					case 'petriks':
					case 'spatrick':
					case 'petrikstiker':
					case 'stikerpetrik':
					if (!isUser) return reply(dpuhy.noregis())
			    	if (isBanned) return reply(dpuhy.baned())
				    if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
				    reply(dpuhy.wait())
					dppa = await getBuffer(`https://api.lolhuman.xyz/api/sticker/patrick?apikey=${lolhumankey}`)
					dp.sendMessage(from, dppa, sticker, {quoted: freply})
					await limitAdd(sender)
					break
                    await limitAdd(sender)
                    break
					case 'ssweb':
					case 'sswebfull':
                    if (!isUser) return reply(dpuhy.noregis())
                    if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
                    if (isBanned) return reply(dpuhy.baned())
                    if (args.length < 1) return reply(`urlnya mana broo?\ncontoh ${prefix + command} https://dapuhy-api.herokuapp.com`)
                    dppa = args.join(" ")
                    reply(dpuhy.wait())
                    dapuhy = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=${lolhumankey}&url=${dppa}`)
                    dp.sendMessage(from, dapuhy, image, {quoted: freply})
                    await limitAdd(sender)
                    break
				//end mediamenu
				
				//==========================================MAKER MENU==========================================\\
//MAKER MENU
                case 'blackpink':
                case 'neon':
                case 'greenneon':
                case 'advanceglow':
                case 'futureneon':
                case 'sandwriting':
                case 'sandsummer':
                case 'sandengraved':
                case 'metaldark':
                case 'neonlight':
                case 'holographic':
                case 'text1917':
                case 'minion':
                case 'deluxesilver':
                case 'newyearcard':
                case 'bloodfrosted':
                case 'halloween':
                case 'jokerlogo':
                case 'fireworksparkle':
                case 'natureleaves':
                case 'bokeh':
                case 'toxic':
                case 'strawberry':
                case 'box3d':
                case 'roadwarning':
                case 'breakwall':
                case 'icecold':
                case 'luxury':
                case 'cloud':
                case 'summersand':
                case 'horrorblood':
                case 'thunder':
                if (!isUser) return reply(dpuhy.noregis())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
                if (isBanned) return reply(dpuhy.baned())
                if (args.length < 1) return reply(`teksnya mana bro?\ncontoh ${prefix + command} nobita`)
                dppa = args.join(" ")
                reply(dpuhy.wait())
                dapuhy = await getBuffer(`https://api.lolhuman.xyz/api/textprome/${command}?apikey=${lolhumankey}&text=${dppa}`)
                dp.sendMessage(from, dapuhy, image, {quoted: freply})
                await limitAdd(sender)
                break
                case 'pornhub':
                case 'avenger':
                case 'space':
                case 'ninjalogo':
                case 'marvelstudio':
                case 'lionlogo':
                case 'wolflogo':
                case 'steel3d':
                case 'wallgravity':
                if (!isUser) return reply(dpuhy.noregis())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
                if (isBanned) return reply(dpuhy.baned())
                if (args.length < 1) return reply(`teksnya mana bro?\n${prefix + command} teks1,teks2\ncontoh ${prefix + command} eren,yeager`)
                ct = args.join(" ")
                dap1 = ct.split(",")[0];
                dap2 = ct.split(",")[1];
                reply(dpuhy.wait())
                dapuhy = await getBuffer(`https://api.lolhuman.xyz/api/textprome2/${command}?apikey=${lolhumankey}&text1=${dap1}&text2=${dap2}`)
                dp.sendMessage(from, dapuhy, image, {quoted: freply})
                await limitAdd(sender)
                break
                case 'cup':
                case 'cup1':
                case 'woodenboard':
                case 'coffe':
                case 'woodheart':
                case 'summer3d':
                case 'love':
                case 'wolfmetal':
                case 'nature3d':
                case 'underwater':
                case 'golderrose':
                case 'summernature':
                case 'letterleaves':
                case 'glowingneon':
                case 'fallleaves':
                case 'flamming':
                case 'harrypotter':
                case 'carvedwood':
                if (!isUser) return reply(dpuhy.noregis())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
                if (isBanned) return reply(dpuhy.baned())
                if (args.length < 1) return reply(`teksnya mana broo?\ncontoh ${prefix + command} doraemon`)
                dppa = args.join(" ")
                reply(dpuhy.wait())
                dapuhy = await getBuffer(`https://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${lolhumankey}&text=${dppa}`)
                dp.sendMessage(from, dapuhy, image, {quoted: freply})
                await limitAdd(sender)
                break
                case 'tiktok':
                case 'arcade8bit':
                case 'battlefield4':
                case 'pubg':
                case 'bannerlol':
                if (!isUser) return reply(dpuhy.noregis())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
                if (isBanned) return reply(dpuhy.baned())
                if (args.length < 1) return reply(`teksnya mana broo?\n${prefix + command} teks1,teks2\ncontoh ${prefix + command} uciha,sasuke`)
                ct = args.join(" ")
                dap1 = ct.split(",")[0];
                dap2 = ct.split(",")[1];
                reply(dpuhy.wait())
                dapuhy = await getBuffer(`https://api.lolhuman.xyz/api/photooxy2/${command}?apikey=${lolhumankey}&text1=${dap1}&text2=${dap2}`)
                dp.sendMessage(from, dapuhy, image, {quoted: freply})
                await limitAdd(sender)
                break
                case 'wetglass':
                case 'multicolor3d':
                case 'watercolor':
                case 'luxurygold':
                case 'galaxywallpaper':
                case 'lighttext':
                case 'beautifulflower':
                case 'puppycute':
                case 'royaltext':
                case 'heartshaped':
                case 'birthdaycake':
                case 'galaxystyle':
                case 'hologram3d':
                case 'greenneon':
                case 'glossychrome':
                case 'greenbush':
                case 'metallogo':
                case 'noeltext':
                case 'glittergold':
                case 'textcake':
                case 'starsnight':
                case 'wooden3d':
                case 'textbyname':
                case 'writegalacy':
                case 'galaxybat':
                case 'snow3d':
                case 'birthdayday':
                case 'goldplaybutton':
                case 'silverplaybutton':
                case 'freefire':
                case 'cartoongravity':
                case 'anonymhacker':
                if (!isUser) return reply(dpuhy.noregis())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
                if (isBanned) return reply(dpuhy.baned())
                if (args.length < 1) return reply(`teksnya mana broo?\ncontoh ${prefix + command} chika`)
                dppa = args.join(" ")
                reply(dpuhy.wait())
                dapuhy = await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${lolhumankey}&text=${dppa}`)
                dp.sendMessage(from, dapuhy, image, {quoted: freply})
                await limitAdd(sender)
                break
                case 'realvintage':
                case 'lampu':
                if (!isUser) return reply(dpuhy.noregis())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
                if (isBanned) return reply(dpuhy.baned())
                if (args.length < 1) return reply(`teksnya mana broo?\n${prefix + command} teks1,teks2\ncontoh ${prefix + command} the,ganz`)
                ct = args.join(" ")
                dap1 = ct.split(",")[0];
                dap2 = ct.split(",")[1];
                reply(dpuhy.wait())
                dapuhy = await getBuffer(`https://api.lolhuman.xyz/api/ephoto2/realvintage?apikey=${lolhumankey}&text1=${dap1}&text2=${dap2}`)
                dp.sendMessage(from, dapuhy, image, {quoted: freply})
                await limitAdd(sender)
                break
                case 'juventus':
                case 'juventusshirt':
                if (!isUser) return reply(dpuhy.noregis())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
                if (isBanned) return reply(dpuhy.baned())
                if (args.length < 1) return reply(`teksnya mana broo?\n${prefix + command} teks1,teks2\ncontoh ${prefix + command} ${pushname},28`)
                ct = args.join(" ")
                dap1 = ct.split(",")[0];
                dap2 = ct.split(",")[1];
                reply(dpuhy.wait())
                dapuhy = await getBuffer(`https://api.lolhuman.xyz/api/ephoto2/juventusshirt?apikey=${lolhumankey}&text1=${dap1}&text2=${dap2}`)
                dp.sendMessage(from, dapuhy, image, {quoted: freply})
                await limitAdd(sender)
                break
				
                case 'vbanner':
                case 'valorantbanner':
                if (!isUser) return reply(dpuhy.noregis())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
                if (isBanned) return reply(dpuhy.baned())
                if (args.length < 1) return reply(`teksnya mana broo?\n${prefix + command} teks1,teks2,teks3\ncontoh ${prefix + command} ben,mengkeren,cuy`)
                ct = args.join(" ")
                reply(dpuhy.wait())
                dap1 = ct.split(",")[0];
                dap2 = ct.split(",")[1];
                dap3 = ct.split(",")[2];
                dapuhy = await getBuffer(`https://api.lolhuman.xyz/api/ephoto3/valorantbanner?apikey=${lolhumankey}&text1=${dap1}&text2=${dap2}&text3=${dap3}`)
                dp.sendMessage(from, dapuhy, image, {quoted: freply})
                await limitAdd(sender)
                break
				case 'tahta':
                case 'hartatahta':
                case 'hartacustom':
                if (!isUser) return reply(dpuhy.noregis())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
                if (isBanned) return reply(dpuhy.baned())
                if (args.length < 1) return reply(`teksnya mana broo?\ncontoh ${prefix + command} cewek`)
                dppa = args.join(" ")
                reply(dpuhy.wait())
                dapuhy = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=${lolhumankey}&text=${dppa}`)
                dp.sendMessage(from, dapuhy, image, {quoted: freply})
                await limitAdd(sender)
                break
                
                case 'ttp':
                case 'ttp2':
                case 'ttp3':
                case 'ttp4':
                case 'amongus':
                if (!isUser) return reply(dpuhy.noregis())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
                if (isBanned) return reply(dpuhy.baned())
                if (args.length < 1) return reply(`teksnya mana broo?\ncontoh ${prefix + command} hai bro`)
                dppa = args.join(" ")
                reply(dpuhy.wait())
                dapuhy = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=${lolhumankey}&text=${dppa}`)
                dp.sendMessage(from, dapuhy, sticker, {quoted: freply})
                await limitAdd(sender)
                break
                case 'carbon':
                if (!isUser) return reply(dpuhy.noregis())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
                if (isBanned) return reply(dpuhy.baned())
                if (args.length < 1) return reply(`teksnya mana broo?\ncontoh ${prefix + command} ${pushname}`)
                dppa = args.join(" ")
                reply(dpuhy.wait())
                dapuhy = await getBuffer(`https://api.lolhuman.xyz/api/carbon?apikey=${lolhumankey}&code=${dppa}`)
                dp.sendMessage(from, dapuhy, image, {quoted: freply})
                await limitAdd(sender)
                break
                case 'gta':
                case 'gtapassed':
                if (!isUser) return reply(dpuhy.noregis())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
                if (isBanned) return reply(dpuhy.baned())
                if (args.length < 1) return reply(`teksnya mana broo?\n${prefix + command} teks1,teks2\ncontoh ${prefix + command} mision,respect`)
                ct = args.join(" ")
                dap1 = ct.split(",")[0];
                dap2 = ct.split(",")[1];
                reply(dpuhy.wait())
                dapuhy = await getBuffer(`https://api.lolhuman.xyz/api/gtapassed?apikey=${lolhumankey}&text1=${dap1}&text2=${dap2}`)
                dp.sendMessage(from, dapuhy, image, {quoted: freply})
                await limitAdd(sender)
                break
                case 'nolis':
                case 'nulis':
                if (!isUser) return reply(dpuhy.noregis())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
                if (isBanned) return reply(dpuhy.baned())
                if (args.length < 1) return reply(`teksnya mana broo?\ncontoh ${prefix + command} sayang kamu`)
                reply(dpuhy.wait())
                dppa = args.join(" ")
                anu = await fetchJson(`https://api.lolhuman.xyz/api/nulis?apikey=${lolhumankey}&text={dppa}`)
                dapuhy = await getBuffer(anu.hasil)
                dp.sendMessage(from, dapuhy, image, {quoted: freply})
                await limitAdd(sender)
                break
				
                case 'shadow':
                case 'romantic':
                case 'smoke':
				
                case 'burnpaper':
                case 'lovemessage':
                case 'undergrass':
                case 'doubleheart':
                case 'coffecup':
                case 'coffecup2':
                case 'lovetext':
                case 'butterfly':
                if (!isUser) return reply(dpuhy.noregis())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
                if (isBanned) return reply(dpuhy.baned())
                if (args.length < 1) return reply(`teksnya mana broo?\ncontoh ${prefix + command} ${pushname}`)
                reply(dpuhy.wait())
                dppa = args.join(" ")
                anu = await fetchJson(`https://dapuhy-api.herokuapp.com/api/photooxy1/${command}?text=${dppa}&apikey=${DapApi}`)
                dapuhy = await getBuffer(anu.result.url)
                dp.sendMessage(from, dapuhy, image, {quoted: freply})
                await limitAdd(sender)
                break
                case 'glitch':
                if (!isUser) return reply(dpuhy.noregis())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
                if (isBanned) return reply(dpuhy.baned())
                if (args.length < 1) return reply(`teksnya mana broo?\ncontoh ${prefix + command} ${pushname}|ganz`)
                reply(dpuhy.wait())
                ct = args.join(" ")
                dap1 = ct.split("|")[0];
                dap2 = ct.split("|")[1];
                anu = await fetchJson(`https://dapuhy-api.herokuapp.com/api/photooxy2/glitch?text1=${dap1}&text2=${dap2}&apikey=${DapApi}`)
                dapuhy = await getBuffer(anu.result.url)
                dp.sendMessage(from, dapuhy, image, {quoted: freply})
                await limitAdd(sender)
                break
//==========================================SEARCHING MENU==========================================\\
				//SEARCHING MENU
                case 'playstore':
                if (!isUser) return reply(dpuhy.noregis())
                if (isBanned) return reply(dpuhy.wait())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
                if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh : ${prefix + command} telegram`)
                reply(dpuhy.wait())
                query = args.join(" ")
                get_result = await fetchJson(`http://api.lolhuman.xyz/api/playstore?apikey=${lolhumankey}&query=${query}`)
                get_result = get_result.result
                ini_txt = 'Play Store Search : \n'
                for (var x of get_result) {
                ini_txt += `Name : ${x.title}\n`
                ini_txt += `ID : ${x.appId}\n`
                ini_txt += `Developer : ${x.developer}\n`
                ini_txt += `Link : ${x.url}\n`
                ini_txt += `Price : ${x.priceText}\n`
                ini_txt += `Price : ${x.price}`
                    }
                reply(ini_txt)
                await limitAdd(sender)
                break
				case 'wiki':
				case 'wikipedia':
                if (!isUser) return reply(dpuhy.noregis())
                if (isBanned) return reply(dpuhy.wait())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
                suuu = body.slice(10)
				reply(dpuhy.wait())
				anu = await fetchJson(`http://api.lolhuman.xyz/api/wiki?apikey=${lolhumankey}&query=${suuu}`)
				teks = `[ MENURUT WIKIPEDIA ] :\n\n${anu.result}`
				dp.sendMessage(from, teks, text, {quoted: kmd})
				await limitAdd(sender)
				break
				case 'pinterest':
                if (!isUser) return reply(dpuhy.noregis())
                if (isBanned) return reply(dpuhy.wait())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
                carii = args.join(" ")
				reply(dpuhy.wait())
				anu = await fetchJson(`https://api.lolhuman.xyz/api/pinterest?apikey=${lolhumankey}&query=${carii}`)
				toll = await getBuffer(anu.result)
				dp.sendMessage(from, toll, image, {quoted: freply})
				await limitAdd(sender)
				break
				case 'pinterest2':
				if (!isUser) return reply(dpuhy.noregis())
				if (isBanned) return reply(dpuhy.baned())
				if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
				cari = args.join(" ")
				reply(dpuhy.wait())
				anu = await fetchJson(`https://api.lolhuman.xyz/api/pinterest2?apikey=${lolhumankey}&query=${cari}`)
				var dapp = JSON.parse(JSON.stringify(anu.result));
				var pa =  dapp[Math.floor(Math.random() * dapp.length)];
				uhy = await getBuffer(pa)
				dp.sendMessage(from, uhy, image, {quoted: freply})
				await limitAdd(sender)
				break
				case 'googleimage':
					case 'carifoto':
				   dp.updatePresence(from, Presence.composing) 
 
					if (!isUser) return reply(dpuhy.noregis())
				if (isBanned) return reply(dpuhy.baned())
				if (isLimit(sender)) return reply(dpuhy.limitend(pusname))    
				   if (args.length < 1) return reply('Apa yang mau dicari kak?')
					goo = body.slice(7)
					anu = await fetchJson(`https://api.lolhuman.xyz/api/gimage?apikey=khamid&query=${goo}`, {method: 'get'})
					reply(mess.wait)
				    var pol = JSON.parse(JSON.stringify(anu.result.result_search));
                    var tes2 =  pol[Math.floor(Math.random() * pol.length)];
					pint = await getBuffer(tes2)
					dp.sendMessage(from, pint, image, { caption: '*Google Image*\n\n*Hasil Pencarian : '+goo+'*', quoted: kmd })
					break
				//============================DOWNLOADER ============================\\
				
				case 'play':
				case 'jooxplay':
                if (!isUser) return reply(dpuhy.noregis())
                if (isBanned) return reply(dpuhy.wait())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
				reply(dpuhy.wait())
                    if (args.length == 0) return reply(`Yang mau dicari apa gan\nContoh: ${prefix + command} Vagetoz Kehadiranmu`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/jooxplay?apikey=${lolhumankey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.info.song}\n`
                    ini_txt += `Artists : ${get_result.info.singer}\n`
                    ini_txt += `Duration : ${get_result.info.duration}\n`
                    ini_txt += `Album : ${get_result.info.album}\n`
                    ini_txt += `Uploaded : ${get_result.info.date}\n`
                    ini_txt += `Tunggu sebentar Lagu sedang dikirim\n\n`
                    ini_txt += `Lirik :\n ${get_result.lirik}\n`
                    thumbnail = await getBuffer(get_result.image)
                    dp.sendMessage(from, thumbnail, image, { quoted: kmd, caption: ini_txt })
                    get_audio = await getBuffer(get_result.audio[0].link)
                    dp.sendMessage(from, get_audio, audio, { imageMessage: 'audio/mp4', filename: `${get_result.info.song}.mp3`, quoted: kmd })
                    break
					case 'ytplay':
                if (!isUser) return reply(dpuhy.noregis())
                if (isBanned) return reply(dpuhy.wait())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
				if (args.length == 0) return reply(`yang mau dicari apa bro Example: ${prefix + command} Melukis Senja`)
                    reply(dpuhy.wait())
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytplay?apikey=${lolhumankey}&query=${query}`)
                    get_result = get_result.result
                    get_info = get_result.info
                    ini_txt = `Title : ${get_info.title}\n`
                    ini_txt += `Uploader : ${get_info.uploader}\n`
                    ini_txt += `Duration : ${get_info.duration}\n`
                    ini_txt += `View : ${get_info.view}\n`
                    ini_txt += `Like : ${get_info.like}\n`
                    ini_txt += `Dislike : ${get_info.dislike}\n`
                    ini_txt += `Mohon tunggu musik dan video sedang dikirim\n`
                    ini_txt += `Description :\n ${get_info.description}\n`
                    ini_buffer = await getBuffer(get_info.thumbnail)
                    dp.sendMessage(from, ini_buffer, image, { quoted: kmd, caption: ini_txt })
                    get_audio = await getBuffer(get_result.audio[3].link)
                    dp.sendMessage(from, get_audio, audio, { imageMessage: 'audio/mp4', filename: `${get_info.title}.mp3`, quoted: kmd })
                    get_video = await getBuffer(get_result.video[0].link)
                    dp.sendMessage(from, get_video, video, { imageMessage: 'video/mp4', filename: `${get_info.title}.mp4`, quoted: kmd })
                    break
                case 'ytplay2':
                if (!isUser) return reply(dpuhy.noregis())
                if (isBanned) return reply(dpuhy.wait())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
                if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
				reply(dpuhy.wait())
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytplay2?apikey=${lolhumankey}&query=${query}`)
                    get_result = get_result.result
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    dp.sendMessage(from, ini_buffer, image, { quoted: kmd, caption: get_result.title })
                    get_audio = await getBuffer(get_result.audio)
                    dp.sendMessage(from, get_audio, audio, { imageMessage: Mimetype.mp4Audio, filename: `${get_result.title}.mp3`, quoted: kmd })
                    get_video = await getBuffer(get_result.video)
                    dp.sendMessage(from, get_video, video, { imageMessage: Mimetype.mp4, filename: `${get_result.title}.mp4`, quoted: kmd })
                    break
                case 'ytsearch':
                if (!isUser) return reply(dpuhy.noregis())
                if (isBanned) return reply(dpuhy.wait())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
				reply(dpuhy.wait())
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytsearch?apikey=${lolhumankey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Views : ${x.views}\n`
                        ini_txt += `Published : ${x.published}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n`
                        ini_txt += `Link : https://www.youtube.com/watch?v=${x.videoId}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'ytmp3':
                if (!isUser) return reply(dpuhy.noregis())
                if (isBanned) return reply(dpuhy.wait())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
				if (args.length == 0) return reply(`Linknya mana bro?\nUntuk mendapatkan link gunakan perintah ${prefix}ytsearch\n\n Contoh penggunaan perintah: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                    reply(dpuhy.wait())
                    ini_link = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytaudio?apikey=${lolhumankey}&url=${ini_link}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Uploader : ${get_result.uploader}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `View : ${get_result.view}\n`
                    ini_txt += `Like : ${get_result.like}\n`
                    ini_txt += `Dislike : ${get_result.dislike}\n`
                    ini_txt += `Description :\n ${get_result.description}`
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    dp.sendMessage(from, ini_buffer, image, { quoted: kmd, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link[3].link)
                    dp.sendMessage(from, get_audio, audio, { imageMessage: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: kmd })
                    break
                case 'ytmp32':
                if (!isUser) return reply(dpuhy.noregis())
                if (isBanned) return reply(dpuhy.wait())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
				if (args.length == 0) return reply(`Linknya mana bro Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                    reply(dpuhy.wait())
                    ini_link = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytaudio2?apikey=${lolhumankey}&url=${ini_link}`)
                    get_result = get_result.result
                    ini_txt = `${get_result.title} - ${get_result.size}`
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    dp.sendMessage(from, ini_buffer, image, { quoted: kmd, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link)
                    dp.sendMessage(from, get_audio, audio, { imageMessage: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: kmd })
                    break
                case 'ytmp4':
                if (!isUser) return reply(dpuhy.noregis())
                if (isBanned) return reply(dpuhy.wait())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
				reply(dpuhy.wait())
                    if (args.length == 0) return reply(`Linknya mana bro?\nUntuk mendapatkan link gunakan perintah ${prefix}ytsearch\n\n Contoh penggunaan perintah:  ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                    ini_link = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytvideo?apikey=${lolhumankey}&url=${ini_link}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Uploader : ${get_result.uploader}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `View : ${get_result.view}\n`
                    ini_txt += `Like : ${get_result.like}\n`
                    ini_txt += `Dislike : ${get_result.dislike}\n`
                    ini_txt += `Description :\n ${get_result.description}`
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    dp.sendMessage(from, ini_buffer, image, { quoted: kmd, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link[0].link)
                    dp.sendMessage(from, get_audio, video, { imageMessage: 'video/mp4', filename: `${get_result.title}.mp4`, quoted: kmd })
                    break
                case 'ytmp42':
                if (!isUser) return reply(dpuhy.noregis())
                if (isBanned) return reply(dpuhy.wait())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
				if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                    reply(dpuhy.wait())
                    ini_link = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytvideo2?apikey=${lolhumankey}&url=${ini_link}`)
                    get_result = get_result.result
                    ini_txt = `${get_result.title} - ${get_result.size}`
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    dp.sendMessage(from, ini_buffer, image, { quoted: kmd, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link)
                    dp.sendMessage(from, get_audio, video, { imageMessage: 'video/mp4', filename: `${get_result.title}.mp4`, quoted: kmd })
                    break
                case 'telesticker':
                if (!isUser) return reply(dpuhy.noregis())
                if (isBanned) return reply(dpuhy.wait())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
				reply(dpuhy.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://t.me/ArifiSrcstickers/LINE_Menhera_chan_ENG`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/telestick?apikey=${lolhumankey}&url=${ini_url}`)
                    ini_sticker = ini_url.result.sticker
                    for (sticker_ in ini_sticker) {
                        ini_buffer = await getBuffer(ini_sticker[sticker_])
                        dp.sendMessage(from, ini_buffer, sticker)
                    }
                    break
                case 'tiktoknowm':
                if (!isUser) return reply(dpuhy.noregis())
                if (isBanned) return reply(dpuhy.wait())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
				if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
                    reply(dpuhy.wait())
                    ini_url = args[0]
                    ini_url = `http://api.lolhuman.xyz/api/tiktok?apikey=${lolhumankey}&url=${ini_url}`
                    get_result = await fetchJson(ini_url)
                    ini_buffer = await getBuffer(get_result.result.link)
                    dp.sendMessage(from, ini_buffer, video, { quoted: kmd })
                    break
                case 'tiktokmusic':
                if (!isUser) return reply(dpuhy.noregis())
                if (isBanned) return reply(dpuhy.wait())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
				if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
                    reply(dpuhy.wait())
                    ini_link = args[0]
                    get_audio = await getBuffer(`http://api.lolhuman.xyz/api/tiktokmusic?apikey=${lolhumankey}&url=${ini_link}`)
                    dp.sendMessage(from, get_audio, audio, { imageMessage: Mimetype.mp4Audio, quoted: kmd })
                    break
                case 'spotify':
                if (!isUser) return reply(dpuhy.noregis())
                if (isBanned) return reply(dpuhy.wait())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
				if (args.length == 0) return reply(`Example: ${prefix + command} https://open.spotify.com/track/0ZEYRVISCaqz5yamWZWzaA`)
                    reply(dpuhy.wait())
                    url = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/spotify?apikey=${lolhumankey}&url=${url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Artists : ${get_result.artists}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Popularity : ${get_result.popularity}\n`
                    ini_txt += `Preview : ${get_result.preview_url}\n`
                    thumbnail = await getBuffer(get_result.thumbnail)
                    dp.sendMessage(from, thumbnail, image, { quoted: kmd, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link[3].link)
                    dp.sendMessage(from, get_audio, audio, { imageMessage: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: kmd })
                    break
                case 'spotifysearch':
                if (!isUser) return reply(dpuhy.noregis())
                if (isBanned) return reply(dpuhy.wait())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
				if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    reply(dpuhy.wait())
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/spotifysearch?apikey=${lolhumankey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Artists : ${x.artists}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Preview : ${x.preview_url}\n\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'igdl':
                if (!isUser) return reply(dpuhy.noregis())
                if (isBanned) return reply(dpuhy.wait())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
				if (args.length == 0) return reply(`Example: ${prefix + command} https://www.instagram.com/p/CJ8XKFmJ4al/?igshid=1acpcqo44kgkn`)
                    reply(dpuhy.wait())
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/instagram?apikey=${lolhumankey}&url=${ini_url}`)
                    ini_url = ini_url.result
                    ini_type = image
                    if (ini_url.includes(".mp4")) ini_type = video
                    ini_buffer = await getBuffer(ini_url)
                    dp.sendMessage(from, ini_buffer, ini_type, { quoted: kmd })
                    break
                case 'fbdl':
                if (!isUser) return reply(dpuhy.noregis())
                if (isBanned) return reply(dpuhy.wait())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
				if (args.length == 0) return reply(`Example: ${prefix + command} https://id-id.facebook.com/SamsungGulf/videos/video-bokeh/561108457758458/`)
                    reply(dpuhy.wait())
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/facebook?apikey=${lolhumankey}&url=${ini_url}`)
                    ini_url = ini_url.result[0].link
                    ini_buffer = await getBuffer(ini_url)
                    dp.sendMessage(from, ini_buffer, video, { quoted: kmd })
                    break
                case 'zippyshare':
                if (!isUser) return reply(dpuhy.noregis())
                if (isBanned) return reply(dpuhy.wait())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
				if (args.length == 0) return reply(`Example: ${prefix + command} https://www51.zippyshare.com/v/5W0TOBz1/file.html`)
                    reply(dpuhy.wait())
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/zippyshare?apikey=${lolhumankey}&url=${ini_url}`)
                    ini_url = ini_url.result
                    ini_txt = `File Name : ${ini_url.name_file}\n`
                    ini_txt += `Size : ${ini_url.size}\n`
                    ini_txt += `Date Upload : ${ini_url.date_upload}\n`
                    ini_txt += `Download Url : ${ini_url.download_url}`
                    reply(ini_txt)
                    break
                case 'pinterest':
                if (!isUser) return reply(dpuhy.noregis())
                if (isBanned) return reply(dpuhy.wait())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
				if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    reply(dpuhy.wait())
                    query = args.join(" ")
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=${lolhumankey}&query=${query}`)
                    ini_url = ini_url.result
                    ini_buffer = await getBuffer(ini_url)
                    dp.sendMessage(from, ini_buffer, image, { quoted: kmd })
                    break
                case 'pinterestdl':
                if (!isUser) return reply(dpuhy.noregis())
                if (isBanned) return reply(dpuhy.wait())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
				if (args.length == 0) return reply(`Example: ${prefix + command} https://id.pinterest.com/pin/696580267364426905/`)
                    reply(dpuhy.wait())
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterestdl?apikey=${lolhumankey}&url=${ini_url}`)
                    ini_url = ini_url.result[0]
                    ini_buffer = await getBuffer(ini_url)
                    dp.sendMessage(from, ini_buffer, image, { quoted: kmd })
                    break
                case 'pixiv':
                if (!isUser) return reply(dpuhy.noregis())
                if (isBanned) return reply(dpuhy.wait())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
				if (args.length == 0) return reply(`Example: ${prefix + command} doraemon`)
                    reply(dpuhy.wait())
                    query = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/pixiv?apikey=${lolhumankey}&query=${query}`)
                    dp.sendMessage(from, ini_buffer, image, { quoted: kmd })
                    break
                case 'pixivdl':
                if (!isUser) return reply(dpuhy.noregis())
                if (isBanned) return reply(dpuhy.wait())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
				if (args.length == 0) return reply(`Example: ${prefix + command} 63456028`)
                    reply(dpuhy.wait())
                    query = args[0]
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/pixivdl/${pixivid}?apikey=${lolhumankey}`)
                    dp.sendMessage(from, ini_buffer, image, { quoted: kmd })
                    break
                
				//============================ISLAMI ============================\\
// Islami // 
                case 'listsurah':
                if (!isUser) return reply(dpuhy.noregis())
                if (isBanned) return reply(dpuhy.wait())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
				reply(dpuhy.wait())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/quran?apikey=${lolhumankey}`)
                    get_result = get_result.result
                    ini_txt = 'List Surah:\n'
                    for (var x in get_result) {
                        ini_txt += `${x}. ${get_result[x]}\n`
                    }
                    reply(ini_txt, { quoted: kmd })
                    break
                case 'alquran':
                if (!isUser) return reply(dpuhy.noregis())
                if (isBanned) return reply(dpuhy.wait())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
				if (args.length < 1) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10 or ${prefix + command} 18/1-10`)
                    reply(dpuhy.wait())
                    urls = `http://api.lolhuman.xyz/api/quran/${args[0]}?apikey=${lolhumankey}`
                    quran = await fetchJson(urls)
                    result = quran.result
                    ayat = result.ayat
                    ini_txt = `QS. ${result.surah} : 1-${ayat.length}\n\n`
                    for (var x of ayat) {
                        arab = x.arab
                        nomor = x.ayat
                        latin = x.latin
                        indo = x.indonesia
                        ini_txt += `${arab}\n${nomor}. ${latin}\n${indo}\n\n`
                    }
                    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                    ini_txt = ini_txt.replace(/<strong>/g, "").replace(/<\/strong>/g, "")
                    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                    reply(ini_txt, { quoted: kmd })
                    break
                case 'alquranaudio':
                if (!isUser) return reply(dpuhy.noregis())
                if (isBanned) return reply(dpuhy.wait())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
				if (args.length == 0) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10`)
                    reply(dpuhy.wait())
                    surah = args[0]
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/${surah}?apikey=${lolhumankey}`)
                    dp.sendMessage(from, ini_buffer, audio, { quoted: kmd, imageMessage: Mimetype.mp4Audio })
                    break
                case 'asmaulhusna':
                if (!isUser) return reply(dpuhy.noregis())
                if (isBanned) return reply(dpuhy.wait())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
				reply(dpuhy.wait())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/asmaulhusna?apikey=${lolhumankey}`)
                    get_result = get_result.result
                    ini_txt = `No : ${get_result.index}\n`
                    ini_txt += `Latin: ${get_result.latin}\n`
                    ini_txt += `Arab : ${get_result.ar}\n`
                    ini_txt += `Indonesia : ${get_result.id}\n`
                    ini_txt += `English : ${get_result.en}`
                    reply(ini_txt, { quoted: kmd })
                    break
                case 'kisahnabi':
                case 'kisah nabi':
                if (!isUser) return reply(dpuhy.noregis())
                if (isBanned) return reply(dpuhy.wait())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
				if (args.length == 0) return reply(`Example: ${prefix + command} Muhammad SAW`)
                    reply(dpuhy.wait())
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=${lolhumankey}`)
                    get_result = get_result.result
                    ini_txt = `Name : ${get_result.name}\n`
                    ini_txt += `Lahir : ${get_result.thn_kelahiran}\n`
                    ini_txt += `Umur : ${get_result.age}\n`
                    ini_txt += `Tempat : ${get_result.place}\n`
                    ini_txt += `Story : \n${get_result.story}`
                    reply(ini_txt, { quoted: kmd })
                    break
                case 'jadwalsholat':
                case 'jadwal sholat':
                if (!isUser) return reply(dpuhy.noregis())
                if (isBanned) return reply(dpuhy.wait())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
				if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
                    reply(dpuhy.wait())
                    daerah = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/sholat/${daerah}?apikey=${lolhumankey}`)
                    get_result = get_result.result
                    ini_txt = `Wilayah : ${get_result.wilayah}\n`
                    ini_txt += `Tanggal : ${get_result.tanggal}\n`
                    ini_txt += `Sahur : ${get_result.sahur}\n`
                    ini_txt += `Imsak : ${get_result.imsak}\n`
                    ini_txt += `Subuh : ${get_result.subuh}\n`
                    ini_txt += `Terbit : ${get_result.terbit}\n`
                    ini_txt += `Dhuha : ${get_result.dhuha}\n`
                    ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
                    ini_txt += `Ashar : ${get_result.ashar}\n`
                    ini_txt += `Maghrib : ${get_result.imsak}\n`
                    ini_txt += `Isya : ${get_result.isya}`
                    reply(ini_txt ,{ quoted: kmd })
                    break
				//animemanga
				
				case 'karakter':
				case 'character':
                if (!isUser) return reply(dpuhy.noregis())
                if (isBanned) return reply(dpuhy.wait())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
				if (args.length == 0) return reply(`Example: ${prefix + command} Miku Nakano`)
                    reply(dpuhy.wait())
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/character?apikey=${lolhumankey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Id : ${get_result.id}\n`
                    ini_txt += `Name : ${get_result.name.full}\n`
                    ini_txt += `Native : ${get_result.name.native}\n`
                    ini_txt += `Favorites : ${get_result.favourites}\n`
                    ini_txt += `Media : \n`
                    ini_media = get_result.media.nodes
                    for (var x of ini_media) {
                        ini_txt += `- ${x.title.romaji} (${x.title.native})\n`
                    }
                    ini_txt += `\nDescription : \n${get_result.description.replace(/__/g, "_")}`
                    thumbnail = await getBuffer(get_result.image.large)
                    dp.sendMessage(from, thumbnail, image, { quoted: kmd, caption: ini_txt })
                    break
                case 'manga':
                if (!isUser) return reply(dpuhy.noregis())
                if (isBanned) return reply(dpuhy.wait())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
				if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    reply(dpuhy.wait())
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/manga?apikey=${lolhumankey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Id : ${get_result.id}\n`
                    ini_txt += `Id MAL : ${get_result.idMal}\n`
                    ini_txt += `Title : ${get_result.title.romaji}\n`
                    ini_txt += `English : ${get_result.title.english}\n`
                    ini_txt += `Native : ${get_result.title.native}\n`
                    ini_txt += `Format : ${get_result.format}\n`
                    ini_txt += `Chapters : ${get_result.chapters}\n`
                    ini_txt += `Volume : ${get_result.volumes}\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Source : ${get_result.source}\n`
                    ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
                    ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
                    ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
                    ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
                    ini_txt += `Score : ${get_result.averageScore}%\n`
                    ini_txt += `Characters : \n`
                    ini_character = get_result.characters.nodes
                    for (var x of ini_character) {
                        ini_txt += `- ${x.name.full} (${x.name.native})\n`
                    }
                    ini_txt += `\nDescription : ${get_result.description}`
                    thumbnail = await getBuffer(get_result.coverImage.large)
                    dp.sendMessage(from, thumbnail, image, { quoted: kmd, caption: ini_txt })
                    break
                case 'anime':
                if (!isUser) return reply(dpuhy.noregis())
                if (isBanned) return reply(dpuhy.wait())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
				if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    reply(dpuhy.wait())
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/KmdDatabase?apikey=${lolhumankey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Id : ${get_result.id}\n`
                    ini_txt += `Id MAL : ${get_result.idMal}\n`
                    ini_txt += `Title : ${get_result.title.romaji}\n`
                    ini_txt += `English : ${get_result.title.english}\n`
                    ini_txt += `Native : ${get_result.title.native}\n`
                    ini_txt += `Format : ${get_result.format}\n`
                    ini_txt += `Episodes : ${get_result.episodes}\n`
                    ini_txt += `Duration : ${get_result.duration} mins.\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Season : ${get_result.season}\n`
                    ini_txt += `Season Year : ${get_result.seasonYear}\n`
                    ini_txt += `Source : ${get_result.source}\n`
                    ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
                    ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
                    ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
                    ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
                    ini_txt += `Score : ${get_result.averageScore}%\n`
                    ini_txt += `Characters : \n`
                    ini_character = get_result.characters.nodes
                    for (var x of ini_character) {
                        ini_txt += `- ${x.name.full} (${x.name.native})\n`
                    }
                    ini_txt += `\nDescription : ${get_result.description}`
                    thumbnail = await getBuffer(get_result.coverImage.large)
                    dp.sendMessage(from, thumbnail, image, { quoted: kmd, caption: ini_txt })
                    break
                case 'wait':
                if (!isUser) return reply(dpuhy.noregis())
                if (isBanned) return reply(dpuhy.wait())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
				reply(dpuhy.wait())
                    if ((isMedia && !kmd.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(kmd).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : kmd
                        const filePath = await dp.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        const form = new FormData();
                        const stats = fs.statSync(filePath);
                        const fileSizeInBytes = stats.size;
                        const fileStream = fs.createReadStream(filePath);
                        form.append('img', fileStream, { knownLength: fileSizeInBytes });
                        const options = {
                            method: 'POST',
                            credentials: 'include',
                            body: form
                        }
                        get_result = await fetchJson(`http://api.lolhuman.xyz/api/wait?apikey=${lolhumankey}`, {...options })
                        fs.unlinkSync(filePath)
                        get_result = get_result.result
                        ini_video = await getBuffer(get_result.video)
                        ini_txt = `Anilist id : ${get_result.anilist_id}\n`
                        ini_txt += `MAL id : ${get_result.mal_id}\n`
                        ini_txt += `Title Romaji : ${get_result.title_romaji}\n`
                        ini_txt += `Title Native : ${get_result.title_native}\n`
                        ini_txt += `Title English : ${get_result.title_english}\n`
                        ini_txt += `at : ${get_result.at}\n`
                        ini_txt += `Episode : ${get_result.episode}\n`
                        ini_txt += `Similarity : ${get_result.similarity}`
                        dp.sendMessage(from, ini_video, video, { quoted: kmd, caption: ini_txt })
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break
                case 'kusonime':
                if (!isUser) return reply(dpuhy.noregis())
                if (isBanned) return reply(dpuhy.wait())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
				if (args.length == 0) return reply(`Example: ${prefix + command} https://kusonime.com/nanatsu-no-taizai-bd-batch-subtitle-indonesia/`)
                    reply(dpuhy.wait())
               
                    ini_url = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/kusonime?apikey=${lolhumankey}&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Japanese : ${get_result.japanese}\n`
                    ini_txt += `Genre : ${get_result.genre}\n`
                    ini_txt += `Seasons : ${get_result.seasons}\n`
                    ini_txt += `Producers : ${get_result.producers}\n`
                    ini_txt += `Type : ${get_result.type}\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Total Episode : ${get_result.total_episode}\n`
                    ini_txt += `Score : ${get_result.score}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Released On : ${get_result.released_on}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    link_dl = get_result.link_dl
                    for (var x in link_dl) {
                        ini_txt += `\n${x}\n`
                        for (var y in link_dl[x]) {
                            ini_txt += `${y} - ${link_dl[x][y]}\n`
                        }
                    }
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    dp.sendMessage(from, ini_buffer, image, { quoted: kmd, caption: ini_txt })
                    break
                case 'kusonimesearch':
                if (!isUser) return reply(dpuhy.noregis())
                if (isBanned) return reply(dpuhy.wait())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
				if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    reply(dpuhy.wait())
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/kusonimesearch?apikey=${lolhumankey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Japanese : ${get_result.japanese}\n`
                    ini_txt += `Genre : ${get_result.genre}\n`
                    ini_txt += `Seasons : ${get_result.seasons}\n`
                    ini_txt += `Producers : ${get_result.producers}\n`
                    ini_txt += `Type : ${get_result.type}\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Total Episode : ${get_result.total_episode}\n`
                    ini_txt += `Score : ${get_result.score}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Released On : ${get_result.released_on}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    link_dl = get_result.link_dl
                    for (var x in link_dl) {
                        ini_txt += `\n${x}\n`
                        for (var y in link_dl[x]) {
                            ini_txt += `${y} - ${link_dl[x][y]}\n`
                        }
                    }
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    dp.sendMessage(from, ini_buffer, image, { quoted: kmd, caption: ini_txt })
                    break
                case 'otakudesu':
                if (!isUser) return reply(dpuhy.noregis())
                if (isBanned) return reply(dpuhy.wait())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
				if (args.length == 0) return reply(`Example: ${prefix + command} https://otakudesu.tv/lengkap/pslcns-sub-indo/`)
                    reply(dpuhy.wait())
                    ini_url = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/otakudesu?apikey=${lolhumankey}&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Japanese : ${get_result.japanese}\n`
                    ini_txt += `Judul : ${get_result.judul}\n`
                    ini_txt += `Type : ${get_result.type}\n`
                    ini_txt += `Episode : ${get_result.episodes}\n`
                    ini_txt += `Aired : ${get_result.aired}\n`
                    ini_txt += `Producers : ${get_result.producers}\n`
                    ini_txt += `Genre : ${get_result.genres}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Studios : ${get_result.status}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Credit : ${get_result.credit}\n`
                    get_link = get_result.link_dl
                    for (var x in get_link) {
                        ini_txt += `\n\n*${get_link[x].title}*\n`
                        for (var y in get_link[x].link_dl) {
                            ini_info = get_link[x].link_dl[y]
                            ini_txt += `\n\`\`\`Reso : \`\`\`${ini_info.reso}\n`
                            ini_txt += `\`\`\`Size : \`\`\`${ini_info.size}\n`
                            ini_txt += `\`\`\`Link : \`\`\`\n`
                            down_link = ini_info.link_dl
                            for (var z in down_link) {
                                ini_txt += `${z} - ${down_link[z]}\n`
                            }
                        }
                    }
                    reply(ini_txt)
                    break
                case 'otakudesusearch':
                if (!isUser) return reply(dpuhy.noregis())
                if (isBanned) return reply(dpuhy.wait())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
			    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    reply(dpuhy.wait())
                   query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/otakudesusearch?apikey=${lolhumankey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Japanese : ${get_result.japanese}\n`
                    ini_txt += `Judul : ${get_result.judul}\n`
                    ini_txt += `Type : ${get_result.type}\n`
                    ini_txt += `Episode : ${get_result.episodes}\n`
                    ini_txt += `Aired : ${get_result.aired}\n`
                    ini_txt += `Producers : ${get_result.producers}\n`
                    ini_txt += `Genre : ${get_result.genres}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Studios : ${get_result.status}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Credit : ${get_result.credit}\n`
                    get_link = get_result.link_dl
                    for (var x in get_link) {
                        ini_txt += `\n\n*${get_link[x].title}*\n`
                        for (var y in get_link[x].link_dl) {
                            ini_info = get_link[x].link_dl[y]
                            ini_txt += `\n\`\`\`Reso : \`\`\`${ini_info.reso}\n`
                            ini_txt += `\`\`\`Size : \`\`\`${ini_info.size}\n`
                            ini_txt += `\`\`\`Link : \`\`\`\n`
                            down_link = ini_info.link_dl
                            for (var z in down_link) {
                                ini_txt += `${z} - ${down_link[z]}\n`
                            }
                        }
                    }
                    reply(ini_txt)
                    break
					// Information //
    			case 'deteksiwajah':
				if (!isUser) return reply(dpuhy.noregis())
                if (isBanned) return reply(dpuhy.wait())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
				var imgbb = require('imgbb-uploader')
				if ((isMedia && !kmd.message.videoMessage || isQuotedImage) && args.length == 0) {
				  ted = isQuotedImage ? JSON.parse(JSON.stringify(kmd).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: kmd
				  reply(dpuhy.wait())
				  owgi = await dp.downloadAndSaveMediaMessage(ted)
				  anu2 = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
				  hehe = await getBuffer(`http://lolhuman.herokuapp.com/api/facedetect?apikey=${lolhumankey}&img=${kmd.display_url}`)
				 dp.sendMessage(from, hehe, image, {quoted:kmd})
				} else {
				  reply('Kirim gambar dengan caption .deteksiwajah atau tag gambar yang sudah terkirim')
				}
				break
				case 'deteksigender':
				if (!isUser) return reply(dpuhy.noregis())
                if (isBanned) return reply(dpuhy.wait())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
				var imgbb = require('imgbb-uploader')
				if ((isMedia && !kmd.message.videoMessage || isQuotedImage) && args.length == 0) {
				  ted = isQuotedImage ? JSON.parse(JSON.stringify(kmd).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: kmd
				  reply(dpuhy.wait())
				  owgi = await dp.downloadAndSaveMediaMessage(ted)
	 			 anu2 = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	 			 hehe = await fetchJson(`http://lolhuman.herokuapp.com/api/genderdetect?apikey=${lolhumankey}&img=${kmd.display_url}`)
	 			 gender = `[ DETEKSI GENDER ] \nMenurut bot.. seseorang di gambar bergender = *${hehe.result}*\n\nFEMALE = PEREMPUAN\nMALE = LAKI-LAKI`
				 dp.sendMessage(from, gender, text, {quoted:kmd})
				} else {
				  reply('Kirim gambar dengan caption .deteksigender atau tag gambar yang sudah terkirim')
				}
				break
				case 'deteksiumur':
				if (!isUser) return reply(dpuhy.noregis())
                if (isBanned) return reply(dpuhy.wait())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
				var imgbb = require('imgbb-uploader')
				if ((isMedia && !kmd.message.videoMessage || isQuotedImage) && args.length == 0) {
	 			 ted = isQuotedImage ? JSON.parse(JSON.stringify(kmd).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: kmd
				  reply(dpuhy.wait())
				  owgi = await dp.downloadAndSaveMediaMessage(ted)
				  anu2 = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
				  hehe = await fetchJson(`http://lolhuman.herokuapp.com/api/agedetect?apikey=${lolhumankey}&img=${kmd.display_url}`)
				  gender = `[ DETEKSI UMUR ] \nMenurut bot.. seseorang di gambar tersebut berumur = *${hehe.result}*`
				 dp.sendMessage(from, gender, text, {quoted:kmd})
				} else {
				  reply('Kirim gambar dengan caption .deteksiumur atau tag gambar yang sudah terkirim')
				}
				break
                case 'heroml':
                if (!isUser) return reply(dpuhy.noregis())
                if (isBanned) return reply(dpuhy.wait())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
				if (args.length == 0) return reply(`Example: ${prefix + command} Fanny`)
                    reply(dpuhy.wait())
                    hero = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/heroml/${hero}?apikey=${lolhumankey}`)
                    get_result = get_result.result
                    ini_txt = `Name : ${get_result.hero_name}\n`
                    ini_txt += `Entrance Quotes : ${get_result.ent_quotes}\n`
                    ini_txt += `Role : ${get_result.detail.role}\n`
                    ini_txt += `Specialty : ${get_result.detail.specialty}\n`
                    ini_txt += `Laning : ${get_result.detail.laning_recommendation}\n`
                    ini_txt += `Release : ${get_result.detail.release_date}\n`
                    ini_txt += `Movement speed : ${get_result.attr.movement_speed}\n`
                    ini_txt += `Physical attack : ${get_result.attr.physical_attack}\n`
                    ini_txt += `Magic power : ${get_result.attr.magic_power}\n`
                    ini_txt += `Physical defense : ${get_result.attr.physical_defense}\n`
                    ini_txt += `Magic defense : ${get_result.attr.magic_defense}\n`
                    ini_txt += `Critical rate : ${get_result.attr.basic_atk_crit_rate}\n`
                    ini_txt += `Hp : ${get_result.attr.hp}\n`
                    ini_txt += `Mana : ${get_result.attr.mana}\n`
                    ini_txt += `Mana regen : ${get_result.attr.mana_regen}\n`
                    ini_icon = await getBuffer(get_result.icon)
                    dp.sendMessage(from, ini_icon, image, { quoted: kmd, caption: ini_txt })
                    break
					case 'tts':
				    if (!isUser) return reply(dpuhy.noregis())
                    if (isBanned) return reply(dpuhy.wait())
				    if (args.length < 1) return dp.sendMessage(from, 'Diperlukan kode bahasa!! untuk melihat list bahasa, ketik ${prefix}bahasa', text, {quoted: kmd})
					const gtts = require('./KmdDatabase/gtts')(args[0])
					if (args.length < 2) return dp.sendMessage(from, 'teksnya mana?', text, {quoted: kmd})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 300
					? reply('teksnya kepanjangan')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (e) => {
							fs.unlinkSync(ranm)
							buffer = fs.readFileSync(rano)
							if (e) return reply(ind.stikga())
							dp.sendMessage(from, buffer, audio, {quoted: kmd, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					await limitAdd(sender)
					break
                    case 'translate':
					case 'arti':
					case 'terjemahan':
					case 'terjemahkan':
                if (!isUser) return reply(dpuhy.noregis())
                if (isBanned) return reply(dpuhy.wait())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
				if (args.length == 0) return reply(`${prefix + command} kode bahasa teks yang mau ditranslite\n\nContoh: ${prefix + command} en Tahu Krispi\n\nUntuk melihat kode bahasa gunakan perintah .bahasa`)
                    reply(dpuhy.wait())
                    kode_negara = args[0]
                    args.shift()
                    ini_txt = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/translate/auto/${kode_negara}?apikey=${lolhumankey}&text=${ini_txt}`)
                    get_result = get_result.result
                    init_txt = `From : ${get_result.from}\n`
                    init_txt += `To : ${get_result.to}\n`
                    init_txt += `Original : ${get_result.original}\n`
                    init_txt += `Translated : ${get_result.translated}\n`
                    init_txt += `Pronunciation : ${get_result.pronunciation}\n`
                    reply(init_txt)
                    break
                case 'brainly':
                if (!isUser) return reply(dpuhy.noregis())
                if (isBanned) return reply(dpuhy.wait())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
				reply(dpuhy.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Hokage adalah`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/brainly?apikey=${lolhumankey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = "Result : \n"
                    for (var x of get_result) {
                        ini_txt += `${x.title}\n`
                        ini_txt += `${x.url}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'jadwaltv':
                if (!isUser) return reply(dpuhy.noregis())
                if (isBanned) return reply(dpuhy.wait())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
				reply(dpuhy.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} RCTI`)
                    channel = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/jadwaltv/${channel}?apikey=${lolhumankey}`)
                    get_result = get_result.result
                    ini_txt = `Jadwal TV ${channel.toUpperCase()}\n`
                    for (var x in get_result) {
                        ini_txt += `${x} - ${get_result[x]}\n`
                    }
                    reply(ini_txt)
                    break
                case 'jadwaltvnow':
                if (!isUser) return reply(dpuhy.noregis())
                if (isBanned) return reply(dpuhy.wait())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
				reply(dpuhy.wait())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/jadwaltv/now?apikey=${lolhumankey}`)
                    get_result = get_result.result
                    ini_txt = `Jadwal TV Now :\n`
                    for (var x in get_result) {
                        ini_txt += `${x.toUpperCase()}${get_result[x]}\n\n`
                    }
                    reply(ini_txt)
                    break 
				case 'newsinfo':
                if (!isUser) return reply(dpuhy.noregis())
                if (isBanned) return reply(dpuhy.wait())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
				reply(dpuhy.wait())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/newsinfo?apikey=${lolhumankey}`)
                    get_result = get_result.result
                    ini_txt = "Result :\n"
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Author : ${x.author}\n`
                        ini_txt += `Source : ${x.source.name}\n`
                        ini_txt += `Url : ${x.url}\n`
                        ini_txt += `Published : ${x.publishedAt}\n`
                        ini_txt += `Description : ${x.description}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'cnnindonesia':
                if (!isUser) return reply(dpuhy.noregis())
                if (isBanned) return reply(dpuhy.wait())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
				reply(dpuhy.wait())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/cnnindonesia?apikey=${lolhumankey}`)
                    get_result = get_result.result
                    ini_txt = "Result :\n"
                    for (var x of get_result) {
                        ini_txt += `Judul : ${x.judul}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Tipe : ${x.tipe}\n`
                        ini_txt += `Published : ${x.waktu}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'cnnnasional':
                if (!isUser) return reply(dpuhy.noregis())
                if (isBanned) return reply(dpuhy.wait())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
				reply(dpuhy.wait())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/cnnindonesia/nasional?apikey=${lolhumankey}`)
                    get_result = get_result.result
                    ini_txt = "Result :\n"
                    for (var x of get_result) {
                        ini_txt += `Judul : ${x.judul}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Tipe : ${x.tipe}\n`
                        ini_txt += `Published : ${x.waktu}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'cnninternasional':
                if (!isUser) return reply(dpuhy.noregis())
                if (isBanned) return reply(dpuhy.wait())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
				reply(dpuhy.wait())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/cnnindonesia/internasional?apikey=${lolhumankey}`)
                    get_result = get_result.result
                    ini_txt = "Result :\n"
                    for (var x of get_result) {
                        ini_txt += `Judul : ${x.judul}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Tipe : ${x.tipe}\n`
                        ini_txt += `Published : ${x.waktu}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'infogempa':
                if (!isUser) return reply(dpuhy.noregis())
                if (isBanned) return reply(dpuhy.wait())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
				reply(dpuhy.wait())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/infogempa?apikey=${lolhumankey}`)
                    get_result = get_result.result
                    ini_txt = `Lokasi : ${get_result.lokasi}\n`
                    ini_txt += `Waktu : ${get_result.waktu}\n`
                    ini_txt += `Potensi : ${get_result.potensi}\n`
                    ini_txt += `Magnitude : ${get_result.magnitude}\n`
                    ini_txt += `Kedalaman : ${get_result.kedalaman}\n`
                    ini_txt += `Koordinat : ${get_result.koordinat}`
                    get_buffer = await getBuffer(get_result.map)
                    dp.sendMessage(from, get_buffer, image, { quoted: kmd, caption: ini_txt })
                    break
                case 'lirik':
                if (!isUser) return reply(dpuhy.noregis())
                if (isBanned) return reply(dpuhy.wait())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
				if (args.length == 0) return reply(`Masukan judul lagunya coy Example: ${prefix + command} Melukis Senja`)
                    reply(dpuhy.wait())
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/lirik?apikey=${lolhumankey}&query=${query}`)
                    reply(get_result.result)
                    break
                case 'cuaca':
                if (!isUser) return reply(dpuhy.noregis())
                if (isBanned) return reply(dpuhy.wait())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
				if (args.length == 0) return reply(`Masukan nama wilayah Example: ${prefix + command} Yogyakarta`)
                    reply(dpuhy.wait())
                    if (args.length == 0) return reply(`Masukan nama wilayah Example: ${prefix + command} Yogyakarta`)
                    daerah = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/cuaca/${daerah}?apikey=${lolhumankey}`)
                    get_result = get_result.result
                    ini_txt = `Tempat : ${get_result.tempat}\n`
                    ini_txt += `Cuaca : ${get_result.cuaca}\n`
                    ini_txt += `Angin : ${get_result.angin}\n`
                    ini_txt += `Description : ${get_result.description}\n`
                    ini_txt += `Kelembapan : ${get_result.kelembapan}\n`
                    ini_txt += `Suhu : ${get_result.suhu}\n`
                    ini_txt += `Udara : ${get_result.udara}\n`
                    ini_txt += `Permukaan laut : ${get_result.permukaan_laut}\n`
                    dp.sendMessage(from, { degreesLatitude: get_result.latitude, degreesLongitude: get_result.longitude }, location, { quoted: kmd })
                    reply(ini_txt)
                    break
                case 'covidindo':
                if (!isUser) return reply(dpuhy.noregis())
                if (isBanned) return reply(dpuhy.wait())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
				reply(dpuhy.wait())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/corona/indonesia?apikey=${lolhumankey}`)
                    get_result = get_result.result
                    ini_txt = `Positif : ${get_result.positif}\n`
                    ini_txt += `Sembuh : ${get_result.sembuh}\n`
                    ini_txt += `Dirawat : ${get_result.dirawat}\n`
                    ini_txt += `Meninggal : ${get_result.meninggal}`
                    reply(ini_txt)
                    break
                case 'covidglobal':
                if (!isUser) return reply(dpuhy.noregis())
                if (isBanned) return reply(dpuhy.wait())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
				reply(dpuhy.wait())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/corona/global?apikey=${lolhumankey}`)
                    get_result = get_result.result
                    ini_txt = `Positif : ${get_result.positif}\n`
                    ini_txt += `Sembuh : ${get_result.sembuh}\n`
                    ini_txt += `Dirawat : ${get_result.dirawat}\n`
                    ini_txt += `Meninggal : ${get_result.meninggal}`
                    reply(ini_txt)
                    break
                case 'kodepos':
                if (!isUser) return reply(dpuhy.noregis())
                if (isBanned) return reply(dpuhy.wait())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
				if (args.length == 0) return reply(`masukan nama wilayah untuk mengetahui kode pos, atau sebaliknya Example: ${prefix + command} Slemanan or ${prefix + command} 66154`)
                    reply(dpuhy.wait())
                    daerah = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/kodepos?apikey=${lolhumankey}&query=${daerah}`)
                    get_result = get_result.result[0]
                    ini_txt = `Provinsi : ${get_result.province}\n`
                    ini_txt += `Kabupaten : ${get_result.city}\n`
                    ini_txt += `Kecamatan : ${get_result.subdistrict}\n`
                    ini_txt += `Kelurahan : ${get_result.urban}\n`
                    ini_txt += `Kode Pos : ${get_result.postalcode}`
                    reply(ini_txt)
                    break
                case 'jadwalbola':
                if (!isUser) return reply(dpuhy.noregis())
                if (isBanned) return reply(dpuhy.wait())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
				reply(dpuhy.wait())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/jadwalbola?apikey=${lolhumankey}`)
                    get_result = get_result.result
                    ini_txt = "Jadwal Bola :\n"
                    for (var x of get_result) {
                        ini_txt += `Hari : ${x.hari}\n`
                        ini_txt += `Jam : ${x.jam}\n`
                        ini_txt += `Event : ${x.event}\n`
                        ini_txt += `Match : ${x.match}\n`
                        ini_txt += `TV : ${x.tv}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'indbeasiswa':
                if (!isUser) return reply(dpuhy.noregis())
                if (isBanned) return reply(dpuhy.wait())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
				reply(dpuhy.wait())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/indbeasiswa?apikey=${lolhumankey}`)
                    get_result = get_result.result
                    ini_txt = 'Info Beasiswa :\n'
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'hoax':
                if (!isUser) return reply(dpuhy.noregis())
                if (isBanned) return reply(dpuhy.wait())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
				reply(dpuhy.wait())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/turnbackhoax?apikey=${lolhumankey}`)
                    get_result = get_result.result
                    ini_txt = 'Info Hoax :\n'
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Posted : ${x.posted}\n`
                        ini_txt += `Description : ${x.desc}\n\n`
                    }
                    reply(ini_txt)
                    break

                case 'bayar':
                case 'payments':
		        me = dp.user
		        uptime = process.uptime()
		        me = dp.user
		        uptime = process.uptime()
		        dp.updatePresence(from, Presence.composing)
		        setTimeout( () => {
			        dp.updatePresence(from, Presence.composing)
		        }, 4000)
		        setTimeout( () => {
			        dp.updatePresence(from, Presence.composing)
			        reply("*Penting :*\n*1. Harap Perhatikan! JANGAN Kembali, Sebelum Pembayaran, Ini Sistem Robot*\n*2. Jangan Spam Jika Sudah Melakukan Pembayaran, Cukup Sertakan Bukti Pembayarannya DAN bersabar, WhatsApp Bot Bakal Balas Pesan Anda*")
		        }, 1000)
		        setTimeout( () => {
			        dp.updatePresence(from, Presence.composing)
			        reply("Pembayaran pendaftaran nya\n\n*Lewat pulsa*\nTelkomsel : *0823-2288-8788*\nThree : *0857-0032-5917*\n\n*Lewat Atm*\nBRI Rekening  : *5320-01-018862-53-6*\nNAMA : KHAMID MIRDAD\n\n*Aplikasi Keuangan*\nATAS NAMA : KHAMID MIRDAD\nDANA :\n*0857-0032-5917*\nGOPAY :\n*0857-0032-5917*\nOVO :\n*0857-0032-5917*\n\n *WAJIB! Sertakan Bukti Pembayaran nya ya kak*\n\nLangsung tf aja, Batas Menunggu Waktu Pembayaran, besok malam pukul 9:00 WIB\n\nVia pulsa kena rate/Tambahan Pulsa Sebesar 5.000 rb")
		        }, 2000)
		        setTimeout( () => {
			        dp.updatePresence(from, Presence.composing)
			        reply(`Silahkan Kirim Bukti Pembayaran-nya Di nomor owner🔻\nketik ${prefix}owner untuk chat owner serta kirim bukti pembayaran tersebut.`)
		        }, 4000)
		        break					
				case 'cerpen':
                if (!isUser) return reply(dpuhy.noregis())
                if (isBanned) return reply(dpuhy.wait())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
				reply(dpuhy.wait())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/cerpen?apikey=${lolhumankey}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Creator : ${get_result.creator}\n`
                    ini_txt += `Story :\n${get_result.cerpen}`
                    reply(ini_txt)
                    break
                case 'ceritahoror':
                if (!isUser) return reply(dpuhy.noregis())
                if (isBanned) return reply(dpuhy.wait())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
				reply(dpuhy.wait())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ceritahoror?apikey=${lolhumankey}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    ini_txt += `Story :\n${get_result.story}\n`
                    thumbnail = await getBuffer(get_result.thumbnail)
                    dp.sendMessage(from, thumbnail, image, { quoted: kmd, caption: ini_txt })
                    break	
					// Random Text //
                case 'quotes':
                if (!isUser) return reply(dpuhy.noregis())
                if (isBanned) return reply(dpuhy.wait())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
				reply(dpuhy.wait())
                    quotes = await fetchJson(`http://api.lolhuman.xyz/api/random/quotes?apikey=${lolhumankey}`)
                    quotes = quotes.result
                    author = quotes.by
                    quotes = quotes.quote
                    reply(`_${quotes}_\n\n* ${author}*`)
                    break
                case 'quotesanime':
                if (!isUser) return reply(dpuhy.noregis())
                if (isBanned) return reply(dpuhy.wait())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
				reply(dpuhy.wait())
                    quotes = await fetchJson(`http://api.lolhuman.xyz/api/random/quotesnime?apikey=${lolhumankey}`)
                    quotes = quotes.result
                    quote = quotes.quote
                    char = quotes.character
                    anime = quotes.anime
                    episode = quotes.episode
                    reply(`_${quote}_\n\n* ${char}*\n* ${anime} ${episode}*`)
                    break
                case 'quotesdilan':
                if (!isUser) return reply(dpuhy.noregis())
                if (isBanned) return reply(dpuhy.wait())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
				reply(dpuhy.wait())
                    quotedilan = await fetchJson(`http://api.lolhuman.xyz/api/quotes/dilan?apikey=${lolhumankey}`)
                    reply(quotedilan.result)
                    break
                case 'quotesimage':
                case 'faktaunik':
                case 'katabijak':
                case 'pantun':
                case 'bucin':
                if (!isUser) return reply(dpuhy.noregis())
                if (isBanned) return reply(dpuhy.wait())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
				reply(dpuhy.wait())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/random/${command}?apikey=${lolhumankey}`)
                    reply(get_result.result)
                    break
                case 'randomnama':
                if (!isUser) return reply(dpuhy.noregis())
                if (isBanned) return reply(dpuhy.wait())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
				reply(dpuhy.wait())
                    anu2 = await fetchJson(`http://api.lolhuman.xyz/api/random/nama?apikey=${lolhumankey}`)
                    reply(anu2.result)
                    break
					
					
				case ' transfer':
				case 'transfer':
				case 'tf':
				if (!isUser) return reply(dpuhy.noregis())
                if (isBanned) return reply(dpuhy.wait())
				if (!q.includes('|')) return  reply(dpuhy.wrongf())
                const tujuan = q.substring(0, q.indexOf('|') - 1)
                const jumblah = q.substring(q.lastIndexOf('|') + 1)
                if(isNaN(jumblah)) return await reply('jumlah harus berupa angka!!')
                if (jumblah < 100 ) return reply(`minimal transfer 100`)
                if (checkATMuser(sender) < jumblah) return reply(`uang mu tidak mencukupi untuk melakukan transfer`)
                const tujuantf = `${tujuan.replace("@", '')}@s.whatsapp.net`
                fee = 0.005 *  jumblah
                hasiltf = jumblah - fee
                addKoinUser(tujuantf, hasiltf)
                confirmATM(sender, jumblah)
                addKoinUser('6289646775713@s.whatsapp.net', fee)
                reply(`*「 SUKSES 」*\n\npengiriman uang telah sukses\ndari : +${sender.split("@")[0]}\nke : +${tujuan}\njumblah transfer : ${jumblah}\npajak : ${fee}`)
                break
				case ' buylimit':
				case 'buylimit':
				case 'belilimit':
				if (!isUser) return reply(dpuhy.noregis())
                if (isBanned) return reply(dpuhy.wait())
					if (args.length < 1) return reply('mau beli berapa?')
				payout = body.slice(10)
				const koinPerlimit = 30
				const total = koinPerlimit * payout
				if ( checkATMuser(sender) <= total) return reply(`MAAF UANG KAMU BELUM CUKUP, JIKA INGIN MELIHAT UANG KETIK ${prefix}dompet`)
				if ( checkATMuser(sender) >= total ) {
					confirmATM(sender, total)
					bayarLimit(sender, payout)
					await reply(`*PEMBELIAN BERHASIL*\n\n*pengirim:* @KHAMID MIRDAD\n*penerima:* ${pushname}\n*nominal pembelian:* ${payout} \n *harga limit:* ${koinPerlimit}/limit\n *sisa uang mu:* ${checkATMuser(sender)}\n\nproses berhasil dengan nomer pembayaran\n${createSerial(15)}`)
				} 
				break
				case 'dompet':
				if (!isUser) return reply(dpuhy.noregis())
                if (isBanned) return reply(dpuhy.wait())
				const kantong = checkATMuser(sender)
				reply(dpuhy.uangkau(pushname, sender, kantong))
				break
				case 'sewabot':
				reply(`20.k /bulan\n*untuk pembayaran ketik ${prefix}bayar*`)
				break
				//funmenu
				case 'tebakgambar':
        if (!isUser) return reply(dpuhy.noregis())
                if (isBanned) return reply(dpuhy.wait())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
				
					data = fs.readFileSync('./KmdDatabase/tebakgambar.js');
					jsonData = JSON.parse(data);
					rannikdex = Math.floor(Math.random() * jsonData.length);
					randKey = jsonData[rannikdex];
					randSoal = await getBuffer(randKey.result.soalImg)
					setTimeout( () => {
					dp.sendMessage(from, '* Jawaban :* '+ randKey.result.jawaban +'\n', text, {quoted: kmd}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					dp.sendMessage(from, '10 Detik lagi…', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					dp.sendMessage(from, '20 Detik lagi…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					dp.sendMessage(from, '30 Detik lagi…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					dp.sendMessage(from, randSoal, image, { caption: '_Jelaskan Apa Maksud Gambar Ini_', quoted: kmd }) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break
			case 'tebakkata':
          if (!isUser) return reply(dpuhy.noregis())
                if (isBanned) return reply(dpuhy.wait())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
				
				data = fs.readFileSync('./KmdDatabase/tebakkata.js');
        tebak = JSON.parse(data);
				kata = Math.floor(Math.random() * tebak.length);
				randKey = tebak[kata];
				Pertanyaan = '*Pertanyaan :* \n```'+randKey.result.soal +'```'
					setTimeout( () => {
					dp.sendMessage(from, '* Jawaban :* \n```'+randKey.result.jawaban +'```', text, {quoted: kmd}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					  reply('Waktu Anda Habis')
					}, 29000)
					setTimeout( () => {
					dp.sendMessage(from, '10 Detik lagi…', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					dp.sendMessage(from, '20 Detik lagi…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					dp.sendMessage(from, '30 Detik lagi…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					dp.sendMessage(from, Pertanyaan, text, {quoted: kmd }) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break
				case 'caklontong':
          if (!isUser) return reply(dpuhy.noregis())
                if (isBanned) return reply(dpuhy.wait())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
				
				data = fs.readFileSync('./KmdDatabase/caklontong.js');
				cak = JSON.parse(data);
				lontong = Math.floor(Math.random() * cak.length);
				randKey = cak[lontong];
				Pertanyaan = randKey.result.soal
				Jawaban = '\n*'+randKey.result.desc +'*'
					setTimeout( () => {
					dp.sendMessage(from, Jawaban, text, {quoted: kmd})
					}, 30000)
					setTimeout( () => {
					dp.sendMessage(from, '10 Detik lagi…', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					dp.sendMessage(from, '20 Detik lagi…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					dp.sendMessage(from, '30 Detik lagi…', text) // ur cods
					}, 2500) // 1000 = 1s
					dp.sendMessage(from, Pertanyaan, text, {quoted: kmd})
					await limitAdd(sender) 
				break

				case 'family100':
          if (!isUser) return reply(dpuhy.noregis())
                if (isBanned) return reply(dpuhy.wait())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
				
				data = fs.readFileSync('./KmdDatabase/family100.js');
fami = JSON.parse(data);
				ly100 = Math.floor(Math.random() * fami.length);
				randKey = fami[ly100];
				Pertanyaan = randKey.result.soal
					setTimeout( () => {
					dp.sendMessage(from, '* Jawaban :* \n```'+randKey.result.jawaban +'```', text, {quoted: kmd}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					  reply('Waktu Anda Habis')
					}, 29000)
					setTimeout( () => {
					dp.sendMessage(from, '10 Detik lagi…', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					dp.sendMessage(from, '20 Detik lagi…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					dp.sendMessage(from, '30 Detik lagi…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					dp.sendMessage(from, '*'+ Pertanyaan +'*', text, {quoted: kmd }) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break
				// Searching
                case 'gimage':
                case 'carifoto':
                if (!isUser) return reply(dpuhy.noregis())
                if (isBanned) return reply(dpuhy.wait())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
				if (args.length == 0) return reply(`yang mau dicari apa bro Example: ${prefix + command} nobita`)
                    reply(dpuhy.wait())
                    query = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolhumankey}&query=${query}`)
                    dp.sendMessage(from, ini_buffer, image, { quoted: kmd })
                    break
                case 'gimage2':
                if (!isUser) return reply(dpuhy.noregis())
                if (isBanned) return reply(dpuhy.wait())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
				if (args.length == 0) return reply(`yang mau dicari apa bro Example: ${prefix + command} nobita`)
                    reply(dpuhy.wait())
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/gimage2?apikey=${lolhumankey}&query=${query}`)
                    get_result = get_result.result
                    for (var x = 0; x <= 5; x++) {
                        var ini_buffer = await getBuffer(get_result[x])
                        dp.sendMessage(from, ini_buffer, image)
                    }
                    break
                case 'konachan':
                if (!isUser) return reply(dpuhy.noregis())
                if (isBanned) return reply(dpuhy.wait())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
				if (args.length == 0) return reply(`Example: ${prefix + command} azur_lane`)
                    reply(dpuhy.wait())
                    query = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/konachan?apikey=${lolhumankey}&query=${query}`)
                    dp.sendMessage(from, ini_buffer, image, { quoted: kmd })
                    break
                case 'wallpapersearch':
                if (!isUser) return reply(dpuhy.noregis())
                if (isBanned) return reply(dpuhy.wait())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
				if (args.length == 0) return reply(`masukan apa yang mau dicari Example: ${prefix + command} itachi`)
                    reply(dpuhy.wait())
                    query = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/wallpaper?apikey=${lolhumankey}&query=${query}`)
                    dp.sendMessage(from, ini_buffer, image, { quoted: kmd })
                    break
                case 'getwalpaper':
                case 'walpaper':
                if (!isUser) return reply(dpuhy.noregis())
                if (isBanned) return reply(dpuhy.wait())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
				if (args.length == 0) return reply(`Example: ${prefix + command} sasuke`)
                    reply(dpuhy.wait())
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/wallpaper2?apikey=${lolhumankey}&query=${query}`)
                    ini_buffer = await getBuffer(get_result.result)
                    dp.sendMessage(from, ini_buffer, image, { quoted: kmd })
                    break
                case 'playstore':
                if (!isUser) return reply(dpuhy.noregis())
                if (isBanned) return reply(dpuhy.wait())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
				if (args.length == 0) return reply(`masukan nama aplikasinya Example: ${prefix + command} telegram`)
                    reply(dpuhy.wait())
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/playstore?apikey=${lolhumankey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = 'Play Store Search : \n'
                    for (var x of get_result) {
                        ini_txt += `Name : ${x.title}\n`
                        ini_txt += `ID : ${x.appId}\n`
                        ini_txt += `Developer : ${x.developer}\n`
                        ini_txt += `Link : ${x.url}\n`
                        ini_txt += `Price : ${x.priceText}\n`
                        ini_txt += `Price : ${x.price}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'shopee':
                case 'soope':
                case 'sopee':
                case 'shopi':
                case 'shopii':
                case 'shope':
                if (!isUser) return reply(dpuhy.noregis())
                if (isBanned) return reply(dpuhy.wait())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
				if (args.length == 0) return reply(`masukan nama barangnya gan Example: ${prefix + command} tas gendong`)
                    reply(dpuhy.wait())
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/shopee?apikey=${lolhumankey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = 'Shopee Search : \n'
                    for (var x of get_result) {
                        ini_txt += `Name : ${x.name}\n`
                        ini_txt += `Terjual : ${x.sold}\n`
                        ini_txt += `Stock : ${x.stock}\n`
                        ini_txt += `Lokasi : ${x.shop_loc}\n`
                        ini_txt += `Link : ${x.link_produk}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'google':
                if (!isUser) return reply(dpuhy.noregis())
                if (isBanned) return reply(dpuhy.wait())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
				if (args.length == 0) return reply(`yang mau dicari apaan Example: ${prefix + command} resep makanan`)
                    reply(dpuhy.wait())
                    query2 = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/gsearch?apikey=${lolhumankey}&query=${query2}`)
                    get_result = get_result.result
                    ini_txt = 'Google Search : \n'
                    for (var x of get_result) {
                        ini_txt += ` Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Desc : ${x.desc}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'stickerwa':
               if (!isUser) return reply(dpuhy.noregis())
                if (isBanned) return reply(dpuhy.wait())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
				reply(dpuhy.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Koceng Imot`)
                    que2ry = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/dpstikwa?apikey=${lolhumankey}&query=${que2ry}`)
                    get_result = get_result.result[0].stickers
                    for (var x of get_result) {
                        ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/convert/towebp?apikey=${lolhumankey}&img=${x}`)
                        dp.sendMessage(from, ini_buffer, sticker)
                    }
                    break
					
					
					
					
					 // Primbon
                case 'artinama':
                if (!isUser) return reply(dpuhy.noregis())
                if (isBanned) return reply(dpuhy.wait())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
				if (args.length == 0) return reply(`Namanya siapa coy Example: ${prefix + command} Jarwo`)
                    reply(dpuhy.wait())
                    ini_nama = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/artinama?apikey=${lolhumankey}&nama=${ini_nama}`)
                    reply(get_result.result)
                    break
                case 'jodoh':
                if (!isUser) return reply(dpuhy.noregis())
                if (isBanned) return reply(dpuhy.wait())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
				if (args.length == 0) return reply(`siapa dan siapa gan Contoh: ${prefix + command} tiko & Tono`)
                    reply(dpuhy.wait())
                    ini_nama = args.join(" ").split("&")
                    nama1 = ini_nama[0].trim()
                    nama2 = ini_nama[1].trim()
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/jodoh/${nama1}/${nama2}?apikey=${lolhumankey}`)
                    get_result = get_result.result
                    ini_txt = `Positif : ${get_result.positif}\n`
                    ini_txt += `Negative : ${get_result.negatif}\n`
                    ini_txt += `Deskripsi : ${get_result.deskripsi}`
                    reply(txt)
                    break
                case 'weton':
                if (!isUser) return reply(dpuhy.noregis())
                if (isBanned) return reply(dpuhy.wait())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
				if (args.length == 0) return reply(`Masukan tanggalnya kak Example: ${prefix + command} 12 12 2020`)
                    reply(dpuhy.wait())
                    tanggal = args[0]
                    bulan = args[1]
                    tahun = args[2]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/weton/${tanggal}/${bulan}/${tahun}?apikey=${lolhumankey}`)
                    get_result = get_result.result
                    ini_txt = `Weton : ${get_result.weton}\n`
                    ini_txt += `Pekerjaan : ${get_result.pekerjaan}\n`
                    ini_txt += `Rejeki : ${get_result.rejeki}\n`
                    ini_txt += `Jodoh : ${get_result.jodoh}`
                    reply(ini_txt)
                    break
                case 'jadian':
                if (!isUser) return reply(dpuhy.noregis())
                if (isBanned) return reply(dpuhy.wait())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
				if (args.length == 0) return reply(`Example: ${prefix + command} 12 12 2020`)
                    reply(dpuhy.wait())
                    tanggal = args[0]
                    bulan = args[1]
                    tahun = args[2]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/jadian/${tanggal}/${bulan}/${tahun}?apikey=${lolhumankey}`)
                    get_result = get_result.result
                    ini_txt = `Karakteristik : ${get_result.karakteristik}\n`
                    ini_txt += `Deskripsi : ${get_result.deskripsi}`
                    reply(ini_txt)
                    break
                case 'tebakumur':
                if (!isUser) return reply(dpuhy.noregis())
                if (isBanned) return reply(dpuhy.wait())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
				if (args.length == 0) return reply(`Yang mau di tebak siapa gan, Example: ${prefix + command} Jarwo`)
                    reply(dpuhy.wait())
                    ini_name = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/tebakumur?apikey=SoftApikey&name=${ini_name}`)
                    get_result = get_result.result
                    ini_txt = `Nama : ${get_result.name}\n`
                    ini_txt += `Umur : ${get_result.age}`
                    reply(ini_txt)
                    break
					
					//creator
					case 'semoji':
                if (!isUser) return reply(dpuhy.noregis())
                if (isBanned) return reply(dpuhy.wait())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
				if (args.length == 0) return reply(`masukan emoji yang mau di ubah ke stiker Example: ${prefix + command} 😋`)
                    reply(dpuhy.wait())
                    emoji = args[0]
                    try {
                        emoji = encodeURI(emoji[0])
                    } catch {
                        emoji = encodeURI(emoji)
                    }
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/smoji/${emoji}?apikey=${lolhumankey}`)
                    dp.sendMessage(from, ini_buffer, sticker, { quoted: kmd })
                    break
                case 'fakedonald':
                if (!isUser) return reply(dpuhy.noregis())
                if (isBanned) return reply(dpuhy.wait())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
				if (args.length == 0) return reply(`Masukan teks yang mau ditampilkan di postingan. Example: ${prefix + command} hai gans`)
                    reply(dpuhy.wait())
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/tweettrump?apikey=${lolhumankey}&text=${ini_txt}`)
                    dp.sendMessage(from, ini_buffer, image, { quoted: kmd })
                    break
                case 'faketoko':
                if (!isUser) return reply(dpuhy.noregis())
                if (isBanned) return reply(dpuhy.wait())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
				reply(dpuhy.wait())
                    await faketoko(teks = "Tahu Bacem", url_image = "https://i.ibb.co/JdfQ73m/photo-2021-02-05-10-13-39.jpg", title = "arifi", code = "IDR", price = 1000000)
                    break
					
					
					// Converter
                case 'togif':
                if (!isUser) return reply(dpuhy.noregis())
                if (isBanned) return reply(dpuhy.wait())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
				reply(dpuhy.wait())
                    if ((isMedia && !kmd.message.videoMessage || isQuotedSticker)) {
                        const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(kmd).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : kmd
                        filePath = await dp.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        file_name = getRandom(".gif")
                        ini_txt = args.join(" ").split("|")
                        request({
                            url: `http://api.lolhuman.xyz/api/convert/togif?apikey=${lolhumankey}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath),
                            },
                            encoding: "binary"
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            ini_buff = fs.readFileSync(file_name)
                            dp.sendMessage(from, ini_buff, video, { quoted: kmd })
                            fs.unlinkSync(file_name)
                        });
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break
					    // Random Image //
                case 'art':
                case 'bts':
                case 'exo':
                case 'elf':
                case 'loli':
                case 'neko':
                case 'waifu':
                case 'shota':
                case 'husbu':
                case 'sagiri':
                case 'shinobu':
                case 'megumin':
                case 'wallnime':
                if (!isUser) return reply(dpuhy.noregis())
                if (isBanned) return reply(dpuhy.wait())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
				reply(dpuhy.wait())
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/${command}?apikey=${lolhumankey}`)
                    dp.sendMessage(from, ini_buffer, image, { quoted: kmd })
                    break
					
					//SURAT TO MENU
case 'suratto': //
                if (!isUser) return reply(dpuhy.noregis())
                if (isBanned) return reply(dpuhy.wait())
				if (args.length < 1) return reply(`Ketik ${prefix}suratto No tujuan|Isi surat`)
				const textp = body.slice(9)
				const noorg2 = textp.split("|")[0]
				const katakita2 = textp.split("|")[1]
				const kataorg2 = `Surat Dari ${sender.replace('@s.whatsapp.net')}`
				dp.sendMessage(`${noorg2}@s.whatsapp.net`, `
┌──• *SURAT FITUR*
│
│° *From:* ${pushname}
│° *Number:* @${sender.split("@")[0]}
│° *For:* You
│° *Isi* Surat : ◦➛ ${katakita2}
┕━━━━━━━━━━━━━━━⳹•••
┌──• *BALAS SURAT*  
│° Untuk Membalas Ketik:
│    #suratto (Surat lu|No Penerima)
│° Contoh: 
│    #suratto (Hai Juga|6289646775713)
┕━━━━━━━━━━━━━━━⳹•••
「 *${NamaBot}* 」`, text, {quoted: { key: {fromMe:false, participant:`${noorg2}@s.whatsapp.net`},
				message: { conversation: `${kataorg2}`, contextInfo: {"mentionedJid": [sender] }}}});	
				reply('Surat Sukses Dikirim')
				break
				//FUN Menu
				case 'truth':
                if (!isUser) return reply(dpuhy.noregis())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
                if (isBanned) return reply(dpuhy.baned())
				const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
				const ttrth = trut[Math.floor(Math.random() * trut.length)]
				truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
				dp.sendMessage(from, truteh, image, { caption: 'Truth\n\n'+ ttrth, quoted: kmd })
				await limitAdd(sender)
				break
				case 'dare':
                if (!isUser) return reply(dpuhy.noregis())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
                if (isBanned) return reply(dpuhy.baned())
				const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "🦄💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
				const der = dare[Math.floor(Math.random() * dare.length)]
				tod = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
				dp.sendMessage(from, tod, image, { quoted: kmd, caption: 'Dare\n\n'+ der })
				await limitAdd(sender)
				break
				case 'bisakah':
                if (!isUser) return reply(dpuhy.noregis())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
                if (isBanned) return reply(dpuhy.baned())
                if (args.length < 1) return reply(`Pertanyaanya apa broo?\nContoh : ${prefix + command} kamu naik motor`)
				bisakah = body.slice(1)
				const bisa =['Bisa','Tidak Bisa','Coba Ulangi']
				const keh = bisa[Math.floor(Math.random() * bisa.length)]
				dp.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: kmd })
				await limitAdd(sender)
				break
		        case 'kapankah':
                if (!isUser) return reply(dpuhy.noregis())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
                if (isBanned) return reply(dpuhy.baned())
                if (args.length < 1) return reply(`Pertanyaanya apa broo?\nContoh : ${prefix + command} kita menikah`)
				kapankah = body.slice(1)
				const kapan =['Besok','Lusa','1 Hari Lagi','2 Hari Lagi','3 Hari Lagi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','7 Bulan Lagi','8 Bulan Lagi','9 Bulan Lagi','10 Bulan Lagi','11 Bulan Lagi','1 Tahun lagi','2 Tahun lagi','3 Tahun lag0i','4 Tahun lagi','5 Tahun lagi','6 Tahun lagi','7 Tahun lagi','8 Tahun lagi','9 Tahun lagi','10 Tahun lagi']
				const koh = kapan[Math.floor(Math.random() * kapan.length)]
				dp.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: kmd })
				await limitAdd(sender)
				break
		        case 'apakah':
                if (!isUser) return reply(dpuhy.noregis())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
                if (isBanned) return reply(dpuhy.baned())
                if (args.length < 1) return reply(`Pertanyaanya apa broo?\nContoh : ${prefix + command} kamu mau menjadi pacar aku`)
				apakah = body.slice(1)
				const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
				const kah = apa[Math.floor(Math.random() * apa.length)]
				dp.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: kmd })
				await limitAdd(sender)
				break
		        case 'bagaimanakah':
                if (!isUser) return reply(dpuhy.noregis())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
                if (isBanned) return reply(dpuhy.baned())
                if (args.length < 1) return reply(`Pertanyaanya apa broo?\nContoh : ${prefix + command} kabar mereka`)
				bagaimanakah = body.slice(1)
				const bagai =['Kita Kenal?','Nanya Terus deh','Tidak Tahu','Coba Ulangi','Cari Aja Sendiri','Kurang Tahu','Mana Saya Tahu, Saya kan ikan']
				const mana = bagai[Math.floor(Math.random() * bagai.length)]
				dp.sendMessage(from, 'Pertanyaan : *'+bagaimanakah+'*\n\nJawaban : '+ mana, text, { quoted: kmd })
				await limitAdd(sender)
				break
		        case 'rate':
                if (!isUser) return reply(dpuhy.noregis())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
                if (isBanned) return reply(dpuhy.baned())
                if (args.length < 1) return reply(`Yang mau diberi nilai apa broo?\nContoh : ${prefix + command} karya seni saya`)
				rate = body.slice(1)
				const ra =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
				const te = ra[Math.floor(Math.random() * ra.length)]
				dp.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: kmd })
				await limitAdd(sender)
				break
                case 'sangecek':
                if (!isUser) return reply(dpuhy.noregis())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
                if (isBanned) return reply(dpuhy.baned())
                if (args.length < 1) return reply(`Tag temanmu atau kamu `)
				sange = body.slice(1)
				const sang =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
				const nge = sang[Math.floor(Math.random() * sang.length)]
				dp.sendMessage(from, 'Pertanyaan : *'+sange+'*\n\nJawaban : '+ nge+'%', text, { quoted: kmd })
				await limitAdd(sender)
				break
                case 'gaycek':
                if (!isUser) return reply(dpuhy.noregis())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
                if (isBanned) return reply(dpuhy.baned())
                if (args.length < 1) return reply(`tag temanmu atau ketik namanya `)
				gayy = body.slice(1)
				const gay =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
				const yag = gay[Math.floor(Math.random() * gay.length)]
				dp.sendMessage(from, 'Pertanyaan : *'+gayy+'*\n\nJawaban : '+ yag+'%', text, { quoted: kmd })
				await limitAdd(sender)
				break
                case 'lesbicek':
                if (!isUser) return reply(dpuhy.noregis())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
                if (isBanned) return reply(dpuhy.baned())
                if (args.length < 1) return reply(`tag temanmu atau input namanya`)
				lesbii = body.slice(1)
				const lesbi =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
				const bi = lesbi[Math.floor(Math.random() * lesbi.length)]
				dp.sendMessage(from, 'Pertanyaan : *'+lesbii+'*\n\nJawaban : '+ bi+'%', text, { quoted: kmd })
				await limitAdd(sender)
				break
                case 'gantengcek':
                if (!isUser) return reply(dpuhy.noregis())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
                if (isBanned) return reply(dpuhy.baned())
                if (args.length < 1) return reply(`Kok gak ada \n\nContoh : ${prefix + command} sasuke`)
				ganteng = body.slice(1)
				const gan =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
				const teng = gan[Math.floor(Math.random() * gan.length)]
				dp.sendMessage(from, 'Pertanyaan : *'+ganteng+'*\n\nJawaban : '+ teng+'%', text, { quoted: kmd })
				await limitAdd(sender)
				break
		        case 'cantikcek':
                if (!isUser) return reply(dpuhy.noregis())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
                if (isBanned) return reply(dpuhy.baned())
                if (args.length < 1) return reply(`Kok gak ada\nContoh : ${prefix + command} Sakura`)
				cantik = body.slice(1)
				const can =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
				const tik = can[Math.floor(Math.random() * can.length)]
				dp.sendMessage(from, 'Pertanyaan : *'+cantik+'*\n\nJawaban : '+ tik+'%', text, { quoted: kmd })
				await limitAdd(sender)
				break
		        case 'watak':
                if (!isUser) return reply(dpuhy.noregis())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
                if (isBanned) return reply(dpuhy.baned())
                if (args.length < 1) return reply(`Kok gak ada\nContoh : ${prefix + command} jarwo`)
				watak = body.slice(1)
				const wa =['Penyayang','Pemurah','Pemarah','Pemaaf','Penurut','Baik','Baperan','Baik Hati','penyabar','UwU','top deh, pokoknya','Suka Membantu']
				const tak = wa[Math.floor(Math.random() * wa.length)]
				dp.sendMessage(from, 'Pertanyaan : *'+watak+'*\n\nJawaban : '+ tak, text, { quoted: kmd })
				await limitAdd(sender)
				break
		        case 'hobby':
		        case 'hoby':
		        case 'hobi':
                if (!isUser) return reply(dpuhy.noregis())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
                if (isBanned) return reply(dpuhy.baned())
                if (args.length < 1) return reply(`Hobine sopo cok?\nContoh : ${prefix + command} saya`)
				hobby = body.slice(1)
				const hob =['Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
				const by = hob[Math.floor(Math.random() * hob.length)]
				dp.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: kmd })
				await limitAdd(sender)
				break
				case 'terganteng':
				if (!isGroup) return reply(dpuhy.groupo())
                if (!isUser) return reply(dpuhy.noregis())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
                if (isBanned) return reply(dpuhy.baned())
				jds = []
				const jdiidc = groupMembers
				const kosstc = groupMembers
				const akuutc = jdiidc[Math.floor(Math.random() * jdiidc.length)]
				teks = `Yang terganteng di grub ini adalah @${akuutc.jid.split('@')[0]}`
				jds.push(akuutc.jid)
				mentions(teks, jds, true)
				await limitAdd(sender)
				break	
				case 'tercantik':
				if (!isGroup) return reply(dpuhy.groupo())
                if (!isUser) return reply(dpuhy.noregis())
                if (isLimit(sender)) return reply(dpuhy.limitend(pusname))
                if (isBanned) return reply(dpuhy.baned())
				jds = []
				const jdiidr = groupMembers
				const kosstr = groupMembers
				const akuutr = jdiidr[Math.floor(Math.random() * jdiidr.length)]
				teks = `Yang tercantik di grub ini adalah @${akuutr.jid.split('@')[0]}`
				jds.push(akuutr.jid)
				mentions(teks, jds, true)
				await limitAdd(sender)
				break
				
				//==========================================BATES NGAB==========================================\\
//GROUP MENU
				case 'add':
                if (!isUser) return reply(dpuhy.noregis())
                if (!isGroup) return reply(dpuhy.groupo())
				if (!isGroupAdmins) return reply('Perintah ini khusus admin grup')
				if (!isBotGroupAdmins) return reply('Perintah dapat dijalankan ketika bot menjadi admin')
                if (args.length < 1) return reply('Untuk menambahkan anggota grup gunakan perintah .add nomer(dg kode negara). Contoh: .add 628234567890')
                if (args[0].startsWith('08')) return reply('Gunakan kode negara kak')
                try {
                num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
                dp.groupAdd(from, [num])
                } catch (e) {
                console.log('Error :', e)
                reply('Gagal menambahkan target, mungkin karena di private')
                }
                break
				case 'kick':
			    if (!isUser) return reply(dpuhy.noregis())
                if (!isGroup) return reply(dpuhy.groupo())
				if (!isGroupAdmins) return reply('Perintah ini khusus admin grup')
				if (!isBotGroupAdmins) return reply('Perintah dapat dijalankan ketika bot menjadi admin')
					if (kmd.message.extendedTextMessage === undefined || kmd.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = kmd.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, mengeluarkan :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						dp.groupRemove(from, mentioned)
					} else {
						mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
						dp.groupRemove(from, mentioned)
					}
					break
				
                case 'edotensei':
                case 'edotense':
				if (!isUser) return reply(dpuhy.noregis())
                if (!isGroup) return reply(dpuhy.groupo())
				if (!isGroupAdmins) return reply('Perintah ini khusus admin grup')
				if (!isBotGroupAdmins) return reply('Perintah dapat dijalankan ketika bot menjadi admin')
					if (args.length < 1) return reply('Yang mau di edotense siapa?')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						dp.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal meng edotense, mungkin karena di segel')
					}
					break
				case 'promote':
				if (!isUser) return reply(dpuhy.noregis())
                if (!isGroup) return reply(dpuhy.groupo())
				if (!isGroupAdmins) return reply('Perintah ini khusus admin grup')
				if (!isBotGroupAdmins) return reply('Perintah dapat dijalankan ketika bot menjadi admin')
					if (kmd.message.extendedTextMessage === undefined || kmd.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadikan admin!')
					mentioned = kmd.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, anda menjdi admin :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						dp.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`Perintah di terima, anda menjadi admin : @${mentioned[0].split('@')[0]}`, mentioned, true)
						dp.groupMakeAdmin(from, mentioned)
					}
					break
					case 'demote':
			    if (!isUser) return reply(dpuhy.noregis())
                if (!isGroup) return reply(dpuhy.groupo())
				if (!isGroupAdmins) return reply('Perintah ini khusus admin grup')
				if (!isBotGroupAdmins) return reply('Perintah dapat dijalankan ketika bot menjadi admin')
					if (kmd.message.extendedTextMessage === undefined || kmd.message.extendedTextMessage === null) return reply('Tag target yang akan dicabut pangkat admin nya')
					mentioned = kmd.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, anda tidak menjadi admin :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						dp.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`Perintah di terima, anda tidak menjadi admin : @${mentioned[0].split('@')[0]}`, mentioned, true)
						dp.groupDemoteAdmin(from, mentioned)
					}
					break
				case 'listadmin':
				case 'listadmins':
				if (!isUser) return reply(dpuhy.noregis())
                if (!isGroup) return reply(dpuhy.groupo())
					teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
				case 'setname':
				if (!isUser) return reply(dpuhy.noregis())
                if (!isGroup) return reply(dpuhy.groupo())
				if (!isGroupAdmins) return reply('Perintah ini khusus admin grup')
				if (!isBotGroupAdmins) return reply('Perintah akan dijalankan ketika bot menjadi admin')
				if (args.length < 1) return reply('masukan nama grub yang baru. ')
					ppUrl = await dp.getProfilePicture(from) // leave empty to get your own
			    bufferd = await getBuffer(ppUrl)
                dp.groupUpdateSubject(from, `${body.slice(9)}`)
                dp.sendMessage(from, bufferd, image, {quoted: kmd, caption: `Succes, Ganti Nama Grup\nYang Sebelumnya *${groupName}*`})
                break
                case 'setdesc':
                if (!isUser) return reply(dpuhy.noregis())
                if (!isGroup) return reply(dpuhy.groupo())
				if (!isGroupAdmins) return reply('Perintah ini khusus admin grup')
				if (!isBotGroupAdmins) return reply('Perintah akan dijalankan ketika bot menjadi admin')
				if (args.length < 1) return reply('masukan deskripsi grup yan baru')
				ppUrl = await dp.getProfilePicture(from) // leave empty to get your own
			    bufferf = await getBuffer(ppUrl)
                dp.groupUpdateDescription(from, `${body.slice(9)}`)
                dp.sendMessage(from, bufferf, image, {quoted: kmd, caption: `Succes, Ganti Deskripsi Grup\nYang Sebelumnya *${groupDesc}*`})
                break
				case 'setpp':
	if (!isUser) return reply(dpuhy.noregis())
                if (!isGroup) return reply(dpuhy.groupo())
				if (!isGroupAdmins) return reply('Perintah ini khusus admin grup')
				if (!isBotGroupAdmins) return reply('Perintah akan dijalankan ketika bot menjadi admin')
                    media = await dp.downloadAndSaveMediaMessage(kmd)
                    await dp.updateProfilePicture (from, media)
                    reply('Sukses mengganti icon Grup')
                    break
					case 'otagall2':
					case 'tagall':
			        if (!isUser) return reply(dpuhy.noregis())
                    if (!isGroup) return reply(dpuhy.groupo())
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n'
					for (let mem of groupMembers) {
						teks += `╠➥ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions('╔══✪〘 Mention All 〙✪══'+teks+'╚═〘  KMD BOT 〙', members_id, true)
					break
					case 'kickall':
			    if (!isUser) return reply(dpuhy.noregis())
                if (!isGroup) return reply(dpuhy.groupo())
				if (!isGroupAdmins) return reply('Perintah ini khusus admin grup')
				if (!isBotGroupAdmins) return reply('Perintah akan dijalankan ketika bot menjadi admin')
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*😘* ${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					dp.groupRemove(from, members_id)
					break
					case 'linkgroup':
				case 'linkgrup':
				case 'linkgc':
				if (!isUser) return reply(dpuhy.noregis())
                if (!isGroup) return reply(dpuhy.groupo())
				    linkgc = await dp.groupInviteCode (from)
				    yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				    dp.sendMessage(from, yeh, text, {quoted: kmd})
			        break
					case 'infogc':
				if (!isUser) return reply(dpuhy.noregis())
                if (!isGroup) return reply(dpuhy.groupo())
				
				dp.updatePresence(from, Presence.composing)
				if (!isGroup) return reply(mess.only.group)
					try {
					ppimg = await dp.getProfilePicture(from)
				} catch {
					ppimg = 'https://i.ibb.co/NthF8ds/IMG-20201223-WA0740.jpg'
				}
					let buf = await getBuffer(ppimg)
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `*Nama grup :* ${groupName}\n*Deskripsi :* ${groupDesc}\n*Jumlah Admin :* ${groupAdmins.length}\n*Jumlah Member :* ${groupMembers.length}`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}]`
					}
					dp.sendMessage(from, buf, image, {quoted: kmd, caption: teks})
					break
					case 'grup':
		        case 'group':
                if (!isUser) return reply(dpuhy.noregis())
                if (!isGroup) return reply(dpuhy.groupo())
				if (!isGroupAdmins) return reply('Perintah ini khusus admin grup')
				if (!isBotGroupAdmins) return reply('Perintah akan dijalankan ketika bot menjadi admin')
				if (args.length < 1) return reply('untuk membuka grub gunakan perintah .grup buka sedangkan untuk menutup grub gunakan perintah .grup tutup')
                if (args[0] === 'buka') {
				reply(`BERHASIL MEMBUKA GROUP`)
                dp.groupSettingChange(from, GroupSettingChange.messageSend, false)
                } else if (args[0] === 'tutup') {
                reply(`BERHASIL MENUTUP GROUP`)
				dp.groupSettingChange(from, GroupSettingChange.messageSend, true)
                }
                break
				case 'welcome':
				if (!isUser) return reply(dpuhy.noregis())
                if (!isGroup) return reply(dpuhy.groupo())
				if (args.length < 1) return reply('[❗] Tambahkan parameter 1 untuk mengaktifkan dan 0 untuk menonaktifkan')
				if (Number(args[0]) === 1) {
						if (isWelkom) return reply(`[❗] Fitur ${command} sudah aktif`)
						welkom.push(from)
						fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
						reply(`[❗] Berhasil mengaktifkan fitur ${command} pada group ini`)
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
						reply(`[❗] Berhasil menonaktifkan fitur ${command} pada group ini`)
					} else {
						reply('[❗] Tambahkan parameter 1 untuk mengaktifkan dan 0 untuk menonaktifkan')
					}
				break
                case 'event':
				if (!isUser) return reply(dpuhy.noregis())
                if (!isGroup) return reply(dpuhy.groupo())
				if (!isGroupAdmins) return reply('Perintah ini khusus admin grup')
				if (args.length < 1) return reply('[❗] Tambahkan parameter 1 untuk mengaktifkan dan 0 untuk menonaktifkan')
				if (Number(args[0]) === 1) {
				if (isEventon) return reply(`[❗] Fitur ${command} sudah aktif`)
				event.push(from)
				fs.writeFileSync('./database/event.json', JSON.stringify(event))
				reply(`[❗] Berhasil mengaktifkan fitur ${command} pada group ini`)
				} else if (Number(args[0]) === 0) {
				event.splice(from, 1)
				fs.writeFileSync('./database/event.json', JSON.stringify(event))
				reply(`[❗] Berhasil menonaktifkan fitur ${command} pada group ini`)
				} else {
				reply('[❗] Tambahkan parameter 1 untuk mengaktifkan dan 0 untuk menonaktifkan')
				}
				break
				case 'online':
				case 'listonline':
                if (!isGroup) return reply(dpuhy.groupo())
                let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
                let online = [...Object.keys(dp.chats.get(ido).presences), dp.user.jid]
                dp.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, {
                    quoted: freply,
                    contextInfo: { mentionedJid: online }
                })
                break
				case 'kudeta':
                if (!isUser) return reply(dpuhy.noregis())
                if (!isGroup) return reply(dpuhy.groupo())
				if (!isOwner) return reply('Perintah ini khusus untuk owner bot')
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `** ${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					dp.groupRemove(from, members_id)
				break	
				//owner menu
				case 'clearall':
				if (!isOwner) return reply('Perintah ini khusus untuk owner bot')
				anu = await dp.chats.all()
				dp.setMaxListeners(25)
				for (let _ of anu) {
				dp.deleteChat(_.jid)
				}
				reply(dpuhy.clears())
				break
                case 'setprefix':
				if (!isOwner) return reply('Perintah ini khusus untuk owner bot')
				if (args.length < 1) return reply('masukan prefix yang baru')
				prefix = args[0]
				reply(`Prefix berhasil di ubah menjadi : ${prefix}`)
				break 
				case 'resetlimit':
				if (!isOwner) return reply('Perintah ini khusus untuk owner bot')
				var obj = []
				fs.writeFileSync('./database/limit.json', JSON.stringify(obj))
				await reply(`LIMIT BERHASIL DI RESET`)
				break
		        case 'setlimit':
				if (!isOwner) return reply('Perintah ini khusus untuk owner bot')
				if (args.length < 1) return reply('masukan jumlah limit')
				limitawal = args[0]
				reply(`Limit berhasil di ubah menjadi : ${limitawal}`)
				break
		        case 'setmemlimit':
				if (!isOwner) return reply('Perintah ini khusus untuk owner bot')
				if (args.length < 1) return reply('masukan jumlah member limit')
				if (isNaN(args[0])) return reply('Limit harus angka')
				memberlimit = args[0]
				reply(`Change Member limit To ${memberlimit} SUCCESS!`)
				break
				case 'addbadword':
				if (!isOwner) return reply('Perintah ini khusus untuk owner bot')
                if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)
                const bw = body.slice(11)
                bad.push(bw)
                fs.writeFileSync('./database/bad.json', JSON.stringify(bad))
                reply('Success Menambahkan Bad Word!')
                break
                case 'delbadword':  
				if (!isOwner) return reply('Perintah ini khusus untuk owner bot')
                if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)
                let dbw = body.slice(11)
                bad.splice(dbw)
                fs.writeFileSync('./database/bad.json', JSON.stringify(bad))
                reply('Success Menghapus BAD WORD!')
                break 
                case 'setppbot':
				if (!isOwner) return reply('Perintah ini khusus untuk owner bot')
				dp.updatePresence(from, Presence.composing) 
				if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setppbot atau tag gambar yang sudah dikirim`)
				enmedia = JSON.parse(JSON.stringify(dap).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				media = await dp.downloadAndSaveMediaMessage(enmedia)
				await dp.updateProfilePicture(botNumber, media)
				reply('Makasih profil barunya😗')
				break 
				case 'ban':
				if (!isOwner) return reply('Perintah ini khusus untuk owner bot')
				if (args.length < 1) return reply('masukan nomer yang akan di baned')
				bnnd = `${args[0].replace('@', '')}@s.whatsapp.net`
				ban.push(bnnd)
				fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
				fakestatus(`Nomor ${bnnd} telah dibanned!`)
				break
				case 'unban':
				if (!isOwner) return reply('Perintah ini khusus untuk owner bot')
				if (args.length < 1) return reply('masukan nomer yang akan di unbaned')
				dap = `${args[0].replace('@', '')}@s.whatsapp.net`
				unb = ban.dpuhyexOf(dap)
				ban.splice(unb, 1)
				fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
				fakestatus(`Nomor ${ya} telah di unban!`)
				break
				case 'block':
				if (!isOwner) return reply('Perintah ini khusus untuk owner bot')
				if (args.length < 1) return reply('masukan nomer yang akan di block')
				dp.updatePresence(from, Presence.composing) 
				dp.chatRead (from)
				dp.blockUser (`${body.slice(7)}@c.us`, "add")
				dp.sendMessage(from, `Perintah Diterima, Memblokir ${body.slice(7)}@c.us`, text, {quoted: kmd})
				break
		        case 'unblock':
				if (!isOwner) return reply('Perintah ini khusus untuk owner bot')
				if (args.length < 1) return reply('masukan nomer yang akan di unblock')
				dp.blockUser (`${body.slice(9)}@c.us`, "remove")
			    dp.sendMessage(from, `Perintah Diterima, Membuka Blockir ${body.slice(9)}@c.us`, text, {quoted: kmd})
				break
				case 'leave':
				if (!isGroup) return reply(dpuhy.groupo())
				if (!isOwner) return reply('Perintah ini khusus untuk owner bot')
				setTimeout( () => {
				dp.groupLeave (from) 
				}, 2000)
				setTimeout( () => {
				dp.updatePresence(from, Presence.composing) 
				dp.sendMessage(from, 'Bye cuk disuruh keluar ama Ownerku🗣', text, {quoted: kmd})
				}, 0)
				break	
					
					
				
					
					
				default:
		        const insom = from.endsWith('@g.us')
           		const botFebb = insom ? kmd.participant : kmd.key.remoteJid
				pushname2 = dp.contacts[botFebb] != undefined ? dp.contacts[botFebb].vname || dp.contacts[botFebb].notify : undefined
					if (body.startsWith(`${prefix}${command}`)) {
                  reply(`Maaf *${pushname2}*, Command *${prefix}${command}* Tidak Terdaftar Di Dalam *${prefix}menu*`)
                  }
			if (isGroup && !isCmd && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						reply(dpuhy.cmdnf(prefix, command))
					} else {
						console.log(color('[ERROR]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
					}
		} catch (e) {
			            e = String(e)
			if (e.includes('this.isZero')){
return
}
			console.log('Error : %s', color(e, 'red'))
		}
	})
}
starts()
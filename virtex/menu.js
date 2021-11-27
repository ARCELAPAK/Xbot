const menunya = (prefix) => {
	return` ╭─❒ 「 Bot Info 」 ❒
🏴‍☠️ _Creator : *KurrXd*
🏴‍☠️ _Battery : ${baterai.battery}_
🏴‍☠️ _Mode : ${publik ? 'Public' : 'Self'}_
🏴‍☠️ _Total Hit : ${cmhit.length}_
🏴‍☠️ _Prefix : ${multi ? 'Multi Prefix' : 'No Prefix'}_
🏴‍☠️ _Nama Bot : K${NamaBot}_
🏴‍☠️ _Nama Owner : ${NamaOwner}_
🏴‍☠️ _Nomor Owner : @${otod.split('@')[0]}_
🏴‍☠️ _Auto Composing : ${settings.autocomposing}_
🏴‍☠️ _Auto Recording : ${settings.autorecording}_
└❏

╭─❒ 「 User Info 」 ❒
🏴‍☠️ _Status : ${isOwner ? 'Owner' : 'User'}_
🏴‍☠️ _Nama : ${pushname}_
🏴‍☠️ _Bio : ${stst}_
🏴‍☠️ _Nomor : @${stod.split('@')[0]}_
└❏

┌❏ TO DAY
│ ${tampilUcapan}
🏴‍☠️ Jam : ${jmn}
🏴‍☠️ Hari : ${week} ${weton}
🏴‍☠️ Tanggal : ${calender}
└❏

┌❏ INDONESIA TIME
🏴‍☠️ Wib : ${timeWib}
🏴‍☠️ Wita : ${timeWita}
🏴‍☠️ Wit : ${timeWit}  
└❏

╭─❒ COMMAND
│
🏴‍☠️─❒ OWNER
🏴‍☠️ ${prefix}autorespon [ _on/off_ ]
🏴‍☠️ ${prefix}antidelete [ _on/off_ ]
🏴‍☠️ ${prefix}bc [ _teks/reply gif/image/video with caption_ ]
🏴‍☠️ ${prefix}tobc [ _reply sticker/audio with caption_ ]
🏴‍☠️ ${prefix}return [ _javascript_ ]
🏴‍☠️ ${prefix}clearall
🏴‍☠️ ${prefix}delchat
🏴‍☠️ ${prefix}mute
🏴‍☠️ ${prefix}unmute
🏴‍☠️ ${prefix}public
🏴‍☠️ ${prefix}self
🏴‍☠️ ${prefix}spam [ _teks|jumlah_ ]
🏴‍☠️ ${prefix}demoteall
🏴‍☠️ ${prefix}promoteall
🏴‍☠️ ${prefix}addcmd [ _teks reply stc_ ]
🏴‍☠️ ${prefix}delcmd [ _reply stc_ ]
🏴‍☠️ ${prefix}listcmd
🏴‍☠️ ${prefix}spamsw [ _teks|jumlah_ ]
🏴‍☠️ ${prefix}upswteks [ _teks_ ]
🏴‍☠️ ${prefix}upswlokasi [ _teks_ ]
🏴‍☠️ ${prefix}upswaudio [ _reply audio_ ]
🏴‍☠️ ${prefix}upswvoice [ _reply audio_ ]
🏴‍☠️ ${prefix}upswsticker [ _reply sticker_ ]
🏴‍☠️ ${prefix}upswimage [ _reply image with caption_ ]
🏴‍☠️ ${prefix}upswgif [ _reply gif with caption_ ]
🏴‍☠️ ${prefix}upswvideo [ _reply video with caption_ ]
🏴‍☠️ ${prefix}shutdown
🏴‍☠️ ${prefix}offline [ _alasan_ ]
🏴‍☠️ ${prefix}online
🏴‍☠️ ${prefix}exif [ _nama|author_ ]
🏴‍☠️ ${prefix}setprofile [ _reply image_ ]
🏴‍☠️ ${prefix}setname [ _teks_ ]
🏴‍☠️ ${prefix}setprefix [ _multi/nopref/prefix_ ]
🏴‍☠️ ${prefix}setbio [ _teks_ ]
🏴‍☠️ ${prefix}leave
🏴‍☠️ ${prefix}restart
🏴‍☠️ ${prefix}addrespon [ _tanya|jawab_ ]
🏴‍☠️ ${prefix}delrespon [ _nama_ ]
🏴‍☠️ ${prefix}listrespon
🏴‍☠️ ${prefix}readall
🏴‍☠️ ${prefix}unreadall
🏴‍☠️ ${prefix}archive
🏴‍☠️ ${prefix}unarchiveall
🏴‍☠️ ${prefix}pin
🏴‍☠️ ${prefix}unpin
🏴‍☠️ ${prefix}setmenu [ _ori/simpel_ ]
🏴‍☠️ ${prefix}setallmenu [ _ori/simpel_ ]
🏴‍☠️ ${prefix}leavetime [ _detik/menit/jam_ ]
🏴‍☠️ ${prefix}bukatime [ _detik/menit/jam_ ]
🏴‍☠️ ${prefix}tutuptime [ _detik/menit/jam_ ]
🏴‍☠️ ${prefix}nano [ _nama file_ ]
│
🏴‍☠️─❒ NEW FITUR
🏴‍☠️ ${prefix}jadibot
🏴‍☠️ ${prefix}stopjadibot
│
🏴‍☠️─❒ DOWNLOAD
🏴‍☠️ ${prefix}infogempa
🏴‍☠️ ${prefix}herolist
🏴‍☠️ ${prefix}herodetail [ _hero_ ]
🏴‍☠️ ${prefix}google [ _search_ ]
🏴‍☠️ ${prefix}gimage [ _search_ ]
🏴‍☠️ ${prefix}wiki [ _search_ ]
🏴‍☠️ ${prefix}mediafire [ _link_ ]
🏴‍☠️ ${prefix}ytsearch [ _judul_ ]
🏴‍☠️ ${prefix}ytmp4 [ _link yt_ ]
🏴‍☠️ ${prefix}ytmp3 [ _link yt_ ]
🏴‍☠️ ${prefix}play [ _judul lagu_ ]
🏴‍☠️ ${prefix}video [ _judul video_ ]
🏴‍☠️ ${prefix}tinyurl [ _link_ ]
🏴‍☠️ ${prefix}fetch [ _link_ ]
🏴‍☠️ ${prefix}igdl [ _link_ ]
🏴‍☠️ ${prefix}tiktokdl [ _link_ ]
🏴‍☠️ ${prefix}pinterest [ _search_ ]
🏴‍☠️ ${prefix}lirik [ _judul_ ]
🏴‍☠️ ${prefix}tourl [ _reply image/video_ ]
🏴‍☠️ ${prefix}resepmasakan [ _judul_ ]
🏴‍☠️ ${prefix}artimimpi [ _teks_ ]
🏴‍☠️ ${prefix}bilangangka [ _angka_ ]
🏴‍☠️ ${prefix}kalkulator [ _angka_ ]
🏴‍☠️ ${prefix}fancytext [ _teks_ ]
🏴‍☠️ ${prefix}githubstalk [ _username_ ]
🏴‍☠️ ${prefix}translate [ _teks kodebhs_ ]
🏴‍☠️ ${prefix}ss [ _link_ ]
🏴‍☠️ ${prefix}playstore [ _search_ ]
🏴‍☠️ ${prefix}tiktokaudio [ _link_ ]
🏴‍☠️ ${prefix}brainly [ _search_ ]
🏴‍☠️ ${prefix}igstory [ _search_ ]
🏴‍☠️ ${prefix}igstalk [ _link_ ]
🏴‍☠️ ${prefix}twitter [ _link_ ]
🏴‍☠️ ${prefix}twmp3 [ _link_ ]
🏴‍☠️ ${prefix}linkwa [ _search_ ]
🏴‍☠️ ${prefix}fb [ _link_ ]
🏴‍☠️ ${prefix}chara [ _search_ ]
🏴‍☠️ ${prefix}otaku [ _search_ ]
🏴‍☠️ ${prefix}komiku [ _search_ ]
│
🏴‍☠️─❒ MAKER
🏴‍☠️ ${prefix}foliokanan [ _text_ ]
🏴‍☠️ ${prefix}foliokiri [ _text_ ]
🏴‍☠️ ${prefix}nuliskanan [ _text_ ]
🏴‍☠️ ${prefix}nuliskiri [ _text_ ]
🏴‍☠️ ${prefix}maker3d [ _text_ ]
🏴‍☠️ ${prefix}maker2d [ _text_ ]
🏴‍☠️ ${prefix}epepserti [ _text_ ]
│
🏴‍☠️──❒ GROUP
🏴‍☠️ ${prefix}getpict [ _@tag_ ]
🏴‍☠️ ${prefix}getname [ _reply target_ ]
🏴‍☠️ ${prefix}getbio [ _reply target_ ]
🏴‍☠️ ${prefix}promote [ _@tag_ ]
🏴‍☠️ ${prefix}demote [ _@tag_ ]
🏴‍☠️ ${prefix}antilink [ _on/off_ ]
🏴‍☠️ ${prefix}antivirtex [ _on/off_ ]
🏴‍☠️ ${prefix}antiwame [ _on/off_ ]
🏴‍☠️ ${prefix}antibug [ _on/off_ ]
🏴‍☠️ ${prefix}welcome [ _on/off_ ]
🏴‍☠️ ${prefix}creategrup [ _nama|@tag_ ]
🏴‍☠️ ${prefix}tictactoe [ _@tag_ ]
🏴‍☠️ ${prefix}delttt
🏴‍☠️ ${prefix}getpp
🏴‍☠️ ${prefix}antiwame
🏴‍☠️ ${prefix}getdeskgc
🏴‍☠️ ${prefix}sider [ _reply pesan bot_ ]
🏴‍☠️ ${prefix}hacked [ _teks_ ]
🏴‍☠️ ${prefix}setnamegc [ _teks_ ]
🏴‍☠️ ${prefix}setdeskgc [ _teks_ ]
🏴‍☠️ ${prefix}fitnah [ _@tag|teks1|teks2_ ]
🏴‍☠️ ${prefix}kontak [ _@tag|nama_ ]
🏴‍☠️ ${prefix}kontag [ _@tag|nama_ ]
🏴‍☠️ ${prefix}opengc
🏴‍☠️ ${prefix}closegc
🏴‍☠️ ${prefix}resetlinkgc
🏴‍☠️ ${prefix}linkgrup
🏴‍☠️ ${prefix}hidetag [ _teks_ ]
🏴‍☠️ ${prefix}sticktag [ _nama sticker_ ]
🏴‍☠️ ${prefix}totag [ _reply media_ ]
│
🏴‍☠️─❒ TOOLS
🏴‍☠️ ${prefix}sticker
🏴‍☠️ ${prefix}stickerwm [ _nama|author_ ]
🏴‍☠️ ${prefix}takestick [ _nama|author_ ]
🏴‍☠️ ${prefix}colong [ _reply sticker_ ]
🏴‍☠️ ${prefix}dadu
🏴‍☠️ ${prefix}semoji [ _emoji_ ]
🏴‍☠️ ${prefix}attp [ _teks_ ]
🏴‍☠️ ${prefix}toimg
🏴‍☠️ ${prefix}tomp3 [ _reply video_ ]
🏴‍☠️ ${prefix}tomp4 [ _reply sticker gif_ ]
🏴‍☠️ ${prefix}robot [ _reply audio_ ]
🏴‍☠️ ${prefix}balik [ _reply audio_ ]
🏴‍☠️ ${prefix}bass [ _reply audio_ ]
🏴‍☠️ ${prefix}gemuk [ _reply audio_ ]
🏴‍☠️ ${prefix}detikvn [ _reply audio caption angka_ ]
🏴‍☠️ ${prefix}detikvideo [ _reply video caption angka_ ]
│
🏴‍☠️─❒ ASUPAN
🏴‍☠️ ${prefix}asupan
🏴‍☠️ ${prefix}asupan2
🏴‍☠️ ${prefix}asupant3
│
🏴‍☠️─❒ STORAGE
🏴‍☠️ ${prefix}listimage
🏴‍☠️ ${prefix}liststicker
🏴‍☠️ ${prefix}listvn
🏴‍☠️ ${prefix}addsticker [ _nama_ ]
🏴‍☠️ ${prefix}delsticker [ _nama_ ]
🏴‍☠️ ${prefix}addvn [ _nama_ ]
🏴‍☠️ ${prefix}delvn [ _nama_ ]
🏴‍☠️ ${prefix}addimage [ _nama_ ]
🏴‍☠️ ${prefix}delimage [ _nama_ ]
│
🏴‍☠️─❒ JADI BOT
🏴‍☠️ ${prefix}stopjadibot
🏴‍☠️ ${prefix}jadibot
│
🏴‍☠️─❒ EVAL
🏴‍☠️ *x*
🏴‍☠️ *>*
🏴‍☠️ *=>*
🏴‍☠️ *$*
│
🏴‍☠️─❒ OTHER / FUN
🏴‍☠️ ${prefix}rate
🏴‍☠️ ${prefix}kapankah
🏴‍☠️ ${prefix}apakah
🏴‍☠️ ${prefix}bisakah
🏴‍☠️ ${prefix}caripesan [ _teks|jumlah_ ]
🏴‍☠️ ${prefix}slots
🏴‍☠️ ${prefix}suit [ _gunting/batu/kertas_ ]
🏴‍☠️ ${prefix}tag [ _nomor_ ]
🏴‍☠️ ${prefix}tagme
🏴‍☠️ ${prefix}tts [ _kodebhs teks_ ]
🏴‍☠️ ${prefix}readmore [ _teks1|teks2_ ]
🏴‍☠️ ${prefix}fitnahpc [ _nomor|teks1|teks2_ ]
🏴‍☠️ ${prefix}chat [ _nomor|teks_ ]
🏴‍☠️ ${prefix}fdeface [ _replyimg link|teks1|teks2_ ]
🏴‍☠️ ${prefix}listgrup
🏴‍☠️ ${prefix}baileys [ _reply message_ ]
🏴‍☠️ ${prefix}q [ _reply message_ ]
🏴‍☠️ ${prefix}getcaption [ _reply message_ ]
🏴‍☠️ ${prefix}pantun
🏴‍☠️ ${prefix}tospam [ _reply audio/sticker/image|jumlah_ ]
🏴‍☠️ ${prefix}sharelock [ _teks1|teks2_ ]
└─────────────────❒
 ‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎ ‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎ ‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎ ‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎ ‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎ ‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏
`
}
exports.virtex = menunya
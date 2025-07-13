//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUNrLzBpMmZxLzFIWitBMU5mSHM0VE52dUIzdVVQSGVmS2h6b1NlampIWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWU9LZ24rUWIvY3lWdUROSGVKbmZHVi9tdjRZcVBJcFpmUFlvL2pZalVDcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5TDVvampRVnpPVndTd1RsZTZUOTB1emw2c2dLeXBKUElycC9sWWxXcGtJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZNFFFa3h5NTY2MVVreWJBM0hpdGNUMmJWVXlkQVdGdHBabHFFaVpaZWtNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFIb1k3NkhCeTRmWnhTVHZSMnBkT3RIdzhjRUV3L0hJYk1DWlUybjZZbTA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZYcHAycG9BdDRVbkQwU1lIMEVIYmk3Q0lpWG1uMzRyakgxUUZrM3lUVVU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS01YY2JaWFhPQXBmRjRPd2dyc040UHVUSEJXTVZyVlRlY3E3NnVmYytFTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaGtEUGJ4S2xRZG5ocVdzc3JnMXNtYllMVGJjTzFBY2JHaE5Id3dYSm9VOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNDNWp5a0Q4U3hadFNDeFpLcjlNckJnMG1mSk5tblpva24vSFFySnFMeExkWjM0cldYM2tJL1EwVm91aEJRRDdpQncvWlNGNTZDNVVuRC8zTGxPMGlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjIwLCJhZHZTZWNyZXRLZXkiOiJvUFdUOE9oVS9VQjlWczBEOW1ILzRpaGFWakp0bmNncC8wZWtyeno4dmdrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzIwNDE3NTkwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjEyQ0EyRkEyQUUyNjM5MTEwMjc3RDg2MjNBNUJGRUVGIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTIzOTczNjh9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InZGaVJFWk1vUm8yWnBzUTlEWVhkanciLCJwaG9uZUlkIjoiOWEwNzE2NWQtYzhjNC00NjMxLTg4NGMtZWFiNDk4MzQ4MGQ1IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNLMUVpL2JBQ0FMTUxCMk1oaHk3aGU5NjVlZz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNSGFuTG4zMEN1VHhxVWNqQjIrQ2dqaXJ2MTg9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTFJYWDRUWlgiLCJtZSI6eyJpZCI6Ijk0NzIwNDE3NTkwOjE1QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMjY5NzY3NDk5ODc0MzI3OjE1QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTWY2Z2RjR0VLZnN6Y01HR0FRZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiM3B6WkhZdFdiSjY3ZE1kQ3pRd2prZGw1WS9ZV05lL2tnZWN5dHprc0htST0iLCJhY2NvdW50U2lnbmF0dXJlIjoiMEpKWWdpZ2pEMXhmbG41TWNVdVdaMXlVeXF4Y1ZxREppYzRkY2ViZWdhSE9vcC9NYXY2akNmc0JLVi85WFY2YXlQK1R3bzFUZVdmYTNTS1NvQktHQWc9PSIsImRldmljZVNpZ25hdHVyZSI6IndTLytnK1V5QXY4OXY3YlJycXEranRGY1c2TGd6S2RKbVpuUmgyUENYVmU5cEZCaHNkRFhNbm00VTVlNmgvSWtOd21xNGNmd2IvZnh0VzZMcUxaaGh3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3MjA0MTc1OTA6MTVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZDZjMlIyTFZteWV1M1RIUXMwTUk1SFplV1AyRmpYdjVJSG5NcmM1TEI1aSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FnSUFnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUyMzk3MzY1LCJsYXN0UHJvcEhhc2giOiIzUjlaMzkiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUVIWiJ9",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94773757505",
  PASSWORD: 
    process.env.PASSWORD || "Cheezy1234",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94769162583", "94724304850"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};

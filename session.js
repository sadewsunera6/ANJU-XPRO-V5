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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkU1YjBZdVdTWlBoUDdyQVl6VTBKejA0SlMwejB3VUVWME0veVhjRkQwND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVnZRcm5DenoyejZoRGpIUERwVzlpTThJM1huYjRNVFVsRno5NjNxSUF6Yz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxT0pIdVNOVXBSRXNOOHZSWTVnRmw3MkhnNmdTQzdDbXRWRlNQS2RRcG5BPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLYWowaml4QS83ajN6WDNvNEdJeXJ2cDVpclJFS3FMdExibU5yMzJaYXdJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFCNnRXczNiY3VhbU5XZEhRc3psMU9sYzVJRXRjeXlrK29FNlFyU1BFRlk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklZUGZzSlQzd0hsOHltQUlHQ0VNaGQvQU5EV0J0VGZxVEJKemRLZ2ZaU2c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0djR3FtSzJFOHN3WTdJUmVTSmJ6NUU3TXR4a1g4c1F6NjBhZUJvVlkybz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMUU0WlBHVzM0c2g1RGNpRTJYMG01NDVaNEkyN1IrczdDbFNmcDJEM25sZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRqOVJ3V0pSdDNESVBLVnNTSlVlRTA4bDQ0UUllOGc4bGEvL0FoRDVhbDNxN1FHUjJmaVRPSWJ4Sm05SHVlbVNUMC9xaVMwYVZmMEtvd0t5WFhyR2h3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAxLCJhZHZTZWNyZXRLZXkiOiJBNGVCem5PS3JtdmJEVEJqQW1qS3dsc25LdmhKSWh4Z01EbzFqVVZZUmxJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJoNi1zbjJjcFFRRzRZWEdqUlE0WUR3IiwicGhvbmVJZCI6IjE2MDBiMmE5LTJkOWUtNDEwOC1hMjZiLTllNDBhOGExNTEwMCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6N3ljV3FtSEhNY0g2VkpVQlpjNzlUNzIvZk09In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoienhYT1FqVnNTVjlkb3c3enF2bGhvcitTbHNjPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlFKUkJTQTlHIiwibWUiOnsiaWQiOiI5NDc2OTE2MjU4Mzo0NEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLvvLMg77yhIO+8pCDvvKUg77y3IH4iLCJsaWQiOiIzOTUxODA0NDQ0MjY2Nzo0NEBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09uajhCOFE4YkNzeEFZWUJDQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IldHMlpPeUswOUZMUURtV1kvc3dHRzhOSjN2OTg3Qi9tei94WU1wdDFyaFE9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ikl1a3J1TzhrTFhUN1RjTEVhc2I0TXM3YmVYRUlrM2x6MnVlVEo2YXdYT1hWOWlkeUVQN1pTZmJXVVRWMlplWlNmeW1OaGduYkovN1J3SEx2K1VOSUJRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ1UmVMVWNLQWVGK0dlRVZaeUhjWGo0cE04Wm1KbExzTForRHRNY0NEL0p5dkRaVm14S1pLTW1SclY5L0ZPeVpYb3NHTzU0NnlzajF6Z1RVUExQUGpqUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzY5MTYyNTgzOjQ0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlZodG1Uc2l0UFJTMEE1bG1QN01CaHZEU2Q3L2ZPd2Y1cy84V0RLYmRhNFUifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBZ0lBZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1Mzk0NjIzOSwibGFzdFByb3BIYXNoIjoiM1I5WjM5IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFLUVUifQ==",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94773757505",
  PASSWORD: 
    process.env.PASSWORD || "Sadew4321",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94720417590", "94724304850"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};

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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkhIUFp6STlodnBaakZncTFjZHZzdy9xUjFoYXYzZmFpaG5ENkdiajhGUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYWF3ZWFpYXdyMzQ5MkdvTnd5N2Z6R1FPYnpnN2xxTGUxTmZqckhqL0gxST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZTjV4QzdnWlpQQ3NpQmxOOUpDcWhIMGlmdnpMNU1DRzhoRTluTjdJdmxNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwUXB1RlArSVJjbm1yYjIxUHVUWHdWQkkyWGlMc0hrMEtDZmp3bW1sakEwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllBSmJwV2RBR242aENkQmxObG5ZUVhicklueGQyTFNZejV6UFRGelFubmc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Inh3cGkzSEE2b0ZiTDExWnFPRkJ2cWZDeTJLTmw4d2kwdVVIU3ZWVW5Gd289In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUcyNDZjWFdnc0VCcVpqWWNIbmJmTEtobnI5amhhY3NBbjE3a1llajFFRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVlI4L2J3Wk9uY2swbFRJSk5ZdDgwSk5zQm1pSGUzd3pjTURxUmZJQkFFaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVDWWtEc3d6UnIwck5FZkxwclNGZjFGZXVqKzUrOWJZb1h3a05uMUhrNklZdUh4Tk5pbm53TEVUWXkrMFZnVnNMeTI2N3ZjMUI4V1RkR2JNemtIWmdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI5LCJhZHZTZWNyZXRLZXkiOiJZdGFrcFBoOWJVVHZNcHZBZHdNNVdoZ1cvSUYvbTUwcHByM2NxTnRtMmJBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzIsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMiwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI4bW5DcGY3X1FyU2RDUU9CT0lxOFV3IiwicGhvbmVJZCI6IjE2OWE3OGFjLTQyOTktNGExOS1hNzE4LTkyNTlkZDJhYTg0YyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1b0xFMzZFc1FPYWxUTVZNMDg0MkYyWUpNNms9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNjEwVEU2SlR1WmlVRVk3WWRUa3B6OSt3Y3dRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ikw4RkJKQkNNIiwibWUiOnsiaWQiOiI5NDc2OTE2MjU4MzoxOEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLvvLMg77yhIO+8pCDvvKUg77y3IH4iLCJsaWQiOiIzOTUxODA0NDQ0MjY2NzoxOEBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09QajhCOFErT2VVd3dZWUFpQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IldHMlpPeUswOUZMUURtV1kvc3dHRzhOSjN2OTg3Qi9tei94WU1wdDFyaFE9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkFhU3NKbi9xMzY2SVBuQ2ZRV1FITVJpQjFKMXc0UTJNZlJKc1B5M3BxVnF2SWU5cG9nUGVPVEhOQm9CWVFkTzVtQ0c5QUJSVUFuaXFwWnAvNnNLb0N3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJwU1BSYnBrOGtScTdXenZtUEZtMFJQOVFJUVFJd1ZyN3ZucUhFOWd6QksvMW1zVldGWlRXZG83Tzc0K3FrMWFoQ05vTTh0bTFkblVjTHFkUXF0WDJnUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzY5MTYyNTgzOjE4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlZodG1Uc2l0UFJTMEE1bG1QN01CaHZEU2Q3L2ZPd2Y1cy84V0RLYmRhNFUifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBZ0lBZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1MTQ2MjkxNywibGFzdFByb3BIYXNoIjoiM1I5WjM5IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFMeHUifQ==",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "+94769162583",
  PASSWORD: 
    process.env.PASSWORD || "Cheezy1234",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};

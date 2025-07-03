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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNk8rVDYxUVRzVjRoTFowZDZCTTBpaXlvZ1ZMTDZycEo0Q3VHMExSbFBuQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVmhUMWIrU0xyelMxYjhOeFBtMXptbmhWSi9NM2hXKzhhWURIeERaMWhtMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtSHZtOXFUQmRpQ2c1MEo1Y3VONFJISmhCSCs5Y01OV0FLM1dza0xXbDBnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvTVlQWXdwVldXQkdEMnFSaVdvVlJVbFhJWnBOREZDUUh4WU85a0dmWERVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFLSE1rWGlVNStpTjhpcFhFakZhNGt2akNVbkVUdUFrSHMxYTZtY016bmM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhIbzZWZVcveW8yWWFBMllINUhsbmZvakROMkI5ZlMvbC9aSlVPRHZqVDA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUNlaVZ3Z25od0tRMnlia1RwYXJRVTFabDNWMC9vL0ZkZGpzMks3U2ExWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN2l5UUljV0xObFVUQzBNaDF1Rm9mb2I5QUoyLzhLMVg0WUFWN1hjKzVHYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1raEg3cDF2bGE0Y1NtVCs5UEJSWHdKcDFBYzFXbWlqSktUT1JMbWllWFllYlNhNmo4UVhVK3hnTjh0T1Bxc3Y1c3RXWU14b3c4amhaTE5LSEhsVUJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQsImFkdlNlY3JldEtleSI6IlMyakowNnRjS0U3S2JSODNuOExXS1EyK2dlOXZMeVBvclhVdWhraURPQk09IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkU2dlZrc1QxUktTSVF3X01VZUNEREEiLCJwaG9uZUlkIjoiNzA1NGMxNjgtYjVlMy00MGE5LTk0MTctZmU3NTFlZWY3ZTIxIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNCVUkwb0ZWb0FzMlVPSk9vZFExUGpCeXk0TT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvLzg3TDVhRlpwOUpMUFhuWDZMMkwwTlF6MGs9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNVc2QzNSNEYiLCJtZSI6eyJpZCI6Ijk0NzY5MTYyNTgzOjIxQHMud2hhdHNhcHAubmV0IiwibmFtZSI6Iu+8syDvvKEg77ykIO+8pSDvvLcgfiIsImxpZCI6IjM5NTE4MDQ0NDQyNjY3OjIxQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT1BqOEI4UTZJK1p3d1lZQlNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiV0cyWk95SzA5RkxRRG1XWS9zd0dHOE5KM3Y5ODdCL216L3hZTXB0MXJoUT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiamxZemlDcHh1OFF4QVBQbzhPZ24xT0QzZ2VTS0JoYk92bXllUVplUFJHU2pJKzRxVk9SVkpsV1k2TlhaRW9xTVlvbGJGR0xWSnFhZU9QSEorMkxQQUE9PSIsImRldmljZVNpZ25hdHVyZSI6Ik11ZWx4WkQ1SVovQ3dlWEJqVlNuRnYwSDVmZG03L25xM1VJOUhMcXg5ZHE3dnpVNlNWR0pxcUN3T2Q2ZDJUN0g3T1FCNXp6V1dwZVhVSU5GNUVLTUJ3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NjkxNjI1ODM6MjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVmh0bVRzaXRQUlMwQTVsbVA3TUJodkRTZDcvZk93ZjVzLzhXREtiZGE0VSJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FnSUFnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUxNTMzNTU4LCJsYXN0UHJvcEhhc2giOiIzUjlaMzkiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUx4dSJ9",
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

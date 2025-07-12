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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0xUeG5Zbkg2VFAzQWxUNTlZVmk3dUZrQ0dGRFdBcXlTU3U2SFFZQTBFaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY09DU0IrVWVVaDhaV2UzKy85bWtNWWtMcXJoSEQzbnE1YnZtRmxWeHBpVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtRXgwMGlpeTh6elNhV2h5Yng4S09ZSGNzQWp2Mk5KdTRHd0FzV3VjSFhZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0azNKajg3RHV6cG81Q3J1VkcxNVN6d2pCUnJvRWQwUDJFa2xqZkMrV0JnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNJby90TEVlOGlKa0RYMEhxODRVc0cxb1RyM1FzUjBZV1Y5RFJDc2JGMGM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImltM09ucklMOXc4TFVJcFJDMmhLUlZpVnduRUlYVUt6NDFHQ1V3OVBYMmc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUdQQ0NCYXVVSkdKeHc3UlF3c1U0U2pJMzNoR3poLy9tNVo0OFZLa01sVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicTJPTmJCandvY0ZuSXpLUml2S25VRWN6czcrNlNFV3RXWHozWGdkdlVIMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjlMR1NxSjdxVlEwK1VsKzFrRjNQL1l5SS9iNncwU3kwKytZR1g4VmNiUDJYZUlqN0tiL1hSMmRFL0c0bWJUZ2pOMFpkWDJwbGthRWhHcDhScUMyQ2pBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTU4LCJhZHZTZWNyZXRLZXkiOiJrKzJaWXMzeFpjOXE4R3hhM24vY1VMb0NEdHE0NzdGd0R0ekkzc1c0NnRrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJWa3MtOGZ2WFRpdWxiLURvaXZudVhRIiwicGhvbmVJZCI6IjJhMDNmNjExLTgxNzMtNDYxZS1iOWU0LWJiNDY3MGZmMDcwMSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxeVEvb25ud1E4K3BQN0RWUzhuWkZacjhnbU09In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidnVaem1PSlp4YnFvZzF0S1p2d3RMTDUxdVJVPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkUzVFpWVzNOIiwibWUiOnsiaWQiOiIxOTAyNjY2NDk2NzoyQHMud2hhdHNhcHAubmV0IiwibGlkIjoiNDEwNTE5MTgyMTcyODU6MkBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09paCt2QUJFSk9rbWNNR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkxIVmtTUHlEQ2hUdEZXSzFJdmRZQWhUa2hJUVJiaEFXT0lXY0pUOG5PVU09IiwiYWNjb3VudFNpZ25hdHVyZSI6InMzd1RDVW95NDM5amxDakQ5azcrUllRZFF5RWo3TTJrWjdrVThkdDhsa3A1L2YvY2w3aGUyb3Z2MDBNSXNKc3lNR2NhVi9qZ3BsbWc1cWZrcmxSUEFnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJCWG9CdEFjeGRVdXZtd203ZnBkWk1NTG1SWFRTVitReThDQzJxSFY0YlBzQUhJU05aQmtNOXFwQy81ZEtvSVVDUDdrUTM2cWJ4OU1QSkhVV0RzbkpoUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjE5MDI2NjY0OTY3OjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCU3gxWkVqOGd3b1U3UlZpdFNMM1dBSVU1SVNFRVc0UUZqaUZuQ1UvSnpsRCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FVSUNBPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUxNTM2MTYwLCJsYXN0UHJvcEhhc2giOiIyVjc3cVUiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUtuViJ9",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "+94769162583",
  PASSWORD: 
    process.env.PASSWORD || "Cheezy1234",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94769162583", "94724304850"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};

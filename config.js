const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_17_07_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNCxcbiAgICAgICAgMjEyLFxuICAgICAgICA3OSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTc5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDk5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTAxLFxuICAgICAgICA1NSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNTksXG4gICAgICAgIDM3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEyNixcbiAgICAgICAgNTUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTY1LFxuICAgICAgICA5MyxcbiAgICAgICAgMTc3LFxuICAgICAgICA0MCxcbiAgICAgICAgODAsXG4gICAgICAgIDkzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDY3LFxuICAgICAgICA5MixcbiAgICAgICAgMjAxLFxuICAgICAgICA2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzIsXG4gICAgICAgIDM5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNzUsXG4gICAgICAgIDY3LFxuICAgICAgICA5MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDYxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDg2LFxuICAgICAgICA3MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDI5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDUzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTE5LFxuICAgICAgICAzNSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIxLFxuICAgICAgICA5OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjM1LFxuICAgICAgICAzNSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMDksXG4gICAgICAgIDY1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDExMixcbiAgICAgICAgMjI4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDY2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMyxcbiAgICAgICAgMjAwLFxuICAgICAgICA2MCxcbiAgICAgICAgMTExLFxuICAgICAgICA3OCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTgxLFxuICAgICAgICAzOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgNDgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTE0LFxuICAgICAgICA4OSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDgxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgODIsXG4gICAgICAgIDc0LFxuICAgICAgICA2MCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTY2LFxuICAgICAgICAzOCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDg1LFxuICAgICAgICA0OCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDcwLFxuICAgICAgICAyNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDQyLFxuICAgICAgICA2LFxuICAgICAgICA1OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgODAsXG4gICAgICAgIDI0NixcbiAgICAgICAgNTEsXG4gICAgICAgIDM4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIzLFxuICAgICAgICAxNSxcbiAgICAgICAgMTk0LFxuICAgICAgICA0MSxcbiAgICAgICAgMTExLFxuICAgICAgICAxOTgsXG4gICAgICAgIDkzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDcwLFxuICAgICAgICA0NCxcbiAgICAgICAgMjM4LFxuICAgICAgICAzNixcbiAgICAgICAgMTEyLFxuICAgICAgICA1MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMjFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA0M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTgxLFxuICAgICAgICA0NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjM5LFxuICAgICAgICA2MCxcbiAgICAgICAgMTcwLFxuICAgICAgICAwLFxuICAgICAgICA5MSxcbiAgICAgICAgMjksXG4gICAgICAgIDE5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzLFxuICAgICAgICA2MSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNDksXG4gICAgICAgIDEwMixcbiAgICAgICAgOTgsXG4gICAgICAgIDg1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIwLFxuICAgICAgICAxNzksXG4gICAgICAgIDE5LFxuICAgICAgICAxMyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNTksXG4gICAgICAgIDI2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDkzLFxuICAgICAgICA4OCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTcwLFxuICAgICAgICA1OCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMTksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTU0LFxuICAgICAgICA5MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDMyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIk0rNXhoUXdDMXp4ajBPYWhheHdTYVdjc1hKaVBNbkNXMWJoU1I4NERxaUE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInI0UE15WjJYUURHaHdvbnJzLUJEdHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiN2JmZTRkMDYtMzQ4OS00MjIyLWJmMTktNmI4NmU3NWE1MWUxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk4LFxuICAgICAgMTksXG4gICAgICAxNTYsXG4gICAgICA3NyxcbiAgICAgIDM2LFxuICAgICAgMzMsXG4gICAgICA4NCxcbiAgICAgIDE3MCxcbiAgICAgIDIwOSxcbiAgICAgIDE1OSxcbiAgICAgIDIxNCxcbiAgICAgIDExOCxcbiAgICAgIDE3MyxcbiAgICAgIDg2LFxuICAgICAgNzksXG4gICAgICA4NyxcbiAgICAgIDIzNSxcbiAgICAgIDIwNyxcbiAgICAgIDE2NSxcbiAgICAgIDU4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0LFxuICAgICAgMTk2LFxuICAgICAgMjMzLFxuICAgICAgNDYsXG4gICAgICAxNjksXG4gICAgICAxODMsXG4gICAgICAyMTUsXG4gICAgICAyMTUsXG4gICAgICAxNDEsXG4gICAgICAzOCxcbiAgICAgIDI0OCxcbiAgICAgIDQ4LFxuICAgICAgMTQsXG4gICAgICAxOTcsXG4gICAgICA2MixcbiAgICAgIDE4MyxcbiAgICAgIDk3LFxuICAgICAgMTc0LFxuICAgICAgMjcsXG4gICAgICAxMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJZRjNOU0U2TFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0MTEyODYwODAwOjI1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiTUVOVE9SIExFRU5cIixcbiAgICBcImxpZFwiOiBcIjI2ODU4MTkzNzkyMjE4MToyNUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOWGcySW9FRUoveXFiUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjNYMU5yOTBoOWE0MWMxY2loZHZ4djJFMHR0QlFnb3V0cE1JbzM1Z3Izdzg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiaGtzNllGRndaOUw4WXBVQ3NBN0RUS3k3UjhMaHloUHIyQU1qVVJFbWc4MXVDa2J3eS9aNVpLNWxFRUx2Z1NVVDJQZGZTNXlHYWFxQ3hLbWJ2SVJOQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwieVErMU9mL0dlY2hOY05EZVN4WWQrY1N1V0hySGNhY2huL3h5M0JhdnVBZWhoanprTWpTZTMvdXkxTVZKUlgxU09hbk53bDVtWE5kcVJKck5kZlcvQmc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0MTEyODYwODAwOjI1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDM1MTAxMVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

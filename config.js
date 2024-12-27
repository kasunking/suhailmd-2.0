const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_52_12_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA5MSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA1MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE3LFxuICAgICAgICA3MSxcbiAgICAgICAgMTg5LFxuICAgICAgICA3MCxcbiAgICAgICAgMTY3LFxuICAgICAgICA5MyxcbiAgICAgICAgMjI5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNSxcbiAgICAgICAgOTMsXG4gICAgICAgIDI3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE4LFxuICAgICAgICA3NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDg1LFxuICAgICAgICA5NixcbiAgICAgICAgMjE2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDc2LFxuICAgICAgICA1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTA5LFxuICAgICAgICA3MixcbiAgICAgICAgODQsXG4gICAgICAgIDk3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTc3LFxuICAgICAgICA1NSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNDQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICA4OCxcbiAgICAgICAgMjEyLFxuICAgICAgICA3OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjI1LFxuICAgICAgICA1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDQxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDg5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjAxLFxuICAgICAgICA5OCxcbiAgICAgICAgNjEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNDksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA3NyxcbiAgICAgICAgMTA4LFxuICAgICAgICAzNSxcbiAgICAgICAgNixcbiAgICAgICAgNTcsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjM0LFxuICAgICAgICA3MSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNCxcbiAgICAgICAgMjM5LFxuICAgICAgICA3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDM2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDk4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDMxLFxuICAgICAgICA1OSxcbiAgICAgICAgMTMxLFxuICAgICAgICA3NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDU3LFxuICAgICAgICA4NixcbiAgICAgICAgOTYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMTcsXG4gICAgICAgIDg5LFxuICAgICAgICAyNixcbiAgICAgICAgNzAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTA5LFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMzMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTgwLFxuICAgICAgICAxNixcbiAgICAgICAgMTk1LFxuICAgICAgICAxMyxcbiAgICAgICAgODUsXG4gICAgICAgIDM5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA2NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA4OCxcbiAgICAgICAgMjM0LFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTU5LFxuICAgICAgICA1OCxcbiAgICAgICAgMzIsXG4gICAgICAgIDM4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDY3LFxuICAgICAgICA2NyxcbiAgICAgICAgNTksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyOSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxODgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxODAsXG4gICAgICAgIDM1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjUyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDU0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDc5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTE2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDcxLFxuICAgICAgICA4OSxcbiAgICAgICAgMjA4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxOTksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDcxLFxuICAgICAgICA3NSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDM0LFxuICAgICAgICA4MCxcbiAgICAgICAgNSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjI1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjksXG4gICAgICAgIDExOCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxODEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTk2LFxuICAgICAgICA4OCxcbiAgICAgICAgMTUzLFxuICAgICAgICA0MCxcbiAgICAgICAgMyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDI5LFxuICAgICAgICAyNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDQyLFxuICAgICAgICAxNixcbiAgICAgICAgMTIxLFxuICAgICAgICAxNSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDg0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTkxLFxuICAgICAgICA4MSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTI4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMjEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZVMyRzRvSmwra2dPVE4zOEcwUkRRbkl6L0Jyck5NaUgvZ1dsZzhHdXViQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDc2MjM3NjA0NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRjBDRDVFMjJCM0NDMkY2NjJDMkMxOUI5QzdGMDQwNzVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzM1MzE0NzYyXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImtlWHdua1R4U2hLdWQ0Nm1HMHdhQ3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiZTQ5NmVjZDQtZWU0MS00MzQwLWI0ZmItOTcxYmQ3Mjk1ZTc1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0MixcbiAgICAgIDIwMSxcbiAgICAgIDExMCxcbiAgICAgIDExOCxcbiAgICAgIDE3OSxcbiAgICAgIDc0LFxuICAgICAgMTI2LFxuICAgICAgMTYzLFxuICAgICAgMjEsXG4gICAgICAyMjcsXG4gICAgICAxNSxcbiAgICAgIDE5NSxcbiAgICAgIDIzMyxcbiAgICAgIDEzNCxcbiAgICAgIDUyLFxuICAgICAgMTAyLFxuICAgICAgMTA0LFxuICAgICAgNTQsXG4gICAgICAyMDksXG4gICAgICAyMjlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQ4LFxuICAgICAgMTc3LFxuICAgICAgMjUsXG4gICAgICAxMTAsXG4gICAgICAxNjMsXG4gICAgICAxLFxuICAgICAgMTM5LFxuICAgICAgNixcbiAgICAgIDI0NyxcbiAgICAgIDQ5LFxuICAgICAgMjA2LFxuICAgICAgMjM5LFxuICAgICAgMjA2LFxuICAgICAgMjE0LFxuICAgICAgMjQ3LFxuICAgICAgNDIsXG4gICAgICAxNTcsXG4gICAgICAxNjYsXG4gICAgICAxOTYsXG4gICAgICAxOTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRzU4NDlBWUpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzYyMzc2MDQ0OjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE0NDAwMjA4Mjk0MzE3MDo3QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIn5LYXN1bn5cIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKR2M3UllRd1pxN3V3WVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIk5hL2JJRUhlV2hSQ3BmOWZZMU80RXVkdzVEeHFvVG8venRPdWppS3pXeXc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUE1jL0x4SFQrTkhIT2lCSm9vNitXNktlM09ZbTBhZ0kvNUs0cFUrVTJ5RXkvRHNZVCtXL1d4eXlKK2tpS1hUdERXQXRpQ3ZwTGdqSjZKNXVMdGlLQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNC83ZURwWGxHMTZDTVN0TDl3aWYra2dmQ2JsVVRUd1FUWm5ZaE41akUyOFpUN0UxMHNMRXNxRGtHYXh3WFNFc1I4Q1VCY3dPYVRUYnVzN2NmUUUraHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3NjIzNzYwNDQ6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA0NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM1MzE0NzU3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRktJXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGS0kuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJFV2dUVTMwM3RSbDJWZWVKb1NTLzZyRzA4czFFUGM5SENxMjZCRXJ6eWRZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQ3OTI2ODAxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzUzMTQ3NjIwMTNcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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

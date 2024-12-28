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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_03_12_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICA2NixcbiAgICAgICAgOTYsXG4gICAgICAgIDE2LFxuICAgICAgICA5OCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTkyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE4LFxuICAgICAgICAyNCxcbiAgICAgICAgNSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNDksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjMyLFxuICAgICAgICA5MCxcbiAgICAgICAgMSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzMsXG4gICAgICAgIDI1LFxuICAgICAgICAxODcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTksXG4gICAgICAgIDIzLFxuICAgICAgICA5NSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjM3LFxuICAgICAgICAyMSxcbiAgICAgICAgMjEsXG4gICAgICAgIDgzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDU5LFxuICAgICAgICA3MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDAsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDU1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTksXG4gICAgICAgIDIzMixcbiAgICAgICAgMjAxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDExMixcbiAgICAgICAgMzUsXG4gICAgICAgIDIyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDkwLFxuICAgICAgICA5NSxcbiAgICAgICAgMjAwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxODYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNDksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjQzLFxuICAgICAgICAzNyxcbiAgICAgICAgODMsXG4gICAgICAgIDkyLFxuICAgICAgICA1MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMixcbiAgICAgICAgMjA3LFxuICAgICAgICA0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI1MixcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDc1LFxuICAgICAgICAzNCxcbiAgICAgICAgODYsXG4gICAgICAgIDEsXG4gICAgICAgIDQxLFxuICAgICAgICA5MyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDI0LFxuICAgICAgICAzNSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDkzLFxuICAgICAgICAxODUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjQzLFxuICAgICAgICAzMixcbiAgICAgICAgMjUxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDM0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDk5LFxuICAgICAgICAxODMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTA0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTY2LFxuICAgICAgICA5MixcbiAgICAgICAgMTkzLFxuICAgICAgICA1M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDYzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDUzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDgxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDExNixcbiAgICAgICAgNjksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjE1LFxuICAgICAgICA3NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDg3LFxuICAgICAgICA5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDUxLFxuICAgICAgICA4NyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDM5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDkxLFxuICAgICAgICAxODIsXG4gICAgICAgIDMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTgzLFxuICAgICAgICA3MCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIsXG4gICAgICAgIDQxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNyxcbiAgICAgICAgMjE2LFxuICAgICAgICA2OSxcbiAgICAgICAgMjQyLFxuICAgICAgICA2NyxcbiAgICAgICAgMjIwLFxuICAgICAgICA1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDQ4LFxuICAgICAgICA5OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMjJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDkxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI3LFxuICAgICAgICA2LFxuICAgICAgICA3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjM0LFxuICAgICAgICA0NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMzksXG4gICAgICAgIDkyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzLFxuICAgICAgICA0NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjE1LFxuICAgICAgICA5OCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNzksXG4gICAgICAgIDY1LFxuICAgICAgICA3MyxcbiAgICAgICAgMjAzLFxuICAgICAgICA2MCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDI3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDQwLFxuICAgICAgICA4NixcbiAgICAgICAgMjQzLFxuICAgICAgICAyMixcbiAgICAgICAgMjA0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDkxLFxuICAgICAgICAxMCxcbiAgICAgICAgMTAwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTQwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTU01a3BBZEcvQ050RVRuZHYrUlVFbGEvRlJ2NHkwbFZqWGRvQmRtbkhyaz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiYzBqQ2gtd2pUMzIzcUFiSDQ2WE5UUVwiLFxuICBcInBob25lSWRcIjogXCI0NDM4NWIzZS1lZThhLTRmNDktODRlNy0yMGE3ODQ5YTk3NTRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMCxcbiAgICAgIDcyLFxuICAgICAgMjQ0LFxuICAgICAgNTQsXG4gICAgICAxNjUsXG4gICAgICAxOTksXG4gICAgICAxMzQsXG4gICAgICAyNTIsXG4gICAgICA0OCxcbiAgICAgIDEzNixcbiAgICAgIDc1LFxuICAgICAgMTI5LFxuICAgICAgMTk3LFxuICAgICAgMTQ1LFxuICAgICAgNDUsXG4gICAgICA4MixcbiAgICAgIDIwMCxcbiAgICAgIDM0LFxuICAgICAgNjEsXG4gICAgICAxNDJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjEzLFxuICAgICAgMjMxLFxuICAgICAgNDQsXG4gICAgICAyMjUsXG4gICAgICAxMzIsXG4gICAgICAxNzksXG4gICAgICAyNCxcbiAgICAgIDEwOSxcbiAgICAgIDI1LFxuICAgICAgNTksXG4gICAgICA0MixcbiAgICAgIDMwLFxuICAgICAgMTU1LFxuICAgICAgMjA4LFxuICAgICAgMTU3LFxuICAgICAgMjIwLFxuICAgICAgMTQ0LFxuICAgICAgNzQsXG4gICAgICAxMzksXG4gICAgICAyMjNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMUc3WE04TVlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzYyMzc2MDQ0OjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNDQwMDIwODI5NDMxNzA6MTVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSk9jN1JZUXhzTEF1d1lZQlNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJOYS9iSUVIZVdoUkNwZjlmWTFPNEV1ZHc1RHhxb1RvL3p0T3VqaUt6V3l3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIks0K1RYV1NiaGQ0bXNsWDdUdGp6Y0hWYzE2K1lZL3Q0ZFRTM25BMm5kTzU5azdZV1VIeXNHUStITkxTbTNLU0o4SlZHSXVJNXh0MWF5UHhFZURKYkNBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkc5cEFHMlFEd0tUMUpKM3NTRFN5cWF0VjV6b05DOWxRNG0yKytlYUtXbEhXU0Z3UW9zdnU0eUttckFSSTZ2SzE3Vkt2ZDdiT2dnL3BOeGlQMnYrbWd3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzYyMzc2MDQ0OjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDQ0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzU0MDE4MDFcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9="  // PUT your SESSION_ID 


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

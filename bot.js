const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("523446532221960204")
setInterval(function() {
channel.send(`nasserxdspam`);
}, 30)
})

client.login(process.env.BOT_TOKEN);

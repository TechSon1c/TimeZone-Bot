
const { getCurrentTimeForTimeZone, apiUrlEast, apiUrlCentral, apiUrlMountain, apiUrlPacific } = require("./index.js");


const { Client, GatewayIntentBits, userMention } = require("discord.js");
const { message } = require("prompt");
const path = require("path");
const { error } = require("console");
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
});


client.on("ready", () => {
    console.log("Bot is ready");
  
});


client.on("messageCreate", async (message) => {
    if (message.content.toLowerCase() === "!time") {
        try {
            const timeEast = await getCurrentTimeForTimeZone(apiUrlEast, "Eastern Time Zone");
            const timeCentral = await getCurrentTimeForTimeZone(apiUrlCentral, "Central Time Zone");
            const timeMountain = await getCurrentTimeForTimeZone(apiUrlMountain, "Mountain Time Zone");
            const timePacific = await getCurrentTimeForTimeZone(apiUrlPacific, "Pacific Time Zone");

            message.reply(`Time zone in EAST/NY/NJ -> ${timeEast},\nTime zone in Central/Illinois -> ${timeCentral},\nTime zone in Mountains/Idaho2  -> ${timeMountain},\nTime zone in Pacific/California -> ${timePacific}`);
        } catch (error) {
            console.error("Error occurred while fetching time:", error);
            message.reply("An error occurred while fetching time. Please try again later.");
        }
    }
});


client.login("MTIwOTIxNzc1MDI4NzkwODk1Ng.Gutp53.1N8LpYYDUfBxp3EourXWoPJit_UJ-L_Dt5tU24");
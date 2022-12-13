const { Client, GatewayIntentBits, EmbedBuilder, PermsissionsBitField, Permissions } = require('discord.js');


const client = new Client({intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on("ready" , () => { 
     console.log("online!");


     client.user.setActivity(`this is my status`)
 })

client.login("insert token");

/**
   * if you get DisallowedIntents error, turn on Presence Intent, Server Members Intent, and Message Content Intent in your bot settings
   * 
   * 
   */

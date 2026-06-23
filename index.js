const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

process.on("unhandledRejection", console.error);
process.on("uncaughtException", console.error);

client.once("ready", () => {
  console.log(`✅ ${client.user.tag} đã online`);
});

client.on("interactionCreate", async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "ping") {
    await interaction.reply("🏓 Pong!");
  }
});

client.login(process.env.TOKEN);

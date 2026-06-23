const {
    Client,
    GatewayIntentBits,
    EmbedBuilder
} = require("discord.js");

const { randomUUID } = require("crypto");

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

    if (interaction.commandName === "blacklist") {

        const staff = interaction.options.getString("staff");
        const robloxname = interaction.options.getString("robloxname");
        const profileurl = interaction.options.getString("profileurl");
        const gameurl = interaction.options.getString("gameurl");
        const violation = interaction.options.getString("violation");
        const discorduser = interaction.options.getString("discorduser");
        const discordid = interaction.options.getString("discordid");
        const note = interaction.options.getString("note");

        const embed = new EmbedBuilder()
            .setColor("#57F287")
            .setTitle("User Blacklisted")
            .setDescription(
`**Staff:** ${staff}

**Date:** ${new Date().toLocaleDateString("vi-VN")}

**UUID:**
${randomUUID()}

**Target:**
• Roblox Profile Name: ${Robloxname}
• Roblox Profile URL: ${profileURL}
• Violation: ${violation}
• Discord Username: ${discorduser}
• Discord ID: ${discordid}
• Roblox Game URL: ${gameurl}
• Note: ${note}`
            )
            .setFooter({
                text: "Blacklist System"
            })
            .setTimestamp();

        const channel = interaction.guild.channels.cache.get("1465916175492972575");

await channel.send({
    embeds: [embed]
});

await interaction.reply({
    content: "Đã thêm vào blacklist",
    ephemeral: true
});
    }
});

client.login(process.env.TOKEN);

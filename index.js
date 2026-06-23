const {
    Client,
    GatewayIntentBits,
    EmbedBuilder
} = require("discord.js");

const { randomUUID } = require("crypto");

const client = new Client({
    intents: [GatewayIntentBits.Guilds]
});

client.once("ready", () => {
    console.log(`✅ ${client.user.tag} đã online`);
});

client.on("interactionCreate", async interaction => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === "blacklist") {

        const staff = interaction.options.getString("staff");
        const robloxname = interaction.options.getString("robloxname");
        const violation = interaction.options.getString("violation");

        const embed = new EmbedBuilder()
            .setColor("#57F287")
            .setTitle("User Blacklisted")
            .setDescription(
`**Staff:** ${staff}

**UUID:**
${randomUUID()}

**Target:**
• Roblox Name: ${robloxname}
• Violation: ${violation}`
            )
            .setTimestamp();

        await interaction.reply({
            embeds: [embed]
        });
    }
});

client.login(process.env.TOKEN);

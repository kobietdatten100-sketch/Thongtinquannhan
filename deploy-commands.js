const { REST, Routes, SlashCommandBuilder } = require('discord.js');

const commands = [
    new SlashCommandBuilder()
        .setName('blacklist')
        .setDescription('Thêm người dùng vào blacklist')
        .addStringOption(option =>
            option.setName('staff')
                .setDescription('Tên staff')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('robloxname')
                .setDescription('Tên Roblox')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('violation')
                .setDescription('Lý do blacklist')
                .setRequired(true))
].map(command => command.toJSON());

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
    try {
        await rest.put(
            Routes.applicationCommands(process.env.CLIENT_ID),
            { body: commands }
        );

        console.log('✅ Đã đăng ký slash commands');
    } catch (error) {
        console.error(error);
    }
})();

const { REST, Routes, SlashCommandBuilder } = require('discord.js');

const commands = [
    new SlashCommandBuilder()
        .setName('blacklist')
        .setDescription('Thêm người dùng vào blacklist')

        .addStringOption(option =>
            option.setName('staff')
                .setDescription('Tên Staff')
                .setRequired(true))

        .addStringOption(option =>
            option.setName('robloxname')
                .setDescription('Tên Roblox')
                .setRequired(true))

        .addStringOption(option =>
            option.setName('profileurl')
                .setDescription('Link Roblox Profile')
                .setRequired(true))

        .addStringOption(option =>
            option.setName('gameurl')
                .setDescription('Link Game')
                .setRequired(true))

        .addStringOption(option =>
            option.setName('violation')
                .setDescription('Lý do blacklist')
                .setRequired(true))

        .addStringOption(option =>
            option.setName('discorduser')
                .setDescription('Discord Username')
                .setRequired(true))

        .addStringOption(option =>
            option.setName('discordid')
                .setDescription('Discord ID')
                .setRequired(true))

        .addStringOption(option =>
            option.setName('note')
                .setDescription('Ghi chú')
                .setRequired(true))
].map(command => command.toJSON());

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
    try {
        console.log('Đang đăng ký slash commands...');

        await rest.put(
            Routes.applicationCommands(process.env.CLIENT_ID),
            { body: commands }
        );

        console.log('✅ Slash commands đã được đăng ký!');
    } catch (error) {
        console.error(error);
    }
})();

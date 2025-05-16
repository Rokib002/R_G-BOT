module.exports.config = {
    name: "ip",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "R Gaming SMP by Nahid",
    description: "Displays server IP for R Gaming SMP",
    commandCategory: "info",
    usages: "ip",
    cooldowns: 5
};

module.exports.run = async function({ api, event }) {
    const { threadID, messageID } = event;
    const message = 
`🎮 𝗝𝗼𝗶𝗻 𝗢𝘂𝗿 𝗥 𝗚𝗮𝗺𝗶𝗻𝗴 𝗦𝗠𝗣 𝗦𝗲𝗿𝘃𝗲𝗿!

📌 𝗦𝗲𝗿𝘃𝗲𝗿 𝗔𝗱𝗱𝗿𝗲𝘀𝘀:

🌐 𝗝𝗮𝘃𝗮 ➜  rg.mcpe.nl
📱 𝗕𝗲𝗱𝗿𝗼𝗰𝗸 ➜  rg.mcpe.nl
📍 𝗣𝗼𝗿𝘁 ➜ 25666

✅ 𝗦𝘂𝗽𝗽𝗼𝗿𝘁 𝗮𝗻𝗱 𝗛𝗲𝗹𝗽 𝗮𝘃𝗮𝗶𝗹𝗮𝗯𝗹𝗲 𝗶𝗳 𝗻𝗲𝗲𝗱𝗲𝗱!`;

    return api.sendMessage(message, threadID, messageID);
};

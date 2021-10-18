const client = require("../index")

const db = require("quick.db");

client.on("messageCreate", async (message) => {

    let prefix = db.fetch(`prefix_${message.guild.id}`);

    if (prefix === null) prefix = "m!";

if(message.content.startsWith(`<@${client.user.id}>`)) {

    return message.reply(`${message.author}, olá! Meu prefixo aqui é \`${prefix}\` ou \`/\` e para ver meus comandos use \`${prefix}ajuda\` ou use \`/ajuda\`.`)    

} 

})

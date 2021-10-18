const client = require("../index");

const db = require("quick.db");

client.on("messageCreate", async (message) => {

let prefixo = db.fetch(`prefix_${message.guild.id}`)

if (!prefixo) prefixo = client.config.prefix;

    if (

        message.author.bot ||

        !message.guild ||

        !message.content.toLowerCase().startsWith(prefixo)

    )

        return;

    const [cmd, ...args] = message.content

        .slice(prefixo.length)

        .trim()

        .split(/ +/g);

    const command = client.commands.get(cmd.toLowerCase()) || client.commands.find(c => c.aliases?.includes(cmd.toLowerCase()));

    if (!command) return;

    await command.run(client, message, args);

});


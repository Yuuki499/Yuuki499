const { Client, Collection } = require("discord.js");

const client = new Client({

    intents: 32767,

});

module.exports = client;

// Global Variables

client.commands = new Collection();

client.slashCommands = new Collection();

client.config = require("./config.json");

// Initializing the project

require("./handler")(client);

//unhandledRejection

   process.on('unhandledRejection', (reason, p) => {

        console.log(' [ ANTICLASH ] | SCRIPT REJEITADO');

        console.log(reason, p);

    }); 

//uncaughtException

    process.on("uncaughtException", (err, origin) => {

        console.log(' [ ANTICLASH] | CATCH ERROR');

        console.log(err, origin);

    })  

//uncaughtExceptionMonitor

    process.on('uncaughtExceptionMonitor', (err, origin) => {

        console.log(' [ ANTICLASH ] | BLOQUEADO');

        console.log(err, origin);

    }); 

//multipleResolves

    process.on('multipleResolves', (type, promise, reason) => {

        console.log(' [ ANTICLASH ] | VÁRIOS ERROS');

        console.log(type, promise, reason);

    }); 

client.login(client.config.token);


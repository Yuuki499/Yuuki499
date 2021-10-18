const Discord = require("discord.js")

module.exports =  {

name: "serverinfo",

description: "Veja infos sobre o server",

type: "CHAT_INPUT",

run: async (client, interaction, args) => {

    try{

    let server = interaction.guild;

    let Bots = interaction.guild.members.cache.filter(a => a.user.bot).size;

    let channels = interaction.guild.channels.cache.filter(channel => channel.type === "text").size;

    let voices = interaction.guild.channels.cache.filter(channel => channel.type === "voice").size;

    let verificacao = interaction.guild.verificationLevel  

    if(verificacao === `VERY_HIGH`) verificacao = "┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻"

    if(verificacao === `HIGH`) verificacao = "(╯°□°）╯︵ ┻━┻";

    if(verificacao === `MEDIUM`) verificacao = "Médio";

    if(verificacao === `LOW`) verificacao = "Baixa";

    if(verificacao === `NONE`) verificacao = "Nenhuma";

    const bbg = interaction.guild.iconURL({ dynamic: true, format: "png", size: 1024 });

    const invite = new Discord.MessageActionRow().addComponents(

       

    new Discord.MessageButton().setLabel("png").setEmoji("<:hype_1:894537367543754762> ").setURL(bbg).setStyle("LINK"),

      new Discord.MessageButton().setLabel("jpg").setEmoji("<:hype_2:894537424577916928> ").setURL(bbg).setStyle("LINK"),

  );

      

    let embed = new Discord.MessageEmbed()

.setTitle(server.name)

//.addField('> :package: | Nome:' , `\`\`\`${server.name}\`\`\``,true)

.addField('> :bookmark_tabs: | Id:' , `\`\`\`${server.id}\`\`\``,true)

.addField('> :card_box:| Quantidade de membros:' , `\`\`\`${server.memberCount}\`\`\``,true)

.addField('> :dividers: | Quantidade de bots:', `\`\`\`${Bots}\`\`\``,true)

//.addField('> :books: | Quantidade de canais de texto:', `\`\`\`${channels}\`\`\``, true)

//.addField('> :speaking_head: | Quantidade de canais de voz:', `\`\`\`${voices}\`\`\``,true)

.addField('> :no_entry: | Level de verificação:', `\`\`\`${verificacao}\`\`\``,true)

.addField('> :bookmark: | Criado em:' , `\`\`\`${server.createdAt}\`\`\``,true)

.addField('> :abacus: | Entrei em:' , `\`\`\`${server.joinedAt}\`\`\``,true)

.addField('> :crown: | Owner:' , `<@${server.ownerId}>`,true)

.addField('> :pushpin: | Cargo mais alto:' , `${server.roles.highest}`,true)

.setImage(bbg)//server.iconURL())

.setThumbnail(interaction.guild.iconURL())

.setColor("RANDOM")

    await interaction.followUp({embeds: [embed], components: [invite]})

    } catch(err){

        console.log(err)

    }

}

}

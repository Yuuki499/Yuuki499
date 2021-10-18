const Discord = require("discord.js");

module.exports= {

        name: 'servericon',

    description: 'Ver o ícone do server',

    type: 'CHAT_INPUT',

    run:async (client, interaction, args) => {

        let icon = interaction.guild.iconURL({ dynamic: true, format: "png", size: 1024 })

        let icn = interaction.guild.iconURL({ dynamic: true, format: "jpg", size: 1024})

       // if (icon === null) return interaction.followUp(":x: | Oops... Servidor não tem um ícone!");

        const invite = new Discord.MessageActionRow().addComponents(

       

    new Discord.MessageButton().setLabel("png").setEmoji("<:hype_1:894537367543754762> ").setURL(icon).setStyle("LINK"),

      new Discord.MessageButton().setLabel("jpg").setEmoji("<:hype_2:894537424577916928> ").setURL(icn).setStyle("LINK"),

  );

      

        const servericon = new Discord.MessageEmbed()

    .setColor("YELLOW")

    .setTitle(`${interaction.guild.name}`)

    .setDescription(`**Clique [aqui](${interaction.guild.iconURL()}) para baixar o ícone do servidor!**`) // Aqui é pro cara fazer o download da Imagem do Servidor

    .setImage(interaction.guild.iconURL({ dynamic: true, size: 2048 })) // aqui pega a imagem do Servidor

    .setFooter(`${interaction.member.user.tag}`, interaction.member.user.displayAvatarURL({dynamic: true}))

    interaction.followUp({embeds: [servericon], components: [invite]})

    }

};

const Discord = require("discord.js"); 

module.exports = {

    name: 'avatar',

    description: 'Ver o avatar de um membro.',

    type: 'CHAT_INPUT',

    options:[

        {

            name:'user',

            description:'Marque alguem para ver seu avatar. User sem avatar não funcionará!',

            type: 'USER',

            required:true,

        },

    ],

    run: async (client, interaction, args) =>{

  

  const user = interaction.options.getUser('user') || interaction.member.user

      

const sicon = user.avatarURL({ dynamic: true, format: "png", size: 1024 })

const sicn = user.avatarURL({ dybamic: true, format: "jpg", size: 1024})   

  const invite = new Discord.MessageActionRow().addComponents(

       

    new Discord.MessageButton().setLabel("png").setEmoji("<:hype_1:894537367543754762> ").setURL(sicon).setStyle("LINK"),

      new Discord.MessageButton().setLabel("jpg").setEmoji("<:hype_2:894537424577916928> ").setURL(sicn).setStyle("LINK"),

  );

//

  const embed = new Discord.MessageEmbed() 

    .setColor(`RANDOM`) 

    .setTitle(user.tag) 

   // .setDescription(`**Clique [aqui](${sicon}) para baixar a imagem!**`)

    .setImage(sicon) 

    

    await interaction.followUp({embeds: [embed], components: [invite]});

}

} 


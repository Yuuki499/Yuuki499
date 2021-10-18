const Discord = require("discord.js"); 

const moment = require("moment")

module.exports = {

  name: "userinfo",

  description: "Veja infos de um user",

  type: 'CHAT_INPUT',

  options: [

      {

          name: 'user',

          type: 'USER',

          description: 'User que deseja ver infos',

          required: true,

      },

  ],

run:  async (client, interaction, args) => {

  let user = interaction.options.getUser('user');

  let member = interaction.guild.members.cache.get(user.id)

  

  let avatar_png = user.avatarURL({ dynamic: true, format: "png", size: 1024 });

  let avatar_gif = user.avatarURL({ dynamic: true, format: "jpg", size: 1024 });    

    

  /*const invite = new Discord.MessageActionRow().addComponents(

       

    new Discord.MessageButton().setLabel("png").setEmoji("<:hype_1:894537367543754762> ").setURL(avatar_png).setStyle("LINK"),

    new Discord.MessageButton().setLabel("jpg").setEmoji("<:hype_2:894537424577916928> ").setURL(avatar_gif).setStyle("LINK"),

  );*/

  let as = user.bot;

  if(as === false) as = "";

  if(as === true) as = "[Bot]";

  let embed = new Discord.MessageEmbed() 

  

    .setAuthor(`${as} ${user.username}`, user.avatarURL()) 

    .addField("> :bookmark: | Id:", `\`\`\`${user.id}\`\`\``)

    .addField("> :computer: | Tag:", `\`${user.tag}\``,true)

    .addField("> :clock130: | Conta criada em:", `\`\`\`${member.user.createdAt.toLocaleString()}\`\`\``, true)

    .addField(`> :clipboard: | Cargos: [${member.roles.cache.filter(r => r.id !== interaction.guild.id).map(roles => `\`${roles.name}\``).length}]`,`${member.roles.cache.filter(r => r.id !== interaction.guild.id).map(roles => `<@&${roles.id }>`).join(" **|** ") || "Sem cargos!"}`, true)

    .addField("> :calendar_spiral: | Entrou em:", `\`\`\`${moment(member.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}\`\`\``, true)

    .addField('> :card_box: | Permissões:', `\`\`\`${member.permissions.toArray()}\`\`\``,true)

   //.setImage(avatar_png)

    .setThumbnail(user.avatarURL())

    .setTimestamp()

    .setFooter(`${interaction.member.user.tag}`, interaction.member.user.avatarURL())

    .setColor('RANDOM')

 await interaction.followUp({embeds:[embed]}); 

},

}

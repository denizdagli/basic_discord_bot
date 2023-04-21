const Discord=require('discord.js')
const client=new Discord.Client({
    intents:[Discord.GatewayIntentBits.MessageContent,Discord.GatewayIntentBits.GuildInvites,Discord.GatewayIntentBits.Guilds,
    Discord.GatewayIntentBits.DirectMessages,

    ]
})

client.on('ready',(c)=>{
    console.log('client ready')
    console.log(c)
})
client.login('TOKEN')

client.on('channelCreate',(c)=>{
    console.log('channel created')

})

client.on('messageCreate',(m)=>{
    console.log(m.content)
})



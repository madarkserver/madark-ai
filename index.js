import { Client, GatewayIntentBits } from "discord.js";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once("ready", () => {
  console.log(`🦖 ${client.user.tag} está conectado.`);
});

client.on("messageCreate", async (message) => {

  if (message.author.bot) return;

  if (message.channel.id !== process.env.CHANNEL_ID) return;

  const pregunta = message.content.toLowerCase();

  if (
    pregunta.includes("hola") ||
    pregunta.includes("buenas") ||
    pregunta.includes("hey")
  ) {
    return message.reply(
`🦖 **¡Hola, superviviente!**

Soy **MADARK AI**, el asistente oficial del servidor.

Puedes preguntarme cualquier cosa sobre:

• Configuración
• Normas
• Mercado
• Casino
• Simple Coins
• Eventos
• Donaciones
• Votaciones

🎮 ¡Pásalo bien en MADARK!`
    );
  }

  message.reply(
`🦖 Todavía estoy aprendiendo.

Muy pronto podré responder cualquier duda sobre MADARK.`
  );

});

client.login(process.env.DISCORD_TOKEN);

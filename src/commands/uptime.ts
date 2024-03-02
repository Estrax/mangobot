import { Message } from "discord.js";
import { bot } from "../";
import { sendMessages } from "../utils/bot";

export default (message: Message): void => {
  const seconds = Math.floor(bot.client.uptime! / 1000) % 60;
  const minutes = Math.floor(seconds / 60) % 60;
  const hours = Math.floor(minutes / 60) % 24;
  const days = Math.floor(hours / 24);
  const responses: string[] = [`Uptime: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds!`];

  sendMessages(message)(responses);
};

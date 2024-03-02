import { Client, Message } from "discord.js";
import { config } from "./config";
import executeCommand from "../commands";

export class Bot {
  public readonly prefix = config.PREFIX;

  public constructor(public readonly client: Client) {
    this.client.login(config.TOKEN);

    this.client.on("ready", () => console.log(`${this.client.user!.username} is ready!`));
    this.client.on("warn", (info: string) => console.log(info));
    this.client.on("error", console.error);

    this.client.on("messageCreate", (message: Message<boolean>) => {
      if (message.content.startsWith(`${this.prefix}`)) {
        const [command] = message.content.split(" ", 2);
        executeCommand(command)(message);
      }
    });
  }
}

export const sendMessages = (message: Message) => {
  return (responses: string[]) => {
    for (const response of responses) {
      message.channel.send(response);
    }
  };
};

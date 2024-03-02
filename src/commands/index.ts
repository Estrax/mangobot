import { Message } from "discord.js";
import uptime from "./uptime";
import { config } from "../utils/config";

const executeCommand = (command: string | undefined) => {
  return (message: Message) => {
    switch (command) {
      case `${config.PREFIX}uptime`:
        return uptime(message);
      default:
        return;
    }
  };
};

export default executeCommand;

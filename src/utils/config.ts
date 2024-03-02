import "dotenv/config";

export interface Config {
  PREFIX: string;
  TOKEN: string;
}

const config: Config = {
  ...process.env,
  TOKEN: process.env["TOKEN"] ?? "",
  PREFIX: process.env["PREFIX"] ?? ""
};

declare global {
  namespace NodeJS {
    interface ProcessEnv extends Config {}
  }
}

export { config };

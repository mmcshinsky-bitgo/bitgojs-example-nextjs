import type { EnvironmentName } from "bitgo";
import { BitGo } from "bitgo";

export const bitgo = new BitGo({
  accessToken: process.env.ACCESS_TOKEN,
  env: (process.env.NETWORK || "test") as EnvironmentName,
});

import { bitgo } from "~/services/bitgo";

export default async function handler(req, res) {
  try {
    const me = await bitgo.me();
    res.status(200).json(me);
  } catch (err) {
    res.status(400).json(err);
  }
}

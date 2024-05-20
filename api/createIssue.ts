import { VercelRequest, VercelResponse } from "@vercel/node";
import axios from "axios";
import { config } from "dotenv";

config();

export default async (req: VercelRequest, res: VercelResponse) => {
  const { title, body } = req.body;

  try {
    const response = await axios.post(
      `https://api.github.com/repos/selsa-inube/design-system-web/issues`,
      { title, body },
      {
        headers: {
          Authorization: `token ${process.env.GITHUB_TOKEN}`,
        },
      },
    );

    res.status(201).send(response.data);
  } catch (error: any) {
    res.status(500).send({ error: error.message });
  }
};

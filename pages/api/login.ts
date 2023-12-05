import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  token: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === "POST") {
    // Added a timeout to simulate loading
    setTimeout(() => {
      res.status(200).json({ token: "Fake token" });
    }, 1000);
  }
}

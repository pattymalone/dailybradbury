import { NextApiRequest, NextApiResponse } from 'next';
import { getDailyContent } from '../../lib/getDailyContent';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const data = await getDailyContent();
  res.status(200).json(data);
}

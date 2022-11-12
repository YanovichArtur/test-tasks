// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import metatagsData from '../../mockedData/metatagsData';

export type MetatagsData = {
  'URL En': string;
  Title: string;
  'Meta Description': string;
  'Meta Tags': string;
  'Meta Tags - FB': string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<MetatagsData | null>
) {
  const metaInfo = metatagsData.find((metaItem) => {
    return metaItem['URL En'] === req.query.url;
  });
  res.status(200).json(metaInfo || null);
}

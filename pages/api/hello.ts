// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { mock, Random } from 'mockjs';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string,
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(
    mock({
      'list|1-10': [
        {
          name: Random.cname(),
          birthday: Random.date('yyyy-mm-dd'),
          address: Random.county(),
        },
      ],
    })
  );
}

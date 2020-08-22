import { NowRequest, NowResponse } from '@vercel/node';

export default async (req: NowRequest, res: NowResponse) => {
  res.send('https://github.com/soroushchehresa/github-readme-linkedin');
}

import { NowRequest, NowResponse } from '@vercel/node';

export default async (req: NowRequest, res: NowResponse) => {
  res.send('<h1><a href="https://github.com/soroushchehresa/github-readme-linkedin">github-readme-linkedin</a></h1>');
}

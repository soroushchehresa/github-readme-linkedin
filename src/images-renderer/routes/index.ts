import { NowRequest, NowResponse } from '@vercel/node';

export default async (req: NowRequest, res: NowResponse) => {
  res.send('<h3>Go to <a href="https://github.com/soroushchehresa/github-readme-linkedin">github-readme-linkedin</a> for more info!</h3>');
}

import { Request, Response } from 'express';
import scraper from './scraper';
import dotenv from 'dotenv';

export default async (req: Request, res: Response) => {
  dotenv.config();

  if (!req.query.username) {
    res.json({ error: 'A LinkedIn username is required.' });
  } else {
    try {
      const result = await scraper(`https://www.linkedin.com/in/${req.query.username}`);
      if (!result) {
        res.json({ error: 'The people/company has not been found.', result: null });
      } else {
        res.json({ error: null, result });
      }
    } catch (e) {
      res.json({ error: e.message, result: null });
    }
  }
}

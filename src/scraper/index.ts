import { Request, Response } from 'express';
import scraper from './scraper';
import dotenv form 'dotenv';

dotenv.config();

export default async (req: Request, res: Response) => {
    if (!req.query.username) {
      return res.json({ error: 'A Linkedin username is required.' });
    }
    try {
      const result = await scraper.getCompanyOrPeopleDetails(`https://www.linkedin.com/in/${req.query.username}`);
      if (!result) {
        res.json({ error: 'The people/company has not been found.', result: null });
      } else {
        res.json({ error: null, result });
      }
    } catch (e) {
      res.json({ error: e.message, result: null });
    }
  });
  return app;
}

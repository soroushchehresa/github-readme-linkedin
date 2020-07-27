import express from 'express';
import experience from './routes/experience';
import education from './routes/education';
import skills from './routes/skills';
import languages from './routes/languages';
import user from './routes/user';
import dotenv from 'dotenv';

const app = express();
dotenv.config();
app.get('/experience', experience);
app.get('/education', education);
app.get('/skills', skills);
app.get('/languages', languages);
app.get('/user', user);

const port = process.env.PORT || '8000';
app.listen(port, err => {
  if (err) return console.error(err);
  return console.log(`Server is listening on ${port}`);
});

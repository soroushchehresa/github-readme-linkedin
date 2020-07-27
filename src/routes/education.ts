import { Request, Response } from 'express';
import _ from 'lodash';
import API from '../helpers/api';
import EducationRenderer from '../renderers/education';

export default async (req: Request, res: Response) => {
  res.setHeader('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  res.setHeader('Expires', '-1');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Content-Type', 'image/svg+xml');
  if (_.get(req, ['query', 'username'])) {
    const limit = _.get(req, ['query', 'limit'], null);
    let profileData = null;
    try {
      profileData = await API.getProfileData((_.get(req, ['query', 'username']) as string));
    } catch (e) {
      profileData = null;
    }
    if (profileData) {
      console.log(profileData);
      const education = new EducationRenderer(_.get(profileData, ['education']), (limit as number));
      const image = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" width="100%" height="100%">
        <style>
          * {
            font-family: 'Segoe UI', Ubuntu, Sans-Serif;
          }
        </style>
        ${education.list}
      </svg>`;
      res.send(image);
    } else {
      res.send(`
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="100%" height="100%">
          <text x="0" y="15" fill="red">Error!</text>
        </svg>
      `);
    }
  } else {
    res.send(`
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="100%" height="100%">
        <text x="0" y="15" fill="red">Username is required!</text>
      </svg>
    `);
  }
};

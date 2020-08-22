import request from 'request';
import _ from 'lodash';

class API {
  private protocol: string = 'https' || process.env.API_PROTOCOL;
  private baseURL: string = 'github-readme-linkedin.vercel.app' || process.env.API_BASE_URL;
  private root: string = 'data' || process.env.API_ROOT;

  constructor() {
  }

  getProfileData(username: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const URL = `${this.protocol}://${this.baseURL}/${this.root}?username=${username}`;
      request.get(
        URL,
        {
          headers: this.getHeaders(),
        },
        (error, response, body) => {
          if (body) {
            const data = JSON.parse(body);
            if (_.get(data, 'result')) {
              resolve(_.get(data, 'result'));
            } else {
              reject();
            }
          } else {
            reject();
          }
        },
      );
    });
  }

  private getHeaders() {
    return {};
  }
}

export default new API();

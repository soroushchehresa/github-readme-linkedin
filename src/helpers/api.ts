import request from 'request';
import _ from 'lodash';

class API {
  private protocol: string = 'https' || process.env.API_PROTOCOL;
  private baseURL: string = 'linkedin-scraper-github.herokuapp.com' || process.env.API_BASE_URL;
  private path: string = 'api/en/v1' || process.env.API_PATH;

  constructor() {
  }

  getProfileData(username: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const URL = `${this.protocol}://${this.baseURL}/${this.path}/profile/${username}`;
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

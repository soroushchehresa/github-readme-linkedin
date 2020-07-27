import _ from 'lodash';
import parseString from '../helpers/parseString';

interface User {
  firstName: string,
  lastName: string,
  headline: string,
  location: string,
}

export default class UserInfo {
  public info = '';

  constructor(user: User[]) {
    this.info = this.renderList(user);
  }

  renderList(user: User[]): string {
    return `
      <text x="10" y="0">
        <tspan x="0" dy="25" font-size="32" font-weight="bold" fill="#000" fill-opacity=".9">${parseString(`${_.get(user, 'firstName')} ${_.get(user, 'lastName')}`)}</tspan>
        <tspan x="0" dy="30" font-size="18" font-weight="bold" fill="#000" fill-opacity=".6">${parseString(_.get(user, 'headline'))}</tspan>
        <tspan x="0" dy="25" font-size="16" fill="#000" fill-opacity=".6">${parseString(_.get(user, 'location'))}</tspan>
      </text>
    `;
  }
}

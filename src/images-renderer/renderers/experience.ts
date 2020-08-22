import _ from 'lodash';
import parseString from '../helpers/parseString';

interface ExperienceItem {
  title: string,
  company: string,
  location: string,
  dateRange: {
    start: {
      year: string,
      month: string,
    },
    end: {
      year: string,
      month: string,
    },
  },
}

type LimitItem = string | number | null;

export default class Experience {
  public list = '';

  constructor(experience: ExperienceItem[], limit: LimitItem) {
    this.list = this.renderList(experience, limit);
  }

  renderList(experience: ExperienceItem[], limit: LimitItem): string {
    let list = `
      <text x="0" y="0">
        <tspan x="0" dy="20" font-size="26" font-weight="bold">Work Experience</tspan>
      </text>
    `;
    const sortedList = _.reverse(_.sortBy(experience, o => _.get(o, ['dateRange', 'end', 'year'])));
    sortedList.forEach((position: ExperienceItem, index: number) => {
      if (!limit || (limit && index < limit)) {
        list = `
          ${list}
          <text x="10" y="${index === 0 ? 40 : ((105 * index) + 40)}">
            <tspan x="0" dy="23" font-size="18" font-weight="bold" fill="#000" fill-opacity=".9">${parseString(_.get(position, ['title']))}</tspan>
            <tspan x="0" dy="23" font-size="16" fill="#000" fill-opacity=".9">${parseString(_.get(position, ['company']))}</tspan>
            <tspan x="0" dy="23" font-size="14" fill="#000" fill-opacity=".6">${_.get(position, ['dateRange', 'start', 'year'])}/${_.get(position, ['dateRange', 'start', 'month'])} - ${_.get(position, ['dateRange', 'end']) ? `${_.get(position, ['dateRange', 'end', 'year'])}/${_.get(position, ['dateRange', 'end', 'month'])}` : 'Present'}</tspan>
            <tspan x="0" dy="23" font-size="14" fill="#000" fill-opacity=".6">${parseString(_.get(position, ['location'], 'Unknown Location'))}</tspan>
          </text>
        `;
      }
    });
    return list.trim();
  }
}

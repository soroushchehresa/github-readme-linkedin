import _ from 'lodash';
import parseString from '../helpers/parseString';

interface EducationItem {
  degree: string,
  school: string,
  field: string,
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

export default class Education {
  public list = '';

  constructor(education: EducationItem[], limit: LimitItem) {
    this.list = this.renderList(education, limit);
  }

  renderList(education: EducationItem[], limit: LimitItem): string {
    let list = `
      <text x="0" y="0">
        <tspan x="0" dy="20" font-size="26" font-weight="bold">Education</tspan>
      </text>
    `;
    const sortedList = _.reverse(_.sortBy(education, o => _.get(o, ['dateRange', 'end', 'year'])));
    sortedList.forEach((educationItem: EducationItem, index: number) => {
      if (!limit || (limit && index < limit)) {
        list = `
          ${list}
          <text x="10" y="${index === 0 ? 40 : ((80 * index) + 40)}">
            <tspan x="0" dy="23" font-size="18" font-weight="bold" fill="#000" fill-opacity=".9">${parseString(_.get(educationItem, ['degree']) || _.get(educationItem, ['school']))}</tspan>
            <tspan x="0" dy="23" font-size="16" fill="#000" fill-opacity=".9">${parseString(`${_.get(educationItem, ['school'])}${_.get(educationItem, ['field']) ? `, ${_.get(educationItem, ['field'])}` : ''}`)}</tspan>
            <tspan x="0" dy="23" font-size="14" fill="#000" fill-opacity=".6">${_.get(educationItem, ['dateRange', 'start', 'year'])} - ${_.get(educationItem, ['dateRange', 'end']) ? `${_.get(educationItem, ['dateRange', 'end', 'year'])}` : 'Present'}</tspan>
          </text>
        `;
      }
    });
    return list.trim();
  }
}

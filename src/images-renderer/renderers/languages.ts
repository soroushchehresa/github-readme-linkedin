import _ from 'lodash';
import parseString from '../helpers/parseString';

interface LanguageItem {
  language: string,
  proficiency: string,
}

type LimitItem = string | number | null;

export default class Languages {
  public list = '';

  constructor(languages: LanguageItem[], limit: LimitItem) {
    this.list = this.renderList(languages, limit);
  }

  renderList(languages: LanguageItem[], limit: LimitItem): string {
    let list = `
      <text x="0" y="0">
        <tspan x="0" dy="20" font-size="26" font-weight="bold">Languages</tspan>
      </text>
    `;
    _.reverse(languages).forEach((languageItem: LanguageItem, index: number) => {
        if (!limit || (limit && index < limit)) {
          list = `
            ${list}
            <text x="10" y="${index === 0 ? 40 : ((30 * index) + 40)}">
              <tspan x="0" dy="23" font-size="18" font-weight="bold" fill="#000" fill-opacity=".9">${parseString(_.get(languageItem, 'language'))}</tspan>
            </text>
          `;
        }
      }
    );
    return list.trim();
  }
}

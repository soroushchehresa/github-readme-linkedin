import parseString from '../helpers/parseString';

type SkillItem = string;
type LimitItem = string | number | null;

export default class Skills {
  public list = '';

  constructor(skills: SkillItem[], limit: LimitItem) {
    this.list = this.renderList(skills, limit);
  }

  renderList(skills: SkillItem[], limit: LimitItem): string {
    let list = `
      <text x="0" y="0">
        <tspan x="0" dy="20" font-size="26" font-weight="bold">Skills</tspan>
      </text>
    `;
    skills.forEach((skillItem: SkillItem, index: number) => {
        if (!limit || (limit && index < limit)) {
          list = `
            ${list}
            <text x="10" y="${index === 0 ? 40 : ((30 * index) + 40)}">
              <tspan x="0" dy="23" font-size="18" font-weight="bold" fill="#000" fill-opacity=".9">${parseString(skillItem)}</tspan>
            </text>
          `;
        }
      }
    );
    return list.trim();
  }
}

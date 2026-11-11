export type SkillGroupId = 'backend' | 'frontend' | 'databases' | 'tools';

export interface SkillGroup {
  readonly id: SkillGroupId;
  readonly items: readonly string[];
}

export const SKILL_GROUPS: readonly SkillGroup[] = [
  {
    id: 'backend',
    items: ['C#', '.NET', 'ASP.NET Core', 'Entity Framework Core', 'SQL Server', 'REST APIs'],
  },
  {
    id: 'frontend',
    items: ['TypeScript', 'Angular', 'RxJS', 'Tailwind CSS', 'HTML', 'CSS'],
  },
  { id: 'databases', items: ['SQL Server', 'PostgreSQL', 'MySQL'] },
  {
    id: 'tools',
    items: ['Git', 'GitHub', 'Docker', 'Postman', 'VS Code','Rider'],
  },
];

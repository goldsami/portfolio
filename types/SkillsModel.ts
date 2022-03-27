type SkillType = { technologyName: string, rate: number}

export interface SkillsModel {
  languages: SkillType[]
  frameworks: SkillType[]
}
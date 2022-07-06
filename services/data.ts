import data from '../public/data.json'
import { ContactsModel, ExperiencePositionModel, ProjectModel, UserModel } from "../types";
import { SkillsModel } from "../types/SkillsModel";

export class DataService {
  static projects(): ProjectModel[] {
    return data?.projects || []
  }

  static project(id: string): ProjectModel | null {
    return data?.projects.find(x => x.id === id) || null
  }

  static me(): UserModel {
    return {
      name: data?.name,
      about: data?.about,
      position: data?.position,
      photo: data?.photo,
      cv: data?.cv
    }
  }

  static contacts(): ContactsModel {
    return data?.contacts
  }

  static experience(): ExperiencePositionModel[] {
    // @ts-ignore
    return data?.experience.sort((a, b) => new Date(b.startDate) - new Date(a.startDate))
  }

  static skills(): SkillsModel {
    return {
      languages: data?.skills.languages.sort((a, b) => b.rate - a.rate),
      frameworks: data?.skills.frameworks.sort((a, b) => b.rate - a.rate),
    }
  }
}
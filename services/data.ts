import data from '../public/data.json'
import {ContactsModel, ExperiencePositionModel, ProjectModel, UserModel} from "../types";

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
    }
  }

  static contacts(): ContactsModel {
    return data?.contacts
  }

  static experience(): ExperiencePositionModel[] {
    return data?.experience
  }
}
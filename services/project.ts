import data from '../public/data.json'
import {ProjectModel} from "../types";

export class ProjectService {
  static projects(): ProjectModel[] {
    return data?.projects || []
  }

  static project(id: string): ProjectModel | null {
    return data?.projects.find(x => x.id === id) || null
  }
}
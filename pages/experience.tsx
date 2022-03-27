import Layout from "../components/layout";
import {DataService} from "../services";
import {ExperiencePositionModel} from "../types";
import {SkillsModel} from "../types/SkillsModel";

interface ExperienceProps {
  experience: ExperiencePositionModel[]
  skills: SkillsModel
}

export default function Experience({experience, skills}: ExperienceProps) {
  return (
    <Layout>
      skills & experience page: <br/>
      <div className="columns">
        <div className="column is-half ">
          <div className="my-0 columns is-multiline is-variable is-8">
            {experience?.map(x => (
              <div className="column is-full mb-4" key={x.companyName}>
                <div className="box">{x.companyName}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="column is-half">
          {skills.languages.sort((a,b) => b.rate - a.rate).map(x => (
            <div className="is-family-code" key={x.technologyName}>
              {x.technologyName}
              <progress className="progress is-small" value={x.rate} max="5"></progress>
            </div>
          ))}
          <br/>
          {skills.frameworks.sort((a,b) => b.rate - a.rate).map(x => (
            <div className="is-family-code" key={x.technologyName}>
              {x.technologyName}
              <progress className="progress is-small" value={x.rate} max="5"></progress>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const experience = DataService.experience()
  const skills = DataService.skills()

  return {
    props: {
      experience,
      skills
    }
  }
}
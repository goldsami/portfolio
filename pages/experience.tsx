import Layout from "../components/layout";
import {DataService} from "../services";
import {ExperiencePositionModel} from "../types";
import {SkillsModel} from "../types/SkillsModel";
import dateFormat from "dateformat";

interface ExperienceProps {
  experience: ExperiencePositionModel[]
  skills: SkillsModel
}

export default function Experience({experience, skills}: ExperienceProps) {
  function format(date: string) {
    if (date === 'Present') return date

    return dateFormat(new Date(date), "yyyy.mm")
  }

  return (
    <Layout>
      <div className="columns m-0 is-variable is-6">
        <div className="column is-half ">
          <div className="my-0 columns is-multiline is-variable is-8">
            {experience?.map(x => (
              <div className="column is-full mb-4 experience-block" key={x.companyName}>
                <div className="box">
                  <div className="block">
                    <div className="is-flex is-justify-content-space-between">
                      <div className="title is-5 mb-2">{x.position}</div>
                      <div className="has-text-centered">{`${format(x.startDate)}-${format(x.endDate)}`}</div>
                    </div>
                    <div className="subtitle is-6 has-text-grey">{x.companyName}</div>
                  </div>
                  <div className="block">
                    <span className="has-text-weight-semibold">Tech stack: &nbsp;</span>
                    <span className="is-family-code">{x.techStack.join(', ')}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="column is-half">
          {skills.languages.map(x => (
            <div className="is-family-code mt-2" key={x.technologyName}>
              {x.technologyName}
              <progress className="progress is-small is-primary" value={x.rate} max="5"></progress>
            </div>
          ))}
          <br/>
          {skills.frameworks.map(x => (
            <div className="is-family-code mt-2" key={x.technologyName}>
              {x.technologyName}
              <progress className="progress is-small is-info" value={x.rate} max="5"></progress>
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
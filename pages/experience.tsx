import Layout from "../components/layout";
import {DataService} from "../services";
import {ExperiencePositionModel} from "../types";

interface ExperienceProps {
  experience: ExperiencePositionModel[]
}

export default function Experience({experience}: ExperienceProps) {
  return (
    <Layout>
      experience page: <br/>
      {experience?.map(x => (
        <div key={x.companyName}>
          <div>{x.companyName}</div><br/>
        </div>
      ))}
    </Layout>
  )
}

export async function getStaticProps() {
  const experience = DataService.experience()

  return {
    props: {
      experience
    }
  }
}
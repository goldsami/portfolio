import Layout from "../components/layout"
import {DataService, getTechImage} from "../services";
import {ContactsModel, UserModel} from "../types";
import Image from 'next/image';
import {SkillsModel, SkillType} from "../types/SkillsModel";
import {useMemo} from "react";
import MyLink from "../components/link";
import {capitalizeFirstLetter} from "../services/utils";

interface HomeProps {
  aboutMyself: UserModel,
  skills: SkillsModel,
  contacts: ContactsModel,
}

export default function Home({
                               aboutMyself: {about, name, photo, cv},
                               skills: {languages, frameworks},
                               contacts,
                             }: HomeProps) {

  const techIcons = useMemo(() => {
    const process = (items: SkillType[]) => {
      return items.filter(x => x.rate > 3)?.map(x => getTechImage(x.technologyName)).filter(x => !!x)
    }
    return [
      ...process(languages),
      ...process(frameworks)
    ]
  }, [languages, frameworks])

  return (
    <Layout>
      <div className="columns is-variable is-6">
        <div className="column is-one-third">
          <h3 className="title is-3 has-text-centered">{name}</h3>
          <div className="block image has-text-centered">
            <Image className="is-rounded" src={photo} height={150} width={150}>
            </Image>
          </div>
          <div className="box">
            <div className="title is-5">Links</div>
            {Object.entries(contacts).map(([k, v]) => (
              <div key={k}>
                <MyLink title={capitalizeFirstLetter(k)} url={v} />
              </div>
            ))}
          </div>
        </div>
        <div className="column is-two-thirds">
          {/*todo: remove margin on mobile*/}
          <article style={{marginTop: '60px'}} className="has-text-justified block">
            {about}
          </article>
          <div className="block">
            <div className="title is-5">Job Opportunities</div>
            <article className="block">
              Now i'm looking for job on front-end developer position.<br/>
              Here's my <a href={cv} download>CV</a>.
            </article>
          </div>
          <div className="block">
            <div className="title is-5">Main Skills</div>
            <div className="columns is-flex is-flex-wrap-wrap">
              {techIcons?.map(x => (
                !!x && <div className="m-3">
                  <Image src={x} height={60} width={60}></Image>
                </div>
              ))}
            </div>
            <div className="mb-2 is-family-code has-text-right"><a>More on skills</a></div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const aboutMyself = DataService.me()
  const skills = DataService.skills()
  const contacts = DataService.contacts()

  return {
    props: {
      aboutMyself,
      skills,
      contacts,
    }
  }
}

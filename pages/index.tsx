import Layout from "../components/layout"
import { DataService, getTechImage } from "../services";
import { ContactsModel, UserModel } from "../types";
import Image from 'next/image';
import { SkillsModel, SkillType } from "../types/SkillsModel";
import { useMemo } from "react";
import MyLink from "../components/link";
import { capitalizeFirstLetter } from "../services/utils";

interface HomeProps {
  aboutMyself: UserModel,
  skills: SkillsModel,
  contacts: ContactsModel,
}

export default function Home({
  aboutMyself: { about, name, photo, cv },
  skills: { languages, frameworks },
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
          <div className="block image has-text-centered">
            <Image className="is-rounded" src={photo} height={250} width={250}>
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
          <h3 className="title is-3 is-hidden-mobile">{name}</h3>
          {/*todo: remove margin on mobile*/}
          <article className="has-text-justified block">
            {about}
          </article>
          <div className="block">
            <div className="title is-5">Job Opportunities</div>
            <article className="block">
              {/* # TODO: move to data.json */}
              Now I'm looking for job on front-end developer position.<br />
              Here's my <a href={cv} download>CV</a>.
            </article>
          </div>
          <div className="block">
            <div className="title is-5">Main Skills</div>
            <div className="columns is-flex is-flex-wrap-wrap">
              {techIcons?.map((x, index) => (
                !!x && <div className="m-4" key={index}>
                  <Image src={x} height={70} width={70}></Image>
                </div>
              ))}
            </div>
            <div className="has-text-right">
              <MyLink title="More on skills" url="/experience" />
            </div>
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

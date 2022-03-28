import Layout from "../components/layout"
import {DataService} from "../services";
import {UserModel} from "../types";
import Image from 'next/image';

interface HomeProps {
  aboutMyself: UserModel
}

export default function Home({aboutMyself: {about, name}}: HomeProps) {
  return (
    <Layout>
      <div className="block">
        <div className="columns is-variable is-6">
          <div className="column is-one-third">
            <h3 className="title is-3 has-text-centered">{name}</h3>
            <div className="block image has-text-centered">
              <Image className="is-rounded" src={'/images/me.webp'} height={150} width={150}>
              </Image>
            </div>
            <div className="box">
              <div className="title is-5">Links</div>
                <div className="mb-2 is-family-code"><a>LinkedIn</a></div>
                <div className="mb-2 is-family-code"><a>Telegram</a></div>
                <div className="mb-2 is-family-code"><a>Email</a></div>
                <div className="mb-2 is-family-code"><a>Djinni</a></div>
                <div className="mb-2 is-family-code"><a>Github</a></div>
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
                Here's my <a href="/resume.txt" download>CV</a>.
              </article>
            </div>
            <div className="block">
              <div className="title is-5">Skills</div>
              <div>
                <Image alt="JS logo" src={'/images/javascript.png'} height={60} width={60}></Image>
              </div>
              <div className="mb-2 is-family-code has-text-right"><a>More on skills</a></div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const aboutMyself = DataService.me()

  return {
    props: {
      aboutMyself
    }
  }
}

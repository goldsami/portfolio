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
        <h3 className="title is-3">{name}</h3>
        <div className="columns">
          <div className="column is-one-third">
            <div className="box">
              <div className="title is-5">Job Opportunities</div>
                <span>
                  Now i'm looking for job on front-end developer position.
                    Here's my <a href="/public/resume.txt" download>CV</a>.
                </span>
            </div>
            <div className="box">
              <div className="title is-5">Links</div>
                <div className="mb-2 is-family-code"><a>LinkedIn</a></div>
                <div className="mb-2 is-family-code"><a>Telegram</a></div>
            </div>
          </div>
          <div className="column is-two-thirds">
            <article className="has-text-justified block">{about}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi blandit finibus odio mattis luctus. Vivamus et pharetra nisi. Curabitur sit amet nibh dolor. Vivamus cursus mi non diam commodo semper. In imperdiet at purus at ultrices. Mauris id ornare mi. Maecenas sit amet dictum lectus. Ut volutpat turpis a magna tincidunt, eget molestie dolor porta. Donec sit amet mauris maximus, porttitor ex ac, pellentesque massa. Etiam sit amet lacus eu quam pretium laoreet laoreet nec turpis. Sed vitae viverra nisi.
            </article>
            <div>
              <div className="title is-5">Skills</div>
              <div>
                {/*<Image alt="React logo" src="/public/images/react.png" height={60} width={60}></Image>*/}
                {/*<img src="/public/images/react.png" />*/}
                {/*<img src="/public/favicon.ico" />*/}
              </div>
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

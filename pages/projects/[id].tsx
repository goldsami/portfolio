import Layout from "../../components/layout";
import { ProjectModel } from "../../types";
import { DataService } from "../../services";
import { Carousel } from "react-responsive-carousel";
import MyLink from "../../components/link";

export default function Project({ id, name, pictures, github, url, techStack, description }: ProjectModel) {
  return (
    <Layout>
      <div className="columns m-0">
        <div className="column is-one-third">
          <h3 className="title is-3">{name}</h3>
          <div className="is-6 subtitle">{description}</div>
          <div className="block">
            <span className="has-text-weight-semibold">Tech stack: &nbsp;</span>
            <span className="is-family-code">{techStack?.join(', ')}</span>
          </div>
          <div className="box">
            {github && <MyLink url={github} title={'Github'} />}
            {url && <MyLink url={url} title={'Website'} />}
          </div>
        </div>
        <div className="column is-two-thirds">
          <Carousel>
            {pictures?.map((p, index) => (
              <div key={index}>
                <img src={p} />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </Layout>
  )
}

interface StaticPath {
  params: { id: string }
}

export async function getStaticPaths() {
  const projects = DataService.projects()

  const paths = projects?.map(({ id }) => ({ params: { id } }))

  return { paths, fallback: true }
}

export async function getStaticProps({ params: { id } }: StaticPath) {
  const project = DataService.project(id)

  return {
    props: {
      ...project
    }
  }
}

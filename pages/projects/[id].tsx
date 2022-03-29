import Layout from "../../components/layout";
import {useRouter} from "next/router";
import {ProjectModel} from "../../types";
import {DataService} from "../../services";
import Image from "next/image";
import {Carousel} from "react-responsive-carousel";

export default function Project({id, name, pictures, github, url, techStack, description}: ProjectModel) {
  return (
    <Layout>
      <div className="columns m-0">
        <div className="column is-one-third">
          <h3 className="title is-3">{name}</h3>
          <div className="is-6 subtitle">{description}</div>
          <div className="block">
            <span className="has-text-weight-semibold">Tech stack: &nbsp;</span>
            <span className="is-family-code">{techStack.join(', ')}</span>
          </div>
          <div className="box">
            <div className="mb-2 is-family-code">
              <a>Github</a>
            </div>
            <div className="mb-2 is-family-code"><a>Website</a></div>
          </div>
        </div>
        <div className="column is-two-thirds">
          <Carousel>
            {pictures.map(p => (
              <div>
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

  const paths = projects.map(({id}) => ({params: {id}}))

  return {paths, fallback: true}
}

export async function getStaticProps({params: {id}}: StaticPath) {
  const project = DataService.project(id)

  return {
    props: {
      ...project
    }
  }
}

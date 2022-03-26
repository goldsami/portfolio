import Layout from "../../components/layout";
import {useRouter} from "next/router";
import {ProjectModel} from "../../types";
import {DataService} from "../../services";

export default function Project({id, name}: ProjectModel) {
  return (
    <Layout>
      project: {name}
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

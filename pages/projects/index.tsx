import Layout from "../../components/layout"
import {ProjectModel} from "../../types"
import Link from 'next/link'
import {ProjectService} from "../../services";

interface ProjectsProps {
  projects: ProjectModel[]
}

export default function Projects({projects}: ProjectsProps) {
  return (
    <Layout>
      <ul>
        {projects.map(p => (
          <li key={p.id}><Link href={`/projects/${p.id}`}>
            <a>{p.name}</a>
          </Link></li>
        ))}
      </ul>
    </Layout>
  )
}

export async function getStaticProps() {
  const projects = ProjectService.projects()

  return {
    props: {
      projects
    }
  }
}
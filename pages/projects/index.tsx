import Layout from "../../components/layout"
import { ProjectModel } from "../../types"
import Link from 'next/link'
import { DataService } from "../../services";
import Image from 'next/image'

interface ProjectsProps {
  projects: ProjectModel[]
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <Layout>
      <div className="columns is-multiline">
        {projects.map(p => (
          <div key={p.id} className="project-container column is-one-third-desktop is-half-tablet is-clickable">
            <Link href={`/projects/${p.id}`}>
              <div className="card">
                <div className="card-image">
                  <figure className="image is-5by3">
                    {!!p.pictures.length && <Image src={p.pictures[0]}
                      layout='fill'
                      objectFit='cover' />}
                  </figure>
                  <div className="title is-4 px-3 py-1 mb-3 card-title has-text-light">
                    {p.name}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const projects = DataService.projects()

  return {
    props: {
      projects
    }
  }
}
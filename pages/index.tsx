import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Layout from "../components/layout"
import {DataService} from "../services";
import {UserModel} from "../types";

interface HomeProps {
  aboutMyself: UserModel
}

export default function Home({aboutMyself: {about}}: HomeProps) {
  const divStyle = {
      color: 'blue',
  };

  return (
    <Layout>
      <h1>Main page </h1><br/>
      <a style={divStyle} href={'https://github.com/goldsami/'}>My github</a>
      <br/>
      {about}<br/>
      <span className="is-family-sans-serif">Hello</span><br/>
      <span className="is-family-monospace">Hello</span><br/>
      <span className="is-family-primary">Hello</span><br/>
      <span className="is-family-secondary">Hello</span><br/>
      <span className="is-family-code">Hello</span><br/>
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

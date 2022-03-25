import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Layout from "../components/Layout";

const Home: NextPage = () => {
  const divStyle = {
      color: 'blue',
  };

  return (
    <Layout>
      <h1>Max Zolotarenko </h1><br/>
      <a style={divStyle} href={'https://github.com/goldsami/'}>My github</a>
			<button className="button">Bulma button</button>
    </Layout>
  )
}

export default Home

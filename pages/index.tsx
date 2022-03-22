import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const divStyle = {
      color: 'blue',
  };

  return (
    <>
      <h1>Max Zolotarenko </h1><br/>
      <a style={divStyle} href={'https://github.com/goldsami/'}>My github</a>
			<button class="button">Bulma button</button>
    </>
  )
}

export default Home

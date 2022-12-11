import Head from 'next/head'
import Entrance from '../components/entrance';
import Skills from '../components/skills';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Yefee's portfolio</title>
        <meta property="og:title" content="Yefee's portfolio" key="title" />
        <meta property="og:description" content="Hey, I'm Yefee(Yavuz Efe). A ui developer." key="description" />
        <meta property="og:keywords" content="yefee8, yefee, yavuz efe fındıklı, yefee portfolio, yavuz efe findikli" key="keywords" />
        <meta property="title" content="Yefee's portfolio" key="title" />
        <meta property="description" content="Hey, I'm Yefee(Yavuz Efe). A ui developer." key="description" />
        <meta property="keywords" content="yefee8, yefee, yavuz efe fındıklı, yefee portfolio, yavuz efe findikli" key="keywords" />
      </Head>

      <Entrance />

      <Skills />
    </div>
  )
}
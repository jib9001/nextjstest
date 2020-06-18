import Head from 'next/head'
import NavBar from './components/navbar'
import Header from './components/header'
import Body from './components/body'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main>
        <NavBar/>
        <Header/>
        <Body/>
      </main>
    
      <style jsx global>{`
      body, html {
        background-image: url("https://upload.wikimedia.org/wikipedia/commons/7/70/Downtown_Cincinnati_viewed_from_Mt._Adams.jpg");

        /* Full height */
        height: 100%;
    
        /* Create the parallax scrolling effect */
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;

        margin: 0;
      }

      .parallax{
        margin-bottom: 100vh;
      }

      .main-bg{
        background-color: #4f4f4f;
      }

      .content{
        background-color: #cccccc;
      }
      `}</style>
    </div>
  )
}

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
        margin: 0;
        font-family: 'Roboto', sans-serif;
      }

      .full-width{
        width: 100%;
      }

      .parallax-full{
        /* Full height */
        height: 100vh;
    
        /* Create the parallax scrolling effect */
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      }

      .parallax-half{
        /* Half height */
        height: 50vh;
    
        /* Create the parallax scrolling effect */
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      }

      .bottom-center{
        margin-left: 50%;
        margin-right: 50%;
        margin-top: -20vh;
        color: #ffffff;
        background-color: #4f4f4f;
      }

      .white{
        color: #ffffff;
      }

      .bg1{
        background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Downtown_Cincinnati_viewed_from_Mt._Adams.jpg/1920px-Downtown_Cincinnati_viewed_from_Mt._Adams.jpg");
      }

      .bg2{
        background-image: url("https://upload.wikimedia.org/wikipedia/commons/4/4e/Washington_Park_Denver.JPG");
      }

      .main-bg{
        background-color: #4f4f4f;
        color: #cccccc
      }
      `}</style>
    </div>
  )
}

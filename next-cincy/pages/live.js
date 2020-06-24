import Head from 'next/head';
import NavBar from './components/navbar';
import Header from './components/headerlive';
import Body from './components/bodylive';

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
        font-size: 20px
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

      .bg1{
        background-image: url("../static/PurpleCincinnati.png");
      }

      .bg2{
        background-image: url("../static/TealPark.png");
      }

      .bg3{
        background-image: url("../static/BlueApartment.png");
      }

      .bg4{
        background-image: url("../static/TealHousing.png");
      }

      .main-bg{
        background-color: #f7f7f7;
        color: #008071;
        text-align: center;
      }
      `}</style>
    </div>
  )
}

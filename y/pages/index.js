import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Menu from '../comps/Menu'
import Logo from '../comps/Logo'
import Contact from '../comps/Contact'
import PicsComp from '../comps/PicsComp'
import QRcode from '../comps/QRcode'
import { useEffect, useState } from 'react';
import Link from 'next/link';
import ImgHandleInView from '../comps/Img_handle_inview'



export default function Home() {
     const [opacityAll, setOpacityAll] = useState(0);

     const [topContact, setTopContact] = useState(-8);
     const [topPics, setTopPics] = useState(14);
     const [topMenu, setTopMenu] = useState(36);

     useEffect(() => {
          setInterval(() => {
               setOpacityAll(1);
          }, 5);
     }, []);

     useEffect(() => {
          setInterval(() => {
               setTopContact(0);
               setTopPics(0);
               setTopMenu(0);
          }, 200);
     }, []);

     const tempContact = (
          <div
               style={{
                    position: 'relative',
                    top: topContact,
                    transition: 'top 0.6s',
                    // transitionDelay: '120ms'
               }}
          >
               <Contact />
          </div>
     );

     const tempPics = (
          <div
               style={{
                    textAlign: 'center',
                    position: 'relative',
                    top: topPics,
                    transition: 'top .6s'
               }}>
               <PicsComp />

          </div>
     );

     const tempMenu = (
          <div
               style={{
                    textAlign: 'center',
                    position: 'relative',
                    top: topMenu,
                    transition: 'top .6s'
               }}
          >
               {/* <Menu /> */}
               {/* <QRcode /> */}
          </div>
     );

     return (
        
         

          <div className={styles.container}>
               <Head>
                    <title>MINH 🍝 Pan Asian Restaurant</title>
                    <meta name="description" content="Generated by create next app" />
                    <link rel="icon" href="/favicon.ico" />
               </Head>

               <main className={styles.main}
                    style={{
                         opacity: opacityAll,
                         transition: 'opacity 1s',
                         // background: 'beige'
                    }}
               >
                    <Logo />
                    {tempContact}

                    {tempPics}

                    <div style={{ marginTop: 70, color: 'red' }} />

                    <a href={'https://goo.gl/maps/d8ogGgMkRYUo55v49'}>
                         <h4 style={{color: '#939393', fontSize: '0.8rem' }}>Restaurant Location</h4>
                         <img
                              src={'./mapBL.svg'}
                              alt={'map location'}
                              width={230}
                              style={{borderRadius: 11, border: '0.3px solid #E0E0E0' }}
                         />

                    </a>

                    <div style={{ marginBottom: 5 }} />
               </main>

          </div>
     
     )
}

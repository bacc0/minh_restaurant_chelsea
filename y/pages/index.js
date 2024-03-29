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
import DeliveryLinks from '../comps/DeliveryLinks'
import IMG_pan_asian from '../comps/IMG_pan_asian'



export default function Home() {
     const [opacityAll, setOpacityAll] = useState(0);
     const [topContact, setTopContact] = useState(-8);
     // const [topPics, setTopPics] = useState(14);



     useEffect(() => {
          setInterval(() => {
               setOpacityAll(1);
          }, 5);

          setInterval(() => {
               setTopContact(0);
               // setTopPics(0);
          }, 200);
     }, []);

     const style_animation_main = {
          position: 'relative',
          opacity: opacityAll,
          top: topContact,
          transition: 'top .5s, opacity 2.4s',
          transitionDelay: '0.7s'
     }

     const tempContact = (
          <>
               <div style={style_animation_main} >
                    <Contact />
               </div>
               {/* <div className={styles.contact_desktop}>
                    <Contact />
               </div> */}
          </>
     );

     const foodPics = (
          <div style={style_animation_main}>
               <PicsComp />
          </div>
     );

     const secondText = (
          <h2 style={style_animation_main}>
               Pub and Restaurant
          </h2>
     );

     const mapImg = (
          <>
               <div style={{ marginTop: 70, color: 'red' }} />
               <a href={'https://goo.gl/maps/d8ogGgMkRYUo55v49'}>
                    <h4 style={{ color: '#000000', fontSize: '0.8rem' }}>Restaurant Location</h4>
                    <img
                         src={'./mapBL.svg'}
                         alt={'map location'}
                         width={230}
                         style={{ borderRadius: 11, border: '0.3px solid #E0E0E0' }}
                    />
               </a>
               <div style={{ marginBottom: 5 }} />
          </>
     );





     return (
          <div className={styles.container}>
               <Head>
                    <title>MINH 🍝 Pan Asian Restaurant</title>
                    <meta name="minh" content="Gpan-Asian FOoD, Pub and Restaurant" />
                    <link rel="icon" href="/favicon.ico" />

                    <meta property="og:image" content={`./logo.svg`} />


               </Head>

               <main
                    className={styles.main}
                    style={{ opacity: opacityAll, transition: 'opacity 1s' }}
               >
                    <Logo />
                    <IMG_pan_asian />
                    {secondText}
                    {tempContact}
                    {foodPics}
                    <DeliveryLinks />
                    {mapImg}
               </main>
          </div>
     )
}

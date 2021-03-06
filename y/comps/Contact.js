import styles from './Contact.module.scss';


const Contact = () => {
     
     
     return (
          <div className={styles.container} >
               <a href={'https://goo.gl/maps/d8ogGgMkRYUo55v49'}>
                    <p>533 King’s Road</p>
                    <p>Chelsea, London</p>
                    <p>SW10 0TZ</p>
               </a>

               <a href={`tel: 00442034412090`} >
                    <p className={styles.tel}>T. 0203 441 2090</p>
               </a>
          </div>
     )
};

export default Contact;
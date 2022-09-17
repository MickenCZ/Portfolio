import styles from "../styles/Certifications.module.css"
import Head from "next/head"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Certifications() {
  const fadeInRight = {
    initial:{
      x:-60,
      opacity:0
    },
    animate: {
      x:0,
      opacity:1,
      transition:{
        duration:0.6,
        ease:[0.6, -0.05, 0.01, 0.99]
      }
    }
  }

  const stagger = {
    animate: {
      transition:{
        staggerChildren: 0.15
      }
    }
  }
  return (
    <>
    <Head>
        <title>My Certifications</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <main id={styles.main}>
    <motion.section id={styles.certifications} exit={{opacity:0}}  initial={"initial"} animate={"animate"} variants={stagger}>
        <motion.div className={styles.container} variants={fadeInRight} >
          <div className={styles.imageCompartment}>
            <Image alt="HTML logo" src="/HTML.svg" width="184px" height="160px" />
          </div>
          <div className={styles.textCompartment}>
            <h1 className={styles.title} style={{color:"red"}}>Responsive Web Design</h1>
            <p className={styles.description}>
              This course was my first encounter with Web Development and one of the things that sparked my interest. I learned the basics of HTML & CSS and how to develop websites that are responsive and easy to use. Certification including projects is available <a href="https://www.freecodecamp.org/certification/michael_cirkl/responsive-web-design" target="_blank" rel="noreferrer" style={{color:"red"}}>here</a>.
            </p>
          </div>
        </motion.div>
        <motion.div className={styles.container} variants={fadeInRight} >
        <div className={styles.imageCompartment}>
            <Image alt="Javascript Logo" src="/Javascript.png" width="135px" height="150px" />
          </div>
          <div className={styles.textCompartment}>
            <h1 className={styles.title} style={{color:"yellow"}}>Javascript Algorithms</h1>
            <p className={styles.description}>This Data Structures and Algorithms course taught me modern ES6 Javascript, Programming Paradimes and RegEx, but above all, how to think, solve problems and accomplish that using readable code. It was very hard, but I loved the challenge. Certification including projects is available <a href="https://www.freecodecamp.org/certification/michael_cirkl/javascript-algorithms-and-data-structures" target="_blank" rel="noreferrer" style={{color:"yellow"}}>here</a>. </p>
          </div>
        </motion.div>
        <motion.div className={styles.container} variants={fadeInRight}  >
        <div className={styles.imageCompartment}>
            <Image alt="React logo" src="/React.png" width="184px" height="160px"/>
          </div>
          <div className={styles.textCompartment}>
            <h1 className={styles.title} style={{color:"rgb(97, 219, 251)"}}>
              React and Redux Frameworks
            </h1>
            <p className={styles.description}>In this course, I learned about React, Redux and some other Front-End libraries. While the course itself was slightly outdated, I used the 5 fantastic projects to make React Apps with hooks and relatively complex logic. It was quite a nice experience. Certification including projects is available <a href="https://www.freecodecamp.org/certification/michael_cirkl/front-end-development-libraries" target="_blank" rel="noreferrer" style={{color:"rgb(97, 219, 251)"}}>here</a>.</p>
          </div>
        </motion.div>
      </motion.section>
      <section id={styles.messageContainer}>
        <p id={styles.message}>
          <a href="https://www.linkedin.com/in/michael-cirkl-1b7832250/">See more on LinkedIn</a>
        </p>
      </section>
    </main>
    </>
  )
}

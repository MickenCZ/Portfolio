import Image from "next/image"
import styles from "../styles/Project.module.css"

export default function Project({ title, stack, imgsrc, imgalt, url }) {
  return (
    <section className={styles.projectTile}>
      <a href={url} target="_blank" rel="noreferrer" className={styles.projectCard}>
      <p className={styles.projectName}>
        <span className={styles.code}> &lt; </span>
        {title}
        <span className={styles.code}> /&gt; </span>
      </p>
        <Image src={imgsrc} alt={imgalt} rel="noreferrer" width="300px" height="350px"></Image>
        <p className={styles.technologies}>{stack}</p>
      </a>
    </section>
  )
}

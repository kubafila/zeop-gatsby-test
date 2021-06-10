import React from 'react'
import SocialMedia from '../Layout/SocialMedia'
import * as styles from './Contact.module.scss'

const Contact = ({ homepageContact: data }) => {
  return (
    <section>
      <div>
        <h2>Kontakt</h2>
        <div dangerouslySetInnerHTML={{ __html: data.intro}}></div>
      </div>
      <h3 className={styles.name}>
        {data.contactNameFirstLine}<br />{data.contactNameSecondLine}
      </h3>

      <p>{data.addressFirstLine}</p>
      <p>{data.addressSecondLine}</p>
      <p>{data.addressThirdLine}</p>

    <div className={styles.linksWrapper}>
        <div>
          <p class="contact__text contact__text--bold">email:{" "}
            <a href={`mailto:${data.email}`} class="contact__link">{data.email}</a>
          </p>
          <p class="contact__text contact__text--bold">tel:{" "}
            <a href={`tel:+48${data.phone}`} class="contact__link">{data.phone}</a>
          </p>
        </div>
        <SocialMedia />
      </div>
    </section>
  )
}

export default Contact

import React from 'react'
import Layout from '../components/Layout/Layout'
import HeroImage from '../components/HeroImage'
import About from '../components/About'
import InitiativesList from '../components/Initiatives/InitiativesList'
import PartnersList from '../components/partners/PartnersList'
import Contact from '../components/Contact'
import { graphql } from "gatsby"


const index = ( { data} ) => {

  const socialMedia = data.allWpSocial
  return (
    <div>
      <Layout socialMedia={socialMedia}>
        <h1>Hello World!!!!</h1>
        <HeroImage />
        <About />
        <InitiativesList {...data.allWpInitiatives} />
        <PartnersList {...data.allWpPartnetrs}/>
        <Contact />
      </Layout>
    </div>
  )
}

export default index



export const query = graphql`
  {
    allWpSocial {
      nodes {
        homepageSocial {
          link
          name
          icon {
            sourceUrl
          }
          iconHover {
            sourceUrl
          }
        }
      }
    }
    allWpPartnetrs {
      nodes {
        id
        homepagePartners {
          name
          type
          link
          logo {
            sourceUrl
          }
        }
      }
    }
    allWpInitiatives {
      nodes {
        homepageInitiatives {
          description
          title
          image {
            mediaItemUrl
          }
        }
      }
    }
  }
`




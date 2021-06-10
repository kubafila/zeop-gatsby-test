import React from 'react'
import Layout from '../components/Layout/Layout'
import HeroImage from '../components/HeroImage'
import About from '../components/About'
import InitiativesList from '../components/Initiatives/InitiativesList'
import PartnersList from '../components/partners/PartnersList'
import Contact from '../components/Contact/Contact'
import { graphql } from "gatsby"


const index = ({ data }) => {

  const socialMedia = data.allWpSocial
  return (
    <div>
      <Layout socialMedia={socialMedia}>
        <HeroImage />
        <About />
        <InitiativesList {...data.allWpInitiatives} />
        <PartnersList {...data.allWpPartnetrs} />
        <Contact {...data.allWpGeneral.nodes[0]} />
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
            localFile {
              childImageSharp {
                fixed(width: 200) {
                  src
                }
              }
            }
          }
        }
      }
    }
    allWpInitiatives {
      nodes {
        homepageInitiatives {
          description
          title
          link
          image {
            mediaItemUrl
          }
        }
      }
    }
    allWpGeneral(filter: {id: {eq: "cG9zdDo1ODA3"}}) {
    nodes {
      homepageContact {
        phone
        email
        contactNameSecondLine
        contactNameFirstLine
        addressThirdLine
        addressSecondLine
        addressFirstLine
        intro
      }
      id
    }
  }
  }
`




import React from "react"

import Layout from "@layouts/layout"
import Meta from "@components/meta"
import SocialLinks from "../components/socialLinks"

class HomePage extends React.Component {
  render() {
    const { ...data } = this.props.data

    console.log("data", data)
    return (
      <Layout>
        <Meta title={data.contentfulHome.title} />
        <div className="wrapper">
          <h1>{data.contentfulHome.title}</h1>
          <h2
            dangerouslySetInnerHTML={{
              __html: data.contentfulHome.description.childMarkdownRemark.html,
            }}
          ></h2>
        </div>
        <SocialLinks links={data.allContentfulSocialMediaLink.nodes} />
      </Layout>
    )
  }
}

export default HomePage

export const pageQuery = graphql`
  query {
    contentfulHome {
      title
      description {
        childMarkdownRemark {
          html
        }
      }
    }
    allContentfulSocialMediaLink {
      nodes {
        url
        title
      }
    }
  }
`

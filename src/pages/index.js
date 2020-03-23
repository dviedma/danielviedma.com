import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "@layouts/layout"
import Meta from "@components/meta"

class HomePage extends React.Component {
  render() {
    const { ...data } = this.props.data

    console.log("data", data)
    return (
      <Layout>
        <Meta title={data.contentfulHome.title} />
        <h1>{data.contentfulHome.title}</h1>
        <h2
          dangerouslySetInnerHTML={{
            __html: data.contentfulHome.description.childMarkdownRemark.html,
          }}
        ></h2>
        <ul>
          {data.allContentfulProject.nodes.map((project, index) => {
            return (
              <li key={index}>
                <Link to={project.url}>{project.url}</Link>
                <p>{project.shortDescription}</p>
              </li>
            )
          })}
        </ul>
        <div>
          <ul>
            {data.allContentfulSocialMediaLink.nodes.map((link, index) => {
              return (
                <li key={index}>
                  <a href={link.url}>{link.title}</a>
                </li>
              )
            })}
          </ul>
        </div>
      </Layout>
    )
  }
}

export default HomePage

export const pageQuery = graphql`
  query {
    contentfulHome {
      title
      subtitle
      description {
        childMarkdownRemark {
          html
        }
      }
    }
    allContentfulProject {
      nodes {
        url
        title
        shortDescription
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

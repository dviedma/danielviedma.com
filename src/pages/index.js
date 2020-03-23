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
          <ul className="projects">
            {data.allContentfulProject.nodes.map((project, index) => {
              return (
                <li key={index}>
                  <a href={project.url} target="_blank">
                    {project.url}
                  </a>
                  <p>{project.shortDescription}</p>
                </li>
              )
            })}
          </ul>
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

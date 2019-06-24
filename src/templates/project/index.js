import React from "react";

class ProjectTemplate extends React.Component {

  // Render
  render() {
    // Alias data to props
    const { ...data } = { ...this.props.data.contentfulProject };

    return <h1>{data.title}</h1>;
  }
}

export default ProjectTemplate;

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      title
    }
  }
`;
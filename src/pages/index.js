import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import Meta from "../components/meta"

class HomePage extends React.Component {
  render() {
    const { ...data } = this.props.data.contentfulHome;
    return (<Layout>
      <Meta title={data.title} />
      <h1>{data.title}</h1>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>);
  }
}

export default HomePage

export const pageQuery = graphql`
  query {
    contentfulHome {
      title
    }
  }
`;

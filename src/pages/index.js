import React from "react"
import { Link, graphql } from "gatsby"
import Container from "../components/container/container"

const IndexPage = ({ data }) => {
  return (
    <Container>
      <h1>All {data.allNodeObject.totalCount} Objects</h1>

      <ul>
        {data.allNodeObject.edges.map(({ node }, i) => (
          <li key={`tableRow${i}}`}><Link to={node.fields.slug}>{node.title}</Link></li>
        ))}
      </ul>
    </Container>
  )
}

export default IndexPage

export const query = graphql`
  query ObjectList {
    __typename
    allNodeObject(sort: {fields: field_year}) {
      edges {
        node {
          title
          fields {
            slug
          }
        }
      }
      totalCount
    }
  }
`

import React from "react"
import { graphql } from "gatsby"
import Container from "../components/container/container"
import ObjectTableRow from "../components/objectTableRow"

export default ({ data }) => {
  const node = data.nodeObject
  console.log(node);
  return (
    <Container>
      <div className="main-content">
        <section className="object-title">
          <div className="container">
            <a className="back" href="/"><span class="fa fa-arrow-left"></span>Back to Collection</a>

            <h1>{node.title}</h1>

            <div className="interact">
            </div>

            <div className="images">
              <div class="cycle-slideshow">
                {node.relationships.field_images && <img src={node.relationships.field_images[0].localFile.publicURL} alt={ node.title }/> }
              </div>
            </div>
          </div>
        </section>

        <section className="intro">
          <div className="container">
            <div className="content grid">
              <article>
                <div className="body">
                  <h2>Description</h2>
                  <div dangerouslySetInnerHTML={{ __html: node.field_body.value }}></div>
                  <a className="image-link" href="#">Research and Image Request</a>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="about">
          <div class="container">
            <h2>About the Object</h2>
            <table>
              <tbody>
                {node.relationships && node.relationships.field_object_category && <ObjectTableRow label="Category" value={node.relationships.field_object_category.name} />}
                <ObjectTableRow label="Accession" value={node.field_accession} />
                <ObjectTableRow label="Medium" value={node.field_object_medium} />
                <ObjectTableRow label="Dimensions" value={node.field_dimensions} />
                <ObjectTableRow label="City" value={node.field_geography} />
                <ObjectTableRow label={node.field_creator_label} value={node.field_creator_name} />
                <ObjectTableRow label="Studio" value={node.field_studio} />
                <ObjectTableRow label="Date" value={node.field_display_date ? node.field_display_date : node.field_year} />
                <ObjectTableRow label="Credit Line" value={node.field_object_credit} />
              </tbody>
            </table>
          </div>
        </section>

        <section className="disclaimers">
          <div className="container">
            <div>
              <h3>Change Requests</h3>
              <p>Does this object contain inaccurate information or language that you feel we should improve or change? <a href="/visit/contact">We would like to hear from you.</a></p>
            </div>
            <div>
              <h3>Rights and Restrictions</h3>
              <p>{ node.field_object_restrictions }</p>
            </div>
          </div>
        </section>
      </div>
    </Container>
  )
}

export const query = graphql`
  query($slug: String!) {
    nodeObject(fields: {slug: {eq: $slug}}) {
      field_body {
        value
      }
      field_creator_label
      field_creator_name
      field_dimensions
      field_geography
      field_object_credit
      field_object_restrictions
      field_object_medium
      field_studio
      field_year
      fields {
        slug
      }
      relationships {
        field_images {
          localFile {
            publicURL
          }
        }
        field_object_category {
          name
        }
      }
      title
    }
  }
`

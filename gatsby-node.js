const path = require('path');
import removeAccents from 'remove-accents';

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'node__object') {
    createNodeField({
      node,
      name: 'slug',
      value: `collection/objects/${node.drupal_internal__nid}-${removeAccents(node.title).toLowerCase().replace(/[^-a-z0-9]/g, '-').replace(/--+/g, '-').replace(/^-|-$/g, '')}`
    })
  }
}
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query allObjects {
      allNodeObject {
        edges {
          node {
            title
            drupal_internal__nid
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  result.data.allNodeObject.edges.forEach(( { node } ) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve('./src/templates/object.js'),
      context: {
        slug: node.fields.slug
      }
    })
  })
}

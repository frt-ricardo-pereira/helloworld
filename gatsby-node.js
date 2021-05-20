exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions
    const result = await graphql(`
      {
        allMarkdownRemark(       
            limit: 1000
          ) {
            edges {
              node {
                id
                frontmatter {
                  slug
                  templatekey
                }
              }
            }
          }
        }
    `)
  
    // Handle errors
    if (result.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`)
      return
    }
  
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.slug,
        component: require.resolve(`./src/templates/${String(node.frontmatter.templatekey)}.js`),
        context: {
          id: node.id,
          isCanonical:true
        },
      })
    })
  }
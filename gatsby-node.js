const path = require(`path`)
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  try {
    const { data } = await graphql(`
      {
        pages: allWpPage {
          edges {
            node {
              id
              slug
            }
          }
        }

        experience: allWpExperienceTheme {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    `)

    const pages = data.pages.edges
    pages.forEach(({ node }) => {
      if (node.slug === "home") {
        createPage({
          path: `/`,
          component: path.resolve(`./src/pages/index.js`),
        })
      } else {
        createPage({
          path: `/${node.slug}`,
          component: path.resolve(`./src/templates/pageTemplate.js`),
          context: {
            id: node.id,
          },
        })
      }
    })

    const experience = data.experience.edges
    experience.forEach(({ node }, index) => {
      createPage({
        path: `/experience/${node.slug}/`,
        component: path.resolve("./src/templates/experience.js"),
        context: {
          id: node.id,
          slug: node.slug,
          next: index === 0 ? null : experience[index - 1].node.slug,
          prev:
            index === experience.length - 1
              ? null
              : experience[index + 1].node.slug,
        },
      })
    })
  } catch (err) {
    console.log("Error retrieving WordPress data", err)
  }
}

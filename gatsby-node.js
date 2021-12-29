exports.createPages = async ({ actions, graphql, reporter}) => {
  const resultado = await graphql(`
  query{
    allDatoCmsHabitacione{
     nodes {
      slug
    }
    }
  }
  
  `)

  if(resultado.errors) {
    reporter.panic('No hubo resultados', resultado.errors)
  }

  const habitaciones = resultado.data.allDatoCmsHabitacione.nodes;

  habitaciones.forEach(habitacion => {
    actions.createPage({
      path: habitacion.slug,
      component: require.resolve('./src/components/habitaciones.js'),
      context: {
        slug: habitacion.slug
      }
    })
  })
}

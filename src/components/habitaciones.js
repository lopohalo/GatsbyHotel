import React from 'react'
import { graphql } from 'gatsby';
import  Layout  from '../components/layout';
import Image from 'gatsby-image'
import { css } from '@emotion/react'

export const query = graphql`
query($slug: String!){
    allDatoCmsHabitacione(filter: {slug: {eq:$slug}}){
     nodes {
      titulo
      contenido
      imagen {
        fluid (maxWidth:1200){
           ...GatsbyDatoCmsFluid
        }
      }
    }
    }
  }
`

const HabitacionTemplate = ({data: {allDatoCmsHabitacione: {nodes}}}) => {

    const {titulo, contenido, imagen} = nodes[0];
    return (
        <Layout>
            <main 
             css={css`
              margin: 0 auto;
              max-width: 1500px;
              width: 95%;
             `}
            >
        <h1
        css={css`
              text-align: center;
              margin-top: 4rem;
             `}
        >{titulo}</h1>
        <p>{contenido}</p>
        <Image 
              fluid={imagen.fluid}
            />
        </main>
        </Layout>
    )
}

export default HabitacionTemplate;

import React from 'react'
import Image from 'gatsby-image'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import {Link} from 'gatsby'


const Boton = styled(Link)`
 margin-top: 2rem;
 padding: 1rem;
 background-color: rgba(44,62,80, .85);
 width: 95%;
 color: #FFF;
 display: block;
 text-decoration: none;
 text-transform: uppercase;
 font-weight: 500;
 text-align: center;

`

const HabitacionPreview = ({habitacion}) => {
   
    const {contenido, imagen, titulo, slug } = habitacion;
    return (
        <div 
          css={css`
           border: 1px solid #e1e1e1;
           margin-bottom: 2rem;
          `}
         
        > 
            <Image 
              fluid={imagen.fluid}
            />
          <div
           css={css`
            padding: 2rem;
           `}
          >
              <h3
               css={css`
                font-size: 3rem;
               `}
              >{titulo}</h3>
              <p css={css`
                    overflow: hidden;
                    height:300px;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                `}>{contenido}</p>

              <Boton to={slug}>ver habitacion </Boton>
          </div>
        </div>
    )
}

export default HabitacionPreview

import * as React from "react"
import { css } from '@emotion/react'
import Navegacion from "./nav"
import styled from '@emotion/styled'
import {Link} from 'gatsby'

const EnlaceHome = styled(Link)`
 color: #FFF;
 text-align: center;
 text-decoration: none;

`

const Footer = ({title}) => {
    
    const year = new Date().getFullYear();

  return (
      <>
    <p 
     css={css`
      text-align: center;
      color: white;
      background-color: rgba(33,44,55);
      margin: 1px;
      padding: 1rem;
      position: relative;
      top: 100px;
     `}
    >
    {title}. Todos los derechos Reservados {year} &copy;
    </p>
    </>
  )
  }

export default Footer

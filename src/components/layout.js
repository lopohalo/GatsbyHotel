import React from 'react'
import Header from './header'
import { Helmet } from 'react-helmet'
import { css, Global } from '@emotion/react'
import Footer from './footer'
import useSeo from '../hooks/use-seo'


const Layout = (props) => {

  const seo= useSeo()
  const {siteName, fallbackSeo:{description, title}} = seo;
  return (
    <>
    <Global 

     styles={css`
        html {
          font-size: 62.5%;
          box-sizing: border-box;
        }

        *, *:before, *:after {
          box-sizing: inherit;

   
        }
      
      body {
        font-size: 18px;
        font-size: 1.8rem;
        line-height: 1.5;
        font-family: 'PT Sans', sans-serif;
      }  
      h1, h2, h3 {
        margin: 0;
        line-height: 1.5;
      }
      h1,h2 {
        font-family: 'Roboto', serif;
      }

      h3{
        font-family: 'PT Sans', sans-serif;
      }
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
      }
      
      
     `}
    />
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link 
                rel="stylesheet" 
                href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css" 
               
            />
            <link href="https://fonts.googleapis.com/css?family=PT+Sans:200,500|Roboto+Slab:400,700&display=swap" rel="stylesheet" />
            <link href="/static/css/app.css" rel="stylesheet" />
    </Helmet>
    <Header />
   {props.children}
   
   <Footer
    title={title}
   />
  
   </>
  
  )
}

export default Layout

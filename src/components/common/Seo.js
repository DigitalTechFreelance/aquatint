import React from 'react'
import { Helmet, HelmetProvider } from "react-helmet-async";

function Seo({ data }) {
    return (
        <HelmetProvider>

        {data && data !== null && data!==undefined ?(

        <Helmet>
            <meta charSet="utf-8" />
            <title>{data.metaTitle}</title>
            <meta name="title" content={data.metaTitle}/>
            {data?.keyword && <meta name="keywords" content={data.keyword}></meta>}
            <meta name="description" content={data.metaDescription} />
            <meta property="og:type" content="website"/>
            <meta property="og:url" content="https://aquatintdetailing.com/"/>
            <meta property="og:title" content={data.metaTitle}/>
            <meta property="og:description" content={data.metaDescription}/>
            <meta property="og:image" content={data?.shareImage?.url}/>

            <meta property="twitter:card" content="summary_large_image"/>
            <meta property="twitter:url" content="https://aquatintdetailing.com/"/>
            <meta property="twitter:title" content={data.metaTitle}/>
            <meta property="twitter:description" content={data.metaDescription}/>
            <meta property="twitter:image" content={data?.shareImage?.url}></meta>
        </Helmet>): <></>}    
        </HelmetProvider> 
            
    )
}

export default Seo 

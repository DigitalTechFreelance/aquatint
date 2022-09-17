import React from 'react'
import { Helmet } from "react-helmet";

function Seo({ data }) {
    console.log("seo data", data)
    return (
        data && data !== null &&
        <Helmet>
            <meta charSet="utf-8" />
            <title>{data.metaTitle}</title>
            <meta name="keywords" content={data.keyword}></meta>
            <meta name="description" content={data.metaDescription} />
        </Helmet>
    )
}

export default Seo
import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

export const query = graphql`
  fragment Meta on MarkdownRemark {
    frontmatter {
      meta {
        title
        description
        canonicalLink
      }
    }
  }
`

export default class Meta extends Component {
  render() {
    const {
      title,
      description,
      absoluteImageUrl = '',
      canonicalLink,
      siteTitle,
      siteDescription,
      googleTrackingId = false
      // overwrite { title, description } if in fields or fields.meta
    } = this.props

    return (
      <Helmet>
        {title && <title>{title}</title>}
        {title && <meta property="og:title" content={title} />}
        {description && <meta name="description" content={description} />}
        {description && <meta property="og:description" content={description} />}
        {canonicalLink && <meta property="og:type" content="website" />}
        {canonicalLink && <meta property="og:url" content={canonicalLink} />}
        {canonicalLink && <meta name="twitter:site" content={canonicalLink} />}
        {canonicalLink && <link rel="canonical" href={canonicalLink} />}

        <meta property="og:locale" content="sv_SE" />
        <meta property="og:site_name" content={siteTitle} />
        {description && <meta property="twitter:description" content={description} />}
        
        {title && <meta property="twitter:title" content={title} />}
        <meta name="twitter:image" content={absoluteImageUrl} />
        <meta property="og:image:secure_url" content={absoluteImageUrl} />
        <meta property="og:image" content={absoluteImageUrl} />
        <meta name="twitter:card" content="summary" />
        <meta name="geo.region" content="SE" /> 
        <meta name="geo.placename" content="Malmö" />
        <meta name="geo.position" content="55.58219;13.02516" />
        <meta name="ICBM" content="55.58219, 13.02516" />

        <script type="application/ld+json">{`

{
  "@context": "https://schema.org",
  "@graph": [
       {
    "@type": "WebPage",
    "@id": "https://www.xn--flyttfirman-malm-1wb.se/#",
    "url": "https://www.xn--flyttfirman-malm-1wb.se/",
    "name": "Flyttstädning Göteborg - Fasta priser & Garanti",
    "description": "Flyttfirma Malmö hjälper dig flytta i Malmö och andrar delar av Skåne! ✔️ Kontakta oss för gratis offert idag! Kontakt oss via vårt formulär, telefon eller mail. ✔️",
    "inLanguage": "sv-SE"
    },
    {
        "@type": "LocalBusiness",
        "name": "Flyttfirman Malmö",
        "image": "https://www.xn--flyttfirman-malm-1wb.se/images/logo.jpg",
        "@id": "https://www.xn--flyttfirman-malm-1wb.se/#",
        "url": "https://www.xn--flyttfirman-malm-1wb.se/",
        "telephone": "073 637 99 08",
        "priceRange": "$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Lönngatan 60, Malmö",
          "addressLocality": "Malmö",
          "postalCode": "21449",
          "addressCountry": "SE"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 55.58219,
          "longitude": 13.02516
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": "08:00",
          "closes": "18:00"
        } 
      }
 
      
  ]
}

`}</script>


        {googleTrackingId && (
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${googleTrackingId}`}
          />
        )}

        {googleTrackingId && (
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${googleTrackingId}');
            `}
          </script>
        )}
      </Helmet>
    )
  }
}

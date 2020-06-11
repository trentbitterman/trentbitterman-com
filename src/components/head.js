import React from "react"
import { Helmet } from "react-helmet"

export default function Head(props) {
  const pageTitle = props.title ? <title>{props.title}</title> : undefined

  return (
    <Helmet
      titleTemplate="%s | TrentBitterman.com"
      defaultTitle="TrentBitterman.com"
      htmlAttributes={{ lang: "en" }}
    >
      <meta charSet="utf-8" />
      {pageTitle}
      <link rel="canonical" href={props.link} />
      <meta name="description" content={props.description} />
      <meta
        name="keywords"
        content="Trent, Trent Bitterman, developer, software"
      />
      <meta name="author" content="Trent Bitterman" />
    </Helmet>
  )
}

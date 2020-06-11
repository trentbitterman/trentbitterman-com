import React from "react"
import Header from "../components/header"
import Head from "../components/head"
import { Link } from "gatsby"

export default function default404() {
  return (
    <div>
      <Head
        title="404 Page Not Found"
        link="https://trentbitterman.com/404"
        description="404 error page"
      />
      <Header headerText="Page Not Found" />
      <p>
        This page and Balrog wings have something in common, they don't exist.
      </p>
      <Link to="/">Take me home</Link>
    </div>
  )
}

import React from "react"

import Header from "../components/header"
import Head from "../components/head"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <Head
        link="https://trentbitterman.com"
        description="Homepage of trentbitterman.com"
      />
      <Header headerText="Welcome to Trent's Site!" />
    </Layout>
  )
}

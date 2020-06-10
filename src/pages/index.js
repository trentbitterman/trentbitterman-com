import React from "react"
import Header from "../components/header"
import Head from "../components/head"

export default function Home() {
  return (
    <div>
      <Head
        link="https://trentbitterman.com"
        description="Homepage of trentbitterman.com"
      />
      <Header headerText="Welcome to Trent's Site!" />
    </div>
  )
}

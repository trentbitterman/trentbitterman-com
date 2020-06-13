import React from "react"

import Head from "../components/head"
import Header from "../components/header"

export default function About() {
  return (
    <div>
      <Head
        title="About Me"
        link="https://trentbitterman.com/about"
        description="About me"
      />
      <Header headerText="About Me" />
      <p>
        I am a software developer in Northern Colorado. I enjoy running,
        reading, and movies of all sorts.
      </p>
    </div>
  )
}

import React from "react"
import { shallow } from "enzyme"

import Head from "../head"

describe("Head", () => {
  it("correctly sets the title", () => {
    const wrapper = shallow(
      <Head
        title="Google"
        link="https://google.com"
        description="A search engine"
      />
    )

    expect(wrapper.contains(<title>Google</title>)).toEqual(true)
  })

  it("sets the correct canonical link", () => {
    const wrapper = shallow(
      <Head
        title="DuckDuckGo"
        link="https://duckduckgo.com"
        description="Another search engine"
      />
    )

    expect(
      wrapper.contains(<link rel="canonical" href="https://duckduckgo.com" />)
    ).toEqual(true)
  })

  it("sets the correct description", () => {
    const wrapper = shallow(
      <Head
        title="Bing"
        link="https://www.bing.com"
        description="A third search engine"
      />
    )

    expect(
      wrapper.containsMatchingElement(
        <meta name="description" content="A third search engine" />
      )
    ).toEqual(true)
  })

  it("uses the correct author", () => {
    const wrapper = shallow(<Head />)

    expect(
      wrapper.contains(<meta name="author" content="Trent Bitterman" />)
    ).toEqual(true)
  })
})

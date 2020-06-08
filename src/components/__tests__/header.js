import React from "react"
import { shallow } from "enzyme"

import Header from "../header"

describe("Header", () => {
  it("displays the given text", () => {
    const header = shallow(<Header headerText="Test text" />)
    expect(header.text()).toEqual("Test text")
  })

  it("uses an h1 tag", () => {
    const header = shallow(<Header headerText="Another test" />)
    expect(header.html()).toContain("<h1>")
  })
})

import React from "react"
import { shallow } from "enzyme"

import Layout from "../layout"

describe("Layout", () => {
  it("contains a div", () => {
    const wrapper = shallow(<Layout />)

    expect(wrapper.html()).toContain("<div>")
  })

  it("contains whatever you give it", () => {
    const paragraph = <p>Lorem ipsum</p>
    const wrapper = shallow(<Layout>{paragraph}</Layout>)

    expect(wrapper.contains(paragraph)).toEqual(true)
  })
})

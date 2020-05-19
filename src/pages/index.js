import React from "react"
import CrumbLayout from "../components/crumblayout"
import BlueLink from "../components/bluelink"

const IndexPage = () => (
  <CrumbLayout crumbs={[["Home", "/"]]} title="Home">
    <BlueLink to="services/booking">Booking Service</BlueLink>
  </CrumbLayout>
)

export default IndexPage

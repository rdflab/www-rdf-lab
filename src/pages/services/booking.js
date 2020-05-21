import React from "react"
import CrumbLayout from "../../components/crumblayout"
import SiteSearch from "../../components/search/sitesearch"

const Booking = () => (
  <CrumbLayout
    crumbs={[["Booking Service", "/services/booking"]]}
    title="RDF Lab Booking Service"
    headerComponent={<SiteSearch />}
  >
    <div className="w-full h-full min-h-full overflow-hidden">
      <div
        className="iframe-container w-full h-full min-h-full"
        style={{ minHeight: "100rem" }}
      >
        <iframe
          align="center"
          src="https://d1u9v29osof142.cloudfront.net"
          frameborder="0"
          allowfullscreen=""
          width="100%"
          height="100%"
          title="Booking"
        ></iframe>
      </div>
    </div>
  </CrumbLayout>
)

export default Booking

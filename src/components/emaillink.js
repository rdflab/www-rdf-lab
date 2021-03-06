import React from "react"
import { FaEnvelope } from "react-icons/fa"
import IconLink from "./iconlink"
import BlueLinkExt from "./bluelinkext"

const EmailLink = ({ to }) => (
  <IconLink icon={<FaEnvelope className="text-gray-600" size={20} />}>
    <BlueLinkExt to={`mailto:${to}`}>{to}</BlueLinkExt>
  </IconLink>
)

export default EmailLink

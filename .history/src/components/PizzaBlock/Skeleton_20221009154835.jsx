import React from 'react'
import ContentLoader from 'react-content-loader'

const Sceleton = props => (
  <ContentLoader
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <circle cx="134" cy="127" r="98" />
    <rect x="0" y="465" rx="5" ry="5" width="280" height="32" />
    <rect x="28" y="231" rx="7" ry="7" width="218" height="22" />
    <rect x="33" y="271" rx="19" ry="19" width="213" height="69" />
    <rect x="30" y="365" rx="1" ry="1" width="88" height="27" />
    <rect x="141" y="362" rx="17" ry="17" width="106" height="35" />
  </ContentLoader>
)

export default Sceleton

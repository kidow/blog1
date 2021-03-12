import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const Bio = () => {
  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={['AUTO', 'WEBP', 'AVIF']}
        src="../images/profile-pic.png"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      />
    </div>
  )
}

export default Bio

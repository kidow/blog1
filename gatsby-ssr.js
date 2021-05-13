import React from 'react'

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script
      src="https://cdn-test-kohl.vercel.app/plugin.js"
      async
      plugin-key="383feb63-4522-412d-bac9-42d0d877f0ac"
    ></script>
  ])
}

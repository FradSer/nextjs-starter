import React from 'react'
import { cookies, headers, previewData } from 'next/headers'

const HooksServer = () => {
  return (
    <div className="overflow-x-auto rounded-xl px-2 py-4 text-sm text-white [color-scheme:dark]">
      <pre>
        {JSON.stringify(
          {
            cookies: cookies(),
            useHeaders: headers(),
            usePreviewData: previewData(),
          },
          null,
          2,
        )}
      </pre>
    </div>
  )
}

export default HooksServer

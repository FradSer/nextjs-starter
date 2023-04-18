'use client'

import React from 'react'
import {
  usePathname,
  useSelectedLayoutSegments,
  useSearchParams,
} from 'next/navigation'

const HooksClient = () => {
  const pathname = usePathname()
  const selectedLayoutSegments = useSelectedLayoutSegments()
  const searchParams = useSearchParams()
  const searchParam = searchParams.get('key')

  return (
    <div className="overflow-x-auto rounded-xl px-2 py-4 text-sm text-white [color-scheme:dark]">
      <pre>
        {JSON.stringify(
          {
            usePathname: pathname,
            selectedLayoutSegments: selectedLayoutSegments,
            useSearchParams: searchParams,
            "useSearchParam('key')": searchParam,
            useRouter: {
              push: '(string) => void',
              softPush: '(string) => void',
              replace: '(string) => void',
              softReplace: '(string) => void',
              reload: '() => void',
              prefetch: '() => Promise<void>',
            },
          },
          null,
          2
        )}
      </pre>
    </div>
  )
}

export default HooksClient

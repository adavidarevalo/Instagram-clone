import React from 'react'

export default function AsideBar ({ children, asideComponent }: any) {
  return (
        <div className="grid grid-cols-1 sm:grid-cols-4 grid-flow-col gap-6 w-full max-w-screen-lg">
            <div className="col-span-3">{children}</div>
            <div className="hidden sm:block col-span-1 col-end-5">{asideComponent}</div>
        </div>
  )
}

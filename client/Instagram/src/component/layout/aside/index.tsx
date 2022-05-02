import { ReactChildren, ReactChild } from 'react'

interface IProps {
  children: ReactChild | ReactChildren;
  asideComponent: JSX.Element
}

export default function AsideBar ({ children, asideComponent }: IProps) {
  return (
        <aside className="grid grid-cols-1 sm:grid-cols-4 grid-flow-col gap-6 w-full max-w-4xl">
            <div className="col-span-3">{children}</div>
            <div className="hidden sm:block col-span-1 col-end-5">{asideComponent}</div>
        </aside>
  )
}

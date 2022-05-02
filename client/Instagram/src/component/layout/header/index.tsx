import { ReactChildren, ReactChild } from 'react'
import Header from './header'
interface IProps {
  children: ReactChild | ReactChildren;
}

export default function BasicLayout ({ children }: IProps) {
  return (
        <>
            <Header />
            <main className="flex justify-center p-20 ">
                {children}
            </main>
        </>
  )
}

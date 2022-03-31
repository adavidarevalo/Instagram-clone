import Header from './header'

export default function BasicLayout ({ children }: any) {
  return (
        <>
            <Header />
            <main className="flex justify-center">
                {children}
            </main>
        </>
  )
}

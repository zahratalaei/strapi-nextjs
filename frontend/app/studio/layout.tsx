
export const metadata = {
    title: 'Next.js App',
    description:'Generated by Next.js',
    
}
const layout = ({children}:{children:React.ReactNode}) => {
  return (
   <html lang='en'>
    <body>
        {children}
    </body>
   </html>
  )
}

export default layout
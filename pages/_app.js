

// 1. Import `createTheme`
import { createTheme, NextUIProvider } from "@nextui-org/react"
import { ThemeProvider as NextThemesProvider } from 'next-themes';





// 3. Wrap NextUIProvider with NextThemesProvider
// _app.jsx // _app.tsx



function MyApp({ Component, pageProps }) {

// 2. Call `createTheme` and pass your custom values
const lightTheme = createTheme({
    type: 'light',
    theme: {
      //colors: {text: '#fff'}, // optional
    }
  })
  
  const darkTheme = createTheme({
    type: 'dark',
    theme: {
     //colors: {text: '#000'}, // optional
    }
  })

  return (
    <NextThemesProvider
    defaultTheme="system"
    attribute="class"
    value={{
      light: lightTheme.className,
      dark: darkTheme.className
    }}
  >
  <NextUIProvider>
      <Component {...pageProps} />
  </NextUIProvider>
 </NextThemesProvider>
    
  )
}

export default MyApp

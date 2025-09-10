"use client"
import NavBar from "./components/NavBar";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar/>
        <div  style={{"paddingTop" : "20px"}} >
          {children}
        </div>
      </body>
    </html>
  );
}
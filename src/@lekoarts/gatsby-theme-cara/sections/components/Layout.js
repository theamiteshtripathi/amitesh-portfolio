import React from "react"
import { Layout as ThemeLayout } from "@lekoarts/gatsby-theme-cara/src/components/layout"
import Header from "../../components/Header"

const Layout = ({ children }) => (
  <ThemeLayout>
    <Header />
    {children}
  </ThemeLayout>
)

export default Layout

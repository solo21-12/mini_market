import Head from 'next/head';
import React from 'react'
import Footer from './footer';
import NavBar from './navBar';
const Layout = ({ children }) => {
  return (<div>
    <Head>
      <title>Solo market</title>
      <meta name="description" content="A solo ecommerice app" />
      <link rel="icon" href="/logosolo.png" />
    </Head>
    <header>
      <NavBar />
    </header>
    <main>
      {children}
    </main>
    <footer>
      <Footer />
    </footer>
  </div>);
}

export default Layout;
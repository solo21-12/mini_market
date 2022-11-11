import { useEffect, useState } from 'react'
import { BootomBanner, Main, TopBanner, Headline } from '../components'
export default function Home({ }) {
  let [category, setCategory] = useState([])
  let [banner, setBanner] = useState([])
  let [headline, setHeadline] = useState([])
  const getCategory = async () => {
    setCategory(await (await fetch("/api/products/categore")).json())
  }
  const getBanner = async () => {
    const data1 = await (await fetch("/api/banner")).json()
    setBanner(data1[0])
  }
  const getHeadline = async () => {
    const data = await (await fetch("/api/headline")).json()
    setHeadline(data[0])
  }
  useEffect(() => {
    getCategory()
    getBanner()
    getHeadline()
  }, [])
  return (

    <div >

      <main>
        <Main banner={banner} />
        <Headline headline={headline} />
        <TopBanner category={category} />
        <BootomBanner />
      </main>

      <footer >

      </footer>
    </div>
  )
}



import {useState, useEffect} from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'

import Card from '../component/card'
import style from '../css/avenger.module.css'

import {baseurl} from '../../lib/constant.js'

const Avengers = (props) => {
  const [shows, setShows] = useState([])
  const [searchText, setSearchText] = useState('avengers')
  const router = useRouter()
  const {search} = router.query

  useEffect(() => {
      getShows()
  }, [search])

  const getShows = async () => {
    const res = await fetch(`${baseurl}search/shows?q=${search}`)
    const shows = await res.json()
    setShows(shows)
  }

  return (
      <div className={style.container}>
      <div style={{display:'flex'}}>
           <input type="text" placeholder="Search.." name="search" className={style.input} onChange={({target}) => setSearchText(target.value)}/>
           <Link href={`/tv-shows/${searchText}`}>
              <button>search</button>
           </Link>
      </div>

      <Head>
        {
          shows.map((s,i) => {
              return <meta key={i} name="title" content={s.show.name}></meta>
          })
        }
      </Head>
      <main>
          <div className={style.grid}>
          {
                shows.map((s, i) => {
                  return (
                    <Card key={i} data={s.show}/>
                  )
                })
              }
              </div>
            </main>
      </div>
    )
}
export async function getStaticPaths() {
    return { paths: [
      {
        params: {
          search: 'avengers'
        }
      }
    ], fallback: true };
}


export async function getStaticProps(context) {
  return {
    props: {}
  }
}
export default Avengers;

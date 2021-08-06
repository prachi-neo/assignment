import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'

import Card from '../component/card'
import style from '../css/avenger.module.css'

import {getPostData} from '../../lib/avenger.js'

const Avengers = (props) => {
  const {shows} = props
  return (
      <div className={style.container}>
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

export async function getStaticProps() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=avengers')
  const shows = await res.json()

  return {
    props: {
      shows
    }
  }
}
export default Avengers;

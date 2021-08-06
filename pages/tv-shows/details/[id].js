import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/Head'

import {getAllDataIds,getAvengerData} from '../../../lib/avenger.js'
import {ImagePlaceholder,baseurl} from '../../../lib/constant.js'
import Star from '../../../public/images/star.png'
import Back from '../../../public/images/back.png'
import style from '../../css/avenger.module.css'


const Details = (props)=> {
  const {show} = props

  return (
    show ? <div style={{padding:10}}>
      <Head>
        <meta name="title" content={show.name}></meta>
      </Head>
      <Link href="/">
        <a>
          <Image src={Back} height={30} width={30}/>
        </a>
      </Link>
      <h1>{show.name}</h1>
      <div dangerouslySetInnerHTML={{__html: show.summary}}></div>
      <p>type: {show.type} </p>
      {show?.rating?.average &&  <div>
         <Image src={Star} height={20} width={20}/> {show?.rating?.average}
      </div>}
      <img
          placeholder="blur"
          className={style.image}
          src={show?.image?.medium || ImagePlaceholder}
          alt="..."
        />
    </div>
    :
    null
  )
}

export async function getStaticPaths() {
    const res = await fetch(`${baseurl}search/shows?q=avengers`)
    const shows = await res.json()
    const paths =  getAllDataIds(shows)
    return { paths, fallback: true };
}

export async function getStaticProps(context) {
  const res = await fetch(`${baseurl}shows/${+context.params.id}`)
  const show = await res.json()

  return {
    props: {
      show
    }
  }

}


export default Details
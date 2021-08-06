import Image from 'next/image'
import {getAllDataIds,getAvengerData} from '../../lib/avenger.js'
import Star from '../../public/images/star.png'
import {ImagePlaceholder,baseurl} from '../../lib/constant.js'

const Second = (props)=> {
  const {show} = props

  return (
    <div style={{padding:10}}>
    <h1>{show.name}</h1>
    <div dangerouslySetInnerHTML={{__html: show.summary}}></div>
    <p>type: {show.type} </p>
    {show?.rating?.average &&  <div>
       <Image src={Star} height={20} width={20}/> {show?.rating?.average}
    </div>}
    <img
        placeholder="blur"
        style={{objectFit:'cover',height:'100%', width:300}}
        src={show?.image?.medium || ImagePlaceholder}
        alt="..."
      />
    </div>
  )
}

export async function getStaticPaths() {
  const res = await fetch(`${baseurl}search/shows?q=avengers`)
  const shows = await res.json()
  const paths = getAllDataIds(shows)

  return {
    paths,
    fallback: false
  }
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


export default Second

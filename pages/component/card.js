import Image from 'next/image'
import Link from 'next/link'
import style from '../css/avenger.module.css'
import Star from '../../public/images/star.png'
import {ImagePlaceholder} from '../../lib/constant.js'

export default function Card (props) {
  const {data} = props

  return (
    <div className={style.imgContainer}>
        <img
            placeholder="blur"
            className={style.image}
            src={data?.image?.medium || ImagePlaceholder}
            alt="..."
          />
          <div className={style.overlay}>
          <Link as={`/tv-shows/${data.id}`} href={`/tv-shows/[id]`}>
            <a>
              <h3 className={style.avgText}>{data.name.toUpperCase()}</h3>
            </a>
          </Link>
            <div className={style.subText}>{data.language}</div>
            <div className={style.subText}>{data.genres.join(',')}</div>
           {data.rating.average &&  <div className={style.subText}>
              <Image src={Star} height={20} width={20}/> {data.rating.average}
            </div>}
          </div>
      </div>
  )
}

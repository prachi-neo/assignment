import Head from 'next/head'
import Link from 'next/link'
import style from './css/avenger.module.css'

export default function Home(props) {
  return null
}

export async function getStaticProps() {
  return {
    redirect: {
          destination: '/tv-shows/avengers',
          permanent: false,
    },
  }
}

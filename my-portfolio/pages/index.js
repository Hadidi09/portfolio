import Head from 'next/head'
import Image from 'next/image'
import Description from '../components/Description'
import Layout from '../components/Layout'


export default function Home()
{
  return (
    <Layout page="index.js">
     <Description />
    </Layout>
  )
}

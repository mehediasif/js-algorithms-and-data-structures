import Image from 'next/image'
import GridItems from '../../components/test'
import Layout from '../../components/Layout'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="px-2 rounded-3xl">

      <Layout>
      <GridItems />
      <GridItems />
      <GridItems />
      <Link href={'/testiRt'}>New Link</Link>
      </Layout>

      
    </main>
  )
}

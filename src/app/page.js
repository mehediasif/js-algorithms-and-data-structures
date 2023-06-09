import Image from 'next/image'
import GridItems from '../../components/GridItems'
import Layout from '../../components/Layout'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="px-2 rounded-3xl">
      <Layout>
      <GridItems />
      </Layout>
    </main>
  )
}

'use client'

import Link from 'next/link'
import Modal from './components/modal'
import { useSearchParams } from 'next/navigation'

export default function Page() {
  const searchParams = useSearchParams()

  const modalParam = searchParams.get('modal')

  return (
    <div>
      <div>Info</div>
      <Link href='/info'>hone</Link>
      <Link href='/info/?modal=t'>modal</Link>
      {modalParam === 't' ? (
        <Modal title='modal'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
          voluptatibus suscipit, hic nobis officiis excepturi veniam distinctio
          odit obcaecati a mollitia rem temporibus vel impedit magnam quam
          laudantium! Adipisci, assumenda?
          <Link href='/info'>hone</Link>
        </Modal>
      ) : null}
    </div>
  )
}

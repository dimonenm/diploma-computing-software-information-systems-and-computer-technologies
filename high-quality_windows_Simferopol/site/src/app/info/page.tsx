'use client'

import Link from 'next/link'
import Modal from './components/modal'
import { useSearchParams } from 'next/navigation'

export default function Page() {
  const searchParams = useSearchParams()

  const search = searchParams.get('m')

  console.log('search: ', search)

  return (
    <div>
      <div>Info</div>
      <Link href='/info'>hone</Link>
      <Link href='/info/?m=1'>modal1</Link>
      <Link href='/info/?m=2'>modal2</Link>
      <Link href='/info/?m=3'>modal3</Link>
      {search === '1' ? (
        <Modal title='modal1'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
          voluptatibus suscipit, hic nobis officiis excepturi veniam distinctio
          odit obcaecati a mollitia rem temporibus vel impedit magnam quam
          laudantium! Adipisci, assumenda?
          <Link href='/info'>hone</Link>
        </Modal>
      ) : null}

      {search === '2' ? (
        <Modal title='modal2'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sapiente
          beatae unde doloribus earum numquam asperiores voluptatibus omnis eum
          alias!
          <Link href='/info'>hone</Link>
        </Modal>
      ) : null}

      {search === '3' ? (
        <Modal title='modal3'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          porro officiis minus perferendis, nostrum recusandae modi saepe ipsa
          quia, incidunt consequuntur voluptas aperiam? Quasi, ex! Aperiam
          labore necessitatibus perspiciatis corrupti?
          <Link href='/info'>hone</Link>
        </Modal>
      ) : null}
    </div>
  )
}

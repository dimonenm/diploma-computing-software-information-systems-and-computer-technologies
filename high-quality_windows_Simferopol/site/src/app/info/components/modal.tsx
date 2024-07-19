'use client'
import { useSearchParams } from 'next/navigation'
import { useRef, useEffect } from 'react'

interface IModal {
  title: string
  // onClose: () => void
  // onOk: () => void
  children: React.ReactNode
}

export default function Modal({ title, children }: IModal) {
	
	return (
    <div>
      <div>modal</div>
      <div>{title}</div>
      <div>{children}</div>
    </div>
  )
}
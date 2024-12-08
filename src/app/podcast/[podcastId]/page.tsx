'use client'
import React from 'react'
import { useParams } from 'next/navigation'

export default function Podcast() {
  // get path params
  const { podcastId } = useParams()
  console.log(podcastId)
  return (
    <div>
      <h1>Podcast</h1>
    </div>
  )
}

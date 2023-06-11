'use client'

import MainContent from '../components/mainContent'

import { useState } from 'react'
import { getContent } from '../content/getContent'

export default function Page() {

    const [content, setContent] = useState(getContent('landingpage'))

    return (
      <>
        <MainContent content={content} />
      </>
    )
}

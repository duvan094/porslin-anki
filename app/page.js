'use client'

import content from './content/sv.json'

import MainContent from './components/mainContent'

export default function Page() {

    return (
      <>
        <MainContent content={content.pages.landingPage} />
      </>
    )
}
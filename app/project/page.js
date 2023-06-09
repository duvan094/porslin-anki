import content from '../content/sv.json'

import MainContent from '../components/mainContent'

export default function History() {

    return (
      <>
        <MainContent content={content.pages.project} />
      </>
    )
}
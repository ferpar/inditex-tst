import { type Podcast } from '../core/Providers/PodcastContext'
const PodCastCard = ({ podcast }: { podcast: Podcast }) => {
  console.log(podcast)
  return (
    <div>
      <h3>{podcast['im:name'].label}</h3>
      <p>Author: {podcast['im:artist'].label}</p>
    </div>
  )
}

export default PodCastCard

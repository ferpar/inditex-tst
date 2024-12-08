import Image from 'next/image'
import { type Podcast } from '../core/Providers/PodcastContext'
const PodCastCard = ({ podcast }: { podcast: Podcast }) => {
  return (
    <div style={{ position: 'relative', isolation: 'isolate' }}>
      <h3>{podcast['im:name'].label}</h3>
      <p>Author: {podcast['im:artist'].label}</p>
      {podcast['im:image'][2] !== undefined ? (
        <div style={{ position: 'relative', height: '120px', width: '120px' }}>
          <Image
            src={podcast['im:image'][2].label}
            fill={true}
            alt={podcast['im:name'].label}
          />
        </div>
      ) : null}
    </div>
  )
}

export default PodCastCard

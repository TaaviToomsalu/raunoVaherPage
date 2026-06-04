// Otse saidilt serveeritav video (fail asub public/ kaustas).
// poster = eelvaatepilt, mida näidatakse enne mängima panemist (valikuline).
export default function VideoEmbed({
  src = '/esitlusvideo.mp4',
  poster,
  title = 'Esitlusvideo',
}) {
  return (
    <div className="video-wrapper">
      <video
        src={src}
        poster={poster}
        title={title}
        controls
        preload="metadata"
        playsInline
      />
    </div>
  )
}

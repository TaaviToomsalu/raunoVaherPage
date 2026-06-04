// Üksainus YouTube video embed, mida kasutatakse Avalehel.
export default function VideoEmbed({ videoId = 'dQw4w9WgXcQ', title = 'Esitlusvideo' }) {
  return (
    <div className="video-wrapper">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}

// Placeholder pildid (picsum.photos). Asenda hiljem päris fotodega.
const images = Array.from({ length: 9 }, (_, i) => ({
  id: i + 1,
  src: `https://picsum.photos/seed/rauno-${i + 1}/600/450`,
  alt: `Rauno Vaher esinemas — foto ${i + 1}`,
}))

export default function Galerii() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Galerii</h2>
        <p className="section-subtitle">
          Hetked lavalt ja stuudiost. Klõpsa kujutlusvõimet ja kuula rütmi.
        </p>

        <div className="gallery-grid">
          {images.map((img) => (
            <div className="gallery-item" key={img.id}>
              <img src={img.src} alt={img.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

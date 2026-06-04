// Rauno Vaheri fotod (asuvad public/galerii/ kaustas).
// wide: true → laiad fotod lähevad terve galerii laiuse peale (suuremad).
const images = [
  { src: '/galerii/raunokosmos.jpg', alt: 'Rauno Vaher — stuudios' },
  { src: '/galerii/rauno.jpg', alt: 'Rauno Vaher portree' },
  { src: '/galerii/rauno-portree.jpg', alt: 'Rauno Vaher lähivaates' },
  { src: '/galerii/metsikrauno.jpg', alt: 'Rauno Vaher trummide taga — energiline esitus', wide: true },
  { src: '/galerii/raunolilledes.jpg', alt: 'Rauno Vaher lavalt', wide: true },
]

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
            <div
              className={img.wide ? 'gallery-item wide' : 'gallery-item'}
              key={img.src}
            >
              <img src={img.src} alt={img.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

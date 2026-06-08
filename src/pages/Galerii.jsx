// Rauno Vaheri fotod (asuvad public/galerii/ kaustas).
// wide: true → laiad fotod lähevad terve galerii laiuse peale (suuremad).
const images = [
  { src: '/galerii/raunokosmos.jpg', alt: 'Rauno Vaher — stuudios', w: 513, h: 700 },
  { src: '/galerii/rauno.jpg', alt: 'Rauno Vaher portree', w: 1280, h: 1600 },
  { src: '/galerii/rauno-portree.jpg', alt: 'Rauno Vaher lähivaates', w: 356, h: 474 },
  { src: '/galerii/metsikrauno.jpg', alt: 'Rauno Vaher trummide taga — energiline esitus', wide: true, w: 1600, h: 1066 },
  { src: '/galerii/raunolilledes.jpg', alt: 'Rauno Vaher lavalt', wide: true, w: 1600, h: 830 },
]

export default function Galerii() {
  return (
    <section className="section">
      <div className="container">
        <div className="page-head">
          <p className="eyebrow">Pildid</p>
          <h1 className="page-title">Galerii</h1>
          <p className="section-subtitle">
            Hetked metsast, lavalt ja kuskilt nende vahel.
          </p>
        </div>

        <div className="gallery-grid">
          {images.map((img) => (
            <div
              className={img.wide ? 'gallery-item wide' : 'gallery-item'}
              key={img.src}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                width={img.w}
                height={img.h}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

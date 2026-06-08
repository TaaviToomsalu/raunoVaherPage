import { useLang } from '../i18n.jsx'

// Rauno Vaheri fotod (asuvad public/galerii/ kaustas).
// wide: true → laiad fotod lähevad terve galerii laiuse peale (suuremad).
// alt-tekstid tulevad tõlkefailist (sama järjekord kui siin).
const images = [
  { src: '/galerii/raunokosmos.jpg', w: 513, h: 700 },
  { src: '/galerii/rauno.jpg', w: 1280, h: 1600 },
  { src: '/galerii/rauno-portree.jpg', w: 356, h: 474 },
  { src: '/galerii/metsikrauno.jpg', wide: true, w: 1600, h: 1066 },
  { src: '/galerii/raunolilledes.jpg', wide: true, w: 1600, h: 830 },
]

export default function Galerii() {
  const { t } = useLang()

  return (
    <section className="section">
      <div className="container">
        <div className="page-head">
          <p className="eyebrow">{t.gallery.eyebrow}</p>
          <h1 className="page-title">{t.gallery.title}</h1>
          <p className="section-subtitle">{t.gallery.subtitle}</p>
        </div>

        <div className="gallery-grid">
          {images.map((img, i) => (
            <div
              className={img.wide ? 'gallery-item wide' : 'gallery-item'}
              key={img.src}
            >
              <img
                src={img.src}
                alt={t.gallery.alts[i]}
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

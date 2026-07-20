import { useEffect, useRef } from 'react'
import Seo from '../components/Seo.jsx'
import { useLang } from '../i18n.jsx'

// Galerii sisu (pildid public/images/, videod public/videos/ kaustas).
// type: 'image' | 'video'. size: 'third' (~1/3 laius, vaikimisi) | 'half' (~1/2 laius).
// Pealkirjad/alt-tekstid tulevad tõlkefailist (t.gallery.captions) — SAMAS järjekorras kui siin.
const items = [
  // Olemasolevad fotod
  { type: 'image', src: '/images/raunokosmos.jpg', w: 513, h: 700 },
  { type: 'image', src: '/images/rauno.jpg', w: 1280, h: 1600 },
  { type: 'image', src: '/images/rauno-portree.jpg', w: 356, h: 474 },
  // Kaks suuremat fotot — nüüd pool laiust, kõrvuti ühel real
  { type: 'image', src: '/images/metsikrauno.jpg', size: 'half', w: 1600, h: 1066 },
  { type: 'image', src: '/images/raunolilledes.jpg', size: 'half', w: 1600, h: 830 },
  // Videod — maastik-video pool laiust, püstvideod ~1/3
  { type: 'video', src: '/videos/iland-drums.mp4', poster: '/videos/iland-drums-poster.jpg', size: 'half', w: 1280, h: 720 },
  { type: 'video', src: '/videos/dj-henessi-matslaav.mp4', poster: '/videos/dj-henessi-matslaav-poster.jpg', w: 720, h: 1280 },
  { type: 'video', src: '/videos/dj-matslaav-mc-etsistents.mp4', poster: '/videos/dj-matslaav-mc-etsistents-poster.jpg', w: 480, h: 848 },
  { type: 'video', src: '/videos/kehahaalering-firmapeol.mp4', poster: '/videos/kehahaalering-firmapeol-poster.jpg', w: 720, h: 1280 },
  { type: 'video', src: '/videos/dj-keshob-matslaav.mp4', poster: '/videos/dj-keshob-matslaav-poster.jpg', w: 320, h: 576 },
  { type: 'video', src: '/videos/parimusmuusikapidu.mp4', poster: '/videos/parimusmuusikapidu-poster.jpg', w: 304, h: 640 },
  // Uued fotod — saksofonimehega ja sauna oma suuremad (pool laiust)
  { type: 'image', src: '/images/galerii-01.jpg', w: 1256, h: 944 },
  { type: 'image', src: '/images/galerii-02.jpg', size: 'half', w: 1600, h: 1067 },
  { type: 'image', src: '/images/galerii-03.jpg', w: 1067, h: 1600 },
  { type: 'image', src: '/images/galerii-04.jpg', size: 'half', w: 1600, h: 1067 },
  { type: 'image', src: '/images/galerii-05.jpg', w: 1067, h: 1600 },
]

const ROW = 8 // px — peab kattuma CSS grid-auto-rows väärtusega

export default function Galerii() {
  const { t } = useLang()
  const gridRef = useRef(null)

  // Arvutab igale elemendile grid-rea ulatuse tegeliku kõrguse järgi → masonry-efekt.
  useEffect(() => {
    const grid = gridRef.current
    if (!grid) return

    const layout = () => {
      const gap = parseFloat(getComputedStyle(grid).rowGap) || 0
      grid.querySelectorAll('.gallery-item').forEach((item) => {
        const media = item.firstElementChild
        if (!media) return
        const h = media.getBoundingClientRect().height
        if (!h) return
        const span = Math.max(1, Math.ceil((h + gap) / (ROW + gap)))
        item.style.gridRowEnd = `span ${span}`
      })
    }

    layout()

    const ro = new ResizeObserver(layout)
    ro.observe(grid)

    // pildid/videod laevad asünkroonselt → arvuta kõrgused uuesti
    const media = grid.querySelectorAll('img, video')
    media.forEach((m) => {
      m.addEventListener('load', layout)
      m.addEventListener('loadedmetadata', layout)
    })

    return () => {
      ro.disconnect()
      media.forEach((m) => {
        m.removeEventListener('load', layout)
        m.removeEventListener('loadedmetadata', layout)
      })
    }
  }, [])

  return (
    <section className="section">
      <Seo pageKey="gallery" />
      <div className="container">
        <div className="page-head">
          <p className="eyebrow reveal">{t.gallery.eyebrow}</p>
          <h1 className="page-title reveal">{t.gallery.title}</h1>
          <p className="section-subtitle reveal">{t.gallery.subtitle}</p>
        </div>

        <div className="gallery-grid" ref={gridRef}>
          {items.map((item, i) => (
            <div
              className={item.size === 'half' ? 'gallery-item g-half reveal' : 'gallery-item reveal'}
              key={item.src}
            >
              {item.type === 'video' ? (
                <video
                  src={item.src}
                  poster={item.poster}
                  title={t.gallery.captions[i]}
                  controls
                  preload="metadata"
                  playsInline
                  width={item.w}
                  height={item.h}
                />
              ) : (
                <img
                  src={item.src}
                  alt={t.gallery.captions[i]}
                  loading="lazy"
                  width={item.w}
                  height={item.h}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

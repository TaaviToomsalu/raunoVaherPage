import Seo from '../components/Seo.jsx'
import { useLang } from '../i18n.jsx'
import { SITE_URL, pathFor } from '../lib/routes-i18n.js'

// Snipcarti toote hind peab mõlemas keeles ühesugune jääma (data-item-price) —
// hinna muutmisel uuenda see + t.shop.product.price translations.js-is.
const PRODUCT_PRICE = '20.00'

// Pood pole veel avalikult müügis (Stripe/kättesaamine ootel).
// Ava müük: muuda false → true ja deploy — kõik muu (nupud, cart) tuleb tagasi.
const SHOP_ENABLED = false

export default function Pood() {
  const { t, lang } = useLang()
  const p = t.shop.product

  return (
    <section className="section">
      <Seo pageKey="shop" image="/images/kapsas.jpg" />
      <div className="container">
        <p className="eyebrow">{t.shop.eyebrow}</p>
        <h1 className="page-title">{t.shop.title}</h1>
        <p className="section-subtitle">{t.shop.subtitle}</p>

        {SHOP_ENABLED ? (
          <div className="product-grid">
            <article className="product-card reveal">
              <img
                className="product-image"
                src="/images/kapsas.jpg"
                alt={p.imgAlt}
                width="474"
                height="474"
                loading="lazy"
                decoding="async"
              />
              <div className="product-info">
                <h2 className="product-name">{p.name}</h2>
                <p className="product-price">
                  {p.price} <span className="product-unit">/ {p.unit}</span>
                </p>
                <p className="product-desc">{p.description}</p>
                <button
                  type="button"
                  className="btn snipcart-add-item"
                  data-item-id="kapsas"
                  data-item-price={PRODUCT_PRICE}
                  data-item-name={p.name}
                  data-item-description={p.description}
                  data-item-image="/images/kapsas.jpg"
                  data-item-url={SITE_URL + pathFor('shop', lang)}
                >
                  {t.shop.addToCart}
                </button>
                <p className="product-note">{t.shop.note}</p>
              </div>
            </article>
          </div>
        ) : (
          <div className="product-notice reveal">
            <p className="product-notice-title">{t.shop.disabledTitle}</p>
            <p>{t.shop.disabledText}</p>
          </div>
        )}
      </div>
    </section>
  )
}

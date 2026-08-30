// Saidi tekstid kahes keeles. Struktuur on mõlemas keeles identne,
// nii et komponendid saavad sama kuju kaudu õige keele teksti lugeda.
// Tekstid pärinevad failist Kodukas.txt (EESTI + ENGLISH versioon).

export const translations = {
  et: {
    skip: 'Jäta navigatsioon vahele',

    // Per-lehe SEO. `title` läheb <title>-sse, `description` meta-tag'i ja OG-sse.
    seo: {
      home: {
        title: 'Rauno Vaher — trummar, muusik ja rituaalide läbiviija',
        description:
          'Trummar, muusik ja rituaalide läbiviija Rauno Vaher — kontserdid, saunarituaalid, trummiõpetus ja muusikaprojekt Mats Laav. Broneeri esinemine.',
      },
      gallery: {
        title: 'Galerii — Rauno Vaher',
        description:
          'Fotod ja videod Rauno Vaheri esinemistelt, lavalt ja stuudiost — trummid, hääl ja Mats Laav.',
      },
      events: {
        title: 'Esinemised — Rauno Vaher',
        description:
          'Rauno Vaheri tulevased ja varasemad esinemised. Soovid Rauno enda üritusele? Võta ühendust.',
      },
      shop: {
        title: 'Pood — Rauno Vaher',
        description:
          'Rauno Vaheri pood — värsked kapsad otse kasvatajalt. Turvaline makse ja saatmine vormistatakse ostukorvis.',
      },
      contact: {
        title: 'Kontakt — Rauno Vaher',
        description:
          'Võta Rauno Vaheriga ühendust — broneeringud, koostööd, salvestused ja sessioonid. Vastan tavaliselt 1–2 päeva jooksul.',
      },
    },

    nav: {
      home: 'Avaleht',
      gallery: 'Galerii',
      events: 'Esinemised',
      shop: 'Pood',
      contact: 'Kontakt',
      cart: 'Ostukorv',
      openMenu: 'Ava menüü',
      closeMenu: 'Sulge menüü',
      langLabel: 'Keelevalik',
    },

    hero: {
      eyebrow: 'Rütm · Hääl · Kohalolu',
      imgAlt: 'Rauno Vaher trummide taga — energiline esitus',
      text: 'Muusik, trummar, rituaalide läbiviija ja väekate kogemuste looja. Rütmi, hääle, saunakommete ja kohalolu kaudu loon ruume, kus inimene võib taas kohtuda iseenda, teiste ning elava maailmaga enda ümber.',
      btnEvents: 'Tulevased sündmused',
      btnContact: 'Võta ühendust',
    },

    bio: {
      eyebrow: 'Minust',
      title: ['Kes ma', 'olen'],
      imgAlt: 'Rauno Vaher portree',
      paragraphs: [
        'Mina olen Rauno Vaher. Olen muusik, trummar, laulja ning kogemuste ja rituaalide läbiviija.',
        'Aastate jooksul olen uurinud rütmi, heli, hingamise ja inimliku ühenduse väge. Läbi kontsertide, saunarituaalide, trummiõpetuse ja isiklike kohtumiste kutsun inimesi sügavamasse kontakti iseenda ja eluga.',
        'Minu olemust inspireerivad loodus, pärimus, improvisatsioon ning rütmi universaalne keel.',
        'Olgu see laval, saunas või üks-ühele kohtumisel — minu eesmärk on alati sama: luua ruum, kus kohalolu, ehedus ja sisemine muutus saavad sündida loomulikul viisil.',
      ],
    },

    path: {
      eyebrow: 'Pakkumised',
      title: 'Minu tee',
      cards: [
        {
          title: 'Kontserdid ja esinemised',
          bookingService: 'performance',
          lead: 'Kollektiivid: Mats Laav, Kangelased, Araukaaria, Wäelaulud, Kristin Kalnapenk Bänd.',
          groups: [
            {
              label: 'Muusikalised rännakud, kus kohtuvad',
              items: ['Trummid', 'Hääl', 'Kitarrid', 'Elektroonilised helid', 'Improvisatsioon'],
            },
            {
              label: 'Sobib',
              items: ['Festivalidele', 'Retriitidele', 'Pühitsustele', 'Ettevõtete sündmustele', 'Eraüritustele'],
            },
          ],
        },
        {
          title: 'Saunarituaalid',
          bookingService: 'sauna',
          lead: 'Leili, laulu ja kohalolu vägi.',
          groups: [
            {
              label: 'Saunarituaalid ühendavad',
              items: ['Leili', 'Hingamise', 'Rütmi', 'Hääle', 'Looduslikud aroomid', 'Sügava lõõgastuse'],
            },
          ],
          foot: 'Iga rituaal sünnib vastavalt inimestele ja hetkele.',
        },
        {
          title: 'Trummiõpetus',
          bookingService: 'lesson',
          lead: 'Õpi rütme seestpoolt väljapoole.',
          groups: [
            {
              label: 'Tundides keskendume',
              items: ['Rütmitajule', 'Groovile', 'Koordinatsioonile', 'Muusikalisele väljendusele', 'Improvisatsioonile', 'Enesekindlusele'],
            },
          ],
          foot: 'Võimalikud nii era- kui grupitunnid.',
        },
        {
          title: 'Isiklikud kohtumised',
          bookingService: 'one-to-one',
          lead: 'Üks-ühele teekond läbi rütmi, hääle ja kohalolu.',
          groups: [
            {
              label: 'Kohtumised võivad toetada',
              items: ['Eneseavastamist', 'Loovust', 'Julgust', 'Elumuutusi', 'Tasakaalu leidmist', 'Selgust ja suunda'],
            },
          ],
          foot: 'Iga kohtumine on ainulaadne.',
        },
      ],
      bookingBtn: 'Küsi pakkumist',
    },

    matslaav: {
      eyebrow: 'Muusikaprojekt',
      title: 'Mats Laav',
      subtitle: 'Muusikaline kehastus',
      text: 'Mats Laav on Rauno Vaheri muusikaline alter ego. Orgaanilise house’i, hõimurütmide, elavate instrumentide, hääle ja elektrooniliste helimaastike kaudu loob Mats Laav muusikat, mis ühendab tantsupõranda ja sisemise rännaku.',
      imgAlt: 'Mats Laav — Rauno Vaheri muusikaline kehastus',
      btn: 'Kuula siin',
    },

    testimonials: {
      eyebrow: 'Tagasiside',
      title: 'Inimeste sõnad',
      quotes: [
        'Rauno loob ruumi, kus inimesed saavad olla päriselt nemad ise.',
        'Saunarituaal puudutas mind sügavamalt, kui oskasin oodata.',
        'Tema trummimängus on midagi ürgset ja elusat.',
      ],
    },

    video: {
      eyebrow: 'Kuula & vaata',
      title: 'Video',
    },

    cta: {
      pre: 'Vajad rütmi, mis ',
      accent: 'tunneb',
      post: '?',
      btn: 'Võta ühendust',
    },

    gallery: {
      eyebrow: 'Pildid ja videod',
      title: 'Galerii',
      subtitle: 'Hetked ja videod metsast, lavalt ja kuskilt nende vahel.',
      // Järjekord sama nagu items-massiivis failis Galerii.jsx.
      captions: [
        'Rauno Vaher — stuudios',
        'Rauno Vaher portree',
        'Rauno Vaher lähivaates',
        'Rauno Vaher trummide taga — energiline esitus',
        'Rauno Vaher lavalt',
        'Trummisoolo — live',
        'DJ Henessi & Mats Laav — live',
        'Mats Laav & MC Etsistents — live',
        'Kehahääle ring firmapeol',
        'DJ Keshob & Mats Laav — live',
        'Pärimusmuusika pidu',
        'Rauno Vaher — esinemiselt',
        'Rauno Vaher — laval',
        'Rauno Vaher — portree',
        'Rauno Vaher — esinemiselt',
        'Rauno Vaher — portree',
      ],
    },

    events: {
      eyebrow: 'Kalender',
      title: 'Esinemised',
      subtitle: 'Kus rütm järgmisena maandub. Soovid Rauno enda üritusele? Võta ühendust.',
      upcoming: 'Tulemas',
      past: 'Varasemad',
      comingSoon: 'Hetkel pole sündmusi kuvada.',
      btn: 'Broneeri kuupäev',
      upcomingGigs: [
        { date: '14.06.2026', venue: 'Suvefestival', city: 'Tallinn, Lauluväljak', band: 'Angus' },
        { date: '02.07.2026', venue: 'Jazzklubi õhtu', city: 'Tartu, Genialistide Klubi', band: 'Odd Hugo' },
        { date: '23.08.2026', venue: 'Eraüritus (pulm)', city: 'Pärnu', band: 'Emerald' },
      ],
      pastGigs: [
        { date: '12.04.2026', venue: 'Kevadkontsert', city: 'Tallinn, Kultuurikatel', band: 'Angus' },
        { date: '28.02.2026', venue: 'Stuudiosalvestus', city: 'Tallinn', band: 'Odd Hugo' },
        { date: '15.12.2025', venue: 'Jõulukontsert', city: 'Viljandi, Pärimusmuusika Ait', band: 'Emerald' },
      ],
    },

    shop: {
      eyebrow: 'Pood',
      title: 'Pood',
      subtitle: 'Värsked kapsad otse kasvatajalt. Makse ja saatmine vormistatakse turvaliselt ostukorvis.',
      product: {
        name: 'Kapsas',
        price: '20 €',
        unit: 'tk',
        description: 'Värske kapsas otse kasvatajalt.',
        imgAlt: 'Värske kapsas',
      },
      addToCart: 'Lisa ostukorvi',
      note: 'Makse toimub turvaliselt Snipcarti maksevahendusel.',
      disabledTitle: 'Pood on hetkel ehitamisel',
      disabledText: 'Tulge varsti tagasi — peatselt saab siit osta värskeid kapsaid.',
    },

    contact: {
      eyebrow: 'Ühendus',
      title: 'Kontakt',
      subtitle: 'Broneeringud, koostööd, salvestused, sessioonid — kirjuta julgelt. Vastan tavaliselt 1–2 päeva jooksul.',
      imgAlt: 'Rauno Vaher lähivaates',
      emailLabel: 'E-post',
      locationLabel: 'Asukoht',
      locationValue: 'Eesti',
      soonTitle: 'Peagi saadaval',
      process: {
        title: 'Kuidas broneerimine käib',
        steps: [
          'Kirjelda oma soovi ja vali sobiv teenus.',
          'Lisa võimalusel kuupäev, toimumiskoht ja osalejate arv.',
          'Rauno võtab sinuga ühendust, et detailid kokku leppida.',
        ],
      },
      form: {
        name: 'Nimi',
        email: 'E-post',
        service: 'Soovitud teenus',
        servicePh: 'Vali teenus',
        services: [
          { value: 'performance', label: 'Kontsert või esinemine' },
          { value: 'sauna', label: 'Saunarituaal' },
          { value: 'lesson', label: 'Trummiõpetus' },
          { value: 'one-to-one', label: 'Isiklik kohtumine' },
          { value: 'other', label: 'Muu päring' },
        ],
        date: 'Soovitud kuupäev',
        attendees: 'Osalejate arv',
        attendeesPh: 'Näiteks 20',
        location: 'Toimumiskoht',
        locationPh: 'Linn või täpsem asukoht',
        message: 'Sõnum',
        namePh: 'Sinu nimi',
        emailPh: 'sinu@email.ee',
        messagePh: 'Räägi oma üritusest või ideest — kuupäev, koht ja soovid.',
        submit: 'Saada sõnum',
        sending: 'Saadan…',
        sent: 'Aitäh! Sõnum on saadetud — vastan tavaliselt 1–2 päeva jooksul.',
        error: 'Midagi läks valesti. Proovi uuesti või kirjuta otse e-postiga.',
      },
      mail: {
        subject: 'Esinemise päring',
      },
    },

    footer: {
      tagline: 'Rütm metsast kosmoseni.',
    },

    notFound: {
      title: 'Lehte ei leitud',
      text: 'Seda lehte ei eksisteeri. Naase avalehele.',
      btn: 'Avaleht',
    },
  },

  en: {
    skip: 'Skip to content',

    seo: {
      home: {
        title: 'Rauno Vaher — Drummer, Musician & Ritual Facilitator',
        description:
          'Drummer, musician and ritual facilitator Rauno Vaher — concerts, sauna rituals, drum lessons and the music project Mats Laav. Book a performance.',
      },
      gallery: {
        title: 'Gallery — Rauno Vaher',
        description:
          'Photos and videos from Rauno Vaher’s performances, stage and studio — drums, voice and Mats Laav.',
      },
      events: {
        title: 'Events — Rauno Vaher',
        description:
          'Rauno Vaher’s upcoming and past performances. Want Rauno at your event? Get in touch.',
      },
      shop: {
        title: 'Store — Rauno Vaher',
        description:
          'Rauno Vaher’s store — fresh cabbages straight from the grower. Secure payment and shipping are handled in the cart.',
      },
      contact: {
        title: 'Contact — Rauno Vaher',
        description:
          'Get in touch with Rauno Vaher — bookings, collaborations, recordings and sessions. I usually reply within 1–2 days.',
      },
    },

    nav: {
      home: 'Home',
      gallery: 'Gallery',
      events: 'Events',
      shop: 'Store',
      contact: 'Contact',
      cart: 'Cart',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      langLabel: 'Language',
    },

    hero: {
      eyebrow: 'Rhythm · Voice · Presence',
      imgAlt: 'Rauno Vaher behind the drums — an energetic performance',
      text: 'Musician, drummer, ritual facilitator, and guide of transformative experiences. Through rhythm, voice, sauna rituals, and conscious presence, I create spaces where people can reconnect with themselves, each other, and the living world around them.',
      btnEvents: 'Upcoming Events',
      btnContact: 'Book a Session',
    },

    bio: {
      eyebrow: 'About',
      title: ['Who I', 'Am'],
      imgAlt: 'Portrait of Rauno Vaher',
      paragraphs: [
        'My name is Rauno Vaher. I am a musician, drummer, vocalist, and facilitator of ceremonial experiences.',
        'For many years, I have explored the power of rhythm, sound, breath, and human connection. Through concerts, sauna rituals, drum teachings, and personal sessions, I invite people into a deeper relationship with themselves and life.',
        'My work is inspired by nature, ancient traditions, improvisation, and the universal language of rhythm.',
        'Whether performing on stage, guiding a sauna ritual, or sitting with someone one-on-one, my intention remains the same: to create a space where authenticity, presence, and transformation can arise naturally.',
      ],
    },

    path: {
      eyebrow: 'Offerings',
      title: 'My Path',
      cards: [
        {
          title: 'Concerts & Performances',
          bookingService: 'performance',
          lead: 'Collectives: Mats Laav, Kangelased, Araukaaria, Wäelaulud, Kristin Kalnapenk Bänd.',
          groups: [
            {
              label: 'Immersive journeys combining',
              items: ['Drums', 'Vocals', 'Guitar', 'Electronic sounds', 'Improvisation'],
            },
            {
              label: 'Available for',
              items: ['Festivals', 'Retreats', 'Ceremonies', 'Corporate events', 'Private gatherings'],
            },
          ],
        },
        {
          title: 'Sauna Rituals',
          bookingService: 'sauna',
          lead: 'Traditional and contemporary sauna experiences.',
          groups: [
            {
              label: 'Sauna rituals combine',
              items: ['Steam and heat', 'Breathwork', 'Rhythm', 'Voice', 'Natural scents', 'Deep relaxation'],
            },
          ],
          foot: 'Each ritual is unique and adapted to the group and occasion.',
        },
        {
          title: 'Drum Lessons',
          bookingService: 'lesson',
          lead: 'Learn rhythm from the inside out.',
          groups: [
            {
              label: 'Lessons focus on',
              items: ['Timing', 'Groove', 'Coordination', 'Musicality', 'Improvisation', 'Confidence'],
            },
          ],
          foot: 'Private and group lessons available.',
        },
        {
          title: 'One-to-One Sessions',
          bookingService: 'one-to-one',
          lead: 'Personal guidance through rhythm, voice, presence, and conversation.',
          groups: [
            {
              label: 'These sessions support',
              items: ['Self-discovery', 'Creative expression', 'Confidence', 'Life transitions', 'Grounding and clarity'],
            },
          ],
          foot: 'Each session is tailored to your needs.',
        },
      ],
      bookingBtn: 'Request a quote',
    },

    matslaav: {
      eyebrow: 'Music Project',
      title: 'Mats Laav',
      subtitle: 'A musical alter ego',
      text: 'Mats Laav is the musical alter ego of Rauno Vaher. Blending organic house, tribal rhythms, live instruments, vocals, and electronic soundscapes, Mats Laav creates music that bridges the dance floor and the inner journey.',
      imgAlt: 'Mats Laav — the musical alter ego of Rauno Vaher',
      btn: 'Listen Here',
    },

    testimonials: {
      eyebrow: 'Testimonials',
      title: 'What People Say',
      quotes: [
        'Rauno creates a space where people feel safe, open, and connected.',
        'The sauna ritual was one of the most powerful experiences I have had.',
        'His drumming carries something ancient and deeply alive.',
      ],
    },

    video: {
      eyebrow: 'Listen & watch',
      title: 'Video',
    },

    cta: {
      pre: 'Need a rhythm that ',
      accent: 'feels',
      post: '?',
      btn: 'Get in touch',
    },

    gallery: {
      eyebrow: 'Photos and videos',
      title: 'Gallery',
      subtitle: 'Moments and videos from the forest, the stage, and somewhere in between.',
      // Order matches the items array in Galerii.jsx.
      captions: [
        'Rauno Vaher — in the studio',
        'Portrait of Rauno Vaher',
        'Rauno Vaher up close',
        'Rauno Vaher behind the drums — an energetic performance',
        'Rauno Vaher on stage',
        'Drum solo — live',
        'DJ Henessi & Mats Laav — live',
        'Mats Laav & MC Etsistents — live',
        'Body-voice circle at a company party',
        'DJ Keshob & Mats Laav — live',
        'Folk music celebration',
        'Rauno Vaher — performing',
        'Rauno Vaher — on stage',
        'Rauno Vaher — portrait',
        'Rauno Vaher — performing',
        'Rauno Vaher — portrait',
      ],
    },

    events: {
      eyebrow: 'Calendar',
      title: 'Events',
      subtitle: 'Where the rhythm lands next. Want Rauno at your event? Get in touch.',
      upcoming: 'Upcoming',
      past: 'Past',
      comingSoon: 'No events to display at the moment.',
      btn: 'Book a date',
      upcomingGigs: [
        { date: '14.06.2026', venue: 'Summer Festival', city: 'Tallinn, Song Festival Grounds', band: 'Angus' },
        { date: '02.07.2026', venue: 'Jazz Club Night', city: 'Tartu, Genialistide Klubi', band: 'Odd Hugo' },
        { date: '23.08.2026', venue: 'Private event (wedding)', city: 'Pärnu', band: 'Emerald' },
      ],
      pastGigs: [
        { date: '12.04.2026', venue: 'Spring Concert', city: 'Tallinn, Kultuurikatel', band: 'Angus' },
        { date: '28.02.2026', venue: 'Studio Recording', city: 'Tallinn', band: 'Odd Hugo' },
        { date: '15.12.2025', venue: 'Christmas Concert', city: 'Viljandi, Traditional Music Centre', band: 'Emerald' },
      ],
    },

    shop: {
      eyebrow: 'Store',
      title: 'Store',
      subtitle: 'Fresh cabbages straight from the grower. Payment and shipping are handled securely in the cart.',
      product: {
        name: 'Cabbage',
        price: '€20',
        unit: 'piece',
        description: 'Fresh cabbage straight from the grower.',
        imgAlt: 'A fresh cabbage',
      },
      addToCart: 'Add to cart',
      note: 'Payments are processed securely via Snipcart.',
      disabledTitle: 'The store is currently being built',
      disabledText: 'Check back soon — fresh cabbages will be available here shortly.',
    },

    contact: {
      eyebrow: 'Connect',
      title: 'Contact',
      subtitle: 'Bookings, collaborations, recordings, sessions — feel free to write. I usually reply within 1–2 days.',
      imgAlt: 'Rauno Vaher up close',
      emailLabel: 'Email',
      locationLabel: 'Location',
      locationValue: 'Estonia',
      soonTitle: 'Coming soon',
      process: {
        title: 'How booking works',
        steps: [
          'Describe what you are looking for and choose a service.',
          'If possible, add the date, location, and number of participants.',
          'Rauno will get in touch to agree on the details.',
        ],
      },
      form: {
        name: 'Name',
        email: 'Email',
        service: 'Service requested',
        servicePh: 'Choose a service',
        services: [
          { value: 'performance', label: 'Concert or performance' },
          { value: 'sauna', label: 'Sauna ritual' },
          { value: 'lesson', label: 'Drum lesson' },
          { value: 'one-to-one', label: 'One-to-one session' },
          { value: 'other', label: 'Other inquiry' },
        ],
        date: 'Preferred date',
        attendees: 'Number of participants',
        attendeesPh: 'For example, 20',
        location: 'Location',
        locationPh: 'City or venue',
        message: 'Message',
        namePh: 'Your name',
        emailPh: 'you@email.com',
        messagePh: 'Tell me about your event or idea — date, place and wishes.',
        submit: 'Send message',
        sending: 'Sending…',
        sent: 'Thank you! Your message has been sent — I usually reply within 1–2 days.',
        error: 'Something went wrong. Please try again or email me directly.',
      },
      mail: {
        subject: 'Booking inquiry',
      },
    },

    footer: {
      tagline: 'Rhythm from forest to cosmos.',
    },

    notFound: {
      title: 'Page not found',
      text: 'This page does not exist. Return to the home page.',
      btn: 'Home',
    },
  },
}

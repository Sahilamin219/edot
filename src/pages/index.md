---
title: Home
white_header: true
sections:
  - type: hero_section
    section_id: hero_section
    background_image: images/header.jpg
    background_image_opacity: 80
    content: >-
      # Real, beautiful plants right to your door

      Don't forget to add your Snipcart API key to the site's configuration to
      enable Cart actions.
    actions:
      - title: See all items
        url: /store
        arrow: true
        style: primary
  - type: featured_products_section
    section_id: best_sellers_section
    title: Best sellers
    icon: true
    light_title: true
    featured_products:
      - src/pages/products/plant1.md
      - src/pages/products/plant3.md
      - src/pages/products/plant5.md
      - src/pages/products/plant7.md
  - type: featured_categories_section
    section_id: featured_categories_section
    featured_categories:
      - src/pages/category/bigplants.md
      - src/pages/category/cactuses.md
  - type: testimonials_section
    section_id: testimonials_section
    testimonials:
      - author:
          name: John Dope
          location: 'Colorado, USA'
        text: >-
          I didn't know the Snipcart guys were into herbs as well! How beautiful
          is that Planty theme. I'm going to launch a killer JAMstack e-commerce
          store using this for sure.
      - author:
          name: Major Payne
          location: 'VA, USA'
        text: >-
          Well I'll be d*mned. These plants really ARE greener than any of my
          recruits.
  - type: promotion_section
    section_id: promotion_section
    title: A new home interior for summer
    subtitle: from $149.99
    image: images/promo.jpg
    cta:
      title: Discover
      url: /store
      style: secondary
template: home
---

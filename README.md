# Human Habits

A content-focused habit-building guide built on the Astro source of the [Elias Vent template](https://github.com/agnilem/elias-vent-astro). The template's layouts, visual design, and motion are retained; the homepage and five case-study routes explain identity, cues, small actions, environment, and reflection.

## Run locally

```sh
npm ci
npm run dev
npm run build
npm run preview
```

The static build is written to `dist/`. Set `SITE_URL` to the deployment origin when building for production to generate canonical, Open Graph, and sitemap URLs.

## Edit content

- `src/content/site.json` contains the homepage, navigation, About section, and shared copy.
- `src/content/projects/*.md` contains the five habit pillars. Each file also supplies a slide in the homepage carousel; its filename remains the route slug.
- `public/assets/` contains locally stored Pexels photographs, converted to WebP for the site.
- `src/styles/global.css` contains the existing template design system; it is unchanged for the content adaptation.

Contact is intentionally not rendered or linked while the section is hidden.

## Image sources

Photography comes from Pexels and is used under the [Pexels License](https://www.pexels.com/license/). The source photo IDs used in `public/assets/` are [3768916](https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg), [3822622](https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg), [3822623](https://images.pexels.com/photos/3822623/pexels-photo-3822623.jpeg), [3822629](https://images.pexels.com/photos/3822629/pexels-photo-3822629.jpeg), [3822890](https://images.pexels.com/photos/3822890/pexels-photo-3822890.jpeg), [4056723](https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg), [4498482](https://images.pexels.com/photos/4498482/pexels-photo-4498482.jpeg), and [4498606](https://images.pexels.com/photos/4498606/pexels-photo-4498606.jpeg).

## License

The underlying template is MIT licensed; see [`LICENSE`](LICENSE). Sora is distributed under the SIL Open Font License 1.1.

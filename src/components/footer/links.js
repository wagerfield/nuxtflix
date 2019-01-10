import { REPOSITORY, CONTENTFUL, NETLIFY, NUXT } from "~/core/links"

export default () => [
  {
    key: "content-links",
    title: "Content",
    links: [
      {
        key: "films",
        path: "/films",
        text: "Films"
      },
      {
        key: "about",
        path: "/about",
        text: "About"
      }
    ]
  },
  {
    key: "project-links",
    title: "Project",
    links: [
      {
        key: "typography",
        path: "/typography",
        text: "Typography"
      },
      {
        key: "palette",
        path: "/palette",
        text: "Palette"
      },
      {
        key: "components",
        path: "/components",
        text: "Components"
      },
      {
        key: "error",
        path: "/error",
        text: "Error"
      }
    ]
  },
  {
    key: "external-links",
    title: "External",
    links: [
      {
        key: "repository",
        href: REPOSITORY,
        text: "GitHub"
      },
      {
        key: "nuxt",
        href: NUXT,
        text: "Nuxt"
      },
      {
        key: "contentful",
        href: CONTENTFUL,
        text: "Contentful"
      },
      {
        key: "netlify",
        href: NETLIFY,
        text: "Netlify"
      }
    ]
  }
]

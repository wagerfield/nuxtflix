require("dotenv").config()

const branch = require("git-branch").sync()

const CONTENTFUL_DELIVERY_HOST = "cdn.contentful.com"
const CONTENTFUL_PREVIEW_HOST = "preview.contentful.com"
const BRANCH = process.env.BRANCH || branch || "master"

const isMasterBranch = BRANCH === "master"

export default {
  CONTENTFUL_HOST: isMasterBranch
    ? CONTENTFUL_DELIVERY_HOST
    : CONTENTFUL_PREVIEW_HOST,
  CONTENTFUL_ACCESS_TOKEN: isMasterBranch
    ? process.env.CONTENTFUL_CDA_ACCESS_TOKEN
    : process.env.CONTENTFUL_CPA_ACCESS_TOKEN,
  CONTENTFUL_ENVIRONMENT: process.env.CONTENTFUL_ENVIRONMENT || "master",
  CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID
}

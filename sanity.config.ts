import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk"; // https://github.com/sanity-io/next-sanity
import schemas from "./sanity/schemas"

const config = defineConfig({
  projectId: "jjqrmupu",
  dataset: "production",
  title: "Contemporary Ceramics Sanity Studio",
  apiVersion: "2023-10-09",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: {types: schemas }
})

export default config

"use client" // this component should not be rendered on the server side but in the browser on the client side.

import config from "@/sanity.config";
import { NextStudio } from "next-sanity/studio";

export default function AdminPage() {
  return <NextStudio config={config} />
}

// this file is for reding data from the client (in this case is NEXTJS)
// this is why the contents of the file do not go under sanity.config
// the sanity config is for creating the studio (opposite side)
const config = {
  projectId: "jjqrmupu",
  dataset: "production",
  apiVersion: "2023-10-09",
  useCdn: true, // `false` if you want to ensure fresh data
}

export default config

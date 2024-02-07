import { defineConfig } from 'sanity';
import { structureTool } from "sanity/structure"

const config = defineConfig({
    projectId: "uqar5fmh",
    dataset: "production",
    title: "NYC Noodle Review",
    apiVersion: "2024-02-7",
    basePath: "/admin",
    plugins: [structureTool()]
})

export default config
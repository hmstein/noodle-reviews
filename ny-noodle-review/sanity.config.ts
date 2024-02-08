import { defineConfig } from 'sanity';
import { structureTool } from "sanity/structure"
import schemas from './sanity/schemas'

const config = defineConfig({
    projectId: "uqar5fmh",
    dataset: "production",
    title: "NYC Noodle Review",
    apiVersion: "2024-02-07",
    basePath: "/admin",
    plugins: [structureTool()],
    schema: {types: schemas}
});

export default config
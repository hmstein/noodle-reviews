import { defineConfig } from 'sanity';
import { structureTool } from "sanity/structure"
import schemas from './sanity/schemas'
import { visionTool } from '@sanity/vision';

const config = defineConfig({
    projectId: "uqar5fmh",
    dataset: "production",
    title: "NYC Noodle Review",
    apiVersion: "2024-02-07",
    basePath: "/admin",
    plugins: [
        visionTool(),
        structureTool()
    ],
    schema: {types: schemas}
});

export default config
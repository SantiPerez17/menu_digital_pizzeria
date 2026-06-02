import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import category from './schemas/category'
import pizza from './schemas/pizza'
import siteConfig from './schemas/siteConfig'

export default defineConfig({
  name: 'default',
  title: 'Menú Pizzería',
  projectId: 'fpf8d751',
  dataset: 'production',
  plugins: [structureTool(), visionTool()],
  schema: {
    types: [siteConfig, category, pizza],
  },
})

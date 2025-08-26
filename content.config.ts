import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    landing: defineCollection({
      type: 'page',
      source: 'index.md'
    }),
    obsidian: defineCollection({
      type: 'page',
      source: {
        repository: 'https://github.com/bolokoz/yurio',
        include: 'content/**/*.md',
        exclude: ['README.md', '/templates/**']
      }
      // Define custom schema for docs collection
      // schema: z.object({
      //   tags: z.array(z.string()),
      //   image: z.string(),
      //   date: z.date()
      // })
    }),
    docs: defineCollection({
      type: 'page',
      source: {
        include: '**',
        exclude: ['index.md']
      },
      schema: z.object({
        links: z.array(z.object({
          label: z.string(),
          icon: z.string(),
          to: z.string(),
          target: z.string().optional()
        })).optional()
      })
    })
  }
})

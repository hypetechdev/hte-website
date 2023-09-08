import { z, defineCollection } from "astro:content"

const notesCollection = defineCollection({
    schema: z.object({
        layout: z.string().optional(),
        title: z.string(),
        pubDate: z.string(),
        author: z.string(),
        summary: z.string(),
        categories: z.array(z.string()),
    }),
})

export const collections = {
    notes: notesCollection,
}

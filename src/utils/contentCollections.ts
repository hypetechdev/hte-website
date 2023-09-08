import { type CollectionEntry, getCollection } from "astro:content"

const sortByDate = (a: CollectionEntry<"notes">, b: CollectionEntry<"notes">) =>
    new Date(b.data.pubDate).valueOf() - new Date(a.data.pubDate).valueOf()

export const getSortedNotes = async (): Promise<CollectionEntry<"notes">[]> => {
    const notes = await getCollection("notes")
    // sort by date notes collection
    return notes.sort(sortByDate)
}

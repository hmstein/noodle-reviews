import { createClient, groq } from "next-sanity";

export async function getProjects() {
    const client = createClient({
        projectId: "uqar5fmh",
        dataset: "production",
        apiVersion: "2024-02-07",
    })

    return client.fetch(
        groq`*[_type == "project"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content,
        }`
    )
}
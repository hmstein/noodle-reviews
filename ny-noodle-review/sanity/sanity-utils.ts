import { Review } from "@/types/Review";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";


export async function getReview(slug: string): Promise<Review> {
    return createClient(clientConfig).fetch(
      groq`*[_type == "review" && slug.current == $slug][0]{
        _id,
        _createdAt,
        title,
        "slug": slug.current,
        dateOfMeal,
        "image": image.asset->url,
        tldr,
        content,
        restaurant,
        dish
      }`,
      { slug }
    )
  }
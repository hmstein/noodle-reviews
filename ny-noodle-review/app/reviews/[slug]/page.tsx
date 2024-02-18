import { getReview } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

type Props = {
  params: { slug: string };
};

export default async function Review({ params }: Props) {
  const slug = params.slug;
  const review = await getReview(slug);

  return (
    <>
      <h1>{review.title}</h1>
      <i>{review.tldr}</i>
      <div>{review.restaurant.address.state}</div>
      <PortableText value={review.content} />
    </>
  );
}

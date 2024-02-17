import { getReview } from "@/sanity/sanity-utils";

type Props = {
  params: { slug: string };
};

export default async function Review({ params }: Props) {
  const slug = params.slug;
  const review = await getReview(slug);

  return (
    <>
      <div>{review.title}</div>
      <i>{review.tldr}</i>
    </>
  );
}

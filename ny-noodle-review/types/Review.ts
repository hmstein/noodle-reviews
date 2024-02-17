import { PortableTextBlock } from "sanity";
import { Restaurant } from "./Restaurant";
import { Dish } from "./Dish";

export type Review = {
    _id: string;
    _createdAt: Date;
    title: string;
    slug: string;
    dateOfMeal: Date;
    image: string;
    tldr: string;
    content: PortableTextBlock[];
    restaurant: Restaurant;
    dish: Dish;
}
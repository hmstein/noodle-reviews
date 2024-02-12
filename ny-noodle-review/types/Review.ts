import { PortableTextBlock } from "sanity";
import { Restaurant } from "./Restaurant";
import { Dish } from "./Dish";

export type Project = {
    _id: string;
    _createdAt: Date;
    name: string;
    slug: string;
    dateOfMeal: Date;
    image: string;
    content: PortableTextBlock[];
    restaurant: Restaurant;
    dish: Dish;
}
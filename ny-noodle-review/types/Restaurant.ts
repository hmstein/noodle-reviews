import { Address } from "./Address";

export type Restaurant = {
    _id: string;
    _createdAt: Date;
    name: string;
    website: string;
    address: Address;
}
const review = {
    name: 'review',
    title: 'reviews',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {source: 'title'}
        },
        {
            name: 'dateOfMeal',
            title: 'Date of Meal',
            type: 'date'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: { hotspot: true },
            fields: [{
                name: 'altText',
                type: 'string',
                title: 'Alternative text',
              },]
        },
        {
            name: 'tldr',
            title: 'TL;DR',
            type: 'string'
        },
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{ type: 'block'}]
        },
        {
            name: 'restaurant',
            title: 'Restaurant',
            type: 'reference',
            to: [
                {type: 'restaurant'},
              ]
        },
        {
            name: 'dish',
            title: 'Dish',
            type: 'reference',
            to: [
                {type: 'dish'},
              ]
        }
    ]
};

export default review;
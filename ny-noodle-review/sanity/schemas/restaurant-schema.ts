const restaurant = {
    name: 'restaurant',
    title: 'restaurants',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'website',
            title: 'Website',
            type: 'url'
        },
        {
            name: 'address',
            title: 'Address',
            type: 'document',
            fields: [{
                name: 'address1',
                title: 'Address Line 1',
                type: 'string'
            },
            {
                name: 'address2',
                title: 'Address Line 2',
                type: 'string'
            },
            {
                name: 'city',
                title: 'City',
                type: 'string'
            },
            {
                name: 'state',
                title: 'State',
                type: 'string'
            },
            {
                name: 'zip',
                title: 'ZIP Code',
                type: 'string'
            }
            ]
        }
    ]
};

export default restaurant;
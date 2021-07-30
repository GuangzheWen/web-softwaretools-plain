import { Pet } from '../models/pet'

export const pets: Pet[] = [
    {
        id: 10000001,
        category: {
            id: 0,
            name: 'cat'
            },
        name: 'test01',
        photoUrls: [
                'string'
            ],
        tags: [
                {
                    id: 0,
                    name: 'string'
                }
            ],
        status: 'team2'
    },
    {
        id: 10000002,

        name: 'test02',
        photoUrls: [
                'string'
            ],
        tags: [
                {
                    id: 0,
                    name: 'string'
                }
            ],
        status: 'team2'
    }

]
const example1 = {
    identity: {
        firstName: 'John',
        lastName: 'Wick',
        email: 'johnwick@gmail.com',
        address: {
            number: '31',
            street: 'Roadway to Hell',
            zipCode: '666',
            town: 'Helltown',
        },
        currentTitle: 'Serial justice warrior',
        description: 'I make justice everywhere, everyday.',
        linkedin: 'jWick@linkedin.fr',
        phone: '5550687',
        gitHub: 'jWick@github.com',
    },
    experience: {
        title: 'Hitman',
        dateOfEntry: new Date('2005-01-01'),
        dateOfEnd: new Date(),
        id: 'example1_exp',
        current: false,
        company: 'EverGrande',
    },
    diploma: {
        title: 'Master of Kung-Fu',
        school: 'Shanghai Master',
        id: 'example1_dip',
        dateOfObtention: new Date(),
    },
    skills: [
        {
            name: 'Make fast pew pew',
            id: 'example1_s1',
        },
        {
            name: 'Very discreet',
            id: 'example1_s2',
        },
        {
            name: 'Love cats & dogs',
            id: 'example1_s3',
        },
        {
            name: 'I might be a good cook too :)',
            id: 'example1_s4',
        },
    ],
    hobbies: [
        {
            name:'Cooking',
            id:'ex1_h1'
        }, 
        {
            name:'Fighting with guns',
            id:'ex1_h2'
        }, 
        {
            name:'Traveling cuz I can',
            id:'ex1_h3'
        }, 
        {
            name:'Coding is fun too',
            id:'ex1_h4'
        }, 
    ]
};

export {example1};

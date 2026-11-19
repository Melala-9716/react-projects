const menuData = [
    {
        id: 1,
        label: "Menu 1",
        children: [
            {
                id: 11,
                label: "Menu 1.1",
                children: [
                    {
                        id: 111,
                        label: "Menu 1.1.1",
                        children: []
                    }
                ]
            },
            {
                id: 12,
                label: "Menu 1.2",
                children: []
            }
        ]
    },
    {
        id: 2,
        label: "Menu 2",
        children: [
            {
                id: 21,
                label: "Menu 2.1",
                children: []
            },
            {
                id: 22,
                label: "Menu 2.2",
                children: []
            }
        ]
    },
    {
        id: 3,
        label: "Menu 3",
        children: [
            {
                id: 31,
                label: "Menu 3.1",
                children: []
            }
        ]
    }
];

export default menuData;
let data = [
    {
        "inventory_id": 9382,
        "name": "Brown Chair",
        "type": "furniture",
        "tags": [
            "chair",
            "furniture",
            "brown"
        ],
        "purchased_at": 1579190471,
        "placement": {
            "room_id": 3,
            "name": "Meeting Room"
        }
    },
    {
        "inventory_id": 9380,
        "name": "Big Desk",
        "type": "furniture",
        "tags": [
            "desk",
            "furniture",
            "brown"
        ],
        "purchased_at": 1579190642,
        "placement": {
            "room_id": 3,
            "name": "Meeting Room"
        }
    },
    {
        "inventory_id": 2932,
        "name": "LG Monitor 50 inch",
        "type": "electronic",
        "tags": [
            "monitor"
        ],
        "purchased_at": 1579017842,
        "placement": {
            "room_id": 3,
            "name": "Lavender"
        }
    },
    {
        "inventory_id": 232,
        "name": "Sharp Pendingin Ruangan 2PK",
        "type": "electronic",
        "tags": [
            "ac"
        ],
        "purchased_at": 1578931442,
        "placement": {
            "room_id": 5,
            "name": "Dhanapala"
        }
    },
    {
        "inventory_id": 9382,
        "name": "Alat Makan",
        "type": "tableware",
        "tags": [
            "spoon",
            "fork",
            "tableware"
        ],
        "purchased_at": 1578672242,
        "placement": {
            "room_id": 10,
            "name": "Rajawali"
        }
    }
]



filterRoom = (id) => {
    if (typeof (id) != "number") {
        console.log("Wrong Type of Input")
        return
    }
    let filterData = data.filter(i => {
        return i.placement.room_id === id
    })
    console.log(filterData)
}

filterElectronic = () => {
    let filterData = data.filter(i => {
        return i.type == 'electronic'
    })
    console.log(filterData)
}

filterFurniture = () => {
    let filterData = data.filter(i => {
        return i.type == 'furniture'
    })
    console.log(filterData)
}

filterPurchased = () => {
    let filterData = data.filter(i => {
        let dateOrder = new Date("2020-01-19")
        let filterDate = new Date(i.purchased_at * 1000)
        return filterDate < dateOrder
    })
    console.log(filterData)
}

filterBrown = () => {
    let filterData = data.filter(i => {
        return i.tags.includes("brown")
    })
    console.log(filterData)
}


// filterRoom(3)
// filterElectronic()
// filterFurniture()
// filterPurchased()
filterBrown()
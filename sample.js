myObj = { "People": 
[
    {
        "id":"1",
        "FirstName":"Benjamin",
        "LastName":"Finkel",
        "Email":"ben.finkel@cbtnetggets.com"
    },
    {
        "id":2,
        "FirstName":"Jane",
        "LastName":"doe",
        "Email":"jane.doe@cbtnetggets.com",
        "Active": false
    },
    {
        "id":"3",
        "FirstName":"Pat",
        "LastName":"Smith",
        "Email":"pat.smith@cbtnetggets.com"
    }
]
}

console.log(typeof myObj.People[1].Active);
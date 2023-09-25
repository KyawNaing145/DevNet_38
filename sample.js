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
        "Name": ["Jane","Doe"],
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

console.log(myObj.People[1].Name[1]);
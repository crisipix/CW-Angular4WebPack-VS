export function GetCalendarEvents(){
   // let events: any[];

    return [
        {
            "title": "Meeting Event",
            "start": "2017-05-12T16:00:00"
        }, 
        {
            "title": "Second Meeting Event",
            "start": "2017-05-12T13:00:00"
        },
        {
            "title": "All Day Event",
            "start": "2017-05-13"
        },
        {
            "title": "MSFT Long Event",
            "start": "2017-05-07",
            "end": "2017-05-10"
        },
        {
            "title": "Long Event",
            "start": "2017-05-23",
            "end": "2017-05-25"
        },
        {
            "title": "Repeating Event",
            "start": "2017-05-09T16:00:00"
        },
        {
            "title": "Repeating Event",
            "start": "2017-05-16T16:00:00"
        },
        {
            "title": "Conference",
            "start": "2017-05-21",
            "end": "2017-05-23"
        },
         {
            "title": "Mid-day Conference",
            "start": "2017-05-21T16:00",
            "end": "2017-05-23T16:00"
        },
        {
            "title": "End Of Month Long Event",
            "start": "2017-05-27",
            "end": "2017-05-30"
         },
        //
        {
            "title": "Meeting Event",
            "start": "2017-07-12T16:00:00"
        },
        {
            "title": "Second Meeting Event",
            "start": "2017-07-12T13:00:00"
        },
        {
            "title": "All Day Event",
            "start": "2017-07-13"
        },
        {
            "title": "MSFT Long Event",
            "start": "2017-07-07",
            "end": "2017-07-10"
        },
        {
            "title": "Long Event",
            "start": "2017-07-23",
            "end": "2017-07-25"
        },
        {
            "title": "Repeating Event",
            "start": "2017-07-09T16:00:00"
        },
        {
            "title": "Repeating Event",
            "start": "2017-07-16T16:00:00"
        },
        {
            "title": "Conference",
            "start": "2017-07-21",
            "end": "2017-07-23"
        },
        {
            "title": "Mid-day Conference",
            "start": "2017-07-21T16:00",
            "end": "2017-07-23T16:00"
        },
        {
            "title": "End Of Month Long Event",
            "start": "2017-07-27",
            "end": "2017-07-30"
        }
    ];
    
}

export function GetUserModel() {
    return {
        State: 'Wyoming',
        FirstName: 'Ben',
        LastName: 'Smith',
        Address: "1234 South Street",
        Address2: "Apt 2",
        City: "New City",
        ZipCode: "55555",
        Birthdate: "05/05/1985"
    };
}
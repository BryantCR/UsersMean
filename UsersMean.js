users = [
    {
        fname: "Kermit",
        lname: "the Frog",
        languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
        interests: {
            music: ["guitar", "flute"],
            dance: ["tap", "salsa"],
            television: ["Black Mirror", "Stranger Things"]
        }
    },
    {
        fname: "Winnie",
        lname: "the Pooh",
        languages: ["Python", "Swift", "Java"],
        interests: {
            food: ["honey", "honeycomb"],
            flowers: ["honeysuckle"],
            mysteries: ["Heffalumps"]
        }
    },
    {
        fname: "Arthur",
        lname: "Dent",
        languages: ["JavaScript", "HTML", "Go"],
        interests: {
            space: ["stars", "planets", "improbability"],
            home: ["tea", "yellow bulldozers"]
        }
    }
]

/*let values = Object.values( users.interests );
console.log( values );*/

function userLanguages(users){
    for(let user of users){
        console.log(user.fname, user.lname + " " + "knows" + " " + user.languages);
        if(user.interests.music != undefined || user.interests.dance != undefined || user.interests.television != undefined){
            console.log(user.fname, user.lname + " Is also interested in " + user.interests.music + " " + user.interests.dance + " " + user.interests.television);
        }
        if(user.interests.food != undefined || user.interests.flowers != undefined || user.interests.mysteries != undefined){
            console.log(user.fname, user.lname + " Is also interested in " + user.interests.food + " " + user.interests.flowers + " " + user.interests.mysteries);
        }
        if(user.interests.space != undefined || user.interests.home != undefined){
            console.log(user.fname, user.lname + " Is also interested in " + user.interests.space + " " +user.interests.home);
        }
    }
}

console.log(userLanguages(users));
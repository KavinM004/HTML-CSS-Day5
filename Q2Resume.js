//---------------------------------------RESUME Data in JSON Format------------------------------------------------------

let resume = `{
    "name": "Kavin M",
    "title": "Website Developer",
    "about": "Doing Course in GUVI, Incubated Company",
    
    "personalDetails":{
        "email": "karthickkavin004@gmail.com",
        "mobile": ["6369155656", "9445175681"],
        "address": "Sangakiri, Salem, Tamilnadu, India",
        "website": "https://kavinblog.com",
        "linkedIn": "linkedin.com/in/swastic-kumar-a56910157",
        
        "workExperience":{
            "companyName": "MCKN private Ltd",
            "place": "Sangakiri",
            "workAt": "Freelance",
            "workTitle": ["Trainee", " Website Developer", "Affiliate Marketer"],
            "periodOfWorked": "01/2019 - 02/2023",
            
            "education":{
                "bachelorDegree": "B.E-Computer Science and ENGINEERING",
                "place": "KSR College of Engineering, Namakkal",
                "passoutYear": "2023",
                "addonCourse" : ["MERN Stack-GUVI, Chennai (Online)"],
                "skills": ["JavaScript", "Java", "HTML", "CSS", "AWS", "DSA"],
                    
                    "achievement":{
                        "selfLearned": ["UI/UX Design", "Hosting Website"]
                    }
}}
}}}`;
let objFormat=JSON.parse(resume);
console.log(objFormat.personalDetails.workExperience.education.addonCourse[1]);

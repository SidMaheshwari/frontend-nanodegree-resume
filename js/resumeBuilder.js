var education={
    "schools": [
        {
            "name": "GIIS",
            "location": "Singapore",
            "majors": "IB"
        },
        {
            "Name": "UIUC",
            "Location": "Chicago",
            "majors": [
                "CS"
            ],
            "URl": "cs.illinois.edu"
        }
    ],
    "onlineCourses": [
        {
            "title": "Intro to CSS and HTML",
            "school": "Coursera",
            "dates": "May 2015"
        },
        {
        	"Title": "Intro to Javascript",
            "school": "Coursera",
            "Dates": "May 2015"
        }
    ]
}    

var bio = {
	"name" : "Siddhanth Maheshwari",
	"role" : "Web Developer",
	"welcomeMessage" : "Welocome puny humans!",
	"contacts" : 
		{
			"mobile"    : "217-607-3452",
			"email"     : "siddhanthm@outlook.com",
			"github"    : "SidMaheshwari",
			"location"  : "Urbana, IL"
		},
	"skills" : ["Web_developer", "Can kill batman"]
}

var projects = {
	"projects" : [
		{
			"title" : "Sudoku Solver",
			"dates" : "May 2017"
		}
	]
}

var work = {
	"jobs" : [
		{
			"employer" : "UIUC",
			"title"    : "Undergrad TA for CS 173",
			"dates"	   : "Fall 2014 - Present",
			"location" : "Urbana",
			"description" : "Hold discussion sections and office hours"
		},
		{
			"employer" : "UIUC",
			"title"    : "Undergrad TA for ECE 110",
			"dates"	   : "Fall 2014 - Present",
			"location" : "Urbana",
			"description" : "Hold office hours"
		}
	]
}

for(skill in bio.skills)
{	
	$("#header").append(HTMLskillsStart);
	var random = HTMLskills.replace("%data%",bio.skills[skill]);
	$("#footerContacts").append(random);

}

var displayWork = function() {
	for(job in work.jobs)
	{   
		$("#workExperience").append(HTMLworkStart);

		var employer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var title = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var dates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var description = HTMLworkDescription.replace("%data%",work.jobs[job].description);

		$(".work-entry:last").append(employer + title + dates + description);

	}
}

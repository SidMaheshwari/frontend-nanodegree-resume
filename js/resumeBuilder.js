var education={
    "schools": [
        {
            "name": "GIIS",
            "location": "Singapore",
            "majors": "IB"
        },
        {
            "Name": "UIUC",
            "Location": "Chicago,USA",
            "majors": [
                "CS"
            ],
            "URl": "cs.illinois.edu"
        }
    ],
    "onlineCourses": [
        {
            "title" : "Intro to CSS and HTML",
            "school": "Udacity",
            "dates" : "May 2015"
        },
        {
        	"Title" : "Intro to Javascript",
            "school": "Udacity",
            "Dates" : "May 2015"
        },
        {
        	"title"  : "Developing Android Apps",
        	"school" : "Udacity",
        	"Dates"  : "May 2015"
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
			"location"  : "Urbana,IL,USA"
		},
	"skills" : ["Web_developer", "Can kill batman"]
}

var projects = {
	"projects" : [
		{
			"title" : "Sudoku Solver",
			"dates" : "May 2017",
			"description" : "Create a Sudoku solver which would taken a puzzle and give a solution to it if only one solution existed."
		},
		{
			"title" : "HTML website",
			"dates" : "Summer 2017",
			"description" : "Replicated website given by designer for Udacity Course"
		}
	]
}

var work = {
	"jobs" : [
		{
			"employer" : "UIUC",
			"title"    : "Undergrad TA for CS 173",
			"dates"	   : "Fall 2014 - Present",
			"location" : "Urbana,IL",
			"description" : "Hold discussion sections and office hours"
		},
		{
			"employer" : "UIUC",
			"title"    : "Undergrad TA for ECE 110",
			"dates"	   : "Fall 2014 - Present",
			"location" : "Urbana,IL",
			"description" : "Hold office hours"
		}
	]
}

var diplayskills = function() {
	for(skill in bio.skills)
	{	
		$("#header").append(HTMLskillsStart);
		var random = HTMLskills.replace("%data%",bio.skills[skill]);
		$("#skills").append(random);

	}
}
diplayskills();

var displayWork = function() {
	for(job in work.jobs)
	{   
		$("#workExperience").append(HTMLworkStart);

		var employer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var title = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var dates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var description = HTMLworkDescription.replace("%data%",work.jobs[job].description);
		var loc = HTMLworkLocation.replace("%data%", work.jobs[job].location);

		$(".work-entry:last").append(employer + title + dates + loc +  description);

	}
}




$(document).click(function(loc) {

	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y); 
});

function inName(name) {
	name = name.trim.split(" ");
	var firsthalf = name[0].slice(0,1);
	var second = name[0].slice(1);
	return firsthalf.toUpperCase() + second.toLowerCase() + " " + name[1].toUpperCase;
}

//$("#main").append(internationalizeButton);

projects.display = function(){
	for(var project in projects.projects){
		$("#projects").append(HTMLprojectStart);

		var title = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		var dates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		var description = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
		$(".project-entry:last").append(title + dates + description);
	}
}
projects.display();
displayWork();

//$("#main").append(googleMap);

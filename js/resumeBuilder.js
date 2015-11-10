/*
This is empty on purpose! Your code to build the resume will go here.
 */
$("#main").append("Brittany Tinsley");
var name= "Brittany Tinsley";
var role= "Softeware Developer";

var formattedName= HTMLheaderName.replace("%data%",name);
var formattedRole= HTMLheaderRole.replace("%data%",role);

$("#header").prepend(formattedName);
$("#header").append(formattedRole);

function inName() {
	name = name.trim().split("Brittany Tinsley");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] + "" +name[1];
}
$("#main").append(internationalizeButton);

var bio = {
	"name":"Brittany Tinsley",
	"role":"Software Developer",
	"contacts":{
		"mobile":"774-314-1061",
		"email":"bktinsley24@yahoo.com",
        "location" : "Boston,MA"
    },
	"welcomeMessage":"Welcome to my page",
	"skills":["Awesome Programming","Javascript","Binge Watching tv","Award winning personality"],
	"pic": "Tealc.jpg",
};
if (bio.name == 0) {
  var formattedName = HTMLheaderName.replace('%data%', bio["name"]);
  $("#header").prepend(formattedName);
};

if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	var formattedSkill= HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill= HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill= HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill= HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
};


var work = {
	"jobs": [
	{
	"employer": "Wholefoods",
	"title": "Cashier",
	"dates":"June 2015 to October 2015",
	"description": "Not sure yet!",
},
     {
     	"employer": "Partners Healthcare",
     	"title": "Desktop Support Intern",
     	"dates": "June 2015 to present",
     	"description": "Still figuring it out",
     }
  ]
};
function displayWork() {
for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);
	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	$(".work-entry:last").append(formattedDates);
	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);
}
};
function locationizer(work_obj) {
	var locationArray = [];

	for (job in work_obj.jobs) {
		var newLocation = work_obj.jobs[job].location;
		locationArray.push(newLocation);
	}
	return locationArray;
}
console.log(locationizer(work));

displayWork();
$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y);
});

var education={
	"school": [
	{
	"name": "Northeastern University",
	"city": "Boston, MA",
	"Major": "Computer Science",
	"Graduationyears":"2016-2020",
    },
    {
    "name": "YearUP",
    "city": "Boston, MA",
    "description": "One Year training program in IT",
    "Years": "2015 to 2016",
    }
   ]
 };

var projects = {
	"projects": [
	{
	"title": "Project 1",
	"dates": "2015",
	"description": "will know soon",
	"images": ["image1", "image2"]
	}
  ]
}
projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage =HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

$("#mapDiv").append(googleMap);
// creating array of courses to add to page
type Course = {
    courseNumber: string;
    courseName: string;
    semesterTaken: string
}  
const CIS162: Course = {
    courseNumber: '162',
    courseName: 'Computer Science 1',
    semesterTaken: 'Fall 2020'
}
const HNR153: Course = {
    courseNumber: '153',
    courseName: 'Spain in Europe',
    semesterTaken: 'Winter 2021'
}
const MTH225: Course = {
    courseNumber: '225',
    courseName: 'Discrete Structures I',
    semesterTaken: 'Fall 2021'
}
const CIS241: Course = {
    courseNumber: '241',
    courseName: 'System Level Prog. & Util',
    semesterTaken: 'Fall 2021'
}
const CIS371: Course = {
    courseNumber: '371',
    courseName: 'Web Application Development',
    semesterTaken: 'Winter 2023'
}

// adding courses array as table element in for loop
const myCourses: Array<Course> = [CIS162, HNR153, MTH225, CIS241, CIS371];
const tArea4 = document.getElementById("area4");
const table = document.createElement('table');
const tableBody = document.createElement('tbody');

for (let i=0;i<myCourses.length;i++) {
    let row = document.createElement('tr');
    let cell1 = document.createElement('td');
    let cell2 = document.createElement('td');
    let cell3 = document.createElement('td');

    cell1.appendChild(document.createTextNode(myCourses[i].courseName));
    cell2.appendChild(document.createTextNode(myCourses[i].courseNumber));
    cell3.appendChild(document.createTextNode(myCourses[i].semesterTaken));

    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);

    tableBody.appendChild(row);
}

table.appendChild(tableBody);
tArea4?.appendChild(table);

// creating companies with abbreviation for links
type Company = {
    name: string,           // Ex: "MSFT"
    abbreviation: string,   // Ex: Microsoft
    url: string             // Ex: https://microsoft.com
}

const apple: Company = {
    name: 'Apple',
    abbreviation: 'AAPL',
    url: 'https://www.apple.com/'
}
const facebook: Company = {
    name: 'Facebook',
    abbreviation: 'META',
    url: 'https://www.facebook.com/'
}
const google: Company = {
    name: 'Google',
    abbreviation: 'GOOG',
    url: 'https://www.google.com/'
}

const companies: Array<Company> = [apple, facebook, google];
const area6 = document.getElementById("area6");
const list = document.createElement('ul');

for (let i=0;i<companies.length;i++) {
    let li = document.createElement('li');
    let a = document.createElement('a');

    a.appendChild(document.createTextNode(companies[i].abbreviation));
    a.title = companies[i].name;
    a.href = companies[i].url;
    li.appendChild(a);
    list.appendChild(li);
}
area6?.appendChild(list);

// creating type for social media icons in area8
type SocialMedia = {
    icon: string;   // this can be a name of a local image or a URL to a remote image
    url: string;    // URL of the said social media company
}
const ig: SocialMedia = {
    icon: "images/Instagram-logo-transparent-PNG.png",
    url: "https://www.instagram.com/"
}
const twit: SocialMedia = {
    icon: "images/twitter-logo.png",
    url: "https://www.twitter.com/"
}
const fb: SocialMedia = {
    icon: "images/Popular-facebook-Logo-png.png",
    url: "https://www.facebook.com/"
}
const pin: SocialMedia = {
    icon: "images/pinterest-logo-png-1982.png",
    url: "https://www.pinterest.com/"
}
const spot: SocialMedia = {
    icon: "images/spotify-logo-png-7057.png",
    url: "https://www.spotify.com/"
}

const icons: Array<SocialMedia> = [ig, twit, fb, pin, spot]
const area8 = document.getElementById('area8')
for (let i=0;i<icons.length;i++) {
    let a = document.createElement('a')
    a.href = icons[i].url
    let icon = document.createElement('img')
    icon.src = icons[i].icon
    icon.height = 40
    a.appendChild(icon)
    area8?.appendChild(a)
}
/*Start of JSON*/

var jobsData =[];

var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://script.google.com/macros/s/AKfycbxo2MAob3LOcKsV5pOSecNwiZT2BhnPbSMzhVvq6gpvv1p7cx4/exec');
ourRequest.onload = function() {
  if (ourRequest.status >= 200 && ourRequest.status < 400) {
    const data = JSON.parse(ourRequest.responseText);
    console.log(data);
    createHTML(data);

  } else {
    console.log("We connected to the server, but it returned an error.");
  }
};

ourRequest.onerror = function() {
  console.log("Connection error");
};

ourRequest.send();


function createHTML(jobsData){
  var rawTemplate = document.getElementById("userA").innerHTML;
  var compiledTemplate = Handlebars.compile(rawTemplate);
  var ourGeneratedHTML = compiledTemplate(jobsData);

  var jobContainer = document.getElementById("jobsOne");
  jobContainer.innerHTML = ourGeneratedHTML;

}





var objSet = [];

var userName = '';
var recordList = [];


$(document).ready(function(){

 // Show the Modal on load
checkAccount();
});


function fetchJSON(linkHead, file) {
  var linkHead = linkHead;
  var file = file;
  var link = linkHead+file;
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', link);
  ourRequest.onload = function(){
    var ourData = JSON.parse(ourRequest.responseText);
    // console.log(ourData);
    renderHTML(ourData);
  };
  ourRequest.send();
}


function choose(choice, num){
  console.log("#"+num+"Chosen: "+choice);
}


function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

// function checkCookie() {
//   var user = getCookie("username");
//   if (user != "") {
//     alert("Welcome again " + user);
//   } else {
//     user = prompt("Please enter your name:", "");
//     if (user != "" && user != null) {
//       setCookie("username", user, 365);
//     }
//   }
// }

function checkAccount() {
  userName = getCookie("userName");
  if (userName != "") {
    getReady();
  recordList = getCookie("recordList");
    if (recordList != "") {
      recordList = JSON.parse(getCookie("recordList"));
      // recordListView(recordList);
    } else {
      recordList = [];
    }
  } else {
      $("#startupModal").modal("show");
  }
}

function registerAccount() {
  // $("#startupModal").modal("dismiss");
  var userInput = $("#startupInput").val();
  console.log("Input: "+userInput);
  if (userInput != "" && userInput != null) {
    // setting cookie for 3 years
    setCookie("userName", userInput, 1095);
    checkAccount();
  } else {
      $("#startupModal").modal("show");
  }
}

function resetAccount(){
  setCookie("userName", "", -1100);
  resetRecords();
}

function resetRecords(){
  setCookie("recordList", "", -1100);
  window.location.reload();
}

function getReady(){
  $(".user-name").text(userName);
}


function viewAssessment(){
    console.log("Assessment")
}

function saveRecords(){
  var newRecordList = JSON.stringify(recordList)
  console.log(newRecordList);
  setCookie("recordList", newRecordList, 1095);
  showRecordView();
}

function showRecordView(){
    console.log("Record");

}

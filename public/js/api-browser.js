var input = document.getElementsByTagName('input')[0];
var output = document.getElementsByClassName('output')[0];

var makeReq = function(e) {  
  
  if (e) {
    e.preventDefault();  
  }

  var host = "https://registry.npmjs.org";  
  
  if (validate(input.value)) {
    var url = host + input.value;

    function reqListener () {
      if(this.response) {
        var json_string = JSON.stringify(JSON.parse(this.responseText), null, 4);
        output.innerHTML = json_string;
      } else {
        output.innerHTML = "Uh-oh spaghetti-o (Server's Down!)";
      }
    }

    var request = new XMLHttpRequest();
    request.onload = reqListener;

    request.open("get", url, true);
    request.send();
  } else {
    output.innerHTML = "// Bad Request! \n Try `/`, it lists the available options!";
  }
};

var validate = function(path) {
  var result;

  // uh oh do something here

  return true;
};

//Immediately request /
(makeReq)();

// On click, make a new request
var form = document.getElementsByTagName('form')[0];
form.addEventListener('submit', makeReq, false);

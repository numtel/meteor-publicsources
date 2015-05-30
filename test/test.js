// Tests only run on client
if (Meteor.isServer) return;

function syncJax(href){
  var request = new XMLHttpRequest();
  request.open('GET', href, false);
  request.send(null);
  return request.responseText;
}

var cases = {
  'test-bundle.js': [
    /class="horses"/, // From public/mockup.html
    /console.log\(arg\)/, // From compiled version of public/mockup.coffee
  ],
  'test-bundle.css': [
    /color: red/, // From compiled version of public/mockup.less
  ]
};

var testsPassed = true;
for(var file in cases) {
  var content = syncJax(file);
  for(var i = 0; i < cases[file].length; i++) {
    if(content.match(cases[file][i]) === null) {
      testsPassed = false;
      break;
    }
  }
}

Template.results.helpers({
  status: function() {
    return testsPassed ? 'Passed' : 'Failed';
  }
});

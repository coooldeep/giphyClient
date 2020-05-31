var quill = new Quill('#editor', {
   modules: {
      toolbar: '#toolbar'
   },
   theme: 'snow'
});


var customButton = document.querySelector('#custom-button');
customButton.addEventListener('click', function () {
   var getImg = "";
   var getSearchItem = document.getElementById("search").value;
   let xhr = new XMLHttpRequest();
   xhr.open('GET', 'http://api.giphy.com/v1/gifs/search?q=' + getSearchItem + '&api_key=tfh00pR4ec8STCNoaxl9icflvfSLh1de&limit=18');
   xhr.responseType = 'json';
   xhr.send();
   xhr.onload = function () {
      let responseObj = xhr.response;
      console.log(responseObj.data[0].images.downsized_medium.url)
      var url = "";
      for (var i = 0; i < responseObj.data.length; i++) {
         url = responseObj.data[i].images.downsized_medium.url;
         getImg += '<a onclick="selectedGif(\'' + url + '\')" ><img type="button" width="100px" height="100px"  src="' + responseObj.data[i].images.downsized_medium.url + '"></a>';
      }
      document.getElementById("editor-img").innerHTML = getImg;
   };
});

function selectedGif(url) {
   var out = "";
   out = '<img type="button" width="100px" height="100px"  src="' + url + '">'
   document.getElementById("editor").innerHTML = out;
};
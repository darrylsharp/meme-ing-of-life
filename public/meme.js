document.getElementById('create-button').addEventListener('click',function(e) {
	html2canvas(document.getElementById('meme'), {
	  onrendered: function(canvas) {
	    document.body.appendChild(canvas);
	    var png = document.getElementsByTagName('canvas')[0].toDataURL();
	    var imgTag = document.getElementById('image');
	    imgTag.src = image;
	    canvas.remove();
	  }
	});
});




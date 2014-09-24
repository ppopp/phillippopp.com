function _random_shuffle(myArray) {
  var i = myArray.length;
  if ( i == 0 ) return false;
  while ( --i ) {
     var j = Math.floor( Math.random() * ( i + 1 ) );
     var tempi = myArray[i];
     var tempj = myArray[j];
     myArray[i] = tempj;
     myArray[j] = tempi;
   }
}

var _currentWriting = 0;
var _writings = [
	"writing_01.html", 
	"writing_02.html", 
	"writing_03.html",
	"writing_04.html",
	"writing_05.html",
	"writing_06.html",
	"writing_07.html",
	"writing_08.html",
	"writing_09.html",
	"writing_10.html",
	"writing_11.html",
	"writing_12.html",
	"writing_13.html",
	"writing_14.html",
	"writing_15.html",
	"writing_16.html",
	"writing_17.html",
	"writing_18.html",
	"writing_19.html",
	"writing_20.html",
	"writing_21.html",
	"writing_22.html",
	"writing_23.html",
	"writing_24.html",
	"writing_25.html",
	"writing_26.html",
	"writing_27.html",
	"writing_28.html",
	"writing_29.html",
	"writing_30.html",
	"writing_31.html"];
_random_shuffle(_writings);

function _get_writing_at(idx, callback) {
	$.ajax({
	  url: _writings[idx]
	}).done(function(html) {
		callback(html);
	});
}

function get_next_writing(callback) {
	_currentWriting += 1;
	if (_currentWriting >= _writings.length) {
		_currentWriting = 0;
	}
	_get_writing_at(_currentWriting, callback);
}

function get_previous_writing(callback) {
	_currentWriting -= 1;
	if (_currentWriting < 0) {
		_currentWriting = _writings.length - 1;
	}
	_get_writing_at(_currentWriting, callback);
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ReadingTime;

function ReadingTime(content) {
  var WPS = 275 / 60;
  var images = 0;
  var regex = /\w/;
  var words = content.split(' ').filter(function (word) {
    if (word.includes('<img')) {
      images += 1;
    }

    return regex.test(word);
  }).length;
  var imageAdjust = images * 4;
  var imageSecs = 0;
  var imageFactor = 12;

  while (images) {
    imageSecs += imageFactor;

    if (imageFactor > 3) {
      imageFactor -= 1;
    }

    images -= 1;
  }

  var minutes = Math.ceil(((words - imageAdjust) / WPS + imageSecs) / 60);
  return minutes;
}
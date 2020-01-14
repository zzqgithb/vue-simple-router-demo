(function($) {
  $.enterfocus = function(selector, callback) {
    let boxArray = [].slice.call(document.querySelectorAll(selector));
    for (let index in boxArray) {
      let box = boxArray[index];
      box.addEventListener(
        "keyup",
        function(event) {
          if (event.keyCode == 13) {
            let boxIndex = boxArray.indexOf(this);
            if (boxIndex == boxArray.length - 1) {
              if (callback) callback();
            } else {
              //console.log(boxIndex);
              let nextBox = boxArray[++boxIndex];
              nextBox.focus();
            }
          }
        },
        false
      );
    }
  };
})((window.mui = window.mui || {}));

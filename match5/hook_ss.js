// (function () {
//   "use strict";
//   Object.defineProperty(window, "_$ss", {
//     set: function (val) {
//       console.log("hook到目标值： ", val);
//       debugger;
//     },
//   });
// })();

(function () {
  "use strict";
  var ss_temp = "";
  Object.defineProperty(window, "_$ss", {
    set: function (val) {
      console.log("hook到目标值： ", val);
      debugger;
      ss_temp = val;
      return val;
    },
    get: function () {
      return ss_temp;
    },
  });
})();

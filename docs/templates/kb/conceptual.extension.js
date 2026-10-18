// Pass the page's ms.date to the layout: kbDate as MM/DD/YYYY (Microsoft Learn's "Last updated on" format), kbDateIso for <time>.
exports.preTransform = function (model) { return model; };
exports.postTransform = function (model) {
  var d = model["ms.date"];
  if (d) {
    var m = String(d).match(/^(\d{4})-(\d{2})-(\d{2})/);
    model.kbDate = m ? m[2] + "/" + m[3] + "/" + m[1] : String(d);
    model.kbDateIso = m ? m[0] : "";
  }
  return model;
};

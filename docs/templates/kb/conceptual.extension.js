// Pass the page's ms.date to the layout as kbDate (MM/DD/YYYY, like Microsoft Learn's "Last updated on").
exports.preTransform = function (model) { return model; };
exports.postTransform = function (model) {
  var d = model["ms.date"];
  if (d) {
    var m = String(d).match(/^(\d{4})-(\d{2})-(\d{2})/);
    model.kbDate = m ? m[2] + "/" + m[3] + "/" + m[1] : String(d);
  }
  return model;
};

// Pass the page's last update to the layout: kbDate as "MM/DD/YYYY HH:MM:SS" (Microsoft Learn's "Last updated on" date
// format plus the time), kbDateIso for <time>. The time is kbUpdated (last git commit, written by git_times.py);
// pages without it fall back to ms.date, date only.
exports.preTransform = function (model) { return model; };
exports.postTransform = function (model) {
  var t = model.kbUpdated;
  var m = t && String(t).match(/^(\d{4})-(\d{2})-(\d{2})[T ](\d{2}):(\d{2}):(\d{2})/);
  if (m) {
    model.kbDate = m[2] + "/" + m[3] + "/" + m[1] + " " + m[4] + ":" + m[5] + ":" + m[6];
    model.kbDateIso = String(t);
    return model;
  }
  var d = model["ms.date"];
  if (d) {
    m = String(d).match(/^(\d{4})-(\d{2})-(\d{2})/);
    model.kbDate = m ? m[2] + "/" + m[3] + "/" + m[1] : String(d);
    model.kbDateIso = m ? m[0] : "";
  }
  return model;
};

var chart = document.getElementById("chart");
var ctx = chart.getContext("2d");
var width = chart.width;
var height = chart.height;


$.get("/api/v1/config", function(config) {
  var xCanvasWidth = width / config.POINTS.QTY;
  var yCanvasHeight = height / (config.POINTS.MAX - config.POINTS.MIN);
  var interval = config.POINTS.UPDATE_INTERVAL;

  setInterval(function() {
    $.get("/api/v1/points", function(points) {
      ctx.clearRect(0, 0, chart.width, chart.height);
      ctx.beginPath();
      ctx.stroke();
      ctx.strokeStyle= 'rgba(49, 54, 51, 1)';
      ctx.lineWidth = 1;
      for (var i = 0; i < points.length; i++) {
        ctx.lineTo(i * xCanvasWidth , points[i] * yCanvasHeight + (height / 2));
      }
      ctx.stroke();
    });
  }, interval);
});

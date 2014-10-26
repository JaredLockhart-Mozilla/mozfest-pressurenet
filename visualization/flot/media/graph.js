$(function() {
  $.plot(
    "#graph", 
    [STATS_DATA],
    {
      lines: {show: false},
      points: {show: true},
    }
  );
});

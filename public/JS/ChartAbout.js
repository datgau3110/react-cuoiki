
// Themes begin
am4core.useTheme(am4themes_material);
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("chartdiv1", am4charts.PieChart);

// Add data
chart.data = [
  {
    "Công Việc": "Lên ý tưởng",
    "lượng thời gian": 61,
  },
  {
    "Công Việc": "Khảo sát các dự án bất động sản thực tế",
    "lượng thời gian": 53,
  },
  {
    "Công Việc": "Thiết kế và phân tích hệ thống",
    "lượng thời gian": 124,
  },
  {
    "Công Việc": "Coding",
    "lượng thời gian": 121,
  },
  {
    "Công Việc": "Test và kiểm thử hệ thống",
    "lượng thời gian": 302,
  },
  {
    "Công Việc": "Debug và fix bug",
    "lượng thời gian": 403,
  },
  {
    "Công Việc": "Thu thập data, viết content",
    "lượng thời gian": 85,
  },
  {
    "Công Việc": "Marketing, tiếp cận người dùng ",
    "lượng thời gian": 55,
  },
];

// Set inner radius
chart.innerRadius = am4core.percent(40);

// Add and configure Series
var pieSeries = chart.series.push(new am4charts.PieSeries());
pieSeries.dataFields.value = "lượng thời gian";
pieSeries.dataFields.category = "Công Việc";
pieSeries.slices.template.stroke = am4core.color("#fff");
pieSeries.slices.template.strokeWidth = 2;
pieSeries.slices.template.strokeOpacity = 1;

// This creates initial animation
pieSeries.hiddenState.properties.opacity = 1;
pieSeries.hiddenState.properties.endAngle = -90;
pieSeries.hiddenState.properties.startAngle = -90;

// $$$$$$$$$$$$$$$ for timeLine Chart $$$$$$$$$$$$$$$$$$$$$$$$$$



// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end


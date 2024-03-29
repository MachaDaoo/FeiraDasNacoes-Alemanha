

//GRÁFICO

am5.ready(function() {

    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("moeda");
    
    
    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
      am5themes_Animated.new(root)
    ]);
    
    
    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    var chart = root.container.children.push(am5xy.XYChart.new(root, {
      panX: false,
      panY: false,
      wheelX: "panX",
      wheelY: "zoomX",
      layout: root.verticalLayout
    }));
    
    
    // Data
    var colors = chart.get("colors");
    
    var data = [{
      country: "USA $",
      visits: 10,
      icon: "https://www.amcharts.com/wp-content/uploads/flags/united-states.svg",
      columnSettings: { fill: colors.next() }
    }, {
        country: "Alemanha €",
        visits: 10.23,
        icon: "https://www.amcharts.com/wp-content/uploads/flags/germany.svg",
        columnSettings: { fill: colors.next() }
      }, {
      country: "China ¥",
      visits: 72.43,
      icon: "https://www.amcharts.com/wp-content/uploads/flags/china.svg",
      columnSettings: { fill: colors.next() }
    }, {
      country: "Brasil R$",
      visits: 52.18,
      icon: "https://www.amcharts.com/wp-content/uploads/flags/brazil.svg",
      columnSettings: { fill: colors.next() }
    }];
    
    
    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
      categoryField: "country",
      renderer: am5xy.AxisRendererX.new(root, {
        minGridDistance: 30
      }),
      bullet: function (root, axis, dataItem) {
        return am5xy.AxisBullet.new(root, {
          location: 0.5,
          sprite: am5.Picture.new(root, {
            width: 24,
            height: 24,
            centerY: am5.p50,
            centerX: am5.p50,
            src: dataItem.dataContext.icon
          })
        });
      }
    }));
    
    xAxis.get("renderer").labels.template.setAll({
      paddingTop: 20
    });
    
    xAxis.data.setAll(data);
    
    var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
      renderer: am5xy.AxisRendererY.new(root, {})
    }));
    
    
    // Add series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    var series = chart.series.push(am5xy.ColumnSeries.new(root, {
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: "visits",
      categoryXField: "country"
    }));
    
    series.columns.template.setAll({
      tooltipText: "{categoryX}: {valueY}",
      tooltipY: 0,
      strokeOpacity: 0,
      templateField: "columnSettings"
    });
    
    series.data.setAll(data);
    
    
    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    series.appear();
    chart.appear(1000, 100);
    
    }); // end am5.ready()

///////////////////////////////////////////////////////////////////////////////////////





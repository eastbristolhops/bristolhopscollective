"use strict";

function am4themes_myTheme(target) {
    if (target instanceof am4core.ColorSet) {
      target.list = [
        am4core.color("#1BA68D"),
        am4core.color("#E7DA4F"),
        am4core.color("#E77624"),
        am4core.color("#DF3520"),
        am4core.color("#64297B"),
        am4core.color("#232555"),
        am4core.color("#FF004F"),
      ];
    }
  }


function build(id, data, type){
    const newchart = new BarChart(id, data, type);
    newchart.createChart();
}

class BarChart {
    constructor(containerId, data, type) {
      this.containerId = containerId;
      this.data = data;
      this.chart = null;
      this.type = type;
    }

    createChart(){
        am4core.ready(() => {
        am4core.useTheme(am4themes_animated);
        am4core.useTheme(am4themes_myTheme);
        am4core.addLicense("ch-custom-attribution");
        this.chart = am4core.create(this.containerId, am4charts.XYChart);
        this.chart.data = this.data;

        let categoryAxis = this.chart.xAxes.push(new am4charts.CategoryAxis());
            categoryAxis.dataFields.category = "label";
            categoryAxis.renderer.grid.template.location = 0;
            categoryAxis.renderer.minGridDistance = 30;
            categoryAxis.tooltip.disabled = true;
            categoryAxis.renderer.labels.template.fontWeight = 800;  

        let valueAxis = this.chart.yAxes.push(new am4charts.ValueAxis());
            valueAxis.renderer.minWidth = 50;
            valueAxis.min = 0;
            valueAxis.cursorTooltipEnabled = false;

        // Create series
        let series = this.chart.series.push(new am4charts.ColumnSeries());
            series.sequencedInterpolation = true;
            series.dataFields.valueY = "y";
            series.dataFields.categoryX = "label";

            if (this.type == "beer"){
              series.tooltipText = "[bold] {valueY} kg[/]";
            }
            if (this.type == "contributers"){
              series.tooltipText = "[bold] {valueY} contributers[/]";
            }
            
            series.columns.template.strokeWidth = 0;
            series.tooltip.pointerOrientation = "vertical";
            series.columns.template.column.fillOpacity = 0.8; 
        
            series.columns.template.adapter.add("fill", (fill, target) => {
                if (target.dataItem && target.dataItem.index !== undefined) {
                  return this.chart.colors.getIndex(target.dataItem.index);
                }
                return fill;
            });

            this.chart.maskBullets = false;
            this.chart.paddingTop = 25;

        let legend = new am4charts.Legend();
            legend.parent = this.chart.chartContainer;
            legend.itemContainers.template.togglable = false;
            legend.marginTop = 20;
            legend.paddingLeft = 10; 
            
          if (this.type == "beer"){
              series.events.on("ready", function(ev) {
                let legenddata = [];
                series.columns.each(function(column) {
                  legenddata.push({
                    name: column.dataItem.valueY + " kg",
                    fill: column.fill
                  });
                });
                legend.data = legenddata;
              });
            }

            if (this.type == "contributers"){
              series.events.on("ready", function(ev) {
                let legenddata = [];
                series.columns.each(function(column) {
                  legenddata.push({
                    name: column.dataItem.valueY + " contributers",
                    fill: column.fill
                  });
                });
                legend.data = legenddata;
              });
            }

        let hoverState = series.columns.template.column.states.create("hover");
            hoverState.properties.cornerRadiusTopLeft = 0;
            hoverState.properties.cornerRadiusTopRight = 0;
            hoverState.properties.fillOpacity = 1;

        this.chart.cursor = new am4charts.XYCursor();
        this.chart.cursor.behavior = "panX";

        this.chart.responsive.enabled = true;
        this.chart.responsive.useDefault = false;

        this.chart.responsive.rules.push({
            relevant: (target) => {
                if(target.pixelWidth <= 600){
                    return target.pixelWidth <= 600;
                }

            },
            state: (target, stateId) => {
              if (target instanceof am4charts.Chart) {
                let state = target.states.create(stateId);
                state.properties.paddingTop = 20;
                state.properties.paddingRight = 10;
                state.properties.paddingBottom = 5;
                state.properties.paddingLeft = -20;
                return state;
              }
    
              if (target instanceof am4charts.AxisRendererY) {
                let state = target.states.create(stateId);
                state.properties.maxLabelPosition = 0.99;
                return state;
              }
    
              if (target instanceof am4charts.AxisLabel && target.parent instanceof am4charts.AxisRendererY) {
                let state = target.states.create(stateId);
                state.properties.dy = -15;
                state.properties.paddingTop = 3;
                state.properties.paddingRight = 5;
                state.properties.paddingBottom = 3;
                state.properties.paddingLeft = 5;
    
                target.setStateOnChildren = true;
                let bgstate = target.background.states.create(stateId);
                bgstate.properties.fill = am4core.color("#fff");
                bgstate.properties.fillOpacity = 0.7;
    
                return state;
              }
             
            },
          });


          let label = categoryAxis.renderer.labels.template;
          label.truncate = true;
          label.maxWidth = 120;
          label.tooltipText = "{category}";

          categoryAxis.events.on("sizechanged", (ev) => {
            let axis = ev.target;
            let cellWidth = axis.pixelWidth / (axis.endIndex - axis.startIndex);
            if (cellWidth < axis.renderer.labels.template.maxWidth) {
              axis.renderer.labels.template.rotation = -45;
              axis.renderer.labels.template.horizontalCenter = "right";
              axis.renderer.labels.template.verticalCenter = "middle";
            } else {
              axis.renderer.labels.template.rotation = 0;
              axis.renderer.labels.template.horizontalCenter = "middle";
              axis.renderer.labels.template.verticalCenter = "top";
            }
          });
        })
    }
}

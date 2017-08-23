requirejs.config({
    urlArgs: "r=" + (new Date()).getTime(),
    paths: {
        "jquery": "/webjars/jquery/2.2.4/jquery.min",
        "timers": "/public/js/timers",
        "text": "/webjars/requirejs-text/2.0.15/text",
        "bootstrap": "/webjars/bootstrap/3.3.6/js/bootstrap.min",
        "inspinia": "/public/js/inspinia",
        "metisMenu": "/webjars/metisMenu/2.5.2/dist/metisMenu.min",
        "slimscroll": "/webjars/jquery-slimscroll/1.3.6/jquery.slimscroll.min",
        "moment": "/webjars/momentjs/2.18.1/min/moment.min",
        "vis": "/webjars/vis/4.19.1/dist/vis.min",
        "dagDraw": "/dag/dagDraw",
        "nodeCanvas": "/public/js/node.canvas",
        "dagHtml": "/dag/dag.html",
        "timeAxisHtml": "/index/timeaxis.html",
        "timeAxis": "/index/timeaxis",
        "rangeSlider": "/webjars/ion.rangeSlider/2.1.4/js/ion.rangeSlider.min",
        "daterangepicker": "/webjars/bootstrap-daterangepicker/2.1.24/js/bootstrap-daterangepicker",
        "alarm": "/index/alarm",
        "echarts": "/webjars/echarts/3.3.1/dist/echarts.min",
        "walden": "/public/js/walden",
        "alarmHtml": "/index/alarm.html",
        "vue": "/webjars/vue/2.1.3/vue",
        "chartJs": "/webjars/chart.js/2.5.0/dist/Chart",
        "cpuChart": "/public/js/cpu-chart",
        "gcChart": "/public/js/gc-chart",
        "tpsChart": "/public/js/tps-chart",
        "memoryChart": "/public/js/memory-chart",
        "machineInfo": "/instance/machineInfo",
        "machineInfoHtml": "/instance/machineInfo.html",
        "metricCharts": "/instance/metricCharts",
        "metricSelectorHtml": "/instance/metricSelector.html",
        "applications": "/health/applications",
        "applicationsHtml": "/health/applications.html",
        "appInstance": "/health/appInstance",
        "appInstanceHtml": "/health/appInstance.html",
        "instanceChart": "/public/js/instance-chart",
        "healthTimeAxis": "/health/timeaxis",
        "instanceTimeAxisHtml": "/health/timeaxis.html",
        "responseTimeConditionHtml": "/health/responseTimeCondition.html",
        "responseTimeCondition": "/health/responseTimeCondition"
    }
});

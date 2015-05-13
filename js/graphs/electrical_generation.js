$(function () {
    
	    	$('#electrical_generation').highcharts({
	        chart:{
	        	backgroundColor: ''
	        },
	        title: {
	            text: 'Electrical Generation',
	            style: {
	                	color: 'white'                
	                	},
	            x: -20 //center
	        },      
	        	
	        yAxis: {
	            title: {
	                text: 'L/100km',
	                style: {
	                	color: 'white'                
	                }
	            },
	            plotLines: [{
	                value: 0,
	                width: 1,
	                color: '#FFD000'
	            }]
	        },
	        tooltip: {
	            valueSuffix: '°C'
	        },
	        legend: {
	            enabled: false
	        },
	        series: [{
	            name: 'Tokyo',
	            data: []],
	            color: '#FFD000'
	        }],
	        exporting: { enabled: false },
	        credits: {  enabled: false  }
	    });
	});
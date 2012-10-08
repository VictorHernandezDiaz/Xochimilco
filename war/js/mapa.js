var puntos = [];
        var  ventanas= [];
        var unpunto = null;
        var map = null;
        var center = null;
        var poligono = [];

/*$.getJSON("/xochimilcoservlet?opcion=4", {}, function(data){
				$.each(data.places, function(i, item){
					poligono[i]  = new google.maps.LatLng(item.lat, item.lon);                          
				});
			});*/

function initialize() {       
	var mapOptions = {
            center: center,
		       	 zoom: 12,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: true,
            disableDoubleClickZoom: true,
            minZoom:10,
            maxZoom:18,                     
				mapTypeControlOptions: {
						style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
				},
				navigationControl: true,
				navigationControlOptions: {
					style: google.maps.NavigationControlStyle.SMALL
				}
	};
	map = new google.maps.Map(document.getElementById("mapa"),mapOptions);
	
			//map.getMinimumResolution = function(){return 9;}
			//map.getMaximumResolution = function(){return 11;}

	var milpa = new google.maps.LatLng(19.190857, -99.02363);
	var xochimilco = new google.maps.LatLng(19.274085, -99.138347);
	var iztapalapa = new google.maps.LatLng(19.357676, -99.092685);
	var tlahuac = new google.maps.LatLng(19.2625217, -99.00531005);
	/*Marcadores para ver los puntos en el mapa*/
	var xochimilco1 = new google.maps.LatLng(19.282952,-99.141337);
	var xochimilco2 = new google.maps.LatLng(19.295428,-99.101684);
	var xochimilco3 = new google.maps.LatLng(19.318595,-99.099109);
	var xochimilco4 = new google.maps.LatLng(19.304501,-99.087436);
	var xochimilco5 = new google.maps.LatLng(19.286031,-99.095332);
	var xochimilco6 = new google.maps.LatLng(19.286193,-99.102186);
	var xochimilco7 = new google.maps.LatLng(19.274932,-99.1021);
	var xochimilco8 = new google.maps.LatLng(19.277443,-99.098752);
	var xochimilco9 = new google.maps.LatLng(19.27639,-99.094289);
	var xochimilco10 = new google.maps.LatLng(19.27404,-99.095062);
	var xochimilco11 = new google.maps.LatLng(19.272096,-99.090169);
	var xochimilco12 = new google.maps.LatLng(19.271448,-99.091199);
	var xochimilco13 = new google.maps.LatLng(19.265209,-99.093002);
	var xochimilco14 = new google.maps.LatLng(19.259132,-99.066223);
	var xochimilco15 = new google.maps.LatLng(19.263751,-99.063905);
	var xochimilco16 = new google.maps.LatLng(19.263589,-99.05867);
	var xochimilco17 = new google.maps.LatLng(19.256782,-99.060043);
	var xochimilco18 = new google.maps.LatLng(19.255729,-99.051889);
	var xochimilco19 = new google.maps.LatLng(19.258889,-99.048542);
	var xochimilco20 = new google.maps.LatLng(19.26529,-99.035152);
	var xochimilco21 = new google.maps.LatLng(19.266667,-99.032663);
	var xochimilco22 = new google.maps.LatLng(19.262535,-99.02983);
	var xochimilco23 = new google.maps.LatLng(19.26051,-99.018329);
	var xochimilco24 = new google.maps.LatLng(19.255891,-99.011463);
	var xochimilco25 = new google.maps.LatLng(19.259699,-99.009317);
	var xochimilco26 = new google.maps.LatLng(19.257836,-99.003824);
	var xochimilco27 = new google.maps.LatLng(19.251272,-99.007257);
	var xochimilco28 = new google.maps.LatLng(19.247788,-99.005455);
	var xochimilco29 = new google.maps.LatLng(19.240738,-99.008373);
	var xochimilco30 = new google.maps.LatLng(19.238064,-99.011463);
	var xochimilco31 = new google.maps.LatLng(19.239117,-99.013608);
	var xochimilco32 = new google.maps.LatLng(19.242197,-99.013093);
	var xochimilco33 = new google.maps.LatLng(19.242602,-99.017213);
	var xochimilco34 = new google.maps.LatLng(19.239279,-99.019531);
	var xochimilco35 = new google.maps.LatLng(19.24009,-99.023479);
	var xochimilco36 = new google.maps.LatLng(19.245357,-99.02099);
	var xochimilco37 = new google.maps.LatLng(19.247059,-99.027685);
	var xochimilco38 = new google.maps.LatLng(19.242602,-99.028114);
	var xochimilco39 = new google.maps.LatLng(19.244628,-99.031461);
	var xochimilco40 = new google.maps.LatLng(19.246897,-99.030517);
	var xochimilco41 = new google.maps.LatLng(19.244871,-99.038585);
	var xochimilco42 = new google.maps.LatLng(19.239522,-99.051803);
	var xochimilco43 = new google.maps.LatLng(19.241548,-99.055665);
	var xochimilco44 = new google.maps.LatLng(19.237658,-99.058498);
	//Hasta aqui llevo
	var xochimilco45 = new google.maps.LatLng(19.232634,-99.058498);
	var xochimilco46 = new google.maps.LatLng(19.237091,-99.064849);
	var xochimilco47 = new google.maps.LatLng(19.233525,-99.077552);
	var xochimilco48 = new google.maps.LatLng(19.240333,-99.075321);
	var xochimilco49 = new google.maps.LatLng(19.242764,-99.079011);
	var xochimilco50 = new google.maps.LatLng(19.240576,-99.079612);
	var xochimilco51 = new google.maps.LatLng(19.239603,-99.084075);
	var xochimilco52 = new google.maps.LatLng(19.231743,-99.087766);
	var xochimilco53 = new google.maps.LatLng(19.231094,-99.094289);
	var xochimilco54 = new google.maps.LatLng(19.228177,-99.093345);
	var xochimilco55 = new google.maps.LatLng(19.227853,-99.095748);
	var xochimilco56 = new google.maps.LatLng(19.225259,-99.096006);
	var xochimilco57 = new google.maps.LatLng(19.225016,-99.093688);
	var xochimilco58 = new google.maps.LatLng(19.226637,-99.090599);
	var xochimilco59 = new google.maps.LatLng(19.229311,-99.087165);
	var xochimilco60 = new google.maps.LatLng(19.224611,-99.085449);
	var xochimilco61 = new google.maps.LatLng(19.22453,-99.083475);
	var xochimilco62 = new google.maps.LatLng(19.222017,-99.088539);
	var xochimilco63 = new google.maps.LatLng(19.224125,-99.090427);
	var xochimilco64 = new google.maps.LatLng(19.211076,-99.091028);
	var xochimilco65 = new google.maps.LatLng(19.2114,-99.09489);
	var xochimilco66 = new google.maps.LatLng(19.208725,-99.095663);
	var xochimilco67 = new google.maps.LatLng(19.208482,-99.099439);
	var xochimilco68 = new google.maps.LatLng(19.2114,-99.103387);
	var xochimilco69 = new google.maps.LatLng(19.219586,-99.106477);
	var xochimilco70 = new google.maps.LatLng(19.220964,-99.110168);
	var xochimilco71 = new google.maps.LatLng(19.2191,-99.110855);
	var xochimilco72 = new google.maps.LatLng(19.221855,-99.116691);
	var xochimilco73 = new google.maps.LatLng(19.224125,-99.113344);
	var xochimilco74 = new google.maps.LatLng(19.227934,-99.111541);
	var xochimilco75 = new google.maps.LatLng(19.229798,-99.109052);
	var xochimilco76 = new google.maps.LatLng(19.231256,-99.117464);
	var xochimilco77 = new google.maps.LatLng(19.229392,-99.11506);
	var xochimilco78 = new google.maps.LatLng(19.224125,-99.115833);
	var xochimilco79 = new google.maps.LatLng(19.222423,-99.11815);
	var xochimilco80 = new google.maps.LatLng(19.218532,-99.11712);
	var xochimilco81 = new google.maps.LatLng(19.218208,-99.116691);
	var xochimilco82 = new google.maps.LatLng(19.218451,-99.113515);
	var xochimilco83 = new google.maps.LatLng(19.214723,-99.120983);
	var xochimilco84 = new google.maps.LatLng(19.20905,-99.119094);
	var xochimilco85 = new google.maps.LatLng(19.206699,-99.119609);
	var xochimilco86 = new google.maps.LatLng(19.20678,-99.123043);
	var xochimilco87 = new google.maps.LatLng(19.199971,-99.114116);
	var xochimilco88 = new google.maps.LatLng(19.188947,-99.115146);
	var xochimilco89 = new google.maps.LatLng(19.193163,-99.12021);
	var xochimilco90 = new google.maps.LatLng(19.18911,-99.12021);
	var xochimilco91 = new google.maps.LatLng(19.196567,-99.13051);
	var xochimilco92 = new google.maps.LatLng(19.209455,-99.130252);
	var xochimilco93 = new google.maps.LatLng(19.213345,-99.132913);
	var xochimilco94 = new google.maps.LatLng(19.217479,-99.129222);
	var xochimilco95 = new google.maps.LatLng(19.218776,-99.126132);
	var xochimilco96 = new google.maps.LatLng(19.219343,-99.128278);
	var xochimilco97 = new google.maps.LatLng(19.223395,-99.12536);
	var xochimilco98 = new google.maps.LatLng(19.22299,-99.122356);
	var xochimilco99 = new google.maps.LatLng(19.230284,-99.124845);
	var xochimilco100 = new google.maps.LatLng(19.232067,-99.132741);
	var xochimilco101 = new google.maps.LatLng(19.236443,-99.135574);
	var xochimilco102 = new google.maps.LatLng(19.238793,-99.136175);
	var xochimilco103 = new google.maps.LatLng(19.250786,-99.134372);
	var xochimilco104 = new google.maps.LatLng(19.266343,-99.142269);
	var xochimilco105 = new google.maps.LatLng(19.26764,-99.145273);
	
	
	map.setCenter(center);
	
	$.getJSON("/xochimilcoservlet?opcion=2", {}, function(data){
        $.each(data.places, function(i, item){
       
                var marker = new google.maps.Marker({
                        position: new google.maps.LatLng(item.lat,
                         item.lon),
                        map: map,
                        title: item.title,
                });
                puntos[i] = marker;
                /*var infowindow = new google.maps.InfoWindow({
                    content: "<h3>"+ item.title +"</h3><p>"+
                    item.title +"</p>" + '<div>'+
                 '<img src="' + item.img + '" />'+'</div>'+
                 "</br>"+ '<div>' + '<video height= "270" width= "480" src ="videos/Kite.mp4" type="video/mp4" controls/>'+'</div>'
            });
            ventanas[i] = infowindow;
            google.maps.event.addListener(marker, 'click', function() {
                    infowindow.open(map, marker);
            });*/
        });
	 });
		
		var path = [xochimilco1,xochimilco2,xochimilco3,xochimilco4,xochimilco5,xochimilco6,xochimilco7,xochimilco8,xochimilco9,xochimilco10,xochimilco11,xochimilco12,xochimilco13,xochimilco14,xochimilco15,xochimilco16,xochimilco17,xochimilco18,xochimilco19,xochimilco20,xochimilco21,xochimilco22,xochimilco23,xochimilco24,xochimilco25,xochimilco26,xochimilco27,xochimilco28,xochimilco29,xochimilco30,xochimilco31,xochimilco32,xochimilco33,xochimilco34,xochimilco35,xochimilco36,xochimilco37,xochimilco38,xochimilco39,xochimilco40,xochimilco41,xochimilco42,xochimilco43,xochimilco44,xochimilco45,xochimilco46,xochimilco47,xochimilco48,xochimilco49,xochimilco50,xochimilco51,xochimilco52,xochimilco53,xochimilco54,xochimilco55,xochimilco56,xochimilco57,xochimilco58,xochimilco59,xochimilco60,xochimilco61,xochimilco62,xochimilco63,xochimilco64,xochimilco65,xochimilco66,xochimilco67,xochimilco68,xochimilco69,xochimilco70,xochimilco71,xochimilco72,xochimilco73,xochimilco74,xochimilco75,xochimilco76,xochimilco77,xochimilco78,xochimilco79,xochimilco80,xochimilco81,xochimilco82,xochimilco83,xochimilco84,xochimilco85,xochimilco86,xochimilco87,xochimilco88,xochimilco89,xochimilco90,xochimilco91,xochimilco92,xochimilco93,xochimilco94,xochimilco95,xochimilco96,xochimilco97,xochimilco98,xochimilco99,xochimilco100,xochimilco101,xochimilco102,xochimilco103,xochimilco104,xochimilco105];
    
    var shape = new google.maps.Polygon({
    paths: path,
	map: map,
    strokeColor: '#6D9C00',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#A8F000',
    fillOpacity: 0.35
  });
	/*shape.setMap(map);*/
          
}

function startup(Cesium) {
    'use strict';
//Sandcastle_Begin


var viewer = new Cesium.Viewer('cesiumContainer', { infoBox : false });
var entities = viewer.entities;

//Create Entity "folders" to allow us to turn on/off entities as a group.
var hotelmutiara = entities.add(new Cesium.Entity());
var mallmalioboro = entities.add(new Cesium.Entity());
var sepatumodern = entities.add(new Cesium.Entity());
var citra = entities.add(new Cesium.Entity());
var sariilmu = entities.add(new Cesium.Entity());
var kimiafarma = entities.add(new Cesium.Entity());

//Create the entities and assign each entity's parent to the group to which it belongs.
   
	entities.add({
		parent : hotelmutiara,
        name : 'cesium/Apps/SampleData/models/hotel_mutiara/hotel_mutiara.glb',
        position : Cesium.Cartesian3.fromDegrees(110.365896, -7.794284, 0),
        orientation : Cesium.Transforms.headingPitchRollQuaternion(Cesium.Cartesian3.fromDegrees(110.365896, -7.794284, 0), new Cesium.HeadingPitchRoll(Cesium.Math.toRadians(90), 0, 0)),
        model : {
            uri : 'cesium/Apps/SampleData/models/hotel_mutiara/hotel_mutiara.glb'
        }
    });
	
	
	entities.add({
		parent : mallmalioboro,
        name : 'cesium/Apps/SampleData/models/mallmalioboro/mallmalioboro.glb',
        position : Cesium.Cartesian3.fromDegrees(110.366199, -7.793300, 0),
        orientation : Cesium.Transforms.headingPitchRollQuaternion(Cesium.Cartesian3.fromDegrees(110.366199, -7.793300, 0), new Cesium.HeadingPitchRoll(Cesium.Math.toRadians(90), 0, 0)),
        model : {
            uri : 'cesium/Apps/SampleData/models/mallmalioboro/mallmalioboro.glb'
        }
    });
	
    entities.add({
		parent : sepatumodern,
        name : 'cesium/Apps/SampleData/models/sepatumodern/sepatumodern.glb',
        position : Cesium.Cartesian3.fromDegrees(110.365665, -7.792960, 0),
        orientation : Cesium.Transforms.headingPitchRollQuaternion(Cesium.Cartesian3.fromDegrees(110.365665, -7.792960, 0), new Cesium.HeadingPitchRoll(Cesium.Math.toRadians(90), 0, 0)),
        model : {
            uri : 'cesium/Apps/SampleData/models/sepatumodern/sepatumodern.glb'
        }
    });
	
	    entities.add({
		parent : citra,
        name : 'cesium/Apps/SampleData/models/citra/citra.glb',
        position : Cesium.Cartesian3.fromDegrees(110.365680, -7.792843, 0),
        orientation : Cesium.Transforms.headingPitchRollQuaternion(Cesium.Cartesian3.fromDegrees(110.365680, -7.792843, 0), new Cesium.HeadingPitchRoll(Cesium.Math.toRadians(90), 0, 0)),
        model : {
            uri : 'cesium/Apps/SampleData/models/citra/citra.glb'
        }
    });
	
		    entities.add({
		parent : sariilmu,
        name : 'cesium/Apps/SampleData/models/sariilmu/sariilmu.glb',
        position : Cesium.Cartesian3.fromDegrees(110.365604, -7.792735, 0),
        orientation : Cesium.Transforms.headingPitchRollQuaternion(Cesium.Cartesian3.fromDegrees(110.365604, -7.792735, 0), new Cesium.HeadingPitchRoll(Cesium.Math.toRadians(90), 0, 0)),
        model : {
            uri : 'cesium/Apps/SampleData/models/sariilmu/sariilmu.glb'
        }
    });
	
		    entities.add({
		parent : kimiafarma,
        name : 'cesium/Apps/SampleData/models/kimiafarma/kimiafarma.glb',
        position : Cesium.Cartesian3.fromDegrees(110.365667, -7.792625, 0),
        orientation : Cesium.Transforms.headingPitchRollQuaternion(Cesium.Cartesian3.fromDegrees(110.365667, -7.792625, 0), new Cesium.HeadingPitchRoll(Cesium.Math.toRadians(90), 0, 0)),
        model : {
            uri : 'cesium/Apps/SampleData/models/kimiafarma/kimiafarma.glb'
        }
    });

viewer.zoomTo(viewer.entities);

Sandcastle.addToggleButton('Hotel Mutiara', true, function(checked) {
        hotelmutiara.show = !hotelmutiara.show;
});

Sandcastle.addToggleButton('Mall Malioboro', true, function(checked){
    mallmalioboro.show = !mallmalioboro.show;
});

Sandcastle.addToggleButton('Toko Sepatu Modern', true, function(checked){
    sepatumodern.show = !sepatumodern.show;
});

Sandcastle.addToggleButton('Toko Citra', true, function(checked){
    citra.show = !citra.show;
});

Sandcastle.addToggleButton('Toko Sari Ilmu', true, function(checked){
    sariilmu.show = !sariilmu.show;
});

Sandcastle.addToggleButton('Apotek Kimia Farma', true, function(checked){
    kimiafarma.show = !kimiafarma.show;
});
	
//Sandcastle_End
    Sandcastle.finishedLoading();
}
if (typeof Cesium !== 'undefined') {
    startup(Cesium);
} else if (typeof require === 'function') {
    require(['Cesium'], startup);
}
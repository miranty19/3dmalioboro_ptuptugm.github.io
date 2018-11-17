<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">
    <meta name="description" content="Create 3D models using glTF.">
    <meta name="cesium-sandcastle-labels" content="Tutorials,Showcases">
    <title>3D Malioboro</title>
    <script type="text/javascript" src="cesium/Apps/Sandcastle/Sandcastle-header.js"></script>
	<script type="text/javascript" src="cesium/Build/CesiumUnminified/Cesium.js"></script>
    <script type="text/javascript" src="cesium/ThirdParty/requirejs-2.1.20/require.js"></script>
    <script type="text/javascript">
        if(typeof require === 'function') {
            require.config({
                baseUrl : 'cesium/Source',
                waitSeconds : 120
            });
        }
    </script>
</head>
<body class="sandcastle-loading" data-sandcastle-bucket="bucket-requirejs.html">
<style>
    @import url(cesium/Apps/Sandcastle/templates/bucket.css);
</style>
<div id="cesiumContainer" class="fullSize"></div>
<div id="loadingOverlay"><h1>Loading...</h1></div>
<div id="toolbar">
</div>
<script type="text/javascript" id="cesium_sandcastle_script" src="cesium/Apps/app_load.js"></script>
</body>
</html>

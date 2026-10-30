var size = 0;
var placement = 'point';
// Flechas de dirección del flujo (evento 2017, interpretación)
var style_Flujo2017_22 = function(feature, resolution){
    var g = feature.getGeometry();
    var c = g.getCoordinates();
    var a = c[c.length - 2], b = c[c.length - 1];
    var rot = Math.atan2(b[0] - a[0], b[1] - a[1]);
    var color = '#FFD400', borde = 'rgba(60,40,0,0.85)';
    return [
        new ol.style.Style({stroke: new ol.style.Stroke({color: borde, width: 8, lineCap: 'round', lineJoin: 'round'})}),
        new ol.style.Style({stroke: new ol.style.Stroke({color: color, width: 5, lineCap: 'round', lineJoin: 'round'})}),
        new ol.style.Style({
            geometry: new ol.geom.Point(b),
            image: new ol.style.RegularShape({
                points: 3, radius: 12, rotation: rot, rotateWithView: true,
                fill: new ol.style.Fill({color: color}),
                stroke: new ol.style.Stroke({color: borde, width: 2})
            })
        })
    ];
};

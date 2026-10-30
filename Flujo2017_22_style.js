var size = 0;
var placement = 'point';
// Flecha de dirección del flujo (evento 2017, interpretación).
// El grosor y la punta se ajustan a la escala: finos con poco zoom, más gruesos al acercarse.
var style_Flujo2017_22 = function(feature, resolution){
    var ancho = Math.min(8, Math.max(1.2, 10 / Math.sqrt(resolution)));
    var punta = Math.max(5, ancho * 2.4);
    var g = feature.getGeometry();
    var c = g.getCoordinates();
    var fin = c[c.length - 1];
    // dirección de la punta: desde un punto unos píxeles antes del final
    var atras = Math.max(1, punta * 1.2 * resolution), acum = 0, ref = c[c.length - 2];
    for (var i = c.length - 1; i > 0; i--) {
        var dx = c[i][0] - c[i-1][0], dy = c[i][1] - c[i-1][1];
        acum += Math.sqrt(dx*dx + dy*dy); ref = c[i-1];
        if (acum >= atras) break;
    }
    var rot = Math.atan2(fin[0] - ref[0], fin[1] - ref[1]);
    var color = '#FFD400', borde = 'rgba(60,40,0,0.85)';
    return [
        new ol.style.Style({stroke: new ol.style.Stroke({color: borde, width: ancho + 3, lineCap: 'round', lineJoin: 'round'})}),
        new ol.style.Style({stroke: new ol.style.Stroke({color: color, width: ancho, lineCap: 'round', lineJoin: 'round'})}),
        new ol.style.Style({
            geometry: new ol.geom.Point(fin),
            image: new ol.style.RegularShape({
                points: 3, radius: punta, rotation: rot, rotateWithView: true,
                fill: new ol.style.Fill({color: color}),
                stroke: new ol.style.Stroke({color: borde, width: 1.5})
            })
        })
    ];
};

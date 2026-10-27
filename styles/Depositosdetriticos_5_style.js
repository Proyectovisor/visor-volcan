var size = 0;
var placement = 'point';
// Trama para diferenciar esta capa de la Zona 1 del Aluvion 2017 (rojo liso)
var trama_Depositosdetriticos_5 = (function() {
    var c = document.createElement('canvas');
    c.width = 10; c.height = 10;
    var ctx = c.getContext('2d');
    ctx.fillStyle = 'rgba(139,0,0,0.25)';   // fondo rojo oscuro translucido
    ctx.fillRect(0, 0, 10, 10);
    ctx.strokeStyle = 'rgba(139,0,0,1.0)';  // lineas rojo oscuro (#8B0000)
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, 10); ctx.lineTo(10, 0);
    ctx.moveTo(-5, 5); ctx.lineTo(5, -5);
    ctx.moveTo(5, 15); ctx.lineTo(15, 5);
    ctx.stroke();
    return ctx.createPattern(c, 'repeat');
})();
function categories_Depositosdetriticos_5(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Sedimentos muy inestables':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(139,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.5}),fill: new ol.style.Fill({color: trama_Depositosdetriticos_5}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Depositosdetriticos_5 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("Amenazas");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_Depositosdetriticos_5(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};

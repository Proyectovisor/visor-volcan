var size = 0;
var placement = 'point';
function categories_Obrasdemitigacin_14(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Baden':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(1,2,94,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3.8}),fill: new ol.style.Fill({color: 'rgba(1,2,94,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Cordones cunetas':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(84,141,191,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2.8499999999999996}),fill: new ol.style.Fill({color: 'rgba(84,141,191,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Cuenco sedimentador':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(122,110,65,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.748}),fill: new ol.style.Fill({color: 'rgba(122,110,65,0.7215686274509804)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Obras longitudinales':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(51,42,10,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.748}),fill: new ol.style.Fill({color: 'rgba(51,42,10,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Parque lineal':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(106,166,46,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.748}),fill: new ol.style.Fill({color: 'rgba(106,166,46,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Obrasdemitigacin_14 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("Obra");
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
    
    var style = categories_Obrasdemitigacin_14(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};

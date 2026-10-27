var size = 0;
var placement = 'point';
function categories_IdejuyTrazaFOptica_18(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Derivación Volcan (OT2)':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(11,4,5,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3.8}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'DIE-TUMBAYA':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(64,73,142,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3.8}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Tilcara - S.S. Jujuy':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(57,171,172,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3.8}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'S/D':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(222,245,229,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3.8}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_IdejuyTrazaFOptica_18 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("Observ.");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'line';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_IdejuyTrazaFOptica_18(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};

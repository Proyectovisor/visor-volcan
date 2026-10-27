var size = 0;
var placement = 'point';
// Equipamiento urbano: simbolos puntuales (forma = tipo de uso, color = equipamiento).
// Se evita la escala verde-rojo para no confundir con zonas de impacto o peligro.
var simbolos_Equipamientourbano_11 = {
    'Agua Potable S.A.':            {forma: 'cuadrado',  color: '#0077BB'},
    'Empresa EJESA':                {forma: 'cuadrado',  color: '#33BBEE'},
    'Salón Municipal':              {forma: 'cuadrado',  color: '#555555'},
    'Biblioteca 3 de Abril':        {forma: 'triangulo', color: '#AA3377'},
    'Iglesia Ntra. Sra. del Valle': {forma: 'triangulo', color: '#EE3377'},
    'Playón Comparsa':              {forma: 'triangulo', color: '#7B2FBF'},
    'Plaza 3 de Abril':             {forma: 'rombo',     color: '#009988'},
    'Espacio Verde':                {forma: 'rombo',     color: '#88CCEE'},
    'Campo Deportivo':              {forma: 'rombo',     color: '#332288'},
    'Tren Turistico':               {forma: 'estrella',  color: '#222222'}
};
function marcador_Equipamientourbano_11(forma, color) {
    var fill = new ol.style.Fill({color: color});
    var stroke = new ol.style.Stroke({color: '#FFFFFF', width: 2});
    if (forma === 'cuadrado')  return new ol.style.RegularShape({fill: fill, stroke: stroke, points: 4, radius: 9, angle: Math.PI / 4});
    if (forma === 'triangulo') return new ol.style.RegularShape({fill: fill, stroke: stroke, points: 3, radius: 10, angle: 0});
    if (forma === 'rombo')     return new ol.style.RegularShape({fill: fill, stroke: stroke, points: 4, radius: 10, angle: 0});
    return new ol.style.RegularShape({fill: fill, stroke: stroke, points: 5, radius: 11, radius2: 5, angle: 0}); // estrella
}
function categories_Equipamientourbano_11(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
    var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
    var s = simbolos_Equipamientourbano_11[valueStr] || {forma: 'cuadrado', color: '#555555'};
    return [
        // contorno de la parcela, sin relleno, para no tapar las capas de impacto
        new ol.style.Style({
            stroke: new ol.style.Stroke({color: s.color, lineDash: [4, 3], width: 1.5})
        }),
        // simbolo en un punto interior de la parcela
        new ol.style.Style({
            geometry: function(f) {
                var g = f.getGeometry();
                if (g.getType() === 'MultiPolygon') return g.getInteriorPoints().getPoint(0);
                if (g.getType() === 'Polygon') return g.getInteriorPoint();
                return g;
            },
            image: marcador_Equipamientourbano_11(s.forma, s.color),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                                  labelFill, placement, bufferColor,
                                  bufferWidth)
        })
    ];
};

var style_Equipamientourbano_11 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("Nombre");
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
    
    var style = categories_Equipamientourbano_11(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};

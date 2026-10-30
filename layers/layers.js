ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-7289715.518914, -2744008.390687, -7286533.937041, -2742127.546137]);
var wms_layers = [];


        var lyr_GoogleSatelite_0 = new ol.layer.Tile({
            'title': 'Google Satelite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleMaps_1 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            source: new ol.source.OSM()
        });
var format_IdejuyAPUnesco_2 = new ol.format.GeoJSON();
var features_IdejuyAPUnesco_2 = format_IdejuyAPUnesco_2.readFeatures(json_IdejuyAPUnesco_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IdejuyAPUnesco_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IdejuyAPUnesco_2.addFeatures(features_IdejuyAPUnesco_2);
var lyr_IdejuyAPUnesco_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IdejuyAPUnesco_2, 
                style: style_IdejuyAPUnesco_2,
                popuplayertitle: 'Idejuy - AP Unesco',
                interactive: true,
    title: 'Idejuy - AP Unesco<br />\
    <img src="styles/legend/IdejuyAPUnesco_2_0.png" />   Qda. de Humahuaca. UNESCO<br />' });
var format_Subcuenca_3 = new ol.format.GeoJSON();
var features_Subcuenca_3 = format_Subcuenca_3.readFeatures(json_Subcuenca_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Subcuenca_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Subcuenca_3.addFeatures(features_Subcuenca_3);
var lyr_Subcuenca_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Subcuenca_3, 
                style: style_Subcuenca_3,
                popuplayertitle: 'Subcuenca',
                interactive: true,
    title: 'Subcuenca<br />\
    <img src="styles/legend/Subcuenca_3_0.png" />   Subc. Qda. de Los Filtros<br />' });
var format_Aluvion2017_4 = new ol.format.GeoJSON();
var features_Aluvion2017_4 = format_Aluvion2017_4.readFeatures(json_Aluvion2017_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Aluvion2017_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Aluvion2017_4.addFeatures(features_Aluvion2017_4);
var lyr_Aluvion2017_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Aluvion2017_4, 
                style: style_Aluvion2017_4,
                popuplayertitle: 'Aluvion 2017',
                interactive: true,
    title: 'Aluvion 2017<br />\
    <img src="styles/legend/Aluvion2017_4_0.png" />   Zona 1 · Núcleo del evento – peligro muy alto<br />\
    <img src="styles/legend/Aluvion2017_4_1.png" />   Zona 2 · Influencia directa – peligro alto<br />\
    <img src="styles/legend/Aluvion2017_4_2.png" />   Zona 3 · Afectación media – peligro medio<br />\
    <img src="styles/legend/Aluvion2017_4_3.png" />   Zona 4 · Afectación mínima o nula – peligro bajo<br />' });
var format_Depositosdetriticos_5 = new ol.format.GeoJSON();
var features_Depositosdetriticos_5 = format_Depositosdetriticos_5.readFeatures(json_Depositosdetriticos_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Depositosdetriticos_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Depositosdetriticos_5.addFeatures(features_Depositosdetriticos_5);
var lyr_Depositosdetriticos_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Depositosdetriticos_5, 
                style: style_Depositosdetriticos_5,
                popuplayertitle: 'Depositos detriticos',
                interactive: true,
    title: 'Depositos detriticos<br />\
    <img src="styles/legend/Depositosdetriticos_5_0.png" /> Sedimentos muy inestables<br />' });
var format_SigamFallasinversas_6 = new ol.format.GeoJSON();
var features_SigamFallasinversas_6 = format_SigamFallasinversas_6.readFeatures(json_SigamFallasinversas_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SigamFallasinversas_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SigamFallasinversas_6.addFeatures(features_SigamFallasinversas_6);
var lyr_SigamFallasinversas_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SigamFallasinversas_6, 
                style: style_SigamFallasinversas_6,
                popuplayertitle: 'Sigam - Fallas inversas',
                interactive: true,
    title: 'Sigam - Fallas inversas<br />\
    <img src="styles/legend/SigamFallasinversas_6_0.png" /> Falla inversa<br />' });
var format_Red_hidrografica_7 = new ol.format.GeoJSON();
var features_Red_hidrografica_7 = format_Red_hidrografica_7.readFeatures(json_Red_hidrografica_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Red_hidrografica_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Red_hidrografica_7.addFeatures(features_Red_hidrografica_7);
var lyr_Red_hidrografica_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Red_hidrografica_7, 
                style: style_Red_hidrografica_7,
                popuplayertitle: 'Red_hidrografica',
                interactive: true,
    title: 'Red_hidrografica<br />\
    <img src="styles/legend/Red_hidrografica_7_0.png" />   Arroyos<br />\
    <img src="styles/legend/Red_hidrografica_7_1.png" />   Cauce principal<br />' });
var format_LagunaEsmeralda_8 = new ol.format.GeoJSON();
var features_LagunaEsmeralda_8 = format_LagunaEsmeralda_8.readFeatures(json_LagunaEsmeralda_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LagunaEsmeralda_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LagunaEsmeralda_8.addFeatures(features_LagunaEsmeralda_8);
var lyr_LagunaEsmeralda_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LagunaEsmeralda_8, 
                style: style_LagunaEsmeralda_8,
                popuplayertitle: 'Laguna Esmeralda',
                interactive: true,
    title: 'Laguna Esmeralda<br />\
    <img src="styles/legend/LagunaEsmeralda_8_0.png" />   Laguna Esmeralda<br />' });
var format_SigamTiposdePeligros_9 = new ol.format.GeoJSON();
var features_SigamTiposdePeligros_9 = format_SigamTiposdePeligros_9.readFeatures(json_SigamTiposdePeligros_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SigamTiposdePeligros_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SigamTiposdePeligros_9.addFeatures(features_SigamTiposdePeligros_9);
var lyr_SigamTiposdePeligros_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SigamTiposdePeligros_9, 
                style: style_SigamTiposdePeligros_9,
                popuplayertitle: 'Sigam - Tipos de Peligros',
                interactive: true,
    title: 'Sigam - Tipos de Peligros<br />\
    <img src="styles/legend/SigamTiposdePeligros_9_0.png" />     Avalanchas<br />\
    <img src="styles/legend/SigamTiposdePeligros_9_1.png" />     Flujos de detritos<br />\
    <img src="styles/legend/SigamTiposdePeligros_9_2.png" />     Erosión hidrica<br />' });
var format_ParcelasImpactoevento2017_10 = new ol.format.GeoJSON();
var features_ParcelasImpactoevento2017_10 = format_ParcelasImpactoevento2017_10.readFeatures(json_ParcelasImpactoevento2017_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParcelasImpactoevento2017_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParcelasImpactoevento2017_10.addFeatures(features_ParcelasImpactoevento2017_10);
var lyr_ParcelasImpactoevento2017_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParcelasImpactoevento2017_10, 
                style: style_ParcelasImpactoevento2017_10,
                popuplayertitle: 'OSM Parcelas (Impacto evento 2017)',
                interactive: true,
    title: 'OSM Parcelas (Impacto evento 2017)<br />\
    <img src="styles/legend/ParcelasImpactoevento2017_10_0.png" />   Destruccion total o muy severa<br />\
    <img src="styles/legend/ParcelasImpactoevento2017_10_1.png" />   Destruccion alta a media<br />\
    <img src="styles/legend/ParcelasImpactoevento2017_10_2.png" />   Impacto moderado<br />\
    <img src="styles/legend/ParcelasImpactoevento2017_10_3.png" />   Impacto bajo o nulo<br />' });
var format_Equipamientourbano_11 = new ol.format.GeoJSON();
var features_Equipamientourbano_11 = format_Equipamientourbano_11.readFeatures(json_Equipamientourbano_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Equipamientourbano_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Equipamientourbano_11.addFeatures(features_Equipamientourbano_11);
var lyr_Equipamientourbano_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Equipamientourbano_11, 
                style: style_Equipamientourbano_11,
                popuplayertitle: 'OSM Equipamiento urbano',
                interactive: true,
    title: 'OSM Equipamiento urbano<br />\
    <i>Servicios e institucional</i><br />\
    <img src="styles/legend/Equipamientourbano_11_0.png" />   Agua Potable S.A.<br />\
    <img src="styles/legend/Equipamientourbano_11_3.png" />   Empresa EJESA<br />\
    <img src="styles/legend/Equipamientourbano_11_8.png" />   Salón Municipal<br />\
    <i>Cultura y culto</i><br />\
    <img src="styles/legend/Equipamientourbano_11_1.png" />   Biblioteca 3 de Abril<br />\
    <img src="styles/legend/Equipamientourbano_11_5.png" />   Iglesia Ntra. Sra. del Valle<br />\
    <img src="styles/legend/Equipamientourbano_11_6.png" />   Playón Comparsa<br />\
    <i>Espacios públicos y deporte</i><br />\
    <img src="styles/legend/Equipamientourbano_11_7.png" />   Plaza 3 de Abril<br />\
    <img src="styles/legend/Equipamientourbano_11_4.png" />   Espacio Verde<br />\
    <img src="styles/legend/Equipamientourbano_11_2.png" />   Campo Deportivo<br />\
    <i>Transporte</i><br />\
    <img src="styles/legend/Equipamientourbano_11_9.png" />   Tren Turistico<br />' });
var format_IdejuyCentrodeSalud_12 = new ol.format.GeoJSON();
var features_IdejuyCentrodeSalud_12 = format_IdejuyCentrodeSalud_12.readFeatures(json_IdejuyCentrodeSalud_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IdejuyCentrodeSalud_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IdejuyCentrodeSalud_12.addFeatures(features_IdejuyCentrodeSalud_12);
var lyr_IdejuyCentrodeSalud_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IdejuyCentrodeSalud_12, 
                style: style_IdejuyCentrodeSalud_12,
                popuplayertitle: 'Idejuy- Centro de Salud',
                interactive: true,
    title: 'Idejuy- Centro de Salud<br />\
    <img src="styles/legend/IdejuyCentrodeSalud_12_0.png" />   Caps. Volcán (16)<br />' });
var format_IdejuyEstEducativos_13 = new ol.format.GeoJSON();
var features_IdejuyEstEducativos_13 = format_IdejuyEstEducativos_13.readFeatures(json_IdejuyEstEducativos_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IdejuyEstEducativos_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IdejuyEstEducativos_13.addFeatures(features_IdejuyEstEducativos_13);
var lyr_IdejuyEstEducativos_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IdejuyEstEducativos_13, 
                style: style_IdejuyEstEducativos_13,
                popuplayertitle: 'Idejuy- Est. Educativos',
                interactive: true,
    title: 'Idejuy- Est. Educativos<br />\
    <img src="styles/legend/IdejuyEstEducativos_13_0.png" />   C. de For. Profesional Nro. 1<br />\
    <img src="styles/legend/IdejuyEstEducativos_13_1.png" />   Col. Nro. 1 Virgen de Punta Corral<br />\
    <img src="styles/legend/IdejuyEstEducativos_13_2.png" />   Esc. Capacitación Laboral<br />\
    <img src="styles/legend/IdejuyEstEducativos_13_3.png" />   Esc.Nro. 17 25 de Mayo<br />' });
var format_Obrasdemitigacin_14 = new ol.format.GeoJSON();
var features_Obrasdemitigacin_14 = format_Obrasdemitigacin_14.readFeatures(json_Obrasdemitigacin_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Obrasdemitigacin_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Obrasdemitigacin_14.addFeatures(features_Obrasdemitigacin_14);
var lyr_Obrasdemitigacin_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Obrasdemitigacin_14, 
                style: style_Obrasdemitigacin_14,
                popuplayertitle: 'Obras de mitigación',
                interactive: true,
    title: 'Obras de mitigación<br />\
    <img src="styles/legend/Obrasdemitigacin_14_0.png" />   Baden<br />\
    <img src="styles/legend/Obrasdemitigacin_14_1.png" />   Cordones cunetas<br />\
    <img src="styles/legend/Obrasdemitigacin_14_2.png" />   Cuenco sedimentador<br />\
    <img src="styles/legend/Obrasdemitigacin_14_3.png" />   Obras longitudinales<br />\
    <img src="styles/legend/Obrasdemitigacin_14_4.png" />   Parque lineal<br />' });
var format_Ign_vialnacional_15 = new ol.format.GeoJSON();
var features_Ign_vialnacional_15 = format_Ign_vialnacional_15.readFeatures(json_Ign_vialnacional_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ign_vialnacional_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ign_vialnacional_15.addFeatures(features_Ign_vialnacional_15);
var lyr_Ign_vialnacional_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ign_vialnacional_15, 
                style: style_Ign_vialnacional_15,
                popuplayertitle: 'Ign_vial nacional',
                interactive: true,
    title: 'Ign_vial nacional<br />\
    <img src="styles/legend/Ign_vialnacional_15_0.png" />   RN 9<br />' });
var format_IdejuyLineaMT_16 = new ol.format.GeoJSON();
var features_IdejuyLineaMT_16 = format_IdejuyLineaMT_16.readFeatures(json_IdejuyLineaMT_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IdejuyLineaMT_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IdejuyLineaMT_16.addFeatures(features_IdejuyLineaMT_16);
var lyr_IdejuyLineaMT_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IdejuyLineaMT_16, 
                style: style_IdejuyLineaMT_16,
                popuplayertitle: 'Idejuy- Linea MT',
                interactive: true,
    title: 'Idejuy- Linea MT<br />\
    <img src="styles/legend/IdejuyLineaMT_16_0.png" />   Alimentador ALQUEBRADA<br />\
    <img src="styles/legend/IdejuyLineaMT_16_1.png" />   Distribuidor ALQUEBRADA<br />\
    <img src="styles/legend/IdejuyLineaMT_16_2.png" />   Distribuidor VOLCAN<br />' });
var format_Lineaferrea_17 = new ol.format.GeoJSON();
var features_Lineaferrea_17 = format_Lineaferrea_17.readFeatures(json_Lineaferrea_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lineaferrea_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lineaferrea_17.addFeatures(features_Lineaferrea_17);
var lyr_Lineaferrea_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lineaferrea_17, 
                style: style_Lineaferrea_17,
                popuplayertitle: 'Linea ferrea',
                interactive: true,
    title: 'Linea ferrea<br />\
    <img src="styles/legend/Lineaferrea_17_0.png" />   Linea Ferrea Tren Solar<br />' });
var format_IdejuyTrazaFOptica_18 = new ol.format.GeoJSON();
var features_IdejuyTrazaFOptica_18 = format_IdejuyTrazaFOptica_18.readFeatures(json_IdejuyTrazaFOptica_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IdejuyTrazaFOptica_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IdejuyTrazaFOptica_18.addFeatures(features_IdejuyTrazaFOptica_18);
var lyr_IdejuyTrazaFOptica_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IdejuyTrazaFOptica_18, 
                style: style_IdejuyTrazaFOptica_18,
                popuplayertitle: 'Idejuy- Traza F Optica',
                interactive: true,
    title: 'Idejuy- Traza F Optica<br />\
    <img src="styles/legend/IdejuyTrazaFOptica_18_0.png" />   Derivación Volcan (OT2)<br />\
    <img src="styles/legend/IdejuyTrazaFOptica_18_1.png" />   DIE - Tumbaya<br />\
    <img src="styles/legend/IdejuyTrazaFOptica_18_2.png" />   Tilcara - S.S. Jujuy<br />\
    <img src="styles/legend/IdejuyTrazaFOptica_18_3.png" />   S/D<br />' });
var format_IdejuyPPotabilizadora_19 = new ol.format.GeoJSON();
var features_IdejuyPPotabilizadora_19 = format_IdejuyPPotabilizadora_19.readFeatures(json_IdejuyPPotabilizadora_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IdejuyPPotabilizadora_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IdejuyPPotabilizadora_19.addFeatures(features_IdejuyPPotabilizadora_19);
var lyr_IdejuyPPotabilizadora_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IdejuyPPotabilizadora_19, 
                style: style_IdejuyPPotabilizadora_19,
                popuplayertitle: 'Idejuy- P. Potabilizadora',
                interactive: true,
    title: 'Idejuy- P. Potabilizadora<br />\
    <img src="styles/legend/IdejuyPPotabilizadora_19_0.png" />   Potabilizadora<br />' });
var format_IdejuyEstaciones_electricas_20 = new ol.format.GeoJSON();
var features_IdejuyEstaciones_electricas_20 = format_IdejuyEstaciones_electricas_20.readFeatures(json_IdejuyEstaciones_electricas_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IdejuyEstaciones_electricas_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IdejuyEstaciones_electricas_20.addFeatures(features_IdejuyEstaciones_electricas_20);
var lyr_IdejuyEstaciones_electricas_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IdejuyEstaciones_electricas_20, 
                style: style_IdejuyEstaciones_electricas_20,
                popuplayertitle: 'Idejuy - Estaciones_electricas',
                interactive: true,
    title: 'Idejuy - Estaciones_electricas<br />\
    <img src="styles/legend/IdejuyEstaciones_electricas_20_0.png" />  Estación de Rebaje<br />\
    <img src="styles/legend/IdejuyEstaciones_electricas_20_1.png" />  Subestación transformadora MT/BT<br />' });
var format_IdejuyPDepuradora_21 = new ol.format.GeoJSON();
var features_IdejuyPDepuradora_21 = format_IdejuyPDepuradora_21.readFeatures(json_IdejuyPDepuradora_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IdejuyPDepuradora_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IdejuyPDepuradora_21.addFeatures(features_IdejuyPDepuradora_21);
var lyr_IdejuyPDepuradora_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IdejuyPDepuradora_21, 
                style: style_IdejuyPDepuradora_21,
                popuplayertitle: 'Idejuy- P. Depuradora',
                interactive: true,
    title: 'Idejuy- P. Depuradora<br />\
    <img src="styles/legend/IdejuyPDepuradora_21_0.png" />   Depuradora<br />' });
var format_Flujo2017_22 = new ol.format.GeoJSON();
var features_Flujo2017_22 = format_Flujo2017_22.readFeatures(json_Flujo2017_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Flujo2017_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Flujo2017_22.addFeatures(features_Flujo2017_22);
var lyr_Flujo2017_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Flujo2017_22, 
                style: style_Flujo2017_22,
                zIndex: 100,
                popuplayertitle: 'Dirección del flujo – evento 2017 (interpretación)',
                interactive: true,
    title: 'Dirección del flujo – evento 2017<br />\
    <img src="styles/legend/Flujo2017_22_0.png" />   Recorrido del aluvión (interpretación)<br />' });
var group_INFRAESTRUCTURA = new ol.layer.Group({
                                layers: [lyr_Obrasdemitigacin_14,lyr_Ign_vialnacional_15,lyr_IdejuyLineaMT_16,lyr_Lineaferrea_17,lyr_IdejuyTrazaFOptica_18,lyr_IdejuyPPotabilizadora_19,lyr_IdejuyEstaciones_electricas_20,lyr_IdejuyPDepuradora_21,],
                                fold: 'close',
                                title: 'INFRAESTRUCTURA'});
var group_MEDIOURBANO = new ol.layer.Group({
                                layers: [lyr_ParcelasImpactoevento2017_10,lyr_Equipamientourbano_11,lyr_IdejuyCentrodeSalud_12,lyr_IdejuyEstEducativos_13,],
                                fold: 'close',
                                title: 'MEDIO URBANO'});
var group_MEDIOFISICO = new ol.layer.Group({
                                layers: [lyr_IdejuyAPUnesco_2,lyr_Subcuenca_3,lyr_Aluvion2017_4,lyr_Flujo2017_22,lyr_Depositosdetriticos_5,lyr_SigamFallasinversas_6,lyr_Red_hidrografica_7,lyr_LagunaEsmeralda_8,lyr_SigamTiposdePeligros_9,],
                                fold: 'close',
                                title: 'MEDIO FISICO'});
var group_MAPASBASE = new ol.layer.Group({
                                layers: [lyr_OpenStreetMap,lyr_GoogleSatelite_0,lyr_GoogleMaps_1,],
                                fold: 'close',
                                title: 'MAPAS BASE'});

lyr_OpenStreetMap.setVisible(false);lyr_GoogleSatelite_0.setVisible(false);lyr_GoogleMaps_1.setVisible(true);lyr_IdejuyAPUnesco_2.setVisible(false);lyr_Subcuenca_3.setVisible(false);lyr_Aluvion2017_4.setVisible(true);lyr_Depositosdetriticos_5.setVisible(true);lyr_SigamFallasinversas_6.setVisible(false);lyr_Red_hidrografica_7.setVisible(true);lyr_LagunaEsmeralda_8.setVisible(true);lyr_SigamTiposdePeligros_9.setVisible(true);lyr_ParcelasImpactoevento2017_10.setVisible(true);lyr_Equipamientourbano_11.setVisible(false);lyr_IdejuyCentrodeSalud_12.setVisible(true);lyr_IdejuyEstEducativos_13.setVisible(false);lyr_Obrasdemitigacin_14.setVisible(false);lyr_Ign_vialnacional_15.setVisible(true);lyr_IdejuyLineaMT_16.setVisible(false);lyr_Lineaferrea_17.setVisible(false);lyr_IdejuyTrazaFOptica_18.setVisible(false);lyr_IdejuyPPotabilizadora_19.setVisible(false);lyr_IdejuyEstaciones_electricas_20.setVisible(false);lyr_IdejuyPDepuradora_21.setVisible(false);lyr_Flujo2017_22.setVisible(true);
var layersList = [group_MAPASBASE,group_MEDIOFISICO,group_MEDIOURBANO,group_INFRAESTRUCTURA];
lyr_IdejuyAPUnesco_2.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'nam': 'nam', 'gna': 'gna', 'fna': 'fna', 'ara': 'ara', 'dct': 'dct', 'sag': 'sag', 'Nombre': 'Nombre', });
lyr_Subcuenca_3.set('fieldAliases', {'GroupID': 'GroupID', 'Nombre': 'Nombre:', 'Fuente': 'Fuente', 'Sag': 'Sag', });
lyr_Aluvion2017_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'cod_zona': 'Zona', 'zonas_2017': 'Descripción', 'nive_pel': 'Nivel de peligro', 'impacto': 'Impacto', 'fecha_even': 'Fecha del evento', 'sag': 'Fuente', 'Areas': 'Areas', });
lyr_Depositosdetriticos_5.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Litologia': 'Litologia', 'Peligro': 'Peligro', 'Amenazas': 'Amenazas', });
lyr_SigamFallasinversas_6.set('fieldAliases', {'tipo': 'tipo', 'certidumbr': 'certidumbr', 'edad_neote': 'edad_neote', 'observacio': 'observacio', 'id': 'id', 'Subtipo': 'Subtipo', });
lyr_Red_hidrografica_7.set('fieldAliases', {'categoria': 'categoria', 'sag': 'sag', 'Cateogrias': 'Cursos de agua:', });
lyr_LagunaEsmeralda_8.set('fieldAliases', {'Name': 'Name', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Tipo': 'Tipo', });
lyr_SigamTiposdePeligros_9.set('fieldAliases', {'tipo': 'tipo', 'pais': 'pais', 'provincia': 'provincia', 'localidad': 'localidad', 'num_regist': 'num_regist', 'num_hoja': 'num_hoja', 'nombre_hoj': 'nombre_hoj', 'ficha': 'ficha', 'zona_afect': 'zona_afect', 'danos_mat_': 'danos_mat_', 'des_da_mat': 'des_da_mat', 'tipos_da_m': 'tipos_da_m', 'perdidas_e': 'perdidas_e', 'muertos': 'muertos', 'heridos': 'heridos', 'fecha_inic': 'fecha_inic', 'tipo_movim': 'tipo_movim', 'ubicacion': 'ubicacion', 'litologia': 'litologia', 'des_litolo': 'des_litolo', 'edad': 'edad', 'des_edad': 'des_edad', 'volumen': 'volumen', 'extension': 'extension', 'Causas': 'Causas', 'Tipos': 'Tipos', 'hidrogeolo': 'hidrogeolo', 'control_te': 'control_te', 'control_de': 'control_de', 'layer': 'layer', 'path': 'path', });
lyr_ParcelasImpactoevento2017_10.set('fieldAliases', {'id_par_mz': 'id_par_mz', 'zonas_2017': 'Zona', 'manzanas': 'manzanas', 'padron': 'padron', 'impac_2017': 'impac_2017', 'nive_pel': 'Nivel de peligro', 'usos': 'usos', 'nro_inform': 'nro_inform', 'cant_hab': 'cant_hab', 'vulner_hab': 'vulner_hab', 'sag': 'sag', 'Impacto': 'Impacto', });
lyr_Equipamientourbano_11.set('fieldAliases', {'id_par_mz': 'id_par_mz', 'zonas_2017': 'zonas_2017', 'manzanas': 'manzanas', 'padron': 'padron', 'usos': 'usos', 'nro_inform': 'nro_inform', 'Impacto': 'Impacto', 'Nombre': 'Nombre', });
lyr_IdejuyCentrodeSalud_12.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'fna': 'fna', 'gna': 'gna', 'Nombre': 'Nombre', 'sag': 'sag', 'caa': 'caa', 'ies': 'ies', 'ces': 'ces', });
lyr_IdejuyEstEducativos_13.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'cue': 'cue', 'Nombre': 'Nombre', 'ges': 'ges', 'amg': 'amg', 'sag': 'sag', });
lyr_Flujo2017_22.set('fieldAliases', {'Tramo': 'Tramo', 'Descripcion': 'Dirección', 'Fuente': 'Fuente', });
lyr_Flujo2017_22.set('fieldImages', {'Tramo': 'TextEdit', 'Descripcion': 'TextEdit', 'Fuente': 'TextEdit', });
lyr_Flujo2017_22.set('fieldLabels', {'Tramo': 'inline label - always visible', 'Descripcion': 'inline label - always visible', 'Fuente': 'inline label - always visible', });
lyr_Obrasdemitigacin_14.set('fieldAliases', {'Ob': 'Ob', 'Obra': 'Obra:', 'Funcion': 'Función:', 'Fuente': 'Fuente', 'Sag': 'Sag', });
lyr_Ign_vialnacional_15.set('fieldAliases', {'gid': 'gid', 'fdc': 'fdc', 'sag': 'sag', 'id': 'id', 'Ruta': 'Ruta', });
lyr_IdejuyLineaMT_16.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'subtypecd': 'subtypecd', 'nominalvol': 'nominalvol', 'comments': 'comments', 'tipo': 'tipo', 'fna_nomgeo': 'fna_nomgeo', 'fun_estado': 'fun_estado', 'gna_termge': 'gna_termge', 'nam_termes': 'nam_termes', 'sag_autori': 'sag_autori', 'ten_tensio': 'ten_tensio', 'voltaje': 'voltaje', 'id': 'id', 'visor': 'visor', 'Nombre': 'Nombre', });
lyr_Lineaferrea_17.set('fieldAliases', {'id': 'id', 'Nombre': 'Nombre', });
lyr_IdejuyTrazaFOptica_18.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'cic': 'cic', 'not': 'not', 'fdd': 'fdd', 'obs': 'obs', 'sag': 'sag', 'Observ.': 'Observ.', });
lyr_IdejuyPPotabilizadora_19.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'gid': 'gid', 'fna': 'fna', 'gna': 'gna', 'nam': 'nam', 'fun': 'fun', 'sag': 'sag', 'Planta': 'Planta', });
lyr_IdejuyEstaciones_electricas_20.set('fieldAliases', {'name': 'name', 'ogc_fid': 'ogc_fid', 'Tipo': 'Tipo', 'fna_nomgeo': 'fna_nomgeo', 'fun_estado': 'fun_estado', 'gna_termge': 'gna_termge', 'nam_termes': 'nam_termes', 'sag_autori': 'sag_autori', });
lyr_IdejuyPDepuradora_21.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'gid': 'gid', 'fna': 'fna', 'gna': 'gna', 'nam': 'nam', 'fun': 'fun', 'sag': 'sag', 'Planta': 'Planta', });
lyr_IdejuyAPUnesco_2.set('fieldImages', {'ogc_fid': 'Range', 'nam': 'TextEdit', 'gna': 'TextEdit', 'fna': 'TextEdit', 'ara': 'TextEdit', 'dct': 'DateTime', 'sag': 'TextEdit', 'Nombre': 'TextEdit', });
lyr_Subcuenca_3.set('fieldImages', {'GroupID': 'TextEdit', 'Nombre': 'TextEdit', 'Fuente': 'TextEdit', 'Sag': 'TextEdit', });
lyr_Aluvion2017_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'cod_zona': 'TextEdit', 'zonas_2017': 'TextEdit', 'nive_pel': 'TextEdit', 'impacto': 'TextEdit', 'fecha_even': 'DateTime', 'sag': 'TextEdit', 'Areas': 'TextEdit', });
lyr_Depositosdetriticos_5.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Litologia': 'TextEdit', 'Peligro': 'TextEdit', 'Amenazas': 'TextEdit', });
lyr_SigamFallasinversas_6.set('fieldImages', {'tipo': 'TextEdit', 'certidumbr': 'TextEdit', 'edad_neote': 'TextEdit', 'observacio': 'TextEdit', 'id': 'TextEdit', 'Subtipo': 'TextEdit', });
lyr_Red_hidrografica_7.set('fieldImages', {'categoria': 'TextEdit', 'sag': 'TextEdit', 'Cateogrias': 'TextEdit', });
lyr_LagunaEsmeralda_8.set('fieldImages', {'Name': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'Tipo': 'TextEdit', });
lyr_SigamTiposdePeligros_9.set('fieldImages', {'tipo': 'TextEdit', 'pais': 'TextEdit', 'provincia': 'TextEdit', 'localidad': 'TextEdit', 'num_regist': 'TextEdit', 'num_hoja': 'TextEdit', 'nombre_hoj': 'TextEdit', 'ficha': 'TextEdit', 'zona_afect': 'TextEdit', 'danos_mat_': 'TextEdit', 'des_da_mat': 'TextEdit', 'tipos_da_m': 'TextEdit', 'perdidas_e': 'TextEdit', 'muertos': 'TextEdit', 'heridos': 'TextEdit', 'fecha_inic': 'TextEdit', 'tipo_movim': 'TextEdit', 'ubicacion': 'TextEdit', 'litologia': 'TextEdit', 'des_litolo': 'TextEdit', 'edad': 'TextEdit', 'des_edad': 'TextEdit', 'volumen': 'TextEdit', 'extension': 'TextEdit', 'Causas': 'TextEdit', 'Tipos': 'TextEdit', 'hidrogeolo': 'TextEdit', 'control_te': 'TextEdit', 'control_de': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_ParcelasImpactoevento2017_10.set('fieldImages', {'id_par_mz': 'TextEdit', 'zonas_2017': 'TextEdit', 'manzanas': 'TextEdit', 'padron': 'TextEdit', 'impac_2017': 'TextEdit', 'nive_pel': 'TextEdit', 'usos': 'TextEdit', 'nro_inform': 'TextEdit', 'cant_hab': 'TextEdit', 'vulner_hab': 'TextEdit', 'sag': 'TextEdit', 'Impacto': '', });
lyr_Equipamientourbano_11.set('fieldImages', {'id_par_mz': 'TextEdit', 'zonas_2017': 'TextEdit', 'manzanas': 'TextEdit', 'padron': 'TextEdit', 'usos': 'TextEdit', 'nro_inform': 'TextEdit', 'Impacto': 'TextEdit', 'Nombre': 'TextEdit', });
lyr_IdejuyCentrodeSalud_12.set('fieldImages', {'ogc_fid': 'TextEdit', 'fna': 'TextEdit', 'gna': 'TextEdit', 'Nombre': 'TextEdit', 'sag': 'TextEdit', 'caa': 'TextEdit', 'ies': 'TextEdit', 'ces': 'TextEdit', });
lyr_IdejuyEstEducativos_13.set('fieldImages', {'ogc_fid': 'TextEdit', 'cue': 'TextEdit', 'Nombre': 'TextEdit', 'ges': 'TextEdit', 'amg': 'TextEdit', 'sag': 'TextEdit', });
lyr_Obrasdemitigacin_14.set('fieldImages', {'Ob': 'TextEdit', 'Obra': 'TextEdit', 'Funcion': 'TextEdit', 'Fuente': 'TextEdit', 'Sag': 'TextEdit', });
lyr_Ign_vialnacional_15.set('fieldImages', {'gid': 'TextEdit', 'fdc': 'TextEdit', 'sag': 'TextEdit', 'id': 'TextEdit', 'Ruta': 'TextEdit', });
lyr_IdejuyLineaMT_16.set('fieldImages', {'ogc_fid': 'TextEdit', 'subtypecd': 'TextEdit', 'nominalvol': 'TextEdit', 'comments': 'TextEdit', 'tipo': 'TextEdit', 'fna_nomgeo': 'TextEdit', 'fun_estado': 'TextEdit', 'gna_termge': 'TextEdit', 'nam_termes': 'TextEdit', 'sag_autori': 'TextEdit', 'ten_tensio': 'TextEdit', 'voltaje': 'TextEdit', 'id': 'TextEdit', 'visor': 'TextEdit', 'Nombre': 'TextEdit', });
lyr_Lineaferrea_17.set('fieldImages', {'id': 'TextEdit', 'Nombre': 'TextEdit', });
lyr_IdejuyTrazaFOptica_18.set('fieldImages', {'ogc_fid': 'TextEdit', 'cic': 'TextEdit', 'not': 'TextEdit', 'fdd': 'DateTime', 'obs': 'TextEdit', 'sag': 'TextEdit', 'Observ.': 'TextEdit', });
lyr_IdejuyPPotabilizadora_19.set('fieldImages', {'ogc_fid': 'TextEdit', 'gid': 'TextEdit', 'fna': 'TextEdit', 'gna': 'TextEdit', 'nam': 'TextEdit', 'fun': 'TextEdit', 'sag': 'TextEdit', 'Planta': 'TextEdit', });
lyr_IdejuyEstaciones_electricas_20.set('fieldImages', {'name': 'TextEdit', 'ogc_fid': 'TextEdit', 'Tipo': 'TextEdit', 'fna_nomgeo': 'TextEdit', 'fun_estado': 'TextEdit', 'gna_termge': 'TextEdit', 'nam_termes': 'TextEdit', 'sag_autori': 'TextEdit', });
lyr_IdejuyPDepuradora_21.set('fieldImages', {'ogc_fid': 'TextEdit', 'gid': 'TextEdit', 'fna': 'TextEdit', 'gna': 'TextEdit', 'nam': 'TextEdit', 'fun': 'TextEdit', 'sag': 'TextEdit', 'Planta': 'TextEdit', });
lyr_IdejuyAPUnesco_2.set('fieldLabels', {'ogc_fid': 'hidden field', 'nam': 'hidden field', 'gna': 'hidden field', 'fna': 'hidden field', 'ara': 'hidden field', 'dct': 'hidden field', 'sag': 'hidden field', 'Nombre': 'inline label - always visible', });
lyr_Subcuenca_3.set('fieldLabels', {'GroupID': 'hidden field', 'Nombre': 'inline label - always visible', 'Fuente': 'hidden field', 'Sag': 'hidden field', });
lyr_Aluvion2017_4.set('fieldLabels', {'OBJECTID': 'hidden field', 'cod_zona': 'inline label - always visible', 'zonas_2017': 'inline label - always visible', 'nive_pel': 'inline label - always visible', 'impacto': 'inline label - always visible', 'fecha_even': 'inline label - always visible', 'sag': 'hidden field', 'Areas': 'hidden field', });
lyr_Depositosdetriticos_5.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'Litologia': 'hidden field', 'Peligro': 'inline label - always visible', 'Amenazas': 'hidden field', });
lyr_SigamFallasinversas_6.set('fieldLabels', {'tipo': 'hidden field', 'certidumbr': 'hidden field', 'edad_neote': 'hidden field', 'observacio': 'hidden field', 'id': 'hidden field', 'Subtipo': 'inline label - always visible', });
lyr_Red_hidrografica_7.set('fieldLabels', {'categoria': 'hidden field', 'sag': 'hidden field', 'Cateogrias': 'inline label - always visible', });
lyr_LagunaEsmeralda_8.set('fieldLabels', {'Name': 'hidden field', 'Latitud': 'hidden field', 'Longitud': 'hidden field', 'Tipo': 'inline label - always visible', });
lyr_SigamTiposdePeligros_9.set('fieldLabels', {'tipo': 'hidden field', 'pais': 'hidden field', 'provincia': 'hidden field', 'localidad': 'hidden field', 'num_regist': 'hidden field', 'num_hoja': 'hidden field', 'nombre_hoj': 'hidden field', 'ficha': 'hidden field', 'zona_afect': 'hidden field', 'danos_mat_': 'hidden field', 'des_da_mat': 'hidden field', 'tipos_da_m': 'hidden field', 'perdidas_e': 'hidden field', 'muertos': 'hidden field', 'heridos': 'hidden field', 'fecha_inic': 'hidden field', 'tipo_movim': 'hidden field', 'ubicacion': 'hidden field', 'litologia': 'hidden field', 'des_litolo': 'hidden field', 'edad': 'hidden field', 'des_edad': 'hidden field', 'volumen': 'hidden field', 'extension': 'hidden field', 'Causas': 'inline label - always visible', 'Tipos': 'inline label - visible with data', 'hidrogeolo': 'hidden field', 'control_te': 'hidden field', 'control_de': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_ParcelasImpactoevento2017_10.set('fieldLabels', {'id_par_mz': 'hidden field', 'zonas_2017': 'inline label - always visible', 'manzanas': 'hidden field', 'padron': 'hidden field', 'impac_2017': 'hidden field', 'nive_pel': 'inline label - always visible', 'usos': 'hidden field', 'nro_inform': 'hidden field', 'cant_hab': 'hidden field', 'vulner_hab': 'hidden field', 'sag': 'hidden field', 'Impacto': 'inline label - always visible', });
lyr_Equipamientourbano_11.set('fieldLabels', {'id_par_mz': 'hidden field', 'zonas_2017': 'hidden field', 'manzanas': 'hidden field', 'padron': 'hidden field', 'usos': 'hidden field', 'nro_inform': 'hidden field', 'Impacto': 'hidden field', 'Nombre': 'inline label - visible with data', });
lyr_IdejuyCentrodeSalud_12.set('fieldLabels', {'ogc_fid': 'hidden field', 'fna': 'hidden field', 'gna': 'hidden field', 'Nombre': 'inline label - always visible', 'sag': 'hidden field', 'caa': 'hidden field', 'ies': 'hidden field', 'ces': 'hidden field', });
lyr_IdejuyEstEducativos_13.set('fieldLabels', {'ogc_fid': 'hidden field', 'cue': 'hidden field', 'Nombre': 'inline label - always visible', 'ges': 'hidden field', 'amg': 'hidden field', 'sag': 'hidden field', });
lyr_Obrasdemitigacin_14.set('fieldLabels', {'Ob': 'hidden field', 'Obra': 'inline label - visible with data', 'Funcion': 'inline label - always visible', 'Fuente': 'hidden field', 'Sag': 'hidden field', });
lyr_Ign_vialnacional_15.set('fieldLabels', {'gid': 'hidden field', 'fdc': 'hidden field', 'sag': 'hidden field', 'id': 'hidden field', 'Ruta': 'inline label - always visible', });
lyr_IdejuyLineaMT_16.set('fieldLabels', {'ogc_fid': 'hidden field', 'subtypecd': 'hidden field', 'nominalvol': 'hidden field', 'comments': 'hidden field', 'tipo': 'hidden field', 'fna_nomgeo': 'hidden field', 'fun_estado': 'hidden field', 'gna_termge': 'hidden field', 'nam_termes': 'hidden field', 'sag_autori': 'hidden field', 'ten_tensio': 'hidden field', 'voltaje': 'hidden field', 'id': 'hidden field', 'visor': 'hidden field', 'Nombre': 'inline label - always visible', });
lyr_Lineaferrea_17.set('fieldLabels', {'id': 'hidden field', 'Nombre': 'inline label - always visible', });
lyr_IdejuyTrazaFOptica_18.set('fieldLabels', {'ogc_fid': 'hidden field', 'cic': 'hidden field', 'not': 'hidden field', 'fdd': 'hidden field', 'obs': 'hidden field', 'sag': 'hidden field', 'Observ.': 'inline label - always visible', });
lyr_IdejuyPPotabilizadora_19.set('fieldLabels', {'ogc_fid': 'hidden field', 'gid': 'hidden field', 'fna': 'hidden field', 'gna': 'hidden field', 'nam': 'hidden field', 'fun': 'hidden field', 'sag': 'hidden field', 'Planta': 'inline label - always visible', });
lyr_IdejuyEstaciones_electricas_20.set('fieldLabels', {'name': 'hidden field', 'ogc_fid': 'hidden field', 'Tipo': 'header label - always visible', 'fna_nomgeo': 'hidden field', 'fun_estado': 'hidden field', 'gna_termge': 'hidden field', 'nam_termes': 'hidden field', 'sag_autori': 'hidden field', });
lyr_IdejuyPDepuradora_21.set('fieldLabels', {'ogc_fid': 'hidden field', 'gid': 'hidden field', 'fna': 'hidden field', 'gna': 'hidden field', 'nam': 'hidden field', 'fun': 'hidden field', 'sag': 'hidden field', 'Planta': 'inline label - always visible', });
lyr_IdejuyPDepuradora_21.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});

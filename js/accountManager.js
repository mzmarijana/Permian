$(function () {
    var availableTags = ["Mewbourne", "Anadarko", "Pioneer", "Charger", "Laredo", "EXL", "Apache", "XTO", "Cimarex", "Chevron", "Matador", "Blackbeard", "EOG", "Blackbrush", "Summit", "Elevation", "Crownquest", "OXY", "Endeavor", "Forge", "Lewis", "Abraxas", "TX American", "Jones Energy", "Marathon", "Concho", "Diamondblack", "SM Energy", "Energen", "Fasken"];
    $("#tags").autocomplete({
        source: availableTags
    });
});
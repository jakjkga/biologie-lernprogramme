var feldanzahl=64;
var startanzahl_fuechse=4;
var startanzahl_kaninchen=12;
var startanzahl_gras=feldanzahl-(startanzahl_fuechse+startanzahl_kaninchen);
var runde=0;
var positionen_fuechse=[];
var positionen_kaninchen=[];
var positionen_gras=[];
var startpositionen=[];
var alle_positionen_sortiert=[];
var positionen_fuechse_zwischenspeicher=[];
var positionen_kaninchen_zwischenspeicher=[];
var positionen_gras_zwischenspeicher=[];
var alle_zahlenwerte=[];


function ueberpruefe_fuechse() {
    for (var i=0; i < positionen_fuechse.length; i++) {
        var nummer=positionen_fuechse[i];
        var key=felder[nummer];
        var nachbarfelder=benachbarte_felder[key];
        var nachbarn=[];
        nachbarn.length=0;
        for (var j=0; j < nachbarfelder.length; j++) {
            var nachbarfeld_key=nachbarfelder[j];
            var nachbarfeld_nummer=felder.indexOf(nachbarfeld_key);
            if (positionen_fuechse.indexOf(nachbarfeld_nummer) > -1) {
                nachbarn.push('fuchs');
            }
            if (positionen_kaninchen.indexOf(nachbarfeld_nummer) > -1) {
                nachbarn.push('kaninchen');
            }
            if (positionen_gras.indexOf(nachbarfeld_nummer) > -1) {
                nachbarn.push('gras');
            }
        }
        nachbarn.sort();
        var nachbarn_key=nachbarn.join('_');
        //console.log('ueberpruefe_fuechse:  feldid='+key+' key='+nachbarn_key);
        /* sobald mindestestens ein benachbartes Kaninchenfeld vorhanden ist, überlebt der Fuchs */
        
        var kaninchenzahl=0;
        try {
            kaninchenzahl=nachbarn.indexOf('kaninchen').length;
        } catch(e) {
            console.log('Kaninchenzahl: '+e);
        }
        
        if (kaninchenzahl > 1) { /* nachbarn_key.match(/kaninchen/) kaninchenzahl == 1 || kaninchenzahl == 4 && kaninchenzahl > 2 */
            setze_hintergrund(key, bildpfade['fuchs']);
            positionen_fuechse_zwischenspeicher.push(nummer);
        } else {
            switch (nachbarn_key) {
                /* benachbarte Grasefelder führen zum Verhungern und somit zu einer Umwandlung in Gras */
                case 'gras_gras_gras_gras':
                    setze_hintergrund(key, bildpfade['gras']);
                    positionen_gras_zwischenspeicher.push(nummer);
                    break
                case 'gras_gras_gras':
                    setze_hintergrund(key, bildpfade['gras']);
                    positionen_gras_zwischenspeicher.push(nummer);
                    break
                case 'gras_gras':
                    setze_hintergrund(key, bildpfade['gras']);
                    positionen_gras_zwischenspeicher.push(nummer);
                    break
                /* Falls alle Nachbarfelder ebenfalls mit Füchsen besetzt sind, führt zum Verhungern und somit zu einer Umwandlung in Gras */
                case 'fuchs_fuchs_fuchs_fuchs':
                    setze_hintergrund(key, bildpfade['gras']);
                    positionen_gras_zwischenspeicher.push(nummer);
                    break
                case 'fuchs_fuchs_fuchs':
                    setze_hintergrund(key, bildpfade['gras']);
                    positionen_gras_zwischenspeicher.push(nummer);
                    break
                case 'fuchs_fuchs':
                    setze_hintergrund(key, bildpfade['gras']);
                    positionen_gras_zwischenspeicher.push(nummer);
                    break
                /*TODO: fehlende Schlüssel:
                fuchs_gras_gras_gras
                fuchs_fuchs_gras_gras
                fuchs_fuchs_fuchs_gras
                
                fuchs_gras_gras
                fuchs_fuchs_gras
                
                fuchs_gras
                
                */
                //Start Zusatzschlüssel
                case 'fuchs_gras_gras_gras':
                    setze_hintergrund(key, bildpfade['fuchs']);
                    positionen_fuechse_zwischenspeicher.push(nummer);
                    break
                /*
                case 'fuchs_gras_gras':
                    setze_hintergrund(key, bildpfade['fuchs']);
                    positionen_fuechse_zwischenspeicher.push(nummer);
                    break
                */
                //ENDE Zusatzschlüssel
                default:
                    setze_hintergrund(key, bildpfade['gras']);
                    positionen_gras_zwischenspeicher.push(nummer);
                    console.log('fuechse: default => gras key='+nachbarn_key);
                    break
            }
        }
        positionen_fuechse_zwischenspeicher.sort();
        positionen_kaninchen_zwischenspeicher.sort();
        positionen_gras_zwischenspeicher.sort();   
    }
}

function ueberpruefe_kaninchen() {
    for (var i=0; i < positionen_kaninchen.length; i++) {
        var nummer=positionen_kaninchen[i];
        var key=felder[nummer];
        var nachbarfelder=benachbarte_felder[key];
        var nachbarn=[];
        nachbarn.length=0;
        for (var j=0; j < nachbarfelder.length; j++) {
            var nachbarfeld_key=nachbarfelder[j];
            var nachbarfeld_nummer=felder.indexOf(nachbarfeld_key);
            if (positionen_fuechse.indexOf(nachbarfeld_nummer) > -1) {
                nachbarn.push('fuchs');
            }
            if (positionen_kaninchen.indexOf(nachbarfeld_nummer) > -1) {
                nachbarn.push('kaninchen');
            }
            if (positionen_gras.indexOf(nachbarfeld_nummer) > -1) {
                nachbarn.push('gras');
            }
        }
        nachbarn.sort();
        var nachbarn_key=nachbarn.join('_');
        //console.log('ueberpruefe_kaninchen:  feldid='+key+' key='+nachbarn_key);
        /* ist mindestens ein Fuchs in der Nachbarschaft vorhanden, so stirbt das Kaninchen und das Feld wird umgewandelt in ein Fuchsfeld */
        var fuechseanzahl=0;
        try {
            fuechseanzahl=nachbarn.indexOf('fuchs').length;
        } catch(e) {
            console.log('Fuchsanzahl: '+e);
        }
        
        if (nachbarn_key.match(/fuchs/)) { /* nachbarn_key.match(/fuchs/) fuechseanzahl > 1 */
            setze_hintergrund(key, bildpfade['fuchs']);
            positionen_fuechse_zwischenspeicher.push(nummer);
        } else {
            switch (nachbarn_key) {
                /* sind nur Grasfelder benachbarte, überlebt das Kaninchen */
                case 'gras_gras_gras_gras':
                    setze_hintergrund(key, bildpfade['kaninchen']);
                    positionen_kaninchen_zwischenspeicher.push(nummer);
                    break
                case 'gras_gras_gras':
                    setze_hintergrund(key, bildpfade['kaninchen']);
                    positionen_kaninchen_zwischenspeicher.push(nummer);
                    break
                case 'gras_gras':
                    setze_hintergrund(key, bildpfade['kaninchen']);
                    positionen_kaninchen_zwischenspeicher.push(nummer);
                    break
                /* sind alle Nachbarfelder ebenfalls mit Kaninchen besetzt, stirbt das Kaninchen und es entsteht ein Grasfeld */
                case 'kaninchen_kaninchen_kaninchen_kaninchen':
                    setze_hintergrund(key, bildpfade['gras']);
                    positionen_gras_zwischenspeicher.push(nummer);
                    break
                case 'kaninchen_kaninchen_kaninchen':
                    setze_hintergrund(key, bildpfade['gras']);
                    positionen_gras_zwischenspeicher.push(nummer);
                    break
                case 'kaninchen_kaninchen':
                    setze_hintergrund(key, bildpfade['gras']);
                    positionen_gras_zwischenspeicher.push(nummer);
                    break
                /*
                /TODO: fehlende Schlüssel:
                gras_gras_gras_kaninchen
                gras_gras_kaninchen_kaninchen
                gras_kaninchen_kaninchen_kaninchen
                
                gras_gras_kaninchen
                gras_kaninchen_kaninchen
                
                gras_kaninchen
                */
                //Start Zusatzschlüssel
                case 'gras_gras_gras_kaninchen':
                    setze_hintergrund(key, bildpfade['kaninchen']);
                    positionen_kaninchen_zwischenspeicher.push(nummer);
                    break
                case 'gras_gras_kaninchen':
                    setze_hintergrund(key, bildpfade['kaninchen']);
                    positionen_kaninchen_zwischenspeicher.push(nummer);
                    break
                case 'gras_gras_kaninchen_kaninchen':
                    setze_hintergrund(key, bildpfade['kaninchen']);
                    positionen_kaninchen_zwischenspeicher.push(nummer);
                    break
                //ENDE Zusatzschlüssel
                default:
                    setze_hintergrund(key, bildpfade['gras']);
                    positionen_gras_zwischenspeicher.push(nummer);
                    //console.log('kaninchen: default => gras key='+nachbarn_key);
                    break
            }
        }
        positionen_fuechse_zwischenspeicher.sort();
        positionen_kaninchen_zwischenspeicher.sort();
        positionen_gras_zwischenspeicher.sort();   
    }
}

function ueberpruefe_gras() {
    for (var i=0; i < positionen_gras.length; i++) {
        var nummer=positionen_gras[i];
        var key=felder[nummer];
        var nachbarfelder=benachbarte_felder[key];
        var nachbarn=[];
        nachbarn.length=0;
        for (var j=0; j < nachbarfelder.length; j++) {
            var nachbarfeld_key=nachbarfelder[j];
            var nachbarfeld_nummer=felder.indexOf(nachbarfeld_key);
            if (positionen_fuechse.indexOf(nachbarfeld_nummer) > -1) {
                nachbarn.push('fuchs');
            }
            if (positionen_kaninchen.indexOf(nachbarfeld_nummer) > -1) {
                nachbarn.push('kaninchen');
            }
            if (positionen_gras.indexOf(nachbarfeld_nummer) > -1) {
                nachbarn.push('gras');
            }
        }
        nachbarn.sort();
        var nachbarn_key=nachbarn.join('_');
        //console.log('ueberpruefe_gras:  feldid='+key+' key='+nachbarn_key);
        /* benachbarte Kaninchenfelder führen zu einer Änderung in ein Kaninchenfeld */
        var kaninchenzahl=0;
        try {
            kaninchenzahl=nachbarn.indexOf('kaninchen').length;
        } catch(e) {
            console.log('Kaninchenzahl: '+e);
        }
        /*nachbarn_key.match(/kaninchen/)*/
        if (nachbarn_key.match(/kaninchen/)) {
            setze_hintergrund(key, bildpfade['kaninchen']);
            positionen_kaninchen_zwischenspeicher.push(nummer);
        } else {
            switch (nachbarn_key) {
                /* benachbarte Grasfelder führen zu keiner Änderung */
                case 'gras_gras_gras_gras':
                    setze_hintergrund(key, bildpfade['gras']);
                    positionen_gras_zwischenspeicher.push(nummer);
                    break
                case 'gras_gras_gras':
                    setze_hintergrund(key, bildpfade['gras']);
                    positionen_gras_zwischenspeicher.push(nummer);
                    break
                case 'gras_gras':
                    setze_hintergrund(key, bildpfade['gras']);
                    positionen_gras_zwischenspeicher.push(nummer);
                    break
                /* benachbarte Fuchsfelder führen zu keiner Änderung */
                case 'fuchs_fuchs_fuchs_fuchs':
                    setze_hintergrund(key, bildpfade['gras']);
                    positionen_gras_zwischenspeicher.push(nummer);
                    break
                case 'fuchs_fuchs_fuchs':
                    setze_hintergrund(key, bildpfade['gras']);
                    positionen_gras_zwischenspeicher.push(nummer);
                    break
                case 'fuchs_fuchs':
                    setze_hintergrund(key, bildpfade['gras']);
                    positionen_gras_zwischenspeicher.push(nummer);
                    break
               /*TODO: fehlende Schlüssel:
                fuchs_gras_gras_gras
                fuchs_fuchs_gras_gras
                fuchs_fuchs_fuchs_gras
                
                fuchs_gras_gras
                fuchs_fuchs_gras
                
                fuchs_gras
                
                */
               default:
                    setze_hintergrund(key, bildpfade['gras']);
                    positionen_gras_zwischenspeicher.push(nummer);
                    //console.log('gras: default => gras key='+nachbarn_key);
                    break
            }
        }
        positionen_fuechse_zwischenspeicher.sort();
        positionen_kaninchen_zwischenspeicher.sort();
        positionen_gras_zwischenspeicher.sort();   
    }
}

function naechste_runde() {
    //console.log('naechste_runde');
    // aus benachbarten Feldern die neuen Positionen ermitteln und anzeigen
    /*
    Feld      | Nachbarfelder                                Folge
    ----------------------------------------------------------------------------
    fuchs     | alle fuchs                                   wird zu gras
              | alle gras                                    wird zu gras
              | mindestens ein kaninchen                     bleibt fuchs
    ----------------------------------------------------------------------------
    kaninchen | alle gras                                    bleibt kaninchen
              | alle kaninchen                               wird zu gras
              | mindestens ein fuchs                         wird zu fuchs
    ----------------------------------------------------------------------------
    gras      | alle gras                                    bleibt gras
              | mindestens ein kaninchen                     wird zu kaninchen
              | alle fuchs                                   bleibt gras
    ----------------------------------------------------------------------------
    */
    ueberpruefe_fuechse();
    ueberpruefe_kaninchen();
    ueberpruefe_gras();
    //console.log(runde);
    //console.log('Positionen Füchse: '+positionen_fuechse_zwischenspeicher.join());
    //console.log('Positionen Kaninchen: '+positionen_kaninchen_zwischenspeicher.join());
    //console.log('Positionen Gras: '+positionen_gras_zwischenspeicher.join());
    // Positionslisten löschen
    positionen_fuechse.length=0;
    positionen_kaninchen.length=0;
    positionen_gras.length=0;
    // Positionen aus den zwischenspeicherlisten übertragen
    for (var i=0; i < positionen_fuechse_zwischenspeicher.length; i++) {
        positionen_fuechse.push(positionen_fuechse_zwischenspeicher[i])
    }
    for (var j=0; j < positionen_kaninchen_zwischenspeicher.length; j++) {
        positionen_kaninchen.push(positionen_kaninchen_zwischenspeicher[j])
    }
    for (var k=0; k < positionen_gras_zwischenspeicher.length; k++) {
        positionen_gras.push(positionen_gras_zwischenspeicher[k])
    }
    positionen_fuechse.sort();
    positionen_kaninchen.sort();
    positionen_gras.sort(); 
    // Zwischenspeicherlisten löschen
    positionen_fuechse_zwischenspeicher.length=0;
    positionen_kaninchen_zwischenspeicher.length=0;
    positionen_gras_zwischenspeicher.length=0;
}

function spiel_aufbauen() {
    //console.log('spiel_aufbauen');
    startanzahl_fuechse=parseInt($('#a_fuechse option:selected').val());
    startanzahl_kaninchen=parseInt($('#a_kaninchen option:selected').val());
    startanzahl_gras=parseInt($('#a_gras option:selected').val());
    for (var i=0; i < feldanzahl; i++) {
        startpositionen.push(i);
    }
    startpositionen.mischen();
    for (var i=0; i < feldanzahl; i++) {
        alle_positionen_sortiert.push(i);
    }
    positionen_fuechse=startpositionen.slice(0, startanzahl_fuechse).sort();
    //console.log(positionen_fuechse.length+' '+positionen_fuechse.join('-'));
    positionen_kaninchen=startpositionen.slice(startanzahl_fuechse, eval(startanzahl_fuechse+startanzahl_kaninchen)).sort();
    //console.log(positionen_kaninchen.length+' '+positionen_kaninchen.join('-'));
    positionen_gras=startpositionen.slice(eval(startanzahl_fuechse+startanzahl_kaninchen), eval(startanzahl_fuechse+startanzahl_kaninchen+startanzahl_gras)).sort();
    //console.log(positionen_gras.length+' '+positionen_gras.join('-'));
    for (var i=0; i < positionen_fuechse.length; i++) {
        var key=positionen_fuechse[i];
        var feldid=felder[key];
        var bild=bildpfade['fuchs'];
        setze_hintergrund(feldid, bild);
    }
    for (var i=0; i < positionen_kaninchen.length; i++) {
        var key=positionen_kaninchen[i];
        var feldid=felder[key];
        var bild=bildpfade['kaninchen'];
        setze_hintergrund(feldid, bild);
    }
    for (var i=0; i < positionen_gras.length; i++) {
        var key=positionen_gras[i];
        var feldid=felder[key];
        var bild=bildpfade['gras'];
        setze_hintergrund(feldid, bild);
    }
}

function setze_hintergrund(feldid, bild) {
    $('div.feld#'+feldid).css('background-image', 'url('+bild+')');
}

function hole_nachbarfelder(feldid) {
    var meine_nachbarn=benachbarte_felder[feldid];
    return meine_nachbarn
}

function weiter() {
    if (runde == 0) {
        $('#startknopf').attr('value', 'nächste Spielrunde');
        $('#a_fuechse').attr('disabled', true);
        $('#a_kaninchen').attr('disabled', true);
        spiel_aufbauen();
        alle_zahlenwerte.push(startanzahl_fuechse+','+startanzahl_kaninchen+','+startanzahl_gras);
    } else {
        naechste_runde();
        alle_zahlenwerte.push(positionen_fuechse.length+','+positionen_kaninchen.length+','+positionen_gras.length);
    }
    //runde=parseInt($('#i_runde').val());
    $('#i_runde').val(runde);
    runde++;
    //console.log(alle_zahlenwerte.join('\n'));
    $('#ergebnis').val(alle_zahlenwerte.join('\n'));
    plotData();
    $('#jxgbox').show();
}

function lade_seite() {
    $('#jxgbox').hide();
    $('#a_fuechse').removeAttr('disabled');
    $('#a_kaninchen').removeAttr('disabled');
    $('#a_fuechse option[value='+startanzahl_fuechse+']').prop('selected', true);
    $('#a_kaninchen option[value='+startanzahl_kaninchen+']').prop('selected', true);
    $('#a_gras option[value='+startanzahl_gras+']').prop('selected', true);
    $('#i_runde').val(runde);
    $('table#schachbrett td div[class=feld]').bind('click', function(e) {
        //console.log(e.currentTarget.id);
        var meine_nachbarn=hole_nachbarfelder(e.currentTarget.id);
        //console.log(meine_nachbarn.join(' '));
        //alert('Benachbarte Felder: '+meine_nachbarn.join(' '));
        // Nur zum Testen:
        //setze_hintergrund(e.currentTarget.id, bildpfade['fuchs']);
    });
    $('#ergebnis').val('');
}



function startanzahl_anpassen(wer) {
    startanzahl_fuechse=parseInt($('#a_fuechse option:selected').val());
    startanzahl_kaninchen=parseInt($('#a_kaninchen option:selected').val());
    var zwischensumme=startanzahl_fuechse+startanzahl_kaninchen;
    //console.log('startanzahl_fuechse+startanzahl_kaninchen='+zwischensumme);
    if (zwischensumme > feldanzahl) {
        alert('Es stehen insgesamt höchstens 64 Felder zur Verfügung!');
        startanzahl_gras=0;
        $('#a_gras').removeAttr('disabled');
        $('#a_gras option[value='+startanzahl_gras+']').prop('selected', true);
        $('#a_gras').attr('disabled', true);
        switch(wer) {
            case 'fuechse':
                startanzahl_kaninchen=feldanzahl-startanzahl_fuechse;
                $('#a_kaninchen option[value='+startanzahl_kaninchen+']').prop('selected', true);
                break
           case 'kaninchen':
                startanzahl_fuechse=feldanzahl-startanzahl_kaninchen;
                $('#a_fuechse option[value='+startanzahl_fuechse+']').prop('selected', true);
                break 
        }
    } else {
        startanzahl_gras=feldanzahl-zwischensumme;
        $('#a_gras').removeAttr('disabled');
        $('#a_gras option[value='+startanzahl_gras+']').prop('selected', true);
        $('#a_gras').attr('disabled', true);
    }
}

// Mischen
function arrayMischen(){
    var tmp, zufall;
    for(var i=0; i < this.length; i++) {
        zufall=Math.floor(Math.random()*this.length);
        tmp=this[i];
        this[i]=this[zufall];
        this[zufall]=tmp;
    }
}
Array.prototype.mischen=arrayMischen;



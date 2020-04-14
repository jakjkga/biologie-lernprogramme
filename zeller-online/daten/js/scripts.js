function lade_seite() {
   //console.log('lade_seite');
   tuwas('tierische_zelle');
}

var zelltyp='tierische_zelle';

function tuwas(wer) {
    //console.log(wer);
    var menuepunkt=$('#'+wer).parent('div').parent('li').attr('id');
    $('#'+wer).siblings().removeClass('active');
    $('#'+wer).addClass('active');
    if (menuepunkt == 'menuepunkt1') {
        zelltyp = wer;
        var schluessel=zelltyp+'_';
        //console.log(schluessel);
        zeige_bild(schluessel);
        zeige_text(schluessel);
    } else {
        //console.log(menuepunkt);
        //console.log(wer);
        var schluessel=zelltyp+'_'+wer;
        console.log(schluessel);
        zeige_bild(schluessel);
        zeige_text(schluessel);
    }
    ansicht_anpassen();
}

var rein_pflanzliche_organellen=['zellwand', 'vakuole', 'chloroplasten'];

function ansicht_anpassen() {
    //console.log(wer);
    switch (zelltyp) {
        case 'tierische_zelle':
            for (var i=0; i < rein_pflanzliche_organellen.length; i++) {
                //console.log('dekativiere: '+rein_pflanzliche_organellen[i]);
                $('#'+rein_pflanzliche_organellen[i]).addClass('disabled');
                //console.log(rein_pflanzliche_organellen[i]);
            }
            $('#menuepunkt4 a').removeClass('disabled');
            break
        case 'pflanzliche_zelle':
            $('#menuepunkt2 a').removeClass('disabled');
            $('#neurophysiologie').addClass('disabled');
            break
    }

}

function zeige_bild(schluessel) {
    var pfad='daten/img/';
    var endung='.gif';
    var bildquelle=pfad+schluessel+endung;
    $('#anzeigebild').attr('src', bildquelle);
    //console.log(bildquelle);
}

function zeige_text(schluessel) {
    var text=texte[schluessel];
    $('#textausgabe').html(text);
}

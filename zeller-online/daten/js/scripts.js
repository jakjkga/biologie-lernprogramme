function lade_seite() {
   //console.log('lade_seite');
   tuwas('tierische_zelle');
}

function tuwas(wer) {
    //console.log(wer);
    var menuepunkt=$('#'+wer).parent('li').parent('ul').attr('id');
    $('#'+menuepunkt+' li').removeClass('active');
    $('#'+wer).parent('li').addClass('active');
    //console.log(menuepunkt);
    var zelltyp=String($('ul#menuepunkt1 li[class=active] a').attr('id')).replace(/undefined/g, '');
    var organell=String($('ul#menuepunkt2 li[class=active] a').attr('id')).replace(/undefined/g, '');
    var bereich=String($('ul#menuepunkt3 li[class=active] a').attr('id')).replace(/undefined/g, '');
    var kapitel=String($('ul#menuepunkt4 li[class=active] a').attr('id')).replace(/undefined/g, '');
    var zelltyp_text=String($('ul#menuepunkt1 li[class=active] a').text());
    var organell_text=String($('ul#menuepunkt2 li[class=active] a').text());
    var bereich_text=String($('ul#menuepunkt3 li[class=active] a').text());
    var kapitel_text=String($('ul#menuepunkt4 li[class=active] a').text());
    $('#textausgabe').html('<p class="mito">Unzulässige Auswahl:<br />'+zelltyp_text+' &amp; '+organell_text+kapitel_text+'</p>');
    //console.log('Auswahl: '+zelltyp_text+' '+organell_text+' '+bereich_text+' '+kapitel_text);
    switch (menuepunkt) {
        case 'menuepunkt1':
            //console.log('Zelltyp');
            schluessel=zelltyp+'_'+organell;
            zeige_bild(schluessel);
            zeige_text(schluessel);
            break
        case 'menuepunkt2':
            //console.log('Organell');
            schluessel=zelltyp+'_'+organell;
            zeige_bild(schluessel);
            zeige_text(schluessel);
            break
        case 'menuepunkt3':
            //console.log('Bereiche (Kompartimente)');
            schluessel=zelltyp+'_'+bereich;
            zeige_bild(schluessel);
            zeige_text(schluessel);
            break
        case 'menuepunkt4':
            //console.log('Kapitelzuordnung');
            schluessel=zelltyp+'_'+kapitel;
            zeige_bild(schluessel);
            zeige_text(schluessel);
            break
    }
    ansicht_anpassen(wer);
}

var rein_pflanzliche_organellen=['zellwand', 'vakuole', 'chloroplasten'];

function ansicht_anpassen(wer) {
    //console.log(wer);
    switch (wer) {
        case 'tierische_zelle':
            for (var i=0; i < rein_pflanzliche_organellen.length; i++) {
                //console.log('dekativiere: '+rein_pflanzliche_organellen[i]);
                $('#'+rein_pflanzliche_organellen[i]).parent('li').addClass('disabled');
            }
            $('#menuepunkt4 li').removeClass('disabled');
            break
        case 'pflanzliche_zelle':
            $('#menuepunkt2 li').removeClass('disabled');
            $('#neurophysiologie').parent('li').addClass('disabled');
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

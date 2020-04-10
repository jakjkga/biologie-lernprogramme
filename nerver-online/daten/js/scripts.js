function lade_seite() {
    $('#s_auswahl option:first').prop('selected', true);
    setze_auswahl();
}

function setze_auswahl() {
    var schluessel=$('#s_auswahl option:selected').val();
    var bildpfad='daten/img/'+schluessel+'.gif';
    $('#img_schema').attr('src', bildpfad);
    var beschreibungstext=beschreibungstexte[schluessel];
    $('#div_beschreibung').html(beschreibungstext);
    var verweisziel='daten/html/'+schluessel+'.html';
    $('#a_animationsseite').attr('href', verweisziel);
}

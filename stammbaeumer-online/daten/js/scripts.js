function lade_seite() {
    $('#s_stammbaum option:first').prop('selected', true);
    setze();
}

function setze() {
    var schluessel=$('#s_stammbaum option:selected').val();
    var anzeigetext=genotypen[schluessel];
    $('#pre_anzeige').text(anzeigetext[0]+'\n'+anzeigetext[1]);
    var bildpfad='daten/img/'+schluessel+'.gif';
    $('#img_anzeige').attr('src', bildpfad);
}

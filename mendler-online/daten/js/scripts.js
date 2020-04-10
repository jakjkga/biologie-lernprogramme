function lade_seite() {
    $('#s_erbgang option:first').prop('selected', true);
    $('#s_generation option:first').prop('selected', true);
    
    setze();
}

function setze() {
    var erbgang=$('#s_erbgang').val();
    var generation=$('#s_generation').val();
    var genotypschluessel=erbgang+'_'+generation;
    var anzeigetext=genotypen[genotypschluessel];
    $('#div_anzeige').html(anzeigetext);
    var bildpfad='daten/img/'+genotypschluessel+'_phaen.gif';
    $('#img_anzeige').attr('src', bildpfad);
    //console.log(bildpfad);
    var schluessel=erbgang;
    var organismus=datensammlung[schluessel][0];
    var merkmal1=datensammlung[schluessel][1];
    var merkmal1_auspraegung1=datensammlung[schluessel][2];
    var merkmal1_auspraegung2=datensammlung[schluessel][3];
    var merkmal2=datensammlung[schluessel][4];
    var merkmal2_auspraegung1=datensammlung[schluessel][5];
    var merkmal2_auspraegung2=datensammlung[schluessel][6];
    var anzeigetext2='Organismus: <strong>'+organismus+'</strong><br />\n'+
    'Merkmal 1: '+merkmal1+'; Ausprägungen: \n'+merkmal1_auspraegung1+', '+merkmal1_auspraegung2+'<br />\n'+
    'Merkmal 2: '+merkmal2+'; Ausprägungen: \n'+merkmal2_auspraegung1+', '+merkmal2_auspraegung2;
    $('#div_anzeige2').html(anzeigetext2);
}



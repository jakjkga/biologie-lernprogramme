function lade_seite() {
    $('#s_eigene option:first').prop('selected', true);
    $('#s_elter1 option:first').prop('selected', true);
    setze();
}

function setze() {
    var eigene=$('#s_eigene option:selected').val();
    var elter1=$('#s_elter1 option:selected').val();
    var genotypen=datensammlung[eigene][0];
    var blutspender=datensammlung[eigene][1];
    var plasmaspender=datensammlung[eigene][2];
    var elter2=datensammlung[eigene][3][elter1];
    $('#i_genotypen').val(genotypen);
    $('#i_blutspender').val(blutspender);
    $('#i_plasmaspender').val(plasmaspender);
    $('#i_elter2').val(elter2);
    var bildpfad_antigen='daten/img/'+eigene+'_antigen.gif';
    var bildpfad_antikoerper='daten/img/'+eigene+'_antikoerper.gif';
    $('#img_antigen').attr('src', bildpfad_antigen);
    $('#img_antikoerper').attr('src', bildpfad_antikoerper);
    
}

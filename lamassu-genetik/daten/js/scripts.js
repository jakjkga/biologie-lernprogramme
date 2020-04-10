var geno_zu_phaeno={
    'BB':'B',
    'Bb':'B',
    'bB':'B',
    'bb':'b',
    'FF':'F',
    'Ff':'F',
    'fF':'F',
    'ff':'f',
    'GG':'G',
    'Gg':'G',
    'gG':'G',
    'gg':'g',
    'XRXR':'R_w',
    'XRXr':'R_w',
    'XrXR':'R_w',
    'XrXr':'r_w',
    'XRY0':'R_m',
    'XrY0':'r_m'
};



function lade_seite() {
    $('#s_beine_li option:first').prop('selected', true);
    $('#s_beine_re option:first').prop('selected', true);
    $('#s_fluegel_li option:first').prop('selected', true);
    $('#s_fluegel_re option:first').prop('selected', true);
    $('#s_kopf_li option:first').prop('selected', true);
    $('#s_kopf_re option:first').prop('selected', true);
    $('#s_farbe_li option:first').prop('selected', true);
    $('#s_farbe_re option:first').prop('selected', true);
    setze_phaenotyp('s_beine_li');
}

function setze_phaenotyp() {
    var allel_beine_li=$('#s_beine_li option:selected').val();
    var allel_beine_re=$('#s_beine_re option:selected').val();
    var geno_beine=allel_beine_li+allel_beine_re;
    var allel_fluegel_li=$('#s_fluegel_li option:selected').val();
    var allel_fluegel_re=$('#s_fluegel_re option:selected').val();
    var geno_fluegel=allel_fluegel_li+allel_fluegel_re;
    var allel_kopf_li=$('#s_kopf_li option:selected').val();
    var allel_kopf_re=$('#s_kopf_re option:selected').val();
    var geno_kopf=allel_kopf_li+allel_kopf_re;
    var allel_farbe_li=$('#s_farbe_li option:selected').val();
    var allel_farbe_re=$('#s_farbe_re option:selected').val();
    var geno_farbe=allel_farbe_li+allel_farbe_re;
    var phaen_beine=geno_zu_phaeno[geno_beine];
    var phaen_fluegel=geno_zu_phaeno[geno_fluegel];
    var phaen_kopf=geno_zu_phaeno[geno_kopf];
    var phaen_farbe=geno_zu_phaeno[geno_farbe];
    var phaen=phaen_beine+phaen_fluegel+phaen_kopf+phaen_farbe;
    $('#img_phaenotyp').attr('alt', phaen);
    $('#img_phaenotyp').attr('src', 'daten/img/'+phaen+'.svg');
    $('#img_chr1_li').attr('src', 'daten/img/chr1_'+allel_beine_li+'.svg');
    $('#img_chr1_re').attr('src', 'daten/img/chr1_'+allel_beine_re+'.svg');
    $('#img_chr2_li').attr('src', 'daten/img/chr2_'+allel_fluegel_li+allel_kopf_li+'.svg');
    $('#img_chr2_re').attr('src', 'daten/img/chr2_'+allel_fluegel_re+allel_kopf_re+'.svg');
    $('#img_gon_li').attr('src', 'daten/img/gon_'+allel_farbe_li+'.svg');
    $('#img_gon_re').attr('src', 'daten/img/gon_'+allel_farbe_re+'.svg');
    var phaenotyp_anzeige='„'+phaen.replace(/\_w/g, '♀').replace(/\_m/g, '♂')+'“';
    $('#span_phaenotyp').text(phaenotyp_anzeige);
    
    
    

}

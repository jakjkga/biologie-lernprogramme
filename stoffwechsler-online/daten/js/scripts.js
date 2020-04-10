$('#membranvorgaenge').hide();
$('#ckoerperschema').hide();

var aktuelle_auswahl='';

function tuwas(wer) {
    var menuepunkt=$('#'+wer).parent('li').parent('ul').attr('id');
    $('#'+menuepunkt+' li').removeClass('active');
    $('#'+wer).parent('li').addClass('active');
    //console.log(wer);
    var ort=texte[wer]['ort'];
    var ed=texte[wer]['ed'];
    var zwi=texte[wer]['zwi'];
    var prod=texte[wer]['prod'];
    var atp=texte[wer]['atp'];
    var redaeq=texte[wer]['redaeq'];
    var exerg=texte[wer]['exerg'];
    var enderg=texte[wer]['enderg'];
    $('#aus_ort_in_der_zelle').html(ort);
    $('#aus_ausgangsstoffe').html(ed);
    $('#aus_zwischenprodukte').html(zwi);
    $('#aus_endstoffe').html(prod);
    $('#aus_energietraeger').html(atp);
    $('#aus_reduktionsaequivalente').html(redaeq);
    $('#aus_exergonisch').html(exerg);
    $('#aus_endergonisch').html(enderg);
    aktiviere_knoepfe(wer);
    aktuelle_auswahl=wer;
}

function aktiviere_knoepfe(wer) {
    switch (wer) {
        case 'lichtreaktion':
            $('#membranvorgaenge').show();
            $('#ckoerperschema').hide();
            break
        case 'calvinzyklus':
            $('#membranvorgaenge').hide();
            $('#ckoerperschema').show();
            break
        case 'glykolyse':
            $('#membranvorgaenge').hide();
            $('#ckoerperschema').show();
            break
        case 'citratzyklus':
            $('#membranvorgaenge').hide();
            $('#ckoerperschema').show();
            break
        case 'endoxidation':
            $('#membranvorgaenge').show();
            $('#ckoerperschema').hide();
            break
        case 'decarboxylierung':
            $('#membranvorgaenge').hide();
            $('#ckoerperschema').show();
            break
        case 'reduktionsschritt_alk':
            $('#membranvorgaenge').hide();
            $('#ckoerperschema').show();
            break
        case 'reduktionsschritt_milch':
            $('#membranvorgaenge').hide();
            $('#ckoerperschema').show();
            break
    }
}

function zeige_hilfeseite(wer) {
    var url='daten/html/'+aktuelle_auswahl+'.html';
    //location.href=url;
    window.open(url);
}

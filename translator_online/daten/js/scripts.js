function ermittle_as_sequenz() {
    //alert('ermittle_as_sequenz');
    var auswahl = $('input[name=r1]:checked').attr('id');
    if (auswahl) { // ANFANG wurde eine Auswahl getroffen?
        // Schritt 1: Transkription bzw. reverse Transkription
        $('input[type=text]').removeAttr('disabled');
        //alert(auswahl);
        switch (auswahl) { // ANFANG Auswahl-Varianten
            // Fall 1: Reverser Codogener DNA-Strang ist gegeben
            case 'r_codogener_strang_rueckwaerts':
                var dna_codogen_rueckwaerts_zeichenkette_lang=$('#in_codogener_strang_rueckwaerts').val().toUpperCase();
                var dna_codogen_rueckwaerts_zeichenkette=dna_codogen_rueckwaerts_zeichenkette_lang.replace(/\s+/g, '');
                $('#in_codogener_strang_rueckwaerts').val(dna_codogen_rueckwaerts_zeichenkette);
                //alert(dna_codogen_rueckwaerts_zeichenkette);
                var dna_codogen_rueckwaerts_liste=zeichenkette2liste(dna_codogen_rueckwaerts_zeichenkette);
                //var dna_codogen_rueckwaerts_liste_kurz=dna_codogen_rueckwaerts_liste.replace(/ /g, '');
                //alert(dna_codogen_rueckwaerts_liste);
                var dna_codogen_liste=dnareverse2dna(dna_codogen_rueckwaerts_liste);
                //alert(dna_codogen_liste);
                var dna_codogen_zeichenkette=liste2zeichenkette(dna_codogen_liste);
                $('#in_codogener_strang').val(dna_codogen_zeichenkette);
                var dna_code_liste=[];
                for (var i=0; i < dna_codogen_liste.length; i++) {
                    var neues_element=dna2dnakompl(dna_codogen_liste[i]);
                    dna_code_liste.push(neues_element);
                }
                //alert(dna_code_liste);
                var dna_code_zeichenkette=liste2zeichenkette(dna_code_liste);
                $('#in_code_strang').val(dna_code_zeichenkette);
                var mrna_liste=[];
                for (var i=0; i < dna_code_liste.length; i++) {
                    var neues_element=dna2rna(dna_code_liste[i]);
                    mrna_liste.push(neues_element);
                }
                //alert(mrna_liste);
                var mrna_zeichenkette=liste2zeichenkette(mrna_liste);
                $('#in_mrna').val(mrna_zeichenkette);
                break;
            // Fall 2: Codogener DNA-Strang ist gegeben
            case 'r_codogener_strang':
                var dna_codogen_zeichenkette_lang=$('#in_codogener_strang').val().toUpperCase();
                var dna_codogen_zeichenkette=dna_codogen_zeichenkette_lang.replace(/\s+/g, '');
                $('#in_codogener_strang').val(dna_codogen_zeichenkette);
                var dna_codogen_liste=zeichenkette2liste(dna_codogen_zeichenkette);
                //alert(dna_codogen_liste);
                var dna_codogen_rueckwaerts_liste=dnareverse2dna(dna_codogen_liste);
                //alert(dna_codogen_rueckwaerts_liste);
                var dna_codogen_rueckwaerts_zeichenkette=liste2zeichenkette(dna_codogen_rueckwaerts_liste);
                $('#in_codogener_strang_rueckwaerts').val(dna_codogen_rueckwaerts_zeichenkette);
                var dna_code_liste=[];
                for (var i=0; i < dna_codogen_liste.length; i++) {
                    var neues_element=dna2dnakompl(dna_codogen_liste[i]);
                    dna_code_liste.push(neues_element);
                }
                //alert(dna_code_liste);
                var dna_code_zeichenkette=liste2zeichenkette(dna_code_liste);
                $('#in_code_strang').val(dna_code_zeichenkette);
                var mrna_liste=[];
                for (var i=0; i < dna_code_liste.length; i++) {
                    var neues_element=dna2rna(dna_code_liste[i]);
                    mrna_liste.push(neues_element);
                }
                //alert(mrna_liste);
                var mrna_zeichenkette=liste2zeichenkette(mrna_liste);
                $('#in_mrna').val(mrna_zeichenkette);
                break;
            // Fall 3: DNA-Codestrang ist gegeben
            case 'r_code_strang':
                var dna_code_zeichenkette_lang=$('#in_code_strang').val().toUpperCase();
                var dna_code_zeichenkette=dna_code_zeichenkette_lang.replace(/\s+/g, '');
                $('#in_code_strang').val(dna_code_zeichenkette);
                var dna_code_liste=zeichenkette2liste(dna_code_zeichenkette);
                //alert(dna_code_liste);
                var dna_codogen_liste=[];
                for (var i=0; i < dna_code_liste.length; i++) {
                    var neues_element=dna2dnakompl(dna_code_liste[i]);
                    dna_codogen_liste.push(neues_element);
                }
                //alert(dna_codogen_liste);
                var dna_codogen_zeichenkette=liste2zeichenkette(dna_codogen_liste);
                $('#in_codogener_strang').val(dna_codogen_zeichenkette);
                var dna_codogen_rueckwaerts_liste=dnareverse2dna(dna_codogen_liste);
                var dna_codogen_rueckwaerts_zeichenkette=liste2zeichenkette(dna_codogen_rueckwaerts_liste);
                $('#in_codogener_strang_rueckwaerts').val(dna_codogen_rueckwaerts_zeichenkette);
                var mrna_liste=[];
                for (var i=0; i < dna_code_liste.length; i++) {
                    var neues_element=dna2rna(dna_code_liste[i]);
                    mrna_liste.push(neues_element);
                }
                //alert(mrna_liste);
                var mrna_zeichenkette=liste2zeichenkette(mrna_liste);
                $('#in_mrna').val(mrna_zeichenkette);
                break;
            // Fall 4: mRNA ist gegeben
            case 'r_mrna':
                var mrna_zeichenkette_lang=$('#in_mrna').val().toUpperCase();
                var mrna_zeichenkette=mrna_zeichenkette_lang.replace(/\s+/g, '');
                $('#in_mrna').val(mrna_zeichenkette);
                var mrna_liste=zeichenkette2liste(mrna_zeichenkette);
                //alert(mrna_liste);
                var dna_code_liste=[];
                for (var i=0; i < mrna_liste.length; i++) {
                    var neues_element=rna2dnakompl(mrna_liste[i]);
                    dna_code_liste.push(neues_element);
                }
                var dna_code_zeichenkette=liste2zeichenkette(dna_code_liste);
                $('#in_code_strang').val(dna_code_zeichenkette);
                var dna_codogen_liste=[];
                for (var i=0; i < mrna_liste.length; i++) {
                    var neues_element=dna2dnakompl(dna_code_liste[i]);
                    dna_codogen_liste.push(neues_element);
                }
                var dna_codogen_zeichenkette=liste2zeichenkette(dna_codogen_liste);
                $('#in_codogener_strang').val(dna_codogen_zeichenkette);
                var dna_codogen_rueckwaerts_liste=dnareverse2dna(dna_codogen_liste);
                var dna_codogen_rueckwaerts_zeichenkette=liste2zeichenkette(dna_codogen_rueckwaerts_liste);
                $('#in_codogener_strang_rueckwaerts').val(dna_codogen_rueckwaerts_zeichenkette);
                break;
        
        } // ENDE Auswahl-Varianten
        // Schritt 2: eigentliche Translation
        var mrna_tripletts_liste=zerlege_in_tripletts(mrna_zeichenkette);
        //alert(mrna_zeichenkette+' '+mrna_tripletts_liste);
        var as_dreibuchstaben_lang='';
        for (var i=0; i < mrna_tripletts_liste.length; i++) {
            var as_dreibuchstaben_lang=as_dreibuchstaben_lang+' '+hole_as(mrna_tripletts_liste[i])[0];
        }
        //TODO: Leerzeichen abschneiden trim();
        var as_dreibuchstaben=trim(as_dreibuchstaben_lang);
        $('#dreibuchstabencode').val(as_dreibuchstaben);
        var as_einbuchstaben='';
        for (var i=0; i < mrna_tripletts_liste.length; i++) {
            var as_einbuchstaben=as_einbuchstaben+hole_as(mrna_tripletts_liste[i])[1];
        }
        $('#einbuchstabencode').val(as_einbuchstaben);
        // Schritt 3: Meldungen
        var triplett_anzahl=mrna_tripletts_liste.length;
        $('#meldungsbereich').val('Anzahl der Tripletts: '+triplett_anzahl+'\nAchtung: Start- und Stopp-Codons sind hier noch nicht berücksichtigt!')
    } // ENDE wurde eine Auswahl getroffen? 
}

function trim(zeichenkette) {
    // Erst führende, dann Abschließende Whitespaces entfernen
    // und das Ergebnis dieser Operationen zurückliefern
    return zeichenkette.replace (/^\s+/, '').replace (/\s+$/, '');
}

function hole_as(triplett) {
    var as_dreibuchstabenkuerzel=triplett_dictionary[triplett][0];
    var as_einbuchstabenkuerzel=as_dictionary[as_dreibuchstabenkuerzel];
    return [as_dreibuchstabenkuerzel, as_einbuchstabenkuerzel];
}
      
function zerlege_in_tripletts(zeichenkette) {
    var triplett_liste=new Array();
    var zeichenketten_laenge=zeichenkette.length;
    var rest=zeichenketten_laenge % 3;
    var triplett_anzahl=Math.floor((zeichenketten_laenge-rest)/3);
    //alert(triplett_anzahl);
    for (var i=0; i < triplett_anzahl; i++) {
        var untergrenze=parseInt(i*3);
        var obergrenze=parseInt(i*3+3);            
        neues_triplett=zeichenkette.slice(untergrenze, obergrenze);
        //alert('i: '+i+'untergrenze: '+untergrenze+' obergrenze: '+obergrenze+' neues Triplett: '+neues_triplett);
        triplett_liste.push(neues_triplett); 
    }
    return triplett_liste;
}


function dnareverse2dna(a) {
    // Umkehrung der Reihenfolge
    var b = zeichenkette2liste(a).reverse();
    return b
}

function liste2zeichenkette(liste) {
    var zeichenkette='';
    for (var i=0; i< liste.length; i++) {
        zeichenkette=zeichenkette+liste[i];
    }
    return zeichenkette
}

function zeichenkette2liste(zeichenkette) {
    var liste=[];
    for (var i=0; i< zeichenkette.length; i++) {
        liste.push(zeichenkette[i]);
    }
    return liste
}

function rna2prot(a) {
    //var 
}

function dna2rna(a) {
    var a = a;
    switch (a) {
        case 'A':
            a = 'A';
            break;
        case 'T':
            a = 'U';
            break;
        case 'C':
            a = 'C';
            break;
        case 'G':
            a = 'G';
            break;
        default:
            console.log('Fehlerhafte Eingabe: '+a);
    }
    return a
}

function rna2rna(a) {
    switch (a) {
        case 'U':
            a = 'A';
            break;
        case 'A':
            a = 'T';
            break;
        case 'C':
            a = 'G';
            break;
        case 'G':
            a = 'C';
            break;
        default:
            console.log('Fehlerhafte Eingabe: '+a);
    }
    return a
}

function dna2dnakompl(a) {
    switch (a) {
        case 'A':
            a = 'T';
            break;
        case 'T':
            a = 'A';
            break;
        case 'G':
            a = 'C';
            break;
        case 'C':
            a = 'G';
            break;
        default:
            console.log('Fehlerhafte Eingabe: '+a);
    }
    return a
}

function dnakompl2rna(a) {
    switch (a) {
        case 'A':
            a = 'A';
            break;
        case 'U':
            a = 'G';
            break;
        case 'G':
            a = 'G';
            break;
        case 'C':
            a = 'C';
            break;
        default:
            console.log('Fehlerhafte Eingabe: '+a);
    }
    return a
}

function rna2dnakompl(a) {
    switch (a) {
        case 'A':
            a = 'A';
            break;
        case 'U':
            a = 'T';
            break;
        case 'G':
            a = 'G';
            break;
        case 'C':
            a = 'C';
            break;
        default:
            console.log('Fehlerhafte Eingabe: '+a);
    }
    return a
}

function rna_kontrolle(a) {
    switch (a) {
        case 'A':
            a = 'A';
            break;
        case 'U':
            a = 'U';
            break;
        case 'G':
            a = 'G';
            break;
        case 'C':
            a = 'C';
            break;
        default:
            console.log('Fehlerhafte Eingabe: '+a);
    }
    return a
}

function lade_seite() {
    // Eingabe-Auswahl zurücksetzen
    $('input[type=radio]').removeAttr('disabled');
    $('input[name=r1]').attr('checked', false);
    // Texteingabefelder leeren und deaktivieren
    $('input[type=text]').val('');
    $('input[type=text]').attr('disabled', true);
    // Meldungsbereich leeren
    $('textarea').val('');
    $('textarea').attr('disabled', true);
}

function auswahl(wer) {
    //alert('auswahl_wer: '+wer);
    switch (wer) {
        case 'r_codogener_strang_rueckwaerts':
            $('input#in_codogener_strang_rueckwaerts').removeAttr('disabled');
            $('input#in_codogener_strang').attr('disabled', true);
            $('input#in_code_strang').attr('disabled', true);
            $('input#in_mrna').attr('disabled', true);
            $('input#in_codogener_strang').val('');
            $('input#in_code_strang').val('');
            $('input#in_mrna').val('');
            break;
        case 'r_codogener_strang':
            $('input#in_codogener_strang_rueckwaerts').attr('disabled', true);
            $('input#in_codogener_strang').removeAttr('disabled');
            $('input#in_code_strang').attr('disabled', true);
            $('input#in_mrna').attr('disabled', true);
            $('input#in_codogener_strang_rueckwaerts').val('');
            $('input#in_code_strang').val('');
            $('input#in_mrna').val('');
            break;
        case 'r_code_strang':
            $('input#in_codogener_strang_rueckwaerts').attr('disabled', true);
            $('input#in_codogener_strang').attr('disabled', true);
            $('input#in_code_strang').removeAttr('disabled');
            $('input#in_mrna').attr('disabled', true);
            $('input#in_codogener_strang_rueckwaerts').val('');
            $('input#in_codogener_strang').val('');
            $('input#in_mrna').val('');
            break;
        case 'r_mrna':
            $('input#in_codogener_strang_rueckwaerts').attr('disabled', true);
            $('input#in_codogener_strang').attr('disabled', true);
            $('input#in_code_strang').attr('disabled', true);
            $('input#in_mrna').removeAttr('disabled');
            $('input#in_codogener_strang_rueckwaerts').val('');
            $('input#in_codogener_strang').val('');
            $('input#in_code_strang').val('');
            break;
    }
    $('input[type=radio]').attr('disabled', true);
}

function zurueck_setzen() {
    //alert('zurueck_setzen');
    lade_seite();
}



var dnasequenzen=[
    /*
    ['TACTCCTAGAACACGTCTTAGCATTACATT', 'AUGAGGAUCUUGUGCAGAAUCGUAAUGUAA'],
    ['TATCCCTAGAACACGTCTTAGCATTACATT', 'AUAGGGAUCUUGUGCAGAAUCGUAAUGUAA'],
    ['TACTTCTACTACACGTCTAACATTACATTG', 'AUGAAGAUGAUGUGCAGAUUGUAAUGUAAC'],
    ['TACTTCAACAACCCCTCTAACATTACATTT', 'AUGAAGUUGUUGGGGAGAUUGUAAUGUAAA'],
    ['TACTTCTTCAACGCGTCAGCCATTACATTT', 'AUGAAGAAGUUGCGCAGUCGGUAAUGUAAA'],
    */
];

var startnummer=0;
var kettenlaenge=10; // Wie viele Tripletts?

var dna_bausteine=['A', 'T', 'C', 'G'];

Array.prototype.mischen = function() {
    var len = this.length;
    var i = len;
     while (i--) {
        var p = parseInt(Math.random()*len);
        var t = this[i];
    this[i] = this[p];
    this[p] = t;
    }
};

function zeichenkette2liste(zeichenkette) {
    var liste=[];
    for (var i=0; i< zeichenkette.length; i++) {
        liste.push(zeichenkette[i]);
    }
    return liste
}

function dna2rnakompl(a) {
    switch (a) {
        case 'A':
            a = 'U';
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

function lade_seite() {
    dnasequenzen.length=0;
    var dnasequenz='';
    for (var i=0; i < kettenlaenge*3; i++) {
        dna_bausteine.mischen();
        dnasequenz=dnasequenz+dna_bausteine[0];
    }
    var dnasequenz_liste=zeichenkette2liste(dnasequenz);
    var rnasequenz='';
    for (var j=0; j < dnasequenz_liste.length; j++) {
        var rnabaustein=dna2rnakompl(dnasequenz_liste[j]);
        rnasequenz=rnasequenz+rnabaustein;
    }
    var teilliste=[dnasequenz, rnasequenz];
    dnasequenzen.push(teilliste);

    /*
    var zufallszahl=Math.floor(Math.random() * dnasequenzen.length);
    if (typeof zufallszahl === 'number' ) {
        startnummer=zufallszahl;
    }
    */
    $('#i_codogen').val(dnasequenzen[startnummer][0]);
    $('#i_mrna').val(''); // dnasequenzen[startnummer][1]
    $('#meldung').text('');
    $('#i_mrna').keyup(function(e) {
        ueberpruefe();
    });
}

function ueberpruefe() {
    //console.log('ueberpruefe');
    var eingabe=$('#i_mrna').val().toUpperCase();
    $('#i_mrna').val(eingabe);
    var eingabe_alt=eingabe.slice(0, eingabe.length-1);
    var letztes_zeichen=eingabe.slice(eingabe.length-1, eingabe.length);
    var letztes_zeichen_dna=dnasequenzen[startnummer][0].slice(eingabe.length-1, eingabe.length);
    //console.log(' DNA: '+letztes_zeichen_dna+' | RNA: '+letztes_zeichen);
    //console.log(eingabe_alt);
    switch(letztes_zeichen_dna) {
        case 'A':
            if (letztes_zeichen == 'T') {
                $('#i_mrna').val(eingabe_alt);
                $('#meldung').text('In mRNA wird Thymin durch Uracil ersetzt!');
            } else if (letztes_zeichen == 'G') {
                $('#i_mrna').val(eingabe_alt);
                $('#meldung').text('Guanin ist nicht komplementär zu Adenin!');
            } else if (letztes_zeichen == 'C') {
                $('#i_mrna').val(eingabe_alt);
                $('#meldung').text('Cytosin ist nicht komplementär zu Adenin!');
            } else if (letztes_zeichen == 'A') {
                $('#i_mrna').val(eingabe_alt);
                $('#meldung').text('Adenin ist identisch und nicht komplementär zu Adenin!');
            } else if (letztes_zeichen == 'U') {
                $('#i_mrna').val(eingabe_alt+'U');
                $('#meldung').text('');
            } else {
                $('#i_mrna').val(eingabe_alt);
                $('#meldung').text('');
            }
            break
        case 'T':
            if (letztes_zeichen == 'A') {
                $('#i_mrna').val(eingabe_alt+'A');
                $('#meldung').text('');
            } else if (letztes_zeichen == 'C') {
                $('#i_mrna').val(eingabe_alt);
                $('#meldung').text('Cytosin ist nicht komplementär zu Thymin!');
            } else if (letztes_zeichen == 'G') {
                $('#i_mrna').val(eingabe_alt);
                $('#meldung').text('Guanin ist nicht komplementär zu Thymin!');
            } else if (letztes_zeichen == 'T') {
                $('#i_mrna').val(eingabe_alt);
                $('#meldung').text('Thymin ist identisch und nicht komplementär zu Thymin; außerdem kommt in RNA Uracil an Stelle von Thymin vor!');
            } else {
                $('#i_mrna').val(eingabe_alt);
                $('#meldung').text('');
            }
            break
        case 'C':
            if (letztes_zeichen == 'G') {
                $('#i_mrna').val(eingabe_alt+'G');
                $('#meldung').text('');
            } else if (letztes_zeichen == 'A') {
                $('#i_mrna').val(eingabe_alt);
                $('#meldung').text('Adenin ist nicht komplementär zu Cytosin!');
            } else if (letztes_zeichen == 'U') {
                $('#i_mrna').val(eingabe_alt);
                $('#meldung').text('Uracil ist nicht komplementär zu Cytosin!');
            } else if (letztes_zeichen == 'C') {
                $('#i_mrna').val(eingabe_alt);
                $('#meldung').text('Cytosin ist identisch und nicht komplementär zu Cytosin!');
            } else {
                $('#i_mrna').val(eingabe_alt);
                $('#meldung').text('');
            }
            break
        case 'G':
            if (letztes_zeichen == 'C') {
                $('#i_mrna').val(eingabe_alt+'C');
                $('#meldung').text('');
            } else if (letztes_zeichen == 'A') {
                $('#i_mrna').val(eingabe_alt);
                $('#meldung').text('Adenin ist nicht komplementär zu Guanin!');
            } else if (letztes_zeichen == 'U') {
                $('#i_mrna').val(eingabe_alt);
                $('#meldung').text('Uracil ist nicht komplementär zu Guanin!');
            } else if (letztes_zeichen == 'G') {
                $('#i_mrna').val(eingabe_alt);
                $('#meldung').text('Guanin ist identisch und nicht komplementär zu Guanin!');
            }  else {
                $('#i_mrna').val(eingabe_alt);
                $('#meldung').text('');
            }
            break
        default:
            $('#i_mrna').val(eingabe_alt);
            $('#meldung').text('');
    }
    if (eingabe == dnasequenzen[startnummer][1]) {
        var rueckfrage=confirm('Die mRNA wurde richtig eingegeben ☺  - Soll jetzt eine neue DNA-Sequenz geladen werden?');
        if (rueckfrage) {
            lade_seite();
        }
    }
}

textbausteinsammlung=new Array();
textbausteinsammlung['-']="Wähle zunächst links eine Aminosäure aus!";
textbausteinsammlung['Ala']="GCU, GCC, GCA, GCG";
textbausteinsammlung['Arg']="CGU, CGC, CGA, CGG, AGA, AGG";
textbausteinsammlung['Asn']="AAU, AAC";
textbausteinsammlung['Asp']="GAU, GAC";
textbausteinsammlung['Cys']="UGU, UGC";
textbausteinsammlung['Gln']="CAA, CAG";
textbausteinsammlung['Glu']="GAA, GAG";
textbausteinsammlung['Gly']="GGU, GGC, GGA, GGG";
textbausteinsammlung['His']="CAU, CAC";
textbausteinsammlung['Ile']="AUU, AUC, AUA";
textbausteinsammlung['Leu']="UUA, UUG, CUU, CUC, CUA, CUG";
textbausteinsammlung['Lys']="AAA, AAG";
textbausteinsammlung['Met']="AUG";
textbausteinsammlung['Phe']="UUU, UUC";
textbausteinsammlung['Pro']="CCU, CCC, CCA, CCG";
textbausteinsammlung['Ser']="UCU, UCC, UCA, UCG, AGU, AGC";
textbausteinsammlung['Thr']="ACU, ACC, ACA, ACG";
textbausteinsammlung['Trp']="UGG";
textbausteinsammlung['Tyr']="UAU, UAC";
textbausteinsammlung['Val']="GUU, GUC, GUA, GUG";
textbausteinsammlung['Stop']="UAA, UAG, UGA";

function lade_seite() {
    document.forms['AS'].elements['AS_auswahl'].options[0].selected="selected";
    hole_aktuellen_index('AS', 'AS_auswahl');
}

function hole_aktuellen_index(auswahlname, optionname) {
    var schluessel=String(document.forms[auswahlname].elements[optionname].value);
    var wert=textbausteinsammlung[schluessel];
    //alert(wert);
    document.getElementById('Codons_in').disabled=false;
    document.getElementById('Codons_in').value=wert;
}

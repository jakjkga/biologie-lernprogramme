var datensammlung={
// Monohybride Erbgänge
'mono_X_domrez_X':['Erbse',
                   'Blütenfarbe', 'Rot dominant A', 'Weiß rezessiv a',
                   '---', '---', '---'],
'mono_X_intermed_X':['Wunderblume',
                     'Blütenfarbe', 'Rot kodominant R', 'Weiß kodominant W',
                     '---', '---', '---'],
'mono_X_kodom_X':['Mensch',
                  'MN-Blutgruppensystem', 'Antigen M vorhanden kodominant M', 'Antigen N vorhanden Kodominant N',
                  '---', '---', '---'],
// Dihybride Erbgänge
// ungekoppelt
'di_un_domrez_domrez':['Erbse',
                       'Samenfarbe', 'Gelb dominant A', 'Grün rezessiv a',
                       'Samenform', 'Rund dominant B', 'Kantig rezessiv b'],
'di_un_domrez_intermed':['Löwenmäulchen',
                         'Blütenform','Zweiseitig symmetrisch dominant A','Strahlenförmig rezessiv a',
                         'Blütenfarbe','Rot kodominant R','Weiß kodominant W'],
'di_un_domrez_kodom':['Mensch',
                      'Rhesus-Blutgruppensystem','Antigen D vorhanden dominant D','Antigen D fehlt rezessiv d',
                      'MN-Blutgruppensystem', 'Antigen M vorhanden kodominant M', 'Antigen N vorhanden Kodominant N'],
'di_un_intermed_domrez':['Löwenmäulchen',
                         'Blütenfarbe','Rot kodominant R','Weiß kodominant W',
                         'Blütenform','Zweiseitig symmetrisch dominant A','Strahlenförmig rezessiv a'],
'di_un_kodom_domrez':['Mensch',
                      'MN-Blutgruppensystem', 'Antigen M kodominant M', 'Antigen N Kodominant N',
                      'Rhesus-Blutgruppensystem','Antigen D vorhanden dominant D','Antigen D fehlt rezessiv d'],
// gekoppelt
'di_gekop_domrez_domrez':['Mais',
                          'Körnerfarbe','Dunkelbraun dominant A','Gelb rezessiv a',
                          'Körnerschrumpfung beim Trocknen','Nicht schrumpfend dominant B','Schrumpfend rezessiv b']
//// alternativ als Überleitung zu Morgan:
//'di_gekop_domrez_domrez':['Taufliege',
//                          'Flügellänge','Normal dominant A','Stummel rezessiv a',
//                          'Körperfarbe','Grau dominant B', 'Schwarz rezessiv b']
}

var genotypen={
// Monohybride Erbgänge
'mono_X_domrez_X_parent'://
'<pre>    AA x aa</pre>'
,
'mono_X_domrez_X_f1'://
'<pre>    |  A |  A |\n'+
'----|----|----|\n'+
'  a | Aa | Aa |\n'+
'  a | Aa | Aa |\n'+
'\n'+
'    Aa x Aa</pre>'
,
'mono_X_domrez_X_f2'://
'<pre>    |  A |  a |\n'+
'----|----|----|\n'+
'  A | AA | Aa |\n'+
'  a | Aa | aa |</pre>'
,
'mono_X_intermed_X_parent'://
'<pre>    RR x WW</pre>'
,
'mono_X_intermed_X_f1'://
'<pre>    |  R |  R |\n'+
'----|----|----|\n'+
'  W | RW | RW |\n'+
'  W | RW | RW |\n'+
'\n'+
'    RW x RW</pre>'
,
'mono_X_intermed_X_f2'://
'<pre>    |  R |  W |\n'+
'----|----|----|\n'+
'  R | RR | RW |\n'+
'  W | RW | WW |</pre>'
,
'mono_X_kodom_X_parent'://
'<pre>    MM x NN</pre>'
,
'mono_X_kodom_X_f1'://
'<pre>    |  M |  M |\n'+
'----|----|----|\n'+
'  N | MN | MN |\n'+
'  N | MN | MN |\n'+
'\n'+
'    MN x MN</pre>'
,
'mono_X_kodom_X_f2'://
'<pre>    |  M |  N |\n'+
'----|----|----|\n'+
'  M | MM | MN |\n'+
'  N | MN | NN |</pre>'
,
// Dihybride Erbgänge
// ungekoppelt
'di_un_domrez_domrez_parent'://
'<pre>    AABB x aabb</pre>'
,
'di_un_domrez_domrez_f1'://
'<pre>     |   AB |   AB |\n'+
'-----|------|------|\n'+
'  ab | AaBb | AaBb |\n'+
'  ab | AaBb | AaBb |\n'+
'\n'+
'    AaBb x AaBb</pre>'
,
'di_un_domrez_domrez_f2'://
'<pre>     |   AB |   Ab |   aB |   ab |\n'+
'-----|------|------|------|------|\n'+
'  AB | AABB | AABb | AaBB | AaBb |\n'+
'  Ab | AABb | AAbb | AaBb | Aabb |\n'+
'  aB | AaBB | AaBb | aaBB | aaBb |\n'+
'  ab | AaBb | Aabb | aaBb | aabb |</pre>'
,
'di_un_domrez_intermed_parent'://
'<pre>    AARR x aaWW</pre>'
,
'di_un_domrez_intermed_f1'://
'<pre>     |   AR |   AR |\n'+
'-----|------|------|\n'+
'  aW | AaRW | AaRW |\n'+
'  aW | AaRW | AaRW |\n'+
'\n'+
'    AaRW x AaRW</pre>'
,
'di_un_domrez_intermed_f2'://
'<pre>     |   AR |   AW |   aR |   aW |\n'+
'-----|------|------|------|------|\n'+
'  AR | AARR | AARW | AaRR | AaRW |\n'+
'  AW | AARW | AAWW | AaRW | AaWW |\n'+
'  aR | AaRR | AaRW | aaRR | aaRW |\n'+
'  aW | AaRW | AaWW | aaRW | aaWW |</pre>'
,
'di_un_intermed_domrez_parent'://
'<pre>    AARR x aaWW</pre>'
,
'di_un_intermed_domrez_f1'://
'<pre>     |   AR |   AR |\n'+
'-----|------|------|\n'+
'  aW | AaRW | AaRW |\n'+
'  aW | AaRW | AaRW |\n'+
'\n'+
'    AaRW x AaRW</pre>'
,
'di_un_intermed_domrez_f2'://
'<pre>     |   AR |   AW |   aR |   aW |\n'+
'-----|------|------|------|------|\n'+
'  AR | AARR | AARW | AaRR | AaRW |\n'+
'  AW | AARW | AAWW | AaRW | AaWW |\n'+
'  aR | AaRR | AaRW | aaRR | aaRW |\n'+
'  aW | AaRW | AaWW | aaRW | aaWW |</pre>'
,
'di_un_domrez_kodom_parent'://
'<pre>    DDMM x ddNN</pre>'
,
'di_un_domrez_kodom_f1'://
'<pre>     |   DM |   DM |\n'+
'-----|------|------|\n'+
'  dN | DdMN | DdMN |\n'+
'  dN | DdMN | DdMN |\n'+
'\n'+
'    DdMN x DdMN</pre>'
,
'di_un_domrez_kodom_f2'://
'<pre>     |   DM |   DN |   dM |   dN |\n'+
'-----|------|------|------|------|\n'+
'  DM | DDMM | DDMN | DdMM | DdMN |\n'+
'  DN | DDMN | DDNN | DdMN | DdNN |\n'+
'  dM | DdMM | DdMN | ddMM | ddMN |\n'+
'  dN | DdMN | DdNN | ddMN | ddNN |</pre>'
,
'di_un_kodom_domrez_parent'://
'<pre>    DDMM x ddNN</pre>'
,
'di_un_kodom_domrez_f1'://
'<pre>     |   DM |   DM |\n'+
'-----|------|------|\n'+
'  dN | DdMN | DdMN |\n'+
'  dN | DdMN | DdMN |\n'+
'\n'+
'    DdMN x DdMN</pre>'
,
'di_un_kodom_domrez_f2'://
'<pre>     |   DM |   DN |   dM |   dN |\n'+
'-----|------|------|------|------|\n'+
'  DM | DDMM | DDMN | DdMM | DdMN |\n'+
'  DN | DDMN | DDNN | DdMN | DdNN |\n'+
'  dM | DdMM | DdMN | ddMM | ddMN |\n'+
'  dN | DdMN | DdNN | ddMN | ddNN |</pre>'
,
// gekoppelt
'di_gekop_domrez_domrez_parent'://
'<pre>    AABB x aabb</pre>'
,
'di_gekop_domrez_domrez_f1'://
'<pre>     |   AB |   AB |\n'+
'-----|------|------|\n'+
'  ab | AaBb | AaBb |\n'+
'  ab | AaBb | AaBb |\n'+
'\n'+
'    AaBb x AaBb</pre>'
,
'di_gekop_domrez_domrez_f2'://
'<pre>     |   AB |   ## |   ## |   ab |\n'+
'-----|------|------|------|------|\n'+
'  AB | AABB | #### | #### | AaBb |\n'+
'  ## | #### | #### | #### | #### |\n'+
'  ## | #### | #### | #### | #### |\n'+
'  ab | AaBb | #### | #### | aabb |\n'+
'\n'+
'     |   AB |   ab |\n'+
'-----|------|------|\n'+
'  AB | AABB | AaBb |\n'+
'  ab | AaBb | aabb |</pre>'
}

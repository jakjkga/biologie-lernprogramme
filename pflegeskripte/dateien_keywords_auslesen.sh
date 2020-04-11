#!/bin/bash

suchbegriff1='keywords' ## z.B. extern nachgeladene Bibliothek
#suchbegriff2='' ## z.B. CDN
#auszuschliessender_suchbegriff3='jsmol'
#auszuschliessender_suchbegriff4='schul'
verzeichnis='/home/jj/github/' ## lokales Verzeichnis mit den GitHub Repositories

## Zeilen innerhalb von Dateien finden, in denen bestimmte Zeichenketten auftauchen
grep --recursive --ignore-case --include=\*.{htm,html} "${verzeichnis}" --regexp="$suchbegriff1" | xargs -n 1 -i echo {} | sed -e "s/\<meta name\=keywords lang\=de content\=//" | sed -e "s/\<meta name\=keywords content\=//" | sed -e 's/<//g' | sed -e 's/\/>//g' | sed -e 's/>//g' | sed -e 's/\:/\|/'| sed -e 's/\/index.html//g' | sed -e 's/\/home\/jj\/github\/chemie-lernprogramme\///g' | sed -e 's/\/home\/jj\/github\/biologie-lernprogramme\///g' > keywords_lernprogramme.csv
## | sed -e 's/ //g' 
## weitere optionale Parameter zur weiteren Filterung: 
##   * zweiter Suchbegriff:            | grep "$suchbegriff2" 
##   * auszuschliessender Suchbegriff: | grep --invert-match "$auszuschliessender_suchbegriff3"
##   * nur Dateiname ohne Fundstelle:  | awk -F\: '{print $1}'

## Dateien oder Verzeichnisse nach ihrem Namen finden
#find  $verzeichnis -type f -name $suchbegriff1


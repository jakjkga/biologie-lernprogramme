#!/bin/bash

suchbegriff1='MathJaX.js' ## z.B. extern nachgeladene Bibliothek
suchbegriff2='' ## z.B. CDN
auszuschliessender_suchbegriff3='jsmol'
auszuschliessender_suchbegriff4='schul'
verzeichnis='/home/jj/github/' ## lokales Verzeichnis mit den GitHub Repositories

## Zeilen innerhalb von Dateien finden, in denen bestimmte Zeichenketten auftauchen
grep --recursive --ignore-case --include=\*.{htm,html} "${verzeichnis}" --regexp="$suchbegriff1" | grep --invert-match "$auszuschliessender_suchbegriff3" | grep --invert-match "$auszuschliessender_suchbegriff4" | awk -F\: '{print $1}'
## weitere optionale Parameter zur weiteren Filterung: 
##   * zweiter Suchbegriff:            | grep "$suchbegriff2" 
##   * auszuschliessender Suchbegriff: | grep --invert-match "$auszuschliessender_suchbegriff3"
##   * nur Dateiname ohne Fundstelle:  | awk -F\: '{print $1}'

## Dateien oder Verzeichnisse nach ihrem Namen finden
#find  $verzeichnis -type f -name $suchbegriff1

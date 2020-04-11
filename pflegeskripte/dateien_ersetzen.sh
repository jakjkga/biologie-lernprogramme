#!/bin/bash

## z.B. für eine jquery-Version

alter_dateiname='jquery.min.js'
neue_quelldatei='jquery-3.5.0.min.js'
wurzelverzeichnis='/home/jj/github'

find $wurzelverzeichnis -type f -name "$alter_dateiname" | xargs -n 1 -i cp ${neue_quelldatei} {}





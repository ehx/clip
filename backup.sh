fecha=`date +%Y_%m_%d-%H:%M`
fecha_attach=`date +%Y_%m_%d`

sqlite3 db.sqlite3 '.dump' | gzip -c > "$fecha-db.gz"
tar -cf $fecha_attach-attachment.tar "static/attachment/"


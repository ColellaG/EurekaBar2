#!/bin/bash

# Esperar a que la base de datos esté lista
echo "Esperando a que la base de datos esté lista..."
while ! nc -z $DB_HOST $DB_PORT; do
  sleep 0.1
done
echo "Base de datos lista!"

# Aplicar migraciones
echo "Aplicando migraciones..."
python manage.py migrate

# Crear superusuario si no existe
echo "Creando superusuario..."
python manage.py createsuperuser --noinput --username admin --email admin@example.com

# Iniciar Gunicorn
echo "Iniciando Gunicorn..."
exec gunicorn core.wsgi:application --bind 0.0.0.0:$PORT --workers 4 --threads 4 --timeout 120 
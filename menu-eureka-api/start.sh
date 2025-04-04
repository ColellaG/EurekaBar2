#!/bin/sh

# Verificar variables de entorno
if [ -z "$DATABASE_URL" ]; then
    echo "Error: DATABASE_URL no está configurada"
    exit 1
fi

# Esperar a que la base de datos esté lista
echo "Esperando a que la base de datos esté lista..."
while ! nc -z $DB_HOST $DB_PORT; do
    sleep 1
done
echo "Base de datos lista!"

# Aplicar migraciones
python manage.py migrate --noinput

# Crear superusuario
DJANGO_SUPERUSER_USERNAME=${DJANGO_SUPERUSER_USERNAME:-eureka}
DJANGO_SUPERUSER_EMAIL=${DJANGO_SUPERUSER_EMAIL:-eureka@example.com}
DJANGO_SUPERUSER_PASSWORD=${DJANGO_SUPERUSER_PASSWORD:-2025EurekaBar}

python manage.py createsuperuser --noinput

# Iniciar Gunicorn
exec gunicorn core.wsgi:application \
    --bind 0.0.0.0:8000 \
    --workers 4 \
    --threads 4 \
    --timeout 120 
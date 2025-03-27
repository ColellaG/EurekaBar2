#!/bin/sh

# Aplicar migraciones
python manage.py migrate --noinput

# Crear superusuario
DJANGO_SUPERUSER_USERNAME=${DJANGO_SUPERUSER_USERNAME:-eureka}
DJANGO_SUPERUSER_EMAIL=${DJANGO_SUPERUSER_EMAIL:-eureka@example.com}
DJANGO_SUPERUSER_PASSWORD=${DJANGO_SUPERUSER_PASSWORD:-2025EurekaBar}

python manage.py createsuperuser --noinput

# Iniciar el servidor
python manage.py runserver 0.0.0.0:8000 
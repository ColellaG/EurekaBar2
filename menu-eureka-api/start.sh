#!/bin/sh

# Verificar variables de entorno requeridas
echo "Verificando variables de entorno..."
if [ -z "$DATABASE_URL" ]; then
    echo "Error: DATABASE_URL no está configurada"
    echo "Por favor, configura la variable DATABASE_URL en Railway"
    exit 1
fi

if [ -z "$PORT" ]; then
    echo "Error: PORT no está configurado"
    echo "Railway debería proporcionar esta variable automáticamente"
    exit 1
fi

# Configurar zona horaria
export TZ=UTC

# Esperar a que la base de datos esté lista
echo "Esperando a que la base de datos esté lista..."
max_retries=30
retry_count=1
while ! nc -z $DB_HOST $DB_PORT; do
    if [ $retry_count -ge $max_retries ]; then
        echo "Error: No se pudo conectar a la base de datos después de $max_retries intentos"
        echo "Verifica que la variable DATABASE_URL esté configurada correctamente"
        exit 1
    fi
    echo "Intento $retry_count de $max_retries: Esperando a que la base de datos esté lista..."
    sleep 1
    retry_count=$((retry_count + 1))
done
echo "Base de datos lista!"

# Aplicar migraciones
echo "Aplicando migraciones..."
python manage.py migrate --noinput

# Crear superusuario si no existe
echo "Creando superusuario..."
DJANGO_SUPERUSER_USERNAME=${DJANGO_SUPERUSER_USERNAME:-admin}
DJANGO_SUPERUSER_EMAIL=${DJANGO_SUPERUSER_EMAIL:-admin@example.com}
DJANGO_SUPERUSER_PASSWORD=${DJANGO_SUPERUSER_PASSWORD:-admin123}

python manage.py createsuperuser --noinput \
    --username $DJANGO_SUPERUSER_USERNAME \
    --email $DJANGO_SUPERUSER_EMAIL

# Recolectar archivos estáticos
echo "Recolectando archivos estáticos..."
python manage.py collectstatic --noinput

# Iniciar Gunicorn
echo "Iniciando Gunicorn..."
exec gunicorn core.wsgi:application \
    --bind 0.0.0.0:$PORT \
    --workers 4 \
    --threads 4 \
    --timeout 120 \
    --access-logfile - \
    --error-logfile - \
    --log-level info 
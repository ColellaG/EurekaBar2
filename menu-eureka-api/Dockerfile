# Usar una imagen base de Python más ligera
FROM python:3.11-alpine

# Establecer variables de entorno
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Establecer el directorio de trabajo
WORKDIR /app

# Instalar dependencias del sistema
RUN apk add --no-cache \
    postgresql-client \
    netcat-openbsd \
    gcc \
    python3-dev \
    musl-dev \
    postgresql-dev \
    libffi-dev \
    openssl-dev \
    cargo \
    tzdata

# Copiar requirements.txt primero
COPY requirements.txt .

# Instalar dependencias de Python
RUN pip install --no-cache-dir -r requirements.txt

# Copiar el resto del proyecto
COPY . .

# Hacer el script ejecutable
RUN chmod +x start.sh

# Exponer el puerto
EXPOSE 8000

# Comando para ejecutar la aplicación
CMD ["./start.sh"] 
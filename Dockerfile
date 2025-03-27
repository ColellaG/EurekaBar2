# Usar una imagen base de Python más ligera
FROM python:3.11-slim-bullseye

# Establecer variables de entorno
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Establecer el directorio de trabajo
WORKDIR /app

# Instalar dependencias del sistema
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    postgresql-client \
    netcat-traditional \
    gcc \
    python3-dev \
    && rm -rf /var/lib/apt/lists/*

# Copiar el proyecto
COPY menu-eureka-api/ .

# Instalar dependencias de Python
RUN pip install --no-cache-dir -r requirements.txt

# Hacer el script ejecutable
RUN chmod +x start.sh

# Exponer el puerto
EXPOSE 8000

# Comando para ejecutar la aplicación
CMD ["./start.sh"] 
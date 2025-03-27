# Usar Python 3.11
FROM python:3.11

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar el proyecto
COPY menu-eureka-api/ .

# Instalar dependencias
RUN pip install -r requirements.txt

# Hacer el script ejecutable
RUN chmod +x start.sh

# Exponer el puerto
EXPOSE 8000

# Comando para ejecutar la aplicación
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"] 
# Menu Eureka API

API REST para la aplicación Menu Eureka, desarrollada con Django y Django REST Framework.

## Características

- Autenticación JWT
- API RESTful
- Base de datos PostgreSQL
- CORS configurado
- Documentación de API
- Manejo de errores con Sentry

## Requisitos

- Python 3.8+
- PostgreSQL
- pip

## Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/tu-usuario/menu-eureka-api.git
cd menu-eureka-api
```

2. Crear y activar entorno virtual:
```bash
python -m venv venv
source venv/bin/activate  # En Windows: venv\Scripts\activate
```

3. Instalar dependencias:
```bash
pip install -r requirements.txt
```

4. Configurar variables de entorno:
```bash
cp .env.example .env
# Editar .env con tus configuraciones
```

5. Ejecutar migraciones:
```bash
python manage.py migrate
```

6. Crear superusuario:
```bash
python manage.py createsuperuser
```

7. Ejecutar servidor de desarrollo:
```bash
python manage.py runserver
```

## Estructura del Proyecto

```
menu-eureka-api/
├── core/               # Configuración principal del proyecto
├── menu/              # Aplicación principal
│   ├── api/          # Vistas y serializers de la API
│   ├── models/       # Modelos de datos
│   └── tests/        # Tests unitarios
├── staticfiles/       # Archivos estáticos
└── media/            # Archivos multimedia
```

## API Endpoints

- `/api/auth/` - Autenticación
- `/api/menu/` - Endpoints del menú
- `/api/admin/` - Panel de administración

## Contribución

1. Fork el proyecto
2. Crear rama para feature (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles. 
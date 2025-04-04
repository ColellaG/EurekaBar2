<<<<<<< HEAD
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
=======
# MenuEureka - Sistema de Menú Digital

MenuEureka es una aplicación web moderna para la gestión y visualización de menús de restaurantes. El sistema está compuesto por dos partes principales: un panel de administración y una vista pública del menú.

## 🚀 Características

### Panel de Administración
- Autenticación segura con JWT
- Gestión de categorías (crear, editar, eliminar, ordenar)
- Gestión de ítems del menú (crear, editar, eliminar, marcar disponibilidad)
- Interfaz intuitiva y responsive
- Notificaciones de éxito/error
- Confirmaciones antes de acciones destructivas

### Vista Pública del Menú
- Diseño moderno y atractivo
- Categorías colapsables
- Visualización clara de precios y descripciones
- Totalmente responsive
- Enlaces a redes sociales y contacto
- Acceso rápido al panel de administración

## 🛠️ Tecnologías Utilizadas

### Backend
- Django 5.0.2
- Django REST Framework
- JWT Authentication
- CORS Headers

### Frontend (Panel de Administración)
- React 18
- Material-UI
- React Router
- Axios

### Frontend (Vista Pública)
- React 18
- CSS Modules
- Font Awesome
- Bootstrap

## 📋 Requisitos Previos

- Python 3.8 o superior
- Node.js 16 o superior
- npm 7 o superior
- Git

## 🔧 Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/tu-usuario/menu-eureka.git
cd menu-eureka
```

2. Configurar el Backend:
```bash
cd menu-eureka-api
python -m venv venv
source venv/bin/activate  # En Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
```

3. Configurar el Frontend del Panel de Administración:
```bash
cd menu-eureka-admin
npm install
```

4. Configurar el Frontend de la Vista Pública:
```bash
cd menu-eureka-client
npm install
```

## 🚀 Ejecución

1. Iniciar el Backend:
```bash
cd menu-eureka-api
python manage.py runserver
```

2. Iniciar el Panel de Administración:
```bash
cd menu-eureka-admin
npm run dev
```

3. Iniciar la Vista Pública:
```bash
cd menu-eureka-client
npm run dev
```

## 🔐 Acceso

- Panel de Administración: http://localhost:5173
- Vista Pública del Menú: http://localhost:5174
- API Backend: http://localhost:8000/api/

## 📝 Uso del Sistema

### Panel de Administración

1. **Inicio de Sesión**
   - Acceder a http://localhost:5173
   - Ingresar las credenciales de superusuario creadas

2. **Gestión de Categorías**
   - Crear nuevas categorías con nombre y orden
   - Editar categorías existentes
   - Eliminar categorías (con confirmación)
   - Reordenar categorías según necesidad

3. **Gestión de Ítems**
   - Crear nuevos ítems con nombre, descripción, precio y categoría
   - Editar ítems existentes
   - Marcar disponibilidad de ítems
   - Eliminar ítems (con confirmación)
   - Reordenar ítems dentro de cada categoría

### Vista Pública

- Las categorías se muestran colapsadas por defecto
- Hacer clic en una categoría para expandir/colapsar
- Navegar por el menú de forma intuitiva
- Acceder a redes sociales y contacto desde el pie de página

## 🔒 Seguridad

- Autenticación JWT para el panel de administración
- Protección de rutas administrativas
- Validación de datos en backend y frontend
- CORS configurado para desarrollo y producción

## 🤝 Contribución

1. Fork el repositorio
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para más detalles.

## 👥 Autores

- Tu Nombre - *Trabajo Inicial* - [TuUsuario](https://github.com/tu-usuario)

## 🙏 Agradecimientos

- Material-UI por los componentes
- Font Awesome por los iconos
- Django y React por los frameworks 
>>>>>>> f34525e8e8919c5b916288e458c94f5acc19febc

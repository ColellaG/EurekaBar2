<<<<<<< HEAD
release: python manage.py migrate
web: gunicorn core.wsgi:application 
=======
web: cd menu-eureka-api && python manage.py migrate && python manage.py createsuperuser --noinput && gunicorn core.wsgi:application --bind 0.0.0.0:$PORT --workers 4 --threads 4 --timeout 180 
>>>>>>> f34525e8e8919c5b916288e458c94f5acc19febc

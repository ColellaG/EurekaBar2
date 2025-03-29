import os
import time
import psycopg2
from psycopg2.extras import DictCursor
import urllib.parse

def wait_for_db():
    # Imprimir todas las variables de entorno relacionadas con la base de datos
    print("Environment variables:")
    for key in ['DATABASE_URL', 'PGDATABASE', 'PGUSER', 'PGPASSWORD', 'PGHOST', 'PGPORT']:
        value = os.environ.get(key)
        if value:
            if key == 'PGPASSWORD':
                print(f"{key}: [HIDDEN]")
            else:
                print(f"{key}: {value}")
        else:
            print(f"{key}: Not set")

    # Intentar usar DATABASE_URL primero
    database_url = os.environ.get('DATABASE_URL')
    if database_url:
        print(f"Using DATABASE_URL: {database_url}")
        # Parsear la URL de la base de datos
        url = urllib.parse.urlparse(database_url)
        db_params = {
            'dbname': url.path[1:],  # Eliminar el primer '/'
            'user': url.username,
            'password': url.password,
            'host': url.hostname,
            'port': url.port or 5432,
        }
    else:
        print("DATABASE_URL not found, using individual parameters")
        # Fallback a variables individuales
        db_params = {
            'dbname': os.environ.get('PGDATABASE', 'postgres'),
            'user': os.environ.get('PGUSER', 'postgres'),
            'password': os.environ.get('PGPASSWORD', 'postgres'),
            'host': os.environ.get('PGHOST', 'localhost'),
            'port': os.environ.get('PGPORT', '5432'),
        }

    print("\nDatabase connection parameters:")
    for key, value in db_params.items():
        if key != 'password':
            print(f"{key}: {value}")

    while True:
        try:
            print(f"\nAttempting to connect to PostgreSQL at {db_params['host']}:{db_params['port']}")
            conn = psycopg2.connect(**db_params)
            conn.close()
            print("PostgreSQL is up - executing command")
            return True
        except psycopg2.OperationalError as e:
            print(f"PostgreSQL is unavailable - sleeping. Error: {str(e)}")
            time.sleep(1)
        except Exception as e:
            print(f"Unexpected error: {str(e)}")
            time.sleep(1)

if __name__ == '__main__':
    wait_for_db() 
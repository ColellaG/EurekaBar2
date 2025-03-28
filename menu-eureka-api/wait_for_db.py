import os
import time
import psycopg2
from psycopg2.extras import DictCursor

def wait_for_db():
    # Imprimir variables de entorno
    print("Environment variables:")
    for key in ['DATABASE_URL', 'PGHOST', 'PGPORT', 'POSTGRES_DB', 'POSTGRES_USER', 'POSTGRES_PASSWORD']:
        value = os.environ.get(key)
        if value and key not in ['DATABASE_URL', 'POSTGRES_PASSWORD']:
            print(f"{key}: {value}")
        elif key == 'POSTGRES_PASSWORD':
            print(f"{key}: {'[SET]' if value else '[NOT SET]'}")

    # Obtener la contraseña
    password = os.environ.get('POSTGRES_PASSWORD')
    if not password:
        print("Error: POSTGRES_PASSWORD environment variable is not set")
        return False

    # Usar valores fijos de Railway
    db_params = {
        'dbname': 'railway',
        'user': 'postgres',
        'password': password,
        'host': 'turntable.proxy.rlwy.net',
        'port': 47455,
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
import os
import time
import psycopg2
from psycopg2.extras import DictCursor

def wait_for_db():
    # Imprimir variables de entorno
    print("Environment variables:")
    for key in ['PGHOST', 'PGPORT', 'POSTGRES_DB', 'POSTGRES_USER']:
        value = os.environ.get(key)
        print(f"{key}: {value}")

    # Usar variables específicas de Railway
    db_params = {
        'dbname': os.environ.get('POSTGRES_DB', 'postgres'),
        'user': os.environ.get('POSTGRES_USER', 'postgres'),
        'password': os.environ.get('POSTGRES_PASSWORD'),
        'host': os.environ.get('PGHOST'),
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
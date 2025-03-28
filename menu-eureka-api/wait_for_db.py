import os
import time
import psycopg2
from psycopg2.extras import DictCursor

def wait_for_db():
    db_params = {
        'dbname': os.environ.get('PGDATABASE', 'postgres'),
        'user': os.environ.get('PGUSER', 'postgres'),
        'password': os.environ.get('PGPASSWORD', 'postgres'),
        'host': os.environ.get('PGHOST', 'localhost'),
        'port': os.environ.get('PGPORT', '5432'),
    }

    while True:
        try:
            conn = psycopg2.connect(**db_params)
            conn.close()
            print("PostgreSQL is up - executing command")
            return True
        except psycopg2.OperationalError:
            print("PostgreSQL is unavailable - sleeping")
            time.sleep(1)

if __name__ == '__main__':
    wait_for_db() 
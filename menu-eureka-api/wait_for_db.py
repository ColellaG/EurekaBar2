import os
import time
import psycopg2
from psycopg2.extras import DictCursor
import sys

def wait_for_db(max_retries=30):
    db_params = {
        'dbname': os.environ.get('PGDATABASE', 'postgres'),
        'user': os.environ.get('PGUSER', 'postgres'),
        'password': os.environ.get('PGPASSWORD', 'postgres'),
        'host': os.environ.get('PGHOST', 'localhost'),
        'port': os.environ.get('PGPORT', '5432'),
    }

    print(f"Attempting to connect to database with parameters: {db_params}")
    retries = 0

    while retries < max_retries:
        try:
            print(f"Attempt {retries + 1}/{max_retries}")
            conn = psycopg2.connect(**db_params)
            conn.close()
            print("Successfully connected to PostgreSQL!")
            return True
        except psycopg2.OperationalError as e:
            print(f"Error connecting to PostgreSQL: {e}")
            retries += 1
            if retries < max_retries:
                print(f"Waiting 5 seconds before next attempt...")
                time.sleep(5)
            else:
                print("Max retries reached. Exiting...")
                sys.exit(1)

if __name__ == '__main__':
    wait_for_db() 
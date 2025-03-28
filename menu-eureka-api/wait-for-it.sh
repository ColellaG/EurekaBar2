#!/bin/bash
# wait-for-it.sh

set -e

host="$1"
shift
cmd="$@"

until PGPASSWORD=$PGPASSWORD psql -h "$host" -U "$PGUSER" -d "$PGDATABASE" -c '\q'; do
  >&2 echo "PostgreSQL is unavailable - sleeping"
  sleep 1
done

>&2 echo "PostgreSQL is up - executing command"
exec $cmd 
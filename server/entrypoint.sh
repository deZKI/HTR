#!/bin/sh

# Проверка на доступность базы данных перед выполнением миграций
echo "Waiting for PostgreSQL to start..."
while ! nc -z postgres_db 5432; do
  sleep 0.1
done
echo "PostgreSQL started"

# Выполнение миграций
python manage.py migrate --noinput

# Сбор статических файлов
python manage.py collectstatic --noinput --clear

# Запуск Gunicorn или любого другого WSGI сервера, который вы используете
gunicorn config.wsgi:application --bind 0.0.0.0:8000 --workers=7

# Start server
echo "Starting server"

# run the container CMD
exec "$@"
#!/bin/bash

# Переход в директорию проекта
cd /var/www/carehub

# Клонирование репозитория (если первый раз)
if [ ! -d ".git" ]; then
    git clone git@github.com:CopexDavid/carehub.git .
fi

# Получение последних изменений
git pull origin main

# Установка зависимостей
npm install

# Копирование .env файла (если его нет)
if [ ! -f ".env" ]; then
    cp .env.example .env
    echo "Создан .env файл. Пожалуйста, настройте переменные окружения!"
fi

# Сборка проекта
npm run build

# Запуск через PM2
pm2 delete carehub 2>/dev/null || true
pm2 start npm --name "carehub" -- start
pm2 save

echo "Деплой завершен!" 
#!/bin/bash

# Переход в директорию проекта
cd /path/to/your/project

# Получение последних изменений
git pull origin main

# Установка зависимостей
npm install

# Сборка проекта
npm run build

# Перезапуск приложения через PM2
pm2 restart carehub 
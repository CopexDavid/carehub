#!/bin/bash

# Обновление системы
apt update && apt upgrade -y

# Установка необходимых пакетов
apt install -y nodejs npm git nginx

# Установка Node.js 18.x (более стабильная версия для production)
curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
apt install -y nodejs

# Установка PM2 глобально
npm install -g pm2

# Создание директории для приложения
mkdir -p /var/www/carehub
chown -R root:root /var/www/carehub

# Настройка Nginx
cat > /etc/nginx/sites-available/carehub << 'EOL'
server {
    listen 80;
    server_name 85.198.91.121;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
EOL

# Активация конфигурации Nginx
ln -sf /etc/nginx/sites-available/carehub /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default
nginx -t && systemctl restart nginx

# Генерация SSH ключа для GitHub
ssh-keygen -t ed25519 -C "carehub-server" -f /root/.ssh/github -N ""
echo -e "Host github.com\n  IdentityFile /root/.ssh/github\n  IdentitiesOnly yes" > /root/.ssh/config
chmod 600 /root/.ssh/config

# Вывод публичного ключа
echo "=== СКОПИРУЙТЕ ЭТОТ КЛЮЧ И ДОБАВЬТЕ ЕГО В GITHUB DEPLOY KEYS ==="
cat /root/.ssh/github.pub
echo "=================================================" 
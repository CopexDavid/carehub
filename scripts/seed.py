import os
import sys
import bcrypt
import psycopg2
from datetime import datetime
import uuid

# Функция для получения строки подключения из .env файла
def get_database_url():
    with open('.env', 'r') as file:
        for line in file:
            if line.startswith('DATABASE_URL='):
                # Заменяем postgresql:// на postgres://, если нужно
                return line.strip().split('=', 1)[1].strip('"\'')
    return None

# Хеширование пароля
def hash_password(password):
    salt = bcrypt.gensalt()
    hashed = bcrypt.hashpw(password.encode('utf-8'), salt)
    return hashed.decode('utf-8')

# Основная функция
def main():
    try:
        # Получаем строку подключения из .env
        database_url = get_database_url()
        
        if not database_url:
            print("DATABASE_URL не найден в .env файле")
            sys.exit(1)
            
        # Подключаемся к базе данных
        conn = psycopg2.connect(database_url)
        cursor = conn.cursor()
        
        # Проверяем, существует ли пользователь
        cursor.execute("SELECT * FROM \"User\" WHERE email = %s", ('admin@carehub.com',))
        if cursor.fetchone():
            print("Пользователь уже существует")
            conn.close()
            return
        
        # Хешируем пароль
        password = hash_password('password123')
        
        # Создаем тестового админа
        admin_id = str(uuid.uuid4())
        cursor.execute(
            "INSERT INTO \"User\" (id, name, email, password, role, \"createdAt\", \"updatedAt\") VALUES (%s, %s, %s, %s, %s, %s, %s) RETURNING email",
            (admin_id, 'Администратор', 'admin@carehub.com', password, 'ADMIN', datetime.now(), datetime.now())
        )
        admin_email = cursor.fetchone()[0]
        print(f"Создан администратор: {admin_email}")
        
        # Создаем тестового врача
        doctor_id = str(uuid.uuid4())
        cursor.execute(
            "INSERT INTO \"User\" (id, name, email, password, role, \"createdAt\", \"updatedAt\") VALUES (%s, %s, %s, %s, %s, %s, %s) RETURNING email",
            (doctor_id, 'Доктор Иванов', 'doctor@carehub.com', password, 'DOCTOR', datetime.now(), datetime.now())
        )
        doctor_email = cursor.fetchone()[0]
        print(f"Создан врач: {doctor_email}")
        
        # Создаем тестового пациента
        patient_user_id = str(uuid.uuid4())
        cursor.execute(
            "INSERT INTO \"User\" (id, name, email, password, role, \"createdAt\", \"updatedAt\") VALUES (%s, %s, %s, %s, %s, %s, %s) RETURNING id, email",
            (patient_user_id, 'Пациент Петров', 'patient@carehub.com', password, 'PATIENT', datetime.now(), datetime.now())
        )
        patient_result = cursor.fetchone()
        patient_user_id = patient_result[0]
        patient_email = patient_result[1]
        
        # Создаем профиль пациента
        patient_id = str(uuid.uuid4())
        cursor.execute(
            "INSERT INTO \"Patient\" (id, \"userId\", \"dateOfBirth\", gender, phone, address, \"createdAt\", \"updatedAt\") VALUES (%s, %s, %s, %s, %s, %s, %s, %s)",
            (patient_id, patient_user_id, '1990-01-01', 'Мужской', '+7 (900) 123-45-67', 'г. Москва, ул. Примерная, д. 1', datetime.now(), datetime.now())
        )
        print(f"Создан пациент: {patient_email}")
        
        # Фиксируем изменения
        conn.commit()
        
    except Exception as e:
        print(f"Ошибка: {e}")
        if 'conn' in locals():
            conn.rollback()
    finally:
        if 'conn' in locals():
            conn.close()

if __name__ == "__main__":
    main() 
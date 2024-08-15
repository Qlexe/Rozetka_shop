Clone of Rozetka shop
https://rozetka.com.ua/ua/

Install React with Vite
https://vitejs.dev/guide/

Install Tailwind CSS with Vite
https://tailwindcss.com/docs/guides/vite

https://chatgpt.com/share/fdb5b24f-3dfb-429e-b3c2-3462c2aeca8b

rozetka_project/
│
├── src/
│   ├── controllers/       # Логіка обробки запитів
│   │   ├── productController.js
│   │   ├── userController.js
│   │   ├── orderController.js
│   │   └── ...
│   │
│   ├── models/            # Моделі даних (структура таблиць у базі даних)
│   │   ├── Product.js
│   │   ├── Category.js
│   │   ├── User.js
│   │   ├── Order.js
│   │   ├── Review.js
│   │   ├── Supplier.js
│   │   └── Payment.js
│   │
│   ├── services/          # Базова логіка роботи з даними
│   │   ├── productService.js
│   │   ├── userService.js
│   │   ├── orderService.js
│   │   └── ...
│   │
│   ├── routes/            # Маршрутизація запитів
│   │   ├── productRoutes.js
│   │   ├── userRoutes.js
│   │   ├── orderRoutes.js
│   │   └── ...
│   │
│   ├── config/            # Конфігураційні файли (наприклад, конфігурація бази даних)
│   │   ├── db.js
│   │   ├── appConfig.js
│   │   └── ...
│   │
│   ├── middlewares/       # Проміжна логіка (наприклад, автентифікація, логування)
│   │   ├── authMiddleware.js
│   │   ├── errorMiddleware.js
│   │   └── ...
│   │
│   └── index.js           # Точка входу до програми
│
├── tests/                 # Тестові файли
│   ├── controllers/
│   ├── models/
│   ├── services/
│   └── ...
│
├── docs/                  # Документація проєкту
│   ├── API.md
│   ├── database_schema.md
│   └── ...
│
├── migrations/            # Скрипти для створення/оновлення схеми бази даних
│   ├── create_tables.sql
│   ├── add_new_columns.sql
│   └── ...
│
├── public/                # Публічні статичні файли (зображення, стилі, скрипти)
│   ├── images/
│   ├── css/
│   └── js/
│
├── .env                   # Файл налаштувань середовища (конфіденційні дані, змінні середовища)
├── package.json           # Список залежностей і скриптів для npm
├── README.md              # Загальна інформація про проєкт
└── ...


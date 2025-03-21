# Тестове завдання на позицію Front-End розробника в Universe Group

## Опис завдання
Цей проєкт є простим React-додатком, який дозволяє користувачам конвертувати введений текст у PDF-документ.

## Функціонал
- Інтерфейс містить текстове поле для введення тексту, кнопку "Конвертувати в PDF" та область для перегляду PDF.
- Конвертація тексту в PDF через HTTP API.
- Відображення результату у PDF-переглядачі.
- Збереження історії конвертацій у локальному сховищі браузера.
- Перегляд збережених PDF-документів із історії.

## Використані технології
- **Vite** – для швидкого створення проєкту.
- **React (TypeScript)** – основний фреймворк.
- **Zustand** – для управління станом та сховищем.
- **Styled Components** – для стилізації компонентів.
- **Ant Design** – UI-компоненти.
- **Tailwind CSS** – додаткові стилі.
- **Jest / React Testing Library** – для тестування.

## API для конвертації
Конвертація тексту в PDF здійснюється через API:
```
POST http://95.217.134.12:4010/create-pdf?apiKey={YOUR_API_KEY}
Body:
{
    "text": "Universe"
}
```
API-ключ для тестування:
```
VITE_CONVERT_API=78684310-850d-427a-8432-4a6487f6dbc4
```

## Інструкція з встановлення та запуску
1. **Клонуйте репозиторій:**
   ```sh
   git clone https://github.com/your-repository.git
   cd your-repository
   ```
2. **Встановіть залежності:**
   ```sh
   npm install
   ```
3. **Створіть `.env` файл та додайте API-ключ:**
   ```sh
   echo "VITE_CONVERT_API=78684310-850d-427a-8432-4a6487f6dbc4" > .env
   ```
4. **Запустіть проєкт:**
   ```sh
   npm run dev
   ```

## Тестування
Щоб запустити тести:
```sh
npm run test
```

## Поліпшення та майбутні оновлення
- Додати плавні анімації для взаємодії користувача.
- Створити тему для Tailwind CSS.
- Додати функцію очищення історії конвертацій.
- Додати React Router для масштабованості.
- Додати можливість завантаження pdf файлу.

## Проблеми та виклики
Основна проблема – **неправильна версія бібліотеки pdf.js**, через що не працював worker. Багато часу було витрачено на виправлення цього.

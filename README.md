# Restaurant Page
<details>
<summary>🇷🇺 <b>Russian (Русский)</b></summary>

<br>
Веб-приложение для ресторана, собранное с помощью Webpack. Ниже представлены инструкции по локальному запуску проекта с использованием Docker и без него.

## Модульная архитектура
Приложение построено по принципу компонентной архитектуры. Каждая смысловая часть сайта — главная страница, меню, контакты и форма бронирования — выделена в независимый изолированный модуль. 

Навигация реализована через единую точку входа: скрипт динамически перехватывает клики по меню и подменяет содержимое экрана соответствующим компонентом без перезагрузки страницы. Все визуальные стили вынесены в общий глобальный файл.

## Инструменты сборки и контроль версий
В качестве бандлера используется **Webpack**. Он собирает все разрозненные JS-модули и CSS-стили в единый оптимизированный пакет, готовый к деплою.

**.gitignore** Он обеспечивает чистоту кодовой базы, предотвращая попадание локальных зависимостей (`node_modules`) и автоматически сгенерированных артефактов сборки (папка `dist`) в репозиторий.


### Предварительные требования

Перед началом работы убедитесь, что у вас установлены:
* [Node.js](https://nodejs.org/) — *только для запуска без Docker*
* [Docker](https://www.docker.com/) — *только для запуска через Docker*

## Установка

Для начала клонируйте репозиторий и перейдите в папку с проектом:

```bash
git clone [https://github.com/hnstz/Restaurant-Page.git](https://github.com/hnstz/Restaurant-Page.git)
cd Restaurant-Page
```
##  Вариант 1: Запуск с помощью Docker

### 1. Сборка Docker-образа
Находясь в корневой директории проекта, выполните команду для сборки образа:

```bash
docker build -t restaurant-page-app .
```
### 2. Запуск контейнера

```bash
docker run -d -p 8080:80 --name my-restaurant-container restaurant-page-app
```
### 3. Просмотр результата
Откройте браузер и перейдите по адресу:
```bash
http://localhost:8080
```

---

#### Полезные команды Docker

Остановить приложение:
```bash
docker stop my-restaurant-container
```
Запустить приложение снова:
```bash
docker start my-restaurant-container
```
Удалить контейнер (если больше не нужен):
```bash
docker rm -f my-restaurant-container
```
## Вариант 2: Локальный запуск без Docker
### 1. Установка зависимостей
Установите все необходимые пакеты, указанные в package.json:

```bash
npm install
```
### 2. Сборка проекта
Соберите production-версию приложения. Webpack сгенерирует статические файлы в папке dist:

```bash
npm run build
```

### 3. Запуск сервера для разработки (опционально)

```bash
npm start
```
</details>

<details>
<summary>🇬🇧 <b>English (Английский)</b></summary>

<br>

A restaurant web application built with Webpack. Below are the instructions for running the project locally, both with and without Docker.

## Modular Architecture
The application is built on a component-based architecture. Each logical section of the site — home page, menu, contacts, and reservation form — is isolated into an independent module. 

Navigation is implemented through a single entry point: a script dynamically intercepts menu clicks and replaces the screen content with the corresponding component without reloading the page. All visual styles are extracted into a single global file.

## Build Tools and Version Control
**Webpack** is used as the bundler. It compiles all scattered JS modules and CSS styles into a single optimized package ready for deployment.

**.gitignore** ensures a clean codebase by preventing local dependencies (`node_modules`) and auto-generated build artifacts (`dist` folder) from entering the repository.

### Prerequisites

Before you begin, make sure you have the following installed:
* [Node.js](https://nodejs.org/) — *only for running without Docker*
* [Docker](https://www.docker.com/) — *only for running with Docker*

## Installation

First, clone the repository and navigate to the project folder:
```bash
git clone [https://github.com/hnstz/Restaurant-Page.git](https://github.com/hnstz/Restaurant-Page.git)
cd Restaurant-Page
```

## Method 1: Running with Docker

### 1. Build the Docker Image
From the root directory of the project, run the following command to build the image:

```bash
docker build -t restaurant-page-app .
```

### 2. Run the Container
```bash
docker run -d -p 8080:80 --name my-restaurant-container restaurant-page-app
```
### 3. View the Result
Open your browser and navigate to:
```bash
http://localhost:8080
```

---

### Useful Docker Commands
Stop the application:
```bash
docker stop my-restaurant-container
```
Start the application again:

```bash
docker start my-restaurant-container
```
Remove the container (if no longer needed):

```bash
docker rm -f my-restaurant-container
```
## Method 2: Local Run without Docker
### 1. Install Dependencies
Install all required packages listed in package.json:

```bash
npm install
```

### 2. Build the Project
Build the production version of the application. Webpack will generate static files in the dist folder:
```bash
npm run build
```
3. Start the Development Server (Optional)
```bash
npm start
```
</details>

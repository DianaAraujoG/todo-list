# 📝 ToDo App

Aplicación web para gestionar tareas. Permite crear, leer, actualizar y eliminar tareas. Desarrollada con **React**, **TypeScript**, **Tailwind CSS** y **json-server** como backend simulado.

## 🚀 Tecnologías utilizadas

- React 18
- TypeScript
- Vite
- Tailwind CSS
- json-server (API mock)
- Axios

---

## 🧑‍💻 Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/DianaAraujoG/todo-list.git
   cd todo-list
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

---

## 🧩 Scripts disponibles

### Iniciar el proyecto en desarrollo:

```bash
npm run dev
```

### Iniciar json-server:

```bash
npm run server
```

Esto levantará el backend simulado en:  
📡 `http://localhost:3001/tasks`

---

## 📁 Estructura del proyecto

```
todo-app/
│
├── public/
├── src/
│   ├── components/         → Componentes UI
│   ├── hooks/              → Hooks personalizados
│   ├── services/           → API services (axios)
│   ├── types/              → Tipado TypeScript
│   ├── App.tsx
│   └── main.tsx
│
├── db.json                → Base de datos mock para json-server
├── tsconfig.json          → Configuración de TypeScript
├── vite.config.ts         → Configuración de Vite
└── README.md
```

---

## 📦 Script personalizado

Puedes agregar esto en tu `package.json` para levantar el servidor:

```json
"scripts": {
  "dev": "vite",
  "server": "json-server --watch db.json --port 3001"
}
```

---

## 📌 Notas

- El backend simulado (`json-server`) se usa únicamente para desarrollo.
- Asegúrate de que el puerto 3001 esté libre para evitar conflictos.
- Puedes editar el archivo `db.json` para precargar tareas si lo deseas.

---

## 🧠 Autor

**Diana Laura Gómez Araujo**  
👩‍💻 Frontend Developer - React | TypeScript | UI/UX

---

## ✅ Estado

Proyecto en desarrollo ✅  
CRUD funcional, diseño responsivo, API mock funcionando.

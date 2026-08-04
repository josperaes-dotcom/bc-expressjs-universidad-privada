# 🚀 Proyecto Semanal — Procesador de Datos con Node.js

## 🎯 Objetivo
## 👤 Estudiante

| Campo | Valor |
|---|---|
| Nombre | Jose Luis Guerrero Mosquera |
| Documento | 3228970 |
| Curso | bc-expressjs |
| Correo | josperaes@gmail.com |
| Institución | Universidad privada |

## 🎓 Mi dominio: Universidad

Dominio asignado: **`students`, `programs`, `courses`, `enrollments`**.

Se eligió **`Enrollment`** (inscripción) como recurso principal, porque conecta a un **estudiante** con un **programa** y un **curso**.

| Campo genérico (`Item`) | Campo del dominio (`Enrollment`) | Descripción |
|---|---|---|
| `name` | `studentName` | Nombre del estudiante inscrito |
| — | `studentEmail` | Correo del estudiante |
| `category` | `program` | Programa académico (usado con `--category`) |
| — | `course` | Curso específico dentro del programa |
| `price` | `tuitionFee` | Valor de la matrícula del curso |
| `active` | `active` | Si la inscripción está activa o inactiva |
| — | `enrollmentDate` | Fecha de inscripción |

Archivo de datos: `starter/data/items.json` → **`starter/data/enrollments.json`** (12 registros).

### Logs de ejecución

**Sin filtro:** 12 inscripciones, 9 activas, promedio $1,433,333.33

**Con filtro `--category "Ciencia de Datos"`:** 3 inscripciones, 2 activas, promedio $1,583,333.33

**Categoría inexistente `--category "Medicina"`:** error descriptivo listando programas disponibles, termina con código 1

Construir una herramienta de línea de comandos (CLI) que lea datos desde un archivo JSON, los procese aplicando filtros y transformaciones, y genere un reporte con los resultados — todo usando **Node.js + TypeScript + async/await**.

---

## 📋 Tu Dominio Asignado

**El instructor te asignará un dominio específico.** Mientras tanto, el código `starter/` trabaja con un recurso genérico llamado `Item`.

Cuando recibas tu dominio, renombra:
- `Item` → el recurso principal de tu dominio (ej. `Book`, `Medicine`, `Member`)
- `items.json` → el archivo de datos de tu dominio (ej. `books.json`)
- Los campos de `Item` → atributos propios de tu recurso

### 💡 Ejemplos de Adaptación por Dominio

| Dominio | Recurso | Campos |
|---------|---------|--------|
| Biblioteca | `Book` | `title`, `author`, `genre`, `available` |
| Farmacia | `Medicine` | `name`, `category`, `price`, `stock`, `requiresPrescription` |
| Gimnasio | `Member` | `name`, `plan`, `active`, `monthlyFee` |
| Restaurante | `Dish` | `name`, `category`, `price`, `available` |
| Hotel | `Room` | `number`, `type`, `pricePerNight`, `available` |

---

## ✅ Requisitos Funcionales

### 1. Leer datos desde un archivo JSON

La herramienta debe leer el archivo `data/items.json` usando `fs/promises`.

### 2. Mostrar un resumen del catálogo

- Total de ítems
- Ítems activos vs inactivos
- Precio promedio
- Ítem más caro y más barato

### 3. Filtrar por categoría

Aceptar un argumento de línea de comandos para filtrar por categoría:
```bash
pnpm start -- --category electronics
```

### 4. Generar reporte en un archivo de salida

Guardar el reporte en `output/report.json` usando `fs/promises.writeFile`.

### 5. Manejo de errores

- Si el archivo `items.json` no existe → mostrar error descriptivo y terminar con `process.exit(1)`
- Si la categoría no existe → mostrar aviso y listar las categorías disponibles

---

## 🛠️ Entregables

1. **Código funcional** que pase `pnpm build` sin errores TypeScript
2. **README.md actualizado** con tu dominio y descripción del recurso
3. **Screenshots o logs** de la herramienta ejecutándose con distintos argumentos
4. **`data/items.json`** adaptado a tu dominio (mínimo 10 registros)
5. **Reporte generado** en `output/report.json`

---

## ⏱️ Tiempo estimado: 2-3 horas

---

## 🧪 Cómo correr el proyecto

```bash
cd 3-proyecto/starter
pnpm install
pnpm dev              # sin filtro — muestra todos
pnpm dev -- --category electronics   # con filtro
```

---

## 📊 Criterios de Evaluación

| Criterio | Peso |
|----------|------|
| Lee y parsea `items.json` correctamente | 20% |
| Calcula el resumen (total, promedio, extremos) | 20% |
| Filtra por categoría con `--category` | 20% |
| Escribe `output/report.json` correctamente | 20% |
| Manejo de errores (archivo no encontrado, categoría inexistente) | 10% |
| TypeScript estricto — `pnpm build` sin errores | 10% |

---

## 🔗 Recursos de Apoyo

- [Teoría: Módulos ESM](../../1-teoria/02-modulos-esm.md)
- [Teoría: async/await](../../1-teoria/03-async-await.md)
- [Ejercicio 01: Hello Node](../../2-practicas/ejercicio-01-hello-node/README.md)
- [Node.js fs/promises API](https://nodejs.org/docs/latest/api/fs.html#promises-api)
- [process.argv — Node.js docs](https://nodejs.org/docs/latest/api/process.html#processargv)

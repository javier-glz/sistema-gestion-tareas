# TaskFlow - Sistema de Gestión de Tareas

**TaskFlow** es una aplicación web SPA (Single Page Application) desarrollada como parte de la entrega académica para el proyecto universitario, cumpliendo de manera estricta con los requerimientos de la **Modalidad Unipersonal Adaptada** y la metodología **GitHub Flow**.

El sistema permite gestionar el ciclo de vida completo de tareas (CRUD) mediante una interfaz dinámica, responsiva e intuitiva.

---

## Características Principales

* **Alta de Tareas (Create):** Formulario dinámico para registrar tareas especificando título, descripción, responsable, prioridad (*Baja, Media, Alta*) y estado inicial (*Pendiente, En proceso, Terminada*).
* **Consulta y Renderizado (Read):** Vista de tarjetas (*cards*) dinámicas con insignias de colores según el nivel de prioridad y estatus.
* **Modificación y Actualización (Update):** Carga interactiva de datos existentes en el formulario principal mediante la función `editTask`, permitiendo actualizar los campos en tiempo real (*Subsanación de Heteroevaluación*).
* **Eliminación (Delete):** Remoción dinámica de registros mediante identificadores únicos (`id` por timestamp).
* **Filtros Interactivos:** Buscador por nombre de responsable en tiempo real y filtrado por estado de tarea.

---

## Tecnologías Utilizadas

* **HTML5:** Estructura semántica de la interfaz.
* **CSS3:** Estilos personalizados, diseño responsivo y sistema de insignias por prioridades.
* **JavaScript (Vanilla ES6+):** Lógica del DOM, manipulación de arreglos en memoria y gestión de eventos.
* **Git & GitHub:** Control de versiones basado en la metodología **GitHub Flow** (*Conventional Commits*, ramas `feature/` y *Pull Requests*).

---

## Estructura de Ramas y Control de Versiones

El proyecto sigue la metodología **GitHub Flow** aislando cada funcionalidad en ramas independientes antes de su integración a la rama principal (`main`):

1. `main`: Rama de producción con código estable.
2. `feature/registro-tareas`: Formulario de alta y renderizado base.
3. `feature/gestion-avanzada-tareas`: Filtros por responsable/estado, insignias visuales y eliminación de registros (PR #1).
4. `feature/modificacion-tareas`: Módulo de edición y actualización de tareas (PR #2).

---

## Instrucciones de Ejecución Local

1. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/javier-glz/sistema-gestion-tareas.git](https://github.com/javier-glz/sistema-gestion-tareas.git)
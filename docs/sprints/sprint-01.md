# 🚀 Sprint 01 - Infraestructura inicial y Modelado de Base de Datos

📆 Fecha: 2025-04-04 al 2025-04-09  
👨‍💻 Responsable: Carlos  
🎯 Objetivo: Tener una base funcional en AWS con BD modelada y restaurada

---

## ✅ Objetivos alcanzados

- [x] Configuración del repositorio con estructura de carpetas `/Infrastructure`, `/docs`
- [x] Modelado inicial de la base de datos en PostgreSQL
- [x] Creación de script `schema.sql` con tablas base (`usuarios`, `recetas`, `etc`)
- [x] Implementar constraints avanzados (`CHECK`, `UNIQUE`, `FOREIGN KEY` detallados)
- [x] Restauración exitosa de backup a AWS RDS utilizando `pg_restore` con `--no-owner`
- [x] Documentación de decisiones técnicas en el README
- [x] Inclusión de sección de bitácora técnica y estado del sprint

---

## 🕓 Pendientes para próximos sprints

- [ ] Agregar relaciones más complejas (`favoritos`, `categorías`, etc.)
- [ ] Implementacion de servicios
- [ ] Consumo de servicios

---

## 📦 Entregables
-  `/Infrastructure/db/schema.sql` – Script de creación de BD
- `/scripts/restore_rds.sh` – Script local para restaurar BD en RDS
- `/README.md` – Bitácora técnica y decisiones relevantes

---

## 🧠 Notas del sprint

- Tener mas cuidado a la hora de crear usuarios para manipular la bd, ocurren ciertos problemas si no existen dichos usuarios al restaurar las bd
- Se optó por usar `--no-owner` debido a la diferencia de usuarios entre el entorno local y el usuario de RDS.
- Se estableció una estructura clara de documentación desde el inicio del proyecto para facilitar mantenimiento y escalabilidad futura.

---


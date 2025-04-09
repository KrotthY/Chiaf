# 🛠️ Infraestructura AWS - Proyecto Chiaf

Infraestructura y configuraciones asociadas al entorno AWS para el proyecto Chiaf.

## 🧱 Modelado de Base de Datos

### 2025-04-06 

First Sprint
- Se diseñaron las tablas iniciales del proyecto para usuarios, recetas, ingredientes y relaciones entre ellas.
- El enfoque está orientado a escalabilidad y normalización.
- La BD se modeló directamente en PostgreSQL y se validó con pruebas locales.

##### posteriomente se agrega  el diagrama de bd.
  
## 📅 Bitácora de Cambios Técnicos

### 2025-04-08

- 🔁 Se restauró una base de datos PostgreSQL en AWS RDS usando `pg_restore` con la opción `--no-owner` debido a la diferencia de usuarios entre el entorno original y AWS.
- ✅ Se ejecuto el comando desde la terminal local con pg_restore de PostgreSQL.
- 🧠 Se documentó la decisión en este README y se configuró correctamente la variable de entorno `PATH` para usar `pg_restore`.

---

## 💾 Restauración de base de datos en RDS

### Requisitos
- Tener PostgreSQL instalado localmente (cliente CLI).
- Acceso al archivo `.backup` en tu máquina.
- Acceso a la instancia RDS (usuario, host, puerto).

### Comando 
pg_restore -h zes1.ds.amazs.cm -p 5432 -U Tapsin -d postgres --no-owner --verbose "Z:\Proyectos\chiaf\BackupChief.back"

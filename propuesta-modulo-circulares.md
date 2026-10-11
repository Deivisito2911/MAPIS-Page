# 📋 Propuesta de Arquitectura y Maquetación: Módulo de Circulares MAPIS

**Documento de Especificación Técnica, UX/UI y Cotización Comercial**  
*Colegio U.E. Mariano Picón Salas (MAPIS) — Año Escolar 2026-2027*

---

## 1. Resumen Ejecutivo y Objetivo

El colegio requiere un **Módulo Privado de Circulares y Formularios Institucionales** para que los representantes puedan consultar, leer y descargar comunicados oficiales, autorizaciones y planillas en un entorno seguro y de fácil acceso, evitando la dispersión de información por WhatsApp o correo tradicional.

Asimismo, la directiva del colegio necesita una forma ágil y autónoma de **publicar, modificar y organizar** dichas circulares (ya sean documentos PDF adjuntos o comunicados redactados directamente en texto enriquecido).

---

## 2. Análisis del Flujo de Autenticación (¿Cómo acceden los representantes?)

El colegio planteó la disyuntiva entre **validación con correo institucional**, una **credencial única compartida**, o un **sistema de cuentas individuales**. A continuación se analiza cada opción:

| Modelo de Acceso | ¿Cómo Funciona? | Ventajas 👍 | Desventajas ⚠️ | Recomendación |
| :--- | :--- | :--- | :--- | :--- |
| **Opción A: Credencial Institucional Única (Clave Familiar)** | Se define una contraseña o PIN institucional (ej. `MAPIS-FAMILIA-2026` o combinación con el RIF/código escolar) compartida a las familias mediante las reuniones de inicio de lapso. | • Cero fricción de entrada.<br>• No requiere base de datos de 500 usuarios.<br>• No hay problemas de "olvidé mi contraseña" ni llamadas de soporte técnico al colegio.<br>• Implementación rápida y económica. | • Si un representante comparte la clave con alguien ajeno, esa persona puede ver las circulares generales (aunque las circulares escolares no suelen ser información bancaria o confidencial). | **⭐ Recomendada para Fase 1 (MVP)** |
| **Opción B: Login con Google Workspace (OAuth / SSO)** | El representante inicia sesión con la cuenta de Google del estudiante (ej. `alumno@mapis.edu.ve`). Se valida automáticamente la extensión del dominio. | • Muy seguro y automatizado.<br>• Aprovecha la infraestructura existente si el colegio ya usa Google Workspace / Classroom.<br>• Cero contraseñas que gestionar por parte del colegio. | • Requiere que los padres tengan a mano la sesión de Google de sus hijos en sus teléfonos móviles.<br>• En Inicial o Primaria baja, a veces los padres no usan a diario ese correo. | **⭐ Excelente si el colegio ya tiene Google Workspace activo** |
| **Opción C: Cuentas individuales con Correo Personal y Contraseña** | Cada representante se registra con su correo personal (Gmail, Hotmail, etc.) y una clave propia; el colegio aprueba el acceso. | • Control total de quién entra y registros de lectura individuales. | • Costoso de implementar.<br>• Alta carga operativa para la secretaría (recuperación de claves, correos mal escritos, soporte continuo). | ❌ No recomendada para esta primera etapa. |

### 💡 Nuestra Sugerencia de Flujo de Entrada (Híbrido Inteligente):
1. **Acceso de Representantes (Frente de Consulta):**
   - Implementar un **PIN / Clave de Acceso Familiar** o **Autenticación con el Correo Institucional de Google** (un botón de *"Ingresar con correo del estudiante (@mapis.edu.ve)"*).
   - La sesión se guarda en el navegador (`localStorage` o cookie cifrada segura por 30 o 60 días) para que los padres no tengan que reescribir la clave cada vez que abren el enlace desde el teléfono.
2. **Acceso de Administración (Panel de Publicación):**
   - Una pantalla `/admin/circulares` protegida con credenciales administrativas seguras (correo y contraseña de coordinación / dirección) para crear y editar el contenido.

---

## 3. Flujo Funcional de las Circulares (Gestión del Contenido)

Dado que el colegio aún no decide si las circulares serán **archivos PDF** o **redactadas manualmente**, el sistema debe diseñarse de forma **híbrida**:

### Tipos de Circulares Compatibles:
1. **Circular en Archivo (PDF / Documento):**
   - La directiva sube el PDF oficial membretado y firmado.
   - El representante ve la ficha con título, fecha, resumen y botón **"Descargar PDF"** / **"Ver en Pantalla"**.
2. **Circular Redactada (Comunicado Web):**
   - La directiva escribe el título, fecha y el cuerpo del mensaje directamente (con negritas, listas y enlaces).
   - El representante puede leerla directamente en la web sin descargar archivos, e incluye un botón de *"Imprimir / Guardar como PDF"*.
3. **Formularios / Autorizaciones Enlazadas:**
   - La circular puede incluir un botón de acción externo (ej. enlace a Jotform / Google Forms para autorizaciones de paseos, planillas de salud, etc.).

---

## 4. Maquetación y Wireframes UX/UI

### 4.1. Pantalla de Acceso: `/circulares/login`
```
┌─────────────────────────────────────────────────────────────┐
│                       [ LOGO MAPIS ]                       │
│                                                             │
│                PORTAL DE CIRCULARES MAPIS                   │
│        Acceso exclusivo para familias y representantes      │
│                                                             │
│   ┌─────────────────────────────────────────────────────┐   │
│   │  Clave Institucional de Acceso:                     │   │
│   │  [ •••••••••••••••••••••••••••••• ] [👁️]           │   │
│   └─────────────────────────────────────────────────────┘   │
│                                                             │
│   [        INGRESAR AL PORTAL DE CIRCULARES ➔        ]     │
│                                                             │
│   ─── O también ───                                         │
│   [ 🔴 Continuar con correo @mapis.edu.ve ]                 │
│                                                             │
│   ¿No tienes la clave? Solicítala a la Coordinación         │
│   Académica de tu nivel.                                    │
└─────────────────────────────────────────────────────────────┘
```

---

### 4.2. Portal Principal: `/circulares` (Vista Representante)
```
┌──────────────────────────────────────────────────────────────────────────┐
│ [LOGO]  U.E. MARIANO PICÓN SALAS      [Año 2026-2027]  [Cerrar Sesión 🔒]│
├──────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  📢 CIRCULARES Y COMUNICADOS OFICIALES                                   │
│  Mantente informado de las disposiciones, normativas y actividades.      │
│                                                                          │
│  [ 🔍 Buscar por palabra clave, número o asunto... ]                     │
│                                                                          │
│  Filtros por Nivel:                                                      │
│  [ (Todas) ]  [ Inicial ]  [ Primaria ]  [ Bachillerato ]  [ General ]   │
│                                                                          │
│  ┌────────────────────────────────────────────────────────────────────┐  │
│  │ 🏷️ BACHILLERATO | 📅 08 de Octubre, 2026                 [NUEVA ✨] │  │
│  │ CIRCULAR N° 04: Cronograma de Evaluaciones Unit 1 y Proyecto       │  │
│  │ Estimados representantes de Media General, hacemos entrega de las  │  │
│  │ pautas de entrega del primer corte evaluativo del lapso.           │  │
│  │                                                                    │  │
│  │ [ 📄 Ver / Descargar PDF ]   [ 📋 Llenar Autorización Online ↗ ]    │  │
│  └────────────────────────────────────────────────────────────────────┘  │
│                                                                          │
│  ┌────────────────────────────────────────────────────────────────────┐  │
│  │ 🏷️ GENERAL | 📅 01 de Octubre, 2026                                │  │
│  │ CIRCULAR N° 03: Normativa de Uso de Uniforme y Horarios 2026-2027  │  │
│  │ Disposiciones generales sobre la presentación personal y puntualidad│ │
│  │ en los horarios de entrada (8:00 AM) y salida (3:30 PM).           │  │
│  │                                                                    │  │
│  │ [ 👁️ Leer Comunicado Completo ]   [ 🖨️ Imprimir ]                   │  │
│  └────────────────────────────────────────────────────────────────────┘  │
│                                                                          │
└──────────────────────────────────────────────────────────────────────────┘
```

---

### 4.3. Panel Administrativo: `/admin/circulares` (Vista Colegio)
```
┌──────────────────────────────────────────────────────────────────────────┐
│ ⚙️ PANEL DE CONTROL MAPIS — GESTIÓN DE CIRCULARES                       │
├──────────────────────────────────────────────────────────────────────────┤
│ [ + NUEVA CIRCULAR ]                                    [ 24 Publicadas ]│
│                                                                          │
│ Modal de Creación / Edición:                                             │
│ ┌──────────────────────────────────────────────────────────────────────┐ │
│ │ • Título de la Circular: [ Circular N° 05 - Semana de la Ciencia ]   │ │
│ │ • Fecha: [ 11 / 10 / 2026 ]                                          │ │
│ │ • Nivel: [ Desplegable: General / Inicial / Primaria / Bachillerato ]│ │
│ │ • Modalidad: (•) Archivo PDF   ( ) Redacción en Texto                │ │
│ │                                                                      │ │
│ │ Si es PDF:                                                           │ │
│ │   [ 📁 Subir archivo PDF (o arrastrar aquí) ]                        │ │
│ │                                                                      │ │
│ │ Si es Redactada:                                                     │ │
│ │   [ Editor de texto enriquecido con formato ]                        │ │
│ │                                                                      │ │
│ │ • Enlace adicional opcional (Jotform / Google Form):                 │ │
│ │   [ https://form.jotform.com/... ]                                   │ │
│ │                                                                      │ │
│ │ [ GUARDAR Y PUBLICAR INMEDIATAMENTE ]   [ GUARDAR COMO BORRADOR ]     │ │
│ └──────────────────────────────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────────────────────────┘
```

---

## 5. Arquitectura Técnica Sugerida

Para integrarlo a la base de código actual (Next.js 15 App Router, React 19, Tailwind CSS v4):

1. **Almacenamiento de Archivos (PDFs):**
   - Utilizar el bucket ya configurado de **Cloudinary** (o **Supabase Storage** / **Vercel Blob**) para subida instantánea y enlaces directos seguros.
2. **Base de Datos / Persistencia:**
   - **Opción Rápida & Sin Costos Mensuales (Supabase Free Tier o Firebase Firestore):** Permite tabla `circulares` con campos: `id`, `titulo`, `numero`, `fecha`, `nivel`, `tipo` (pdf/texto), `contenido`, `archivo_url`, `formulario_url`, `activa`.
   - Se conecta mediante Server Actions en Next.js con validación segura.
3. **Seguridad:**
   - Middleware de Next.js (`src/middleware.ts`) que protege las rutas `/circulares` y `/admin/circulares`, verificando la cookie de sesión autenticada antes de permitir la renderización.

---

## 6. Opciones de Alcance y Cotización Comercial (Pricing)

Al cotizar un módulo institucional como este en el mercado actual para colegios privados, se recomienda presentar **3 paquetes escalonados** para que el cliente elija según su presupuesto y nivel de autonomía deseado:

---

### 📦 Opción 1: Módulo Esencial (Clave Institucional + Carga de PDFs y Enlaces)
> *Ideal si el colegio busca resolver la necesidad rápido con baja inversión y subiendo sus comunicados en PDF.*
- **Incluye:**
  - Pantalla de acceso protegida por Clave/PIN institucional único para familias.
  - Página principal `/circulares` con buscador en tiempo real y filtros por nivel (*Todas, Inicial, Primaria, Bachillerato, General*).
  - Tarjetas interactivas con previsualizador modal de PDF y botón de descarga.
  - Soporte para enlaces directos a formularios externos (Jotform, Google Forms).
  - Panel administrativo básico `/admin/circulares` protegido para subir nuevos PDFs, asignar títulos, fechas y niveles.
  - Almacenamiento integrado en la nube (Cloudinary / Vercel Blob).
- **Tiempo estimado de entrega:** 4 a 6 días hábiles.
- **Inversión sugerida:** **$180 – $240 USD**

---

### 📦 Opción 2: Módulo Profesional (Híbrido PDF + Editor de Texto + Autenticación Google)
> *La opción más equilibrada y recomendada. Da autonomía total al colegio sin depender de subir PDFs para comunicados breves.*
- **Incluye:**
  - Todo lo de la **Opción 1**, más:
  - **Doble método de acceso para representantes:** Clave institucional O inicio de sesión con correo de Google Workspace (`@mapis.edu.ve`).
  - **Soporte Híbrido:** Publicación de circulares en PDF **O** redactadas directamente en la plataforma mediante un editor de texto enriquecido (Rich Text / Markdown) con diseño adaptado a móviles.
  - Opción de **imprimir directamente** la circular en formato membretado escolar desde el navegador.
  - Distintivo visual dinámico de `[NUEVA]` para circulares publicadas en los últimos 7 días.
  - Panel administrativo completo con gestión de borradores, edición de circulares anteriores y eliminación.
- **Tiempo estimado de entrega:** 7 a 10 días hábiles.
- **Inversión sugerida (Recomendada):** **$320 – $420 USD**

---

### 📦 Opción 3: Portal Integral de Comunicaciones y Control de Lectura
> *Para una solución corporativa de alto nivel con métricas institucionales.*
- **Incluye:**
  - Todo lo de la **Opción 2**, más:
  - Base de datos relacional (Supabase / PostgreSQL) con roles de usuario (Superadmin, Coordinador Primaria, Coordinador Bachillerato).
  - Confirmación de lectura digital (*"He leído y acepto los términos de esta circular"* guardando fecha y hora de acuse de recibo).
  - Exportación de reportes administrativos en Excel de quiénes han confirmado la lectura.
  - Integración de avisos automáticos a la barra superior del sitio web (`AnnouncementBar`) al publicar una circular urgente.
- **Tiempo estimado de entrega:** 12 a 15 días hábiles.
- **Inversión sugerida:** **$500 – $650 USD**

---

## 7. Recomendación Estratégica para Presentar la Cotización

1. **Preséntales la Opción 2 como la recomendada:**
   - Argumenta que la **Opción 2 ($350 - $400 USD)** les da la flexibilidad perfecta: si la directora quiere redactar un comunicado rápido de última hora desde su teléfono o laptop, no tiene que diseñar un PDF en Word o Canva, puede escribirlo y publicarlo al instante; pero si ya tienen el PDF oficial firmado, lo suben con un clic.
2. **Respecto a la clave de acceso:**
   - Recomiéndales iniciar con la **clave institucional familiar por año escolar** (ej. distribuida en las carteleras de aula o grupos de delegados). Es la solución con **cero problemas de soporte técnico**, funciona en el 100% de los teléfonos inteligentes y no satura a la secretaría del colegio con padres pidiendo recuperar contraseñas.
3. **Mantenimiento opcional:**
   - Puedes ofrecerles una póliza de soporte o mantenimiento web mensual de **$30 - $50 USD/mes** que cubra respaldos, soporte técnico ante dudas y pequeñas modificaciones periódicas.

# Contexto Inicial del Proyecto: U.E. Mariano Picón Salas (Colegio MAPIS)
> **Instrucción para el Asistente:** Este archivo contiene el contexto integral, reglas estrictas de desarrollo, activos de marca de Cloudinary, arquitectura del repositorio y estado del proyecto. Úsalo como instrucción de inicio para continuar el trabajo sin requerir re-explicaciones del usuario.

---

## 1. Perfil del Proyecto y Rol del Asistente

- **Rol:** Desarrollador Frontend Senior especializado en Next.js (App Router), React 19, Tailwind CSS v4 y diseño UI/UX accesible.
- **Institución:** **U.E. Mariano Picón Salas (Colegio MAPIS)**, institución educativa privada de excelencia en Los Robles, Municipio Maneiro, Estado Nueva Esparta, Isla de Margarita, Venezuela.
- **Lema Institucional:** *"Ars - Veritas - Humanitas"* (Arte, Verdad, Humanidad).
- **Año de Fundación:** 1 de Septiembre de 2008 (17 años de servicio formando líderes integrales).

---

## 2. Reglas Estrictas de Trabajo (Cumplimiento Obligatorio)

1. **NUNCA sobrescribir archivos completos de configuración** (`.json`, `.yaml`, `.env`, etc.) usando comandos destructivos en terminal como `Set-Content` o `>`.
2. **SIEMPRE leer el archivo primero.** Para modificar o agregar configuración, usar `replace_file_content` para alterar únicamente el bloque necesario.
3. **Respetar estrictamente** todas las credenciales, tokens, variables de entorno y comandos existentes.
4. **REGLA DE NOTIFICACIÓN OBLIGATORIA:**  
   > *Cada vez que vayas a modificar un archivo, debes informar al usuario cuál archivo es y tu motivo específico antes o al momento de editarlo.*
5. **Preservar la integridad del código:** Mantener comentarios existentes, docstrings y estructura de variables en Tailwind v4.

---

## 3. Stack Tecnológico y Arquitectura

- **Framework:** Next.js 15+ (`app/` App Router)
- **Biblioteca UI:** React 19 (`"use client"` donde se requiera estado/interacción)
- **Estilos:** Tailwind CSS v4 con variables institucionales:
  - Azul MAPIS: `--color-mapis-blue: #110E42`
  - Amarillo MAPIS: `--color-mapis-yellow: #FEBF0F`
  - Naranja MAPIS: `--color-mapis-orange: #F97316`
  - Fondo Crema Cálido: `--color-warm-cream: #FAF9F6` o `#F5F5F0`
- **Iconografía:** Lucide React + Íconos de marca oficiales de Cloudinary.
- **Animaciones:** Componente `FadeIn` (`src/components/animations/fade-in.tsx`) impulsado por `react-intersection-observer` con `-50px` rootMargin y aceleración GPU (`transform-gpu`).
- **Compuerta de Mantenimiento (`MaintenanceGate`):** La plataforma cuenta con protección en `src/components/maintenance-gate.tsx`. En entornos headless o pruebas con Playwright, se desbloquea con:
  ```js
  sessionStorage.setItem("mapis_preview_auth", "true");
  ```

---

## 4. Directorio de Activos Oficiales en Cloudinary

**Colección de Marca de la Diseñadora:**  
🔗 `https://collection.cloudinary.com/dnwyno39r/494bac145bcf81dfe612a1d186ba6fa1`

### Íconos de Marca Circulares Aprobados:
- **Robótica:** `https://res.cloudinary.com/dnwyno39r/image/upload/v1771538496/robotica_e017xw.jpg`
- **Fútbol:** `https://res.cloudinary.com/dnwyno39r/image/upload/v1771538476/futbol_dr2jn0.jpg`
- **Ajedrez:** `https://res.cloudinary.com/dnwyno39r/image/upload/v1771538508/ajedrez_bt3oju.jpg`
- **MUN (Modelo de Naciones Unidas):** `https://res.cloudinary.com/dnwyno39r/image/upload/v1771538489/mun_blzlju.jpg`
- **Kickingball:** `https://res.cloudinary.com/dnwyno39r/image/upload/v1771538482/kickingball_lr1kbd.jpg`
- **Voleibol:** `https://res.cloudinary.com/dnwyno39r/image/upload/v1771538504/voleibol_z9b40k.jpg`
- **Baloncesto:** `https://res.cloudinary.com/dnwyno39r/image/upload/v1771538509/baloncesto_gj5pm6.jpg`
- **Talento MAPIS:** `https://res.cloudinary.com/dnwyno39r/image/upload/v1771538497/talento_mapis_bbzsob.jpg`
- **Innovación / STEAM:** `https://res.cloudinary.com/dnwyno39r/image/upload/v1771538478/innovacion_dqwnyi.jpg`
- **Liderazgo:** `https://res.cloudinary.com/dnwyno39r/image/upload/v1771538484/liderazgo_jalkzj.jpg`
- **Excelencia:** `https://res.cloudinary.com/dnwyno39r/image/upload/v1771538531/excelencia_coxid3.jpg`
- **Compromiso Social:** `https://res.cloudinary.com/dnwyno39r/image/upload/v1771538515/compromiso_ov8utq.jpg`
- **Respeto / Convivencia:** `https://res.cloudinary.com/dnwyno39r/image/upload/v1771538495/respeto_xf9u9u.jpg`
- **Misión / Alianza Familia-Colegio:** `https://res.cloudinary.com/dnwyno39r/image/upload/v1771538485/mision_ayqry0.jpg`
- **Dirección / Ubicación / Identidad:** `https://res.cloudinary.com/dnwyno39r/image/upload/v1771538526/direccion_fniszi.jpg`
- **Teléfono:** `https://res.cloudinary.com/dnwyno39r/image/upload/v1771538501/telefono_e7huzj.jpg`
- **Correo Electrónico:** `https://res.cloudinary.com/dnwyno39r/image/upload/v1771538525/correo_s13oj0.jpg`
- **Horario:** `https://res.cloudinary.com/dnwyno39r/image/upload/v1771538477/horario_ugt9n5.jpg`
- **Calendario:** `https://res.cloudinary.com/dnwyno39r/image/upload/v1771538514/calendario_tfz3ex.jpg`
- **Etapa Primaria:** `https://res.cloudinary.com/dnwyno39r/image/upload/v1771538490/primaria_k4niyt.jpg`
- **Etapa Bachillerato:** `https://res.cloudinary.com/dnwyno39r/image/upload/v1771538509/bachillerato_plzgwc.jpg`
- **Vida MAPIS:** `https://res.cloudinary.com/dnwyno39r/image/upload/v1771538503/vida_mapis_fbsmoi.jpg`

---

## 5. Mapeo de Rutas y Páginas del Proyecto

1. `/` — Página Principal (Hero con slider, Stats, Oferta Educativa, Selecciones, Eventos y Logros).
2. `/academico/primaria` — Educación Primaria (1º a 6º Grado), Enfoque, Día a Día, ¿Por qué elegir Mapis?.
3. `/academico/bachillerato` — Media General (1º a 5º Año), Ciencias, Laboratorios, Alianza UNIMET.
4. `/academico/modelo-educativo` — Los 10 Objetivos Institucionales en Masonry fluido de 2 columnas.
5. `/academico/calendario` — Cronograma mensual y timeline de hitos escolares.
6. `/admisiones` — Proceso paso a paso, requisitos y enlace a JotForm.
7. `/contacto` — Teléfonos, WhatsApp, correos, mapa interactivo y FAQ.
8. `/instalaciones` — Recorrido por el campus (Maker Space, Teatrino, Canchas, DOBE, Comedor, Enfermería).
9. `/intranet` — Portal docente en construcción.
10. `/nosotros` — Historia, Misión, Valores, Perfiles, Equipo Directivo, Himno y Ubicación.
11. `/privacidad` — Política de Privacidad de Datos.
12. `/vida-mapis/eventos` — Artículos y noticias escolares.
13. `/vida-mapis/selecciones` — Selecciones deportivas, científicas y culturales en formato zig-zag.
14. `/vida-mapis/semana-mapis` — Información de las 6 alianzas y lightbox de momentos.

---

## 6. Últimos Cambios Implementados en el Proyecto

1. **Actualización de Selecciones (Home y Página Dedicada):**
   - Fútbol: `Screenshot_2026-07-01_150240_meuqjf.png`
   - Robótica: `WA_1790718611801_akoz4o.jpg`
2. **Eventos y Logros en Home (`events-carousel.tsx`):**
   - 1. *MAPIS ROBOTIC TEAM: 2do lugar nacional* (30 mayo 2026)
   - 2. *SIMUN 2026 Caracas* (17 mayo 2026)
   - 3. *Prueba PDU Universidad Metropolitana* (Abr 2026)
   - 4. *Robotics For Good Youth Challenge* (22 marzo 2026)
3. **Modelo Educativo (`/academico/modelo-educativo`):**
   - Subtítulo actualizado: `"Ser reconocidos como una Institución de calidad académica por nuestro aporte integral a la comunidad margariteña."`
   - 10 Objetivos Institucionales vinculados a sus íconos de marca en masonry CSS (`columns-1 md:columns-2`).
4. **Primaria (`/academico/primaria`):**
   - Reemplazados los íconos genéricos en *"Nuestra Promesa / ¿Por qué elegir MAPIS?"* por los íconos circulares de Cloudinary.
5. **Oferta Educativa (`src/components/home/educational-offer.tsx`):**
   - Elevación 3D en hover (`hover:-translate-y-2.5`), sombra envolvente, badges translúcidos de nivel y corrección de superposición en Vida MAPIS posicionando la etiqueta en la esquina superior derecha (`top-6 right-6 md:top-8 md:right-8`).

---

## 7. Próximas Tareas y Auditoría de Diseño

Consultar el archivo [`auditoria-diseno-ux-ui.md`](file:///C:/Users/Deivisito/Documents/Deivith/Programacion/Codigos/MAPIS/P%C3%A1gina%20Web%20MAPIS/auditoria-diseno-ux-ui.md) para la lista completa de mejoras pendientes clasificadas por prioridad (contraste WCAG, sincronización de fechas 2026, fotos del equipo directivo y pulido visual).

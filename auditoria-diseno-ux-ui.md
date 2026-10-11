# Auditoría de Diseño, Accesibilidad y Experiencia de Usuario (UX/UI)
**U.E. Mariano Picón Salas (Colegio MAPIS)**  
*Fecha: Octubre 2026 | Entorno: Next.js + Tailwind v4 + React 19*

---

## Resumen Ejecutivo

Se realizó una inspección técnica, visual y funcional de la totalidad de la plataforma web en resoluciones de **Escritorio (1440 × 900 px)** y **Dispositivos Móviles (390 × 844 px)** a través de sus **14 páginas y componentes transversales**.

A nivel técnico de maquetación, el sitio cuenta con una base sólida: **0 desbordamientos horizontales (*horizontal overflow*)**, estructura semántica limpia y transiciones cuidadas con `FadeIn` y `transform-gpu`. Sin embargo, el análisis detectó **puntos críticos de accesibilidad y contraste (WCAG)**, **datos desincronizados entre secciones (2025 vs. 2026)**, **errores en biografías/fotos del equipo directivo** y **oportunidades de pulido estético en móvil y desktop**.

---

## 1. Hallazgos Críticos de Accesibilidad y Usabilidad (Alta Prioridad)

### 1.1. Texto Negro sobre Fondo Azul Marino en Modelo Educativo
- **Ubicación:** `src/app/academico/modelo-educativo/page.tsx`
- **Problema:** En el Hero de la página, el contenedor tiene `bg-mapis-blue` (`#110E42`), pero las clases de texto aplicadas son `text-black` y el subtítulo tiene `text-black`.
- **Impacto:** El ratio de contraste medido es de **1.2:1**, haciendo el título y el subtítulo prácticamente invisibles sobre el fondo oscuro (el estándar mínimo WCAG AA exige **4.5:1**).
- **Sugerencia:** Reemplazar por `text-white`, subtítulo `text-blue-100` y badge `bg-white/10 text-mapis-yellow border-white/20`, consistente con los demás encabezados del sitio.

### 1.2. Texto Blanco sobre Amarillo en Selecciones Deportivas
- **Ubicación:** `src/app/vida-mapis/selecciones/page.tsx`
- **Problema:** En las secciones alternas impares (como *MAPIS ROBOTIC TEAM*, *Kickingball*, *Voleibol*), el fondo es `bg-mapis-yellow` (`#FEBF0F`), pero el título está codificado como `text-white`.
- **Impacto:** Ratio de contraste de apenas **1.75:1** (severa falla de legibilidad contra el amarillo brillante).
- **Sugerencia:** En las secciones amarillas, el título debe ser `text-mapis-blue` (`#110E42`), el cual ofrece un contraste superior a **11:1**, garantizando una lectura nítida y descanso visual.

### 1.3. Enlace de WhatsApp en Instalaciones apunta al Teléfono del Desarrollador
- **Ubicación:** `src/app/instalaciones/page.tsx`
- **Problema:** El botón de acción *"Agendar Visita Guiada"* tiene como destino `wa.me/584129672251` (número personal del desarrollador en los créditos del footer), en lugar de la línea oficial de atención de MAPIS (`wa.me/584141984093`).
- **Impacto:** Los representantes que deseen coordinar una visita a las instalaciones contactarán inadvertidamente al programador en vez de a la administración escolar.
- **Sugerencia:** Unificar al número oficial `584141984093`.

### 1.4. Falta de `aria-label` en el Botón del Menú Hamburguesa Móvil
- **Ubicación:** `src/components/navbar.tsx`
- **Problema:** El botón móvil `<button onClick={() => setIsOpen(!isOpen)}>` no posee atributo `aria-label="Abrir menú de navegación"`.
- **Impacto:** Herramientas de accesibilidad y lectores de pantalla lo reportan como botón interactivo sin etiqueta.
- **Sugerencia:** Agregar `aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}`.

---

## 2. Inconsistencias de Contenido y Sincronización Temporal (2025 vs. 2026)

| Elemento / Sección | Estado Actual | Ubicación | Sugerencia de Corrección |
| :--- | :--- | :--- | :--- |
| **Años de Trayectoria** | En `StatsBar` dice `+18 Años de Historia`. En `Footer` dice `17 años de servicio`. | `src/components/home/stats.tsx`<br/>`src/components/footer.tsx` | Si el colegio fue fundado el 1 de septiembre de 2008, actualmente tiene 17 años cumplidos (rumbo a 18 en sep 2026). Unificar la cifra en ambos sitios. |
| **Botón Menú Móvil** | Dice textualmente `"ADMISIONES 2025"` en color naranja. | `src/components/navbar.tsx` | Cambiar a `"ADMISIONES 2026"` o simplemente `"PROCESO DE ADMISIÓN"`. |
| **Año Escolar en Banners** | En Hero, Admisiones y CTA dice `"2025-2026"` e `"Inscripciones Abiertas 2025-2026"`. | Hero, Admisiones, CallToAction | Alinear con el periodo lectivo vigente que la institución desee promocionar (ej. 2026-2027 o Admisiones Abiertas). |
| **Barra de Anuncios Superior** | Muestra avisos de enero: `"Viernes 30/01 Fun Friday"`, `"Jueves 29/01 Evento MAPIS MUN"` y `"Coffe Talks"` (con error ortográfico en inglés). | `src/components/announcement-bar.tsx` | Corregir ortografía (`Coffee Talks`) y actualizar fechas o permitir anuncios dinámicos/vigentes. |
| **Página `/vida-mapis/eventos` vs. Home** | En la página individual de eventos siguen figurando 3 tarjetas estáticas de prueba de febrero 2026 (Semana Mapis, Mundialito, Mascota), mientras que en Home ya están los 4 logros reales y actualizados de mayo 2026. | `src/app/vida-mapis/eventos/page.tsx` | Compartir la misma fuente de datos entre `events-carousel.tsx` y la página `/vida-mapis/eventos`. |
| **Horarios de Atención** | En `/contacto` y `/admisiones` dice `7:30 AM - 12:30 PM`. En el `/footer` dice `8:00 AM - 3:30 PM`. | Footer vs. Contacto | Aclarar la distinción: **Jornada de Clases:** 8:00 AM a 3:30 PM \| **Atención al Representante:** 7:30 AM a 12:30 PM. |

---

## 3. Discrepancias en Equipo Directivo y Recursos Multimedia

### 3.1. Carrusel de Liderazgo en `/nosotros`
Al abrir el modal interactivo de biografía en `src/components/nosotros/team-carrusel.tsx`, existen errores cruzados de copiar y pegar:
1. **Lic. Barbara Hernández:** La biografía empieza diciendo *"Carlos es el arquitecto detrás de nuestro robusto plan de estudios..."*.
2. **Lic. Carolina:** La biografía dice *"la profesora Ana vela por el bienestar emocional..."*.
3. **Lic. Santiago Perera (masculino):** Tiene la foto de la *Lic. Yusmely Albarrán (femenino)* y la biografía dice *"La Lic. Yusmely Albarrán es la guía de nuestros estudiantes..."*.
4. **Lic. Jaime Picón:** Tiene exactamente la misma foto y texto duplicado de la Lic. Yusmely Albarrán.

### 3.2. Galerías Duplicadas en Semana MAPIS
- **Ubicación:** `src/app/vida-mapis/semana-mapis/page.tsx`
- **Problema:** En el carrusel de fotos *"Galería de Momentos"* de cada una de las 6 alianzas (Guayacanes, Frailejones, Iguanas, Chipi-Chipi, Cóndor, Truchas), el array de imágenes tiene el logo/mascota ilustrado duplicado dos veces.
- **Sugerencia:** Sustituir los logos repetidos por fotografías auténticas de los estudiantes compitiendo con sus franelas de alianza y mascotas.

### 3.3. Imágenes Placeholder en Instalaciones y Bachillerato
- **Música en `/instalaciones`:** Usa `/kids-learning.jpg` genérica.
- **Cancha de Kikinball en `/instalaciones`:** Usa `/school-building-architecture-modern.jpg` (fachada de edificio en lugar de un campo de juego).
- **Orientación Vocacional en `/academico/bachillerato`:** La tarjeta tiene la imagen de un edificio arquitectónico con el texto alternativo `"Graduación"`.
- **Convenios Institucionales en `/academico/bachillerato`:** En el código se lee `/* Nota: Pide el logo oficial a la diseñadora, usa un placeholder por ahora */`.

---

## 4. Detalles de Maquetación Visual y Ajustes Responsive (Móvil & Web)

### 4.1. Desbordamiento Vertical del Ícono de Contacto en Navbar Desktop
- **Ubicación:** `src/components/navbar.tsx`
- **Problema:** El botón tiene tamaño `size="icon"` (36 × 36 px), pero el contenedor de la imagen tiene clases no estándar `w-15 h-15`. La imagen se renderiza a **60 px de altura**, desbordándose fuera del círculo del botón.
- **Sugerencia:** Ajustar a `w-7 h-7` o `w-8 h-8` centrado dentro del botón para que el círculo hover se mantenga perfectamente circular.

### 4.2. Contenedores de Íconos en `AboutSummary`
- **Ubicación:** `src/components/home/about-summary.tsx`
- **Problema:** El contenedor usa `w-15 h-15`. Se recomienda normalizar a `w-12 h-12` o `w-14 h-14`.

### 4.3. Tipografía y Padding en el Himno del Colegio
- **Ubicación:** `src/components/nosotros/anthem.tsx`
- **Problema:** Se aplicó la clase `px-25` (no estándar en Tailwind). En pantallas móviles puede provocar comportamientos anómalos de ancho de lectura.
- **Sugerencia:** Utilizar `px-4 md:px-8` para una lectura fluida en móviles.

### 4.4. Título Principal H1 del Hero en Home (SEO & A11y)
- **Ubicación:** `src/components/home/hero.tsx`
- **Problema:** El HTML tiene `EDUCAMOS CON PROPÓSITO<span ...>FORMAMOS PARA LA VIDA Y EL FUTURO</span>`. Sin espacio intermedio, se lee `EDUCAMOS CON PROPÓSITOFORMAMOS PARA LA VIDA Y EL FUTURO`.
- **Sugerencia:** Agregar un espacio o separar en dos líneas con `<br className="hidden md:inline" />`.

### 4.5. Sección Comentada en Bachillerato
- **Ubicación:** `src/app/academico/bachillerato/page.tsx`
- **Problema:** El bloque de "Perfil del Estudiante" (*Auténticos, Solucionadores, Ciudadanos, Resilientes, Integrales, Críticos*) se encuentra comentado con `{/* ... */}`.
- **Sugerencia:** Evaluar con la coordinación si se activa formalmente para enriquecer la propuesta académica de Media General.

---

## 5. Sugerencias de Pulido UX / UI y Modernización Visual

1. **Estandarizar el Efecto 3D de Tarjetas:**  
   Replicar la elevación suave (`hover:-translate-y-2.5`), sombra envolvente (`hover:shadow-[0_25px_50px_rgba(17,14,66,0.25)]`) y resplandor de borde de marca implementados en *Nuestra Oferta Educativa* en las tarjetas de *Instalaciones* y *¿Por qué elegir MAPIS?*.
2. **Calendario Dinámico:**  
   En `/academico/calendario`, al seleccionar un mes diferente en el menú desplegable (Enero, Diciembre, Noviembre), permitir que el timeline de hitos filtre los eventos de ese mes en lugar de mostrar siempre Febrero.
3. **Buscador o Filtro en Eventos:**  
   En `/vida-mapis/eventos`, añadir botones de filtro (Todo, Robótica, Deportes, MUN, Institucional) para que las familias encuentren rápidamente las noticias de su interés.

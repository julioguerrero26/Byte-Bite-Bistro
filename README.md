#  Byte & Bite Bistro | Menú Gourmet para Devs de Alto Rendimiento

[![Astro](https://img.shields.io/badge/Astro-v6.0-ff5d01.svg?style=flat&logo=astro)](https://astro.build)
[![CSS](https://img.shields.io/badge/CSS-Vanilla-blue.svg?style=flat&logo=css3)](https://www.w3.org/Style/CSS/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

**Byte & Bite Bistro** es un menú interactivo premium diseñado para desarrolladores con apetito de bajo nivel. Compila tus antojos favoritos en tiempo de ejecución, gestiona el buffer de pedidos con latencia $O(1)$ y disfruta de una experiencia libre de cuellos de botella de renderizado.

---

## Arquitectura y Optimizaciones Técnicas

El sitio web ha sido optimizado bajo estándares de ingeniería de software frontend para garantizar un scroll estable a 60 FPS y una interactividad fluida en dispositivos móviles y de escritorio:

### 1. Reconciliación del DOM en el *Buffer de Pedidos* (Carrito)
En lugar de limpiar y reconstruir destructivamente todo el DOM del carrito (`innerHTML = ''`), implementamos un algoritmo de reconciliación ligero en Javascript plano:
- **Actualizaciones Atómicas:** Solo se actualiza la cantidad (`.cart-item-qty`) del nodo modificado mediante selectores de atributos (`data-id`).
- **Control de Ciclo de Vida de Animación:** Las adiciones, actualizaciones y purgas de memoria ejecutan animaciones fluidas (`slideIn`, `slideOut`, `pulseBump`) en la GPU antes de alterar el estado.
- **Purgado Simultáneo:** Limpiar el buffer (`make clean`) ejecuta una transición paralela de salida en todos los nodos del buffer en memoria.

### 2. Aceleración por Hardware y Capas de Pintura
- **Renderizado sin Lag:** Se removieron los costosos efectos de `backdrop-filter: blur` en la lista de tarjetas del menú principal. Esto previene que la GPU tenga que recalcular y redibujar filtros de desenfoque dinámicos sobre las partículas animadas en cada píxel de scroll.
- **will-change:** Se aplicaron directivas de composición de hardware (`will-change: transform, opacity`) en tarjetas y contadores para forzar su promoción a su propia capa de composición de GPU.
- **Inercia y Suavizado:** Soporte nativo para scroll inercial en dispositivos táctiles (`-webkit-overflow-scrolling: touch`) y desplazamiento programático suave.

---

## Catálogo de Módulos (Menú)

| Platillo | Concepto Técnico | Complejidad de Sabor |
| :--- | :--- | :--- |
| **Algoritmos al Ajillo** | Búsqueda Binaria recursiva aplicada a las porciones. | $O(\log N)$ |
| **Estructuras en Salsa** | Nodos balanceados al estilo de un árbol AVL con cobertura de salsa. | $O(\log N)$ |
| **Query de Mariscos** | `INNER JOIN` de camarones y pulpo indexado para entrega ultra-rápida. | Optimizado |
| **Pasta Firewall** | Un proxy inverso de espagueti pomodoro que filtra el apetito. | Seguridad Alta |
| **Tacos de Ensamblador** | Pastor puro de bajo nivel directo al hardware de tu estómago. | Bare Metal |
| **Cloud Burger** | Hamburguesa altamente disponible y escalable con tocino distribuido. | Cloud-Native |
| **Ramen Recursivo** | Fideos en bucle infinito que llaman a sí mismos hasta el caso base. | Stack Safe |

---

##  Comandos y Scripts

Todos los comandos se ejecutan desde la raíz del espacio de trabajo. Si tu entorno local requiere exportar las rutas de Homebrew para Node/npm, utiliza:

```bash
export PATH="/var/home/linuxbrew/.linuxbrew/bin:$PATH"
```

### Desarrollo Local
Arranca el servidor de desarrollo en caliente:
```bash
npm run dev
```

### Compilación (Production Build)
Compila el menú estático optimizado para despliegue:
```bash
npm run build
```

### Vista Previa
Previsualiza localmente el build de producción antes de desplegarlo:
```bash
npm run preview
```

---

## Tecnologías Utilizadas

- **Astro v6.0** (Generación de sitios estáticos ultrarrápidos)
- **tsParticles Slim** (Fondo dinámico interactivo con partículas reactivas en el hover)
- **Vanilla CSS3** (Tokens de diseño personalizados, animaciones cúbicas de Bezier y diseño responsivo adaptado)

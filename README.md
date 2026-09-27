# Empapados · propuesta de carta digital

Web adaptable a celular con menú, variantes, carrito y pedido por WhatsApp. Las 28 entradas iniciales proceden de las cartas `IMG_7148.JPG` y `IMG_7149.JPG`. Las fotos por producto están vacías: sus tarjetas muestran el nombre, descripción, opciones y precio sin marco de imagen. Cuando la columna `foto` recibe una URL pública directa, aparece el marco y se muestra la foto sin nuevo despliegue; si la URL falla, el marco desaparece. La portada utiliza una ilustración fotográfica original sin texto ni precio y la sección de boxes utiliza una imagen compartida por el usuario.

## Ejecutar y publicar

Node.js 20 o superior. `npm run dev` abre `http://localhost:4173`. `npm run build` crea `dist`. La configuración de Vercel apunta a `dist`; publica el contenido de esta carpeta en GitHub.

## Antes de ofrecer la web como lista

El WhatsApp entregado está configurado en `src/config.js` como `56946566119`. El carrito abre WhatsApp con el pedido. El enlace CSV publicado de la **versión corregida de 28 filas** también está configurado. Si Google Sheets no responde, el sitio usa la copia incluida en `assets/catalog.json` y muestra un aviso.

El CSV debe tener columnas `id,categoria,nombre,opcion_1,precio_1,opcion_2,precio_2,foto,descripcion,stock,fuente`. El precio se introduce como número. `stock=sí` permite pedidos; `stock=no` o vacío marca agotado. El catálogo inicial está marcado como `sí` a partir de la carta compartida; confirma disponibilidad real antes de ofrecerlo como carta definitiva.

El CSV antiguo recibido tenía 46 filas y columnas `opcion,precio`. El CSV actualizado adjunto tiene 28 entradas con `opcion_1`, `precio_1`, `opcion_2`, `precio_2` y `stock=sí`, y coincide con el formato configurado.

Los precios y composiciones provienen de la carta compartida y requieren confirmación del local; las historias promocionales muestran algunas cantidades diferentes. Los productos sin foto no reciben una imagen de otro producto.

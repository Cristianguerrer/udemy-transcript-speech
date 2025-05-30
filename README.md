Udemy Transcript Speech

Extensión de Chrome que convierte automáticamente los subtítulos activos de los cursos de Udemy a voz, utilizando la API de texto a voz (TTS) del navegador.

🚀 Funcionalidades

- Detecta en tiempo real los subtítulos visibles del curso en Udemy.
- Reproduce automáticamente el contenido de los subtítulos mediante voz sintética.
- Botones para iniciar o detener la lectura con un clic.
- Solo funciona con la plataforma Udemy.

📦 Instalación

1. Clona este repositorio:

   git clone https://github.com/Cristianguerrer/udemy-transcript-speech.git

2. Abre Chrome y ve a chrome://extensions/
3. Activa el Modo desarrollador (Developer Mode).
4. Haz clic en "Cargar descomprimida" y selecciona la carpeta del repositorio.
5. Abre cualquier curso en Udemy y haz clic en el ícono de la extensión.

🧪 Uso

- Haz clic en el botón "Iniciar TTS" para comenzar la lectura automática.
- Usa "Detener TTS" para pausar la lectura.
- La extensión verifica subtítulos nuevos cada segundo para mantener la lectura sincronizada.

🛠️ Tecnologías utilizadas

- Manifest V3
- JavaScript (Chrome Extension APIs)
- Text-to-Speech API de Chrome
- DOM manipulation para extracción de subtítulos

📁 Estructura del proyecto

.
├── background.js       # Lógica central para lectura TTS
├── popup.html          # Interfaz de usuario
├── popup.js            # Lógica de control del popup
├── manifest.json       # Configuración de la extensión
├── icon.png            # Ícono de la extensión


🧾 Permisos requeridos

- "activeTab" – acceder a la pestaña activa
- "scripting" – inyectar scripts
- "tts" – utilizar el motor de texto a voz
- "host_permissions": https://www.udemy.com/*

📌 Consideraciones

- Se recomienda tener configurada la voz del sistema en el idioma del curso.
- Si Udemy cambia su estructura de HTML para subtítulos, puede ser necesario ajustar el código.

📄 Licencia

MIT License © Cristian Estupiñán (https://github.com/Cristianguerrer)
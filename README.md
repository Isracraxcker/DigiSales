# 🛒 DigiSales Platform

<div align="center">

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)

### 🚀 **Sistema de Ventas Inteligente | AICODIGI**

*Plataforma completa full-stack para gestión integral de ventas y comercio*

**Desarrollado por Andy Jaramillo** - Tecnólogo Full Stack

[![GitHub](https://img.shields.io/badge/⭐_Star_this_repo-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Isracraxcker/DigiSales)


</div>

---

## 🎯 Descripción del Proyecto

**DigiSales** es una plataforma completa de gestión comercial diseñada para revolucionar la forma en que los negocios manejan sus ventas. Combina tecnología moderna con una interfaz intuitiva para ofrecer una solución integral que abarca desde la gestión de inventario hasta la generación de reportes avanzados.

### ✨ Características Principales

<table align="center">
<tr>
<td align="center"><strong>🛒 Ventas Inteligentes</strong></td>
<td align="center"><strong>📦 Gestión de Inventario</strong></td>
<td align="center"><strong>👥 CRM Avanzado</strong></td>
<td align="center"><strong>📊 Reportes en Tiempo Real</strong></td>
</tr>
<tr>
<td>• Facturación rápida y precisa<br>• Múltiples métodos de pago<br>• Sistema de descuentos automático<br>• Procesamiento de devoluciones</td>
<td>• Control de stock en tiempo real<br>• Alertas de inventario bajo<br>• Gestión de códigos de barras<br>• Tracking de productos por SKU</td>
<td>• Base de datos completa de clientes<br>• Historial de compras detallado<br>• Gestión de créditos y abonos<br>• Segmentación de clientes</td>
<td>• Dashboard analítico interactivo<br>• Reportes exportables (PDF/Excel)<br>• Métricas de rendimiento<br>• Análisis de tendencias de venta</td>
</tr>
</table>

---

## 🏗️ Arquitectura y Stack Tecnológico

### **Frontend**
- 🎨 **Styled Components** - Diseño modular y responsivo  
- 🔄 **Zustand** - Gestión de estado eficiente
- 📊 **Chart.js & React-Chartjs-2** - Visualización de datos avanzada
- 🎯 **TypeScript** - Desarrollo type-safe

### **Backend & Base de Datos**
- 🛡️ **Supabase** - Backend-as-a-Service completo
- 🗄️ **PostgreSQL** - Base de datos relacional robusta
- 🔧 **Database Functions & Triggers** - Lógica de negocio automatizada
- 🔐 **Row Level Security (RLS)** - Seguridad a nivel de datos
- 🚀 **Real-time Subscriptions** - Actualizaciones en tiempo real

### **Infraestructura & DevOps**
- ☁️ **Vercel** - Despliegue y hosting optimizado
- 📈 **Vercel Analytics** - Métricas de rendimiento
- 🔄 **GitHub Actions** - CI/CD automatizado
- 🌐 **CDN Global** - Distribución de contenido optimizada

---

## 🚀 Instalación y Configuración

### 📋 Prerrequisitos

```bash
Node.js >= 18.0.0
npm >= 9.0.0 (o yarn >= 1.22.0)
Git >= 2.30.0
```

### 🔧 Configuración Step-by-Step

#### 1️⃣ **Clonar el Repositorio**

```bash
git clone https://github.com/Isracraxcker/DigiSales.git
cd DigiSales
```

#### 2️⃣ **Instalar Dependencias**

```bash
# Usando npm (recomendado)
npm install

# Alternativas
yarn install
pnpm install
```

#### 3️⃣ **Configuración de Variables de Entorno**

Crea un archivo `.env.local` en la raíz del proyecto:

```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=tu_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=tu_service_role_key

# Database
DATABASE_URL=tu_database_url

# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXTAUTH_SECRET=tu_secret_key
NEXTAUTH_URL=http://localhost:3000
```

#### 4️⃣ **Configurar Base de Datos**

```bash
# Ejecutar migraciones
npm run db:push

# Poblar con datos de ejemplo (opcional)
npm run db:seed
```

#### 5️⃣ **Iniciar el Servidor de Desarrollo**

```bash
npm run dev
```

🎉 **¡Listo!** La aplicación estará disponible en [http://localhost:3000](http://localhost:3000)

---

## 🛠️ Scripts Disponibles

| Comando | Descripción | Uso Recomendado |
|---------|-------------|-----------------|
| `npm run dev` | 🔥 Servidor de desarrollo con hot-reload | Desarrollo local |
| `npm run build` | 🏗️ Build optimizado para producción | Pre-despliegue |
| `npm run start` | 🚀 Servidor de producción | Testing de build |
| `npm run lint` | 🔍 Análisis de código con ESLint | Control de calidad |
| `npm run lint:fix` | 🔧 Corrección automática de linting | Limpieza de código |
| `npm run type-check` | 📝 Verificación de tipos TypeScript | Validación pre-commit |
| `npm run db:push` | 🗄️ Sincronizar esquema de base de datos | Cambios de BD |
| `npm run db:studio` | 👀 Abrir Prisma Studio | Visualización de datos |
| `npm run test` | 🧪 Ejecutar tests unitarios | Testing |
| `npm run test:e2e` | 🤖 Tests end-to-end con Playwright | Testing integral |

---

## 🌐 Despliegue en Producción

### **Despliegue en Vercel (Recomendado)**

1. **Conectar con GitHub**
   ```bash
   # Instalar Vercel CLI
   npm i -g vercel
   
   # Deploy
   vercel --prod
   ```

2. **Configurar Variables de Entorno**
   - Accede al dashboard de Vercel
   - Ve a Settings > Environment Variables
   - Agrega todas las variables de `.env.local`

3. **Configurar Dominio Personalizado** (Opcional)
   - En Vercel Dashboard > Domains
   - Agregar tu dominio personalizado

### **Otras Opciones de Despliegue**

<div align="center">

| Plataforma | Dificultad | Escalabilidad | Costo | Recomendado Para |
|------------|:----------:|:-------------:|:-----:|:----------------:|
| 🔺 **Vercel** | ⭐ Fácil | ⭐⭐⭐ Alta | 💰 Freemium | Startups, MVPs |
| ☁️ **AWS** | ⭐⭐⭐ Compleja | ⭐⭐⭐⭐ Muy Alta | 💰💰 Variable | Empresas grandes |
| 🌊 **Netlify** | ⭐⭐ Fácil | ⭐⭐ Media | 💰 Freemium | Proyectos pequeños |
| 🔥 **Railway** | ⭐⭐ Media | ⭐⭐⭐ Alta | 💰💰 Pay-as-go | Full-stack apps |

</div>

---

## 📱 Capturas de Pantalla

<div align="center">

### Login Principal
![Login](./src/assets/login.png)

### Gestión de Inventario
![Inventario](https://via.placeholder.com/800x400/059669/ffffff?text=Gestión+de+Inventario)

### Sistema de Ventas
![Ventas](https://via.placeholder.com/800x400/dc2626/ffffff?text=Sistema+de+Ventas)

</div>

---

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

---

## 🆘 Soporte y Contacto

¿Necesitas ayuda? Aquí tienes varias opciones:

- 📧 **Email:** andyisraeljaramillo@gmail.com
- 💼 **LinkedIn:** [Andy Jaramillo](https://linkedin.com/in/andyjaramillo)

---

## 👨‍💻 Sobre el Desarrollador

<div align="center">


### **Andy Jaramillo**
*Tecnólogo Full Stack | Especialista en React & Next.js*

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Isracraxcker)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/andyjaramillo)
[![Portfolio](https://img.shields.io/badge/Portfolio-FF5722?style=for-the-badge&logo=google-chrome&logoColor=white)](https://andy-jaramillo.vercel.app/)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:andyisraeljaramillo@gmail.com)

*"Transformando ideas en experiencias digitales excepcionales"*


</div>

---

## 📊 Estadísticas del Proyecto

<div align="center">

![GitHub stars](https://img.shields.io/github/stars/Isracraxcker/DigiSales?style=social)
![GitHub forks](https://img.shields.io/github/forks/Isracraxcker/DigiSales?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/Isracraxcker/DigiSales?style=social)

[![Star History Chart](https://api.star-history.com/svg?repos=Isracraxcker/DigiSales&type=Date)](https://star-history.com/#Isracraxcker/DigiSales&Date)

</div>

---


<div align="center">

### 🌟 **¡Gracias por usar DigiSales Platform!**

*Si este proyecto te resulta útil, no olvides darle una ⭐ en GitHub*

**¿Te gusta el proyecto?** Considera [☕ invitarme un café](https://buymeacoffee.com/andyisraela)

---

<sub>Hecho con ❤️, ☕ y mucho código por Andy Jaramillo | © 2025 DigiSales Platform</sub>

</div>
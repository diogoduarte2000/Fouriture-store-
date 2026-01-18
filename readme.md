![React](https://img.shields.io/badge/React-18.3-blue)
![Vite](https://img.shields.io/badge/Vite-5.1-646CFF)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Neon-4169E1)
![Netlify](https://img.shields.io/badge/Netlify-Deployed-00C7B7)

# Furniture Shop 🛋️

A modern e-commerce furniture store built with **React**, **Vite**, **Neon PostgreSQL**, and **Netlify Functions**.  
Features include user authentication, shopping cart, product filtering, and seamless checkout experience with a clean, minimalist design.

---

## ✨ Features

- **Complete Authentication System**: Secure login/register with bcrypt password hashing
- **Dynamic Shopping Cart**: Add, remove, update quantities with localStorage persistence
- **Advanced Product Filtering**: Filter by category, price range, and promotions
- **22+ Products Catalog**: Organized across 4 main categories (Decor, Office, Bedroom, Living Room)
- **Responsive Design**: Mobile-first approach with smooth animations
- **Serverless Backend**: Netlify Functions with Neon PostgreSQL integration
- **Order Tracking System**: Track your purchases in real-time

---

## 🎯 Live Demo

🚀 **[View Live Site](https://your-site.netlify.app)**

**Demo Credentials:**
- Email: `joao@example.com`
- Password: `123456`

---

## 🛠️ Tech Stack

| Frontend | Backend | Database | Deployment | Styling |
|----------|---------|----------|------------|---------|
| React 18 | Netlify Functions | Neon PostgreSQL | Netlify | Vanilla CSS |
| Vite | Node.js | | | |
| React Router | bcryptjs | | | |

---

## 📦 Installation

Clone the repository and run locally:

```bash
# Clone the repository
git clone https://github.com/seu-usuario/web-furniture-store.git
cd web-furniture-store

# Install dependencies
npm install

# Run development server
npm run dev

# Open browser at http://localhost:5173
```

---

## 🗄️ Database Setup

1. Create account at [Neon.tech](https://neon.tech)
2. Create new project
3. Execute `database-schema.sql` in SQL Editor
4. Copy connection string
5. Add to `.env`:

```env
DATABASE_URL=postgresql://user:pass@host/db?sslmode=require
```

---

## 🚀 Deployment

### Deploy to Netlify

1. Push code to GitHub
2. Connect repository on [Netlify](https://netlify.com)
3. Configure build settings:
   - Build command: `npm install && npm run build`
   - Publish directory: `dist`
   - Functions directory: `netlify/functions`
4. Add environment variable `DATABASE_URL`
5. Deploy!

---

## 📂 Project Structure

```
web-furniture-store/
├── src/
│   ├── components/      # Reusable components
│   ├── pages/          # Page components
│   ├── context/        # Auth & Cart context
│   ├── data/           # Product database
│   ├── hooks/          # Custom React hooks
│   └── styles/         # CSS files
├── netlify/
│   └── functions/      # Serverless API endpoints
├── public/             # Static assets
└── database-schema.sql # PostgreSQL schema
```

---

## 🎨 Features Showcase

### 🛒 Shopping Cart
- Real-time cart updates
- Quantity management
- Price calculation
- Modal cart view

### 🔐 Authentication
- Secure login/register
- Password hashing (bcrypt)
- Session persistence
- User profile management

### 🔍 Product Filtering
- Category filters
- Price range selection
- Sale/promotion toggle
- Sort by price/name

### 📱 Responsive Design
- Mobile-first approach
- Touch-friendly interface
- Smooth animations
- Modern UI/UX

---

## 🗺️ Roadmap

- [ ] Payment integration (Stripe/PayPal)
- [ ] Admin dashboard
- [ ] Product reviews system
- [ ] Wishlist functionality
- [ ] Email notifications
- [ ] Advanced analytics
- [ ] Multi-language support

---

## 👤 Author

**Diogo Coelho**

- Portfolio: [seu-portfolio.com](https://seu-portfolio.com)
- LinkedIn: [linkedin.com/in/seu-perfil](https://linkedin.com/in/seu-perfil)
- GitHub: [@seu-usuario](https://github.com/seu-usuario)

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- [Pexels](https://pexels.com) - Product images
- [Netlify](https://netlify.com) - Hosting & Serverless Functions
- [Neon](https://neon.tech) - PostgreSQL Database
- [Vite](https://vitejs.dev) - Build tool


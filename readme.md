# 🛋️ Furniture Shop

> Loja online moderna de móveis com autenticação, carrinho de compras e integração com PostgreSQL

[![Netlify Status](https://api.netlify.com/api/v1/badges/your-badge-id/deploy-status)](https://app.netlify.com/sites/your-site)

## ✨ Funcionalidades

- 🔐 **Autenticação Completa** - Login e registro com Neon PostgreSQL
- 🛒 **Carrinho Funcional** - Adicionar, remover e atualizar quantidades
- 📦 **22+ Produtos** - Organizados em 4 categorias
- 🔍 **Filtros Avançados** - Por categoria, preço e promoções
- 📱 **Design Responsivo** - Funciona perfeitamente em mobile
- ⚡ **Performance** - Otimizado e rápido
- 🎨 **UI Moderna** - Design minimalista e elegante

## 🚀 Demo

**[Ver Demo ao Vivo →](https://your-site.netlify.app)**

Credenciais de teste:
- Email: `joao@example.com`
- Password: `123456`

## 📸 Screenshots

### Homepage
![Homepage](https://via.placeholder.com/800x400?text=Homepage)

### Catálogo de Produtos
![Catálogo](https://via.placeholder.com/800x400?text=Catálogo)

### Carrinho
![Carrinho](https://via.placeholder.com/800x400?text=Carrinho)

## 🛠️ Tecnologias

### Frontend
- HTML5, CSS3, JavaScript (Vanilla)
- Design System minimalista
- Responsive Grid Layout
- LocalStorage para persistência

### Backend
- Netlify Functions (Serverless)
- Neon PostgreSQL (Database)
- bcryptjs (Password Hashing)
- Node.js

### Deploy & Hosting
- Netlify (Static Hosting + Functions)
- GitHub (Version Control)
- Neon (Database Hosting)

## 📦 Instalação

### Pré-requisitos
- Node.js 16+ instalado
- Conta no [Netlify](https://netlify.com)
- Conta no [Neon](https://neon.tech)
- Git instalado

### 1. Clonar Repositório
```bash
git clone https://github.com/seu-usuario/furniture-shop.git
cd furniture-shop
```

### 2. Instalar Dependências
```bash
npm install
```

### 3. Configurar Base de Dados

#### Criar Database no Neon
1. Criar conta em [neon.tech](https://neon.tech)
2. Criar novo projeto
3. Copiar connection string

#### Executar Schema
1. Abrir SQL Editor no Neon
2. Executar `database-schema.sql`
3. Verificar tabelas criadas

### 4. Configurar Variáveis de Ambiente

Criar `.env`:
```env
DATABASE_URL=postgresql://user:pass@ep-xxx.region.neon.tech/dbname?sslmode=require
```

### 5. Testar Localmente
```bash
netlify dev
```

Aceder a `http://localhost:8888`

### 6. Deploy para Netlify

#### Via CLI
```bash
netlify login
netlify init
netlify deploy --prod
```

#### Via GitHub
1. Push para GitHub
2. Conectar repositório no Netlify
3. Configurar `DATABASE_URL` nas variáveis de ambiente
4. Deploy automático

## 📁 Estrutura do Projeto

```
furniture-shop/
├── 📄 index.html              # Homepage
├── 📄 shop-all.html           # Catálogo completo
├── 📄 product.html            # Página de produto
├── 📄 login.html              # Login/Registro
├── 📄 decor.html              # Categoria Decoração
├── 📄 office.html             # Categoria Escritório
├── 📄 bedroom.html            # Categoria Quarto
├── 📄 living-room.html        # Categoria Sala
├── 📄 contact.html            # Contacto
├── 📄 story.html              # Nossa História
├── 📄 help.html               # Centro de Ajuda
├── 📄 track-order.html        # Tracking
│
├── 📁 css/
│   └── style.css              # Estilos principais
│
├── 📁 js/
│   ├── products.js            # Base de dados de produtos
│   ├── cart.js                # Sistema de carrinho
│   ├── auth.js                # Autenticação
│   └── main.js                # Funções gerais
│
├── 📁 netlify/
│   └── 📁 functions/
│       ├── auth-login.js      # API de login
│       └── auth-register.js   # API de registro
│
├── 📄 netlify.toml            # Config do Netlify
├── 📄 package.json            # Dependências
├── 📄 database-schema.sql     # Schema SQL
├── 📄 SETUP.md                # Guia detalhado
└── 📄 README.md               # Este ficheiro
```

## 🔧 Configuração

### Variáveis de Ambiente (Netlify)

| Variável | Descrição | Exemplo |
|----------|-----------|---------|
| `DATABASE_URL` | Connection string do Neon | `postgresql://user:pass@host/db` |

### netlify.toml
Configuração já incluída para:
- Redirecionamentos de API
- Headers de segurança
- Cache de assets estáticos

## 📚 API Endpoints

### POST `/api/auth-login`
Autenticação de usuário

**Request:**
```json
{
  "email": "user@example.com",
  "password": "senha123"
}
```

**Response:**
```json
{
  "id": 1,
  "name": "João Silva",
  "email": "user@example.com",
  "created_at": "2024-01-01T00:00:00Z"
}
```

### POST `/api/auth-register`
Registro de novo usuário

**Request:**
```json
{
  "name": "João Silva",
  "email": "user@example.com",
  "password": "senha123"
}
```

**Response:**
```json
{
  "id": 1,
  "name": "João Silva",
  "email": "user@example.com",
  "created_at": "2024-01-01T00:00:00Z"
}
```

## 🎯 Roadmap

- [x] Sistema de autenticação
- [x] Carrinho de compras
- [x] Catálogo de produtos
- [x] Filtros e busca
- [ ] Checkout e pagamentos
- [ ] Painel administrativo
- [ ] Email de confirmação
- [ ] Sistema de reviews
- [ ] Wishlist
- [ ] Histórico de compras

## 🤝 Contribuir

Contribuições são bem-vindas!

1. Fork o projeto
2. Criar branch (`git checkout -b feature/NovaFuncionalidade`)
3. Commit mudanças (`git commit -m 'Adicionar nova funcionalidade'`)
4. Push para branch (`git push origin feature/NovaFuncionalidade`)
5. Abrir Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Ver [LICENSE](LICENSE) para mais informações.

## 👥 Autor

**Furniture Shop Team**

## 🆘 Suporte

Encontrou um bug ou tem alguma sugestão?

- 📧 Email: support@furnitureshop.com
- 🐛 Issues: [GitHub Issues](https://github.com/seu-usuario/furniture-shop/issues)

## 🙏 Agradecimentos

- [Pexels](https://pexels.com) - Imagens dos produtos
- [Netlify](https://netlify.com) - Hosting e Functions
- [Neon](https://neon.tech) - PostgreSQL Database
- [Inter Font](https://fonts.google.com/specimen/Inter) - Typography

---

Feito com ❤️ em Portugal 🇵🇹
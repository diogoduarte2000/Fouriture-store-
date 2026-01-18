# 🛋️ Furniture Shop - Guia de Configuração

## 📋 Visão Geral

Site de e-commerce de móveis com:
- ✅ Autenticação de usuários (Login/Registro)
- ✅ Carrinho de compras funcional
- ✅ Sistema de produtos com filtros
- ✅ Integração com Neon PostgreSQL
- ✅ Deploy no Netlify

---

## 🚀 Setup Rápido

### 1. Estrutura de Pastas

```
furniture-shop/
├── index.html
├── shop-all.html
├── product.html
├── login.html
├── decor.html
├── office.html
├── bedroom.html
├── living-room.html
├── contact.html
├── story.html
├── help.html
├── track-order.html
├── css/
│   └── style.css
├── js/
│   ├── products.js
│   ├── cart.js
│   ├── auth.js
│   └── main.js
├── netlify/
│   └── functions/
│       ├── auth-login.js
│       └── auth-register.js
├── netlify.toml
├── package.json
└── database-schema.sql
```

---

## 🗄️ Configurar Neon PostgreSQL

### Passo 1: Criar Conta no Neon
1. Aceder a [neon.tech](https://neon.tech)
2. Criar conta gratuita
3. Criar novo projeto

### Passo 2: Executar Schema SQL
1. No dashboard do Neon, ir para "SQL Editor"
2. Copiar todo o conteúdo de `database-schema.sql`
3. Executar o script
4. Verificar se as tabelas foram criadas

### Passo 3: Obter Connection String
1. No dashboard do Neon, ir para "Connection Details"
2. Copiar a connection string (formato: `postgresql://user:pass@host/db`)
3. Guardar para configurar no Netlify

---

## 🌐 Deploy no Netlify

### Passo 1: Preparar Repositório
```bash
# Inicializar git
git init

# Adicionar ficheiros
git add .
git commit -m "Initial commit"

# Criar repositório no GitHub e push
git remote add origin <seu-repositorio>
git push -u origin main
```

### Passo 2: Conectar ao Netlify
1. Aceder a [netlify.com](https://netlify.com)
2. Clicar em "Add new site" > "Import an existing project"
3. Conectar ao GitHub e selecionar o repositório
4. Configurações de build:
   - Build command: `npm install`
   - Publish directory: `.`
   - Functions directory: `netlify/functions`

### Passo 3: Configurar Variáveis de Ambiente
1. No dashboard do Netlify, ir para "Site settings" > "Environment variables"
2. Adicionar:
   ```
   DATABASE_URL = postgresql://user:pass@host/db?sslmode=require
   ```
3. Usar a connection string do Neon copiada anteriormente

### Passo 4: Deploy
1. Clicar em "Deploy site"
2. Aguardar build e deploy
3. Testar o site no URL fornecido pelo Netlify

---

## 🧪 Testar Localmente

### Instalar Dependências
```bash
npm install
```

### Configurar Variáveis de Ambiente Locais
Criar ficheiro `.env`:
```
DATABASE_URL=postgresql://user:pass@host/db?sslmode=require
```

### Executar Servidor Local
```bash
netlify dev
```

Aceder a `http://localhost:8888`

---

## 👤 Testar Autenticação

### Modo Demo (sem backend)
- Email: `joao@example.com`
- Password: `123456`

### Criar Nova Conta
1. Ir para `/login.html`
2. Clicar em "REGISTAR"
3. Preencher formulário
4. Conta será criada no Neon PostgreSQL

---

## 🛒 Funcionalidades

### Carrinho de Compras
- Adicionar/remover produtos
- Atualizar quantidades
- Persistência em `localStorage`
- Modal com resumo

### Sistema de Autenticação
- Login com email/password
- Registro de novos usuários
- Hashing de passwords com bcrypt
- Sessão persistente

### Catálogo de Produtos
- 22+ produtos em 4 categorias
- Filtros por categoria, preço, promoções
- Ordenação por nome/preço
- Página de detalhes de produto
- Produtos relacionados

---

## 📱 Páginas do Site

| Página | Descrição |
|--------|-----------|
| `index.html` | Homepage com hero e destaques |
| `shop-all.html` | Catálogo completo com filtros |
| `product.html` | Detalhes do produto |
| `login.html` | Login e registro |
| `decor.html` | Categoria Decoração |
| `office.html` | Categoria Escritório |
| `bedroom.html` | Categoria Quarto |
| `living-room.html` | Categoria Sala |
| `contact.html` | Formulário de contacto |
| `story.html` | História da marca |
| `help.html` | Centro de ajuda |
| `track-order.html` | Acompanhar encomenda |

---

## 🔧 Resolução de Problemas

### Erro de Conexão com Base de Dados
- Verificar se `DATABASE_URL` está configurado
- Confirmar connection string do Neon
- Verificar se as tabelas foram criadas

### Funções Netlify Não Funcionam
- Verificar se `netlify.toml` está presente
- Confirmar estrutura de pastas `netlify/functions/`
- Ver logs no Netlify Dashboard

### Carrinho Não Persiste
- Verificar se `localStorage` está habilitado no navegador
- Limpar cache e testar novamente

---

## 📚 Próximos Passos

- [ ] Adicionar página de checkout
- [ ] Integrar pagamentos (Stripe/PayPal)
- [ ] Sistema de tracking de encomendas
- [ ] Painel administrativo
- [ ] Email de confirmação
- [ ] Reviews de produtos

---

## 🆘 Suporte

Para problemas ou questões:
1. Verificar logs do Netlify
2. Verificar console do navegador
3. Testar em modo local com `netlify dev`

---

## 📄 Licença

MIT License - uso livre para projetos pessoais e comerciais.
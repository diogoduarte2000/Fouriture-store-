# 🚀 Guia Rápido - Furniture Shop

## ⚡ Começar em 10 Minutos

### Passo 1: Criar Conta no Neon (2 min)
1. Ir para [neon.tech](https://neon.tech)
2. Clicar em "Sign Up" (pode usar GitHub)
3. Criar novo projeto chamado "furniture-shop"
4. Região: Escolher a mais próxima (Europe West para Portugal)

### Passo 2: Configurar Base de Dados (3 min)
1. No dashboard do Neon, clicar em "SQL Editor"
2. Copiar TODO o conteúdo do ficheiro `database-schema.sql`
3. Colar no editor e clicar em "Run"
4. Ver mensagem de sucesso
5. Ir para "Connection Details" e copiar a connection string

### Passo 3: Criar Repositório GitHub (2 min)
1. Ir para [github.com](https://github.com)
2. Clicar em "New Repository"
3. Nome: `furniture-shop`
4. Público ou Privado (à escolha)
5. NÃO adicionar README (já temos)
6. Criar repositório

### Passo 4: Upload dos Ficheiros (1 min)

**Via GitHub Web:**
1. No repositório criado, clicar em "uploading an existing file"
2. Arrastar TODOS os ficheiros do projeto
3. Commit changes

**Via Git CLI:**
```bash
cd pasta-do-projeto
git init
git add .
git commit -m "Initial commit - Furniture Shop"
git remote add origin https://github.com/seu-usuario/furniture-shop.git
git push -u origin main
```

### Passo 5: Deploy no Netlify (2 min)
1. Ir para [netlify.com](https://netlify.com)
2. Login (pode usar GitHub)
3. Clicar em "Add new site" → "Import an existing project"
4. Escolher "GitHub" e autorizar
5. Selecionar o repositório `furniture-shop`
6. Build settings:
   - Build command: `npm install`
   - Publish directory: `.`
   - Functions directory: `netlify/functions`
7. **IMPORTANTE:** Antes de deploy, clicar em "Show advanced"
8. Adicionar variável de ambiente:
   - Key: `DATABASE_URL`
   - Value: [COLAR A CONNECTION STRING DO NEON]
9. Clicar em "Deploy site"

### Passo 6: Aguardar Deploy ✅
- Deploy demora ~2 minutos
- Ver progresso em tempo real
- Quando terminar, aparece URL do site
- Clicar no URL para ver o site ao vivo!

---

## 🎉 Site Pronto!

Seu site está agora online com:
- ✅ Autenticação funcionando
- ✅ Carrinho de compras
- ✅ Base de dados PostgreSQL
- ✅ 22 produtos catalogados
- ✅ Design responsivo

---

## 🧪 Testar o Site

### 1. Testar Produtos
- Ir para "SHOP ALL"
- Clicar em qualquer produto
- Ver detalhes
- Adicionar ao carrinho
- Ver carrinho (ícone 🛒)

### 2. Testar Autenticação

**Login com conta demo:**
- Clicar em "LOGIN"
- Email: `joao@example.com`
- Password: `123456`
- Fazer login

**Criar conta nova:**
- Clicar em "REGISTAR"
- Preencher formulário
- Criar conta (vai para base de dados!)

### 3. Testar Filtros
- Ir para qualquer categoria (Decor, Office, etc)
- Usar filtros de preço
- Ordenar produtos
- Filtrar apenas promoções

---

## 📱 Estrutura de Ficheiros para Upload

Certifique-se de ter TODOS estes ficheiros:

```
✅ index.html
✅ shop-all.html
✅ product.html
✅ login.html
✅ decor.html
✅ office.html
✅ bedroom.html
✅ living-room.html
✅ contact.html
✅ story.html
✅ help.html
✅ track-order.html

📁 css/
  ✅ style.css

📁 js/
  ✅ products.js
  ✅ cart.js
  ✅ auth.js

📁 netlify/
  📁 functions/
    ✅ auth-login.js
    ✅ auth-register.js

✅ netlify.toml
✅ package.json
✅ database-schema.sql
✅ README.md
✅ SETUP.md
```

---

## 🔧 Troubleshooting Rápido

### Erro: "Database connection failed"
**Solução:**
1. Ir para Netlify Dashboard
2. Site settings → Environment variables
3. Verificar se `DATABASE_URL` está correto
4. Deve começar com `postgresql://`
5. Deve ter `?sslmode=require` no final
6. Redesploy o site

### Erro: "Function not found"
**Solução:**
1. Verificar se pasta `netlify/functions/` existe
2. Verificar se ficheiros `.js` estão dentro
3. Verificar se `netlify.toml` foi enviado
4. Redesploy o site

### Carrinho não funciona
**Solução:**
1. Limpar cache do navegador
2. Verificar console (F12) para erros
3. Testar em modo incógnito

### Login não funciona
**Solução:**
1. Verificar se usou email: `joao@example.com`
2. Verificar se usou password: `123456`
3. Ver console (F12) para erros
4. Verificar se `DATABASE_URL` está configurado

---

## 🎨 Personalização

### Mudar Cores
Editar `css/style.css`:
```css
/* Cor principal */
background: #111; /* Mudar para sua cor */

/* Cor de fundo hero */
background: #e2efe9; /* Mudar para sua cor */
```

### Adicionar Produtos
Editar `js/products.js`:
```javascript
{
    id: 23,
    name: "Seu Produto",
    price: 99.99,
    category: "Living Room",
    image: "URL_DA_IMAGEM",
    description: "Descrição do produto",
    inStock: true,
    sale: false
}
```

### Mudar Nome da Loja
Procurar e substituir "FURNITURE SHOP" em todos os ficheiros HTML.

---

## 📊 Monitorizaçao

### Ver Logs do Netlify
1. Netlify Dashboard
2. Seu site → Functions
3. Ver logs em tempo real

### Ver Base de Dados
1. Neon Dashboard
2. SQL Editor
3. Executar queries:
```sql
-- Ver todos os usuários
SELECT * FROM users;

-- Ver todas as encomendas
SELECT * FROM orders;
```

---

## 🔐 Segurança

### ✅ O que está protegido:
- Passwords com bcrypt (hash seguro)
- HTTPS automático (Netlify)
- SQL injection protegido (parametrized queries)
- XSS protegido (headers de segurança)

### ⚠️ Para produção adicionar:
- Rate limiting nas APIs
- Email verification
- 2FA (two-factor authentication)
- CAPTCHA no registro

---

## 📈 Próximos Passos

### Agora que está online:
1. ✅ Testar todas as funcionalidades
2. ✅ Personalizar cores e textos
3. ✅ Adicionar seus próprios produtos
4. ✅ Partilhar com amigos/clientes

### Melhorias futuras:
- Adicionar checkout real (Stripe/PayPal)
- Sistema de tracking de encomendas
- Email de confirmação
- Painel administrativo
- Analytics (Google Analytics)

---

## 🎯 Checklist Final

Antes de considerar completo:

- [ ] Site carrega sem erros
- [ ] Consegue fazer login
- [ ] Carrinho funciona
- [ ] Produtos aparecem todos
- [ ] Filtros funcionam
- [ ] Design responsivo (testar no telemóvel)
- [ ] URLs personalizados (opcional: configurar domínio próprio)

---

## 🆘 Precisa de Ajuda?

### Recursos:
- 📖 [Documentação Netlify](https://docs.netlify.com)
- 📖 [Documentação Neon](https://neon.tech/docs)
- 💬 [Stack Overflow](https://stackoverflow.com)

### Verificações comuns:
1. Connection string tem `?sslmode=require`?
2. Todos os ficheiros foram enviados?
3. `netlify.toml` está na raiz do projeto?
4. Variável `DATABASE_URL` está configurada?
5. Schema SQL foi executado no Neon?

---

## ✨ Parabéns!

Você agora tem uma loja online completa e funcional! 🎉

- 🌐 Online 24/7
- 🔐 Segura
- ⚡ Rápida
- 📱 Responsiva
- 💾 Com base de dados real

**URL do seu site:** https://[seu-site].netlify.app

Partilhe com o mundo! 🚀
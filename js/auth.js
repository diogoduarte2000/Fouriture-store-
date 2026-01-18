// auth.js - Sistema de autenticação com Neon PostgreSQL

class AuthSystem {
    constructor() {
        this.currentUser = this.loadUser();
        this.updateAuthUI();
        
        // URL da API do Netlify Functions (será configurado no deploy)
        this.apiUrl = '/.netlify/functions';
    }

    // Carregar usuário do localStorage
    loadUser() {
        const saved = localStorage.getItem('furnitureUser');
        return saved ? JSON.parse(saved) : null;
    }

    // Salvar usuário no localStorage
    saveUser(user) {
        localStorage.setItem('furnitureUser', JSON.stringify(user));
        this.currentUser = user;
        this.updateAuthUI();
    }

    // Remover usuário
    clearUser() {
        localStorage.removeItem('furnitureUser');
        this.currentUser = null;
        this.updateAuthUI();
    }

    // Verificar se está logado
    isLoggedIn() {
        return this.currentUser !== null;
    }

    // Atualizar UI de autenticação
    updateAuthUI() {
        const loginBtn = document.getElementById('loginBtn');
        if (loginBtn) {
            if (this.isLoggedIn()) {
                loginBtn.textContent = this.currentUser.name.split(' ')[0].toUpperCase();
                loginBtn.href = '#';
                loginBtn.onclick = (e) => {
                    e.preventDefault();
                    this.showUserMenu();
                };
            } else {
                loginBtn.textContent = 'LOGIN';
                loginBtn.href = 'login.html';
                loginBtn.onclick = null;
            }
        }
    }

    // Mostrar menu do usuário
    showUserMenu() {
        const menu = document.createElement('div');
        menu.className = 'user-menu';
        menu.innerHTML = `
            <div class="user-menu-content">
                <p><strong>${this.currentUser.name}</strong></p>
                <p>${this.currentUser.email}</p>
                <hr>
                <a href="orders.html">Minhas Encomendas</a>
                <a href="#" onclick="auth.logout(); return false;">Sair</a>
            </div>
        `;

        // Remover menu anterior se existir
        const oldMenu = document.querySelector('.user-menu');
        if (oldMenu) oldMenu.remove();

        document.body.appendChild(menu);
        setTimeout(() => menu.classList.add('show'), 10);

        // Fechar ao clicar fora
        setTimeout(() => {
            document.addEventListener('click', function closeMenu(e) {
                if (!menu.contains(e.target) && e.target.id !== 'loginBtn') {
                    menu.classList.remove('show');
                    setTimeout(() => menu.remove(), 300);
                    document.removeEventListener('click', closeMenu);
                }
            });
        }, 100);
    }

    // Login
    async login(email, password) {
        try {
            // Em produção, isto fará chamada à API do Netlify Functions
            // que se conecta ao Neon PostgreSQL
            const response = await fetch(`${this.apiUrl}/auth-login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            if (!response.ok) {
                throw new Error('Email ou palavra-passe incorretos');
            }

            const user = await response.json();
            this.saveUser(user);
            return { success: true };

        } catch (error) {
            // Modo demo - usar autenticação local
            return this.loginDemo(email, password);
        }
    }

    // Login demo (enquanto não houver backend)
    loginDemo(email, password) {
        // Usuário demo
        const demoUsers = [
            { id: 1, name: 'João Silva', email: 'joao@example.com', password: '123456' },
            { id: 2, name: 'Maria Santos', email: 'maria@example.com', password: '123456' }
        ];

        const user = demoUsers.find(u => u.email === email && u.password === password);
        
        if (user) {
            const { password, ...userData } = user;
            this.saveUser(userData);
            return { success: true };
        }

        return { success: false, error: 'Email ou palavra-passe incorretos' };
    }

    // Registro
    async register(name, email, password) {
        try {
            const response = await fetch(`${this.apiUrl}/auth-register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, password })
            });

            if (!response.ok) {
                throw new Error('Erro ao criar conta');
            }

            const user = await response.json();
            this.saveUser(user);
            return { success: true };

        } catch (error) {
            // Modo demo
            return this.registerDemo(name, email, password);
        }
    }

    // Registro demo
    registerDemo(name, email, password) {
        // Verificar se email já existe no localStorage
        const users = JSON.parse(localStorage.getItem('demoUsers') || '[]');
        
        if (users.find(u => u.email === email)) {
            return { success: false, error: 'Email já registrado' };
        }

        const newUser = {
            id: Date.now(),
            name,
            email
        };

        users.push({ ...newUser, password });
        localStorage.setItem('demoUsers', JSON.stringify(users));
        
        this.saveUser(newUser);
        return { success: true };
    }

    // Logout
    logout() {
        this.clearUser();
        window.location.href = 'index.html';
    }

    // Obter usuário atual
    getCurrentUser() {
        return this.currentUser;
    }
}

// Inicializar sistema de autenticação
const auth = new AuthSystem();
// netlify/functions/auth-login.js
// Função para autenticação com Neon PostgreSQL

const { Pool } = require('pg');
const bcrypt = require('bcryptjs');

// Configurar conexão com Neon
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

exports.handler = async (event, context) => {
  // Apenas aceitar POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const { email, password } = JSON.parse(event.body);

    // Validar input
    if (!email || !password) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Email e password são obrigatórios' })
      };
    }

    // Buscar usuário
    const result = await pool.query(
      'SELECT * FROM users WHERE email = $1',
      [email.toLowerCase()]
    );

    if (result.rows.length === 0) {
      return {
        statusCode: 401,
        body: JSON.stringify({ error: 'Email ou palavra-passe incorretos' })
      };
    }

    const user = result.rows[0];

    // Verificar password
    const validPassword = await bcrypt.compare(password, user.password_hash);

    if (!validPassword) {
      return {
        statusCode: 401,
        body: JSON.stringify({ error: 'Email ou palavra-passe incorretos' })
      };
    }

    // Retornar dados do usuário (sem password)
    return {
      statusCode: 200,
      body: JSON.stringify({
        id: user.id,
        name: user.name,
        email: user.email,
        created_at: user.created_at
      })
    };

  } catch (error) {
    console.error('Login error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Erro interno do servidor' })
    };
  }
};
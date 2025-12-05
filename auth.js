// -----------------------------
// SISTEMA DE LOGIN SEGURO
// -----------------------------

// Hash da senha padrão (admin123)
const SENHA_HASH_PADRAO =
    "6eea9b7ef19179a06954edd0f6c05ceb706d3f0d6a4d2a4eebf1a1e940a7f8f2";

// Salvar hash da senha caso ainda não exista
if (!localStorage.getItem("admin_senha_hash")) {
    localStorage.setItem("admin_senha_hash", SENHA_HASH_PADRAO);
}

// Criar hash SHA256
async function gerarHash(texto) {
    const encoder = new TextEncoder();
    const data = encoder.encode(texto);
    const hash = await crypto.subtle.digest("SHA-256", data);
    
    return Array.from(new Uint8Array(hash))
        .map(b => b.toString(16).padStart(2, "0"))
        .join("");
}

// Fazer login
async function fazerLogin(senhaDigitada) {
    const hashDigitada = await gerarHash(senhaDigitada);
    const hashSalva = localStorage.getItem("admin_senha_hash");

    if (hashDigitada === hashSalva) {
        localStorage.setItem("admin_logado", "sim");
        window.location.href = "admin.html";
    } else {
        alert("Senha incorreta!");
    }
}

// Verificar acesso
function verificarLogin() {
    if (localStorage.getItem("admin_logado") !== "sim") {
        window.location.href = "login.html";
    }
}

// Logout
function sair() {
    localStorage.removeItem("admin_logado");
    window.location.href = "login.html";
}

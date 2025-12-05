// ------------------------------
// BANCO DE DADOS CENTRAL
// ------------------------------

function getDB() {
    return JSON.parse(localStorage.getItem("assist_db")) || {
        tabela: [],
        promocoes: "💥 PROMOÇÕES DO DIA • Nenhuma promoção cadastrada •",
    };
}

function saveDB(db) {
    localStorage.setItem("assist_db", JSON.stringify(db));
}

// ------------------------------
// TABELA
// ------------------------------

function addLinha(cliente, status, previsao) {
    const db = getDB();
    db.tabela.push({ cliente, status, previsao });
    saveDB(db);
}

function deleteLinha(index) {
    const db = getDB();
    db.tabela.splice(index, 1);
    saveDB(db);
}

function resetTabela() {
    const db = getDB();
    db.tabela = [];
    saveDB(db);
}

function getTabela() {
    return getDB().tabela;
}

// ------------------------------
// PROMOÇÕES
// ------------------------------

function setPromocoes(texto) {
    const db = getDB();
    db.promocoes = texto;
    saveDB(db);
}

function getPromocoes() {
    return getDB().promocoes;
}

// Elementos DOM
const passwordInput = document.getElementById('password');
const togglePasswordBtn = document.getElementById('togglePassword');
const encryptBtn = document.getElementById('encryptBtn');
const clearBtn = document.getElementById('clearBtn');
const encryptedOutput = document.getElementById('encryptedOutput');
const decryptionKey = document.getElementById('decryptionKey');
const decryptKeyInput = document.getElementById('decryptKey');
const decryptBtn = document.getElementById('decryptBtn');
const decryptedOutput = document.getElementById('decryptedOutput');
const copyEncryptedBtn = document.getElementById('copyEncryptedBtn');
const copyKeyBtn = document.getElementById('copyKeyBtn');
const copyDecryptedBtn = document.getElementById('copyDecryptedBtn');

// Variáveis para armazenar dados
let currentEncryptedPassword = '';
let currentDecryptionKey = '';

// ==================== FUNÇÕES AUXILIARES ====================

// Gerar chave aleatória
function generateKey() {
    return CryptoJS.lib.WordArray.random(16).toString();
}

// Criptografar senha
function encryptPassword(password, key) {
    return CryptoJS.AES.encrypt(password, key).toString();
}

// Descriptografar senha
function decryptPassword(encrypted, key) {
    try {
        const decrypted = CryptoJS.AES.decrypt(encrypted, key);
        const decryptedStr = decrypted.toString(CryptoJS.enc.Utf8);
        
        if (!decryptedStr) {
            throw new Error('Chave incorreta ou dados corrompidos');
        }
        return decryptedStr;
    } catch (error) {
        throw new Error('Erro ao descriptografar. Verifique se a chave está correta.');
    }
}

// Animar elemento
function animateElement(element) {
    element.classList.remove('success');
    void element.offsetWidth; // Trigger reflow
    element.classList.add('success');
}

// Mostrar notificação
function showNotification(message, type = 'success') {
    // Criar elemento de notificação
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        background: ${type === 'success' ? '#4CAF50' : '#f44336'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 1000;
        animation: slideInRight 0.3s ease;
        font-weight: 500;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideInRight 0.3s ease reverse';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Adicionar animação CSS se não existir
if (!document.querySelector('style[data-animation]')) {
    const style = document.createElement('style');
    style.setAttribute('data-animation', 'true');
    style.textContent = `
        @keyframes slideInRight {
            from {
                opacity: 0;
                transform: translateX(400px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
    `;
    document.head.appendChild(style);
}

// ==================== EVENT LISTENERS ====================

// Toggle entre mostrar/esconder senha
togglePasswordBtn.addEventListener('click', () => {
    const isPassword = passwordInput.type === 'password';
    passwordInput.type = isPassword ? 'text' : 'password';
    togglePasswordBtn.textContent = isPassword ? '👁️‍🗨️ Esconder' : '👁️ Mostrar';
});

// Criptografar
encryptBtn.addEventListener('click', () => {
    const password = passwordInput.value;
    
    if (!password) {
        showNotification('⚠️ Digite uma senha primeiro!', 'error');
        passwordInput.focus();
        return;
    }
    
    try {
        // Gerar chave
        currentDecryptionKey = generateKey();
        
        // Criptografar
        currentEncryptedPassword = encryptPassword(password, currentDecryptionKey);
        
        // Atualizar interface
        encryptedOutput.textContent = currentEncryptedPassword;
        decryptionKey.textContent = currentDecryptionKey;
        decryptedOutput.textContent = 'Nenhuma senha descriptografada ainda...';
        decryptKeyInput.value = '';
        
        // Mostrar botões de copiar
        copyEncryptedBtn.style.display = 'block';
        copyKeyBtn.style.display = 'block';
        copyDecryptedBtn.style.display = 'none';
        
        // Animar
        animateElement(encryptedOutput);
        animateElement(decryptionKey);
        
        showNotification('✅ Senha criptografada com sucesso!');
    } catch (error) {
        showNotification('❌ Erro ao criptografar: ' + error.message, 'error');
    }
});

// Limpar tudo
clearBtn.addEventListener('click', () => {
    passwordInput.value = '';
    decryptKeyInput.value = '';
    encryptedOutput.textContent = 'Nenhuma senha criptografada ainda...';
    decryptionKey.textContent = 'Será gerada automaticamente...';
    decryptedOutput.textContent = 'Nenhuma senha descriptografada ainda...';
    
    copyEncryptedBtn.style.display = 'none';
    copyKeyBtn.style.display = 'none';
    copyDecryptedBtn.style.display = 'none';
    
    currentEncryptedPassword = '';
    currentDecryptionKey = '';
    passwordInput.focus();
    
    showNotification('🗑️ Campos limpos!');
});

// Descriptografar
decryptBtn.addEventListener('click', () => {
    const encrypted = currentEncryptedPassword;
    const key = decryptKeyInput.value;
    
    if (!encrypted || encrypted === 'Nenhuma senha criptografada ainda...') {
        showNotification('⚠️ Criptografe uma senha primeiro!', 'error');
        return;
    }
    
    if (!key) {
        showNotification('⚠️ Cole a chave de descriptografia!', 'error');
        decryptKeyInput.focus();
        return;
    }
    
    try {
        const decrypted = decryptPassword(encrypted, key);
        decryptedOutput.textContent = decrypted;
        animateElement(decryptedOutput);
        copyDecryptedBtn.style.display = 'block';
        showNotification('✅ Senha descriptografada com sucesso!');
    } catch (error) {
        decryptedOutput.textContent = 'Erro: ' + error.message;
        copyDecryptedBtn.style.display = 'none';
        showNotification('❌ ' + error.message, 'error');
    }
});

// Copiar senha criptografada
copyEncryptedBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(currentEncryptedPassword).then(() => {
        showNotification('📋 Senha criptografada copiada!');
    });
});

// Copiar chave
copyKeyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(currentDecryptionKey).then(() => {
        showNotification('📋 Chave copiada!');
    });
});

// Copiar senha descriptografada
copyDecryptedBtn.addEventListener('click', () => {
    const decryptedText = decryptedOutput.textContent;
    if (decryptedText && !decryptedText.includes('Erro') && !decryptedText.includes('Nenhuma')) {
        navigator.clipboard.writeText(decryptedText).then(() => {
            showNotification('📋 Senha copiada!');
        });
    }
});

// Enter para criptografar
passwordInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        encryptBtn.click();
    }
});

// Enter para descriptografar na chave
decryptKeyInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        decryptBtn.click();
    }
});

// Foco inicial
document.addEventListener('DOMContentLoaded', () => {
    passwordInput.focus();
});

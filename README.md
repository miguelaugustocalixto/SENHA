# 🔐 Criptografia de Senha

Um site interativo para criptografar e descriptografar senhas com segurança, desenvolvido em HTML, CSS e JavaScript.

## 📋 Funcionalidades

- ✅ **Criptografia AES**: Utiliza o algoritmo AES (Advanced Encryption Standard) via CryptoJS
- 🔑 **Geração Automática de Chaves**: Cria uma chave única para cada criptografia
- 🔓 **Descriptografia**: Permite recuperar a senha original usando a chave
- 👁️ **Toggle de Visibilidade**: Mostra/esconde a senha enquanto digita
- 📋 **Botões de Copiar**: Copia facilmente a senha criptografada e a chave
- 📚 **Explicações Educacionais**: Seção completa sobre criptografia
- 📱 **Design Responsivo**: Funciona perfeitamente em desktop, tablet e celular
- 🎨 **Interface Moderna**: Design com gradientes e animações

## 🚀 Como Usar

### Passo 1: Digitar a Senha
1. Digite a senha que deseja criptografar no campo "Digite sua senha"
2. Clique no botão 👁️ para visualizar a senha se desejar

### Passo 2: Criptografar
1. Clique no botão **🔒 Criptografar**
2. A senha será criptografada automaticamente
3. Uma chave será gerada e exibida

### Passo 3: Copiar Dados
- Use os botões **📋 Copiar** para copiar:
  - A senha criptografada
  - A chave de descriptografia

### Passo 4: Descriptografar (Depois)
1. Cole a chave no campo "Cole a chave aqui para descriptografar"
2. Clique no botão **🔓 Descriptografar**
3. A senha original será exibida

## 🔐 Como Funciona a Criptografia

### Algoritmo Utilizado: **AES (Advanced Encryption Standard)**

- **Padrão Internacional**: Aprovado pelo NIST
- **Tamanho de Chave**: 128/192/256 bits
- **Segurança**: Um dos algoritmos mais seguros disponíveis
- **Aplicação**: Usado por governos e grandes corporações

### Processo de Criptografia

```
Senha Original + Chave → [Algoritmo AES] → Senha Criptografada
```

### Exemplo

```
Entrada: "MinhaS3nh@Forte"
Chave: "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6"
Saída: "U2FsdGVkX1+jK2h5pL8qM9nN2oO3pQ4r5sT6uV7wX8yZ9aA0bB1cC2dD3e..."
```

## 🛡️ Segurança

### Pontos Importantes

⚠️ **Este site é para fins educacionais**

- ✅ Dados processados **APENAS no seu navegador**
- ✅ Nada é enviado para servidores
- ✅ Nenhum dado é armazenado
- ⚠️ Para dados realmente sensíveis, use gestores de senha profissionais certificados

### Boas Práticas

1. **Use senhas fortes**: Combine letras, números e símbolos
2. **Guarde a chave com segurança**: Sem ela, não conseguirá recuperar a senha
3. **Não compartilhe chaves**: Qualquer pessoa com a chave pode descriptografar
4. **Use em conexão HTTPS**: Se hospedar online, sempre use HTTPS

## 🛠️ Tecnologias

- **HTML5**: Estrutura semântica
- **CSS3**: Estilização com gradientes e animações
- **JavaScript**: Lógica interativa
- **CryptoJS**: Biblioteca de criptografia
  - URL: https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js

## 📦 Dependências

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js"></script>
```

A biblioteca CryptoJS é carregada via CDN, não requer instalação local.

## 📁 Estrutura do Projeto

```
SENHA/
├── index.html      # Página principal
├── styles.css      # Estilização
├── script.js       # Lógica JavaScript
└── README.md       # Documentação
```

## 💻 Como Executar Localmente

### Opção 1: Abrir Diretamente no Navegador
1. Clone ou baixe o repositório
2. Abra o arquivo `index.html` em seu navegador
3. Pronto! O site funcionará localmente

### Opção 2: Usar um Servidor Local (Recomendado)

**Com Python 3:**
```bash
python -m http.server 8000
```

**Com Python 2:**
```bash
python -m SimpleHTTPServer 8000
```

**Com Node.js (http-server):**
```bash
npm install -g http-server
http-server
```

**Com Live Server (VS Code):**
1. Instale a extensão "Live Server"
2. Clique com botão direito em `index.html`
3. Selecione "Open with Live Server"

Acesse: `http://localhost:8000`

## 🎓 Conceitos Educacionais

### O que é Criptografia Simétrica?

É quando a mesma chave é usada tanto para criptografar quanto para descriptografar.

```
Criptografia Simétrica: Uma Chave
Remetente → [Chave: ABC123] → Mensagem Criptografada → [Chave: ABC123] → Destinatário
```

### Por que usar AES?

- ✅ Altamente seguro
- ✅ Rápido
- ✅ Padrão internacional
- ✅ Testado por especialistas mundiais

## 📊 Comparação de Algoritmos

| Algoritmo | Segurança | Velocidade | Uso |
|-----------|-----------|-----------|-----|
| DES       | ❌ Obsoleto | ⚡ Rápido | ❌ Evitar |
| 3DES      | ⚠️ Aceitável | ⚡ Médio | ⚠️ Legado |
| AES       | ✅ Excelente | ⚡⚡ Muito Rápido | ✅ Padrão |
| RSA       | ✅ Excelente | 🐢 Lento | ✅ Chaves Públicas |

## 🐛 Troubleshooting

### A página não carrega
- Verifique a conexão com a internet (CryptoJS precisa do CDN)
- Tente limpar o cache do navegador (Ctrl + Shift + Delete)

### Erro ao descriptografar
- ❌ Verifique se a chave está correta
- ❌ Certifique-se de que não há espaços em branco adicionados
- ❌ Use o botão "Copiar" para evitar erros de digitação

### Senha perdida
- ⚠️ Se perdeu a chave, a senha **não pode** ser recuperada
- Sempre guarde a chave em um local seguro

## 🎯 Exemplos de Uso

### Exemplo 1: Criptografar uma Nota Pessoal
```
1. Digite: "Lembrar de pagar conta de luz dia 15"
2. Criptografe
3. Compartilhe a mensagem criptografada
4. Guarde a chave em local seguro
5. Só você consegue ler com a chave correta
```

### Exemplo 2: Aprender sobre Segurança
```
1. Experimente criptografar textos diferentes
2. Note como a mesma senha gera resultados diferentes
3. Entenda por que guardare a chave é crucial
4. Aprenda sobre segurança digital
```

## 📚 Recursos Adicionais

### Sobre Criptografia
- [CryptoJS Documentation](https://cryptojs.gitbook.io/docs/)
- [NIST Standards](https://www.nist.gov/)
- [AES Encryption](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard)

### Segurança Digital
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Cybersecurity Basics](https://www.cisecurity.org/)

## 📝 Licença

Projeto educacional - Livre para usar e modificar

## 👨‍💻 Desenvolvedor

Criado por: **Miguel Augusto Calixto**

Repositório: https://github.com/miguelaugustocalixto/SENHA

## 🤝 Contribuições

Sugestões e melhorias são bem-vindas! 

## ⚖️ Aviso Legal

⚠️ **Este é um projeto educacional**

- Não é adequado para proteger dados altamente confidenciais
- Use para fins de aprendizado e demonstração
- Para dados sensíveis em produção, use soluções profissionais certificadas
- O autor não se responsabiliza pelo uso indevido

---

**Aprenda, Pratique e Divirta-se com Criptografia! 🔐**

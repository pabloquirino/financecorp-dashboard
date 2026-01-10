# FinanceCorp Dashboard

Dashboard corporativo desenvolvido com Angular, focado em arquitetura moderna, controle de acesso por perfil e boas práticas de mercado.

O projeto simula um sistema interno de empresa, com autenticação, autorização por roles e organização escalável de código.

---

## 🚀 Tecnologias utilizadas

- Angular (Standalone Components)
- Angular Signals
- RxJS
- Angular Material
- Route Guards (AuthGuard e RoleGuard)
- Jasmine + Karma (Testes unitários)

---

## 🔐 Autenticação e Autorização

- Serviço de autenticação mockado
- Gerenciamento de estado global com `AuthStore` usando Signals
- Persistência de sessão via `localStorage`
- Proteção de rotas com `AuthGuard`
- Controle de acesso por perfil (ADMIN / USER) com `RoleGuard`
- Renderização condicional de menus baseada no role do usuário

---

## 🧱 Arquitetura do Projeto

<img width="189" height="314" alt="arquitetura" src="https://github.com/user-attachments/assets/582e2556-cbbf-44b7-94a0-6f05bc324ac9" />

### Principais decisões:
- Separação clara entre **core**, **features** e **shared**
- Uso de **guards funcionais**
- Estado centralizado no `AuthStore`
- Componentes desacoplados de regras de negócio

---

## 🧪 Testes

O projeto possui testes unitários focados em **lógica e regras de negócio**, evitando testes de boilerplate.

Cobertura principal:
- AuthStore (signals, effects e persistência)
- AuthGuard
- RoleGuard

---

## 📸 Preview

<img width="1215" height="752" alt="login" src="https://github.com/user-attachments/assets/3b7b3f22-f762-40fd-bf45-b259afb76c9f" />
<img width="1361" height="600" alt="img" src="https://github.com/user-attachments/assets/0f448804-2cc6-4b8d-b0eb-e4ea8986ba5b" />

Sugestões:
- Login como ADMIN mostrando menu “Usuários”
- Login como USER sem acesso ao menu ADMIN
- Logout e redirecionamento para login

---

## Aplicação disponível em:
https://financecorp-dashboard.vercel.app

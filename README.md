# [SaaS Onboarding Simulation](saas-onboarding-simulation.vercel.app)

Simulação de onboarding para um SaaS fictício, desenvolvida com foco em **redução fricção no primeiro uso, ativação rápida do usuário e mentalidade de produto aplicada ao front-end.**

Esste projeto não tem como objetivo apenas demonstrar habilidades técnicas em React, mas sim **como decisões de UX, microcopy e fluxo impacam o comportamento do usuário nos primeiros segundos de uso de um produto.**

---

## 🎯 Objetivo do Projeto

Criar uma experiência de onboarding curta, clara e progressiva, simulando um cenário real de SaaS, onde o usuário:
* entende rapidamente o valor do produto
* realiza uma primeira ação significativa (ativação)
* pode pular etapas caso já esteja familiarizado
* chega ao dashboard sem fricções desnessárias

---

## 🧠 Mentalidade de Produto

Decisões tomadas ao longo do projeto:
* **Onboarding em etapas curtas** para reduzir carga cognitiva
* **Progress indicator discreto**, informando avanço sem gerar ansiedade
* **Persistência de progresso** com localStorage
* **Possibilidade de pular o onboarding**, respeitando usuários experientes
* **Microcopy de loading** para reduzir incerteza
* **Empty State orientado à ação** no dashboard
* **Simluação de tracking de abandono** para análise de funil

O foco é demonstrar pensamento em **ativação e retenção**, não apenas layout.

---

## 🚀 Fluxo de Onboarding

1. **Welcome** <br />
Introdução clara ao valor do produto e CTA principal

2. **First Task** <br />
Criação da primeira tarefa como evento de ativação

3. **Aha Moment** <br />
Reforço do valor percebido após a primeira ação

4. **Dashboard** <br />
Empty State ou visualização da tarefa criada

---

## 🛠️ Stack Utilizada

* **React + TypeScript**
* **React Router** (controle de fluxo e navegação)
* **Tailwind CSS** (estilização rápida e consistente)
* **Framer Motion** (transições suaves entre etapas)
* **Vercel** (deploy)

---

## 📦 Como rodar o projeto localmente

```
# Clone o repositório
git clone https://github.com/UelintonHJ/saas-onboarding-simulation.git

# Acesse a pasta
cd saas-onboarding-simulation

# Instale as dependências
npm install

# Rode o projeto
npm run dev
```
O projeto estará disponível em: <br />
http://localhost:5173

---

## 🌍 Demo Online

https://saas-onboarding-simulation.vercel.app/

---

## 📌 Observações

* Todos os dados são simulados
* Não há backend ou atenticação real
* O foco está em **UX, fluxo e decisões de produto**

---

## 👤 Autor

Desenvolvido por **Uelinton Janke** <br />
Front-end Developer com foco em produto

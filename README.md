# BMA Time Entries — Frontend

Frontend da aplicação de **gestão de registros de ponto (batidas e jornadas)**, desenvolvido em **React (Vite) + TypeScript**.
Este projeto consome a API ASP.NET Core e fornece uma interface intuitiva para CRUD de registros.

---

## 🚀 Tecnologias Utilizadas

* **React ^19.1.1 + TypeScript**
* **Vite** (build rápido e leve)
* **React Router DOM** (navegação entre páginas)
* **React Query** (consumo e cache da API)
* **React Hook Form + Zod** (formulários e validação)
* **Axios** (requisições HTTP)
* **CSS Modules** (estilização)
* ...

---

## ⚙️ Funcionalidades Implementadas

* 📋 **Listagem de Registros**

  * Tabela com filtros e paginação.
  * Ações de **editar** e **excluir**.
  * ...

* ✏️ **Formulário de Registro**

  * Criar ou editar registros de ponto.
  * Validações com **React Hook Form + Zod**.
  * Campos obrigatórios:
    * `employeeId` (código interno)
    * `employeeName` (nome do colaborador)
    * `timestamp` (data/hora)
    * `type` (Entrada, Saída, Intervalo)
  * Campos opcionais:
    * `location`
    * `notes`
  * ...

* 🔄 **Integração com API**

  * CRUD via **React Query** com cache automático.
  * Invalidação de cache após criar/editar/deletar.

---

## ▶️ Como Rodar o Projeto

### 1. Instalar ferramentas

* Node.js
* npm
* Git

### 2. Clonar o Repositório

```bash
git clone https://github.com/WesleySardi/5.1__Typescript-React.js__RegistroDePontosEJornadas-Frontend.git
cd 5.1__Typescript-React.js__RegistroDePontosEJornadas-Frontend
```

### 3. Instalar Dependências

```bash
npm install
```

### 4. Configurar URL da API

No arquivo `src/api.ts`, ajuste a URL base da API ASP.NET Core:

```ts
import axios from "axios";

const BASE = "https://localhost:44377/api";

export const api = axios.create({
  baseURL: BASE,
  headers: { "Content-Type": "application/json" },
});
```

### 5. Rodar o Servidor de Desenvolvimento

```bash
npm run dev
```

Aplicação ficará disponível em:
👉 `http://localhost:5173`

---

## 🔌 Exemplos de Fluxo

* **Listagem de registros:**

  * Acessar `/timeEntries/list`

* **Criar novo registro:**

  * Acessar `/timeEntries/list/new`
  * O formulário é limpo automaticamente ao abrir essa rota.

* **Editar registro existente:**

  * Acessar `/timeEntries/list/edit/:id`
  * O formulário é carregado com os valores existentes.

---

## 📂 Estrutura do Projeto

```bash
src_
    │   api.ts
    │   App.css
    │   App.tsx
    │   index.css
    │   main.tsx
    │   styles.css
    │   types.ts
    │   vite-env.d.ts
    │   
    ├───assets
    │       react.svg
    │       
    ├───components
    │   ├───buttons
    │   │   ├───CancelButton
    │   │   │       CancelButton.tsx
    │   │   │       styles.css
    │   │   │       
    │   │   ├───ConfirmButton
    │   │   │       ConfirmButton.tsx
    │   │   │       styles.css
    │   │   │       
    │   │   ├───DeleteButton
    │   │   │       DeleteButton.tsx
    │   │   │       styles.css
    │   │   │       
    │   │   ├───EditButton
    │   │   │       EditButton.tsx
    │   │   │       styles.css
    │   │   │
    │   │   ├───FilterButton
    │   │   │       FilterButton.tsx
    │   │   │       styles.css
    │   │   │
    │   │   ├───SaveOrCreateButton
    │   │   │   │   SaveOrCreateButton.tsx
    │   │   │   │   styles.css
    │   │   │   │
    │   │   │   └───interfaces
    │   │   │           SaveOrCreateButtonPropsInterface.tsx
    │   │   │
    │   │   └───WelcomeButton
    │   │           styles.css
    │   │           WelcomeButton.tsx
    │   │
    │   ├───commonStructure
    │   │   ├───body
    │   │   │       Body.tsx
    │   │   │       styles.css
    │   │   │
    │   │   ├───footer
    │   │   │       Footer.tsx
    │   │   │       styles.css
    │   │   │
    │   │   └───header
    │   │           Header.tsx
    │   │           styles.css
    │   │
    │   ├───formField
    │   │   │   FormField.tsx
    │   │   │   styles.css
    │   │   │
    │   │   └───interfaces
    │   │           FormFieldPropsInterface.tsx
    │   │
    │   ├───loadingOrError
    │   │   │   LoadingOrErrorInfo.tsx
    │   │   │   styles.css
    │   │   │
    │   │   └───interfaces
    │   │           LoadingOrErrorInfoPropsInterface.tsx
    │   │
    │   ├───textAreaField
    │   │   │   TextAreaField.tsx
    │   │   │
    │   │   └───interfaces
    │   │           TextAreaFieldPropsInterface.tsx
    │   │
    │   └───toastifyOptionsModal
    │       │   styles.css
    │       │   ToastifyOptionsModal.tsx
    │       │
    │       └───interfaces
    │               ToastifyOptionsModalPropsInterface.tsx
    │
    ├───enums
    │       TimeEntriesTypes.tsx
    │       ToastifyOptionTypes.tsx
    │
    ├───pages
    │   ├───TimeEntries
    │   │   │   TimeEntries.tsx
    │   │   │
    │   │   └───components
    │   │       ├───TimeEntriesForm
    │   │       │   │   styles.css
    │   │       │   │   TimeEntryForm.tsx
    │   │       │   │
    │   │       │   ├───components
    │   │       │   │   ├───FormActions
    │   │       │   │   │       FormActions.tsx
    │   │       │   │   │       styles.css
    │   │       │   │   │
    │   │       │   │   ├───NormalInputs
    │   │       │   │   │       NormalInputs.tsx
    │   │       │   │   │       styles.css
    │   │       │   │   │
    │   │       │   │   └───SpecificInputs
    │   │       │   │           SpecificInputs.tsx
    │   │       │   │           styles.css
    │   │       │   │
    │   │       │   ├───helpers
    │   │       │   │       services.tsx
    │   │       │   │       utils.tsx
    │   │       │   │
    │   │       │   └───interfaces
    │   │       │           TimeEntryFormDataInterface.tsx
    │   │       │
    │   │       └───TimeEntriesTable
    │   │           │   styles.css
    │   │           │   TimeEntriesTable.tsx
    │   │           │
    │   │           ├───components
    │   │           │   ├───FilterSection
    │   │           │   │   │   FilterSection.tsx
    │   │           │   │   │
    │   │           │   │   └───interfaces
    │   │           │   │           FilterSectionPropsInterface.tsx
    │   │           │   │
    │   │           │   ├───Pagination
    │   │           │   │   │   Pagination.tsx
    │   │           │   │   │
    │   │           │   │   └───interfaces
    │   │           │   │           PaginationPropsInterface.tsx
    │   │           │   │
    │   │           │   └───Table
    │   │           │           styles.css
    │   │           │           Table.tsx
    │   │           │
    │   │           └───helpers
    │   │                   services.tsx
    │   │                   utils.tsx
    │   │
    │   └───Welcome
    │           styles.css
    │           WelcomeComponent.tsx
    │
    └───utils
            utils.tsx
```

---

## 🧑‍💻 Autor

Desenvolvido por **Wesley Erik Sardi**

🚀 Frontend em **React + TypeScript** para integração com API ASP.NET Core



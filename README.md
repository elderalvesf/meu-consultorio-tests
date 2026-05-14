# meu-consultorio-tests

[![E2E Tests](https://github.com/elderalvesf/meu-consultorio-tests/actions/workflows/run-tests.yml/badge.svg)](https://github.com/elderalvesf/meu-consultorio-tests/actions/workflows/run-tests.yml)

Suíte de testes E2E mobile para o aplicativo **Meu Consultório** (Android), construída com Appium 2 + WebdriverIO 9 seguindo o padrão Page Object Model.

> Repositório de testes separado do app principal — integrado via `repository_dispatch` para execução automática a cada novo build.

---

## Stack

| Ferramenta | Versão |
|---|---|
| Node.js | 20 |
| WebdriverIO | 9 |
| Appium | 2 |
| Driver | UiAutomator2 |
| Framework | Mocha |
| Reporter | Spec + JUnit XML |

---

## Arquitetura

Padrão **Page Object Model**: cada tela do app tem sua própria classe com seletores e ações encapsulados, mantendo os specs limpos e reutilizáveis.

```
test/
├── pageobjects/
│   ├── BasePage.js             # Métodos e waits base
│   ├── LoginPage.js
│   ├── HomePage.js
│   ├── AgendaPage.js
│   ├── PacientesPage.js
│   ├── AppointmentFormPage.js
│   ├── TreatmentFormPage.js
│   ├── PatientDetailPage.js
│   └── NavigationHelper.js     # Navegação entre telas
└── specs/
    ├── login.spec.js
    ├── home.spec.js
    ├── agenda.spec.js
    ├── pacientes.spec.js
    ├── appointment-form.spec.js
    ├── treatment-form.spec.js
    └── patient-detail.spec.js
```

### Login automático via hook global

O hook `before` no `wdio.conf.js` autentica uma vez antes de toda a suíte, detectando se a tela de login está visível e usando `noReset: true` para reaproveitar a sessão entre specs.

---

## Cobertura de testes

| Módulo | Cenários |
|---|---|
| Autenticação | Login com credenciais válidas, validação de estado autenticado |
| Agenda | Exibição da tela, timeline, FAB, abertura de formulários de agendamento e tratamento, seletor de data |
| Pacientes | Listagem, cadastro de novo paciente, busca por nome |
| Formulários | Agendamento, tratamento, detalhes do paciente |

---

## Pré-requisitos

- Node.js 20+
- Java 17+
- Android SDK (com `ANDROID_HOME` configurado)
- Emulador ou dispositivo Android conectado via ADB

## Instalação

```bash
npm install
npx appium driver install uiautomator2
```

## Executar os testes

```bash
# Configurar credenciais
export TEST_EMAIL=seu@email.com
export TEST_PASSWORD=suasenha

# APK path (padrão: ./apk/app-debug.apk)
export APK_PATH=./apk/app-release.apk

# Rodar toda a suíte
npm test

# Rodar módulo específico
npm run test:agenda
npm run test:pacientes
```

Inicie o Appium em outra janela antes de rodar:

```bash
npm run appium
```

---

## CI/CD

O workflow `.github/workflows/run-tests.yml` executa em `ubuntu-latest` com emulador **Pixel 4 API 34 (x86_64)** e KVM habilitado.

**Triggers:**
- `repository_dispatch` (tipo `new-build`) — disparado automaticamente pelo repositório do app a cada novo build com a URL do APK
- `workflow_dispatch` — execução manual com URL do APK como input

**Fluxo:**

```
App repo gera novo build
  → publica APK como GitHub Release
    → dispara repository_dispatch neste repo
      → CI baixa APK, sobe emulador, instala app, roda suíte
        → publica relatório JUnit como artifact (30 dias)
```

### Secrets necessários

| Secret | Descrição |
|---|---|
| `TEST_EMAIL` | Credencial de teste |
| `TEST_PASSWORD` | Senha da credencial de teste |

---

## Relatórios

Os resultados são gerados em `./reports/` no formato JUnit XML, compatíveis com GitHub Actions artifacts e ferramentas como Allure e Jenkins.

---

## Variáveis de ambiente

| Variável | Padrão | Descrição |
|---|---|---|
| `TEST_EMAIL` | — | E-mail para autenticação |
| `TEST_PASSWORD` | — | Senha para autenticação |
| `APK_PATH` | `./apk/app-debug.apk` | Caminho do APK |
| `DEVICE_NAME` | `emulator-5554` | Nome do dispositivo ADB |
| `ANDROID_VERSION` | `14` | Versão do Android |
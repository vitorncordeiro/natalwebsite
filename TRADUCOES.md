# Suporte Multilíngue - Implementação

## Resumo das Alterações

Este projeto foi refatorado para suportar múltiplos idiomas (Inglês e Português) usando **URL-based language routing**. Isso permite compartilhar links com a tradução correta pré-selecionada.

## ✨ Novo Sistema de URL-Based Language Routing

A partir de agora, o idioma é definido pela URL:
- **`/en`** - Acesso em Inglês
- **`/ptbr`** - Acesso em Português (Brasil)

### Exemplos:
- `http://localhost:3000/en`
- `http://localhost:3000/ptbr`
- `http://localhost:3000/en#services` - Faz scroll para a seção de serviços em inglês
- `http://localhost:3000/ptbr#services` - Faz scroll para a seção de serviços em português

### Redirecionamento automático
- Se você acessar `/`, será automaticamente redirecionado para `/en` (idioma padrão)
- O middleware (`middleware.ts`) gerencia isso automaticamente

## Arquivos Principais

### 1. `middleware.ts` ⭐ NOVO
Middleware que:
- Redireciona `/` para `/en` (idioma padrão)
- Detecta o locale na URL
- Redireciona automaticamente paths sem locale

### 2. `app/[locale]/layout.tsx` ⭐ NOVO
Layout dinâmico que:
- Recebe o `locale` como parâmetro
- Passa o locale para o LanguageProvider via `initialLocale`
- Define o `lang` do HTML corretamente (`en` ou `pt-BR`)
- Gera estaticamente páginas para `en` e `ptbr`

### 3. `app/[locale]/page.tsx` ⭐ NOVO
Página principal que funciona dentro da estrutura de locale

### 4. `lib/translations.ts`
Arquivo com todas as traduções:
- Chave `en` - Inglês
- Chave `ptbr` - Português Brasil

### 5. `contexts/language-context.tsx` ⭐ ATUALIZADO
Context API que agora:
- Aceita `initialLocale` como prop
- Lee o locale da URL com `usePathname()`
- Atualiza a URL quando o usuário muda de idioma
- Sincroniza automaticamente com o URL segment

### 6. Hooks Auxiliares ⭐ NOVO

#### `useLocale()` (`hooks/use-locale.ts`)
Retorna o locale atual da URL
```typescript
const locale = useLocale() // 'en' | 'ptbr'
```

#### `useLocalizedRouter()` (`hooks/use-localized-router.ts`)
Facilita navegação com locale automático
```typescript
const { currentLocale, getLocalizedPath } = useLocalizedRouter()

// Gera path com locale atual
const path = getLocalizedPath('#services') // /ptbr/#services

// Gera path com locale específico
const enPath = getLocalizedPath('#services', 'en') // /en/#services
```

## Como Funciona

### Fluxo de Idioma
1. Usuário acessa `/` → Middleware redireciona para `/en`
2. Middleware detecta `/en` ou `/ptbr` na URL
3. Layout passa `initialLocale` para LanguageProvider
4. LanguageProvider inicializa com aquele locale
5. Se usuário trocar idioma no header → URL é atualizada → Página re-renderiza

### Exemplo: Trocar de Idioma
```typescript
// No Header
const { language, setLanguage, t } = useLanguage()

<button onClick={() => setLanguage(language === "en" ? "ptbr" : "en")}>
  {/* Ao clicar, a URL muda de /en para /ptbr ou vice-versa */}
</button>
```

## Como Compartilhar Links com Tradução

Simplesmente compartilhe a URL com o locale:
- Para cliente em português: `https://seusite.com/ptbr`
- Para cliente em inglês: `https://seusite.com/en`
- Com hash: `https://seusite.com/ptbr#services`

## Estrutura de Pastas

```
app/
├── [locale]/                  # Pasta dinâmica para locale
│   ├── layout.tsx            # Layout com acesso ao locale param
│   └── page.tsx              # Página principal
└── globals.css

contexts/
└── language-context.tsx      # Context com URL-based routing

hooks/
├── use-locale.ts             # Hook para acessar locale
├── use-localized-router.ts   # Hook para gerar paths com locale
└── ...

middleware.ts                 # Middleware para redirecionar rotas
```

## Como Adicionar Novas Traduções

1. Abra `lib/translations.ts`
2. Adicione a chave em ambos os idiomas (en e ptbr)
3. Use no componente:
```typescript
const { t } = useLanguage()
<h1>{t.hero.title}</h1>
```

## Informações Técnicas

- **Framework**: Next.js 16.1.6 com App Router
- **Routing**: Dynamic routes com `[locale]`
- **State Management**: Context API
- **Internacionalização**: sem bibliotecas externas
- **Static Generation**: `generateStaticParams()` para `/en` e `/ptbr`
- **Middleware**: Para redirecionamento automático de rotas

## Mudanças de URL

Rotas geradas automaticamente:
- `/en` - Página em inglês
- `/ptbr` - Página em português
- `/` - Redireciona para `/en` (padrão)

## Componentes Localizados

Todos os componentes foram atualizados para usar `useLanguage()`:
- ✅ Header (com botão de troca de idioma)
- ✅ Hero
- ✅ Services
- ✅ Process
- ✅ Differentials
- ✅ About
- ✅ CTA
- ✅ Footer
- ✅ TrustStrip
- ✅ Projects

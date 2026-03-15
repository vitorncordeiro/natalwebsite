# Suporte Multilíngue - Implementação

## Resumo das Alterações

Este projeto foi refatorado para suportar múltiplos idiomas (Inglês e Português) sem usar bibliotecas externas de tradução.

## Arquivos Criados

### 1. `lib/translations.ts`
Arquivo centralizado contendo todos os textos em inglês e portuguêso com a seguinte estrutura:
- **hero**: Conteúdo da seção hero
- **services**: Serviços e descrições
- **process**: Etapas do processo de trabalho
- **differentials**: Diferenciais da empresa
- **projects**: Labels do portfólio
- **about**: Seção sobre
- **cta**: Call-to-action
- **footer**: Rodapé
- **trustStrip**: Faixa de confiança
- **navigation**: Itens de navegação
- **language**: Rótulos de idioma

### 2. `contexts/language-context.tsx`
Context API customizado que fornece:
- **LanguageProvider**: Componente wrapper para a aplicação
- **useLanguage()**: Hook customizado para acessar idioma e traduções
- Persistência de preferência de idioma em localStorage
- Prevenção de hidration mismatch

## Arquivos Modificados

### Layout Principal
- **`app/layout.tsx`**: Envolvido com `<LanguageProvider>` para habilitar suporte multilíngue globalmente

### Componentes Refatorados
Todos os componentes abaixo foram refatorados para usar o hook `useLanguage()` e a tradução centralizada:

1. **`components/header.tsx`**
   - Adicionado botão de troca de idioma (ícone de globo)
   - Navegação com itens traduzidos
   - Botão de CTA traduzido
   - Disponível em desktop e mobile

2. **`components/hero.tsx`**
   - Badge, título e descrição traduzidos
   - Botões de CTA traduzidos

3. **`components/services.tsx`**
   - Título da seção e descrições de serviços traduzidos
   - Números de serviços dinâmicos

4. **`components/about.tsx`**
   - Label e título traduzidos
   - Parágrafos de conteúdo traduzidos

5. **`components/process.tsx`**
   - Etapas do processo com números, títulos e descrições traduzidas

6. **`components/differentials.tsx`**
   - Diferenciais com títulos e descrições traduzidos

7. **`components/cta.tsx`**
   - Título, descrição e botão de CTA traduzidos

8. **`components/footer.tsx`**
   - Marca, descrição, navegação e labels traduzidos

9. **`components/trust-strip.tsx`**
   - Itens da faixa de confiança traduzidos

10. **`components/projects.tsx`**
    - Label e título da seção traduzidos

## Como Funciona

### 1. Acesso às Traduções
```typescript
const { language, setLanguage, t } = useLanguage()

// language: "en" | "pt"
// setLanguage: função para alterar o idioma
// t: objeto com todas as traduções do idioma atual
```

### 2. Uso em Componentes
```typescript
<h1>{t.hero.title}</h1>
<button onClick={() => setLanguage(language === "en" ? "pt" : "en")}>
  Trocar Idioma
</button>
```

### 3. Persistência
- A preferência de idioma é salva em localStorage
- Ao recarregar a página, o idioma anterior é restaurado

## Mudanças no Header

O header agora possui:
- **Botão de troca de idioma** (ícone Globe)
  - Desktop: Posicionado próximo ao botão de CTA
  - Mobile: Posicionado próximo ao menu hamburger
- **Navegação e CTA traduzidos**
- Funcionalidade de toggle entre EN e PT

## Como Adicionar Novas Traduções

1. Abra `lib/translations.ts`
2. Adicione a nova chave no objeto `en`
3. Adicione a tradução correspondente no objeto `pt`
4. Use no componente com: `t.secao.chave`

Exemplo:
```typescript
// em translations.ts
en: {
  hero: {
    title: "New Title",
    // ...
  },
}

pt: {
  hero: {
    title: "Novo Título",
    // ...
  },
}

// no componente
<h1>{t.hero.title}</h1>
```

## Informações Técnicas

- **React Hooks**: useState, useContext, useEffect
- **Next.js**: "use client" directive para componentes cliente
- **localStorage**: Para persistência de preferência de idioma
- **Context API**: Para estado global de idioma
- Nenhuma biblioteca externa de tradução (i18n, react-i18next, etc.)

## Browser Storage

As preferências são armazenadas em localStorage com a chave `"language"` contendo:
- `"en"` para inglês
- `"pt"` para português

## Componentes Touchpoints do Idioma

- Header (botão de troca)
- Todos os textos estáticos da página
- Os dados de projetos mantêm seu idioma original (não foram traduzidos por serem dados específicos)

## Sugestões Futuras

- Detectar idioma do navegador automaticamente na primeira visita
- Adicionar mais idiomas facilmente (espanhol, francês, etc.)
- Criar página de configurações de idioma
- Traduzir páginas dinâmicas e dados dos projetos se necessário

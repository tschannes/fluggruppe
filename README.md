# Fluggruppe Aletsch — Website

Moderne, statische Website für die Fluggruppe Aletsch, gebaut mit [Hugo](https://gohugo.io/) und gehostet auf [GitHub Pages](https://pages.github.com/).

## Lokale Entwicklung

### Voraussetzungen

- [Hugo](https://gohugo.io/installation/) (v0.165.0+)

```bash
# macOS
brew install hugo
```

### Entwicklungsserver starten

```bash
hugo server
```

→ Website öffnet sich unter **http://localhost:1313/** mit Live-Reload.

### Produktions-Build

```bash
hugo --minify
```

→ Ausgabe im Ordner `public/`

## Deployment

Jeder Push auf den `main`-Branch löst automatisch einen Build + Deploy via GitHub Actions aus.

**Voraussetzungen für GitHub Pages:**
1. Repository-Einstellungen → Pages → Source: **GitHub Actions**
2. Formspree-Endpunkt in `hugo.toml` unter `[params].formspreeEndpoint` eintragen
3. Custom Domain unter Settings → Pages → Custom Domain: `fluggruppe-aletsch.ch`

## Inhalte bearbeiten

→ Siehe **[BEARBEITUNGSANLEITUNG.md](BEARBEITUNGSANLEITUNG.md)** (auf Deutsch, für nicht-technische Benutzer)

## Struktur

```
content/          ← Alle Seiteninhalte (Markdown)
  _index.md       ← Startseite
  blog/           ← News-Beiträge
  club/           ← Club-Seiten
  flugmekka/      ← Flugmekka-Seiten
  ...
layouts/          ← HTML-Templates (nur für Entwickler)
static/           ← CSS, JS, Bilder
hugo.toml         ← Sitekonfiguration
```

## Kontakt

Fragen zur Website: [info@fluggruppe-aletsch.ch](mailto:info@fluggruppe-aletsch.ch)

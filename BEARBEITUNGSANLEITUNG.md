# Bearbeitungsanleitung — Website Fluggruppe Aletsch

Diese Anleitung erklärt, wie du die Website direkt auf GitHub bearbeiten kannst – **ohne technische Kenntnisse**.

---

## Inhalt

1. [Wie funktioniert das?](#wie-funktioniert-das)
2. [Einen News-Beitrag hinzufügen](#einen-news-beitrag-hinzufügen)
3. [Einen Beitrag bearbeiten](#einen-beitrag-bearbeiten)
4. [Kontaktseite / Vorstand aktualisieren](#kontaktseite--vorstand-aktualisieren)
5. [Andere Seiten bearbeiten](#andere-seiten-bearbeiten)
6. [Markdown-Grundlagen](#markdown-grundlagen)

---

## Wie funktioniert das?

1. Du bearbeitest eine Datei auf **github.com** (direkt im Browser)
2. Du speicherst die Änderung mit **„Commit changes"**
3. Die Website baut sich **automatisch innerhalb von ~1 Minute** neu auf
4. Fertig — deine Änderungen sind online!

> **Hinweis:** Du brauchst einen GitHub-Account. Bitte beim Präsidenten anfragen, um als Mitarbeiter ins Repository eingeladen zu werden.

---

## Einen News-Beitrag hinzufügen

1. Gehe auf GitHub zum Repository
2. Navigiere zum Ordner **`content/blog/`**
3. Klicke auf **„Add file" → „Create new file"**
4. Gib einen Dateinamen ein:
   ```
   YYYY-MM-DD-titel-des-beitrags.md
   ```
   Beispiel: `2025-03-15-ausflug-nach-zermatt.md`

5. Kopiere diese Vorlage und fülle sie aus:

```markdown
---
title: "Dein Titel hier"
date: 2025-03-15
description: "Kurze Beschreibung für die Vorschau (1-2 Sätze)."
image: "https://link-zu-deinem-bild.jpg"
---

Hier kommt der vollständige Text des Beitrags.

Du kannst mehrere Abschnitte schreiben, Bilder einbinden und Links setzen.
```

6. Klicke **„Commit changes"** → Website aktualisiert sich automatisch

**Bilder:** Am einfachsten lädst du dein Bild auf einen Dienst wie [Imgur](https://imgur.com/) oder [imgbb](https://imgbb.com/) hoch und verwendest den direkten Bildlink bei `image:`.

---

## Einen Beitrag bearbeiten

1. Navigiere zu **`content/blog/`**
2. Klicke auf den Dateinamen des Beitrags
3. Klicke auf das **Bleistift-Icon** (oben rechts: „Edit this file")
4. Nimm deine Änderungen vor
5. Klicke **„Commit changes"**

---

## Kontaktseite / Vorstand aktualisieren

1. Navigiere zu **`content/kontakt.md`**
2. Klicke auf das **Bleistift-Icon**
3. Passe die Tabelle mit den Vorstandsmitgliedern an:

```markdown
| Funktion | Vorname | Name | E-Mail |
|---|---|---|---|
| Präsident | Max | Mustermann | [max@example.ch](mailto:max@example.ch) |
```

4. Klicke **„Commit changes"**

---

## Andere Seiten bearbeiten

| Seite | Datei |
|---|---|
| Startseite (Begrüssungstext) | `content/_index.md` |
| Jahresprogramm | `content/club/jahresprogramm.md` |
| Club CCC | `content/club/club-ccc.md` |
| Statuten | `content/club/statuten.md` |
| Diverses | `content/club/diverses.md` |
| Flugmekka | `content/flugmekka/_index.md` |
| Flugschulen | `content/flugschulen.md` |
| Wetter | `content/wetter.md` |
| Links | `content/links.md` |
| Impressum | `content/impressum.md` |

Alle Dateien bearbeitest du gleich: Datei öffnen → Bleistift-Icon → Ändern → Commit.

---

## Markdown-Grundlagen

Markdown ist eine einfache Auszeichnungssprache. Hier die wichtigsten Befehle:

| Was du willst | Was du schreibst | Ergebnis |
|---|---|---|
| **Fett** | `**fetter Text**` | **fetter Text** |
| *Kursiv* | `*kursiver Text*` | *kursiver Text* |
| Titel | `## Überschrift` | großer Titel |
| Untertitel | `### Untertitel` | mittlerer Titel |
| Link | `[Linktext](https://example.com)` | klickbarer Link |
| Bild | `![Bildbeschreibung](https://link.jpg)` | eingebettetes Bild |
| Liste | `- Punkt eins` | Aufzählungsliste |
| Trennlinie | `---` | horizontale Linie |

### Beispiel für einen Beitrag

```markdown
## Rückblick Saisonauftakt 2025

Am vergangenen Wochenende haben wir die Saison 2025 auf der Fiescheralp eröffnet.

**Wetter:** Perfekte Bedingungen, blauer Himmel und gute Thermik.

Die Highlights des Tages:
- Flüge bis auf 2800m
- 12 Teilnehmerinnen und Teilnehmer
- Gemütlicher Abschluss im Restaurant Moosfluh

![Startplatz Fiescheralp](https://mein-bild-link.jpg)

Wir freuen uns auf viele weitere schöne Flugtage!
```

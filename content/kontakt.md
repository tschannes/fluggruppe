---
title: "Kontakt"
description: "Kontaktiere die Fluggruppe Aletsch – Vorstand und Kontaktformular."
---

## Vorstand

| Funktion | Vorname | Name | E-Mail |
|---|---|---|---|
| Präsident | Sebastian | Eyer | [info@fluggruppe-aletsch.ch](mailto:info@fluggruppe-aletsch.ch) |
| Vorstandsmitglied | Adrian | Furrer | – |
| Vorstandsmitglied | Carlo | Arnold | – |
| Vorstandsmitglied | Giovanni | Berchtold | – |
| Vorstandsmitglied | Hannes | Tscherrig | – |

---

## Kontaktformular

Möchtest du uns etwas mitteilen? Dann fülle das Formular aus und wir melden uns bei dir.

<form action="https://formspree.io/f/REPLACE_WITH_YOUR_ID" method="POST" class="contact-form" id="contact-form">
  <div class="form-group">
    <label for="name">Name <span aria-hidden="true">*</span></label>
    <input type="text" id="name" name="name" required autocomplete="name" />
  </div>
  <div class="form-group">
    <label for="email">E-Mail <span aria-hidden="true">*</span></label>
    <input type="email" id="email" name="email" required autocomplete="email" />
  </div>
  <div class="form-group">
    <label for="message">Nachricht <span aria-hidden="true">*</span></label>
    <textarea id="message" name="message" rows="6" required></textarea>
  </div>
  <div class="form-privacy">
    <small>Mit dem Absenden stimmst du unserer <a href="/datenschutz/">Datenschutzerklärung</a> zu.</small>
  </div>
  <button type="submit" class="btn btn-primary" id="contact-submit">Absenden</button>
  <p class="form-success" id="form-success" aria-live="polite" hidden>Danke für deine Nachricht! Wir melden uns bald.</p>
</form>

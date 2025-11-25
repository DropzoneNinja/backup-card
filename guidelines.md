# Home Assistant Backup Card Guidelines (Enhanced for AI-Assisted Development)

These guidelines outline how to build a high-quality, maintainable Home Assistant Lovelace custom card for displaying nightly backup statuses. This version includes explicit instructions tailored for AI assistants such as **Claude**, **ChatGPT**, and similar LLM coding partners—helping them generate clearer code, more reliable test iterations, and consistent architectural decisions.

---

## 🎯 Purpose of the Card

The card reports the results of automated overnight backups. Each backup entry must display:

* **Server/Application Name**
* **Backup Start Date/Time**
* **Backup Duration**
* **Outcome** (success, failed, partial)
* **Notes / Error Message**

The card must support:

* A **single entry** or **multiple entries**
* **Auto-refresh** when entity values change
* Fully theme-aware styling

---

## 🤖 Instructions for Claude (and other AI coding assistants)

To ensure high‑quality code generation and smooth iterative development, LLMs should follow these guidelines:

### ✅ General Coding Behaviour

1. **Always write TypeScript**, not JavaScript.
2. **Use LitElement/Lit** for all components.
3. **Use Home Assistant standard components** such as:

   * `ha-card`
   * `ha-icon`
   * `ha-alert`
4. **Never assume or invent Home Assistant internal APIs**—base logic only on public Lovelace card patterns.
5. **Generate modular code**: helpers in `/helpers`, subcomponents in `/components`.
6. **Use strict typing everywhere** (`interface BackupEntry`, etc.).

### 🔁 Testing & Iteration Cycle Guidance

When asked to update or fix code:

* AI should **ONLY modify the files requested**, never global rewrites.
* AI should provide **patch‑style responses** where possible.
* AI must confirm:

  * Import paths remain correct
  * HTML templates compile cleanly
  * Reactive Lit properties use `@property()` appropriately

When generating new code, the AI should:

* Provide **copy‑paste ready** blocks
* Include **build/test steps** if relevant
* Assume **Rollup** is the bundler

### 🧪 Test Data Expectations

When asked for test data:

* Output JSON formatted to be placed in `public/demo-data.json`
* Match the structure:

  ```json
  {
    "backups": [
      {
        "name": "Server A",
        "start": "2025-02-15T01:00:00+11:00",
        "duration": 482,
        "outcome": "success",
        "notes": "Completed normally"
      }
    ]
  }
  ```

### 🛠️ Build/Bundle Instructions for Code Output

AI should:

* Use **Rollup** with TypeScript + CSS loaders
* Output a `backup-card.js` bundle into `/dist`
* Include the Rollup config when requested

---

## 🧱 Recommended Tech Stack

### **Frontend (Lovelace Custom Card)**

* **TypeScript**
* **LitElement / Lit**
* **Home Assistant Web Components**
* **Rollup** bundler

### **Backend (Data Provider)**

Depending on how your backup system reports results:

* Command-line sensor
* MQTT sensor
* REST sensor
* File-based sensor
* A custom integration if deeper logic is required

---

## 🗂️ Directory Structure

```
backup-card/
├── src/
│   ├── backup-card.ts
│   ├── types.ts
│   ├── styles.ts
│   ├── helpers/
│   │   ├── date.ts
│   │   ├── duration.ts
│   │   └── status.ts
│   ├── components/
│   │   ├── backup-item.ts
│   │   └── outcome-badge.ts
│   └── config.ts
├── dist/
│   └── backup-card.js
├── public/
│   └── demo-data.json
├── rollup.config.js
├── package.json
├── README.md
└── guidelines.md
```

---

## 🎨 UI/UX Design Guidelines

* Use **ha-card** for the main container.
* Colour codes must respect HA themes.
* Prefer icons for outcomes:

  * `mdi:check-circle` → success
  * `mdi:alert` → partial
  * `mdi:close-circle` → failed
* Layout should collapse neatly on mobile.
* Notes should wrap gracefully and support long text.

---

## 🧪 Testing Recommendations

* Validate Lit updates with test data placed in `public/demo-data.json`.
* Test missing fields, malformed durations, and empty datasets.
* Confirm the card reloads properly after dashboard refresh.
* Ensure no console errors during HA frontend load.

---

## 🚀 Deployment

Place the built file here:

```
config/www/backup-card/
```

Add to Lovelace resources:

```yaml
type: module
url: /local/backup-card/backup-card.js
```

Then use the card:

```yaml
type: custom:backup-card
entity: sensor.backup_results
```

---

## 📌 Final Tips

* Pre-process complex logic in your sensors, not in the UI.
* Keep your Lit templates small and readable.
* Document every configurable option.
* Handle both single and multiple backup entries cleanly.

---

These enhanced guidelines ensure a smooth development loop when working with Claude or any other AI co‑developer—leading to clean, consistent, production‑ready Home Assistant UI components.

# 換氣實驗室 · Ventilation Lab

A self-contained bilingual HKDSE Biology simulation. No account, API key, package installation or external runtime assets are required.

## Run

With Python 3 and Node.js 24 available:

```sh
npm start
```

Serve the checkout on port 8000. Run `npm test` for four model and dictionary tests. The production files are `index.html`, `style.css`, `app.js`, `model.js` and `i18n.js`; any static HTTP host can serve them. Opening `index.html` directly is unsupported because the app uses ES modules.

## GitHub

The Pages workflow validates the model and deploys those five files on pushes to `main`. In the repository's **Settings → Pages**, select **GitHub Actions** as the build source if Pages is not enabled. A committed workflow alone does not establish a successful deployment. The app also runs without GitHub Pages.

## Learning workflow

Use Explore to scrub a coherent cycle, play/pause, slow playback, step, choose inhalation/exhalation, reset/replay and toggle anatomical labels. Front and side sections remain available together. Switch to the air sac for net diffusion or the bell jar for the analogy and its limitations. Guided challenges include ordering with accessible up/down buttons, current-frame prediction, comparison, endpoints and distinguishing processes. Explanations appear after an attempt or explicit reveal. Three progressive hints are available. Written responses are not keyword graded.

Recorded comparisons retain immutable state snapshots; their schematic numerical quantities can be downloaded as a UTF-8 CSV. Reset restarts the model without clearing records; Clear records removes the comparison table. Data remain in the current tab only, except language preference in local storage. There is no remote data collection.

## Model and terminology

`i18n.js` supplies stable bilingual content IDs and the required glossary, including 氣囊, 肋骨籃 and 換氣. Changing language preserves phase, elapsed time, selected view/task, response, recordings and playback. It makes no translation API calls.

`model.js` is the single source of phase, volume, relative pressure and flow. A schematic six-second cycle has volume `1 + 0.3(1 − cos(2πp))`, airflow `sin(2πp)` and relative pressure `−sin(2πp)`. These normalised values are invented teaching settings, not experimental or clinical data. Endpoint flow is explicitly zero to avoid floating-point residues. The model assumes quiet breathing, open airways, elastic recoil and synchronised lungs. Lung volume never falls to zero. The viewing speed does not change phase-dependent relationships. Playback is initially paused, with keyboard-accessible steps and a reduced-motion CSS rule; users can inspect all content without animation.

Original SVGs are simplified 2D sections, not 3D renderings or copied textbook drawings. Diffusion arrows indicate net transport; molecular movement is not simulated. The bell jar does not model ribs, diaphragm shape or complete lung structure.

## Source limitations

The supplied textual specification is the implementation source. The referenced `te_08_c.pdf` was not attached. Printed pages 8-21–8-25, the textbook artwork and current applicable EDB supplementary document were not independently inspected. No page-accurate or officially endorsed curriculum claim is made; teacher review remains necessary. Detailed breathing regulation, forced expiration, partial pressures, diagnoses and spirometry are outside scope.

## Completed acceptance checks

- **1 — Coherent mechanics:** 999 phase samples verify inhalation/exhalation direction against volume change and pressure. Both SVG lungs share expansion, ribs move upwards/outwards during inhalation, and the diaphragm flattens downwards. Quiet exhalation reverses those positions. Endpoint caption explains equal pressure.
- **2 — Airflow and pressure:** every sampled state has opposite-signed relative pressure and airflow. Both exact endpoints have zero airflow. The anatomy, readouts and curves consume the same `stateAt` function.
- **3 — Endpoint comparison:** automated assertions verify relative pressure zero at phases 0 and 0.5, with volumes 1 and 1.6 respectively. Browser interaction confirmed the end-inhalation zero-airflow readout.
- **4 — Residual air and passive lung tissue:** automated checks keep volume at least 1. Persistent student text explains residual air and that lung tissue is not an active skeletal muscle. Quiet exhalation explanation includes elastic recoil.
- **5 — Gas exchange stability:** real Chromium interaction checked oxygen air-sac-to-blood arrows after view changes, language switching and replay/pause. Carbon dioxide has the opposite labelled dashed arrow; thin surface, concentrations and blood flow remain separated spatially.

Additional model checks cover periodic replay, record stability and complete bilingual dictionary pairs. Chromium checks cover language-state retention, recorded rows, bell-jar limitations, challenge feedback and a 390px mobile viewport with no horizontal overflow or JavaScript runtime errors. Browser validation tooling is local to the onboarding workspace and is not an application dependency. GitHub CI runs the four dependency-free tests; it does not run the local browser suite.

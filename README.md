# SurveyJS + Quasar Quickstart Template

SurveyJS is a set of JavaScript components that allow you and your users to build surveys / forms, store them in your database, and visualize survey results for data analysis. This quick start template uses [Quasar](https://quasar.dev/) (Vue 3 + Vite SPA) and the following SurveyJS components:

- [SurveyJS Form Library](https://surveyjs.io/form-library/documentation/overview)
- [Survey Creator / Form Builder](https://surveyjs.io/survey-creator/documentation/overview)
- [SurveyJS PDF Generator](https://surveyjs.io/pdf-generator/documentation/overview)
- [SurveyJS Dashboard](https://surveyjs.io/dashboard/documentation/overview)

> This template uses SurveyJS **v3** (`3.0.0`).

## Run the application

```bash
git clone https://github.com/surveyjs/surveyjs-quasar.git
cd surveyjs-quasar
npm i
npm run dev
```

Open http://127.0.0.1:5174/ in your web browser.

## Template structure

This template covers most basic use cases. You can find code examples for them in the following files:

- Create a standalone survey
  - [data/survey_json.js](data/survey_json.js)
  - [src/components/SurveyForm.vue](src/components/SurveyForm.vue)
- Add Survey Creator to a page
  - [src/components/SurveyCreator.vue](src/components/SurveyCreator.vue)
- Export a survey to a PDF document
  - [src/pages/PdfExportPage.vue](src/pages/PdfExportPage.vue)
- Visualize survey results
  - As charts
    - [data/dashboard_data.js](data/dashboard_data.js)
    - [src/components/DashboardPanel.vue](src/components/DashboardPanel.vue)
  - As a table
    - [data/dashboard_data.js](data/dashboard_data.js)
    - [src/components/DashboardTabulator.vue](src/components/DashboardTabulator.vue)

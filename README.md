# Post Reader

Small, modern Angular application for reading and creating posts. This repository uses Angular's standalone component style and demonstrates basic SPA routing, HTTP usage, and forms.

![Project status](https://img.shields.io/badge/status-active-brightgreen)

## Quick Links
- Repository: https://github.com/MohammedNafee/post-reader-angular-app

## Features
- View posts fetched from a public API
- Create new posts locally (client-side)
- Simple history page and navigation
- Standalone components and signal-based state

## Getting started

Prerequisites
- Node.js (LTS recommended)
- npm

Clone and install

```bash
git clone https://github.com/MohammedNafee/post-reader-angular-app.git
cd post-reader
npm install
```

Run development server

```bash
npm start
# or
ng serve
```

Open http://localhost:4200 in your browser.

If dependency installation fails with peer-dependency errors, you can try a clean install using the legacy resolver as a temporary workaround:

```powershell
rm -Recurse -Force node_modules
rm package-lock.json
npm install --legacy-peer-deps
```

## Useful NPM scripts

- `npm start` — start dev server (ng serve)
- `npm run build` — build production bundle
- `npm run test` — run unit tests
- `npm run watch` — build in watch mode
- `npm run serve:ssr:post-reader` — run SSR server (if built)

## Project structure

```
src/
├── app/
│   ├── app.ts             # Root standalone component
│   ├── app.html           # Root template with <router-outlet>
│   ├── app.config.ts      # Application providers (provideRouter, provideHttpClient)
│   ├── app.routes.ts      # Standalone route definitions
│   ├── posts/             # Posts feature
│   ├── post-item/         # Post item component
│   ├── create-post/       # Create post form component
│   ├── history/           # History page component
│   └── nav-bar/           # Navigation component
├── assets/
└── styles.css
```

## Notes for developers

- Standalone components declare `standalone: true` and list other standalone components, directives, pipes, or NgModules in their `imports` array.
- To use `HttpClient` in a standalone app, `provideHttpClient()` is registered in `app.config.ts` (this project does that). You may also import `HttpClientModule` into a top-level NgModule or component imports when not using `provideHttpClient`.
- To use template-driven forms (ngModel), import `FormsModule` in the component `imports` array (not `NgModel` directly). For reactive forms, import `ReactiveFormsModule`.

## Common issues & troubleshooting

- NG8001 "is not a known element": ensure the child component is either declared in an NgModule or imported as a standalone component in the parent component's `imports` array.
- NG0303 "Can't bind to 'ngForOf'": import `CommonModule` into a standalone component that uses structural directives like `*ngFor` / `*ngIf`.
- NG0201 "No provider found for _HttpClient": make sure `provideHttpClient()` is present in `app.config.ts` or that `HttpClientModule` is imported from `@angular/common/http`.
- npm ERESOLVE dependency errors: try `npm install --legacy-peer-deps` as a temporary step, or align `@angular/*` package versions to the same patch version.
- `@angular/flex-layout` compatibility: this project avoids `flex-layout`; prefer native CSS flexbox/grid instead of adding beta packages that may not match the Angular version.

## How to add a new standalone component

```bash
ng generate component my-feature --standalone
```

Then include the component in the parent by adding it to the `imports` array:

```ts
@Component({
	standalone: true,
	imports: [RouterOutlet, MyFeatureComponent]
})
```

## Contributing

1. Fork the repo
2. Create a branch: `git checkout -b feature/your-feature`
3. Commit changes and open a PR

## License

MIT

---

If you'd like, I can add screenshots, a demo link, or CI badges (GitHub Actions) — tell me what you prefer and I'll add them.

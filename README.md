# 🌴 Far Away — Travel Packing Checklist 🧳

A responsive, interactive travel packing list app built with **React 18**. Add items, mark them as packed, sort your list, and track your packing progress — all in the browser.

---

## 🚀 Live Demo

> Deploy to [GitHub Pages](https://pages.github.com/), [Netlify](https://www.netlify.com/), or [Vercel](https://vercel.com/) for a shareable link.

---

## 📸 Screenshots

| Packing List | Progress Tracker |
|---|---|
| ![Add items and manage your packing list](public/logo192.png) | Stats bar updates in real time as you pack |

---

## ✨ Features

- ➕ **Add items** — specify quantity (1–20) and a description
- ✅ **Toggle packed status** — check off items as you pack them
- 🗑️ **Remove individual items** — delete any item from the list
- 🧹 **Clear entire list** — one-click reset with a confirmation dialog
- 🔢 **Sort items** — by input order, alphabetically (A–Z), or by packed status
- 📊 **Live progress stats** — see total items, packed count, and percentage
- 🎉 **Completion message** — celebratory message when everything is packed
- 📱 **Fully responsive** — optimized for desktop, tablet, and mobile

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **UI Framework** | [React 18](https://react.dev/) |
| **Build Tool** | [Create React App](https://create-react-app.dev/) (Webpack + Babel) |
| **Styling** | Custom CSS3 (Flexbox, Grid, Media Queries) |
| **Fonts** | [Google Fonts](https://fonts.google.com/) — Monoton, Quicksand |
| **Testing** | [React Testing Library](https://testing-library.com/) + [Jest](https://jestjs.io/) |
| **Performance** | [web-vitals](https://github.com/GoogleChrome/web-vitals) |
| **PWA** | Web App Manifest (installable on mobile devices) |
| **Linting** | ESLint (`react-app` config) |

---

## 🧠 React Skills & Patterns Demonstrated

### Core React Concepts
- **Functional Components** — all components are modern function-based components
- **React Hooks** — `useState` for local and shared state management
- **Lifting State Up** — items array lives in `App.js`; child components interact via callbacks
- **Controlled Components** — form inputs are fully controlled through React state
- **Props & Callbacks** — unidirectional data flow from parent to children via props

### Architecture Patterns
- **Component Composition** — small, focused components assembled into the full UI
- **Single Source of Truth** — one top-level state object drives the entire application
- **Immutable State Updates** — array spread, `.filter()`, and `.map()` ensure no direct mutations
- **Pure Functions** — components produce predictable output given the same props

### State Management
- **Local state** in `Form.js` (input fields) and `PackingList.js` (sort order)
- **Shared/global state** in `App.js` (items array, CRUD operations)
- No external state management library needed for this scope

### CSS Skills
- **CSS Grid & Flexbox** layouts
- **Responsive Design** with media query breakpoints at 820 px, 768 px, and 480 px
- **CSS custom properties** and cohesive color palette
- **Transition / hover effects** for interactive elements

---

## 📁 Project Structure

```
travel-check-list/
├── public/
│   ├── index.html          # HTML entry point
│   ├── manifest.json       # PWA manifest
│   └── ...                 # Icons, robots.txt
├── src/
│   ├── components/
│   │   ├── Form.js         # Item input form
│   │   ├── Item.js         # Single list item (checkbox, label, delete)
│   │   ├── Logo.js         # App header
│   │   ├── PackingList.js  # Item list with sorting controls
│   │   └── Stats.js        # Packing progress footer
│   ├── App.js              # Root component & state management
│   ├── index.js            # React DOM entry point
│   └── index.css           # All application styles
├── package.json
└── README.md
```

### Component Hierarchy

```
App
├── Logo
├── Form
├── PackingList
│   └── Item (× n)
└── Stats
```

---

## 🗃️ Data Model

Each item in the packing list follows this shape:

```js
{
  id: number,          // Date.now() — unique identifier
  description: string, // e.g. "Sunscreen"
  quantity: number,    // 1–20
  packed: boolean      // false by default
}
```

---

## ⚙️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v14 or later
- npm (comes with Node.js)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/rafael-a-g-n/travel-check-list.git
cd travel-check-list

# 2. Install dependencies
npm install

# 3. Start the development server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The page hot-reloads on every save.

### Available Scripts

| Command | Description |
|---|---|
| `npm start` | Start the development server |
| `npm test` | Run tests in interactive watch mode |
| `npm run build` | Create an optimized production build in `./build` |
| `npm run eject` | Eject from CRA (irreversible — use only if needed) |

---

## 🚢 Deployment

The app compiles to a fully static site and can be deployed anywhere:

- **[Netlify](https://www.netlify.com/)** — drag-and-drop the `build` folder, or connect your GitHub repo
- **[Vercel](https://vercel.com/)** — import the repo and it auto-detects CRA
- **[GitHub Pages](https://pages.github.com/)** — install `gh-pages`, add deploy scripts, run `npm run deploy`

```bash
# Production build
npm run build
```

---

## 🔮 Future Improvements

- 💾 **LocalStorage persistence** — keep the list across page refreshes
- 🌐 **Backend / database** — save lists to a server (e.g. Supabase, Firebase)
- 🔐 **Authentication** — user accounts with personal lists
- 📤 **Share lists** — generate a shareable link or export as PDF
- ✏️ **Edit items** — inline editing of existing items
- 🏷️ **Categories** — group items by clothing, toiletries, documents, etc.
- 🌙 **Dark mode** — theme toggle

---

## 👨‍💻 Author

**Rafael A. G. N.**
- GitHub: [@rafael-a-g-n](https://github.com/rafael-a-g-n)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

# 🧩 mymishn Templates

This folder contains the **templates** (also called *cards*) used for visual exports in the **mymishn** app.
Each template is a React component displaying a background image, text, and custom styles — viewable in **Storybook**.

---

## 📦 Structure

Each template lives in `src/templates/` and follows this structure:

```
src/
  templates/
    my-template/
      my-template.tsx
      background.png
  stories/
    my-template.stories.tsx
```

- **`my-template.tsx`** → the React component (using `TemplateProps`)
- **`background.png`** → the background image automatically copied from the base template
- **`my-template.stories.tsx`** → the associated Storybook story

---

## 🚀 Launching Storybook

To preview and test your templates in Storybook, follow these steps:

### 1. Install dependencies

Ensure all project dependencies are installed by running:

```bash
npm install
```

### 2. Start Storybook

Run the following command to launch the Storybook development server:

```bash
npm run dev
```

This will start Storybook and open it in your default web browser. If it doesn't open automatically, navigate to [http://localhost:6006](http://localhost:6006) in your browser.

### 3. Explore templates

In the Storybook interface, navigate to the **Templates** section in the sidebar. Select your template to view and interact with it in the preview area.

### 4. Stop Storybook

To stop the Storybook server, press `Ctrl+C` in the terminal where it is running.

---

## ⚙️ Creating a new template

### 1. Command

Run:

```bash
npm run new -- <component-name>
```

Examples:

```bash
npm run new -- early-session
npm run new -- focus-day
```

The script will:
1. Create a folder in `src/templates/<component-name>`
2. Copy `base-background.png` (from the project root)
3. Automatically generate:
   - The React component in PascalCase
   - The Storybook story centered in a 300×300px square

---

### 2. Example generated

```tsx
// src/templates/early-session/early-session.tsx
import React from "react";
import type { TemplateProps } from "@/types";
import background from "./background.png";

export const EarlySession: React.FC<TemplateProps> = ({ title, duration, date }) => {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-xl">
      <img
        src={background}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute top-6 left-6 z-10 text-white">
        {date && <p className="text-xs opacity-70 mb-1">{date}</p>}
        <p className="text-lg font-medium">{title}</p>
        <p className="text-3xl font-bold mt-1">{duration}</p>
      </div>
    </div>
  );
};
```

---

### 3. Storybook

Each template automatically appears in Storybook under:

```
Templates/<ComponentName>
```

The preview is **centered** in a fixed **300×300px** square to simulate the final export format.

---

## 🧠 Best practices

- Use **Tailwind CSS** for layout and effects.
- Keep a simple hierarchy: background → overlay → content.
- Maintain a **1:1 square format** for consistent exports.
- Use **kebab-case** for file and folder names (`early-session`).
- Use **PascalCase** for React components (`EarlySession`).

---

## 🪄 Shared type

All templates use the shared `TemplateProps` type defined in `src/types.d.ts`:

```ts
export type TemplateProps = {
  title: string;
  duration: string;
  date?: string;
};
```

Each template must at least accept these props.

---

## ✅ Quick summary

| Step | Action |
|------|---------|
| 1 | Ensure `base-background.png` exists at the project root |
| 2 | Run `npm run new -- my-template` |
| 3 | Edit `src/templates/my-template/my-template.tsx` |
| 4 | Preview in Storybook (`npm run dev`) |

---

Made with ❤️ for **mymishn**.

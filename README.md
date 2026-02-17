## Law Portfolio – Keshav Sharma

This is a modern, single-page portfolio built with [Next.js](https://nextjs.org) and the App Router.  
It is tailored for a law graduate with experience in corporate law, banking litigation, insurance, and criminal matters.

All content is currently configured for **Keshav Sharma**. You can fork and adapt it for your own profile, or update the details as your practice evolves.

---

## Running the site locally

From the project root:

```bash
npm install   # first time only
npm run dev
```

Then open `http://localhost:3000` in your browser.

---

## Where to update your information

Most of the visible content lives in a few React components:

- `src/app/page.tsx` – overall page layout and all sections (About, Practice Areas, Experience, Education, Skills, Resume, Contact).
- `src/components/HeroSection.tsx` – hero banner with your name, title, and summary.
- `src/components/NavBar.tsx` – top navigation with section links.
- `src/components/Section.tsx` – shared layout wrapper used by each section.
- `src/components/ExperienceItem.tsx` – reusable card for each internship / role in the “Professional Experience” section.

You can update text directly in these files, or use them as a template to add more sections and roles.

### Personal details

Update the following with your own details:

- **Name and title**  
  - `src/components/HeroSection.tsx`  
  - `src/app/page.tsx` (footer copyright and any references in text)

- **Contact information**  
  - `src/app/page.tsx`, `#contact` section:
    - Phone: `href="tel:+91..."` and the displayed number
    - Email: `href="mailto:..."` and the displayed address
    - Location text (e.g., “Panchkula, Haryana”)

- **Practice areas & skills**  
  - `src/app/page.tsx`, sections:
    - `#practice-areas` – update headings and bullet points to reflect your work
    - `#skills` – core skills, research platforms, and languages

- **Experience**  
  - `src/app/page.tsx`, `#experience` section:
    - Each `<ExperienceItem />` contains:
      - `role`
      - `organization`
      - `courtOrInstitution`
      - `period`
      - `bullets` (array of strings describing your responsibilities/achievements)

- **Education**  
  - `src/app/page.tsx`, `#education` section

---

## Resume file

The “Download Resume” button in the **Resume** section links to:

- `/Keshav_Sharma_Resume.pdf`

To wire this up:

1. Export your resume as a PDF.
2. Save it in the `public` folder at the project root with the exact name:
   - `public/Keshav_Sharma_Resume.pdf`
3. If you prefer a different filename, update the `href` in:
   - `src/app/page.tsx`, `#resume` section

---

## Customizing the design

- **Global colors and theme**  
  - `src/app/globals.css` defines CSS variables and base styles:
    - Primary colors (navy and dark green), background, card background, and text colors.
    - Smooth scrolling and page background gradients.

- **Typography & layout**  
  - Fonts are configured in `src/app/layout.tsx` using `next/font` (Geist).
  - The page uses a centered content width (`max-w-5xl`) with generous spacing and subtle borders.

You can safely tweak classes (Tailwind utility classes) in the components to adjust spacing, alignment, or visual accents without breaking structure.

---

## Deployment

When you are ready to make your portfolio public, you can deploy it to any Next.js-compatible host (for example, Vercel or Netlify).  
Follow the host’s Next.js deployment guide and build with:

```bash
npm run build
npm start
```

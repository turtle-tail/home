# turtle-tail Home Initial Setup Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Initialize Next.js 14 project with TypeScript, Tailwind CSS, and create a static project showcase site deployable to DigitalOcean App Platform.

**Architecture:** Next.js App Router with static site generation (SSG). Project data managed in TypeScript files for type safety. Responsive card-based grid layout using Tailwind CSS. No backend or database required.

**Tech Stack:** Next.js 14, TypeScript, Tailwind CSS, ESLint, Prettier

---

## Task 1: Initialize Next.js Project

**Files:**
- Create: `package.json` (via create-next-app)
- Create: `tsconfig.json` (via create-next-app)
- Create: `next.config.js`
- Create: `tailwind.config.ts`
- Create: `.eslintrc.json`

**Step 1: Run create-next-app**

```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --no-src-dir --import-alias "@/*"
```

Expected: Prompts answered with:
- TypeScript: Yes
- ESLint: Yes
- Tailwind CSS: Yes
- App Router: Yes
- Import alias: Yes (@/*)

**Step 2: Verify installation**

```bash
ls -la
```

Expected output should include:
- package.json
- tsconfig.json
- next.config.js (or next.config.mjs)
- tailwind.config.ts
- app/
- public/

**Step 3: Install dependencies**

```bash
npm install
```

Expected: Dependencies installed successfully

**Step 4: Configure Next.js for static export**

Modify `next.config.js`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
```

**Step 5: Test build**

```bash
npm run build
```

Expected: Build completes, creates `out/` directory with static files

**Step 6: Commit**

```bash
git add .
git commit -m "feat: initialize Next.js project with TypeScript and Tailwind"
```

---

## Task 2: Setup Project Structure and Types

**Files:**
- Create: `lib/types.ts`
- Create: `content/projects.ts`
- Create: `public/icons/.gitkeep`

**Step 1: Create lib directory and types**

```bash
mkdir -p lib
```

Create `lib/types.ts`:

```typescript
export interface Project {
  id: string;
  title: string;
  description: string;
  url: string;
  icon: string;
  tags: string[];
  order: number;
  featured?: boolean;
  status?: 'active' | 'archived';
}
```

**Step 2: Create content directory with example data**

```bash
mkdir -p content
```

Create `content/projects.ts`:

```typescript
import { Project } from '@/lib/types';

export const projects: Project[] = [
  {
    id: 'example-project',
    title: '예시 프로젝트',
    description: 'Next.js 기반 웹 애플리케이션',
    url: 'https://example.turtle-tail.com',
    icon: '/icons/example.svg',
    tags: ['Web', 'TypeScript'],
    order: 1,
    featured: true,
    status: 'active',
  },
];
```

**Step 3: Create icons directory**

```bash
mkdir -p public/icons
touch public/icons/.gitkeep
```

**Step 4: Verify TypeScript compilation**

```bash
npx tsc --noEmit
```

Expected: No errors

**Step 5: Commit**

```bash
git add lib/ content/ public/icons/
git commit -m "feat: add project data structure and types"
```

---

## Task 3: Create ProjectCard Component

**Files:**
- Create: `components/project-card.tsx`

**Step 1: Create components directory**

```bash
mkdir -p components
```

**Step 2: Create ProjectCard component**

Create `components/project-card.tsx`:

```typescript
import { Project } from '@/lib/types';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-50 transition-colors"
    >
      <div className="flex flex-col gap-4">
        {/* Icon */}
        <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
          <span className="text-2xl">🚀</span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-900">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Featured badge */}
        {project.featured && (
          <div className="text-xs font-medium text-blue-600">
            ⭐ Featured
          </div>
        )}
      </div>
    </a>
  );
}
```

**Step 3: Verify TypeScript compilation**

```bash
npx tsc --noEmit
```

Expected: No errors

**Step 4: Commit**

```bash
git add components/project-card.tsx
git commit -m "feat: add ProjectCard component"
```

---

## Task 4: Create ProjectGrid Component

**Files:**
- Create: `components/project-grid.tsx`

**Step 1: Create ProjectGrid component**

Create `components/project-grid.tsx`:

```typescript
import { Project } from '@/lib/types';
import { ProjectCard } from './project-card';

interface ProjectGridProps {
  projects: Project[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  // Sort by order
  const sortedProjects = [...projects].sort((a, b) => a.order - b.order);

  // Filter active projects only
  const activeProjects = sortedProjects.filter(
    (p) => !p.status || p.status === 'active'
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {activeProjects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
```

**Step 2: Verify TypeScript compilation**

```bash
npx tsc --noEmit
```

Expected: No errors

**Step 3: Commit**

```bash
git add components/project-grid.tsx
git commit -m "feat: add ProjectGrid component"
```

---

## Task 5: Create Header Component

**Files:**
- Create: `components/header.tsx`

**Step 1: Create Header component**

Create `components/header.tsx`:

```typescript
export function Header() {
  return (
    <header className="mb-12 text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        turtle-tail
      </h1>
      <p className="text-lg text-gray-600">
        사이드 프로젝트 모음
      </p>
    </header>
  );
}
```

**Step 2: Verify TypeScript compilation**

```bash
npx tsc --noEmit
```

Expected: No errors

**Step 3: Commit**

```bash
git add components/header.tsx
git commit -m "feat: add Header component"
```

---

## Task 6: Create Main Page

**Files:**
- Modify: `app/page.tsx`
- Modify: `app/globals.css`

**Step 1: Update main page**

Replace `app/page.tsx` contents:

```typescript
import { projects } from '@/content/projects';
import { ProjectGrid } from '@/components/project-grid';
import { Header } from '@/components/header';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <Header />
        <ProjectGrid projects={projects} />
      </div>
    </main>
  );
}
```

**Step 2: Update globals.css**

Replace `app/globals.css` contents:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --background: #fafafa;
  --foreground: #171717;
}

body {
  color: var(--foreground);
  background: var(--background);
  font-family: Arial, Helvetica, sans-serif;
}
```

**Step 3: Test dev server**

```bash
npm run dev
```

Expected: Server starts on http://localhost:3000
Visit in browser: Should see header and one example project card

**Step 4: Stop dev server (Ctrl+C) and commit**

```bash
git add app/page.tsx app/globals.css
git commit -m "feat: implement main page with project showcase"
```

---

## Task 7: Configure Layout and Metadata

**Files:**
- Modify: `app/layout.tsx`
- Create: `app/sitemap.ts`

**Step 1: Update layout with proper metadata**

Replace `app/layout.tsx` contents:

```typescript
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'turtle-tail | 사이드 프로젝트 모음',
  description: '다양한 사이드 프로젝트들을 소개합니다',
  keywords: ['프로젝트', '포트폴리오', 'side project'],
  openGraph: {
    title: 'turtle-tail',
    description: '사이드 프로젝트 모음',
    url: 'https://turtle-tail.com',
    siteName: 'turtle-tail',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'turtle-tail',
    description: '사이드 프로젝트 모음',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
```

**Step 2: Create sitemap**

Create `app/sitemap.ts`:

```typescript
import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://turtle-tail.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
```

**Step 3: Verify TypeScript compilation**

```bash
npx tsc --noEmit
```

Expected: No errors

**Step 4: Test build with sitemap**

```bash
npm run build
```

Expected: Build succeeds, check `out/sitemap.xml` exists

```bash
ls -la out/sitemap.xml
```

Expected: File exists

**Step 5: Commit**

```bash
git add app/layout.tsx app/sitemap.ts
git commit -m "feat: add SEO metadata and sitemap"
```

---

## Task 8: Setup Prettier

**Files:**
- Create: `.prettierrc`
- Create: `.prettierignore`

**Step 1: Install Prettier**

```bash
npm install -D prettier
```

**Step 2: Create Prettier config**

Create `.prettierrc`:

```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "tabWidth": 2,
  "printWidth": 80
}
```

**Step 3: Create Prettier ignore**

Create `.prettierignore`:

```
node_modules
.next
out
.worktrees
```

**Step 4: Add format script to package.json**

Edit `package.json`, add to scripts:

```json
"format": "prettier --write .",
"format:check": "prettier --check ."
```

**Step 5: Format all files**

```bash
npm run format
```

Expected: Files formatted

**Step 6: Commit**

```bash
git add .prettierrc .prettierignore package.json
git commit -m "feat: setup Prettier"
```

---

## Task 9: Create DigitalOcean App Platform Config

**Files:**
- Create: `.do/app.yaml`

**Step 1: Create .do directory**

```bash
mkdir -p .do
```

**Step 2: Create app.yaml**

Create `.do/app.yaml`:

```yaml
name: turtle-tail-home
static_sites:
  - name: home
    github:
      branch: main
      deploy_on_push: true
    build_command: npm run build
    output_dir: out
```

**Step 3: Commit**

```bash
git add .do/
git commit -m "feat: add DigitalOcean App Platform configuration"
```

---

## Task 10: Final Build and Verification

**Files:**
- Create: `README.md`

**Step 1: Create README**

Create `README.md`:

```markdown
# turtle-tail Home

사이드 프로젝트 모음 쇼케이스 사이트

## 기술 스택

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- DigitalOcean App Platform

## 로컬 개발

\`\`\`bash
npm install
npm run dev
\`\`\`

브라우저에서 http://localhost:3000 접속

## 프로젝트 추가하기

1. `content/projects.ts` 파일 열기
2. `projects` 배열에 새 프로젝트 추가
3. 아이콘 파일을 `public/icons/` 디렉토리에 추가
4. 커밋 & 푸시

## 배포

`main` 브랜치에 푸시하면 DigitalOcean App Platform이 자동으로 배포합니다.

## 빌드

\`\`\`bash
npm run build
\`\`\`

정적 파일이 `out/` 디렉토리에 생성됩니다.
```

**Step 2: Run final build test**

```bash
npm run build
```

Expected: Build succeeds with no errors

**Step 3: Verify output directory**

```bash
ls -la out/
```

Expected: Contains index.html, _next/, sitemap.xml

**Step 4: Test static server (optional)**

```bash
npx serve out
```

Visit http://localhost:3000 in browser
Expected: Site loads and displays correctly

**Step 5: Commit**

```bash
git add README.md
git commit -m "docs: add README"
```

---

## Task 11: Run Linter and Type Check

**Files:**
- None (verification step)

**Step 1: Run ESLint**

```bash
npm run lint
```

Expected: No errors

**Step 2: Run TypeScript check**

```bash
npx tsc --noEmit
```

Expected: No errors

**Step 3: Run Prettier check**

```bash
npm run format:check
```

Expected: All files formatted correctly

**Step 4: If any issues, fix and commit**

If errors found:
```bash
npm run format
npm run lint -- --fix
git add .
git commit -m "fix: resolve linting and formatting issues"
```

---

## Completion Checklist

- [ ] Next.js project initialized
- [ ] TypeScript types defined
- [ ] Project data structure created
- [ ] ProjectCard component implemented
- [ ] ProjectGrid component implemented
- [ ] Header component implemented
- [ ] Main page displays projects
- [ ] SEO metadata configured
- [ ] Sitemap generated
- [ ] Static export configured
- [ ] Prettier setup
- [ ] DigitalOcean config created
- [ ] README documented
- [ ] All tests pass (linter, type check, build)
- [ ] Ready to push to main for deployment

## Next Steps After Implementation

1. Push to GitHub main branch
2. Connect repository to DigitalOcean App Platform
3. Configure custom domain (turtle-tail.com)
4. Add real project data to `content/projects.ts`
5. Add project icons to `public/icons/`

## Notes

- This is a static site - no API or database needed
- All project data is in TypeScript files for type safety
- Update projects by editing `content/projects.ts` and pushing
- DigitalOcean App Platform auto-deploys on push to main
- Free tier includes 1GB bandwidth/month

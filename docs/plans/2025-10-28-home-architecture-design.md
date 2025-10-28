# turtle-tail Home 아키텍처 설계

**작성일:** 2025-10-28
**프로젝트:** turtle-tail.com (메인 홈페이지)
**목적:** 사이드 프로젝트 쇼케이스 사이트

## 1. 프로젝트 개요

turtle-tail organization의 메인 홈페이지로, 여러 사이드 프로젝트들을 모아서 보여주는 쇼케이스 사이트입니다.

### 주요 특징

- hypermatic.com 스타일의 프로젝트 갤러리
- 카드 기반 UI로 각 프로젝트 표시
- 프로젝트 클릭 시 외부 링크로 이동 (예: project1.turtle-tail.com)
- 정적 사이트 (SSG)

### 업데이트 빈도

- 월 1-2회 또는 분기 1-2회 (낮음)
- 프로젝트 추가/수정 시 코드 커밋 후 자동 배포

## 2. 아키텍처 결정

### 선택: 프론트엔드 전용 (SSG)

**이유:**

- 단순 쇼케이스 목적 (백엔드 불필요)
- 낮은 업데이트 빈도 (동적 CMS 오버엔지니어링)
- 초고속 로딩 필요
- 유지보수 부담 최소화

**데이터 관리: TypeScript 파일**

- Markdown 대신 TypeScript 선택
- 짧은 설명(1-2줄)만 필요하여 TS의 타입 안정성이 더 유리
- IDE 자동완성 및 빌드 타임 검증

**배포: DigitalOcean App Platform (무료)**

- 정적 사이트 3개까지 무료
- 월 1GB 트래픽 무료 (쇼케이스 사이트로 충분)
- GitHub 연동 자동 배포
- 무료 SSL 인증서
- 향후 사이드 프로젝트들은 별도 Droplet($6/월)에서 관리

## 3. 기술 스택

| 항목           | 기술                      | 이유                 |
| -------------- | ------------------------- | -------------------- |
| **프레임워크** | Next.js 14 (App Router)   | SSG 지원, React 기반 |
| **언어**       | TypeScript                | 타입 안정성          |
| **스타일링**   | Tailwind CSS              | 빠른 개발, 반응형    |
| **린트/포맷**  | ESLint + Prettier         | 코드 품질 유지       |
| **배포**       | DigitalOcean App Platform | 무료, 자동 배포      |
| **도메인**     | turtle-tail.com           | 커스텀 도메인        |

## 4. 폴더 구조

```
home/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # 루트 레이아웃 (메타데이터)
│   ├── page.tsx                 # 홈페이지 (프로젝트 갤러리)
│   ├── globals.css              # 전역 스타일 (Tailwind)
│   └── sitemap.ts               # SEO용 sitemap 자동 생성
├── components/
│   ├── project-card.tsx         # 개별 프로젝트 카드
│   ├── project-grid.tsx         # 카드 그리드 레이아웃
│   └── header.tsx               # 헤더 (로고, 타이틀)
├── content/
│   └── projects.ts              # 프로젝트 데이터 (TypeScript)
├── lib/
│   └── types.ts                 # 공통 타입 정의
├── public/
│   └── icons/                   # 프로젝트 아이콘/이미지
├── docs/
│   └── plans/                   # 설계 문서
├── .do/
│   └── app.yaml                 # App Platform 설정 (선택)
├── next.config.js               # Next.js 설정
├── tailwind.config.ts           # Tailwind 설정
├── tsconfig.json                # TypeScript 설정
└── package.json
```

## 5. 데이터 모델

### Project 인터페이스

```typescript
// lib/types.ts
export interface Project {
  id: string; // URL slug용 (예: 'ai-chatbot')
  title: string; // 프로젝트 제목
  description: string; // 짧은 설명 (1-2줄)
  url: string; // 외부 프로젝트 URL
  icon: string; // 아이콘 경로 (예: '/icons/project.svg')
  tags: string[]; // 카테고리 태그 (예: ['AI', 'Web'])
  order: number; // 표시 순서 (작을수록 먼저)
  featured?: boolean; // 추천 프로젝트 표시 (옵션)
  status?: 'active' | 'archived'; // 프로젝트 상태 (옵션)
}
```

### 프로젝트 데이터 예시

```typescript
// content/projects.ts
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
  // 새 프로젝트 추가 시 여기에 추가
];
```

## 6. 컴포넌트 구조

### ProjectCard

- 단일 프로젝트 카드 표시
- 외부 링크 (`target="_blank"`)
- 아이콘, 제목, 설명, 태그 렌더링

### ProjectGrid

- 프로젝트 배열을 그리드로 렌더링
- `order` 필드로 자동 정렬
- 반응형 레이아웃:
  - 모바일: 1열
  - 태블릿: 2열
  - 데스크톱: 3열

### Header

- 로고, 사이트 제목
- 간단한 소개 문구

### 페이지 구조

```typescript
// app/page.tsx
import { projects } from '@/content/projects';
import { ProjectGrid } from '@/components/project-grid';
import { Header } from '@/components/header';

export default function HomePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <Header />
      <ProjectGrid projects={projects} />
    </main>
  );
}
```

## 7. 배포 설정

### Next.js 설정

```javascript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 정적 HTML 생성 (필수)
  images: {
    unoptimized: true, // 정적 export 시 필수
  },
};

module.exports = nextConfig;
```

### DigitalOcean App Platform 설정

#### 연동 방법

1. App Platform 대시보드에서 "Create App"
2. GitHub 저장소 연결 (turtle-tail/home)
3. `main` 브랜치 선택
4. App Platform이 자동으로 Next.js 감지
5. 빌드 커맨드: `npm run build`
6. Output 디렉토리: `out`
7. 커스텀 도메인 설정: `turtle-tail.com`

#### 자동 배포 플로우

```
로컬 개발
  ↓
content/projects.ts 수정 (프로젝트 추가/수정)
  ↓
git commit & push to main
  ↓
App Platform 자동 감지
  ↓
Next.js 빌드 실행 (npm run build)
  ↓
정적 파일 생성 (out/ 폴더)
  ↓
CDN 배포 & 캐시 갱신
  ↓
turtle-tail.com 업데이트 완료
```

#### .do/app.yaml (선택적)

App Platform이 자동 감지하지만, 명시적 설정도 가능:

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

### 도메인 설정

- App Platform에서 `turtle-tail.com` 추가
- DNS에서 CNAME 레코드 설정 (App Platform 제공)
- 자동 SSL 인증서 발급 (Let's Encrypt)

## 8. SEO 최적화

### 메타데이터 설정

```typescript
// app/layout.tsx
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
```

### Sitemap 자동 생성

```typescript
// app/sitemap.ts
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

### 성능 목표

- Lighthouse 점수: 95+ (모든 항목)
- First Contentful Paint: < 1초
- Tailwind purge로 최소 CSS 크기
- 정적 생성으로 서버 응답 시간 0

## 9. 운영 계획

### 프로젝트 추가 프로세스

1. `content/projects.ts` 파일 열기
2. 새 프로젝트 객체 추가 (타입 체크로 오류 방지)
3. 아이콘 파일을 `public/icons/` 에 추가
4. `git commit -m "Add new project: [프로젝트명]"`
5. `git push origin main`
6. App Platform 자동 배포 (3-5분 소요)

### 비용

- **현재:** $0/월 (무료 티어)
- **트래픽 초과 시:** $0.02/GB (1GB 초과분)
- **예상:** 쇼케이스 사이트라 월 1GB 미만 예상

### 향후 확장

- 현재는 단순 쇼케이스
- 나중에 필요 시:
  - 블로그 섹션 추가 (Markdown 파일)
  - 프로젝트 필터링/검색 기능
  - 다크 모드
  - 애니메이션 효과

## 10. 인프라 전체 구조

```
┌─────────────────────────────────────────┐
│  turtle-tail.com (home)                 │
│  - DigitalOcean App Platform (무료)     │
│  - 정적 사이트 (Next.js SSG)            │
└─────────────────────────────────────────┘
              │
              │ 외부 링크
              ↓
┌─────────────────────────────────────────┐
│  DigitalOcean Droplet ($6/월)           │
│  ├── project1.turtle-tail.com           │
│  ├── project2.turtle-tail.com           │
│  └── project3.turtle-tail.com           │
│  (실제 사이드 프로젝트들)                │
└─────────────────────────────────────────┘
```

**장점:**

- Home은 무료로 운영
- 사이드 프로젝트들은 하나의 Droplet에 통합 관리
- 비용 최적화 및 관리 효율성

## 11. 다음 단계

1. ✅ 설계 완료
2. ⏭️ Next.js 프로젝트 초기 설정
3. ⏭️ 기본 컴포넌트 구현
4. ⏭️ Tailwind 스타일링
5. ⏭️ App Platform 배포
6. ⏭️ 도메인 연결

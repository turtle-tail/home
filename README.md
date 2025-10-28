# turtle-tail Home

사이드 프로젝트 모음 쇼케이스 사이트

## 기술 스택

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- DigitalOcean App Platform

## 로컬 개발

```bash
npm install
npm run dev
```

브라우저에서 http://localhost:3000 접속

## 프로젝트 추가하기

1. `content/projects.ts` 파일 열기
2. `projects` 배열에 새 프로젝트 추가
3. 아이콘 파일을 `public/icons/` 디렉토리에 추가
4. 커밋 & 푸시

## 배포

`main` 브랜치에 푸시하면 DigitalOcean App Platform이 자동으로 배포합니다.

## 빌드

```bash
npm run build
```

정적 파일이 `out/` 디렉토리에 생성됩니다.

### 🛠️ Initial Setup Complete
## [아키텍처 및 구조]
- **프레임워크:** Next.js (Page Router), TypeScript, pnpm 
- **구조:** src + FSD 아키텍처 적용 (src/pages-Auth 통합형, src/shared 분리)
- **절대 경로:** tsconfig.json에 @/shared/*, @/pages/* 등 명시적 절대 경로

## [핵심 라이브러리 통합]
- **스타일:** Tailwind CSS 설치 및 전역 스타일 분리
- **API:** Axios 설치 및 전역 인스턴스 (instance.ts) 정의
- **인증:** 토큰 자동 재발급(401 처리) 및 경쟁 조건(Race Condition) 방지 로직 구현
- **폼 관리:** React Hook Form 설치


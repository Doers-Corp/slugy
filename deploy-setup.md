# 🚀 Slugy 자동 배포 가이드

## ✅ 완료된 작업
- [x] 프로젝트 의존성 설치
- [x] 개발 서버 실행 확인
- [x] 환경변수 목록 정리
- [x] Vercel 배포 진행중...

## 🔗 필요한 서비스별 빠른 링크

### 1. 데이터베이스 (Neon) - 30초 설정
- 🌐 [https://neon.tech](https://neon.tech) → GitHub으로 가입
- ➕ "Create project" → Singapore 리전 선택
- 📋 Connection string 복사

### 2. 캐시 (Upstash) - 1분 설정  
- 🌐 [https://upstash.com](https://upstash.com) → GitHub으로 가입
- 🗄️ "Create Database" → Redis → Singapore 리전
- 🔑 REST URL & TOKEN 복사
- 📨 "QStash" 탭 → API Keys 복사

### 3. 이메일 (Resend) - 30초 설정
- 🌐 [https://resend.com](https://resend.com) → 가입
- 🔑 "API Keys" → "Create API Key" → 복사

### 4. OAuth (GitHub) - 1분 설정
- 🌐 [GitHub Settings](https://github.com/settings/developers)
- ➕ "New OAuth App":
  - Name: `Slugy`
  - Homepage: `https://your-vercel-url`
  - Callback: `https://your-vercel-url/api/auth/callback/github`

### 5. OAuth (Google) - 2분 설정
- 🌐 [Google Cloud Console](https://console.cloud.google.com)
- ➕ 새 프로젝트 → APIs & Services → Credentials
- ➕ OAuth client ID → Web app → Callback URL 추가

## 🔧 환경변수 설정 (Vercel Dashboard)

```bash
# 필수 환경변수들
DATABASE_URL=postgresql://...
UPSTASH_REDIS_REST_URL=https://...
UPSTASH_REDIS_REST_TOKEN=...
RESEND_API_KEY=re_...
GITHUB_CLIENT_ID=...
GITHUB_CLIENT_SECRET=...
BETTER_AUTH_URL=https://your-app.vercel.app/api/auth
NEXT_BASE_URL=https://your-app.vercel.app
```

## 🎯 5분 완료 체크리스트

- [ ] 1. Neon 가입 → DB 생성 → URL 복사
- [ ] 2. Upstash 가입 → Redis + QStash 생성 → 토큰들 복사  
- [ ] 3. Resend 가입 → API Key 생성 → 복사
- [ ] 4. GitHub OAuth 생성 → Client ID/Secret 복사
- [ ] 5. Vercel Dashboard → Environment Variables 설정
- [ ] 6. Vercel에서 Redeploy 버튼 클릭

## 🚨 완료 후
데이터베이스 마이그레이션이 자동 실행됩니다!

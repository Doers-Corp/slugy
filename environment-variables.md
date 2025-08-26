# 🔧 Environment Variables Configuration

이 파일은 Slugy 애플리케이션에 필요한 모든 환경변수들을 설명합니다.

## 🗄️ 필수 변수 (Required)

### 데이터베이스
```bash
DATABASE_URL="postgresql://username:password@host/database?sslmode=require"
```
- **서비스**: [Neon PostgreSQL](https://neon.tech)
- **무료 플랜**: 있음
- **설명**: 메인 데이터베이스 연결 URL

### 캐시
```bash
UPSTASH_REDIS_REST_URL="https://your-redis.upstash.io"
UPSTASH_REDIS_REST_TOKEN="your-token"
```
- **서비스**: [Upstash Redis](https://upstash.com)
- **무료 플랜**: 있음 (10,000 requests/month)
- **설명**: 링크 캐싱 및 세션 저장용

## 🔐 인증 변수 (Vercel에서 자동 설정됨)

```bash
BETTER_AUTH_URL="https://your-app.vercel.app/api/auth"
NEXT_BASE_URL="https://your-app.vercel.app"
EMAIL_VERIFICATION_CALLBACK="https://your-app.vercel.app/dashboard"
```

## 🔑 선택적 변수 (Optional)

### OAuth 소셜 로그인
```bash
# GitHub OAuth
GITHUB_CLIENT_ID="your-github-client-id"
GITHUB_CLIENT_SECRET="your-github-client-secret"

# Google OAuth  
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
```

### 이메일 서비스
```bash
RESEND_API_KEY="your-resend-api-key"
EMAIL_FROM="noreply@yourdomain.com"
```
- **서비스**: [Resend](https://resend.com)
- **무료 플랜**: 3,000 emails/month

### AI 기능
```bash
GEMINI_API_KEY="your-gemini-api-key"
```
- **서비스**: [Google Gemini](https://makersuite.google.com)
- **무료 플랜**: 있음
- **기능**: 스마트 슬러그 생성

## 🚀 빠른 배포 가이드

1. **"Deploy to Vercel" 버튼 클릭**
2. **필수 서비스 설정**:
   - [Neon](https://neon.tech)에서 PostgreSQL DB 생성
   - [Upstash](https://upstash.com)에서 Redis 생성
3. **환경변수 입력**:
   - Vercel 대시보드에서 환경변수 추가
   - 또는 배포 과정에서 입력
4. **선택적 서비스 연결** (필요시):
   - OAuth 설정
   - 이메일 서비스
   - AI 기능

## 📝 개발 환경 설정

로컬 개발을 위해서는 `.env.local` 파일을 생성하고 다음 필수 변수들을 설정하세요:

```bash
# 필수
DATABASE_URL="your-neon-database-url"
UPSTASH_REDIS_REST_URL="your-upstash-url"
UPSTASH_REDIS_REST_TOKEN="your-upstash-token"

# 로컬 개발용
BETTER_AUTH_URL="http://localhost:3000/api/auth"
NEXT_BASE_URL="http://localhost:3000"
NEXT_PUBLIC_ROOT_DOMAIN="localhost:3000"
NODE_ENV="development"
```

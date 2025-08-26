<div align="center">

![Slugy Banner](https://opengraph.b-cdn.net/production/images/28751e40-32c9-4141-a560-f8f6d64ce48f.png?token=RhO23rFP1rWLpGoo_LT0lZzEA7hT_he8l60oDB6bCV0&height=630&width=1200&expires=33289007293)

<h2> Slugy </h2>

**Slugy** is a fast, secure, and open-source link management tool.  
Easily shorten URLs, generate QR codes, track performance, and share everything from one place.

</div>

---

## 🌟 Features

- 🔗 **Link Shortening**  
    Create branded, concise links for effective sharing.

- 📱 **QR Code Generation**  
    Instantly generate QR codes for easy access and scanning.

- 📊 **Analytics Dashboard**  
    Track link performance with detailed click insights.

- 🌐 **Bio Links**  
    Share all your links from one personalized page.

---

## 🚀 Quick Deploy

Deploy your own Slugy instance with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FDoers-Corp%2Fslugy&project-name=my-slugy-app&repository-name=my-slugy-app)

### 🎯 2분 완성 배포 (최신 Vercel Integration)

**1단계**: Deploy 버튼 클릭 → 앱 배포 (30초)

**2단계**: Vercel 대시보드에서 Storage 추가 (1분):
1. 프로젝트 대시보드 → **"Storage"** 탭 
2. **"Create Database"** 클릭  
3. **"Neon"** 선택 → 데이터베이스 생성
4. **"Create Database"** → **"Upstash Redis"** 선택
5. ✅ **완료!** 환경변수 자동 연결됨

**추가 설정 필요 없음!** Storage 추가하면 바로 작동합니다.

### 🛠️ 대안: Vercel 내장 서비스 (더 간단)

Integration 대신 Vercel 내장 서비스 사용:
1. **Storage** 탭 → **Create Database** → **Postgres** (무료 512MB)  
2. **Storage** 탭 → **Create Database** → **KV** (무료 30MB)
3. ✅ 즉시 사용 가능!

### 🔧 선택적 기능 추가

배포 후 원하는 기능 추가:
- **OAuth 로그인**: GitHub, Google 
- **이메일 알림**: Resend
- **AI 슬러그 생성**: Google Gemini
- **파일 업로드**: AWS S3
- **결제 시스템**: Polar

### Environment Variables (자동 설정됨):

```env
# ✅ Neon Integration에서 자동 생성
DATABASE_URL="자동생성됨"
NEON_DATABASE_URL="자동생성됨"

# ✅ Upstash Integration에서 자동 생성  
UPSTASH_REDIS_REST_URL="자동생성됨"
UPSTASH_REDIS_REST_TOKEN="자동생성됨"

# ✅ Vercel에서 자동 생성
BETTER_AUTH_URL="https://your-app.vercel.app/api/auth"
NEXT_BASE_URL="https://your-app.vercel.app"
VERCEL_URL="your-app.vercel.app"

# 🔧 선택적으로 추가할 환경변수들
GITHUB_CLIENT_ID=""
GITHUB_CLIENT_SECRET=""
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""
RESEND_API_KEY=""
GEMINI_API_KEY=""
```

---

## 🛠 Tech Stack

| Tool                                            | Role                     |
| ----------------------------------------------- | ------------------------ |
| [`Next.js`](https://nextjs.org)                 | Frontend Framework       |
| [`TypeScript`](https://www.typescriptlang.org)  | Programming Language     |
| [`Tailwind CSS`](https://tailwindcss.com)       | Styling                  |
| [`Better-Auth`](https://www.better-auth.com/)   | Authentication           |
| [`Prisma`](https://www.prisma.io)               | ORM                      |
| [`Neon`](https://neon.tech)                     | Database                 |
| [`Upstash`](https://upstash.com/)               | Caching                  |
| [`Recharts`](https://recharts.org)              | Analytics Visualization  |
| [`Resend`](https://resend.com)                  | Email Notifications      |
| [`Vercel`](https://vercel.com)                  | Hosting & Deployment     |

---

## 📄 License

Slugy is open-source under the **MIT License**. See [LICENSE](./LICENSE) for more.

---

## 🔗 Connect

- [Twitter](https://x.com/slugydotco)
- [Sandip (Owner)](https://x.com/sandip_dev_07)

---

## 💖 Sponsor

[![GitHub Sponsor](https://img.shields.io/github/sponsors/slugylink?label=Sponsor&logo=GitHub&color=ff69b4)](https://github.com/sponsors/slugylink)

---

> Built with 🐌 by the Slugy.

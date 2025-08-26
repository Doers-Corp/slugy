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

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fslugylink%2Fslugy&env=DATABASE_URL,UPSTASH_REDIS_REST_URL,UPSTASH_REDIS_REST_TOKEN&envDescription=Required%20environment%20variables%20for%20Slugy&envLink=https%3A%2F%2Fgithub.com%2Fslugylink%2Fslugy%23environment-variables&project-name=my-slugy-app&repository-name=my-slugy-app)

### 🎯 진짜 원클릭 배포 (Vercel 내장 서비스 사용)

배포 후 Vercel 대시보드에서 **2분 설정**:

1. **Storage 탭** → **Create Database** → **Postgres** (무료)
2. **Storage 탭** → **Create Database** → **KV** (무료) 
3. 환경변수 자동 연결 완료! ✅

### 대안: 외부 서비스 사용

외부 서비스를 원한다면:
- **Database**: [Neon PostgreSQL](https://neon.tech) - 더 많은 무료 용량
- **Cache**: [Upstash Redis](https://upstash.com) - 더 고급 기능

### Environment Variables (자동 설정됨):

Vercel 내장 서비스 사용시 자동으로 설정되는 변수들:

```env
# ✅ Vercel에서 자동 생성
POSTGRES_URL="자동생성됨"
POSTGRES_PRISMA_URL="자동생성됨" 
KV_URL="자동생성됨"
KV_REST_API_URL="자동생성됨"
KV_REST_API_TOKEN="자동생성됨"
BETTER_AUTH_URL="https://your-app.vercel.app/api/auth"
NEXT_BASE_URL="https://your-app.vercel.app"

# 🔧 선택적으로 추가 (OAuth, 이메일, AI 등)
GITHUB_CLIENT_ID="optional"
GITHUB_CLIENT_SECRET="optional"
RESEND_API_KEY="optional"
GEMINI_API_KEY="optional"
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

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

### Required Services for Full Functionality:

1. **Database**: [Neon PostgreSQL](https://neon.tech) - Free tier available
2. **Cache**: [Upstash Redis](https://upstash.com) - Free tier available  
3. **Email** (Optional): [Resend](https://resend.com) - For transactional emails
4. **OAuth** (Optional): GitHub & Google - For social authentication
5. **AI Features** (Optional): [Google Gemini](https://makersuite.google.com) - For smart slug generation

### Environment Variables Setup:

After deployment, configure these environment variables in your Vercel dashboard:

```env
# Required
DATABASE_URL="your-neon-postgres-url"
UPSTASH_REDIS_REST_URL="your-upstash-redis-url" 
UPSTASH_REDIS_REST_TOKEN="your-upstash-redis-token"

# Auto-configured by Vercel
BETTER_AUTH_URL="https://your-app.vercel.app/api/auth"
NEXT_BASE_URL="https://your-app.vercel.app"

# Optional - OAuth (for social login)
GITHUB_CLIENT_ID="your-github-client-id"
GITHUB_CLIENT_SECRET="your-github-client-secret"
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# Optional - Email service  
RESEND_API_KEY="your-resend-api-key"
EMAIL_FROM="noreply@yourdomain.com"

# Optional - AI features
GEMINI_API_KEY="your-gemini-api-key"
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

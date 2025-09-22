# Security & Secrets — NURA

This file lists recommended practices to manage secrets and enable HTTPS for the project.

## 1) Secrets management

- Do NOT commit `.env` files or any credentials to git.
- Add `.env` to `.gitignore` (already present).
- Keep a `.env.example` with placeholders for new developers (already present).

CI / GitHub Actions
- Store secrets in GitHub: Settings → Secrets → Actions (or organization-level secrets).
- Reference secrets in workflows as `${{ secrets.MY_SECRET }}`.
- Avoid printing secrets to logs. Never use `echo ${{ secrets.MY_SECRET }}`.

Hosting providers
- Use provider secret managers (Render, Vercel, Cloud Run, Heroku) to set env vars for the deployed service.
- Rotate keys periodically and remove unused keys.

Development
- For local dev, use `.env` with test keys only. Mark production keys as confidential.

## 2) HTTPS and Cloudflare (recommended)

- Add site to Cloudflare and change registrar nameservers to Cloudflare.
- Configure SSL/TLS to "Full (strict)" with origin cert if possible.
- Enable Always Use HTTPS and Automatic HTTPS Rewrites.
- Use Cloudflare Origin CA certificates for backend to ensure encrypted traffic between Cloudflare and origin.

## 3) Example: Adding secrets to GitHub Actions

1. Go to repository Settings → Secrets and variables → Actions → New repository secret.
2. Add `STRIPE_SECRET`, `DATABASE_URL`, `API_KEY`, etc.
3. In workflow use:

```yaml
- name: Build
  env:
    STRIPE_SECRET: ${{ secrets.STRIPE_SECRET }}
  run: pnpm run build
```

## 4) Extra recommendations

- Use a secrets manager (HashiCorp Vault, AWS Secrets Manager) for larger projects.
- Enable 2FA for all accounts and administrative access.
- Set up a monitoring/alerting pipeline for suspicious activity.

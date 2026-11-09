# Architecture

Опис реалізованих підсистем ядра LiveState. Загальна архітектура проєкту: [../architecture.md](../architecture.md).

## Документи

- [auth-flow/](auth-flow/README.md) — авторизація (email + пароль + magic link + OAuth, профіль, account deletion, brute force)
- [payments-flow/](payments-flow/README.md) — платіжна система (Stripe subscriptions + one-off credit packs, webhooks, billing state)

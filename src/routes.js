export const routes = [
    { path: '/', component: App, statuses: { } },
    { path: '/auth', component: Auth, statuses: { auth: false } },
    { path: '/settings', component: Settings, statuses: { auth: true } },
]
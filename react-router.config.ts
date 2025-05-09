import type { Config } from "@react-router/dev/config";

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: true,

  async prerender() {
    return [
      "auth/login",
      "auth/register",
      "auth/testing",
      // 'auth/testing-args/:id/:name/:age',
    ];
  },
} satisfies Config;

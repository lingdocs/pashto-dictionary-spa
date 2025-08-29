import type { AT } from "@lingdocs/auth-shared";

export function wordlistEnabled(user: AT.LingdocsUser | undefined): boolean {
  if (!user) return false;
  return user.level !== "basic";
}


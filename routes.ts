export const publicRoutes = [
    ""
];

export const authRoutes = [
    "/auth/login",
    "/auth/register",
]

export const apiAuthPrefix = "/api/auth";

export const DEFAULT_LOGIN_REDIRECT = "/settings"

export async function GET() {
    return Response.json({ message: 'Hello World' })
  }
  
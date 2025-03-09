import NextAuth from "next-auth"
import authConfig from "@/auth-config"
import {
    DEFAULT_LOGIN_REDIRECT,
    apiAuthPrefix,
    authRoutes,
    publicRoutes
} from "@/routes"

 
export const { auth: middleware } = NextAuth(authConfig);
console.log(NextAuth)
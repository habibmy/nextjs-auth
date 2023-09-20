import NextAuth from "next-auth/next";
import prisma from "../../../libs/prismadb";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider  from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "XXXXXXXXXXXXXXXXXX" },
                password: { label: "Password", type: "password" },
                username: { label: "Username", type: "text" },
            },
            async authorize(credentials) {
                const user = {id : 1, name: "J Smith", email: "XXXXXXXXXXXXXXXXXX"}
                return user
            }
        }),
    ],
    secret: process.env.SECRET,
    session: {
        strategy: "jwt",
    },
    debug: process.env.NODE_ENV === "development",
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST}
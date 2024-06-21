import { User } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProviders from "next-auth/providers/credentials";
import { prisma } from "@/src/lib/prisma";

export const dynamic = "force-dynamic"

const authOptions = {
    providers: [
        CredentialsProviders({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                const userFound = await prisma.admin.findUnique({
                    where: {
                        username: credentials?.username
                    }
                })
                if (!userFound) throw new Error("Usuario no encontrado")

                return {
                    id: userFound.id.toString(),
                    username: userFound.username,
                } as User;
            },
        }),
    ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
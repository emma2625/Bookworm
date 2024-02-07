import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { FirestoreAdapter } from "@auth/firebase-adapter"
import { cert } from "firebase-admin/app"

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT,
            clientSecret: process.env.GOOGLE_SECRET
        }),

        GitHubProvider({
            clientId: "Test",
            clientSecret: "Test"
        })
    ],
    
    pages: {
        signIn: "/signin"
    }
}
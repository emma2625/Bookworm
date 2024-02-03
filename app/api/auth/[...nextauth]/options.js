import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

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
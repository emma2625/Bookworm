import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { FirestoreAdapter } from "@auth/firebase-adapter";
import { cert } from "firebase-admin/app";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT,
      clientSecret: process.env.GOOGLE_SECRET,
      profile(profile){
        return {
          ...profile,
          id: profile.sub,
          address: null,
          phoneNumber: null,
          country: null,
          bio: null
        }
      }
    }),

    GitHubProvider({
      clientId: "Test",
      clientSecret: "Test",
    }),
  ],
  callbacks: {
    async session({ session, user, token }) {
      return  {
        ...session,
        user,
        token
      }
    },
  },

  pages: {
    signIn: "/signin",
  },
  adapter: FirestoreAdapter({
    credential: cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    }),
  }),
};

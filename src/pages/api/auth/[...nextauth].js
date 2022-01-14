import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
            // profile(profile) {
            //     return {
            //         // Return all the profile information you need.
            //         // The only truly required field is `id`
            //         // to be able identify the account when added to a database
            //         id: profile.id,
            //         name: profile.display_name,
            //         email: profile.email,
            //         image: profile.images?.[0]?.url
            //     }
            // },
        })
    ],
})
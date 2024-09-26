import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
//   callbacks: {
//     async session({ session, token }) {
//       console.log("callbacks session")
//     //   session.user.id = token.sub;
//         return session;
//     },
//   },
});

export { handler as GET, handler as POST };
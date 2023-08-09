import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
let infoUser = { phone: "" };
export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},

      async authorize(credentials, req) {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)
        let info = { phone_number: credentials.phone };
        console.log("credentials " + JSON.stringify(info));
        const res = await fetch("http:143.110.235.25/api/account/login", {
          method: "POST",
          body: JSON.stringify(info),
          headers: { "Content-Type": "application/json" },
        });
        const user = await res.json();

        // If no error and we have user data, return it
        if (res.ok && user) {
          console.log(user);
          infoUser.phone = credentials.phone;
          console.log("user " + infoUser);
          return user;
        }
        // Return null if user data could not be retrieved
        console.log("error");
        return null;
      },
    }),
  ],
  callbacks: {
    session: {
      user: {
        name: "",
        email: "",
        image: "",
        phone: "",
      },
      expires: Date, // This is the expiry of the session, not any of the tokens within the session
    },
    async jwt({ token, account, profile }) {
      // Persist the OAuth access_token and or the user id to the token right after signin

      return token;
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token and user id from a provider.
      session.user.phone = infoUser.phone;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

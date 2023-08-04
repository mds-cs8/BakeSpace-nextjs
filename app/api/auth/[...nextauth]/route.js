import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        national_id: {
          label: "national_id",
          type: "text",
          placeholder: "jsmith",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const { national_id, password } = credentials;
        const recredentials = {
          national_id: credentials.national_id,
          password: credentials.password,
        };
        console.log("national_id :" + national_id);
        console.log("password :" + password);
        // perform you login logic
        // find out user from db
        const res = await fetch("http:206.189.230.0/api/account/login", {
          method: "post",
          body: JSON.stringify(recredentials),
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer DUitB6KJadQEmDdTUoIa6fSifiON8uKR8NUbeuIb",
          },
        });

        const user = await res.json();
        console.log(JSON.stringify(recredentials));
        console.log(JSON.stringify(user));
        // if everything is fine
        return {
          id: JSON.stringify(user.token),
          name: "John Doe",
          email: JSON.stringify(user.token),
          role: "admin",
        };
      },
    }),
  ],
  callbacks: {
    jwt(params) {
      // update token
      if (params.user?.role) {
        params.token.role = params.user.role;
      }
      // return final_token
      return params.token;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

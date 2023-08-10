import Head from "next/head";
import { useSession } from "next-auth/react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "@/firebse/firebase.auth";
const HomePage = () => {
  const { data: session } = useSession();
  const [user, loading, error] = useAuthState(auth);
  return (
    <div>
      <Head>
        <title>Next Auth</title>

      </Head>
      <h1 style={{ textAlign: "center", marginTop: "10%" }}>{session ? `Welcome ${session.user.name}` : "You are not logged in"}</h1>
      <h1 style={{ textAlign: "center", marginTop: "10%" }}>{user ? `Welcome ${user.email}` : "You are not logged in"}</h1>
    </div>
  );
};

export default HomePage;

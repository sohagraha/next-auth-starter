import Head from "next/head";
import { useSession } from "next-auth/react";
const HomePage = () => {
  const { data: session } = useSession();
  return (
    <div>
      <Head>
        <title>Next Auth</title>

      </Head>
      <h1 style={{ textAlign: "center", marginTop: "10%" }}>{session ? `Welcome ${session.user.name}` : "You are not logged in"}</h1>
    </div>
  );
};

export default HomePage;

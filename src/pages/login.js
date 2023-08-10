import auth from "@/firebse/firebase.auth";
import styles from "@/styles/Login.module.css";
import { GithubOutlined, GoogleOutlined } from "@ant-design/icons";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { signIn } from "next-auth/react";
import Head from "next/head";
import { useForm } from "react-hook-form";
const LoginPage = () => {
  const { register, handleSubmit } = useForm();
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  console.log(user, loading, error)

  const onSubmit = (data) => {
    createUserWithEmailAndPassword(data.email, data.password)
  }

  return (
    <div>
      <Head>
        <title>Next Login</title>
      </Head>
      <div className={styles.form}>
        <h3>LOGIN</h3>
        <div className={styles.social_icons}>
          <GoogleOutlined onClick={
            () => {
              signIn('google', { callbackUrl: 'http://localhost:3000/' })
            }
          } />
          <GithubOutlined onClick={
            () => {
              signIn('github', { callbackUrl: 'http://localhost:3000/' })
            }
          } />
        </div>
        <hr />
        <form onSubmit={
          handleSubmit(onSubmit)
        }>
          <label htmlFor="">Your Email</label>
          <input type="email" {...register("email", { required: true }
          )} />
          <label htmlFor="">Your Password</label>
          <input type="password" {...register("password", { required: true })} />
          <button
            type="submit"
          >Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

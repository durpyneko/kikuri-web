// Next
import Head from "next/head";

export default function Header({ header }: { header: string }) {
  const pageTitle = header ? `Kikuri web! | ${header}` : "Kikuri web!";
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta
          name="description"
          content="Hey, I'm durpyneko. Welcome to my site!"
        />
        <meta name="description" content="website for / of Hiroi Kikuri" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
}

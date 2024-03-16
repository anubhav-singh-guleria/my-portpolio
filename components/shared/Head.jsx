import Head from "next/head";

export const SeoMetadata = ({ title, desc }) => {
  return (
      <Head>
        <title>{ title || "Anubhav Singh Guleria"}</title>
        <meta
          name="description"
          content={desc || ""}
        />
      </Head>
  )
}

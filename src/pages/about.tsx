import Head from "next/head";

const AboutPage = () => {
  return (
    <div>
    <Head>
      <title>About</title>

    </Head>
    <div className="flex flex-col items-center text-xl">
      <h2 className="text-2xl p-4 font-mono">About</h2>
      <p className="max-w-xl font-mono text-justify">
      Around a year ago, a <a
            className="text-blue-200 underline"
            href=""
          >
            pioneer
          </a> finally settled the age-old question of which Pokemon are the roundest (and which are the least round), laying the groundwork for more complex yet equally pressing questions that continue to puzzle even the brightest minds. <br/><br/><br/>
    This website is a tribute to that pioneer and seeks to answer the question of which Pokemon are the cutest and which ones are not so adorable.

      </p>
      <div className="m-8" />
      <p className="max-w-xl font-mono text-justify">
       --Low-effort adaptation by  <a
            className="text-blue-200 underline"
            href="https://marcoramirez.netlify.app"
          >
            Marco Ramirez
          </a>
      </p>
      
    </div>
    </div>
  );
};

export default AboutPage;

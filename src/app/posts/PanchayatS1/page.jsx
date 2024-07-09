// PanchayatS01.js

import Head from "next/head";
import '../../globals.css';

const metadata = {
  title: "Download Panchayat Season 1 in Free 1024p - Watch Online",
  description: "Explore everything about Panchayat Season 1: cast, plot, download links, and more. Get ready to enjoy the rural comedy-drama series.",
};

const PanchayatS01 = () => {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col lg:flex-row justify-center">
        <div className="lg:w-1/4 p-4 hidden lg:block">
          {/* Left Sidebar for Ads */}
          <div className="sticky top-0">
            {/* Add your ad component or content here */}
          </div>
        </div>

        <div className="w-full lg:w-1/2 p-4">
          <h1 className="text-3xl font-bold text-center mb-8">
            Download Panchayat Season 1 in Free 1024p
          </h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="text-lg leading-relaxed">
              "Panchayat," the heartwarming Indian comedy-drama series, takes viewers on a delightful journey through rural India. Follow the story of Abhishek Tripathi, an urban youth who finds himself as the secretary of a Panchayat office in a remote village. Season 1 of "Panchayat" introduces us to the quirky characters, humorous situations, and the challenges Abhishek faces as he adapts to village life.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Download Links</h2>
            <p className="text-lg leading-relaxed">
              Below are the download links for "Panchayat Season 1" in 1024p quality:
              <button className="bg-black border-2 border-white shadow-sm  hover:shadow-md mt-1 text-yellow-300 px-2 py-1 rounded-md hover:shadow-red-300">Download Panchayat s1</button>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Cast and Characters</h2>
            <p className="text-lg leading-relaxed">
              Meet the main characters of "Panchayat" Season 1:
              {/* Add cast details */}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Plot Overview</h2>
            <p className="text-lg leading-relaxed">
              Dive into the storyline of "Panchayat" Season 1:
              <br />
              {/* Add detailed plot overview */}
              Abhishek's journey from city life to rural challenges, the village dynamics, and the humorous incidents that unfold.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
            <p className="text-lg leading-relaxed">
              Experience the charm of "Panchayat" Season 1 with its blend of humor, drama, and rural authenticity. Download and enjoy the series in high-quality 1024p resolution, exploring the unique perspectives and delightful moments that make this series a must-watch.
            </p>
          </section>
        </div>

        <div className="lg:w-1/4 p-4 hidden lg:block">
          {/* Right Sidebar for Ads */}
          <div className="sticky top-0">
            {/* Add your ad component or content here */}
          </div>
        </div>
      </div>


    </>
  );
};

export default PanchayatS01;

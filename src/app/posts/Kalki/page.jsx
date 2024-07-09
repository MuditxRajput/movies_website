// KalkiMovie.js

import Head from "next/head";
import '../../globals.css';

const metadata = {
  title: "Download Kalki Movie in Free 1080p - Watch Online",
  description: "Explore everything about Kalki: cast, plot, download links, and more. Get ready to enjoy the action-packed thriller.",
};

const KalkiMovie = () => {
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
            Download Kalki 2898 AD  Movie in Free 1080p
          </h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="text-lg leading-relaxed">
              "Kalki 2898 AD," an action-packed Indian thriller, takes the audience on a thrilling ride through intense drama and suspense. Follow the story of a fearless police officer who takes on the criminal underworld. The movie is packed with high-octane action sequences and gripping narrative twists.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Download Links</h2>
            <p className="text-lg leading-relaxed">
              Below are the download links for "Kalki" in 1080p quality:<br></br>
              <button className="bg-black border-2 border-white shadow-sm hover:shadow-md mt-1 text-yellow-300 px-2 py-1 rounded-md hover:shadow-red-300">Download Kalki movie free</button>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Cast and Characters</h2>
            <p className="text-lg leading-relaxed">
              Meet the main characters of "Kalki":
              {/* Add cast details */}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Plot Overview</h2>
            <p className="text-lg leading-relaxed">
              Dive into the storyline of "Kalki":
              <br />
              {/* Add detailed plot overview */}
              Follow the journey of the daring police officer, the challenges he faces, and the thrilling encounters with the criminal elements.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
            <p className="text-lg leading-relaxed">
              Experience the intensity of "Kalki" with its blend of action, suspense, and drama. Download and enjoy the movie in high-quality 1080p resolution, exploring the riveting storyline and edge-of-the-seat moments that make this film a must-watch.
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

export default KalkiMovie;

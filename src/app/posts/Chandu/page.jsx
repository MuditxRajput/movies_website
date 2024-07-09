import Head from "next/head";
import '../../globals.css';

const metadata = {
  title: "Download Chandu Champion Movie in Free 1080p - Watch Online",
  description: "Explore everything about Chandu Champion movie: cast, plot, download links, and more. Get ready to enjoy this action-packed movie.",
};

const ChanduChampion = () => {
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
            Download Chandu Champion Movie in Free 1080p
          </h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="text-lg leading-relaxed">
              "Chandu Champion," the latest action-packed Indian movie, takes audiences on an exhilarating journey through suspense and drama. Follow the story of Chandu, a young fighter who rises through the ranks to become a champion in the world of underground fighting. This movie showcases thrilling action sequences, intense drama, and a gripping storyline that will keep you on the edge of your seat.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Download Links</h2>
            <p className="text-lg leading-relaxed">
              Below are the download links for "Chandu Champion" movie in 1080p quality:
              <button className="bg-black border-2 border-white shadow-sm hover:shadow-md mt-1 text-yellow-300 px-2 py-1 rounded-md hover:shadow-red-300">Download Chandu Champion</button>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Cast and Characters</h2>
            <p className="text-lg leading-relaxed">
              Meet the main characters of "Chandu Champion" movie:
              {/* Add cast details */}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Plot Overview</h2>
            <p className="text-lg leading-relaxed">
              Dive into the storyline of "Chandu Champion" movie:
              <br />
              {/* Add detailed plot overview */}
              Chandu's journey from obscurity to becoming a renowned fighter, the challenges he faces, and the sacrifices he makes along the way.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
            <p className="text-lg leading-relaxed">
              Experience the excitement of "Chandu Champion" movie with its adrenaline-pumping action, compelling drama, and memorable characters. Download and enjoy the movie in high-quality 1080p resolution, immersing yourself in the thrilling world of underground fighting and triumph. Don't miss out on this must-watch movie that promises entertainment and excitement in every scene.
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

export default ChanduChampion;

import { Suspense,useState } from 'react';
import Globe from 'react-globe.gl';
import Me from '../components/Me';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader.jsx';
import AnimatedMe from '../components/AimtedMe.jsx';
import { OrbitControls } from '@react-three/drei';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const [hasDownloaded, setHasDownloaded] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('talbi.marouane@outlook.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };
  
  const handleDownload = () => {
    setHasDownloaded(true);
    // Pour télécharger le fichier
    const link = document.createElement("a");
    link.href = "assets/cv/cv.pdf"; // Chemin vers ton fichier CV
    link.download = "Marouane_Talbi_CV.pdf"; // Nom du fichier téléchargé
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };



  const images = [
    'symfony', 'react', 'vuedotjs', 'nextdotjs', 'nestjs', 'angular', 'amazonwebservices', 'tailwindcss', 'postgresql', 'javascript', 'docker', 'graphql', 'php', 'jest',
    'css3', 'flutter', 'sass', 'jira', 'postman',
    'git', 'gitlab','mongodb', 'mysql','github'
  ]

  return (
    <section className="c-space  py-10 " id="about" >
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full p-10">

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 48.8566, lng: 2.3522, text: 'Paris, France', color: 'white', size: 15 }]}
              />
            </div>
            <div>
              <p className="grid-headtext">Location</p>
              <p className="grid-subtext">Je suis basé à Paris, en France, et je suis ouvert au travail à distance à l'échelle mondiale.</p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/e.jpg" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain rounded" />


            <div>
              <p className="grid-headtext">Ma Passion pour le code</p>
              <p className="grid-subtext">
              J'adore résoudre des problèmes et créer des choses à travers le code. La programmation n'est pas seulement ma profession, c'est ma passion. J'aime explorer de nouvelles technologies et améliorer constamment mes compétences.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-3 flex flex-col items-center justify-center space-y-4 border border-black-300 rounded ">

          <div className="flex flex-col items-center w-full space-y-4">
            <img
              src="assets/cv.jpg"
              alt="grid-4"
              className="w-64 h-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top rounded-md"
            />

            <div className="space-y-2 text-center">
              <p className="grid-subtext text-lg font-semibold text-gray-800">Cv</p>
              <div className="copy-container flex items-center gap-2 cursor-pointer" onClick={handleDownload}>
                <img src="assets/download.svg" alt="copy" className="w-10 h-10" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-blue-600">
                  Télécharger
                </p>
              </div>
            </div>
          </div>
        </div>



        <div className="xl:col-span-1 xl:row-span-3 flex items-center justify-between border border-black-300  rounded">
          <div className="flex flex-col items-center w-full space-y-4 ">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />
            <div className="space-y-2 text-center">
              <p className="grid-subtext text-lg font-semibold text-gray-800">Contact me</p>
              <div className="copy-container flex items-center gap-2 cursor-pointer" onClick={handleCopy}>
              <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  talbi.marouane@outlook.com
                </p>
              </div>
            </div>
          </div>
        </div>



        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container flex justify-between h-full ">

            <div className="grid xl:grid-rows-3 grid-rows-6 grid-flow-col gap-4 flex justify-center w-full ">
              {
                images.map((img) => (
                  <div className='col-span-2 xl:w-[120px]  w-[60px]  bg-white  rounded-sm xl:p-4 p-2 '>
                    <img src={`assets/technos/${img}.svg`} alt="grid-3" className='w-full'   />
                  </div>

                ))
              }
            </div>

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
              Je me spécialise dans une variété de langages, frameworks et outils qui me permettent de développer des applications robustes et évolutives.
              </p>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default About;

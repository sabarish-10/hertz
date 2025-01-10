import fluent from "../assets/fluent_design-ideas-24-filled.svg"
import la from "../assets/la_connectdevelop.svg"
import nrk from "../assets/nrk_latest-news.svg"
import uil from "../assets/uil_feedback.svg"
import textilesimageGrp from "../assets/textilesPhotoGrp.svg"
import image from "../assets/ashokTextilesImg.svg"
import flow from "../assets/Flow.svg"
function AshokTextiles() {
  const buttons = [
    { label: "Design", icon: fluent },
    { label: "Development", icon: la },
    { label: "Testing", icon: nrk },
    { label: "Feedback", icon: uil },
  ];
  return (
    <section>
      <div className="bg-black text-white flex flex-col sm:flex-row items-center py-2">
        <h1 className="text-[120px] sm:text-[200px] md:text-[300px] font-bold leading-[150px] sm:leading-[250px] md:leading-[450px] text-bigText">
          A
        </h1>
        <span className="text-[40px] sm:text-[50px] md:text-[70px] font-bold leading-[50px] sm:leading-[75px] md:leading-[105px] ml-0 sm:ml-[-20px] md:ml-[-40px] text-center mt-5">
          <span className="text-lightOrange">A</span>shok Textiles - Project
        </span>
      </div>

      <div className="bg-black flex lg:ms-96 justify-center text-white  py-8 px-4">
        <div className="flex justify-end items-center gap-8 flex-wrap">
          {buttons.map((button, index) => (
            <button
              key={index}
              className="flex items-center  gap-4 space-x-3 px-4 py-3 border-2 border-orange-500 rounded-tr-2xl hover:bg-orange-500 hover:text-black transition"
            >
              <img className="text-lg" src={button.icon}></img>
              <span className="text-base font-medium">{button.label}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center  bg-black px-5 ">
        <img src={textilesimageGrp}></img>
      </div>
      <div className=" my-20 ">
        <img className="w-screen" src={image}></img>
      </div>
      <div className="p-10 border border-dashed border-orange-500 mx-8  ">
        <p className="text-orange-500 md:text-2xl text-xl text-3xl">Ashok Textiles (Web and App)</p>
        <p className="text-lg md:text-xl my-3">Streamline textile management with Ashok Textiles. Our web and mobile applications offer inventory tracking, order management, and seamless customer engagement tools, ensuring efficiency across every step of the textile business process.</p>
      </div>
      <div className=" flex  my-2 justify-center items-center">
        <img src={flow} />
      </div>


    </section>
  );
}

export default AshokTextiles;

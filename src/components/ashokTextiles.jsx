import A from "../assets/A.svg"
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
        { label: "Development", icon:la },
        { label: "Testing", icon: nrk },
        { label: "Feedback", icon: uil},
      ];
  return (
    <section>
      <div className="text-center">
        <h1 className="text-xl tracking-wider md:text-6xl lg:text-7xl font-bold flex  items-center">
          <span className="text-brown-700 text-[7rem] md:text-[10rem] font-extrabold"><img src={A}></img></span>
          <span className="ml-2 absolute  left-44 md:left-52">
            <span className="text-orange-500">Ashok Textiles</span> - Project
          </span>
        </h1>
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
<div className="flex items-center justify-center  bg-white  my-10 lg:my-20">
    <img className="md:ms-10 ms-6 lg:ms-20"  src={textilesimageGrp}></img>
</div>
<div className=" my-20 ">
    <img className="w-screen" src={image}></img>
</div>
<div className="p-10 border border-dashed border-orange-500 mx-8  ">
  <p className="text-orange-500 md:text-2xl text-xl text-3xl">Ashok Textiles (Web and App)</p>
  <p className="text-lg md:text-xl my-3">Streamline textile management with Ashok Textiles. Our web and mobile applications offer inventory tracking, order management, and seamless customer engagement tools, ensuring efficiency across every step of the textile business process.</p>
</div>
      <div className=" flex  my-2 justify-center items-center">
      <img src={flow}/>
      </div>
    

    </section>
  );
}

export default AshokTextiles;

import img from '../../assets/images/camera-galary.jpg';

export default function ProjectHeading() {
    return (
      <>
        <div style={{ background: `linear-gradient(45deg, black, transparent),url(${img})`, backgroundSize: 'cover' }} className="w-full mt-20 text-center  text-white font-bold pt-40 p-20">
          <h1 className="text-5xl"> Our Gallery</h1>
        </div>
      </>
    );
  }
import Marquee from "react-fast-marquee";
import apple from '../../assets/clients/apple.jfif';
import asus from '../../assets/clients/asus.jpg';
import lenovo from '../../assets/clients/lenovo.jpg';
import microsoft from '../../assets/clients/microsoft.png';
import netflix from '../../assets/clients/netflix.jpg';

const Clients = () => {
  return (
    <div className='mx-auto w-full my-20 px-2 md:px-10'>
        <h1 className='text-center text-2xl md:text-4xl font-medium text-[#a7a7a7]'>We have 100+ active users across the nation</h1>
        <div className="mt-6 md:mt-16">
            <Marquee play>
                <img className="mx-6 h-[3rem] object-cover" src={apple}></img>
                <img className="mx-6 h-[3rem] object-cover" src={asus}></img>
                <img className="mx-6 h-[3rem] object-cover" src={lenovo}></img>
                <img className="mx-6 h-[3rem] object-cover" src={microsoft}></img>
                <img className="mx-6 h-[3rem] object-cover" src={netflix}></img>
                <img className="mx-6 h-[3rem] object-cover" src={apple}></img>
                <img className="mx-6 h-[3rem] object-cover" src={asus}></img>
                <img className="mx-6 h-[3rem] object-cover" src={lenovo}></img>
                <img className="mx-6 h-[3rem] object-cover" src={microsoft}></img>
                <img className="mx-6 h-[3rem] object-cover" src={netflix}></img>
            </Marquee>
        </div>
    </div>
  )
}

export default Clients
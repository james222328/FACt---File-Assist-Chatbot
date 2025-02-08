'use client';
import { useEffect } from 'react';
import EcosystemIcon from '../assets/icons/ecosystem.svg';

export const Feature = ({title, description} : {title:string; description:string}) => {

    useEffect(() =>{
        //const border = useRef(null);
        const updateMousePos = (e:MouseEvent) => {

        };
        window.addEventListener('mousemove', updateMousePos);
        return () => {
            window.removeEventListener('mousemove', updateMousePos)
        }
    }
    );
    return(
    <div className='border border-white/30 px-5 py-10 text-center rounded-xl sm:flex-1 relative'>
        <div className='absolute inset-0 border-2 border-purple-400 rounded-xl' style={{
            WebkitMaskImage: 'radial-gradient(100px 100px at 0px 0px, black, transparent)',
            maskImage:
             'radial-gradient(100px 100px at 0px 0px, black, transparent'}}
             //ref={border}
             ></div>
        <div className='inline-flex h-14 w-14 bg-white text-black justify-center items-center rounded-lg'>
                <EcosystemIcon />
        </div>
        <h3 className='mt-6 font-bold'>{title}</h3>
        <p className='mt-2 text-white/70'>{description}</p>    
    </div>
    )
};
import Link from 'next/link';
import ArrowWIcon from '../assets/icons/arrow-w.svg';

export const Hero = () => {
  return(
    <div className="bg-black text-white bg-[linear-gradient(to_bottom, #000, #200D42_34%, #4F21A1_65%, #A46EDB_82%)] py-[72px] relative overflow-clip">
      <div className="container">
        <div className="flex items-center justify-center">
        <Link href="/about" className="inline-flex gap-3 border py-1 px-2 rounded-lg bg-whtie/30">
          <span className="bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text [-webkit-background-clip:text]">Version 1.0</span>
          <span className='inline-flex items-center gap-1'>
          <span>Read More</span>
          <ArrowWIcon />
          </span>
        </Link>
        </div>
        <h1 className='text-7xl font-bold tracking-tighter text-center mt-8 py-6'>
          Knock your Docs the FACt way
          </h1>  
        <p className='text-center text-xl mt-8'>
           Transform your document analysis with FACt! 
           Seamlessly understand content from PDFs, DOCX, and PPTX files with integrated OCR capabilities. 
           Make data-driven decisions easier than ever before. <br/>
           You hear that? FACt comes with URL summarizer too!
        </p>
      </div>
      <div className='py-4'></div>
    </div>
  );
};

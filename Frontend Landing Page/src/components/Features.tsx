import { Feature } from "./Feature";

const features = [
  {
    title: "Multi-Format Doc Analysis",
    description:
      "Process and analyze various document formats, including PDF, DOCX, and PPTX, allowing users to extract and utilize information from a range of file types.",
  },
  {
    title: "Advanced OCR Capabilities",
    description:
      "Includes optical character recognition (OCR) technology to convert text from images and scanned documents into editable and searchable data.",
  },
  {
    title: "User-Friendly Interface",
    description:
      " Designed for ease of use, the app provides a streamlined interface for uploading, processing, and managing documents efficiently.",
  },
  {
    title: "URL Summarizer",
    description:
    "Distill any webpage into useful information. FACt streamlined browsing for you, get to the core of the content faster."
  }
];

export const Features = () => {
  return( 
    <div id='features' className="bg-black text-white py-[72px]">
      <div className="container">
        <h2 className='text-center font-bold text-5xl sm:text-6xl tracking-tighter'>
          One or Multiple, You Decide
        </h2>
        <div className='max-w-xl mx-auto'>
        <p className='text-center mt-5 text-xl text-white/70'>
          Talk to your documnents with FACt
        </p>
        </div>
        <div className='mt-16 flex flex-col sm:flex-row gap-4'>
          {features.map(({title, description}) => (
            <Feature title={title} description={description} key={title} />
          ))}
        </div>
      </div>
    </div>
  );
};

import React from 'react'
import Resume from '../assets/cv.pdf'
import ndip from '../assets/NDip.pdf'
import trans from '../assets/Transcript.pdf'
import sysDev from '../assets/Sipho-Ngobeni-NQF-5.pdf'
import {FaDownload} from 'react-icons/fa'


const docInfor = [
    {
        title: 'Resume',
        description: 'Short Resume',
        file: Resume
    },
    {
        title: 'Qualification',
        description: 'NDip in IT, Specializing in software development.',
        file: ndip
    },
    {
        title: 'Transcript',
        description: 'Academic Transcript',
        file: trans
    },
    {
      title: 'Certificate',
      description: 'System development NQF-5 certificate',
      file: sysDev
  }
    
];

// const PDF_FILE_URL = 'http://localhost:5173/P-Doc-SD.pdf';
// const ND_FILE_URL = 'http://localhost:5173/P-Doc-SD.pdf';NDip

function ResumeFiles() {
    const downloadFileURL = (url) => {
      const fileName = url.split('/').pop();
      const aTag = document.createElement('a');
      aTag.href = url;
      aTag.setAttribute('download',fileName);
      document.body.appendChild(aTag);
      aTag.click();
      aTag.remove();
    };
  return (
    <div className=''>
        {/* <div className='flex relative items-center justify-center h-auto  gap-10 '>
            <span className='inlene-block px-2 py-1 font-semibold text-white bg-[#00749b] rounded-md w-[200px]'>Tittle</span>
            <span className='inlene-block px-2 py-1 font-semibold text-white bg-[#00749b] rounded-md w-[200px]'>Description</span>
            <span className='inlene-block px-2 py-1 font-semibold text-white bg-[#00749b] rounded-md w-[200px]'>File</span>
        </div> */}


        <div class="flex flex-col">
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <table
              class="min-w-full text-center text-sm font-light text-surface dark:text-white">
              <thead
                class="border-b bg-[#00749b]  text-neutral-50 font-semibold dark:border-white/10">
                <tr>
                  <th scope="col" class="px-6 py-4">Doc Name</th>
                  <th scope="col" class="px-6 py-4">Description</th>
                  <th scope="col" class="px-6 py-4">File</th>
                </tr>
              </thead>
              <tbody>

                {docInfor.map((item,index) => {
                        return(
                            <tr class="border-b border-secondary-200 bg-[#c7c6c699] text-neutral-800 font-medium">
                                <td class="whitespace-nowrap bg-[#5c5b5b99] px-6 py-4">{item.title}</td>
                                <td class="whitespace-nowrap bg-[#5c5b5b99] px-6 py-4">{item.description}</td>
                                <td class="whitespace-nowrap bg-[#5c5b5b99] px-6 py-4">
                                    <button 
                                      onClick={() => {
                                        downloadFileURL(item.file)
                                      }}
                                    ><FaDownload /></button>
                                </td>
                            </tr>
                        )
                        }
                )};

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>  
      
    </div>
  )
}

export default ResumeFiles

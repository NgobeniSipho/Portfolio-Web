import React from 'react'


function ResumeFiles({title,description,file}) {
  return (
      // <div className='flex relative items-center justify-center h-auto w-full gap-10'>
      //     <div className=''><p>{title}</p></div>
      //     <div><p>{description}</p></div>
      //     <div><a href={file} target='_blank'></a></div>
      // </div>

      <div class="flex flex-col">
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <table
              class="min-w-full text-center text-sm font-light text-surface dark:text-white">
              <thead
                class="border-b border-neutral-700 font-medium dark:border-white/10">
                <tr>
                  <th scope="col" class="px-6 py-4">Class</th>
                  <th scope="col" class="px-6 py-4">Heading</th>
                  <th scope="col" class="px-6 py-4">Heading</th>
                </tr>
              </thead>
              <tbody>

                <tr
                  class="border-b border-neutral-700 bg-neutral-800 text-neutral-50 dark:border-neutral-600 dark:bg-neutral-700">
                  <td class="whitespace-nowrap px-6 py-4 font-medium">
                    Dark
                  </td>
                  <td class="whitespace-nowrap px-6 py-4">Cell</td>
                  <td class="whitespace-nowrap px-6 py-4">Cell</td>
                </tr>

                <tr
                  class="border-b border-secondary-200 bg-secondary-100 text-neutral-800">
                  <td class="whitespace-nowrap px-6 py-4 font-medium">
                    Secondary
                  </td>
                  <td class="whitespace-nowrap px-6 py-4">Cell</td>
                  <td class="whitespace-nowrap px-6 py-4">Cell</td>
                </tr>


              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>   
 
  )
}

export default ResumeFiles

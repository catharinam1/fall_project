import React, { useState } from 'react'
import { Button, Modal} from 'flowbite-react';

const Pastpaperbox = ({title_subj, desc}) => {

  const pdfUrl = 'https://publuu.com/flip-book/269961/633200'; // Replace with the actual PDF URL

    const handlePdfDownload = () => {
        window.open(pdfUrl, '_blank');
    };

    const [openModal, setOpenModal] = useState();
    const props = { openModal, setOpenModal };
    const openYearModal = () => {
      props.setOpenModal('dismissibleYear');
    };


    const [openModalSubject, setOpenModalSubject] = useState();
    const propsSubject = { openModalSubject, setOpenModalSubject };
    const openSubjectModal = () => {
      propsSubject.setOpenModalSubject('dismissibleSubject');
    };

  return (
    <div className="">
          <div className="">
              <Button className="w-[120px] mt-[40px]" onClick={desc === 'year' ? openYearModal : openSubjectModal}>
                {title_subj}
              </Button>
              
              <Modal dismissibleYear show={props.openModal === 'dismissibleYear'} onClose={() => props.setOpenModal(undefined)}>
                <Modal.Header>Select Subject For Year {title_subj}</Modal.Header>
                <Modal.Body>
                  <div className="space-y-6">
                    <div className="flex px-5">
                    <ul className="mr-[10%] text-base leading-relaxed text-gray-500 dark:text-gray-400 py-2">
                      <li onClick={handlePdfDownload} className="hover:underline hover:cursor-pointer">Accounting</li>
                      <li onClick={handlePdfDownload} className="hover:underline hover:cursor-pointer">Biology</li>
                      <li onClick={handlePdfDownload} className="hover:underline hover:cursor-pointer">Chemistry</li>
                      <li onClick={handlePdfDownload} className="hover:underline hover:cursor-pointer">English</li>
                      
                      
                    </ul>
                    <ul className="text-base leading-relaxed text-gray-500 dark:text-gray-400 py-2 px-10">
                      <li onClick={handlePdfDownload} className="hover:underline hover:cursor-pointer">Geography</li>
                      <li onClick={handlePdfDownload} className="hover:underline hover:cursor-pointer">History</li>
                      <li onClick={handlePdfDownload} className="hover:underline hover:cursor-pointer">Literature</li>
                      <li onClick={handlePdfDownload} className="hover:underline hover:cursor-pointer">Mathematics</li>
                    </ul>

                    <ul className="text-base leading-relaxed text-gray-500 dark:text-gray-400 py-2 px-10">
                      <li onClick={handlePdfDownload} className="hover:underline hover:cursor-pointer">Physics</li>
                      <li onClick={handlePdfDownload} className="hover:underline hover:cursor-pointer">Religion</li>
                      <li onClick={handlePdfDownload} className="hover:underline hover:cursor-pointer">Spanish</li>
                    </ul>
                    </div>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
              </Modal>

              <Modal dismissibleSubject show={propsSubject.openModalSubject === 'dismissibleSubject'} onClose={() => propsSubject.setOpenModalSubject(undefined)}>
                <Modal.Header>Select Year For {title_subj}</Modal.Header>

                <Modal.Body>
                  <div className="space-y-6">
                    <div className="flex flex-col px-5">
                    <ul className="flex mr-[10%] text-base leading-relaxed text-gray-500 dark:text-gray-400 py-2 px-10">
                      <li onClick={handlePdfDownload} className="px-5 hover:underline hover:cursor-pointer">2023</li>
                      <li onClick={handlePdfDownload} className="px-5 hover:underline hover:cursor-pointer">2022</li>
                      <li onClick={handlePdfDownload} className="px-5 hover:underline hover:cursor-pointer">2021</li>
                      <li onClick={handlePdfDownload} className="px-5 hover:underline hover:cursor-pointer">2020</li>
                      <li onClick={handlePdfDownload} className="px-5 hover:underline hover:cursor-pointer">2019</li>
                      <li onClick={handlePdfDownload} className="px-5 hover:underline hover:cursor-pointer">2018</li> 
                    </ul>
                    <ul className="flex mr-[10%] text-base leading-relaxed text-gray-500 dark:text-gray-400 py-2 px-10">
                      <li onClick={handlePdfDownload} className="px-5 hover:underline hover:cursor-pointer">2023</li>
                      <li onClick={handlePdfDownload} className="px-5 hover:underline hover:cursor-pointer">2022</li>
                      <li onClick={handlePdfDownload} className="px-5 hover:underline hover:cursor-pointer">2021</li>
                      <li onClick={handlePdfDownload} className="px-5 hover:underline hover:cursor-pointer">2020</li>
                      <li onClick={handlePdfDownload} className="px-5 hover:underline hover:cursor-pointer">2019</li>
                      <li onClick={handlePdfDownload} className="px-5 hover:underline hover:cursor-pointer">2018</li> 
                    </ul>

                    <ul className="flex mr-[10%] text-base leading-relaxed text-gray-500 dark:text-gray-400 py-2 px-10">
                      <li onClick={handlePdfDownload} className="px-5 hover:underline hover:cursor-pointer">2023</li>
                      <li onClick={handlePdfDownload} className="px-5 hover:underline hover:cursor-pointer">2022</li>
                      <li onClick={handlePdfDownload} className="px-5 hover:underline hover:cursor-pointer">2021</li>
                      <li onClick={handlePdfDownload} className="px-5 hover:underline hover:cursor-pointer">2020</li>
                      <li onClick={handlePdfDownload} className="px-5 hover:underline hover:cursor-pointer">2019</li>
                      <li onClick={handlePdfDownload} className="px-5 hover:underline hover:cursor-pointer">2018</li> 
                    </ul>

                    <ul className="flex mr-[10%] text-base leading-relaxed text-gray-500 dark:text-gray-400 py-2 px-10">
                      <li onClick={handlePdfDownload} className="px-5 hover:underline hover:cursor-pointer">2023</li>
                      <li onClick={handlePdfDownload} className="px-5 hover:underline hover:cursor-pointer">2022</li>
                      <li onClick={handlePdfDownload} className="px-5 hover:underline hover:cursor-pointer">2021</li>
                      <li onClick={handlePdfDownload} className="px-5 hover:underline hover:cursor-pointer">2020</li>
                      <li onClick={handlePdfDownload} className="px-5 hover:underline hover:cursor-pointer">2019</li>
                      <li onClick={handlePdfDownload} className="px-5 hover:underline hover:cursor-pointer">2018</li> 
                    </ul>
                    <ul className="flex mr-[10%] text-base leading-relaxed text-gray-500 dark:text-gray-400 py-2 px-10">
                      <li onClick={handlePdfDownload} className="px-5 hover:underline hover:cursor-pointer">2023</li>
                      <li onClick={handlePdfDownload} className="px-5 hover:underline hover:cursor-pointer">2022</li>
                      <li onClick={handlePdfDownload} className="px-5 hover:underline hover:cursor-pointer">2021</li>
                      <li onClick={handlePdfDownload} className="px-5 hover:underline hover:cursor-pointer">2020</li>
                      <li onClick={handlePdfDownload} className="px-5 hover:underline hover:cursor-pointer">2019</li>
                      <li onClick={handlePdfDownload} className="px-5 hover:underline hover:cursor-pointer">2018</li> 
                    </ul>
                    </div>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
          
          
  )
}

export default Pastpaperbox
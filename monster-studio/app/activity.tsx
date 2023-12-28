import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';
import type { CustomFlowbiteTheme } from 'flowbite-react';
import { Flowbite } from 'flowbite-react';

const customTheme: CustomFlowbiteTheme = {
    modal: {
        content: {
            base: "relative h-full w-full p-4 md:h-auto",
            inner: "relative rounded-lg shadow bg-zinc-900 flex flex-col max-h-[90vh]"
          },
          body: {
            base: "p-6 flex-1 overflow-auto text-white",
            popup: "pt-0"
          },
          header: {
            base: "flex items-start justify-between rounded-t border-gray-600 border-b p-5",
            popup: "p-2 border-b-0",
            title: "text-xl font-medium text-gray-900 text-white",
            close: {
              base: "ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-600 hover:text-white",
              icon: "h-5 w-5"
            }
          },
          footer: {
            base: "flex items-center space-x-2 rounded-b p-6 border-gray-600",
            popup: "border-t"
          }
    },
  };

interface ActivityProps {
    img: string,
    name: string,
    desc: string,
}

export default function Activity(props: ActivityProps) {
    const [openModal, setOpenModal] = useState(false);

    return (
        <div>
            <a href={'#' + props.name}>
                <div className="grid justify-items-center text-white text-sm m-3">
                    <img onClick={() => setOpenModal(true)} src={props.img} className="w-28" alt="activity pic" />
                    <div onClick={() => setOpenModal(true)} className="bg-zinc-900 hover:bg-zinc-800 w-28 py-3 mt-1 rounded-3xl text-center">
                        {props.name}
                    </div>
                </div>
            </a>
            <Flowbite theme={{ theme: customTheme }}>
                <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
                    <Modal.Header>{props.name}</Modal.Header>
                    <Modal.Body>
                        <div className="space-y-6">
                            <p className="text-base leading-relaxed text-gray-400">
                                {props.desc}
                            </p>
                        </div>
                    </Modal.Body>
                </Modal>
            </Flowbite>
        </div>
    )
}
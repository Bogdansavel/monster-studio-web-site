import type { CustomFlowbiteTheme } from 'flowbite-react';
import { Flowbite } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { Modal } from 'flowbite-react';
import { Link } from "@remix-run/react"
import ModalButton from '~/buttons/modalButton';

const customTheme: CustomFlowbiteTheme = {
    card: {
      root: {
        base: "bg-white-50 border-2 border-neutral-700 rounded-xl"
      }
    },
    modal: {
        content: {
            base: "relative w-full p-4 h-auto",
            inner: "relative rounded-lg shadow bg-zinc-900 flex flex-col max-h-[90vh]"
          },
          body: {
            base: "p-6 flex-1 overflow-auto text-black rounded-b-lg bg-gradient-to-r from-blue-300 to-purple-500",
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

  class CennikPosition {
    name: string;
    desc: string;
  
    constructor(name: string, desc: string) {
      this.name = name;
      this.desc = desc;
    }
  }

export default function Index() {
    useEffect(() => {
        const script = document.createElement('script');
      
        script.text = "(function(i,s,o,g,r,a,m){i['FitsseyWidget']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://app.fitssey.com/assets/js/lb.widget.prod.js','lb');lb('init','Monster');";
        script.async = true;
      
        document.body.appendChild(script);
    });

    const [openModal, setOpenModal] = useState(false);

    const cenniks = [
        new CennikPosition('1 wejście - 60zł', 'Jednorazowe wejście na wybrane przez Ciebie zajęcie w grupie. Karnet jest aktywny przez 30 dni od dnia zakupu.'),
        new CennikPosition('Karnet 4 - 220zł', 'Karnet obejmuje 4 wejścia na grupowe zajęcia, aktywny przez 30 dni od dnia zakupu.'),
        new CennikPosition('Karnet 6 - 280zł', 'Karnet obejmuje 6 wejść na grupowe zajęcia, aktywny przez 30 dni od dnia zakupu.'),
        new CennikPosition('Karnet 8+1 - 320zł', 'Karnet łączy w sobie 8 wejść na grupowe zajęcia i 1 wejście na open pole. Aktywny przez 30 dni od dnia zakupu.'),
        new CennikPosition('Karnet 12 - 420zł', 'Karnet obejmuje 12 wejść na grupowe zajęcia, aktywny przez 30 dni od dnia zakupu.'),
        new CennikPosition('Moooonster - 599zł', 'Karnet obejmuje 30 zajęć grupowych. Możliwość zapisania się maksymalnie na 7 treningów tygodniowo, aktywny przez 30 dni od dnia zakupu.'),
        new CennikPosition('Open pole - 40zł', 'To jedne wersje bez trenera.'),
        new CennikPosition('Personalne - 160zł', 'Jeden 60 minutowy  trening z trenerem face to face.'),
        new CennikPosition('Impreza - od 900zł', 'Masz urodziny, wieczór panieński albo po prostu chcesz imprezować z rurami i szampanem? To zapraszam do kontaktu 794451272.'),
        new CennikPosition('Dziecki - 225zł', 'Karnet dla osób od 6 do 14 lat na 6 zajęć w grupie. On jest aktywny 30 dni od dnia zakupu.')
    ];

    return (
        <div className="grid w-full mt-5 gap-4 justify-items-center">
            <div className="grid w-96 py-5 text-white text-xl border-2 rounded-xl border-neutral-700 justify-items-center">
                <h1 className="text-3xl mb-5"><b>Cennik</b></h1>
                <div className='grid grid-cols-2 gap-4 justify-items-center'>
                {cenniks.map((cennik) => {
                    return <ModalButton name={cennik.name} desc={cennik.desc}/> 
                })}
                </div>
            </div>
            <div className='w-48 border-neutral-700 hover:border-purple-600 border-4 rounded-2xl'>
                <Link to=""><img onClick={() => setOpenModal(true)} className='justify-items-center rounded-xl' src="5plus1.jpg" /></Link>
            </div>
            <Flowbite theme={{ theme: customTheme }}>
                <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
                    <Modal.Header>A ta promka dla ciebie!</Modal.Header>
                    <Modal.Body>
                        <div className="space-y-6">
                            <p className="text-base leading-relaxed text-black">
                            Przy zakupie takich samych 6 karnetów zaptacisz jak za 5.<br/><br/>
                            Karnet 4 - <s>1140zł</s> 950zł<br/>
                            Karnet 6 - <s>1500zł</s> 1250zł<br/>
                            Karnet 8+1 - <s>1740zł</s> 1450zł<br/>
                            Karnet Moooonster - <s>2994zł</s> 2495zł<br/>
                            Daty rozpoczecia twoich karnetów wybierasz sam.
                            </p>
                        </div>
                    </Modal.Body>
                </Modal>
            </Flowbite>
            <div className='text-neutral-500 text-sm p-5'>
                <p>
                    Informujemy, że anulacja zajęć grupowych jest możliwa do 24 godzin przed ich rozpoczęciem 
                    (również listy rezerwowe). W takim wypadku wejście zostanie zwrócone na Twoje konto, 
                    a Ty będziesz mógł je wykorzystać w ramach Twojego karnetu. 
                    Jeśli anulacja nastąpi później niż 24 godziny przed zajęciami grupowymi, 
                    Twoje wejście przepada, a my nie będziemy w stanie zaoferować Ci zwrotu lub możliwości 
                    skorzystania z niego w przyszłości. 
                </p>
            </div>
            <div className='w-full'>
                <lb-schedule-widget></lb-schedule-widget>
            </div>
        </div>
    )
}
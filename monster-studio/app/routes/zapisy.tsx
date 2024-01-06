import { Card } from 'flowbite-react';
import type { CustomFlowbiteTheme } from 'flowbite-react';
import { Flowbite } from 'flowbite-react';

const customTheme: CustomFlowbiteTheme = {
    card: {
      root: {
        base: "bg-white-50 border-2 border-neutral-700 rounded-xl"
      }
    },
  };

export default function Index() {
    return (
        <div className="grid sm:grid-cols-2 mt-5 gap-4">
            <div className="sm:h-[29rem] gap-6 py-8 text-white text-xl grid justify-items-center border-2 rounded-xl border-neutral-700">
                <div>
                    1 wejście - 55zł
                </div>
                <div>
                    Karnet 4 - 190zł
                </div>
                <div>
                    Karnet 6 - 250zł
                </div>
                <div>
                    Karnet 8+1 - 290zł
                </div>
                <div>
                    Moooonster - 499zł
                </div>
                <div>
                    Open pole - 30zł
                </div>
                <div>
                    Personalne - 160zł
                </div>
                <div>
                    Impreza - od 900zł
                </div>
            </div>
            <div>
                <Flowbite theme={{ theme: customTheme }}>
                    <Card
                        className="max-w-sm"
                        imgAlt="Meaningful alt text for an image that is not purely decorative"
                        imgSrc="5plus1.jpg"
                        >
                        <h5 className="text-2xl font-bold tracking-tight text-white">
                            A ta promka dla ciebie!
                        </h5>
                        <p className="text-white">
                        Przy zakupie takich samych 6 karnetów zaptacisz jak za 5.<br/><br/>
                        Karnet 4 - 950zł zamiast 1140zł<br/>
                        Karnet 6 - 1250zł zamiast 1500zł<br/>
                        Karnet 8+1 - 1450zł zamiast 1740zł<br/>
                        Karnet Moooonster - 2495zł zamiast 2994zł<br/><br/>
                        Daty rozpoczecia twoich karnetów wybierasz sam.
                        </p>
                    </Card>
                </Flowbite>
            </div>
        </div>
    )
}
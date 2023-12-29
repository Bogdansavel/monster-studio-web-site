import { IframeHTMLAttributes } from "react"

export default function Info() {
    return(
        <div className="grid grid-cols-12 justify-items-center mt-5 text-white">
            <div className="col-start-2 col-span-10 text-center">
                <h1 className="text-3xl mb-2"><b>Jak dostać?</b></h1>
                <p>Adress: ul. Koletek 4/10.</p>
                <div className="grid grid-cols-2 gap-5">
                    <div>
                        <p className="mb-2 text-lg">Krok 1</p>
                        <img className="rounded-3xl w-96" src="MonsterP1.gif" alt="this slowpoke moves" />
                    </div>
                    <div>
                        <p className="mb-2 text-lg">Krok 2</p>
                        <img className="rounded-3xl w-96" src="MonsterP2.gif" alt="this slowpoke moves" />
                    </div>
                    <div className="mt-5 h-96 col-span-2">
                        <iframe className="w-full h-full rounded-xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212.36176321082417!2d19.939238736941796!3d50.0522710708242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b6b8bc5f96f%3A0xc326ae93cfe14e78!2sKoletek%204%2C%2031-069%20Krak%C3%B3w!5e0!3m2!1sru!2spl!4v1703853598818!5m2!1sru!2spl" frameBorder="0" allowFullScreen={true} loading="lazy">
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}
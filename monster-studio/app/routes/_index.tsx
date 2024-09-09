import { Carousel } from 'flowbite-react';
import type { CustomFlowbiteTheme } from 'flowbite-react';
import { Flowbite } from 'flowbite-react';
import Activity from '~/activity';

const customTheme: CustomFlowbiteTheme = {
  carousel: {
    control: {
      base: "bg-white-50"
    }
  },
};

class ActivityClass {
  img: string;
  name: string;
  desc: string;

  constructor(img: string, name: string, desc: string) {
    this.img = img;
    this.name = name;
    this.desc = desc;
  }
}

export default function Index() {
  const activities = [
    new ActivityClass("stretch.png", "Stretching", "Zajęcia rozciągające polegające na poprawieniu zakresu ruchu danej partii ciała. Na zajęcia weź ze soba top i leginsy."),
    new ActivityClass("balance.png", "Balance", "Na tych zajęciach poznasz podstawy stania na rękach, przedramionach, barkach, oraz inne rodzaje balansów, z rurą i bez rury. To idealna okazja by odkryć nowe wymiary swojego ciała, wzmocnić i rozciągnąć mięśnie oraz zdobyć umiejętności balansu i równowagi."),
    new ActivityClass("AerialHoop.png", "Aerial Hoop", "To zajęcia akrobatyki na podwieszonym kole. W Monstre musisz być ubranym w krótkie szorty i top."),
    new ActivityClass("pole exotic.png", "Pole Exotic", "Taniec w wysokich szpikach (szklankach) około 20 cm. Podczas zajęć wykonywane są układy taneczne na rurce i obok niej. Jeśli masz swoje buty śmiało weź je ze soba oraz nakolanniki są mile widziane."),
    new ActivityClass("pole dance.png", "Pole Dance", "Taniec z elementami akrobatyki uprawiany na rurce pionowej. Na zajęcia zabierz ze sobą najkrótsze spodenki i top."),
    new ActivityClass("mobility.png", "Mobility", "Są to ćwiczenia zwiększające zakresy ruchów w stawach i panowanie nad swoim ciałem. Proszę ubrać to w czym wygodne będzie wykonywać  ruchów amplitudowych."),
    new ActivityClass("fitness pole.png", "Fitness pole", "Trening siłowy wzmacniający mięśni i kształtujący sylwetkę. Kiedy idziesz na rurę musisz mieć ze sobą szorty."),
    new ActivityClass("pole art.png", "Pole Art", "Pole art to i jest podstawa tańca na rurce z elementami wykonywanymi równiez obok niej. Na zajecia weź ze soba nakolanniki oraz top z szortami."),
    new ActivityClass("aerial silks.png", "Aerial Silks", "To dyscyplina sportowa, która polega na wykonywaniu figur i kombinacji na podwieszonej do sufitu szarfie. Proszę ubrać coś z długim  rękawem."),
  ]

  const carouselImages = ["IMG_2954.JPG", "IMG_6897.JPG", "IMG_6031.JPG", "IMG_6958.JPG", "IMG_6052.JPG"];

  return (
    <div className='grid justify-items-center'>
      <div className="w-96 h-72 lg:h-[25rem] lg:w-[40rem] 2xl:h-[35rem] 2xl:w-[50rem] pt-4">
        <Flowbite theme={{ theme: customTheme }}>
          <Carousel slideInterval={7000}>
            {carouselImages.map((image) => {
              return <img src={image} />
            })}
          </Carousel>
        </Flowbite>
      </div>
      <div className='grid grid-cols-12'>
          <p className='text-white py-4 col-start-2 col-span-10 2xl:col-start-4 2xl:col-span-6 text-center mt-3'>
            Z Monster studio będziesz zawsze wysportowany i rozciągnięty po takich zajęciach:
          </p>
          <div className='col-start-2 col-span-10 2xl:col-start-5 2xl:col-span-4'>
            <div className='grid justify-items-center grid-cols-3'>
              {activities.map((activity) => {
                return <Activity img={activity.img} name={activity.name} desc={activity.desc}/> 
              })}
            </div>
          </div>
        </div>
    </div>
  );
}

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

export default function Index() {
  return (
    <div className='grid justify-items-center'>
      <div className="w-96 h-72 lg:h-[25rem] lg:w-[40rem] 2xl:h-[35rem] 2xl:w-[50rem] pt-4">
        <Flowbite theme={{ theme: customTheme }}>
          <Carousel slideInterval={7000}>
            <img className='rounded-3xl' src="IMG_3522.JPG" alt="..." />
            <img className='rounded-3xl' src="IMG_3523.JPG" alt="..." />
            <img className='rounded-3xl' src="IMG_3524.JPG" alt="..." />
          </Carousel>
        </Flowbite>
      </div>
      <div className='grid grid-cols-12'>
          <p className='text-white py-4 col-start-2 col-span-10 2xl:col-start-4 2xl:col-span-6 text-center mt-3'>
          W Monster studio zajęcia z pole Dance i Exotic trwają 80 minut. Na sali 7 rur i 4 koła na drugiej, będziesz sam na rurce. 
          Z Monster studio będziesz zawsze wysportowany i rozciągnięty po takich zajęciach:
          </p>
          <div className='col-start-2 col-span-10 2xl:col-start-4 2xl:col-span-6'>
            <div className='grid justify-items-center grid-cols-3 sm:grid-cols-4'>
              <Activity img="stretch.png" name='Stretching' 
              desc='Zajęcia rozciągające polegające na poprawieniu zakresu ruchu danej partii ciała. 
              Na zajęcia weź ze soba top i leginsy.'/>
              <Activity img="balance.png" name='Balance'
              desc='Na tych zajęciach poznasz podstawy stania na rękach, przedramionach, 
              barkach, oraz inne rodzaje balansów, z rurą i bez rury. 
              To idealna okazja by odkryć nowe wymiary swojego ciała, wzmocnić i rozciągnąć mięśnie oraz zdobyć 
              umiejętności balansu i równowagi.'/>
              <Activity img="AerialHoop.png" name='Aerial Hoop'
              desc='To zajęcia akrobatyki na podwieszonym kole. W Monstre musisz być ubranym w krótkie szorty i top.'/>
              <Activity img="pole exotic.png" name='Pole Exotic'
              desc='Taniec w wysokich szpikach (szklankach) ok 20 cm. 
              Podczas zajęć wykonywane są układy taneczne na rurce i obok niej.
              Jeśli masz swoje buty śmiało weź je ze soba oraz nakolanniki są mile widziane.'/>
              <Activity img="pole dance.png" name='Pole Dance'
              desc='Taniec z elementami akrobatyki uprawiany na rurce pionowej. 
              Na zajęcia zabierz ze sobą najkrótsze spodenki i top.'/>
              <Activity img="mobility.png" name='Mobility'
              desc='Są to ćwiczenia zwiększające zakresy ruchów w stawach i panowanie nad swoim ciałem.
              Proszę ubrać to w czym wygodne będzie wykonywać  ruchów amplitudowych.'/>
              <Activity img="fitness pole.png" name='Fitness pole'
              desc='Trening siłowy wzmacniający mięśni i kształtujący sylwetkę.
              Kiedy idziesz na rurę musisz mieć ze sobą szorty.'/>
              <Activity img="pole art.png" name='Pole Art'
              desc='To taniec na rurce z elementami wykonywanymi również obok niej.
              Na zajęcia weź ze sobą nakolanniki oraz top z szortami.'/>
            </div>
          </div>
        </div>
    </div>
  );
}

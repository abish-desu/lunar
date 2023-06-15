interface CardProps {
  image: string;
  label: string;
  lavel:number;
}

export function Card(props: React.PropsWithChildren<CardProps>) {
  return (
      <div>
          <div className="flex flex-col items-center">
              <img src={props.image} alt={props.label} className="h-[300px]" />
              <h1 className="text-2xl font-semibold py-5">{props.label}</h1>
          </div>
          <div>{props.children}</div>
          <li>1 bathroom</li>
            <li>2 beds</li>
            <li>2 people</li>

            <div className='flex justify-between mt-5'>
                <h1 className="text-xl text-purple-500 font-semibold">{props.lavel.toLocaleString()} per night</h1>
                <button className="bg-purple-500 hover:bg-purple-500/80 text-white py-2 px-4 font-semibold text-xl">Book Now</button>

      </div>
      </div>
  );
}
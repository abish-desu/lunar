
import BedImage from '../../../public/bed.jpeg'
import {Card} from './Card';
const Cards = () => {
  const beds = [
    { name: 'Standard Double Bedroom', rate: 100000 },
    { name: 'Classic Standard Room', rate: 50000 },
    { name: 'Classic Double Room', rate: 150000 },
    { name: 'Deluxe Suite with balcony view', rate: 50000 },
    { name: 'Family suite with balcony view', rate: 150000 },
    { name: 'Penthouse suite with balcony view', rate: 50000 }
];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-16 my-40">
    {beds.map((bed, id) => (
        <Card key={id} image={BedImage} label={bed.name} lavel={bed.rate} />
           
            
        
    ))}
</div>
  )
}

export default Cards
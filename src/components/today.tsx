import carIcon from '../assets/carIcon.png'
import driverIcon from '../assets/driverIcon.png'
import arrowDown from '../assets/arrow_down.png'
import { Link } from '@tanstack/react-router'

interface Card {
  title: string
  count: number
  icon: string
  bgColor: string
}

const Today = () => {
  const cards: Card[] = [
    {
      title: 'Active user Trips',
      count: 30,
      icon: carIcon,
      bgColor: '#B3B9F3',
    },
    {
      title: 'Active Drivers',
      count: 32,
      icon: driverIcon,
      bgColor: '#E7E9FB',
    },
    {
      title: 'Registered Drivers',
      count: 67,
      icon: driverIcon,
      bgColor: '#FEF6DB',
    },
  ]

  return (
    <div className="flex-col flex">
      <Link to=".">
        <p className="flex text-[0.9rem] font-medium items-center text-[#888889] gap-1 pb-4">
          Today <img src={arrowDown} alt="" />
        </p>
      </Link>
      <div className="flex gap-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col w-full h-40 rounded-lg shadow-sm"
            style={{ backgroundColor: card.bgColor }}
          >
            <div className="flex justify-between p-4">
              <h3 className="text-[0.93125rem] font-medium">{card.title}</h3>
              <img
                src={card.icon}
                alt={`${card.title} icon`}
                className="w-8 h-8"
              />
            </div>
            <div className="flex items-start p-4">
              <p className="px-2 text-[3.125rem] font-semibold">{card.count}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Today

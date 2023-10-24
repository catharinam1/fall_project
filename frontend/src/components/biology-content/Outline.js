import React from 'react'
import bio from '../../assets/biology.avif'

const Outline = ({title, items}) => {
  return (
    <div>
      <div className="flex">
        <img className="brightness-150 mr-2 w-6 h-6 rounded-full overflow-hidden" src={bio}/>
        <h1 className="text-lg pb-2">{title}</h1>
      </div>
      <hr className="pt-2"></hr>
      <p className="text-sm text-gray-500">LEARN</p>
      <ul className="flex flex-col text-black text-sm">
        {items.map((item, index) => (
          <li key={index} className="py-2">
            <a className="bg-transparent before:hover:w-0 hover:bg-transparent hover:underline" href={item.link}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Outline
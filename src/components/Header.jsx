import {BiBook} from 'react-icons/bi'
const Header = () => {
  return (
    <div className='flex items-center justify-between'>
      <BiBook className='text-4xl text-gray-400'/>
      <p className='text-3xl font-bold text-gray-200 uppercase pointer-events-none'>Dictionary</p>
    </div>
  )
}

export default Header

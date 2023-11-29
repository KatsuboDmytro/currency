import { InfinitySpin } from 'react-loader-spinner'
import './loader.css'

export const Loader = () => {
  return (
    <div className="loader">
      <InfinitySpin
        width='200'
        color="#000"
      />
    </div>
  )
}

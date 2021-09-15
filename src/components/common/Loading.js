import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css' 
import Loader from 'react-loader-spinner'

function Loading() {
  return (
    <div className="loading">
      <Loader type="ThreeDots" color="#cfcfcf " height={80} width={80} />
    </div>
  )
}

export default Loading
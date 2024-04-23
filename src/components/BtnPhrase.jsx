import getRandomNumber from "../utils/getRandomNumber"
import quotes from '../data/phrases.json'
import photos from '../data/photos.json'


const BtnPhrase = ({ setPhraseSelected, setBgSelected }) => {
 
    const changePhrase = () => {
      const indexRandom = getRandomNumber(quotes.length)
      setPhraseSelected(quotes[indexRandom])
      setBgSelected(photos[getRandomNumber(photos.length)])
    }

    return (
    <button className="ml-auto block cursor-pointer bg-blue-400 py-2 px-4 text-black rounded-md text-sm" onClick={changePhrase}>Ver otra</button>
    
  )
}

export default BtnPhrase
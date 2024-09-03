import { useState, useEffect } from 'react'
import BreedsSelect from './BreedsSelect'
import browserslist, { data } from 'browserslist'

export const DogListContainer = () => {
  const [breeds, setBreed] = useState([])
  const [breedList, setbreedList] = useState([])
  const [selectList, setselectList] = useState('affenpinscher')
  const [ShowBreed, SetShowBreed] = useState('') //更新ボタンを押したらselectListの値がShowBreedに入る
  const [AddImageUrl, SetAddImageUrl] = useState('') //更新ボタン押下後、URLを加工してAddImageUrlに入れる
  const [APIImage, SetAPIImage] = useState([]) //12個のリストURL

  useEffect(() => {
    //APIでドロップダウンリストに表示する配列を取得　1次元＝犬種　2次元＝サブ犬種 結果例は以下
    //"message": {
    //"australian": ["kelpie", "shepherd"],
    //"beagle": ["hound", "puppy"],
    //"bulldog": [],
    //"dalmatian": []
    //}
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(res => res.json())
      .then(data => {
        //newBreed~はmessage:の次の次元の文字列を配列で返す
        //["australian","beagle","bulldog","dalmatian"]
        const NewBreedLIst = Object.keys(data.message)
        setBreed(NewBreedLIst)

        //flatmap=ForEach　newbreed~をひとつづつflatmapで処理 n個目をbreedとする
        const breedList = NewBreedLIst.flatMap(breed => {
          //data.message[breed(australian)]により["kelpie","shepherd"]が取得できる
          //サブ犬種が空なら親犬種、空じゃないなら親犬種-サブ犬種を返す
          const subBreeds = data.message[breed]
          if (subBreeds.length === 0) {
            return [breed]
          } else {
            return subBreeds.map(subBreed => `${breed}/${subBreed}`)
          }
        })
        setbreedList(breedList)
      })
      .catch(error => console.error('error', error))
  }, [])

  const handleChange = event => {
    setselectList(event.target.value)
  }

  const RndNumBefor = () => {
    return Math.floor(Math.random() * 50) + 1
  }

  //更新ボタンを押したらselectListの値がShowBreedに入る
  const ShowButtonClick = () => {
    const RndNum = RndNumBefor()

    const AddURL = `https://dog.ceo/api/breed/${selectList}/images/random/${RndNum}`

    //`https://dog.ceo/api/breed/${ShowBreed}/images/random/${RndNum}`
    fetch(AddURL)
      .then(response => response.json())
      .then(data => {
        let ImageList = data.message
        if (ImageList.length > 12) {
          ImageList = ImageList.slice(0, 11)
        }
        SetAPIImage(ImageList)
      })
      .catch(error => console.error('error', error))
  }

  return (
    <BreedsSelect
      breeds={breedList}
      event={handleChange}
      value={selectList}
      ShowButtonClick={ShowButtonClick}
      Image={APIImage}
      aaa={AddImageUrl}
    />
  )
}

export default DogListContainer

import data from './public/data/db.json'

const imageInfo = data.images

function createCard(imageInfo){
  const cardDom = document.createElement('div')
  cardDom.classList.add('card')
  cardDom.style.backgroundImage = `url(${imageInfo.address})`
  return cardDom
}

export const cardGroup = document.createElement('div')
cardGroup.classList.add('cardGroup')


imageInfo.forEach(e=>{
  const cardDom = createCard(e)
  cardGroup.append(cardDom)
})
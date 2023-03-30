import './css/style.scss'
import { cardGroup } from './card'
import { buttonGroup } from './button'



// get the app dom
const appDom = document.getElementById('app')



appDom.append(cardGroup)

cardGroup.append(buttonGroup)

const leftButton = buttonGroup.querySelector('.left')

const rightButton = buttonGroup.querySelector('.right')

leftButton.addEventListener('click', () => {
  const cardList = cardGroup.querySelectorAll('.card')
  cardGroup.prepend(cardList[cardList.length - 1])
})

rightButton.addEventListener('click', () => {
  const cardList = cardGroup.querySelectorAll('.card')
  cardGroup.insertBefore(cardList[0], buttonGroup)
})

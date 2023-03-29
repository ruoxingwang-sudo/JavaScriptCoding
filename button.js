import data from './src/data/db.json'

const buttonInfo = data.buttons

export const buttonGroup = document.createElement('div')
buttonGroup.classList.add('buttonGroup')


function createButton(btnInfo) {
  const buttonDom = document.createElement('i')
  buttonDom.classList.add('button')
  btnInfo.classNames.forEach(e => {
    buttonDom.classList.add(e);
  });
  return buttonDom
}

buttonInfo.forEach(e => {
  const buttonDom = createButton(e)
  buttonGroup.append(buttonDom)
})

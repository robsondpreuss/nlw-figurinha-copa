let isIgnite = true

function changeCard(event) {

  //console.log("Change Card") //debug teste para ver se a função está sendo chamada
  //console.log(event) //debug para ver o evento do mouse
  //console.log(event.target) //debug teste para ver o elemento que esta sendo chamado no evento.

  const card = event.currentTarget
  console.log(isIgnite)
  const bg = isIgnite ? "explorer" : "ignite"  //Operador ternário para verificar se a variavel é true ou false isIgnite ? true : false
  isIgnite = !isIgnite
  card.style.backgroundImage = `url(./assets/bg-${bg}.svg)`
  //console.log(isIgnite)
}
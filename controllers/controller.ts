import { Rocket } from '../models/rocket.js'

/*
const rocketA = new Rocket("32WESSDS", [10, 30, 80])
const rocketB = new Rocket("LDSFJA32", [30, 40, 50, 50, 30, 10])

const rockets = [rocketA, rocketB]

rockets.forEach(rocket => console.log(
  rocket.toString(), `- Max Power: ${rocket.maxPower}`
))

function testSpeed(id: number, rocket: Rocket, increments: number = 10): void {
  console.log(`\nRockect ${id}... speeding up\n`)
  console.log(`No Increment - Current Power: ${rocket.currentPower}`)

  for (let i = 1; i <= increments; i++) {
    rocket.speedUp()
    console.log(`Increment ${i} - Current Power: ${rocket.currentPower}`)
  }
}

testSpeed(1, rocketA)
testSpeed(2, rocketB)
*/

interface iHTMLRocket {
  html: {
    root: HTMLDivElement,
    idCode: HTMLSpanElement,
    boosterSystem: HTMLSpanElement,
    maxPower: HTMLSpanElement,
    currentPower: HTMLSpanElement,
  },
  instance: Rocket
}

const $rocket01 = {
  html: {
    root: document.querySelector('#rocket01') as HTMLDivElement,
    idCode: document.querySelector('#rocket01 #idCode') as HTMLSpanElement,
    boosterSystem: document.querySelector('#rocket01 #boosterSystem') as HTMLSpanElement,
    maxPower: document.querySelector('#rocket01 #maxPower') as HTMLSpanElement,
    currentPower: document.querySelector('#rocket01 #currentPower') as HTMLSpanElement,
  },
  instance: null
}

const $rocket02 = {
  html: {
    root: document.querySelector('#rocket02') as HTMLDivElement,
    idCode: document.querySelector('#rocket02 #idCode') as HTMLSpanElement,
    boosterSystem: document.querySelector('#rocket02 #boosterSystem') as HTMLSpanElement,
    maxPower: document.querySelector('#rocket02 #maxPower') as HTMLSpanElement,
    currentPower: document.querySelector('#rocket02 #currentPower') as HTMLSpanElement,
  },
  instance: null
}

$rocket01.html.root.addEventListener("click", click)
$rocket02.html.root.addEventListener("click", click)

function createRocket($rocket: iHTMLRocket) {
  $rocket.instance =
    $rocket.html.root.id === "rocket01" ?
    new Rocket("32WESSDS", [10, 30, 80]) :
    new Rocket("LDSFJA32", [30, 40, 50, 50, 30, 10])
}

function create($rocket: iHTMLRocket) {
  createRocket($rocket)
  $rocket.html.idCode.textContent = $rocket.instance.idCode
}

function showBoosterSystem($rocket: iHTMLRocket) {
  $rocket.html.boosterSystem.textContent = $rocket.instance.boosters
  $rocket.html.maxPower.textContent = $rocket.instance.maxPower
}

function stop(e: Event) {
  e.preventDefault()
  e.stopPropagation()
}

function getHTMLRocket($btn: HTMLButtonElement) {
  const $root = $btn.parentElement!.parentElement as HTMLDivElement
  return $root.id === "rocket01" ? $rocket01 : $rocket02
}

// Here $rocket type is "any" because $rocket hasn't an instance of Rocket, yet.
function performAction(action: string, $rocket: any) {
  if (action === "create") create($rocket)
  
  if (!$rocket.instance) return

  if (action === "speedUp") $rocket.instance.speedUp()
    $rocket.html.currentPower.textContent = $rocket.instance.currentPower
  
  if (action === "slowDown") $rocket.instance.slowDown()
    $rocket.html.currentPower.textContent = $rocket.instance.currentPower
  
  if (action === "showData")
    showBoosterSystem($rocket)
}

function click(e: Event) {
  stop(e)
  const $btn = e.target as HTMLButtonElement

  if (!($btn instanceof HTMLButtonElement)) return
  
  performAction($btn.id, getHTMLRocket($btn))
}
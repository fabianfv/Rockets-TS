import { Rocket } from '../models/rocket.js';
const $rocket01 = {
    html: {
        root: document.querySelector('#rocket01'),
        idCode: document.querySelector('#rocket01 #idCode'),
        boosterSystem: document.querySelector('#rocket01 #boosterSystem'),
        maxPower: document.querySelector('#rocket01 #maxPower'),
        currentPower: document.querySelector('#rocket01 #currentPower'),
    },
    instance: null
};
const $rocket02 = {
    html: {
        root: document.querySelector('#rocket02'),
        idCode: document.querySelector('#rocket02 #idCode'),
        boosterSystem: document.querySelector('#rocket02 #boosterSystem'),
        maxPower: document.querySelector('#rocket02 #maxPower'),
        currentPower: document.querySelector('#rocket02 #currentPower'),
    },
    instance: null
};
$rocket01.html.root.addEventListener("click", click);
$rocket02.html.root.addEventListener("click", click);
function createRocket($rocket) {
    $rocket.instance =
        $rocket.html.root.id === "rocket01" ?
            new Rocket("32WESSDS", [10, 30, 80]) :
            new Rocket("LDSFJA32", [30, 40, 50, 50, 30, 10]);
}
function create($rocket) {
    createRocket($rocket);
    $rocket.html.idCode.textContent = $rocket.instance.idCode;
}
function showBoosterSystem($rocket) {
    $rocket.html.boosterSystem.textContent = $rocket.instance.boosters;
    $rocket.html.maxPower.textContent = $rocket.instance.maxPower;
}
function stop(e) {
    e.preventDefault();
    e.stopPropagation();
}
function getHTMLRocket($btn) {
    const $root = $btn.parentElement.parentElement;
    return $root.id === "rocket01" ? $rocket01 : $rocket02;
}
// Here $rocket type is "any" because $rocket hasn't an instance of Rocket, yet.
function performAction(action, $rocket) {
    if (action === "create")
        create($rocket);
    if (!$rocket.instance)
        return;
    if (action === "speedUp")
        $rocket.instance.speedUp();
    $rocket.html.currentPower.textContent = $rocket.instance.currentPower;
    if (action === "slowDown")
        $rocket.instance.slowDown();
    $rocket.html.currentPower.textContent = $rocket.instance.currentPower;
    if (action === "showData")
        showBoosterSystem($rocket);
}
function click(e) {
    stop(e);
    const $btn = e.target;
    if (!($btn instanceof HTMLButtonElement))
        return;
    performAction($btn.id, getHTMLRocket($btn));
}

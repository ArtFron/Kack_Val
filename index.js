const valueInputNode = document.querySelector('.input-number');
const selectorValueNode = document.querySelector('.selector-val');
const outputNode = document.querySelector('.output');


valueInputNode.addEventListener('input',function() {
    const rub = Number(valueInputNode.value);
    const selector = selectorValueNode.value;
    const res = convert(rub, selector);

    outputNode.innerText = res;
})
selectorValueNode.addEventListener('change',function() {
    
    const rub = Number(valueInputNode.value);
    const selector = selectorValueNode.value;
    const res = convert(rub, selector);

    outputNode.innerText = res;
});
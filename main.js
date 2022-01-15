const container = document.querySelector('.container');
window.addEventListener('scroll',()=>{
    const {scrollTop, scrollHeight, clientHeight} = document.documentElement
    console.log(scrollTop,clientHeight,scrollHeight)
    if(scrollTop + clientHeight === scrollHeight)
    {
        console.log('Bas')
        addItems(10)
    }
})
const addItems = (index)=>{
for(let i=0;i<index;i++)
{
    const item = document.createElement('div');
    item.setAttribute('class','item');
    container.appendChild(item)
}
}
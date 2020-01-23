const customerCareLine = document.getElementById('customerCareLine');
const customerCareLink = document.getElementById('customerCareLink');

customerCareLink.addEventListener('mouseover', () => {
  customerCareLine.classList.add('custom-badge');
});

if(customerCareLine.className = 'custom-bage') {
  customerCareLink.addEventListener('mouseout', ()=> {
    customerCareLine.classList.remove('custom-badge');
  })
}
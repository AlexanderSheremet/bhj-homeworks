const progress = document.getElementById('progress');
const form = document.getElementById('form');

const xhr = new XMLHttpRequest();

form.addEventListener('change',event =>{
  xhr.open('POST','https://students.netoservices.ru/nestjs-backend/upload');
  xhr.upload.addEventListener('progress', event=>{
    progress.value = event.loaded / event.total;
  })
  let formData = new FormData();
xhr.send(formData);
event.preventDefault();
})

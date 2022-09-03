const loadNews =async(id)=>{
    const url=`https://openapi.programming-hero.com/api/news/category/${id}`
    const res =await fetch(url)
    const data =await res.json()
    displayNews(data.data)
}

const displayNews =(news)=>{
console.log(news)
console.log('news Length', news.length)


const newsContainer =document.getElementById('news-container')
newsContainer.textContent=''

//news category item
                                                   
const newsField =document.getElementById('news-item-field')
newsField.innerHTML=`
<p class="px-3  fw-semibold">${news.length} Item's founded for this category </p>
`


//no message found
const noNews =document.getElementById('no-found-message')
if(news.length === 0){
noNews.classList.remove('d-none')
toggleSpinner(true)
}
else{
  noNews.classList.add('d-none')
  toggleSpinner(false)
}



news.forEach(mynews => {
    console.log(mynews)

const {title, thumbnail_url,details,total_view,_id}=mynews
const {name,img} =mynews.author
    const newsDiv =document.createElement('div')
    newsDiv.innerHTML =`
    <div class="card mt-3 mx-auto" style="max-width: 800px;">
    <div class="row g-0 ">
    <div class="col-md-4 ">
      <img src="${thumbnail_url}" class="img-fluid rounded-start h-100" alt="...">
    </div>
    <div class="col-md-8" col-sm-4 >
      <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">${details.slice(0,150)}...</p>
        

        <div class="row">
    <div class="col ">
        <div class="row text-left">
            <div class="col-2">
                <img src="${img}" class="  author"  alt="...">
            </div>
            <div class="col-4">
                <p>${name}</p>
                
            </div>
            
            
        </div>
        
    </div>
    <div class="col-4">
        <div class="row">
        <div class="col d-row">
        <p><i class="fa-regular fa-eye"></i> <span>${total_view}</span></p>
    </div>
        

  </div>

      </div>
    </div>
  </div>
  <div class=" "><button onclick="newsDetails('${_id}')" class="btn btn-primary px-3 ms-4" data-bs-toggle="modal" data-bs-target="#exampleModal">See Details</button></div>
  

          </div>

    

    `
    newsContainer.appendChild(newsDiv)
    
  });



}

const newsDetails =async(id)=>{
    const url=` https://openapi.programming-hero.com/api/news/${id}`
    const res =await fetch(url)
    const data =await res.json()
    displayNewsDetails(data.data)
   
}

const displayNewsDetails =(news)=>{
    console.log('mynews',news)

    const modalBody =document.getElementById('modal-body')
    modalBody.innerHTML=`
    
    <div class="card p-2" style="width: 30rem;">
  <img src="${news[0].image_url}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${news[0].title}</h5>
    <p class="card-text">${news[0].details.slice(0,300)}</p>
    
    <div class="row">
    <div class="col col-sm-12">
        <div class="row text-left">
            <div class="col-2">
                <img src="${news[0].author.img}" class="  author"  alt="...">
            </div>
            <div class="col-10" >
                <p>${news[0].author.name ? news[0].author.name :'not found' }</p>
                <p>${news[0].author.published_date}</p>
                <p><i class="fa-regular fa-eye"></i> <span>${news[0].total_view ? news[0].total_view :"Not found"}</span></p>
            </div>
            
            
        </div>
        
    </div>
    <div class="col">
        <div class="row">
        <div class="col ms-4 ps-5">
        
    </div>
        

  </div>

      </div>

  </div>
</div>
    `
}



//categories 

const newsCategories =async()=>{
    const url=` https://openapi.programming-hero.com/api/news/categories`
    const res =await fetch(url)
    const data =await res.json()
    displayCategories(data.data.news_category)
   
}

const displayCategories=(category)=>{
    console.log('category',category)
    
// const{category_name} =category
    category.forEach(newscategory => {
        console.log('newscategory',newscategory)
        
        const categoryNews =document.getElementById('news-category')
        categoryNews.innerHTML=`
        
        <li  class="nav-item px-4">
        <a onclick="loadNews('01')" class="nav-link active  text-primary fw-semibold"  href="#">${category[0].category_name}</a>
      </li>
        <li  class="nav-item px-4">
        <a  onclick="loadNews('02')" class="nav-link active text-primary fw-semibold" href="#">${category[1].category_name}</a>
      </li>
        <li  class="nav-item px-4">
        <a  onclick="loadNews('03')" class="nav-link active text-primary fw-semibold" href="#">${category[2].category_name}</a>
      </li>
        <li  class="nav-item px-4">
        <a  onclick="loadNews('04')" class="nav-link active text-primary fw-semibold" href="#">${category[3].category_name}</a>
      </li>
        <li  class="nav-item px-4">
        <a onclick="loadNews('05')" class="nav-link active text-primary fw-semibold" href="#">${category[4].category_name}</a>
      </li>
        <li  class="nav-item px-4">
        <a onclick="loadNews('06')" class="nav-link active text-primary fw-semibold" href="#">${category[5].category_name}</a>
      </li>
        <li  class="nav-item px-4">
        <a onclick="loadNews('07')" class="nav-link active text-primary fw-semibold" href="#">${category[6].category_name}</a>
      </li>
        <li  class="nav-item px-4">
        <a onclick="loadNews('08')"  class="nav-link active text-primary fw-semibold " href="#">${category[7].category_name}</a>
      </li>
        `
    });
  
   
}
// spinner
const toggleSpinner =isLoading =>{
   
  const loadingSpinner =document.getElementById('spinner')

  if(isLoading){
      loadingSpinner.classList.remove('d-none')
  }
  else{
      loadingSpinner.classList.add('d-none')

  }
}


newsCategories()






loadNews('08');

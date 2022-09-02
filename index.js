const loadNews =async()=>{
    const url=`https://openapi.programming-hero.com/api/news/category/01`
    const res =await fetch(url)
    const data =await res.json()
    displayNews(data.data)
}

const displayNews =(news)=>{
console.log(news)

const newsContainer =document.getElementById('news-container')

news.forEach(mynews => {
    console.log(mynews)

const {title, thumbnail_url,details,total_view}=mynews
const {name,published_date,img} =mynews.author
    const newsDiv =document.createElement('div')
    newsDiv.innerHTML =`
    <div class="card mt-3 mx-auto" style="max-width: 900px;">
    <div class="row g-0 ">
    <div class="col-md-4 ">
      <img src="${thumbnail_url}" class="img-fluid rounded-start h-100" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">${details.slice(0,150)}...</p>
        

        <div class="row">
    <div class="col ">
        <div class="row text-left">
            <div class="col-2">
                <img src="${img}" class="  author"  alt="...">
            </div>
            <div class="col-10">
                <p>${name}</p>
                <p>${published_date}</p>
            </div>
            
            
        </div>
        
    </div>
    <div class="col">
        <div class="row">
        <div class="col d-row">
        <p>Total views: <span>${total_view}</span></p>
    </div>
        

  </div>

      </div>
    </div>
  </div>
  <div class="text-center "><button onclick="newsDetails()" class="btn btn-warning px-5">Details</button></div>
  

          </div>

    

    `
    newsContainer.appendChild(newsDiv)
    
    
});

}

loadNews('');
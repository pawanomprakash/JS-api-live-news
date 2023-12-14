
//creating an arry to store the articles
let arr=[]

// Progression 1: create a function and fetch the api using axios
// https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=010022c35f92f79ffc52b49086538c09
function getData(){
  const blog=document.getElementById("blog")

  axios
  .get('https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=010022c35f92f79ffc52b49086538c09')
  .then((res)=>{
    const data=res.data;
    console.log(data)
    const listOfArticles=res.data.articles;
    console.log(listOfArticles);
    listOfArticles.forEach((article)=>{
      const getArticle=document.createElement('div');
      getArticle.setAttribute('id','article');
      getArticle.setAttribute('class','article');

      const title=document.createElement('h3');
      const content=document.createElement('p');
      const img=document.createElement('img');

      title.innerText=article.title;
      content.innerText=article.content;
      img.setAttribute('src',article.image);

      getArticle.append(title);
      getArticle.append(img);
      getArticle.append(content);

      arr.push(getArticle);
    });
    arr.forEach((item)=>{
      blog.append(item);
    });
  })

}
getData()
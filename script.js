
//1: button ar color remove korar function
const removeActive = () =>{
  const lessonBtn = document.querySelectorAll('.lesson-btns');
  // console.log(lessonBtn);
  lessonBtn.forEach(btn => btn.classList.remove('active'));
}

//abr jabo jekhane btn click korle data load hoa oi jaigai...


/**************************SPPINING add korar function (start)*********************** */

const manageSpinner = (status) =>{
    if(status ==true){
        document.getElementById('spinner').classList.remove("hidden");
        document.getElementById('post-container-div').classList.add("hidden");
    }
    else{
        document.getElementById('spinner').classList.add("hidden");
        document.getElementById('post-container-div').classList.remove("hidden");
    }

}


/**************************SPPINING add korar function (end)*********************** */



//(category)button gulu te a click korle ja hobe tar code
const loadLevelWord =(id) => {

  // console.log(id);
   /*********spinning function call (start)********** */
  manageSpinner(true);
  /*********spinning function call (end)********** */
   const url = `https://openapi.programming-hero.com/api/category/${id}`;
  //  console.log(url);
  fetch(url)
  .then(response => response.json())
.then(data => {
  // btn click korle then data load suru hole..sob btn theke jeno "active" remove hoa jai...tar jonno remove korar function ti call korbo
  removeActive(); //sob button theke color chole gelo

  //then je button aa click kore ci tar moddhe "active" class ti add kore dibo jeno ai button ar moddhe color add hoa jai
  const clickBtn = document.getElementById(`lesson-btn-${id}`) ;
  clickBtn.classList.add('active');
  
  
  displayLevelWord(data.plants)})
}
// loadLevelWord();

//loadLevelWord() ar value ai function aa asbe
const displayLevelWord = (words) => {
  console.log(words);

  //step:1 get container 
  const btnClickedContainer = document.getElementById('post-container-div');
  btnClickedContainer.innerHTML = "";

  //loop:
  words.forEach(word => {
    console.log(word);

    //step:2 creat element:
    const newDiv = document.createElement('div');
    newDiv.innerHTML =`
    <div class="flex flex-col bg-white max-w-[300px] h-[315px] rounded-[8px]  items-center">
          
          <img class="rounded-[8px] h-[100px] w-[100%]  object-cover" src="${word.image}" alt="">
          
          <div class="text-left flex-grow p-[7px] ">
            <div class="mt-[5px]">
              <h1 class="mb-[5px] font-semibold text-[12px]">${word.name}</h1>
            <p class="mb-[13px] font-normal text-[11px]">${word.description}</p>
            </div>

            <div class=" ">
              <div class="flex justify-between mb-[12px] flex-grow">
              <h2><span class="py-[3px] px-[7px]  rounded-[400px] text-[14px] font-medium text-[#15803D] bg-[#DCFCE7]">${word.category}</span></h2>
              <p><span class="font-semibold text-[14px]"><i class="fa-solid fa-bangladeshi-taka-sign icon"></i>${word.price}</span></p>
            </div>

            <div class=" ">
<button onclick="history('${word.name}', '${word.price}')" class="font-medium text-[16px] w-[100%] rounded-[999px] bg-[#15803D] py-[5px] text-white">Add to Cart</button>
            </div>
            </div>
          </div>
        </div>
    
    `;
   
    //append child
    btnClickedContainer.appendChild(newDiv);
     /*********spinning function call (start)********** */
  manageSpinner(false);
  /*********spinning function call (end)********** */
    // return;


    

  })

}


  
 //total price add korar code
    // let totalPrice = 0;
    //  //total price adding ar kaj:
    //   const itemPrice = parseFloat(daam); //convert to num

    //   totalPrice = totalPrice + itemPrice;

//making adding function
    function history(name, daam){
      // console.log(name, daam);

     

      //get container
      const historyContainer = document.getElementById('adding-tress-details');
      // historyContainer.innerHTML = "";

      //create div
      const createDiv = document.createElement('div');
      createDiv.innerHTML = `
        <div id="name-price-div">
        <div  class="flex justify-between rounded-[8px] items-center border-2 bg-[#F0FDF4]"> 
        <div class="text-div">
            <h1 class="text-left font-semibold text-[14px]">${name}</h1>
          <h2 class="text-left font-normal text-[16px]"><i class="fa-solid fa-bangladeshi-taka-sign icon"></i>${daam}</h2>
        </div>

          <div class="btn-div">
            <button class="remove-item-btn"><i class="fa-solid fa-xmark icon-color"></i></button>
          </div>
       </div> 
       </div>

       
      
      `;
      const removeItemBtn = createDiv.querySelector('.remove-item-btn');

      removeItemBtn.addEventListener('click', function(){

        //total price ar code(-ve) value send:
        const itemPrice = parseFloat(daam);
        updateTotalPrice(-itemPrice);

        //div remove
        this.parentNode.parentNode.remove();
      })
      //append
      historyContainer.appendChild(createDiv);


      //total price ar code (add korar value) send:
      const itemPrice =parseFloat(daam);
      updateTotalPrice(itemPrice);


    }

   //total price ar function
   let totalAmount = 0;

   function updateTotalPrice(priceChange){
    totalAmount = totalAmount + priceChange;

    const totalDisplay = document.getElementById('total-price-display');

    if(totalAmount > 0){
      totalDisplay.textContent = `Total:${totalAmount.toFixed(2)}`
    }
    else{
      totalDisplay.textContent = '';
    }
   }




    



//1:button show korlam by default..
//left side function
const loadLessons = () =>{
fetch("https://openapi.programming-hero.com/api/categories")
.then(response => response.json())
.then(json =>  displayLesson(json.categories)); 
}


//make new function to "display" the array of function...by default button dekhar code
const displayLesson = (lesson) =>{
//step:1 get the "parent-container" [empty kore nite hobe]
const levelContainer = document.getElementById('level-container');
levelContainer.innerHTML = "";

// step:2 loop
for(let eachLesson of lesson){
// console.log(eachLesson); 
// //out: {id: 1, category_name: 'Fruit Tree', small_description: 'Trees that bear edible fruits like mango, guava, and jackfruit.'}


//step:3 create element
const btnDiv = document.createElement("div");
btnDiv.innerHTML = `
<button id="lesson-btn-${eachLesson.id}" onclick= "loadLevelWord(${eachLesson.id})" class="lesson-btns w-[100%] text-left  py-[12px] pl-[6px]  hover:bg-[#3ca461] hover:text-white  font-semibold text-[20px] rounded-[6px]">${eachLesson.category_name}</button>
`;
// console.log(btnDiv);


//step:4 append into container
levelContainer.appendChild(btnDiv);
}
}


loadLessons();


//2: card show korlam by default
const loadPost = () => {



// const url =  "https://openapi.programming-hero.com/api/plants";
fetch(url)  
.then(response => response.json())
.then(data => displayPost(data.plants))

//out: 0
// : 
// {id: 1, image: 'https://i.ibb.co.com/cSQdg7tf/mango-min.jpg', name: 'Mango Tree', description: 'A fast-growing tropical tree that produces delicio…s sweet fruits are rich in vitamins and minerals.', category: 'Fruit Tree', …}

//make child function of loadPost:
const displayPost = (posts) => {  
  //  console.log(posts);
    //step:1 get the container:
    const postContainer = document.getElementById('post-container-div');
    postContainer.innerHTML = "";

    //step:loop making
   posts.forEach(post =>{
    // console.log(post);

    //step:2 CREATE  an element (div)..where i store the data...[step:2 forEach() ar  vitore kora hocce jeno...each loop hoa je data ta asbe seta add hoa jabe]
        const postCard = document.createElement('div');
        postCard.innerHTML = `
         <div class="flex flex-col bg-white max-w-[300px] h-[315px] rounded-[8px]  items-center">
          
          <img class="rounded-[8px] h-[100px] w-[100%]  object-cover" src="${post.image}" alt="">
          
          <div class="text-left flex-grow p-[7px] ">
            <div class="mt-[5px]">
              <h1 class="mb-[5px] font-semibold text-[12px]">${post.name}</h1>
            <p class="mb-[13px] font-normal text-[11px]">${post.description}</p>
            </div>

            <div class=" ">
              <div class="flex justify-between mb-[12px] flex-grow">
              <h2><span class="py-[3px] px-[7px]  rounded-[400px] text-[14px] font-medium text-[#15803D] bg-[#DCFCE7]">${post.category}</span></h2>
              <p><span class="font-semibold text-[14px]"><i class="fa-solid fa-bangladeshi-taka-sign icon"></i>${post.price}</span></p>
            </div>

            <div class=" ">
              <button   class="font-medium text-[16px] w-[100%] rounded-[999px] bg-[#15803D] py-[5px] text-white">Add to Cart</button>
            </div>
            </div>
          </div>
        </div>
        `;
    // console.log(postCard);
        //step:3 [add to the container]
        
        postContainer.appendChild(postCard);


   } );
   
}



}
loadPost();
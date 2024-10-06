// step 1 will create this
// for step 8 we are going to add a parameter status
// step 10 take another parameter  searchText
const loadAllPhones = async(status, searchText) => {
    console.log(searchText); 
    document.getElementById('spinner').style.display = 'none';

        // step 13 ternary operator use korte hobe karon brand name thakle truthy or falsy 
        const url = `https://openapi.programming-hero.com/api/phones?search=${searchText?searchText:'iphone'}`;
        const res = await fetch(url);
        const data = await res.json(); 
        console.log(data);
        


        // step 6 add slice to show 1-6 phones not 15
        //  then step 10
        // step 20 eta ke ekhan the niye if else ta displayallphones er bhitor korte hobe
        if(status == true){
            displayAllPhones(data.data);
        }
        else{
            displayAllPhones(data.data.slice(0,6));
        }
        // displayAllPhones(data.data.slice(0,6) ekhane first e thakbe.
        
};


// step 5 making another function to display
const displayAllPhones = (phones) => {




    






    // step 19
    document.getElementById('phones-container').innerHTML = "";

    // step 8 if someone press yes remove slice and show all 15
    // step 14 lets get the ui
    const phoneContainer = document.getElementById('phones-container');
    phones.forEach(phone =>{
        // step 15 destructuring
        const {brand, image, slug} = phone;
        // console.log(phone);
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="card bg-base-100 w-96 shadow-xl mt-5">
            <figure class="px-10 pt-10">
                <img
                src="${image}"
                alt="Shoes"
                class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">${brand}</h2>
                <p>${slug}</p>
                <div class="card-actions">

                <button onclick="phoneDetails('${slug}')" class="btn btn-primary">Show Details</button>
                </div>
            </div>
            </div>
        `;
        phoneContainer.appendChild(div);
    });
}



// step add handleShowAll() function
const handleShowAll = () =>{
    // step 9  call loadphones here again then add true
    loadAllPhones(true);
}



// step 2 will create this
const handleSearch = () => {

    document.getElementById('spinner').style.display = 'block';
    // step 12
    const searchText = document.getElementById('search-box').value;

    // step 3 will call this
    setTimeout(function() {
        // step 11 add false karon keo age chaile 6 ta chabe then input field er value step 12 ke anba 
        loadAllPhones(false, searchText);
    }, 2000);
}


// step 16 phone details
const phoneDetails = async(slugs) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/phone/${slugs}`);
    const data = await response.json();
    console.log(data.data);
    // step 18 destructuring 
    const {brand, image, slug} = data.data;

    // step17
    const modalContainer = document.getElementById('modal-container');
    modalContainer.innerHTML = `
            <dialog id="my_modal_1" class="modal">
                <div class="modal-box flex flex-col justify-center items-center">
                    <h3 class="text-lg font-bold">${brand}</h3>
                    <img class="w-2/5" src="${image}"/>
                    <p class="py-4">${slug}</p>
                    <div class="modal-action">
                    <form method="dialog">
                        <!-- if there is a button in form, it will close the modal -->
                        <button class="btn">Close</button>
                    </form>
                    </div>
                </div>
            </dialog>
    `
    // step 16 show modal
    my_modal_1.showModal();

}








// step 4 will do this to show globally
// step 14 false diba and iphone
loadAllPhones(false, 'iphone');





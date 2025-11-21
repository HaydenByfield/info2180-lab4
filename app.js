window.onload = function(){
    const searchBtn = document.querySelector('.searchBtn');
    

    searchBtn.addEventListener('click', (element)=> {
        element.preventDefault();

        request = new XMLHttpRequest;

        let phpFile = "superheroes.php";
        request.onload = main;
        request.open('GET', phpFile);
        request.send();
    });
    function main(){
        if(request.readyState === XMLHttpRequest.DONE && request.status === 200){
            let response = request.responseText;
            const list = document.querySelector('#list');
            list.innerHTML = response;
            alert(response);
        } 
    }   
}
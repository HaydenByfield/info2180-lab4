window.onload = function(){
    const searchBtn = document.querySelector('.searchBtn');
    const hero = document.getElementById('heroes')
    const list = document.querySelector('#list');

    searchBtn.addEventListener('click', (element)=> {
        element.preventDefault();
        let query = hero.value.trim();
        query = encodeURIComponent(query);

        const request = new XMLHttpRequest;
        let phpFile = "superheroes.php";

        if(query !== ''){
            phpFile += '?query=' + query;
        }
        request.onreadystatechange = function(){
            if(request.readyState === XMLHttpRequest.DONE && request.status === 200){
                let response = request.responseText
                list.innerHTML = response;
                response.style.color = "red";
                alert(response);
            } 
        }
        request.open('GET', phpFile, true);
        request.send();
    });

};
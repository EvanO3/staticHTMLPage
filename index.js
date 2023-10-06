const SearchLink = document.getElementById('searchLink');
const searchBar = document.getElementById('SearchBar')


SearchLink.addEventListener('click', function(event){
    event.preventDefault();


    if(searchBar.style.display === 'none' || searchBar.style.display ===''){
        searchBar.style.display="block"
    }else{
        searchBar.style.display='none'
    }
})
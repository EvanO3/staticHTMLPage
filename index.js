/** This function selects the input and the search elemnent puts a listener
 * so when clicked the form should appear and when not clicked the form should
 * have no style
 */
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
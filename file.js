

// hiding the filter menu
function showFilter() {
    const filterMenu = document.getElementById('filterContent');
    const articleForm = document.getElementById('newContent');

    // Showing filter and  Add form is hidden
    filterMenu.style.display = "block";
    articleForm.style.display = "none";
}

// Function to show/hide the Add New Article Form
function showAddNew() {
    const filterMenu = document.getElementById('filterContent');
    const articleForm = document.getElementById('newContent');


    articleForm.style.display = "flex"; 
    filterMenu.style.display = "none";
}

// checkbox filtering logic
function filterArticles() {
    const showOpinion = document.getElementById('opinionCheckbox').checked;
    const showRecipe = document.getElementById('recipeCheckbox').checked;
    const showUpdate = document.getElementById('updateCheckbox').checked;

    const articles = document.querySelectorAll('#articleList article');

    articles.forEach(article => {
        if (article.classList.contains('opinion')) {
            article.style.display = showOpinion ? "block" : "none";
        } else if (article.classList.contains('recipe')) {
            article.style.display = showRecipe ? "block" : "none";
        } else if (article.classList.contains('update')) {
            article.style.display = showUpdate ? "block" : "none";
        }
    });
}


//When the user enters a new article and presses "Add New Article", 
//the content appears in the list with the correct styles.

function addNewArticle() {
    
    const title = document.getElementById('inputHeader').value;
    const text = document.getElementById('inputArticle').value;
    
    let type = "";
    let cssClass = "";

    if (document.getElementById('opinionRadio').checked) {
        type = "Opinion";
        cssClass = "opinion";
    } else if (document.getElementById('recipeRadio').checked) {
        type = "Recipe";
        cssClass = "recipe";
    } else if (document.getElementById('lifeRadio').checked) {
        type = "Life Update"; 
        cssClass = "update";   
    }

    if (title === "" || text === "" || type === "") {
        alert("Please fill out all fields and select a type!");
        return;
    }

    const newArticle = document.createElement('article');
    newArticle.classList.add(cssClass);

    newArticle.innerHTML = `
        <span class="marker">${type}</span>
        <h2>${title}</h2>
        <p>${text}</p>
        <p><a href="moreDetails.html">Read more...</a></p>
    `;

    const articleList = document.getElementById('articleList');
    articleList.prepend(newArticle); 

    document.getElementById('newContent').reset();
    document.getElementById('newContent').style.display = "none";
}
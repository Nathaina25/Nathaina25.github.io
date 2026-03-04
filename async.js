const cache = {}; 

document.getElementById('searchBtn').addEventListener('click', async () => {
    const query = document.getElementById('pokemonInput').value.toLowerCase().trim();
    if (!query) return;

    if (cache[query]) {
        displayPokemon(cache[query]);
    } else {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`);
            if (!response.ok) throw new Error("Not found");
            const data = await response.json();
            
            cache[query] = data;
            displayPokemon(data);
        } catch (error) {
            alert("Pokemon not found!");
        }
    }
});

function displayPokemon(data) {
    document.getElementById('moveSelectors').style.display = 'block';
    document.getElementById('pokeName').innerText = data.name.toUpperCase();

    const imgContainer = document.getElementById('imageContainer');
    imgContainer.innerHTML = `<img src="${data.sprites.front_default}" alt="${data.name}">`;


    const audioContainer = document.getElementById('audioContainer');
    const cryUrl = data.cries ? data.cries.latest : '';
    audioContainer.innerHTML = cryUrl ? `<audio controls src="${cryUrl}"></audio>` : '';


    const moves = data.moves.map(m => m.move.name);
    const selectors = ['move1', 'move2', 'move3', 'move4'];

    selectors.forEach(id => {
        const select = document.getElementById(id);
        select.innerHTML = ''; 
        moves.forEach(moveName => {
            const option = document.createElement('option');
            option.value = moveName;
            option.textContent = moveName;
            select.appendChild(option);
        });
    });
}


document.getElementById('addToTeamBtn').addEventListener('click', () => {
    const teamList = document.getElementById('teamList');
    const name = document.getElementById('pokeName').innerText;
    
    const move1 = document.getElementById('move1').value;
    const move2 = document.getElementById('move2').value;
    const move3 = document.getElementById('move3').value;
    const move4 = document.getElementById('move4').value;

    const listItem = document.createElement('li');
    listItem.style.margin = "10px 0";
    listItem.style.listStyle = "none";
    listItem.style.borderBottom = "1px solid #ddd";
    listItem.style.paddingBottom = "5px";
    
    listItem.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center;">
            <div>
                <strong>${name}</strong><br>
                <small>${move1}, ${move2}, ${move3}, ${move4}</small>
            </div>
            <button class="remove-btn" style="background: #ff4444; color: white; border: none; border-radius: 4px; padding: 2px 8px; cursor: pointer;">X</button>
        </div>
    `;

  
    listItem.querySelector('.remove-btn').addEventListener('click', () => {
        listItem.remove();
    });

    teamList.appendChild(listItem);
});
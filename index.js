
const APIURL = "https://api.github.com/users/";

const profileContainer = document.getElementById('Github-profile');
const form = document.getElementById('form');
const searchBar = document.getElementById('searchBar');

async function getGitHubProfile(username){
    const resp = await fetch(APIURL+username);
    const respData = await resp.json();
    showGitHubProfile(respData);
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    getGitHubProfile(searchBar.value)
})

function showGitHubProfile(profile){
    profileContainer.innerHTML = "";
    const profileInfo = document.createElement('div');
    profileInfo.innerHTML = `     
    <img id ="avatar" src="${profile.avatar_url}" alt="">
    <div class="profile-info">
        <h1>${profile.login}</h1>
        <p>${profile.bio}</p>
        <ul class="following">
            <li>${profile.followers} <span>Followers</span></li>
            <li>${profile.following} <span>Following</span></li>
            <li>${profile.public_repos} <span>Repos</span></li>
        </ul>
        <span>Repos:</span>
    </div>`;
    profileContainer.appendChild(profileInfo);
}

getGitHubProfile("JayantGoel001");
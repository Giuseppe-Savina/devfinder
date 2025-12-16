// Elements
const input = document.getElementById("username-input");
const btn = document.getElementById("search-btn");
const card = document.getElementById("result");
const errorBox = document.getElementById("error");

// Card elements
const avatar = document.getElementById("avatar");
const nameEl = document.getElementById("name");
const bio = document.getElementById("bio");
const repos = document.getElementById("repos");
const followers = document.getElementById("followers");
const following = document.getElementById("following");
const link = document.getElementById("profile-link");

// Utils
function showError(message) {
  errorBox.textContent = message;
  errorBox.classList.remove("hidden");
  card.classList.add("hidden");
}

function clearError() {
  errorBox.classList.add("hidden");
}

// Fetch GitHub user
async function fetchUser(username) {
  try {
    clearError();
    btn.disabled = true;
    btn.textContent = "Caricamento...";

    const res = await fetch(`https://api.github.com/users/${username}`);

    if (!res.ok) {
      throw new Error("Utente non trovato");
    }

    const data = await res.json();

    avatar.src = data.avatar_url;
    avatar.alt = data.login;

    nameEl.textContent = data.name || data.login;
    bio.textContent = data.bio || "Nessuna bio disponibile";

    repos.textContent = data.public_repos;
    followers.textContent = data.followers;
    following.textContent = data.following;

    link.href = data.html_url;
    link.textContent = "Profilo GitHub";

    card.classList.remove("hidden");
  } catch (err) {
    showError(err.message);
  } finally {
    btn.disabled = false;
    btn.textContent = "Cerca";
  }
}

// Click search
btn.addEventListener("click", () => {
  const username = input.value.trim();
  if (!username) {
    showError("Inserisci uno username");
    return;
  }
  fetchUser(username);
});

// Enter key
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    btn.click();
  }
});

// Dark mode (opzionale)
const themeBtn = document.getElementById("theme-toggle");
if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
}




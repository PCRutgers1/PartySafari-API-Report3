const button = document.getElementById("checkoutButton");
button.addEventListener("click", () => {
    fetch("http://localhost:5500/create-checkout-session", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            items: 
                {transaction_id: '93d995d6-e9c5-4245-992c-1a92069b7f8e'} 
        }),
    })
    .then( response => {
        if (response.ok) return response.json();
        return response.json().then(json => Promise.reject(json));
    })
    .then(({url}) => {
        window.location = url;
    })
    .catch(error => {
        console.error(error.error);
    })
});
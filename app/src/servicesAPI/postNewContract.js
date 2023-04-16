export default async function postNewContract(escrow, setSection) {
    const headersList = {
        "Accept": "*/*",
        "Content-Type": "application/json"
    }

    const bodyContent = JSON.stringify(escrow);
       
    const response = await fetch("http://localhost:3003/contracts", { 
        method: "POST",
        headers: headersList,
        body: bodyContent,
    });
       
    const data = await response.text();
    if (data) {
        setSection("Waiting")
    }
}
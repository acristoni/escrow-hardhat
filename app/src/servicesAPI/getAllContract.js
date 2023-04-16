export default async function getAllContract() {
    const headersList = {
        "Accept": "*/*",
        "Content-Type": "application/json"
    }
       
    const response = await fetch("http://localhost:3003/contracts", { 
        method: "GET",
        headers: headersList,
    });
       
    const data = await response.text();
    return JSON.parse(data);
}
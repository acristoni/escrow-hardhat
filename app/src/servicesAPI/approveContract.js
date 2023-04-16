export default async function approveContract(contract, setSection) {
    const headersList = {
        "Accept": "*/*",
        "Content-Type": "application/json"
    }

    const bodyContent = JSON.stringify({ ...contract, approved: true });
       
    const response = await fetch(`http://localhost:3003/contracts/${contract.id}`, { 
        method: "PUT",
        headers: headersList,
        body: bodyContent,
    });
       
    const data = await response.text();
    if (data) {
        setSection("Approved")
    }
}
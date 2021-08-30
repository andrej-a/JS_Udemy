export const postData = async (url, method, targetBody) => { //async-await function

    const result = await fetch(url, { //works async
        method: method,
        headers: {
            "Content-type": "application/json"
        },
        body: targetBody
    });

    return await result.json();
};

export const getItemsFromServer = async (url) => {     //use async ff for get data
    const data = await fetch(url);
        
    if (!data.ok) {
            throw new Error(`Could not fetch ${url}, status ${data.status}`);
        }

    return await data.json();
};
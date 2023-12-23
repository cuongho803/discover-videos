import {Magic} from "@magic-sdk/admin";

export const magicAdmin = new Magic(process.env.MAGIC_SERVER_KEY); // ✨

export const addAllowDomain = async (domain) => {
    const targetClientId = process.env.MAGIC_CLIENT_ID;
    const headers = {
        'X-Magic-Secret-Key': process.env.MAGIC_SERVER_KEY,
        'Content-Type': 'application/json'
    }
    const postData = {
        'target_client_id': targetClientId,
        'domain': domain
    }
    const baseUrl = 'https://api.magic.link';
    /* const magicAdmin = new Magic(process.env.MAGIC_SERVER_KEY);*/
    const res = await fetch(baseUrl + '/v1/api/magic_client/domain/allowlist/add', {
        headers,
        method: 'POST',
        body: JSON.stringify(postData),
    })
    const json = await res.json()
    if (json.errors) {
        console.error(json.errors)
        throw new Error('Failed to fetch API')
    }
    const domainList = await getAllowDomains();
    console.log({
            "Domain": domain,
            "targetClientId": targetClientId,
            "apiKey": process.env.MAGIC_SERVER_KEY,
            "postData": postData,
            "domainList": domainList,
            "json": json
        }
    )
    return domainList;
}
export const getAllowDomains = async () => {
    const targetClientId = process.env.MAGIC_CLIENT_ID;
    const headers = {
        'X-Magic-Secret-Key': process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_API_KEY,
        'Content-Type': 'application/json',
        'data-raw': {
            'target_client_id': targetClientId
        }
    }
    const magicAdmin = new Magic(process.env.MAGIC_SERVER_KEY);
    const res = await fetch(magicAdmin.apiBaseUrl + '/v1/api/magic_client/domain/allowlist', {
        headers,
        method: 'POST',
        body: JSON.stringify({}),
    })
    const json = await res.json()
    if (json.errors) {
        console.error(json.errors)
        throw new Error('Failed to fetch API')
    }
    return json.data
}
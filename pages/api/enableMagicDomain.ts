// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import {magicAdmin, addAllowDomain, getAllowDomains} from '@/lib/magic';
import {bool} from "prop-types";

type Data = {
    done: boolean
}
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    try {
        /*        curl --location --request POST 'https://api.magic.link/v1/api/magic_client/domain/allowlist/remove' \
        --header 'X-Magic-Secret-Key: sk_live_06FC010DA25ED4F2' \
        --header 'Content-Type: application/json' \
        --data-raw '{
                "target_client_id": "etjubJsY5Cvn6ukDzJYpd3MEAtgw45oetxxoX1PxvP4=",
                    "domain": "https://magic.link"
            }'*/
        await addAllowDomain('https://discover-videos.local');
        res.status(200).json({done: true})
    } catch (e) {
        console.error("Something went wrong logging in", e);
        res.status(500).send({done: false});
    }

}




import Moralis from 'moralis';

const config = {
    domain: process.env.APP_DOMAIN,
    statement: 'Please sign this message to confirm your identity.',
    uri: process.env.NEXTAUTH_URL,
    timeout: 60,
};

export default async function handler(req, res) {

    const { address, chain, network } = req.body;

    await Moralis.start({ apiKey: process.env.MORALIS_API_KEY });
    try {
        // This line cause Error : AxiosError: timeout of 10000ms exceeded
        const message = await Moralis.Auth.requestMessage({
            address,
            chain,
            network,
            ...config,
        });
        console.log(message)
        res.status(200).json(message);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error });
    }
}



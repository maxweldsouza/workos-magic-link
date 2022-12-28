import WorkOS from '@workos-inc/node';

const workos = new WorkOS(process.env.WORKOS_API_KEY);

export default async (req, res) => {
    if (req.method !== 'POST') return res.status(405)
    try {
        const session = await workos.passwordless.createSession({
            email: req.body.email,
            type: 'MagicLink',
            redirectURI: process.env.REDIRECT_URI
        });

        res.json({
            redirect: `/check-email?link=${session.link}`
        });

    } catch (e) {
        return res.status(500).json(e)
    }
};

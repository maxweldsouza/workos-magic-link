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

        await workos.passwordless.sendSession(session.id)
        res.json({
            redirect: `/check-email`
        });

    } catch (e) {
        return res.status(500).json(e)
    }
};

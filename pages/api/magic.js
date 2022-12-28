import WorkOS from '@workos-inc/node';

const workos = new WorkOS(process.env.WORKOS_API_KEY);

export default async (req, res) => {
    if (req.method !== 'POST') return res.status(405)
    console.log('req.body.email', req.body.email)

    const session = await workos.passwordless.createSession({
        email: req.body.email,
        type: 'MagicLink',
        redirectURI: `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/callback`
    });

    res.json({
        redirect: `/check-email?link=${session.link}`
    });
};

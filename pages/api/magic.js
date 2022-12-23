import WorkOS from '@workos-inc/node';

const workos = new WorkOS(process.env.WORKOS_API_KEY);

export default async (req, res) => {
    // Email of the user to authenticate
    const email = 'email@example.com';

    const session = await workos.passwordless.createSession({
        email,
        type: 'MagicLink',
    });

    console.log(session.link)

    // Finally, redirect to a "Check your email" page
    res.redirect(307, '/check-email');
};

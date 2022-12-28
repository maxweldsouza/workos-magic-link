import WorkOS from '@workos-inc/node';

const workos = new WorkOS(process.env.WORKOS_API_KEY);
const clientID = process.env.WORKOS_CLIENT_ID;

export default async (req, res) => {
    const { code } = req.query;

    const { profile } = await workos.sso.getProfileAndToken({
        code,
        clientID,
    });

    // Use the information in `profile` for further business logic.

    if (profile) {
        return res.json(profile);
    }

    if (req.query.error) {
        return req.json({
            error: req.query.error,
            error_description: req.query.error_description
        })
    }
};

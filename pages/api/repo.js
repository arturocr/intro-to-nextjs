const handler = async (req, res) => {
  const { url } = req;
  const { searchParams } = new URL(url, 'http://localhost/');
  const repoId = searchParams.get('id');

  if (!repoId) {
    return res.status(400).send('No repo ID provided');
  }

  try {
    const resp = await fetch(`https://api.github.com/repos/${repoId}`, {
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
        'Content-Type': 'application/json',
      },
      method: 'GET',
    });
    const repoInfo = await resp.json();

    const {
      name,
      full_name,
      stargazers_count,
      forks_count,
      watchers_count,
    } = repoInfo;
    return res
      .status(200)
      .json({ name, full_name, stargazers_count, forks_count, watchers_count });
  } catch (err) {
    console.err(err);
    return res.status(400).send(err);
  }
};

export default handler;

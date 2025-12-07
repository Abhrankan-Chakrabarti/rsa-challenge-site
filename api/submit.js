export default {
  async fetch(request, env) {
    try {
      const data = await request.json();

      await fetch(
        "https://api.github.com/repos/Abhrankan-Chakrabarti/rsa-challenge-site/dispatches",
        {
          method: "POST",
          headers: {
            "Accept": "application/vnd.github+json",
            "Authorization": `Bearer ${env.GITHUB_TOKEN}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            event_type: "rsa-submit",
            client_payload: data
          })
        }
      );

      return new Response(JSON.stringify({ ok: true }), {
        headers: { "content-type": "application/json" }
      });

    } catch (e) {
      return new Response(JSON.stringify({ error: e.toString() }), {
        status: 400,
        headers: { "content-type": "application/json" }
      });
    }
  }
};

import { f as fetchReadme } from '../../chunks/github_pDlrVI0-.mjs';
export { renderers } from '../../renderers.mjs';

const POST = async ({
  request
}) => {
  try {
    const body = await request.json();
    const {
      owner,
      repo
    } = body;
    if (!owner || !repo) {
      return new Response(JSON.stringify({
        error: "Missing owner or repo"
      }), {
        status: 400,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }
    try {
      await fetchReadme({
        owner,
        repo
      });
      return new Response(JSON.stringify({
        valid: true
      }), {
        status: 200,
        headers: {
          "Content-Type": "application/json"
        }
      });
    } catch (error) {
      return new Response(JSON.stringify({
        error: "Repository not found or private"
      }), {
        status: 404,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }
  } catch (e) {
    return new Response(JSON.stringify({
      error: "Invalid request body"
    }), {
      status: 400,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

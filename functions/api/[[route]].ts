import { handlePagesFormRequest, PagesEnv } from "../_shared/handler";

export const onRequestPost = async (context: { request: Request; env: PagesEnv }) => {
  const url = new URL(context.request.url);
  const path = url.pathname.replace(/\/+$/, "");

  if (path === "/api/contact") {
    return handlePagesFormRequest("contact", context.request, context.env);
  }
  if (path === "/api/consultation") {
    return handlePagesFormRequest("consultation", context.request, context.env);
  }
  if (path === "/api/careers") {
    return handlePagesFormRequest("careers", context.request, context.env);
  }

  return new Response(JSON.stringify({ success: false, message: "Not found" }), {
    status: 404,
    headers: { "Content-Type": "application/json" },
  });
};
